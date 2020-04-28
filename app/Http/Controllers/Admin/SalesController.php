<?php

namespace App\Http\Controllers\Admin;

use App\Entities\FiscalYear;
use App\Entities\SalesMaster;
use App\Entities\StoreTransaction;
use App\Repositories\SalesMasterRepository;
use App\Validators\SalesValidator;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Prettus\Validator\Exceptions\ValidatorException;
use Prettus\Validator\Contracts\ValidatorInterface;


class SalesController extends ApiBaseController
{
    protected $salesMasterRepository;
    protected $evaluation;
    protected $salesValidator;


    public function __construct(SalesMasterRepository $salesMasterRepository, SalesValidator $salesValidator)
    {
        $this->evaluation = new EvaluationController();
        $this->salesMasterRepository = $salesMasterRepository;
        $this->salesValidator = $salesValidator;

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $limit = $request->limit != null ? $request->limit : "all";
            return $this->salesMasterRepository
                ->with(['salesItems', 'salesItems.item'])
                ->orderBy('id', 'desc')
                ->findWhere(['paginate' => $limit]);
        } catch (Exception $e) {
            $this->respondWithError($e->getMessage());
        }
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
                $this->salesValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                if (sizeof($request->invoices) < 1) {
                    return $this->respondWithError("No input/Output Items");
                }
                $id = SalesMaster::max('id') + 1;
                $fiscalyear = FiscalYear::first()->pluck('name');
                $salesData = array(
                    'sales_module' => 'sales/' . $id . '/' . $fiscalyear
                );
                $request->merge($salesData);
                $salesMaster = $this->salesMasterRepository
                    ->create($request->all());
                foreach ($request->invoices as $salesItem) {
                    $this->salesMasterRepository
                        ->with(['salesItems'])
                        ->find($salesMaster->id)
                        ->salesItems()
                        ->create($salesItem);
                }
                $store_transaction_items = [];
                foreach ($request->invoices as $inv) {
                    $fiscal_start_date = FiscalYear::where('current', 1)->pluck('start_date');
                    $item_id = $inv['item_id'];
                    $input_quantity = $inv['quantity'];
                    $totalrate = $this->evaluation->valuation($fiscal_start_date, $item_id, $input_quantity);
                    if ($totalrate == 0) {
//                    DB::select(DB::raw("delete from ps_sales_items where sales_id=$salesMaster->id"));
//                    DB::select(DB::raw("delete from ps_sales_master where id=$salesMaster->id"));
                        return $this->respondWithError('quantity out of stock');
                    }
                    $store_transaction_item['store_id'] = 1;
                    $store_transaction_item['item_id'] = $inv['item_id'];
                    $store_transaction_item['quantity'] = -$inv['quantity'];
                    $store_transaction_item['rate'] = $totalrate / $input_quantity;
                    $store_transaction_item['value'] = $inv['amount'];
                    $store_transaction_item['total'] = $inv['amount'];
                    $store_transaction_item['remarks'] = 'sales' . '/' . $id . '/' . $fiscalyear;
                    $store_transaction_item['date'] = $request->date;
                    $store_transaction_item['type'] = "sales";
                    $store_transaction_item['ref'] = 'sales' . '/' . $id . '/' . $fiscalyear;
                    $store_transaction_item['opening'] = 1;
                    $store_transaction_item['user_id'] = 1;
                    $store_transaction_item['estate_id'] = 1;
                    array_push($store_transaction_items, $store_transaction_item);
                }
                StoreTransaction::insert($store_transaction_items);
                DB::commit();
                return $this->respondWithMessage('sales created successfully', $request->all());
            } catch (ValidatorException $e) {
                return $this->respondWithError($e->getMessageBag());
            }
        } catch (\Exception $e) {
            DB::rollback();
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
            $salesMaster = $this->salesMasterRepository
                ->with(['salesItems'])
                ->findWhere(['id' => $id])->first();
            if ($salesMaster == null) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $salesMaster);
        } catch (\Exception $e) {
            $this->respondWithError($e->getMessage());
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
