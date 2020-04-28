<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\CostCenterRepository;
use App\Validators\CostCenterValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class CostCenterController extends ApiBaseController
{
    protected $costCenterRepository;

    protected $costCenterValidator;

    public function __construct(CostCenterRepository $costCenterRepository,
                                CostCenterValidator $costCenterValidator){
        $this->costCenterRepository = $costCenterRepository;
        $this->costCenterValidator = $costCenterValidator;
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
            $allCostCenters=$this->costCenterRepository->findWhere(['paginate'=>$limit]);
            if($allCostCenters->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allCostCenters->toArray());
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
                $this->costCenterValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $this->costCenterRepository->create($request->all());
                return $this->respondWithMessage('Costcenter Created Successfully!!!', $request->all());
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
            $costCenter=$this->costCenterRepository->findWhere(['id'=>$id]);
            if($costCenter->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $costCenter->first());
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
                $this->costCenterValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->costCenterRepository->update($request->all(), $id);
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
        $this->costCenterRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
