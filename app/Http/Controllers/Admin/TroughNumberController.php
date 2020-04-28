<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\TroughNumberRepository;
use App\Validators\TroughNumberValidator;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class TroughNumberController extends ApiBaseController
{
    protected  $troughNumberRepository;

    protected $troughNumberValidator;
    public  function __construct(TroughNumberRepository $troughNumberRepository,
                                TroughNumberValidator $troughNumberValidator)
    {
        $this->troughNumberRepository= $troughNumberRepository;
        $this->troughNumberValidator= $troughNumberValidator;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $estate_id = 1;
            $limit = $request->limit != null ? $request->limit : 20;
            $troughs = $this->troughNumberRepository->with(['estate'])->orderBy('created_at', 'desc')->findWhere(['estate_id' => $estate_id, 'paginate' => $limit]);
            if($troughs->first() == null) {
              return  $this->respondNotFound();
            }
            return $this->respondWithMessage("Data Retrieved Successfully", $troughs->toArray());
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
                $this->troughNumberValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $this->troughNumberRepository->create($request->all());
                return $this->respondWithMessage('Trough Created Successfully!!!', $request->all());
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
            $trough=$this->troughNumberRepository->with(['estate'])->findWhere(['id'=>$id]);
            if($trough->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $trough->first());
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
                $this->troughNumberValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->troughNumberRepository->update($request->all(), $id);
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
            $this->troughNumberRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
            return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
