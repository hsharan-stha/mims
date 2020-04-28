<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\ConsumptionParticularMasterRepository;
use App\Validators\ConsumptionParticularMasterValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class ConsumptionParticularMasterController extends ApiBaseController
{
    protected $consumptionParticularMasterRepository;

    protected $consumptionParticularMasterValidator;

    public function __construct(ConsumptionParticularMasterRepository $consumptionParticularMasterRepository,
                                ConsumptionParticularMasterValidator $consumptionParticularMasterValidator){
        $this->consumptionParticularMasterRepository = $consumptionParticularMasterRepository;
        $this->consumptionParticularMasterValidator = $consumptionParticularMasterValidator;
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
            $allConsumptionParticularMasters=$this->consumptionParticularMasterRepository->findWhere(['paginate'=>$limit]);
            if($allConsumptionParticularMasters->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allConsumptionParticularMasters->toArray());
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
                $this->consumptionParticularMasterValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $this->consumptionParticularMasterRepository->create($request->all());
                return $this->respondWithMessage('Consumption Particular Master Created Successfully!!!', $request->all());
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
            $consumptionParticularMaster=$this->consumptionParticularMasterRepository->findWhere(['id'=>$id]);
            if($consumptionParticularMaster->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $consumptionParticularMaster->first());
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
                $this->consumptionParticularMasterValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->consumptionParticularMasterRepository->update($request->all(), $id);
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
        $this->consumptionParticularMasterRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
