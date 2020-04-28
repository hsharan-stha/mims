<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\ProductCategoryRepository;
use App\Validators\ProductCategoryValidator;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class ProductCategoryController extends ApiBaseController
{
    protected $productCategoryRepository;

    protected $productCategoryValidator;

   public function __construct(ProductCategoryRepository $productCategoryRepository,
    ProductCategoryValidator $productCategoryValidator)
   {
       $this->productCategoryRepository= $productCategoryRepository;
       $this->productCategoryValidator= $productCategoryValidator;
   }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
            $limit=$request->limit != null ? $request->limit: "all";
            $code ='*';
            $name = '*';
            $parent_id ='*';
            if($request->filterGroups){
                foreach($request->filterGroups as $filterGroup){
                    if($filterGroup['field'] == 'code'){
                        $code = ['code','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }elseif($filterGroup['field'] == 'parent_name'){
                        $parent_id = $filterGroup['filters'][0]['value'];
                    }elseif($filterGroup['field'] == 'name'){
                        $name = ['name','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }else{

                    }
                }
            }
            $allCatgeories=$this->productCategoryRepository->findWhere(['code'=>$code,'name'=>$name,'paginate'=>$limit]);
            if($allCatgeories->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allCatgeories->toArray());
        }catch (\Exception $e){
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
                $this->productCategoryValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $this->productCategoryRepository->create($request->all());
                return $this->respondWithMessage('Product Category Created Successfully!!!', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch (\Exception $e){
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

            $productCategory=$this->productCategoryRepository->findWhere(['id'=>$id]);
            if($productCategory->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $productCategory->first());
        }catch(\Exception $e){
            return $this->respondInternalError();
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
                $this->productCategoryValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->productCategoryRepository->update($request->all(), $id);
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
        $this->productCategoryRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
