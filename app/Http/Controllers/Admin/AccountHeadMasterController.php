<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\AccountHeadRepository;
use App\Validators\AccountHeadValidator;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Prettus\Validator\Exceptions\ValidatorException;
use Prettus\Validator\Contracts\ValidatorInterface;

class AccountHeadMasterController extends ApiBaseController
{
    protected  $accountHeadRepository;

    protected $accountHeadValidator;

    public function __construct(AccountHeadRepository $accountHeadRepository, AccountHeadValidator $accountHeadValidator)
    {
        $this->accountHeadRepository= $accountHeadRepository;
        $this->accountHeadValidator= $accountHeadValidator;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
            if($request->get_max_tr_level == 'true' || $request->get_max_tr_level == true){
               $data['max_level']=$this->accountHeadRepository->orderBy('tr_level','desc')->findWhere(['paginate'=>'*'])->first()->tr_level;
                return $this->respondWithMessage('Maximum level found successfully', $data);
            }
            $limit=$request->limit != null ? $request->limit: "all";
            $group_code=$request->group_code == null ||  $request->group_code == '' ? '*' : $request->group_code;
            $transact = $request->transact == null || $request->transact == '' ? '*' : $request->transact;
            $allAccountHeads=$this->accountHeadRepository->with(['parent','children','children.parent'])->orderBY('group_code','asc')->findWhere(['paginate'=>$limit,'group_code'=>$group_code,'transact'=>['transact','=',$transact]]);
            if($allAccountHeads->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allAccountHeads->toArray());
        }catch (\Exception $e){
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            try{
                $inputs['user_id']=1;
                $inputs['estate_id']=1;
                $request->merge($inputs);
                $this->accountHeadValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                try {
                    $child_account_heads = $this->accountHeadRepository->findWhere(['paginate' => '*', 'group_master_code' => $request->group_master_code]);
                    $parent=$this->accountHeadRepository->findWhere(['group_code'=>$request->group_master_code])->first();
                    if (count($child_account_heads) > 0) {
                        $max_group_code_account_head = $child_account_heads->where('group_code', $child_account_heads->max('group_code'))->first();
                        $max_group_code = str_replace($request->group_master_code, '', $max_group_code_account_head->group_code);
                        $group_code = sprintf("%02d", $max_group_code + 1);
                        $inputs['group_code'] = $request->group_master_code . $group_code;
                        $inputs['tr_level']=$parent->tr_level+1;
                    } else {
                        $inputs['group_code'] = $request->group_master_code . '01';
                        $inputs['tr_level']=$parent->tr_level+1;
                    }
                }catch (\Exception $e){
                    $this->respondWithError("Error while creation of group code");
                }
                $request->merge($inputs);
                $this->accountHeadRepository->create($request->all());
                return $this->respondWithMessage('Account Head Created Successfully!!!', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch (\Exception $e){
            $this->respondWithError($e->getMessage());
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
            $accountHead=$this->accountHeadRepository->with(['parent','children'])->findWhere(['id'=>$id]);
            if($accountHead->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $accountHead->first());
        }catch(\Exception $e){
            $this->respondWithError($e->getMessage());
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
                $this->accountHeadValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->accountHeadRepository->update($request->all(), $id);
                return $this->respondWithMessage('Record Updated Successfully', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
            $this->respondWithError($e->getMessage());
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
        $this->accountHeadRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            $this->respondWithError($e->getMessage());
        }
    }
}
