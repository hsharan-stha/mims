<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\FiscalYearRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class FiscalYearController extends ApiBaseController
{
    protected $fiscalYearRepository;


    public function __construct(FiscalYearRepository $fiscalYearRepository
           )
    {
       $this->fiscalYearRepository= $fiscalYearRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
            $code ='*';
            $name = '*';
            $limit=$request->limit != null ? $request->limit: 20;
            if($request->filterGroups){
                foreach($request->filterGroups as $filterGroup){
                    if($filterGroup['field'] == 'code'){
                        $code = ['code','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }elseif($filterGroup['field'] == 'name'){
                        $name = $filterGroup['filters'][0]['value'];
                    }else{

                    }
                }
            }
            $allFiscalYears=$this->fiscalYearRepository->findWhere(['code'=>$code,'name'=>$name,'paginate'=>$limit]);
            if($allFiscalYears->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allFiscalYears->toArray());
        }catch(\Exception $e){
            return $this->respondInternalError();
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
            $inputs['user_id']=1;
            $inputs['estate_id']=1;
            $request->merge($inputs);
            $this->fiscalYearRepository->create($request->all());
            return $this->respondWithMessage('Fiscal Year Created Successfully!!!', $request->all());
        }catch(\Exception $e){
            return $this->respondInternalError();
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
            $fiscalYear=$this->fiscalYearRepository->findWhere(['id'=>$id]);
            if($fiscalYear->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $fiscalYear->first());
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
            $this->fiscalYearRepository->update($request->all(), $id);
            return $this->respondWithMessage('Fiscal Year updated Successfully!!!', $request->all());
        }catch(\Exception $e){
            return $this->respondInternalError();
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
        //
    }
}
