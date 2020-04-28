<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\StoreRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\RequisitionDetailRepository;
use App\Validators\RequisitionDetailValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use Excel;
use DB;

class RequisitionDetailController extends ApiBaseController
{
    protected $requisitionDetailRepository;

    protected $requisitionDetailValidator;

    protected $storeRepository;

    protected $inventorySetupCheckerController;

    public function __construct(RequisitionDetailRepository $requisitionDetailRepository,
                                RequisitionDetailValidator $requisitionDetailValidator,
                                StoreRepository $storeRepository,
                                InventorySetupCheckerController $inventorySetupCheckerController)
    {
        $this->requisitionDetailRepository = $requisitionDetailRepository;
        $this->requisitionDetailValidator = $requisitionDetailValidator;
        $this->storeRepository = $storeRepository;
        $this->inventorySetupCheckerController = $inventorySetupCheckerController;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
//         try{
        if ($request->get_requisition == 'received') {
            $to_store = $this->storeRepository
                ->findWhere(['type' => 'HO'])->first()->id;
        } else {
            $to_store = '*';
        }
        if ($request->from_store != null || $request->from_store != '') {
            $from_store = $request->from_store;
        } else {
            $from_store = '*';
        }
        $limit = $request->limit != null ? $request->limit : 20;
        $indent_date = '*';
        $indent_no = '*';
        $date_from = date('Y-m-d', strtotime('yesterday'));
        $date_to = date('Y-m-d');
        if ($request->pending == true || $request->pending == 'true') {
            $allDetails = $this->requisitionDetailRepository
                ->with(['requisitionItemDetails',
                    'requisitionItemDetails.item',
                    'requisitionItemDetails.item.unit',
                    'fromStore', 'toStore'])
                ->orderBy('id', 'desc')
                ->findWhere(['approve_date' => ['approve_date', '=', null],
                    'paginate' => $limit]);
            if ($allDetails->first() == null) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allDetails->toArray());
        }
        if ($request->filterGroups) {
            foreach ($request->filterGroups as $filterGroup) {
                if ($filterGroup['field'] == 'indent_no') {
                    $indent_no = ['indent_no', 'LIKE', '%' . $filterGroup['filters'][0]['value'] . '%'];
                } elseif ($filterGroup['field'] == 'from_store_name') {
                    $from_store = $filterGroup['filters'][0]['value'];
                } elseif ($filterGroup['field'] == 'to_store_name') {
                    $to_store = $filterGroup['filters'][0]['value'];
                } elseif ($filterGroup['field'] == 'indent_date') {
                    $date_from = \DateTime::createFromFormat('D M d Y H:i:s e+', $filterGroup['filters'][0]['value'])
                        ->format('Y-m-d 00:00:00');
                    $date_to = \DateTime::createFromFormat('D M d Y H:i:s e+', $filterGroup['filters'][1]['value'])
                        ->format('Y-m-d 23:59:59');
                    $indent_date = [$date_from, '<>', $date_to];
                } else {

                }
            }
        }
        $allDetails = $this->requisitionDetailRepository
            ->with(['requisitionItemDetails',
                'requisitionItemDetails.item',
                'requisitionItemDetails.item.unit',
                'fromStore', 'toStore'])
            ->orderBy('id', 'desc')
            ->findWhere(['to_store_id' => $to_store, 'from_store_id' => $from_store,
                'indent_date' => $indent_date,
                'indent_no' => $indent_no,
                'paginate' => $limit]);
        if ($request->report == true || $request->report == 'true') {
            if ($from_store != '*') {
                foreach ($allDetails as $store) {
                    if ($from_store == $store->from_store_id) {
                        $data['fromStore'] = $store->fromStore['name'];
                        break;
                    }
                }
            } else {
                $data['fromStore'] = '';
            }
            if ($to_store != '*') {
                foreach ($allDetails as $store) {
                    if ($to_store == $store->to_store_id) {
                        $data['toStore'] = $store->toStore['name'];
                        break;
                    }
                }
            } else {
                $data['toStore'] = '';
            }

            $data['allDetails'] = $allDetails;
            $data['date']['date_from_en'] = $date_from;
            $data['date']['date_from_np'] = $this->dateConverterEToN($date_from);
            $data['date']['date_to_en'] = $date_to;
            $data['date']['date_to_np'] = $this->dateConverterEToN($date_to);
            Excel::create('Requisition Detail Report', function ($excel) use ($data) {
                $excel->setTitle('Requisition Detail Report');
                $excel->setCreator('Phoenix Solutions')
                    ->setCompany('Phoenix Solutions');
                $excel->setDescription('Requisition Detail Report');
                $excel->sheet('First sheet', function ($sheet) use ($data) {
                    $sheet->loadView('reports.inventory.requisition_detail_report', $data);
                });

            })->export('xls');
        }
        if ($allDetails->first() == null) {
            return $this->respondNotFound();
        }
        return $this->respondWithMessage('Data Retrieved Successfully', $allDetails->toArray());
//         }catch(\Exception $e){
//            return $this->respondWithError($e->getMessage());
//         }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            try {
                $inputs['user_id'] = 1;
                $inputs['estate_id'] = 1;
                $inputs['find_is_no'] = 'requisition';
                $request->merge($inputs);
                try {
                    $inputs['indent_no'] = $this->inventorySetupCheckerController->index($request);
                } catch (\Exception $e) {
                    $inputs['indent_no'] = $request->indent_no;
                }
                $request->merge($inputs);
                $this->requisitionDetailValidator
                    ->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);

                if ($request->requisitionItemDetails) {
                    $requisitionDetail = $this->requisitionDetailRepository->create($request->all());
                    foreach ($request->requisitionItemDetails as $requisition_item_detail) {
                        $this->requisitionDetailRepository
                            ->with(['requisitionItemDetails'])
                            ->find($requisitionDetail->id)
                            ->requisitionItemDetails()
                            ->create($requisition_item_detail);
                    }
                } else {
                    DB::rollBack();
                    return $this->respondWithError("Please Enter Item.");
                }
                DB::commit();
                return $this->respondWithMessage('Requisition Detail Created Successfully!!!', $request->all());
            } catch (ValidatorException $e) {
                return $this->respondWithError($e->getMessageBag());
            }
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->respondWithError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $requisitionDetail = $this->requisitionDetailRepository
                ->with(['requisitionItemDetails',
                    'requisitionItemDetails.item',
                    'requisitionItemDetails.item.unit',
                    'fromStore', 'toStore'])
                ->findWhere(['id' => $id]);
            if ($requisitionDetail->first() == null) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $requisitionDetail->first());
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            try {
                $id = substr($id, 1, -1);
                if ($request->approve_requisition == true || $request->approve_requisition == 'true') {
                    $approve['approve_by'] = $request->approve_by;
                    $approve['approve_date'] = $request->approve_date;
                    DB::select(DB::raw("UPDATE ps_inv_requisition_details SET `approve_date` = '" . $request->approve_date . "',`approve_by` = '" . $request->approve_by . "' WHERE id in (" . $id . ")"));
                } else {
                    return $this->respondWithError("Update not available in Requisition Form");
                }
                return $this->respondWithMessage('Record Updated Successfully', $request->all());
            } catch (ValidatorException $e) {
                return $this->respondWithError($e->getMessageBag());
            }
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $data['id'] = $id;
            $this->requisitionDetailRepository
                ->deleteSelected('id', array_values(explode(",", substr($id, 1, -1))));
            return $this->respondWithMessage('Record Deleted Successfully!!!', $data);
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
