<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\RoleRepository;
use App\Repositories\UserRepository;
use App\Repositories\ProfileRepository;
use App\Http\Controllers\Admin\ApiBaseController;
use Illuminate\Http\Request;
use \Prettus\Validator\Exceptions\ValidatorException;
use \Prettus\Validator\Contracts\ValidatorInterface;

use App\Http\Requests;
use App\Validators\UserValidator;
use Auth;

/**
 * Class UserController
 * @package App\Http\Controllers\Admin
 */
class UserController extends ApiBaseController
{

    /**
     * @var
     */
    protected $userRepository;


    /**
     * @var
     */
    protected $userValidator;

    /**
     * UserController constructor.
     * @param UserRepository $repository
     * @param UserValidator $validator
     */
    protected $roleRepository;
	
	protected $profileRepository;

    public function __construct(
        UserRepository $userRepository,
        UserValidator $userValidator,
        RoleRepository $roleRepository,
		ProfileRepository $profileRepository
    ) {
        $this->userRepository = $userRepository;
        $this->userValidator = $userValidator;
        $this->roleRepository = $roleRepository;
        $this->profileRepository = $profileRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $limit = $request->limit != null ? $request->limit : 'all';
            $allUsers=null;
            $allUsers = ($limit) ? $this->userRepository->with([
                'roles','estates'
            ])->orderBy('created_at',
                'desc')->paginate($limit) : $this->userRepository->with([
                'roles','estates'
            ])->orderBy('created_at',
                'desc')->all();

            if (!$allUsers) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Users Retrieved Successfully', $allUsers->toArray());
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $this->userValidator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);
            $user = $this->userRepository->create($request->all());
            $role_id=[$request->role_id];
            $user->roles()->sync($role_id);
            $user->estates()->sync($request->estate_id);
            $user_id = $user->id;
            if ($request->flag == 1) {
                $inputs['flag'] = 1;
            } else {
                $inputs['flag'] = 0;
            }
            return $this->respondWithMessage('User Created Successfully!!!', $user->toArray());
        } catch (ValidatorException $e) {
            return $this->respondWithError($e->getMessageBag());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = $this->userRepository->with(['roles','estates'])->find($id);
        if (!$user) {
            return $this->respondNotFound();
        }

        return $this->respondWithMessage('Data retrived succesfully', $user->toArray());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $inputs = [];
        try {
            $this->userValidator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            if($request->flag){
                if ($request->flag == "1") {
                    $inputs['flag'] = 1;
                } else {
                    $inputs['flag'] = 0;
                }
            }
            $request->merge($inputs);
            $user = $this->userRepository->update($request->all(), $id);
            $role_id=[$request->role_id];
            $user->roles()->sync($role_id);
            $user->estates()->sync($request->estate_id);
            return $this->respondWithMessage('User Updated Successfully!!!', $user->toArray());
        } catch (ValidatorException $e) {
            return $this->respondWithError($e->getMessageBag());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $data = $this->userRepository->find($id);
            $this->userRepository->delete($id);
            return $this->respondWithMessage('User Deleted Successfully!!!', $data);
        } catch (ValidationException $e) {
            return $e->errors();
        }
    }
}
