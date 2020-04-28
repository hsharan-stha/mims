<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Repositories\ActivityMasterRepository;
use App\Validators\ActivityMasterValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class ActivityMasterController extends ApiBaseController
{
    protected $activityMasterRepository;

    protected $activityMasterValidator;

    public function __construct(ActivityMasterRepository $activityMasterRepository,
                                ActivityMasterValidator $activityMasterValidator){
        $this->activityMasterRepository = $activityMasterRepository;
        $this->activityMasterValidator = $activityMasterValidator;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
            $limit=$request->limit != null ? $request->limit: 'all';
            $code = '*';
            $name='*';
            $activity_group_id='*';
            if($request->filterGroups){
                foreach($request->filterGroups as $filterGroup){
                    if($filterGroup['field'] == 'code'){
                        $code = ['code','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }
                    else if($filterGroup['field'] == 'name'){
                        $name = ['name','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }
                    else if($filterGroup['field'] == 'activity_group_name'){
                        $activity_group_id = $filterGroup['filters'][0]['value'];
                    }else{

                    }
                }
            }
            $allActivityMasters = $this->activityMasterRepository->with(['activityGroup','activityPaybooks','activityPaybooks.paybook'])->findWhere(['code'=>$code,'name'=>$name,'activity_group_id'=>$activity_group_id,'paginate'=>$limit]);
        if($request->report == 'report'){
            $i = 0;
            $data['allActivityMasters']= $allActivityMasters;
            Excel::create('KamjariReport', function ($excel) use ($data) {
                $excel->setTitle('Kamjari Report');
                $excel->setCreator('Phoenix Solutions')
                    ->setCompany('Phoenix Solutions');
                $excel->setDescription('Kamjari Report');
                $excel->sheet('First sheet', function ($sheet) use ($data) {
                    $sheet->loadView('reports.payroll.activity_master', $data);
                });

            })->export('xls');
        }
        if($allActivityMasters->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allActivityMasters->toArray());
        }catch(\Exception $e){
            $this->respondWithError($e->getMessage());
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
//        try{
//            try{
                $inputs['user_id']=1;
                $inputs['estate_id']=1;
                $request->merge($inputs);
                $this->activityMasterValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $this->activityMasterRepository->create($request->all());
                return $this->respondWithMessage('Activity Master Created Successfully!!!', $request->all());
//            }catch(ValidatorException $e){
//                return $this->respondWithError($e->getMessageBag());
//            }
//        }catch(\Exception $e){
//            $this->respondWithError($e->getMessage());
//        }
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
            $activityMaster=$this->activityMasterRepository->with(['activityGroup','activityPaybooks','activityPaybooks.paybook'])->findWhere(['id'=>$id]);
            if($activityMaster->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $activityMaster->first());
        }catch(\Exception $e){
            $this->respondWithError($e->getMessage());
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
                $this->activityMasterValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->activityMasterRepository->update($request->all(), $id);
                return $this->respondWithMessage('Record Updated Successfully', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
            $this->respondWithError($e->getMessage());
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
        $this->activityMasterRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            $this->respondWithError($e->getMessage());
        }
    }
}
