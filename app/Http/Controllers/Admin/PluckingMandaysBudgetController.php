<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\PluckingMandaysBudgetRepository;
use App\Validators\PluckingMandaysBudgetValidator;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Prettus\Validator\Exceptions\ValidatorException;
use Prettus\Validator\Contracts\ValidatorInterface;
use DB;
class PluckingMandaysBudgetController extends ApiBaseController
{
    protected $pluckingMandaysBudgetRepository;

    protected $pluckingMandaysBudgetValidator;

    public function __construct(PluckingMandaysBudgetRepository $pluckingMandaysBudgetRepository,
                                PluckingMandaysBudgetValidator $pluckingMandaysBudgetValidator)
    {
        $this->pluckingMandaysBudgetRepository= $pluckingMandaysBudgetRepository;
        $this->pluckingMandaysBudgetValidator= $pluckingMandaysBudgetValidator;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $estate_id = 1;
            $allPluckingEstimation = $this->pluckingMandaysBudgetRepository->with(['pluckingMandaysBudgetDetails','fiscalYear','section'])->findWhere(['estate_id'=>$estate_id]);
            if ($allPluckingEstimation->first() == null) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allPluckingEstimation->toArray());
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try{
            try{
                $inputs['user_id']=1;
                $inputs['estate_id']=1;
                $request->merge($inputs);
                $this->pluckingMandaysBudgetValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $pluckingMandaysEstimation=$this->pluckingMandaysBudgetRepository->create($request->all());
                if($request->pluckingMandaysEstimationDetails) {
                    foreach ($request->pluckingMandaysEstimationDetails as $estimation_detail) {
                        $this->pluckingMandaysBudgetRepository
                            ->with(['pluckingMandaysBudgetDetails'])
                            ->find( $pluckingMandaysEstimation->id)
                            ->pluckingMandaysBudgetDetails()
                            ->create($estimation_detail);
                    }
                }else{
                    DB::rollBack();
                    return $this->respondWithMessage("please enter valid data",$request->all());
                }
                DB::commit();
                return $this->respondWithMessage('Plucking Mandays Created Successfully!!!', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
            DB::rollBack();
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
            $process=$this->pluckingMandaysBudgetRepository->with(['pluckingMandaysBudgetDetails','fiscalYear','section'])->findWhere(['id'=>$id]);
            if($process->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $process->first());
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
        DB::beginTransaction();
        try{
            try{
                $this->pluckingMandaysBudgetValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $pluckingMandaysEstimation=$this->pluckingMandaysBudgetRepository->update($request->all(), $id);
                if($request->pluckingMandaysEstimationDetails) {
                    $pluckingMandaysEstimation->pluckingMandaysBudgetDetails()->delete();
                    foreach ($request->pluckingMandaysEstimationDetails as $estimation_detail) {
                        $this->pluckingMandaysBudgetRepository
                            ->with(['pluckingMandaysBudgetDetails'])
                            ->find( $id)
                            ->pluckingMandaysBudgetDetails()
                            ->create($estimation_detail);
                    }
                }else{
                    DB::rollBack();
                    return $this->respondWithMessage("please enter valid data",$request->all());
                }
                DB::commit();
                return $this->respondWithMessage('Record Updated Successfully', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
            DB::rollBack();
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
            $this->pluckingMandaysBudgetRepository->with(['pluckingMandaysBudgetDetails'])->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
            return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
