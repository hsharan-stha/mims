<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Admin\ApiBaseController;
use App\Repositories\RoleRepository;
use Illuminate\Http\Request;
use \Prettus\Validator\Exceptions\ValidatorException;
use \Prettus\Validator\Contracts\ValidatorInterface;

use App\Http\Requests;
use App\Validators\RoleValidator;

class RoleController extends ApiBaseController
{


    /**
     * @var
     */
    protected $repository;


    /**
     * @var
     */
    protected $validator;


    public function __construct(RoleRepository $repository, RoleValidator $validator)
    {
        $this->repository = $repository;
        $this->validator = $validator;
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function index(Request $request = null)
    {
        if($request == null)
        {
            $limit = null;
        }else{
            $limit = (int)$request->get('limit', null);
        }

        if(isset($limit) && !empty($limit))
        {
            $roles = $this->repository->paginate($limit);
        }
        else
        {
            $roles = $this->repository->all();
        }

        if(!$roles)
        {
            return $this->respondNotFound();
        }
        return $this->respondWithMessage('Data retriever Successfully',$roles->toArray());
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
            $role->perms()->sync($request->permission_id);
            return $this->respondWithMessage('Role Created Successfully',$request->all());
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
    public function show($id, Request $request)
    {
        $permission_id = $request->get('permission_id');
        if(isset($permission_id) && ($permission_id == true))
        {
            $permissions_id = [];
            $permissions = $this->repository->with(['perms'])->find($id)->perms;
            foreach ($permissions as $permission) {
                array_push($permissions_id, $permission->id);
            }
            return response()->json($permissions_id);
        }
        else
        {
            $role = $this->repository->with(['perms'])->find($id);
            if(!$role){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Role retrived succesfully', $role->toArray());
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
        try {
            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);
            $role = $this->repository->update($request->all(), $id);
            if($request->permission_id)
            {
                $role->perms()->sync($request->permission_id);
            }
            return $this->respondWithMessage('Role Updated Successfully!!!', $request->all());
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
            return $this->respondWithMessage('Role Deleted Successfully!!!', $data);
        } catch (ValidationException $e) {
            return $e->errors();
        }
    }
}
