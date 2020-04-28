<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Admin\ApiBaseController;
use App\Repositories\PermissionRepository;
use Illuminate\Http\Request;
use \Prettus\Validator\Exceptions\ValidatorException;
use \Prettus\Validator\Contracts\ValidatorInterface;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Validators\PermissionValidator;

class PermissionController extends ApiBaseController
{


    /**
     * @var
     */
    protected $repository;


    /**
     * @var
     */
    protected $validator;


    public function __construct(PermissionRepository $repository, PermissionValidator $validator)
    {
        $this->repository = $repository;
        $this->validator = $validator;
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function index(Request $request)
    {
        $limit = (int)$request->get('limit', null);
        if(isset($limit) && !empty($limit))
        {
            $permissions = $this->repository->paginate($limit);
        }
        else
        {
            $permissions = $this->repository->all();
        }

        if(!$permissions)
        {
            return $this->respondNotFound();
        }
        return $this->respondWithMessage('Data retrieved Successfully',$permissions->toArray());
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
            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);
            $role = $this->repository->create($request->all());
            return $this->respondWithMessage('Permission Created Successfully',$request->all());
        }catch (ValidatorException $e){
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
        $role = $this->repository->find($id);
        if(!$role){
            return $this->respondNotFound();
        }

        return $this->respondWithMessage('Permission retrived succesfully', $role->toArray());
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
        try {
            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);
            $this->repository->update($request->all(), $id);
            return $this->respondWithMessage('Permission Updated Successfully!!!', $request->all());
        } catch (ValidatorException $e) {
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
            $data = $this->repository->find($id);
            $this->repository->delete($id);
            return $this->respondWithMessage('Permission Deleted Successfully!!!', $data);
        } catch (ValidationException $e) {
            return $e->errors();
        }
    }
}
