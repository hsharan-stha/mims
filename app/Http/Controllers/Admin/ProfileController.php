<?php

namespace App\Http\Controllers\Admin;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\ProfileRepository;
use App\Repositories\UserRepository;
use App\Validators\ProfileValidator;
use \Prettus\Validator\Exceptions\ValidatorException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Prettus\Validator\Contracts\ValidatorInterface;



class ProfileController extends ApiBaseController
{
    /**
     * @var UserRepository
     */
    protected $userRepository;

    /**
     * @var ProfileRepository
     */
    protected $repository;
    /**
     * @var
     */
    protected $validator;
    /**
     * @var
     */
    protected $upload;

    /**
     * ProfileController constructor.
     * @param UserRepository $user
     *
     */

    public function __construct(
        ProfileRepository $repository,
        UserRepository $userRepository,
        ProfileValidator $validator,
        UploadController $upload
    ) {
        $this->userRepository = $userRepository;
        $this->repository = $repository;
        $this->validator = $validator;
        $this->upload = $upload;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('user.profile_form_create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $inputs=[];
        $files = $request->file('image');
        try {
            $this->validator->with($request->all())->passesOrFail(validatorInterface::RULE_CREATE);
            if ($request->file('image')) {
                $inputs['images'] = json_encode($this->upload->storeImage($request->file('image')));
            }
            $request->merge($inputs);
            $profile=$this->repository->create($request->all());
            $inputs['profile_id'] = $profile->_id;
            $request->merge($inputs);
            $this->userRepository->update($request->all(),$request->user_id);
            return $this->respondWithMessage('Profile Created Successfully!!!', $profile->toArray());
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
        if (!$this->userRepository->find($id)) {
            return $this->respondNotFound();
        } else {
            $data['profile'] = $this->userRepository->with(['profile', 'roles'])->find($id);
            return $this->respondWithMessage('Data Retrieved Successfully!!!', $data);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

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
        $inputs=[];

        $files = $request->file('image');

//        try {
            $this->validator->with($request->all())->passesOrFail(validatorInterface::RULE_UPDATE);
            if ($request->file('image')) {
                if ($this->repository->find($id)->images) {
                    $images = $this->repository->find($id)->images;
                    $this->upload->destroyImage($images);
                }
                $inputs['images'] = json_encode($this->upload->storeImage($request->file('image')));
            }
            if ($request->image=='deleteImage') {
                if ($this->repository->find($id)->images) {
                    $images = $this->repository->find($id)->images;
                    $this->upload->destroyImage($images);
                }
                $inputs['images'] = null;
            }
            $inputs['profile_id'] = $id;
            $request->merge($inputs);
            $this->repository->update($request->all(), $id);
            return $this->respondWithMessage('Profile Updated Successfully!!!', $request->all());
//        } catch (ValidatorException $e) {
//            return $this->respondWithError($e->getMessageBag());
        }
//    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

    }
}
