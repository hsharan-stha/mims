<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\SupplierRepository;
use App\Validators\SupplierValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class SupplierController extends ApiBaseController
{
    protected $supplierRepository;

    protected $supplierValidator;

    public function __construct(SupplierRepository $supplierRepository,
                                SupplierValidator $supplierValidator){
        $this->supplierRepository = $supplierRepository;
        $this->supplierValidator = $supplierValidator;
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
            $code = '*';
            $name ='*';
            $contact_no = '*';
            if($request->filterGroups){
                foreach($request->filterGroups as $filterGroup){
                    if($filterGroup['field'] == 'code'){
                        $code = ['code','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }elseif($filterGroup['field'] == 'name'){
                        $name = ['name','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }elseif($filterGroup['field'] == 'contact_no'){
                        $contact_no = ['contact_no','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }else{

                    }
                }
            }
            $allSupplier=$this->supplierRepository->findWhere(['code'=>$code,'name'=>$name,'contact_no'=>$contact_no,'paginate'=>$limit]);
            if($request->report == 'report'){
                $i = 0;
                $data['allSupplier']= $allSupplier;
                Excel::create('KamjariReport', function ($excel) use ($data) {
                    $excel->setTitle('Kamjari Report');
                    $excel->setCreator('Phoenix Solutions')
                        ->setCompany('Phoenix Solutions');
                    $excel->setDescription('Kamjari Report');
                    $excel->sheet('First sheet', function ($sheet) use ($data) {
                        $sheet->loadView('reports.manufacturing.supplier', $data);
                    });

                })->export('xls');
            }
            if($allSupplier->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allSupplier->toArray());
        }catch(\Exception $e){
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
                $this->supplierValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $this->supplierRepository->create($request->all());
                return $this->respondWithMessage('Supplier Created Successfully!!!', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
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
            $supplier=$this->supplierRepository->findWhere(['id'=>$id]);
            if($supplier->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $supplier->first());
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
                $this->supplierValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->supplierRepository->update($request->all(), $id);
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
        $this->supplierRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
