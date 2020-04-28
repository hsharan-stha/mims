<?php

namespace App\Http\Controllers\Admin;

use App\Entities\FiscalYear;
use App\Entities\GRNBillSundryDetails;
use App\Entities\GRNPOItem;
use App\Entities\StoreTransaction;
use App\Repositories\AccountTransactionRepository;
use App\Repositories\BillSundryMasterRepository;
use App\Repositories\FiscalYearRepository;
use App\Repositories\GRNPOItemRepository;
use App\Repositories\GRNPORepository;
use App\Repositories\ItemRepository;
use App\Repositories\PORequisitionDetailRepository;
use App\Repositories\StoreTransactionRepository;
use App\Repositories\SupplierRepository;
use App\Repositories\VoucharRepository;
use App\Validators\GRNPOValidator;
use DB;
use Excel;
use Illuminate\Http\Request;
use Prettus\Validator\Exceptions\ValidatorException;
use Prettus\Validator\Contracts\ValidatorInterface;


class GRNPOController extends ApiBaseController
{
    protected $grnPORepository;

    protected $grnPOItemRepository;

    protected $grnPOValidator;

    protected $storeTransactionRepository;

    protected $itemRepository;

    protected $accountTransactionRepository;

    protected $inventorySetupCheckerController;

    protected $PORequisitionDetailRepository;

    protected $billSundryMasterRepository;

    protected $voucharRepository;

    protected $supplierRepository;

    protected $fiscalYearRepository;

    public function __construct(GRNPORepository $grnPORepository,
                                GRNPOItemRepository $grnPOItemRepository,
                                FiscalYearRepository $fiscalYearRepository,
                                GRNPOValidator $grnPOValidator,
                                StoreTransactionRepository $storeTransactionRepository,
                                ItemRepository $itemRepository,
                                BillSundryMasterRepository $billSundryMasterRepository,
                                AccountTransactionRepository $accountTransactionRepository,
                                VoucharRepository $voucharRepository,
                                InventorySetupCheckerController $inventorySetupCheckerController,
                                SupplierRepository $supplierRepository,
                                PORequisitionDetailRepository $PORequisitionDetailRepository)
    {
        $this->grnPORepository = $grnPORepository;
        $this->grnPOItemRepository = $grnPOItemRepository;
        $this->grnPOValidator = $grnPOValidator;
        $this->itemRepository = $itemRepository;
        $this->storeTransactionRepository = $storeTransactionRepository;
        $this->accountTransactionRepository = $accountTransactionRepository;
        $this->inventorySetupCheckerController = $inventorySetupCheckerController;
        $this->PORequisitionDetailRepository = $PORequisitionDetailRepository;
        $this->billSundryMasterRepository = $billSundryMasterRepository;
        $this->voucharRepository = $voucharRepository;
        $this->supplierRepository = $supplierRepository;
        $this->fiscalYearRepository = $fiscalYearRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $limit = $request->limit != null ? $request->limit : "*";
            $grn_no = $request->grn_no != null ? $request->grn_no : "*";
            $date_from = $request->date_from;
            $date_to = $request->date_to;
            $store_id = $request->store_id;
            $vendor_id = $request->vendor_id;
            $item_id = $request->item_id;
            $received_by = $request->received_by;
            $fiscalyear = FiscalYear::first()->pluck('name');

            if ($request->local == 'true') {
                $type = 'local';
            } else {
                $type = 'import';
            }

            $result = $this->grnPORepository
                ->with(['grnItems', 'store', 'vendor', 'grnItems.grnBillSundryDetails'])
                ->orderBy('id', 'desc')
                ->findWhere(['paginate' => $limit, 'type' => $type]);

            if ($request->report == true || $request->report == 'true') {
                $data['allPOs'] = $this->grnPORepository
                    ->with(['grnItems.item.unit', 'grnItems.grnBillSundryDetails.billSundry'])
                    ->orderBy('id', 'desc')
                    ->findWhere(['grn_no' => $grn_no]);

                Excel::create('Goods Receipt Report', function ($excel) use ($data) {
                    $excel->setTitle('Goods Receipt Report');
                    $excel->setCreator('Phoenix Solutions')
                        ->setCompany('Phoenix Solutions');
                    $excel->setDescription('Good Receipt Report');
                    $excel->sheet('First sheet', function ($sheet) use ($data) {
                        $sheet->loadView('reports.inventory.goods_receipt_report', $data);

                    });
                })->export('xls');
                return view('reports.inventory.goods_receipt_report', $data);
            } else if ($request->grn_details == true || $request->grn_details == 'true') {
                $data = array(
                    'received_by' => $received_by,
                    'financial_year' => $fiscalyear,
                    'date_from' => $date_from,
                    'date_to' => $date_to
                );
                $data['grn_details'] = DB::select(DB::raw("
                        SELECT ig.grn_no,ig.grn_date,ii.name as item_name,igi.quantity,
                        igi.rate,igi.value,igi.total,ims.name as store_name,imv.name as vendor_name
                        FROM ps_inv_grns ig inner join ps_inv_grn_items igi
                        on ig.id=igi.grn_id inner join ps_inv_items ii 
                        on ii.id=igi.item_id inner join ps_inv_master_stores ims 
                        on ims.id=ig.store_id inner join ps_inv_master_vendors imv 
                        on imv.id=ig.vendor_id
                        where igi.item_id=$item_id
                        and ig.store_id=$store_id 
                        and ig.vendor_id=$vendor_id 
                        and ig.grn_date BETWEEN '$date_from' AND '$date_to'
                          "));

                Excel::create('Goods Receipt details', function ($excel) use ($data) {
                    $excel->setTitle('Goods Receipt details');
                    $excel->setCreator('Phoenix Solutions')
                        ->setCompany('Phoenix Solutions');
                    $excel->setDescription('Good Receipt details');
                    $excel->sheet('First sheet', function ($sheet) use ($data) {
                        $sheet->loadView('reports.inventory.goods_receipt_details', $data);

                    });
                })->export('xls');
                return view('reports.inventory.goods_receipt_details', $data);

            }
            return $result;
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
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
                $this->grnPOValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $grn_bill_sundry = [];//initialize array
                $grn_key = 0;//used for multidimensional array
                $count = sizeof($request->grnPOItems);
                $totalquantity = 0;
                $totalvalue = 0;
                for ($i = 0; $i < $count; $i++) {
                    $quantity = $request->grnPOItems[$i]['quantity'];
                    $totalquantity = $quantity + $totalquantity;
                }
                for ($i = 0; $i < $count; $i++) {
                    $value = $request->grnPOItems[$i]['value'];
                    $totalvalue = $value + $totalvalue;
                }
                //for wholesumwise
                if ($request->wholesumBillSundry) {
                    foreach ($request->wholesumBillSundry as $grnWholeSum) {
                        if ($grnWholeSum['amount'] == null) {
                            $grnWholeSum['amount'] = 0;
                        }
                        $billSundryMaster = $this->billSundryMasterRepository
                            ->findWhere(['id' => $grnWholeSum['id']])
                            ->first();
                        foreach ($request->grnPOItems as $grnItem) {
                            $grn_bill_sundry[$grn_key]['bill_sundry_id'] = $grnWholeSum['id'];
                            $grn_bill_sundry[$grn_key]['item_id'] = $grnItem['item_id'];
                            if ($request->local == 'true' && $request->local == true) {
                                $grn_bill_sundry[$grn_key]['group_name'] = '';
                            } else {
                                $grn_bill_sundry[$grn_key]['group_name'] = $grnItem['group_name'];
                            }
                            if ($billSundryMaster->proportion == 'QTY') {
                                $grn_bill_sundry[$grn_key]['value'] =
                                    $grnWholeSum['amount'] * (($grnItem['quantity'] / $totalquantity));
                            } else if ($billSundryMaster->proportion == 'ACCPR') {
                                $grn_bill_sundry[$grn_key]['value'] =
                                    $grnWholeSum['amount'] * (($grnItem['value'] / $totalvalue));
                            } else {
                                $grn_bill_sundry[$grn_key]['value'] =
                                    $grnWholeSum['amount'] / sizeof($request->grnPOItems);
                            }
                            $grn_bill_sundry[$grn_key]['effect_valuation'] = $billSundryMaster->effect_valuation;
                            $grn_key = $grn_key + 1;
                        }
                    }
                }

                if ($request->local == 'true' || $request->local == true) {
                    //for itemwise
                    $arr = array_keys($request->grnPOItems[0]);
                    $model = 'bs_name_';
                    $matches = array_filter($arr,
                        function ($val, $key) use (&$model) {
                            return stristr($val, 'bs_name_');
                        },
                        ARRAY_FILTER_USE_BOTH);
                    foreach ($request->grnPOItems as $grnItem) {
                        foreach ($matches as $match) {
                            $id = (int)substr($match, 8);
                            $billSundryMaster = $this->billSundryMasterRepository
                                ->findWhere(['id' => $id])//$match=bs_name_2
                                ->first();
                            $grn_bill_sundry[$grn_key]['bill_sundry_id'] = $id;
                            $grn_bill_sundry[$grn_key]['item_id'] = $grnItem['item_id'];
                            $grn_bill_sundry[$grn_key]['group_name'] = '';
                            if ($grnItem[$model . $id] == null) {
                                $grn_bill_sundry[$grn_key]['value'] = 0;
                            } else {
                                $grn_bill_sundry[$grn_key]['value'] = $grnItem[$model . $id];
                            }
                            $grn_bill_sundry[$grn_key]['effect_valuation'] = $billSundryMaster->effect_valuation;
                            $grn_key = $grn_key + 1;
                        }
                    }
                } else {
                    //for groupwise
                    $arrForGroupWise = array_keys($request->groupwiseBillSundry[0]);
                    $modelForGroupWise = 'bs_name_';
                    $matchesForGroupWise = array_filter($arrForGroupWise,
                        function ($val, $key) use (&$modelForGroupWise) {
                            return stristr($val, 'bs_name_');
                        },
                        ARRAY_FILTER_USE_BOTH);
                    foreach ($request->groupwiseBillSundry as $grnGroupWise) {
                        $group_total_qty = 0;
                        $group_total_value = 0;
                        $size = 0;
                        foreach ($request->grnPOItems as $grnItem) {
                            if ($grnGroupWise['group_name'] == $grnItem['group_name']) {
                                $quantity = $grnItem['quantity'];
                                $value = $grnItem['value'];
                                $group_total_value = $value + $group_total_value;
                                $group_total_qty = $quantity + $group_total_qty;
                                $size = $size + 1;
                            }
                        }
                        foreach ($request->grnPOItems as $grnItem) {
                            foreach ($matchesForGroupWise as $match) {
                                $id = (int)substr($match, 8);
                                if ($grnGroupWise[$modelForGroupWise . $id] == null) {
                                    $grnGroupWise[$modelForGroupWise . $id] = 0;
                                }
                                $billSundryMaster = $this->billSundryMasterRepository
                                    ->findWhere(['id' => $id])//$match=bs_name_2
                                    ->first();
                                $grn_bill_sundry[$grn_key]['bill_sundry_id'] = $id;
                                if ($grnGroupWise['group_name'] == $grnItem['group_name']) {
                                    $grn_bill_sundry[$grn_key]['item_id'] = $grnItem['item_id'];
                                    $grn_bill_sundry[$grn_key]['group_name'] = $grnGroupWise['group_name'];
                                    if ($billSundryMaster->proportion == 'QTY') {
                                        $grn_bill_sundry[$grn_key]['value'] =
                                            $grnGroupWise[$modelForGroupWise . $id] * (($grnItem['quantity'] / $group_total_qty));
                                    } else if ($billSundryMaster->proportion == 'ACCPR') {
                                        $grn_bill_sundry[$grn_key]['value'] =
                                            $grnGroupWise[$modelForGroupWise . $id] * (($grnItem['value'] / $group_total_value));
                                    } else {
                                        $grn_bill_sundry[$grn_key]['value'] =
                                            $grnGroupWise[$modelForGroupWise . $id] / $size;
                                    }
                                    $grn_bill_sundry[$grn_key]['effect_valuation'] = $billSundryMaster->effect_valuation;
                                } else {
                                    unset($grn_bill_sundry[$grn_key]);
                                    $grn_key = $grn_key - 1;
                                }
                                $grn_key = $grn_key + 1;
                            }
                        }
                    }
                }
                //for combining value of repeating array
                for ($x = 0; $x < sizeof($grn_bill_sundry); $x++) {
                    for ($y = $x + 1; $y < sizeof($grn_bill_sundry); $y++) {
                        if ($grn_bill_sundry[$x]['bill_sundry_id'] == $grn_bill_sundry[$y]['bill_sundry_id']
                            && $grn_bill_sundry[$x]['item_id'] == $grn_bill_sundry[$y]['item_id']
                            && $grn_bill_sundry[$x]['group_name'] == $grn_bill_sundry[$y]['group_name']
                        ) {
                            $grn_bill_sundry[$x]['bill_sundry_id'] = $grn_bill_sundry[$y]['bill_sundry_id'];
                            $grn_bill_sundry[$x]['item_id'] = $grn_bill_sundry[$y]['item_id'];
                            $grn_bill_sundry[$x]['group_name'] = $grn_bill_sundry[$x]['group_name'];
                            $grn_bill_sundry[$y]['group_name'] = $grn_bill_sundry[$x]['group_name'];
                            $grn_bill_sundry[$x]['value'] = $grn_bill_sundry[$x]['value'] + $grn_bill_sundry[$y]['value'];
                            $grn_bill_sundry[$y]['value'] = $grn_bill_sundry[$x]['value'];
                        }
                    }
                }
                // for removing repeating array
                $grn_bill_sundry = array_map(
                    "unserialize",
                    array_unique(
                        array_map(
                            "serialize",
                            $grn_bill_sundry
                        )
                    )
                );
                $grn_master['grn_no'] = $request->grn_no;
                $grn_master['grn_date'] = $request->grn_date;
                $grn_master['vendor_chalaan_no'] = $request->vendor_chalaan_no;
                $grn_master['bill_code'] = 'bill_code';
                $grn_master['bill_no'] = $request->bill_no;
                $grn_master['store_id'] = $request->store_id;
                $grn_master['vendor_id'] = $request->vendor_id;
                $grn_master['remarks'] = $request->remarks;
                if ($request->local == 'true' || $request->local == true) {
                    $grn_master['type'] = 'local';
                } else {
                    $grn_master['type'] = 'import';
                }
                $grn_master['executed'] = $request->executed;
                $grn_master['user_id'] = 1;
                $grn_master['estate_id'] = 1;
                $grnMaster = $this->grnPORepository
                    ->create($grn_master);

                $store_transactions = [];
                if ($request->grnPOItems) {
                    foreach ($request->grnPOItems as $key => $grn_po_item) {
                        $grn_item['grn_id'] = $grnMaster->id;
                        $grn_item['po_id'] = '';
                        $grn_item['item_id'] = $grn_po_item['item_id'];
                        $grn_item['quantity'] = $grn_po_item['quantity'];
                        $grn_item['rate'] = $grn_po_item['rate'];
                        $grn_item['value'] = $grn_po_item['value'];
                        $grn_item['vat'] = '';
                        $grn_item['vat_value'] = '';
                        $grn_item['total'] = $grn_po_item['total'];
                        if ($request->local == 'true' || $request->local == true) {
                            $grn_item['foreign_rate'] = 1;
                            $grn_item['foreign_currency'] = 'Nrs';
                            $grn_item['value_after_Frate'] = $grn_po_item['value'];
                        } else {
                            $grn_item['foreign_rate'] = $request->foreign_rate;
                            $grn_item['foreign_currency'] = $request->foreign_currency;
                            $grn_item['value_after_Frate'] = $grn_po_item['value_after_Frate'];
                        }
                        $grn_item['remarks'] = $request->remarks;
                        $grnItem = GRNPOItem::create($grn_item);

                        $total = $grn_po_item['total'] * $request->foreign_rate;
                        foreach ($grn_bill_sundry as $gb_key => $bill_sundry_detail) {
                            if ($request->local == 'true' || $request->local == true) {
                                if ($bill_sundry_detail['item_id'] == $grn_po_item['item_id']) {
                                    if ($bill_sundry_detail['effect_valuation'] == 1) {
                                        $grn_po_item['total'] = $grn_po_item['total'] + $bill_sundry_detail['value'];
                                    }
                                    $bill_sundry['grn_item_id'] = $grnItem->id;
                                    $bill_sundry['item_id'] = $bill_sundry_detail['item_id'];
                                    $bill_sundry['bill_sundry_id'] = $bill_sundry_detail['bill_sundry_id'];
                                    $bill_sundry['group_name'] = $bill_sundry_detail['group_name'];
                                    $bill_sundry['value'] = $bill_sundry_detail['value'];
                                    $bill_sundry['user_id'] = 1;
                                    $bill_sundry['estate_id'] = 1;
                                    GRNBillSundryDetails::create($bill_sundry);
                                }
                            } else {
                                if ($bill_sundry_detail['item_id'] == $grn_po_item['item_id']
                                    && $bill_sundry_detail['group_name'] == $grn_po_item['group_name']) {
                                    if ($bill_sundry_detail['effect_valuation'] == 1) {
                                        $total = $total + $bill_sundry_detail['value'];
                                        $grn_po_item['total'] = $total;
                                    }
                                    $bill_sundry['grn_item_id'] = $grnItem->id;
                                    $bill_sundry['item_id'] = $bill_sundry_detail['item_id'];
                                    $bill_sundry['bill_sundry_id'] = $bill_sundry_detail['bill_sundry_id'];
                                    $bill_sundry['group_name'] = $bill_sundry_detail['group_name'];
                                    $bill_sundry['value'] = $bill_sundry_detail['value'];
                                    $bill_sundry['user_id'] = 1;
                                    $bill_sundry['estate_id'] = 1;
                                    GRNBillSundryDetails::create($bill_sundry);
                                }
                            }
                        }
                        $grn_update = $grn_po_item['total'];
                        DB::table('inv_grn_items')
                            ->where('id', $grnItem->id)
                            ->update([
                                'total' => $grn_update,
                            ]);

                        $store_transaction['store_id'] = $request->store_id;
                        $store_transaction['item_id'] = $grn_po_item['item_id'];
                        $store_transaction['quantity'] = $grn_po_item['quantity'];
                        $store_transaction['rest_quantity'] = $grn_po_item['quantity'];
                        $store_transaction['rate'] = $grn_po_item['rate'];
                        $store_transaction['value'] = $grn_po_item['total'];
                        $store_transaction['total'] = $grn_po_item['total'];
                        $store_transaction['remarks'] = 'GRNPO_create';
                        $store_transaction['date'] = $request->grn_date;
                        if ($request->local == 'true' || $request->local == true) {
                            $store_transaction['type'] = 'local GRN';
                        } else {
                            $store_transaction['type'] = 'import GRN';
                        }
                        $store_transaction['ref'] = $request->grn_no;
                        $store_transaction['opening'] = 1;
                        $store_transaction['user_id'] = 1;
                        $store_transaction['estate_id'] = 1;
                        $store_transactions[$key] = $store_transaction;

                    }
                }
                StoreTransaction::insert($store_transactions);
                DB::commit();
                return $this->respondWithMessage('GRNPO created successfully', $request->all());

            } catch (ValidatorException $e) {
                return $this->respondWithError($e->getMessageBag());
            }
        } catch (\Exception $e) {
            DB::rollback();
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
//            $po = $this->grnPORepository->with(['grnItems', 'grnItems.item', 'grnItems.purchaseOrder', 'grnItems.item.unit', 'store', 'vendor',
//            ])->findWhere(['id' => $id]);
//            if ($po->first() == null) {
//                return $this->respondNotFound();
//            }
//            $grn['po'] = $po->first();
//            $grn['accountTransaction'] = $this->accountTransactionRepository
//                ->with(['accountTransactionSplits.accountHead', 'accountTransactionSplits.costCenter'])
//                ->findWhere(['vouchar_type' => 'GRN', 'vouchar_no' => $id])->first();

            $result = $this->grnPORepository
                ->with(['grnItems.item', 'store', 'vendor', 'grnItems.grnBillSundryDetails.billSundry'])
                ->orderBy('id', 'desc')
                ->findWhere(['id' => $id]);

            return $this->respondWithMessage('Data Retrieved Successfully', $result);
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
        $inputs['grn_po'] = '';
        if ($request->account_transactions) {
            $vouchar['vouchar_no'] = $inputs['grn_no'];
            $vouchar['vouchar_type'] = 'GRN';
            $vouchar['remarks'] = $request->remarks;
            $accountTransaction = $this->voucharRepository->create($vouchar);
            $i = $cr_value = $dr_value = 0;
            if ($cr_value != $dr_value) {
                DB::rollback();
                return $this->respondWithError("Credit and Debit side are not equal. Please verify and Resubmit");
            }
        }
        return $this->respondWithError("Update not available for Good Received Note");
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
            $this->grnPORepository->deleteSelected('id', array_values(explode(",", substr($id, 1, -1))));
            return $this->respondWithMessage('Record Deleted Successfully!!!', $data);
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }

}
