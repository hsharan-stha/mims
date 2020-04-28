<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\GardenRepository;
use App\Validators\GardenValidator;
use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\Exceptions\ValidatorException;


class GardenController extends ApiBaseController
{

    protected $gardenRepsoitory;
    protected $gardenValidator;


    public function __construct(GardenRepository $gardenRepository, GardenValidator $gardenValidator){
        $this->gardenRepository= $gardenRepository;
        $this->gardenValidator= $gardenValidator;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
        $limit= $request->limit != null ? $request->limit: "all";
        $allGarden= $this->gardenRepository->findWhere(['paginate'=>$limit]);
        if($allGarden->first()== null){
            return $this->respondNotFound();
        }
        return $this->respondWithMessage('Data Retrived Successfully!!!', $allGarden->toArray()); 
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
            $this->gardenValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
            $this->gardenRepository->create($request->all());
            return $this->respondWithMessage('Garden Created Successfully!!!', $request->all());
        }catch(\ValidatorException $e){
            return $this->respondWithError($e->getMessageBag());
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
            $garden=$this->gardenRepository->findWhere(['id'=>$id]);
            if($garden->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $garden->first());
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
            $this->gardenValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
            $this->gardenRepository->update($request->all(),$id);
            return $this->respondWithMessage('Garden Updated Successfully!!!', $request->all());
        }catch(\ValidatorException $e){
            return $this->respondWithError($e->getMessageBag());
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
        $this->gardenRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
