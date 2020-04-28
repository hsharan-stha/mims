<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\DepartmentRepository;
use App\Validators\DepartmentValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;


class DepartmentController extends ApiBaseController
{
    protected $departmentRepository;

    protected $departmentValidator;

    public function __construct(DepartmentRepository $departmentRepository,
                                DepartmentValidator $departmentValidator)
    {
        $this->departmentRepository = $departmentRepository;
        $this->departmentValidator = $departmentValidator;
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
            $allDepartments=$this->departmentRepository->findWhere(['paginate'=>$limit]);
            if($allDepartments->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allDepartments->toArray());
        }catch(\Exception $e){
            return $this->respondWithError($e->getMessage());
        }
        //
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
                $this->departmentValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $this->departmentRepository->create($request->all());
                return $this->respondWithMessage('Department Created Successfully!!!', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
            return $this->respondWithError($e->getMessage());
        }
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
        try{
            $department=$this->departmentRepository->findWhere(['id'=>$id]);
            if($department->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $department->first());
        }catch(\Exception $e){
            return $this->respondWithError($e->getMessage());
        }
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
        try{
            try{
                $this->departmentValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->departmentRepository->update($request->all(), $id);
                return $this->respondWithMessage('Record Updated Successfully', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
            return $this->respondWithError($e->getMessage());
        }
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
        try {
        $data['id']= $id;
        $this->departmentRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
        //
    }


