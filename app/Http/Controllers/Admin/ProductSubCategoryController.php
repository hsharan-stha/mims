<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Repositories\ProductSubcategoryRepository;
use App\Validators\ProductSubCategoryValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class ProductSubCategoryController extends ApiBaseController
{
    protected $productSubCategoryRepository;

    protected $productSubCategoryValidator;

    public function __construct(ProductSubCategoryRepository $productSubCategoryRepository,
                                ProductSubCategoryValidator $productSubCategoryValidator)
    {
        $this->productSubCategoryRepository = $productSubCategoryRepository;
        $this->productSubCategoryValidator = $productSubCategoryValidator;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $limit = $request->limit != null ? $request->limit : "all";
            $allSubCatgeories = $this->productSubCategoryRepository->with(['productCategory'])->findWhere(['paginate' => $limit]);
            if ($allSubCatgeories->first() == null) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allSubCatgeories->toArray());
        } catch (\Exception $e) {
            $this->respondInternalError("Something went wrong");
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
                $request->merge($inputs);
                $this->productSubCategoryValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $this->productSubCategoryRepository->create($request->all());
                return $this->respondWithMessage('Product Sub Category Created Successfully!!!', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch (\Exception $e){

        }
    }

    //


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            $productSubCategory=$this->productSubCategoryRepository->with(['productCategory'])->findWhere(['id'=>$id]);
            if($productSubCategory->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $productSubCategory->first());
        }catch(\Exception $e){
            return $this->respondInternalError();
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
                $this->productSubCategoryValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->producSubtCategoryRepository->update($request->all(), $id);
                return $this->respondWithMessage('Record Updated Successfully', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
            return $this->respondInternalError();
        }
    }
        //


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
//    try {
        $data['id']= $id;
        $this->productSubCategoryRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );

//    }catch (\Exception $e) {
//        return $this->respondInternalError();
//    }
}
}
