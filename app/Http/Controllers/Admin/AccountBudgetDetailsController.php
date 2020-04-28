<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\AccountHeadBudgetMasterRepository;
use App\Repositories\AccountHeadRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class AccountBudgetDetailsController extends ApiBaseController
{
    protected $accountBudgetRepository;

    protected $accountHeadBudgetMasterRepository;

    public function __construct(AccountHeadBudgetMasterRepository $accountHeadBudgetMasterRepository,
                                AccountHeadRepository $accountHeadRepository)
    {
        $this->accountHeadBudgetMasterRepository= $accountHeadBudgetMasterRepository;
        $this->accountHeadRepository= $accountHeadRepository;
    }

    /**s
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
            if($request->fiscal_year_id ==  null || $request->fiscal_year_id == ''){
                return $this->respondWithError("Please provide fiscal year");
            }
            $limit=$request->limit == null || $request->limit == '' ? 20 : $request->limit;
            $budget=$request->budget_code == null || $request->budget_code == '' ? '*' : $request->budget_code;
            $account_budgets=$this->accountHeadBudgetMasterRepository->with(['fiscalYear','accountHead.parent','budgetHead'])->orderBy('budget_code','asc')->orderBy('ac_code','asc')->findWhere(['paginate'=>$limit,'fiscal_year_id'=>$request->fiscal_year_id,'budget_code'=>$budget]);
            if($account_budgets->first() ==  null){
                return $this->respondWithError('Data not found');
            }
            return $this->respondWithMessage("Data retrived Successfully",$account_budgets->toArray());
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
        try{
            if($request->fiscal_year_id ==  null || $request->fiscal_year_id == ''){
                return $this->respondWithError("Please provide fiscal year");
            }
            $account_head=$this->accountHeadRepository->findWhere(['group_code'=>$request->ac_code])->first();
            if($account_head == null){
                return $this->respondWithError("Please enter valid account head");
            }
            $account_head_budget=$this->accountHeadBudgetMasterRepository->findWhere(['ac_code'=>$request->ac_code,'fiscal_year_id'=>$request->fiscal_year_id,'budget_code'=>$request->budget_code])->first();
            if($account_head_budget != null){
                return $this->respondWithError("Record already exists in given account head");
            }
            $this->accountHeadBudgetMasterRepository->create($request->all());
            return $this->respondWithMessage('Budget stored successfully',$request->all());
        }catch (\Exception $e){
            return $this->respondWithError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request,$id)
    {

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
            if($request->fiscal_year_id ==  null || $request->fiscal_year_id == ''){
                return $this->respondWithError("Please provide fiscal year");
            }
            $account_head=$this->accountHeadBudgetMasterRepository->findWhere(['group_code'=>$request->ac_code])->first();
            if($account_head == null){
                return $this->respondWithError("Please enter valid account head");
            }
            $this->accountHeadBudgetMasterRepository->update($request->all(),$id);
            return $this->respondWithMessage('Budget updated successfully',$request->all());
        }catch (\Exception $e){
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
        //
    }
}
