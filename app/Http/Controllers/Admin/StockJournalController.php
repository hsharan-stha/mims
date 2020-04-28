<?php

namespace App\Http\Controllers\Admin;

use App\Entities\FiscalYear;
use App\Entities\ProductionVoucherMaster;
use App\Entities\StoreTransaction;
use App\Repositories\StockJournalItemRepository;
use App\Repositories\StockJournalMasterRepository;
use App\Repositories\StoreTransactionRepository;
use App\Validators\StockJournalValidator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Prettus\Validator\Exceptions\ValidatorException;
use Prettus\Validator\Contracts\ValidatorInterface;


use App\Http\Requests;
use App\Http\Controllers\Controller;

class StockJournalController extends ApiBaseController
{
    protected $stockJournalMasterRepository;
    protected $storeTransactionRepository;
    protected $stockJournalValidator;

    public function __construct(StockJournalMasterRepository $stockJournalMasterRepository,
                                StoreTransactionRepository $storeTransactionRepository,
                                StockJournalValidator $stockJournalValidator)
    {
        $this->stockJournalMasterRepository = $stockJournalMasterRepository;
        $this->storeTransactionRepository = $storeTransactionRepository;
        $this->stockJournalValidator = $stockJournalValidator;
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
            return $this->stockJournalMasterRepository
                ->with(['sjItems', 'sjItems.item'])
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
                $this->stockJournalValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                if (sizeof($request->sjItems) < 1) {
                    return $this->respondWithError("No input/Output Items");
                }
                $sjMaster = $this->stockJournalMasterRepository
                    ->create($request->all());
                foreach ($request->sjItems as $sjItem) {
                    $this->stockJournalMasterRepository
                        ->with(['sjItems'])
                        ->find($sjMaster->id)
                        ->sjItems()
                        ->create($sjItem);
                }
                $store_transaction_items = [];
                foreach ($request->sjItems as $sjitem) {
                    $store_transaction_item['store_id'] = 1;
                    $store_transaction_item['item_id'] = $sjitem['item_id'];
                    $store_transaction_item['quantity'] = $sjitem['type'] == 0 ? -$sjitem['quantity'] : $sjitem['quantity'];
                    $store_transaction_item['rest_quantity'] = $sjitem['type'] == 0 ? 0 : $sjitem['quantity'];
                    $store_transaction_item['rate'] = 0;
                    $store_transaction_item['value'] = 0;
                    $store_transaction_item['total'] = 0;
                    $lot_no = ProductionVoucherMaster::max('lot_no') + 1;
                    $fiscalyear = FiscalYear::first()->pluck('name');
                    $store_transaction_item['remarks'] = 'sj' . '/' . $lot_no . '/' . $fiscalyear;
                    $store_transaction_item['date'] = $request->date;
                    $store_transaction_item['type'] = "sj";
                    $store_transaction_item['ref'] = 'sj' . '/' . $lot_no . '/' . $fiscalyear;
                    $store_transaction_item['opening'] = 1;
                    $store_transaction_item['user_id'] = 1;
                    $store_transaction_item['estate_id'] = 1;
                    unset($store_transaction_item['qty']);
                    array_push($store_transaction_items, $store_transaction_item);
                }
                StoreTransaction::insert($store_transaction_items);
                DB::commit();
                return $this->respondWithMessage('stock journal created successfully', $request->all());

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
