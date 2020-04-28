<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\AccountBudgetRepository;
use App\Repositories\AccountHeadRepository;
use App\Repositories\AccountTransactionRepository;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class AccountBudgetController extends ApiBaseController
{
    protected $accountBudgetRepository;

    protected $accountHeadRepository;

    public function __construct(AccountBudgetRepository $accountBudgetRepository,
                                AccountHeadRepository $accountHeadRepository)
    {
        $this->accountBudgetRepository= $accountBudgetRepository;
        $this->accountHeadRepository= $accountHeadRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
            $limit=$request->limit == null || $request->limit == '' ? 20 : $request->limit;
           $account_budgets=$this->accountBudgetRepository->with(['accountBudgetDetails.fiscalYear','accountHeads.accountHead.parent'])->orderBy('budget_code','asc')->findWhere(['paginate'=>$limit]);
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
            $inputs['user_id']=1;
            $inputs['estate_id']=1;
            $request->merge($inputs);
            $account_head=$this->accountHeadRepository->findWhere(['group_code'=>$request->ac_code])->first();
            if($account_head == null){
                return $this->respondWithError("Please enter valid account head");
            }
            $this->accountBudgetRepository->create($request->all());
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
        try{
            $fiscal_year_id=$request->fiscal_year_id == null || $request->fiscal_year_id == '' ? null : $request->fiscal_year_id;
            if($fiscal_year_id == null){
                return $this->respondWithError("Fiscal Year not found");

            }
            $account_budgets=$this->accountBudgetRepository->with(['accountBudgetDetails.fiscalYear','accountHeads.accountHead.parent'])->findWhere(['id'=>$id])->first();
            if($account_budgets ==  null){
                return $this->respondWithError('Data not found');
            }
            return $this->respondWithMessage("Data retrived Successfully",$account_budgets);
        }catch (\Exception $e){
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
            $accountBudget=$this->accountBudgetRepository->with(['accountBudgetDetails','accountHeads'])->findWhere(['id'=>$id])->first();
            if($accountBudget != null){
                if($accountBudget->accountBudgetDetails()->first() != null || $accountBudget->accountBudgetDetails()->first() != null){
                    return $this->respondWithError("Budget Head cannot be updated");
                }
                $this->accountBudgetRepository->update($request->all(),$id);
                if($request->add_budget_details == true || $request->add_budget_details == 'true') {
                    if($request->fiscal_year_id == null || $request->fiscal_year_id == ''){
                        return $this->respondWithError("Please provide Fiscal Year");
                    }
                    if ($request->budget_account_heads) {
                        foreach ($request->budget_account_details as $key => $budget_account_detail) {
                            $account_head['ac_code'] = $budget_account_detail;
                            $account_head['fiscal_year_id'] = $request->fiscal_year_id;
                            $this->accountBudgetRepository
                                ->with(['accountHeads'])
                                ->find($accountBudget->id)
                                ->accountHeads()
                                ->create($account_head);
                        }
                    }
                    $bdg_detail['budget_code'] = $accountBudget->budget_code;
                    $bdg_detail['fiscal_year_id'] = $request->fiscal_year_id;
                    $bdg_detail['fiscal_year_id'] = $request->amount;
                    $this->accountBudgetRepository
                        ->with(['accountBudgetDetails'])
                        ->find($accountBudget->id)
                        ->accountBudgetDetails()
                        ->create($bdg_detail);
                }
                return $this->respondWithMessage('Budget updated successfully',$request->all());
            }
            return $this->respondWithError("Budget Head doesnot exist");
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
