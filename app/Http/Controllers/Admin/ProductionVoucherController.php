<?php

namespace App\Http\Controllers\Admin;

use App\Entities\FiscalYear;
use App\Entities\ProductionVoucherExpense;
use App\Entities\ProductionVoucherItem;
use App\Entities\ProductionVoucherMaster;
use App\Entities\StoreTransaction;
use App\Repositories\ProductionVoucherMasterRepository;
use App\Repositories\StoreRepository;
use App\Repositories\StoreTransactionRepository;
use App\Validators\ProductionVoucherValidator;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Prettus\Validator\Exceptions\ValidatorException;
use Prettus\Validator\Contracts\ValidatorInterface;


class ProductionVoucherController extends ApiBaseController
{
    protected $productionVoucherMasterRepository;
    protected $storeTransactionRepository;
    protected $productionVoucherValidator;

    public function __construct(ProductionVoucherMasterRepository $productionVoucherMasterRepository,
                                StoreTransactionRepository $storeTransactionRepository,
                                ProductionVoucherValidator $productionVoucherValidator)
    {
        $this->productionVoucherMasterRepository = $productionVoucherMasterRepository;
        $this->storeTransactionRepository = $storeTransactionRepository;
        $this->productionVoucherValidator = $productionVoucherValidator;

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
            return $this->productionVoucherMasterRepository
                ->with(['bomMaster', 'pvItems', 'pvItems.item', 'pvExpenses', 'store.pvMasters'])
                ->orderBy('id', 'desc')
                ->findWhere(['paginate' => $limit]);
        } catch (\Exception $e) {
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
                $this->productionVoucherValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);

                if (sizeof($request->pvItems) < 1) {
                    return $this->respondWithError("No input/Output Items");
                }
                $lot_no = ProductionVoucherMaster::max('lot_no') + 1;
                $fiscalyear = FiscalYear::first()->pluck('name');
                $pvmData = array(
                    'lot_no' => $lot_no,
                    'lot' => $lot_no . '/' . $fiscalyear
                );
                $request->merge($pvmData);
                $PVMaster = $this->productionVoucherMasterRepository
                    ->create($request->all());
                foreach ($request->pvItems as $pvItem) {
                    $this->productionVoucherMasterRepository
                        ->with(['pvItems'])
                        ->find($PVMaster->id)
                        ->pvItems()
                        ->create($pvItem);
                }
                $store_transaction_items = [];
                foreach ($request->pvItems as $pvitem) {
                    $store_transaction_item['store_id'] = 1;
                    $store_transaction_item['item_id'] = $pvitem['item_id'];
                    $store_transaction_item['quantity'] = $pvitem['type'] == 1 ? -$pvitem['qty'] : $pvitem['qty'];
                    $store_transaction_item['rest_quantity'] = $pvitem['type'] == 1 ? 0 : $pvitem['qty'];
                    $store_transaction_item['rate'] = $pvitem['rate'];
                    $store_transaction_item['value'] = $pvitem['value'];
                    $store_transaction_item['total'] = $pvitem['value'];
                    $store_transaction_item['remarks'] = 'pv' . '/' . $lot_no . '/' . $fiscalyear;
                    $store_transaction_item['date'] = $request->date;
                    $store_transaction_item['type'] = "pv";
                    $store_transaction_item['ref'] = 'pv' . '/' . $lot_no . '/' . $fiscalyear;
                    $store_transaction_item['opening'] = 0;
                    $store_transaction_item['user_id'] = 1;
                    $store_transaction_item['estate_id'] = 1;
                    unset($store_transaction_item['actual_qty']);
                    unset($store_transaction_item['qty']);
                    array_push($store_transaction_items, $store_transaction_item);
                }
                StoreTransaction::insert($store_transaction_items);
                $extra_costs = [];
                foreach ($request->extraCost as $extraCost) {
                    $extra_cost['item_name'] = $extraCost['item_name'];
                    $extra_cost['cost'] = $extraCost['cost'];
                    $extra_cost['pvm_id'] = $PVMaster->id;
//                    if($extra_cost['item_name'] == '' || $extra_cost['cost'] == 0) {
                    array_push($extra_costs, $extra_cost);
//                    }
                }
                ProductionVoucherExpense::insert($extra_costs);
                DB::commit();
                return $this->respondWithMessage('production voucher created successfully', $request->all());
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
        //
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
