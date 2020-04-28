<?php

namespace App\Http\Controllers\Admin;
use App\Repositories\RouteRepository;
use App\Http\Controllers\Admin\ApiBaseController;
use Illuminate\Http\Request;
use \Prettus\Validator\Exceptions\ValidatorException;
use \Prettus\Validator\Contracts\ValidatorInterface;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Validators\RouteValidator;

class RouteController extends ApiBaseController
{

    /**
     * @var
     */
    protected $repository;


    /**
     * @var
     */
    protected $validator;


    /**
     * RouteController constructor.
     * @param RouteRepository $repository
     * @param RouteValidatorm $validator
     */
    public function __construct(RouteRepository $repository, RouteValidator $validator)
    {
        $this->repository = $repository;
        $this->validator = $validator;
    }


    /**
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        $limit = (int)$request->get('limit', null);
        if(isset($limit) && !empty($limit))
        {
            $routes = $this->repository->paginate($limit);
        }
        else
        {
            $routes = $this->repository->all();
        }

        if(!$routes)
        {
            return $this->respondNotFound();
        }
        return $this->respondWithMessage('Data retriever Successfully',$routes->toArray());
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
            $route = $this->repository->create($request->all());
            //dd($route);
            return $this->respondWithMessage('Route Created Successfully',$request->all());
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
        $route = $this->repository->find($id);
        if(!$route){
            return $this->respondNotFound();
        }
        return $this->respondWithMessage('Route retrived succesfully', $route->toArray());
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
            return $this->respondWithMessage('Route Updated Successfully!!!', $request->all());
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
            return $this->respondWithMessage('Route Deleted Successfully!!!', $data);
        } catch (ValidationException $e) {
            return $e->errors();
        }
    }
}
