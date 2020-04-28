<?php

namespace App\Http\Controllers\Admin;

use App\Entities\FiscalYear;
use App\Entities\StoreTransaction;
use App\Repositories\StoreTransferMasterRepository;
use App\Validators\StoreTransferValidator;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Prettus\Validator\Exceptions\ValidatorException;
use Prettus\Validator\Contracts\ValidatorInterface;


class StoreTransferController extends ApiBaseController
{
    protected $storeTransferMasterRepository;
    protected $evaluation;
    protected $storeTransferValidator;


    public function __construct(StoreTransferMasterRepository $storeTransferMasterRepository,
                                StoreTransferValidator $storeTransferValidator)
    {
        $this->evaluation = new EvaluationController();
        $this->storeTransferMasterRepository = $storeTransferMasterRepository;
        $this->storeTransferValidator = $storeTransferValidator;

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
            return $this->storeTransferMasterRepository
                ->with(['storeTransferItems', 'fromstore', 'tostore', 'storeTransferItems.item'])
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
                $this->storeTransferValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                if (sizeof($request->storetransfers) < 1) {
                    return $this->respondWithError("No input/Output Items");
                }
                $storeTransferMaster = $this->storeTransferMasterRepository
                    ->create($request->all());
                foreach ($request->storetransfers as $storetransfer) {
                    $this->storeTransferMasterRepository
                        ->with(['storeTransferItems'])
                        ->find($storeTransferMaster->id)
                        ->storeTransferItems()
                        ->create($storetransfer);
                }
                $id = StoreTransaction::max('id') + 1;
                $fiscalyear = FiscalYear::first()->pluck('name');
                $store_transaction_items = [];
                $totalrate = 0;
                $input_quantity = 0;
                foreach ($request->storetransfers as $storetransfer) {
                    $fiscal_start_date = FiscalYear::where('current', 1)->pluck('start_date');
                    $item_id = $storetransfer['item_id'];
                    $type = $storetransfer['type'];
                    if ($type == 0) {
                        $input_quantity = $storetransfer['quantity'];
                        $totalrate = $this->evaluation
                            ->valuation($fiscal_start_date, $item_id, $input_quantity);
                        if ($totalrate == 0) {
                            return $this->respondWithError('quantity out of stock');
                        }
                    }
                    $store_transaction_item['store_id'] = $storetransfer['type'] == 0 ? $request->from_store_id : $request->to_store_id;
                    $store_transaction_item['item_id'] = $storetransfer['item_id'];
                    $store_transaction_item['quantity'] = $storetransfer['type'] == 0 ? -$storetransfer['quantity'] : $storetransfer['quantity'];
                    $store_transaction_item['rest_quantity'] = $storetransfer['type'] == 0 ? 0 : $storetransfer['quantity'];
                    $store_transaction_item['rate'] = $totalrate / $input_quantity;
                    $store_transaction_item['value'] = $storetransfer['value'];
                    $store_transaction_item['total'] = $storetransfer['value'];
                    $store_transaction_item['remarks'] = 'store_transfer';
                    $store_transaction_item['date'] = $request->date;
                    $store_transaction_item['type'] = "transfer";
                    $store_transaction_item['ref'] = 'store_transfer' . '(' . $id . ')' . $fiscalyear;
                    $store_transaction_item['opening'] = 1;
                    $store_transaction_item['user_id'] = 1;
                    $store_transaction_item['estate_id'] = 1;
                    array_push($store_transaction_items, $store_transaction_item);
                }
                StoreTransaction::insert($store_transaction_items);
                for ($x = 0; $x < sizeof($store_transaction_items); $x++) {
                    for ($y = $x + 1; $y < sizeof($store_transaction_items); $y++) {
                        if ($store_transaction_items[$x]['item_id'] == $store_transaction_items[$y]['item_id']) {
                            $loss_or_gain_quantity = $store_transaction_items[$x]['quantity'] + $store_transaction_items[$y]['quantity'];
                            $remarks = $loss_or_gain_quantity > 0 ? 'gain-' . $loss_or_gain_quantity : 'loss-' . -1 * $loss_or_gain_quantity;
                            DB::table('inv_store_transactions')
                                ->where('item_id', $store_transaction_items[$x]['item_id'])
                                ->where('ref', 'store_transfer' . '(' . $id . ')' . $fiscalyear)
                                ->update([
                                    'remarks' => $remarks,
                                ]);
                        }
                    }
                }
                DB::commit();
                return $this->respondWithMessage('store transfer created successfully', $request->all());
            } catch (ValidatorException $e) {
                return $this->respondWithError($e->getMessageBag());
            }
        } catch (Exception $e) {
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
            $storeTransfer = $this->storeTransferMasterRepository
                ->with(['storeTransferItems', 'storeTransferItems.item'])
                ->findWhere(['id' => $id])->first();
            if ($storeTransfer == null) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $storeTransfer);
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
