<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\RequisitionDetailRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\PORequisitionDetailRepository;
use App\Validators\PORequisitionDetailValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use DB;
use Excel;

class PORequisitionDetailController extends ApiBaseController
{
    protected $poRequisitionDetailRepository;

    protected $poRequisitionDetailValidator;

    protected $requisitionDetailRepository;

    protected $inventorySetupCheckerController;

    public function __construct(PORequisitionDetailRepository $poRequisitionDetailRepository,
                                PORequisitionDetailValidator $poRequisitionDetailValidator,
                                RequisitionDetailRepository $requisitionDetailRepository,
                                InventorySetupCheckerController $inventorySetupCheckerController
    ){
        $this->poRequisitionDetailRepository = $poRequisitionDetailRepository;
        $this->poRequisitionDetailValidator = $poRequisitionDetailValidator;
        $this->requisitionDetailRepository= $requisitionDetailRepository;
        $this->inventorySetupCheckerController=$inventorySetupCheckerController;

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
            $po_date ='*';
            $po_no = '*';
            $type ='*';
            $store_id = '*';
            $vendor_id = '*';
            $estate= $request->auth_user_estate_id;
            $data['date']= null;
            $date_from=null;
            $date_to= null;
            if($request->date_from!=null && $request->date_from!='null'&& $request->date_to!= 'null' && $request->date_to!=null){
                $date_from = $request->date_from;
                $date_to = $request->date_to;
                $po_date = [$date_from,'<>',$date_to];
            }
            if($request->po_no == null && $request->po_no == ''){
                $po_no = '*';

            }else{
                $po_no = $request->po_no;
            }
            if($request->type!= 'null' && $request->type!=''){
                $type = $request->type;
            }else{
                $type = '*';
            }
            if($request->store_id!=null && $request->store_id!=''){
                $store_id = $request->store_id;
            }else{
                $store_id = '*';
            }
            if($request->vendor_id!=null && $request->vendor_id!=''){
                $vendor_id = $request->vendor_id;
            }else{
                $vendor_id = '*';
            }
            if($request->get_po_for_grn ==  true || $request->get_po_for_grn ==  'true'){
                $allDetails=$this->poRequisitionDetailRepository->with(['poItemRequisitionDetails','poItemRequisitionDetails.item','poItemRequisitionDetails.item.unit','poItemRequisitionDetails.requisitionDetail','store','vendor'])->findWhere(['type'=>$type,'store_id'=>$store_id,'vendor_id'=>$vendor_id,'executed'=>0]);
                if($allDetails->first() == null){
                    return $this->respondNotFound();
                }
                return $this->respondWithMessage('Data Retrieved Successfully', $allDetails->toArray());
            }
            $limit=$request->limit != null ? $request->limit: 20;
            if($request->pending ==  true || $request->pending ==  'true'){
                $allDetails=$this->poRequisitionDetailRepository->with(['poItemRequisitionDetails','poItemRequisitionDetails.item','poItemRequisitionDetails.item.unit','poItemRequisitionDetails.requisitionDetail','store','vendor'])->findWhere(['approve_date'=>['approve_date','=',null],'paginate'=>$limit]);
                if($allDetails->first() == null){
                    return $this->respondNotFound();
                }
                return $this->respondWithMessage('Data Retrieved Successfully', $allDetails->toArray());
            }
            if($request->filterGroups){
                foreach($request->filterGroups as $filterGroup){
                    if($filterGroup['field'] == 'po_no'){
                        $po_no = ['po_no','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }elseif($filterGroup['field'] == 'type'){
                        $type = ['type','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }elseif($filterGroup['field'] == 'store_name'){
                        $store_id = $filterGroup['filters'][0]['value'];
                    }elseif($filterGroup['field'] == 'vendor_name'){
                        $vendor_id = $filterGroup['filters'][0]['value'];
                    }
                    elseif($filterGroup['field'] == 'po_date'){
                        $date_from = \DateTime::createFromFormat('D M d Y H:i:s e+', $filterGroup['filters'][0]['value'])->format('Y-m-d');
                        $date_to = \DateTime::createFromFormat('D M d Y H:i:s e+', $filterGroup['filters'][1]['value'])->format('Y-m-d');
                        $po_date = [$date_from,'<>',$date_to];
                    }else{

                    }
                }
            }
            $allDetails=$this->poRequisitionDetailRepository->with(['poItemRequisitionDetails','poItemRequisitionDetails.item','poItemRequisitionDetails.item.unit','poItemRequisitionDetails.requisitionDetail','store','vendor'])->findWhere(['po_date'=>$po_date,'type'=>$type,'store_id'=>$store_id,'vendor_id'=>$vendor_id,'po_no'=>$po_no,'paginate'=>$limit]);
            if($request->report_type == 'po_requisition_detail_master'){
                $data['date']['date_from_en'] = $date_from;
                $data['date']['date_from_np'] = $this->dateConverterEToN($date_from);
                $data['date']['date_to_en'] = $date_to;
                $data['date']['date_to_np'] = $this->dateConverterEToN($date_to);
                if($store_id != '*'){
                    foreach($allDetails as $store) {
                        if ($store_id == $store->store_id) {
                            $data['fromStore']= $store->store['name'];
                            break;
                        }
                    }
                }else{
                    $data['fromStore']= '';
                }
                if($vendor_id != '*'){
                    foreach($allDetails as $store) {
                        if ($vendor_id == $store->vendor_id) {
                            $data['toVendor']= $store->vendor['name'];
                            break;
                        }
                    }
                }else{
                    $data['toVendor']= '';
                }
                $data['allDetails']= $allDetails;
                $data['type']= $type;
                Excel::create('Purchase Order Detail Report', function ($excel) use ($data) {
                    $excel->setTitle('Purchase Order Detail');
                    $excel->setCreator('Phoenix Solutions')
                        ->setCompany('Phoenix Solutions');
                    $excel->setDescription('Daily Bought Leaf Report');
                    $excel->sheet('First sheet', function ($sheet) use ($data) {
                        $sheet->loadView('reports.inventory.po_requisition_detail_master_report', $data);
                    });
                })->export('xls');
            }else if($request->report_type == 'direct_purchase_detail-report'){
                $data['date']['date_from_en'] = $date_from;
                $data['date']['date_from_np'] = $this->dateConverterEToN($date_from);
                $data['date']['date_to_en'] = $date_to;
                $data['date']['date_to_np'] = $this->dateConverterEToN($date_to);
                if($store_id != '*'){
                    foreach($allDetails as $store) {
                        if ($store_id == $store->store_id) {
                            $data['fromStore']= $store->store['name'];
                            break;
                        }
                    }
                }else{
                    $data['fromStore']= '';
                }
                if($vendor_id != '*'){
                    foreach($allDetails as $store) {
                        if ($vendor_id == $store->vendor_id) {
                            $data['toVendor']= $store->vendor['name'];
                            break;
                        }
                    }
                }else{
                    $data['toVendor']= '';
                }
                $data['allDetails']= $allDetails;
                $data['type']= $type;
                Excel::create('Direct Purchase Requisition Detail Report', function ($excel) use ($data) {
                    $excel->setTitle('Daily Bought Leaf Report');
                    $excel->setCreator('Phoenix Solutions')
                        ->setCompany('Phoenix Solutions');
                    $excel->setDescription('Daily Bought Leaf Report');
                    $excel->sheet('First sheet', function ($sheet) use ($data) {
                        $sheet->loadView('reports.inventory.po_requisition_detail_master_report', $data);
                    });

                })->export('xls');
            }
            if($allDetails->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allDetails->toArray());
        }catch(\Exception $e){
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try{
            try{
        $inputs['user_id']=1;
        $inputs['estate_id']=1;
        $inputs['find_is_no'] = 'po_requisition';
        $request->merge($inputs);
        try {
        $inputs['po_no'] = $this->inventorySetupCheckerController->index($request);
        }catch (\Exception $e){
        $inputs['po_no']=$request->po_no;
        }
        $request->merge($inputs);
        $this->poRequisitionDetailValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
         if($request->poItemRequisitionDetail) {
                   $poRequisitionDetail= $this->poRequisitionDetailRepository->create($request->all());
                    foreach ($request->poItemRequisitionDetail as $po_item_requisition_detail) {
                        if($po_item_requisition_detail['quantity'] > 0 && $po_item_requisition_detail['rate'] > 0) {
                            $po_item_requisition_detail['value'] = $po_item_requisition_detail['rate'] * $po_item_requisition_detail['quantity'];
                            $po_item_requisition_detail['vat']=$po_item_requisition_detail['value']*0.13;
                            $po_item_requisition_detail['total']=$po_item_requisition_detail['value']+$po_item_requisition_detail['vat'];
                                $this->poRequisitionDetailRepository
                                    ->with(['poItemRequisitionDetails'])
                                    ->find($poRequisitionDetail->id)
                                    ->poItemRequisitionDetails()
                                    ->create($po_item_requisition_detail);
                            if(array_key_exists('requisition_id',$po_item_requisition_detail)) {
                                if ($po_item_requisition_detail['requisition_id'] != null) {
                                    $requisitionDetail['exceuted'] = 1;
                                    $this->requisitionDetailRepository->update($requisitionDetail, $po_item_requisition_detail['requisition_id']);
                                }
                            }
                        }
                    }
                }else{
                    DB::rollBack();
                    return $this->respondWithError("Please Enter Item.");
                }
                DB::commit();
                return $this->respondWithMessage('PO Requisition Detail Created Successfully!!!', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
            DB::rollback();
            return $this->respondWithError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            $porequisitionDetail=$this->poRequisitionDetailRepository->with(['poItemRequisitionDetails','poItemRequisitionDetails.item','poItemRequisitionDetails.item.unit','poItemRequisitionDetails.requisitionDetail','store','vendor'])->findWhere(['id'=>$id]);
            if($porequisitionDetail->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $porequisitionDetail->first());
        }catch(\Exception $e){
            return $this->respondWithError($e->getMessage());
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{
            try{
                $id=substr($id, 1, -1);
                if ($request->approve_requisition == true || $request->approve_requisition == 'true')
                {
                    $approve['approve_by']=$request->approve_by;
                    $approve['approve_date']=$request->approve_date;
                    DB::select(DB::raw("UPDATE ps_inv_powith_requisition_details SET `approve_date` = '".$request->approve_date."',`approve_by` = '".$request->approve_by."' WHERE id in (".$id.")"));
                }else{
                    return $this->respondWithError("Update not available in Purchase Order");
                }
                return $this->respondWithMessage('Record Updated Successfully', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
            return $this->respondWithError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $data['id']= $id;
            $this->poRequisitionDetailRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
            return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
