<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\GRNPORepository;
use App\Repositories\InventorySetupRepository;
use App\Repositories\MaterialIssueRepository;
use App\Repositories\PORequisitionDetailRepository;
use App\Repositories\RequisitionDetailRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class InventorySetupCheckerController extends ApiBaseController
{
    protected $materialIssueRepository;

    protected $requisitionDetailRepository;

    protected $PORequisitionDetailRepository;

    protected $inventorySetupRepository;

    protected $GRNPORepository;
    public function __construct(MaterialIssueRepository $materialIssueRepository,
                                RequisitionDetailRepository $requisitionDetailRepository,
                                PORequisitionDetailRepository $PORequisitionDetailRepository,
                                GRNPORepository $GRNPORepository,
                                InventorySetupRepository $inventorySetupRepository)
    {
        $this->materialIssueRepository= $materialIssueRepository;
        $this->requisitionDetailRepository= $requisitionDetailRepository;
        $this->PORequisitionDetailRepository= $PORequisitionDetailRepository;
        $this->GRNPORepository= $GRNPORepository;
        $this->inventorySetupRepository= $inventorySetupRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
            $estate_id=1;
            $currentInventorySetup=$this->inventorySetupRepository->with(['fiscalYear'])->findWhere(['active'=>1,'estate_id'=>$estate_id])->first();
            if($currentInventorySetup == null){
                return $this->respondNotFound();
            }
            if($request->find_is_no == 'material_issue') {
                $latestMaterialIssue = $this->materialIssueRepository->orderBy('id', 'desc')->findWhere(['estate_id' => $estate_id])->first();
                if ($latestMaterialIssue != null) {
                    $latestIssueNo=explode("-",$latestMaterialIssue->issue_no );
                    $data['issue_no']=$latestIssueNo[0].'-'.((int)$latestIssueNo[1]+1);
                }else{
                    $data['issue_no']= $currentInventorySetup->pre_missue_no.'-'.((int)$currentInventorySetup->last_missue_no+1);
                }
                if($request->return_type == 'for_client') {
                    return $this->respondWithMessage("IS No Found", $data);
                }else{
                    return $data['issue_no'];
                }
            }
            elseif($request->find_is_no == 'po_requisition') {
                $latestPORequisition = $this->PORequisitionDetailRepository->orderBy('id', 'desc')->findWhere(['estate_id' => $estate_id])->first();
                if ($latestPORequisition != null) {
                    $latestIssueNo=explode("-",$latestPORequisition->po_no );
                    $data['po_no']=$latestIssueNo[0].'-'.((int)$latestIssueNo[1]+1);
                }else{
                    $data['po_no']=$currentInventorySetup->pre_po_no.'-'.((int)$currentInventorySetup->last_po_no+1);
                }
                if($request->return_type == 'for_client') {
                    return $this->respondWithMessage("IS No Found", $data);
                }else{
                    return $data['po_no'];
                }
            }elseif($request->find_is_no == 'grn_po') {
                $latestGRN = $this->GRNPORepository->orderBy('id', 'desc')->findWhere(['estate_id' => $estate_id])->first();
                if ($latestGRN != null) {
                    $latestGRNNo=explode("-",$latestGRN->grn_no );
                    $data['grn_no']= $latestGRNNo[0].'-'.((int)$latestGRNNo[1]+1);
                }else{
                    $data['grn_no']= $currentInventorySetup->pre_grn_no.'-'.((int)$currentInventorySetup->last_grn_no+1);
                }
                if($request->return_type == 'for_client') {
                    return $this->respondWithMessage("IS No Found", $data);
                }else{
                    return $data['grn_no'];
                }
            }elseif($request->find_is_no == 'requisition') {
                $latestRequisition = $this->requisitionDetailRepository->orderBy('id', 'desc')->findWhere(['estate_id' => $estate_id])->first();
                if ($latestRequisition != null) {
                    $latestIndentNo=explode("-",$latestRequisition->indent_no );
                    $data['indent_no']= $latestIndentNo[0].'-'.((int)$latestIndentNo[1]+1);
                }else{
                    $data['indent_no']=$currentInventorySetup->pre_req_no.'-'.((int)$currentInventorySetup->last_req_no+1);
                }
                if($request->return_type == 'for_client') {
                    return $this->respondWithMessage("IS No Found", $data);
                }else{
                    return $data['indent_no'];
                }
            }else{
                return $this->respondWithError("Inventory setup not found");
            }
        }catch (\Exception $e){
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
