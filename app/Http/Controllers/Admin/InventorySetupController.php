<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\InventorySetupRepository;
use App\Validators\InventorySetupValidator;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Prettus\Validator\Exceptions\ValidatorException;
use Prettus\Validator\Contracts\ValidatorInterface;

class InventorySetupController extends ApiBaseController
{
    protected $inventorySetupRepository;


    protected $inventorySetupValidator;

    public function __construct(InventorySetupValidator $inventorySetupValidator,InventorySetupRepository $inventorySetupRepository)
    {
        $this->inventorySetupRepository= $inventorySetupRepository;
        $this->inventorySetupValidator= $inventorySetupValidator;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
            $limit=$request->limit != null ? $request->limit: 20;
            $allInventorySetups=$this->inventorySetupRepository->with(['fiscalYear'])->findWhere(['paginate'=>$limit]);
            if($allInventorySetups->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allInventorySetups->toArray());
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
        try{
            try{
                $inputs['user_id']=1;
                $inputs['estate_id']=1;
                $request->merge($inputs);
                $this->inventorySetupValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $this->inventorySetupRepository->create($request->all());
                return $this->respondWithMessage('Inventroy Created Successfully!!!', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
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
            $inventorySetup=$this->inventorySetupRepository->with(['fiscalYear'])->findWhere(['id'=>$id]);
            if($inventorySetup->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $inventorySetup->first());
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
                $this->inventorySetupValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->inventorySetupRepository->update($request->all(), $id);
                return $this->respondWithMessage('Record Updated Successfully', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
            return $this->respondInternalError();
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
        $this->inventorySetupRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
