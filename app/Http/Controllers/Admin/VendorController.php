<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Repositories\VendorRepository;
use App\Validators\VendorValidator;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class VendorController extends ApiBaseController
{

    protected $vendorValidator;

    protected $vendorRepository;

    public function __construct(VendorRepository $vendorRepository, VendorValidator $vendorValidator)
    {
        $this->vendorRepository= $vendorRepository;
        $this->vendorValidator = $vendorValidator;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
            $code='*';
            $name='*';
            $contact='*';
        $limit=$request->limit != null ? $request->limit: "all";
        if($request->filterGroups){
                foreach($request->filterGroups as $filterGroup){
                    if($filterGroup['field'] == 'name'){
                        $name = ['name','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }elseif($filterGroup['field'] == 'code'){
                        $code = ['code','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }elseif($filterGroup['field'] == 'contact_no') {
                        $contact = ['contact_no','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }else{

                    }
                }
            }
        $allVendors=$this->vendorRepository->findWhere(['code'=>$code,'name'=>$name,'contact_no'=>$contact,'paginate'=>$limit]);
        if($allVendors->first() == null){
            return $this->respondNotFound();
        }
        return $this->respondWithMessage('Data Retrieved Successfully', $allVendors->toArray());
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
                $this->vendorValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $this->vendorRepository->create($request->all());
                return $this->respondWithMessage('Vendor Created Successfully!!!', $request->all());
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
            $vendor=$this->vendorRepository->findWhere(['id'=>$id]);
            if($vendor->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $vendor->first());
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
                $this->vendorValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->vendorRepository->update($request->all(), $id);
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
        $this->vendorRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
