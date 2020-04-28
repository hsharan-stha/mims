<?php

namespace App\Http\Controllers\Admin;

use App\Entities\FiscalYear;
use App\Repositories\FiscalYearRepository;
use App\Repositories\ItemRepository;
use App\Repositories\ProductCategoryRepository;
use App\Repositories\StoreRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Repositories\StoreTransactionRepository;
use App\Validators\StoreTransactionValidator;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Array_;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use Excel;

class StoreTransactionController extends ApiBaseController
{
    protected $storeTransactionRepository;

    protected $storeTransactionValidator;

    protected $productCategoryRepository;

    protected $itemRepository;

    protected $itemPriceCalculator;

    protected $storeRepository;

    protected $fiscalYearRepository;

    public function __construct(StoreTransactionRepository $storeTransactionRepository,
                                StoreTransactionValidator $storeTransactionValidator,
                                ProductCategoryRepository $productCategoryRepository,
                                ItemRepository $itemRepository,
                                FiscalYearRepository $fiscalYearRepository,
                                ItemPriceCalculator $itemPriceCalculator,
                                StoreRepository $storeRepository)
    {
        $this->storeTransactionRepository = $storeTransactionRepository;
        $this->storeTransactionValidator = $storeTransactionValidator;
        $this->productCategoryRepository = $productCategoryRepository;
        $this->itemRepository = $itemRepository;
        $this->itemPriceCalculator = $itemPriceCalculator;
        $this->storeRepository = $storeRepository;
        $this->fiscalYearRepository= $fiscalYearRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
//        try {
            $fiscal_start_date = FiscalYear::where('current', 1)->pluck('start_date');
            $date_from = $request->date_from;
            $date_from_yesterday=date('Y-m-d', strtotime($date_from.'-1 day'));
            $date_to = $request->date_to;
            $item_id = $request->item_id;
            if ($request->store_id > 0) {
                $store_id = $request->store_id;
                $field_name = 'store_id';
            } else {
                $store_id = 1;
                $field_name = 1;
            }
            $data = array(
                'date_from' => $date_from,
                'date_to' => $date_to,
                'fiscal_start_date' => $fiscal_start_date
            );
            $data['category'] = DB::select(DB::raw("SELECT id,name FROM ps_inv_product_categories"));
            $key = 0;
            $index = 0;
            foreach ($data['category'] as $c) {
                $data['items'][$index] = DB::select(
                    DB::raw("SELECT id,name FROM ps_inv_items where product_category_id=$c->id and transact=1"));
                $index = $index + 1;
            }
            if ($request->stock_ledger == true || $request->stock_ledger == 'true') {
                if($item_id == '' || $item_id == null){
                    return $this->respondWithError("Item Not Found");
                }
                $data['item_name'] = DB::select(
                    DB::raw("SELECT DISTINCT(i.name) as item_name
                     FROM ps_inv_store_transactions st inner join ps_inv_items i
                     on st.item_id=i.id
                     where st.item_id=$item_id
                "));
                $data['opening'] = DB::select(
                    DB::raw("SELECT sum(quantity) as quantity, 
                    sum(total) as total
                     FROM ps_inv_store_transactions 
                     where item_id=$item_id 
                     and $field_name=$store_id
                     and 
                     date BETWEEN '$fiscal_start_date' AND '$date_from_yesterday'
                          "));
                $data['actual_report'] = DB::select(
                    DB::raw("SELECT date as date,type,ref,remarks,
                  sum(quantity) as quantity, sum(total) as total
                  FROM ps_inv_store_transactions 
                   where item_id=$item_id
                   and $field_name=$store_id
                    and date BETWEEN '$date_from' AND '$date_to' 
                   group by ref ORDER BY date
                    "));
                if($request->stock_ledger_generate == true || $request->stock_ledger_generate == 'true') {
                    Excel::create('Stock Ledger', function ($excel) use ($data) {
                        $excel->setTitle('Stock Ledger');
                        $excel->setCreator('Phoenix Solutions')
                            ->setCompany('Phoenix Solutions');
                        $excel->setDescription('Stock Ledger');
                        $excel->sheet('First sheet', function ($sheet) use ($data) {
                            $sheet->loadView('reports.inventory.stock_ledger', $data);
                        });
                    })->export('xls');
                }else{
                    return $data;
                }
            } else if ($request->stock_report == true || $request->stock_report == 'true') {
                foreach ($data['items'] as $i) {
                    foreach ($i as $ii) {
                        $data['opening'][$key] = DB::select(
                            DB::raw("
                                SELECT sum(quantity) as quantity, sum(total) as total
                                 FROM ps_inv_store_transactions
                                 where item_id=$ii->id
                                 and $field_name=$store_id
                                  and
                                 date BETWEEN '$fiscal_start_date' AND '$date_from_yesterday'
                                "));
                        $data['inward'][$key] = DB::select(
                            DB::raw("SELECT sum(quantity) as quantity, sum(total) as total
                          FROM ps_inv_store_transactions 
                           where item_id=$ii->id
                           and $field_name=$store_id
                           and quantity > 0 and
                           date BETWEEN '$date_from' AND '$date_to' 
                    "));
                        $data['outward'][$key] = DB::select(
                            DB::raw("SELECT sum(quantity) as quantity, sum(total) as total
                          FROM ps_inv_store_transactions 
                           where item_id=$ii->id
                           and $field_name=$store_id
                           and quantity < 0 and
                           date BETWEEN '$date_from' AND '$date_to' 
                    "));
                        $key = $key + 1;
                    }
                }
                if($request->stock_report_generate == true || $request->stock_report_generate == 'true') {
                    Excel::create('Stock Report', function ($excel) use ($data) {
                        $excel->setTitle('Stock Report');
                        $excel->setCreator('Phoenix Solutions')
                            ->setCompany('Phoenix Solutions');
                        $excel->setDescription('Stock Report');
                        $excel->sheet('First sheet', function ($sheet) use ($data) {
                            $sheet->loadView('reports.inventory.stock_report', $data);

                        });
                    })->export('xls');
                }else{
                    return $data;
                }
            } else if ($request->current_report == true || $request->current_report == 'true') {
                foreach ($data['items'] as $i) {
                    foreach ($i as $ii) {
                        $data['opening'][$key] = DB::select(
                            DB::raw("
                                SELECT sum(quantity) as quantity, sum(total) as total
                                 FROM ps_inv_store_transactions
                                 where item_id=$ii->id
                                 and $field_name=$store_id
                                  and
                                 date BETWEEN '$fiscal_start_date' AND CURRENT_DATE 
                                "));
                        $key = $key + 1;
                    }
                }
                Excel::create('Current Report', function ($excel) use ($data) {
                    $excel->setTitle('Current Report');
                    $excel->setCreator('Phoenix Solutions')
                        ->setCompany('Phoenix Solutions');
                    $excel->setDescription('Current Report');
                    $excel->sheet('First sheet', function ($sheet) use ($data) {
                        $sheet->loadView('reports.inventory.current_report', $data);
                    });
                })->export('xls');
                return view('reports.inventory.current_report', $data);
            } else if ($request->current_fifo_report == true || $request->current_fifo_report == 'true') {
                foreach ($data['items'] as $i) {
                    foreach ($i as $ii) {
                        $data['opening'][$key] = DB::select(
                            DB::raw("
                                SELECT sum(rest_quantity) as rest_quantity,rate, sum(total) as total
                                 FROM ps_inv_store_transactions
                                 where item_id=$ii->id
                                 and $field_name=$store_id
                                  and 
                                 date BETWEEN '$fiscal_start_date' AND CURRENT_DATE and 
                                 rest_quantity > 0 group by rate order by id
                                "));
                        $key = $key + 1;
                    }
                }
                if ($request->current_fifo_report_generate == true || $request->current_fifo_report_generate == 'true') {
                    Excel::create('Current Report', function ($excel) use ($data) {
                        $excel->setTitle('Current Report');
                        $excel->setCreator('Phoenix Solutions')
                            ->setCompany('Phoenix Solutions');
                        $excel->setDescription('Current Report');
                        $excel->sheet('First sheet', function ($sheet) use ($data) {
                            $sheet->loadView('reports.inventory.current_fifo_report', $data);
                        });
                    })->export('xls');
                }else{
                    return $data;
                }
            }
            if ($request->opening_report == true || $request->opening_report == 'true') {
                foreach ($data['items'] as $i) {
                    foreach ($i as $ii) {
                        $data['opening'][$key] = DB::select(
                            DB::raw("
                                SELECT sum(quantity) as quantity, sum(total) as total
                                 FROM ps_inv_store_transactions
                                 where item_id=$ii->id
                                 and $field_name=$store_id
                                  and type='ope' and
                                 date BETWEEN '$fiscal_start_date' AND CURRENT_DATE
                                "));
                        $key = $key + 1;
                    }
                }
                if($request->opening_report_generate == true || $request->opening_report_generate == 'true') {
                    Excel::create('opening Report', function ($excel) use ($data) {
                        $excel->setTitle('opening Report');
                        $excel->setCreator('Phoenix Solutions')
                            ->setCompany('Phoenix Solutions');
                        $excel->setDescription('opening Report');
                        $excel->sheet('First sheet', function ($sheet) use ($data) {
                            $sheet->loadView('reports.inventory.current_report', $data);
                        });
                    })->export('xls');
                    return view('reports.inventory.current_report', $data);
                }else{
                    return $data;
                }
            } else {
                $limit = $request->limit != null ? $request->limit : 20;
                if ($request->store_id != null) {
                    $allStoreTransactions = $this->storeTransactionRepository->with(['store', 'item', 'item.unit'])
                        ->orderBy('id', 'desc')
                        ->findWhere(['store_id' => $store_id, 'paginate' => $limit]);
                } else {
                    $allStoreTransactions = $this->storeTransactionRepository->with(['store', 'item', 'item.unit'])
                        ->orderBy('id', 'desc')
                        ->findWhere(['paginate' => $limit]);
                }
                if ($allStoreTransactions->first() == null) {
                    return $this->respondNotFound();
                }
                return $this->respondWithMessage('Data Retrieved Successfully', $allStoreTransactions->toArray());
            }
//        } catch (\Exception $e) {
//            return $this->respondWithError($e->getMessage());
//        }
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
            try {
                $this->storeTransactionValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $fiscal_Year = $this->fiscalYearRepository->findWhere(['current'=>1])->first();
                if(!$fiscal_Year){
                    return $this->respondWithError("Please set Fiscal Year Correctly");
                }
                $inputs['rest_quantity'] = $request->quantity;
                $inputs['opening'] = 1;
                $inputs['type'] = 'ope';
                $inputs['date'] = $fiscal_Year->start_date;
                $inputs['ref'] = 'opening';
                $inputs['value'] = $request->quantity * $request->rate;
                $inputs['total'] = $request->quantity * $request->rate;
                $inputs['user_id'] = 1;
                $inputs['estate_id'] = 1;
                $request->merge($inputs);
                $this->storeTransactionRepository->create($request->all());
                return $this->respondWithMessage('Store Transaction Created Successfully!!!', $request->all());
            } catch (ValidatorException $e) {
                return $this->respondWithError($e->getMessageBag());
            }
        } catch (\Exception $e) {
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
            $storeTransaction = $this->storeTransactionRepository->with(['store', 'item', 'item.unit'])->findWhere(['id' => $id]);
            if ($storeTransaction->first() == null) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $storeTransaction->first());
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
                $this->storeTransactionValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->storeTransactionRepository->update($request->all(), $id);
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
            $this->storeTransactionRepository->deleteSelected('id', array_values(explode(",", substr($id, 1, -1))));
            return $this->respondWithMessage('Record Deleted Successfully!!!', $data);
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
