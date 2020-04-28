<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\PaybookMasterRepository;
use App\Repositories\WorkerPFDepositRepository;
use App\Validators\PaybookMasterValidator;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use Excel;
use DB;

class PaybookMasterController extends ApiBaseController
{
    protected $paybookMasterRepository;

    protected $paybookMasterValidator;

    protected $workerPFDepositRepository;

    public function __construct(PaybookMasterRepository $paybookMasterRepository,
                                WorkerPFDepositRepository $workerPFDepositRepository,
                                PaybookMasterValidator $paybookMasterValidator)
    {
        $this->paybookMasterRepository = $paybookMasterRepository;
        $this->paybookMasterValidator = $paybookMasterValidator;
        $this->workerPFDepositRepository= $workerPFDepositRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
            $code = '*';
            $name='*';
            $worker_category = '*';
            $limit=$request->limit != null ? $request->limit: 20;
            if($request->filterGroups){
                foreach($request->filterGroups as $filterGroup){
                    if($filterGroup['field'] == 'code'){
                        $code= ['code','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }
                    else if($filterGroup['field'] == 'name'){
                        $name= ['name','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }
                    else if($filterGroup['field'] == 'worker_category'){
                        $worker_category= ['worker_category','LIKE','%'.$filterGroup['filters'][0]['value'].'%'];
                    }else{

                    }
                }
            }
            $allPaybooks=$this->paybookMasterRepository->with(['activities','deductions','earnings','paybookActivities','paybookActivities.activity','paybookLeaves','paybookLeaves.leave'])->findWhere(['code'=>$code,'name'=>$name,'worker_category'=>$worker_category,'paginate'=>$limit]);
        if($request->report == 'report'){
            $i = 0;
            $data['allPaybooks']= $allPaybooks;
            Excel::create('KamjariReport', function ($excel) use ($data) {
                $excel->setTitle('Kamjari Report');
                $excel->setCreator('Phoenix Solutions')
                    ->setCompany('Phoenix Solutions');
                $excel->setDescription('Kamjari Report');
                $excel->sheet('First sheet', function ($sheet) use ($data) {
                    $sheet->loadView('reports.payroll.paybook_master', $data);
                });

            })->export('xls');
        }elseif($request->report == 'worker_pf_ledger'){
            if($request->worker_id == null || $request->worker_id == ''){
                return $this->respondWithError("Worker Not Provided");
            }else{
                $date_from=date('Y-m-d',strtotime('-1 day', strtotime($request->date_from)));
                $date_to=date('Y-m-d',strtotime('+1 day', strtotime($request->date_to)));
                $opening=DB::select(DB::raw("SELECT GET_OPENING_WORKER_PF_DEPOSIT(:from_date,:worker_id) AS opening;"),
                    array(
                        'worker_id'=>$request->worker_id,
                        'from_date'=>$request->date_from
                    ));
                if(array_key_exists(0,$opening)) {
                    $data['opening'] = $opening[0]->opening;
                }else{
                    $data['opening']=0;
                }
                $workerPFs= $this->workerPFDepositRepository->with(['worker'])->orderBy('date','asc')->findWhere(['worker_id'=>$request->worker_id,'date'=>[$date_from,'<>',$date_to]]);
                $data['workerPFs']= $workerPFs;
                Excel::create('Worker PF Ledger', function ($excel) use ($data) {
                    $excel->setTitle('Worker PF Ledger Report');
                    $excel->setCreator('Phoenix Solutions')
                        ->setCompany('Phoenix Solutions');
                    $excel->setDescription('Worker PF Ledger Report');
                    $excel->sheet('First sheet', function ($sheet) use ($data) {
                        $sheet->loadView('reports.payroll.worker_pf_ledger', $data);
                    });
               })->export('xls');
            }

        }else{

        }

        if($allPaybooks->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allPaybooks->toArray());
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
                $input['user_id']=1;
                $input['estate_id']=1;
                $request->merge($input);
                $this->paybookMasterValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $paybook=$this->paybookMasterRepository->create($request->all());
        if ($request->paybookActivityDetails) //            return \App\Entities\Post::find(2)->categories()->get();
        {
            foreach($request->paybookActivityDetails as $paybookActivityDetail) {
                $this->paybookMasterRepository
                    ->with(['paybookActivities'])
                    ->find($paybook->id)
                    ->paybookActivities()
                    ->create($paybookActivityDetail);
            }
        }
        if ($request->earning_id)
        {
            $this->paybookMasterRepository
                ->with(['earnings'])
                ->find($paybook->id)
                ->earnings()
                ->sync($request->earning_id);
        }
        if ($request->deduction_id)
        {
            $this->paybookMasterRepository
                ->with(['deductions'])
                ->find($paybook->id)
                ->deductions()
                ->sync($request->deduction_id);
        }
        if ($request->holiday_id)
        {
            $this->paybookMasterRepository
                ->with(['holidays'])
                ->find($paybook->id)
                ->holidays()
                ->sync($request->holiday_id);
        }
        if ($request->leave_id)
        {
            $this->paybookMasterRepository
                ->with(['leaves'])
                ->find($paybook->id)
                ->leaves()
                ->sync($request->leave_id);
        }
        if ($request->paybookLeaveDetails) //            return \App\Entities\Post::find(2)->categories()->get();
        {

            $paybook->paybookLeaves()->delete();
            foreach($request->paybookLeaveDetails as $paybookLeaveDetail) {
                $this->paybookMasterRepository
                    ->with(['paybookLeaves'])
                    ->find($paybook->id)
                    ->paybookLeaves()
                    ->create($paybookLeaveDetail);
            }
        }
                return $this->respondWithMessage('Paybook Master Created Successfully!!!', $request->all());
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
            $paybook=$this->paybookMasterRepository->with(['activities','deductions','earnings','paybookActivities','paybookActivities.activity','paybookLeaves','paybookLeaves.leave'])->findWhere(['id'=>$id]);
            if($paybook->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $paybook->first());
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
//        try{
//            try{

                $this->paybookMasterValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $paybook=$this->paybookMasterRepository->update($request->all(), $id);
                if ($request->paybookActivityDetails) //            return \App\Entities\Post::find(2)->categories()->get();
                {
                    $paybook->paybookActivities()->delete();
                    foreach($request->paybookActivityDetails as $paybookActivityDetail) {
                        $this->paybookMasterRepository
                            ->with(['paybookActivities'])
                            ->find($id)
                            ->paybookActivities()
                            ->create($paybookActivityDetail);
                    }
                }else{
                    $paybook->paybookActivities()->delete();
                }
                if ($request->paybookLeaveDetails) //            return \App\Entities\Post::find(2)->categories()->get();
                    {
                        $paybook->paybookLeaves()->delete();
                        foreach($request->paybookLeaveDetails as $paybookLeaveDetail) {
                            $this->paybookMasterRepository
                                ->with(['paybookLeaves'])
                                ->find($id)
                                ->paybookLeaves()
                                ->create($paybookLeaveDetail);
                        }
                    }else{
                    $paybook->paybookLeaves()->delete();
                }
                if ($request->earning_id)
                {
                    $this->paybookMasterRepository
                        ->with(['earnings'])
                        ->find($paybook->id)
                        ->earnings()
                        ->sync($request->earning_id);
                }else{
                    $paybook->earnings()->detach();
                }
                if ($request->deduction_id)
                {
                    $this->paybookMasterRepository
                        ->with(['deductions'])
                        ->find($paybook->id)
                        ->deductions()
                        ->sync($request->deduction_id);
                }else{
                    $paybook->deductions()->detach();
                }

                return $this->respondWithMessage('Record Updated Successfully', $request->all());
//            }catch(ValidatorException $e){
//                return $this->respondWithError($e->getMessageBag());
//            }
//        }catch(\Exception $e){
//            return $this->respondInternalError();
//        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
//        try {
            $data['id']= $id;
            $this->paybookMasterRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
            return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
//        } catch (\Exception $e) {
//            return $this->respondInternalError();
//        }
    }
}
