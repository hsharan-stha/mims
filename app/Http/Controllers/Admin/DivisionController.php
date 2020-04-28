<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\DivisionRepository;
use App\Validators\DivisionValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class DivisionController extends ApiBaseController
{
    protected $divisionRepository;

    protected $divisionValidator;

    public function __construct(DivisionRepository $divisionRepository,
    DivisionValidator $divisionValidator){
        $this->divisionRepository= $divisionRepository;
        $this->divisionValidator = $divisionValidator;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
         $limit=$request->limit != null ? $request->limit: 20;
        $allDivisions=$this->divisionRepository->findWhere(['paginate'=>$limit]);
        if($allDivisions->first() == null){
            return $this->respondNotFound();
        }
        return $this->respondWithMessage('Data Retrieved Successfully', $allDivisions->toArray());
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
            $this->divisionValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
            $this->divisionRepository->create($request->all());
            return $this->respondWithMessage('Division Created Successfully!!!', $request->all());
        }catch(ValidatorException $e){
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
       $division=$this->divisionRepository->findWhere(['id'=>$id]);
        if($division->first()== null){
            return $this->respondNotFound();
        }
        return $this->respondWithMessage('Data Retrieved Successfully', $division->first());
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
//        try{
            try{
                $this->divisionValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->divisionRepository->update($request->all(), $id);
                return $this->respondWithMessage('Record Updated Successfully', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
//        }catch(\Exception $e){
//            return $this->respondInternalError();
//        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
//        try {
        $data['id']= $id;
        $this->divisionRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
//        } catch (\Exception $e) {
//            return $this->respondInternalError();
//        }
    }
}
