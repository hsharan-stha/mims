<?php

namespace App\Http\Controllers\Admin;

use App\Entities\FiscalYear;
use App\Entities\Item;
use App\Entities\MaterialIssue;
use App\Entities\StoreTransaction;
use App\Repositories\AccountTransactionRepository;
use App\Repositories\ItemRepository;
use App\Repositories\StoreTransactionRepository;
use function GuzzleHttp\Psr7\str;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\MaterialIssueRepository;
use App\Validators\MaterialIssueValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Controllers\Admin\ItemPriceCalculator;
use DB;
use Excel;

class MaterialIssueController extends ApiBaseController
{
    protected $materialIssueRepository;

    protected $materialIssueValidator;

    protected $storeTransactionRepository;

    protected $itemRepository;

    protected $accountTransactionRepository;

    protected $itemPriceCalculator;

    protected $mientorySetupCheckerController;
    protected $evaluation;

    public function __construct(MaterialIssueRepository $materialIssueRepository,
                                MaterialIssueValidator $materialIssueValidator,
                                StoreTransactionRepository $storeTransactionRepository,
                                ItemRepository $itemRepository,
                                AccountTransactionRepository $accountTransactionRepository,
                                InventorySetupCheckerController $mientorySetupCheckerController,
                                ItemPriceCalculator $itemPriceCalculator)
    {
        $this->evaluation = new EvaluationController();

        $this->materialIssueRepository = $materialIssueRepository;
        $this->materialIssueValidator = $materialIssueValidator;
        $this->storeTransactionRepository = $storeTransactionRepository;
        $this->itemRepository = $itemRepository;
        $this->accountTransactionRepository = $accountTransactionRepository;
        $this->itemPriceCalculator = $itemPriceCalculator;
        $this->inventorySetupCheckerController = $mientorySetupCheckerController;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
//       try{
        $limit = $request->limit != null ? $request->limit : 20;
        $issue_date = '*';
        $store_id = '*';
        $to_store_id = '*';
        $type = '*';
        $issue_no = '*';
        $date_from = date('Y-m-d', strtotime("-1 day"));
        $date_to = date('Y-m-d');
        if ($request->pending == true || $request->pending == 'true') {
            $allMaterialIssues = $this->materialIssueRepository
                ->with(['materialIssueDetails',
                    'materialIssueDetails.item', 'materialIssueDetails.activity', 'materialIssueDetails.item.unit', 'store', 'toStore'])
                ->orderBy('id', 'desc')
                ->findWhere(['approve_date' => ['approve_date', '=', null], 'paginate' => $limit]);
            if ($allMaterialIssues->first() == null) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allMaterialIssues->toArray());
        }
        if ($request->filterGroups) {
            foreach ($request->filterGroups as $filterGroup) {
                if ($filterGroup['field'] == 'store_name') {
                    $store_id = $filterGroup['filters'][0]['value'];
                } elseif ($filterGroup['field'] == 'issue_date') {
                    $date_from = \DateTime::createFromFormat('D M d Y H:i:s e+', $filterGroup['filters'][0]['value'])->format('Y-m-d');
                    $date_to = \DateTime::createFromFormat('D M d Y H:i:s e+', $filterGroup['filters'][1]['value'])->format('Y-m-d');
                    if (strtotime($date_from) == strtotime($date_to)) {
                        $issue_date = $date_to;
                    } else {
                        $issue_date = [$date_from, '<>', $date_to];
                    }
                } elseif ($filterGroup['field'] == 'to_store_name') {
                    $to_store_id = $filterGroup['filters'][0]['value'];
                } elseif ($filterGroup['field'] == 'issue_no') {
                    $issue_no = ['issue_no', 'LIKE', '%' . $filterGroup['filters'][0]['value'] . '%'];
                } else {

                }
            }

        }
        if ($request->report_type == 'material_issue_report') {
            if ($request->date_from != null && $request->date_from != '' && $request->date_to != null && $request->date_to != '') {
                $date_from = $request->date_from;
                $date_to = $request->date_to;
                if (strtotime($request->date_from) == strtotime($request->date_to)) {
                    $issue_date = $request->date_to;
                } else {
                    $issue_date = [$request->date_from, '<>', $request->date_to];
                }
            }
            if ($request->store_id != null && $request->store_id != '') {
                $store_id = $request->store_id;
            }
            if ($request->to_store_id != null && $request->to_store_id != '') {
                $to_store_id = $request->to_store_id;
            }
            if ($request->type != null && $request->type != '') {
                $type = ['type', 'LIKE', '%' . $request->type . '%'];
            }
            if ($request->issue_no != null && $request->issue_no != 'null' && $request->issue_no != '') {
                $issue_no = ['issue_no', 'LIKE', '%' . $request->issue_no . '%'];
            }
            $data['date']['date_from_en'] = $date_from;
            $data['date']['date_from_np'] = $this->dateConverterEToN($date_from);
            $data['date']['date_to_en'] = $date_to;
            $data['date']['date_to_np'] = $this->dateConverterEToN($date_to);
            $allMaterialIssues = $this->materialIssueRepository
                ->with(['materialIssueDetails',
                    'materialIssueDetails.item', 'materialIssueDetails.activity', 'materialIssueDetails.item.unit', 'store', 'toStore'])
                ->orderBy('id', 'desc')
                ->findWhere(['issue_date' => $issue_date, 'store_id' => $store_id, 'to_store_id' => $to_store_id, 'type' => $type, 'issue_no' => $issue_no, 'paginate' => $limit]);
            $data['allMaterialIssues'] = $allMaterialIssues;
            if ($request->store_id != null && $request->store_id != '') {
                foreach ($allMaterialIssues as $materialIssue) {
                    if ($request->store_id == $materialIssue->store_id) {
                        $data['fromStore'] = $materialIssue->store['name'];
                        break;
                    }
                }
            } else {
                $data['fromStore'] = '';
            }
            if ($request->to_store_id != null && $request->to_store_id != '') {
                foreach ($allMaterialIssues as $materialIssue) {
                    if ($request->to_store_id == $materialIssue->to_store_id) {
                        $data['toStore'] = $materialIssue->toStore['name'];
                        break;
                    }
                }
            } else {
                $data['toStore'] = '';
            }

            Excel::create('Material Issue Report', function ($excel) use ($data) {
                $excel->setTitle('Daily Factory Report');
                $excel->setCreator('Phoenix Solutions')
                    ->setCompany('Phoenix Solutions');
                $excel->setDescription('Daily Factory Report');
                $excel->sheet('First sheet', function ($sheet) use ($data) {
                    $sheet->loadView('reports.inventory.material_issue_report', $data);

                });
            })->export('xls');
        } else {
            $allMaterialIssues = $this->materialIssueRepository
                ->with(['materialIssueDetails',
                    'materialIssueDetails.item', 'materialIssueDetails.activity', 'materialIssueDetails.item.unit', 'store', 'toStore'])
                ->orderBy('id', 'desc')
                ->findWhere(['issue_date' => $issue_date, 'store_id' => $store_id, 'to_store_id' => $to_store_id, 'type' => $type, 'issue_no' => $issue_no, 'paginate' => $limit]);
        }
        if ($allMaterialIssues->first() == null) {
            return $this->respondNotFound();
        }
        return $this->respondWithMessage('Data Retrieved Successfully', $allMaterialIssues->toArray());
//       }catch(\Exception $e){
//           return $this->respondWithError($e->getMessage());
//       }
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
        try {
            if (sizeof($request->materialIssues) < 1) {
                return $this->respondWithError("No input/Output Items");
            }
            $id = MaterialIssue::max('id') + 1;
            $fiscalyear = FiscalYear::first()->pluck('name');

            $issueMaster = $this->materialIssueRepository
                ->create($request->all());

            foreach ($request->materialIssues as $issueItem) {
                $this->materialIssueRepository
                    ->with(['materialIssueDetails'])
                    ->find($issueMaster->id)
                    ->materialIssueDetails()
                    ->create($issueItem);
            }

            $store_transaction_items = [];
            foreach ($request->materialIssues as $mi) {
                $fiscal_start_date = FiscalYear::where('current', 1)->pluck('start_date');
                $item_id = $mi['item_id'];
                $input_quantity = $mi['quantity'];

                $totalrate = $this->evaluation
                    ->valuation($fiscal_start_date, $item_id, $input_quantity);
                if ($totalrate == 0) {
                    DB::select(DB::raw("delete from ps_inv_material_issue_item_details where material_issue_id=$issueMaster->id"));
                    DB::select(DB::raw("delete from ps_inv_material_issues where id=$issueMaster->id"));
                    return $this->respondWithError('quantity out of stock');
                }

                $store_transaction_item['store_id'] = 1;
                $store_transaction_item['item_id'] = $mi['item_id'];
                $store_transaction_item['quantity'] = -$mi['quantity'];
                $store_transaction_item['rate'] = $totalrate / $input_quantity;
                $store_transaction_item['value'] = $mi['value'];
                $store_transaction_item['total'] = $mi['value'];
                $store_transaction_item['remarks'] = 'material_issue' . '/' . $id . '/' . $fiscalyear;
                $store_transaction_item['date'] = $request->date;
                $store_transaction_item['type'] = "material_issue";
                $store_transaction_item['ref'] = 'material_issue' . '/' . $id . '/' . $fiscalyear;
                $store_transaction_item['opening'] = 1;
                $store_transaction_item['user_id'] = 1;
                $store_transaction_item['estate_id'] = 1;
                array_push($store_transaction_items, $store_transaction_item);
            }
            StoreTransaction::insert($store_transaction_items);
//            return $request->all();
            return $this->respondWithMessage('material issue created successfully', $request->all());

        } catch (Exception $e) {
            $this->respondWithError($e->getMessage());

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
            $materialIssue = $this->materialIssueRepository->with(['materialIssueDetails', 'materialIssueDetails.activity', 'materialIssueDetails.item', 'materialIssueDetails.item.unit', 'store', 'toStore'])->findWhere(['id' => $id]);
            if ($materialIssue->first() == null) {
                return $this->respondNotFound();
            }
            $data['materialIssue'] = $materialIssue->first();
            $data['accountTransaction'] = $this->accountTransactionRepository->with(['accountTransactionSplits.accountHead', 'accountTransactionSplits.costCenter'])->findWhere(['vouchar_type' => 'GRN', 'vouchar_no' => $id])->first();

            return $this->respondWithMessage('Data Retrieved Successfully', $data);
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
                    DB::select(DB::raw("UPDATE ps_inv_material_issues SET `approve_date` = '" . $request->approve_date . "',`approve_by` = '" . $request->approve_by . "' WHERE id in (" . $id . ")"));
                } else {
                    return $this->respondWithError("Update not available in Material Issue");
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
            $this->materialIssueRepository->deleteSelected('id', array_values(explode(",", substr($id, 1, -1))));
            return $this->respondWithMessage('Record Deleted Successfully!!!', $data);
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
