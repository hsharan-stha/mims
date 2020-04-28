<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\JournalVoucherFormRepository;
use App\Validators\JournalVoucherFormValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class JournalVoucherFormController extends ApiBaseController
{
    protected $journalVoucherFormRepository;

    protected $journalVoucherFormValidator;

    public function __construct(JournalVoucherFormRepository $journalVoucherFormRepository,
                                JournalVoucherFormValidator $journalVoucherFormValidator){
        $this->journalVoucherFormRepository = $journalVoucherFormRepository;
        $this->journalVoucherFormValidator = $journalVoucherFormValidator;
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
            $allJournalVoucherForms=$this->journalVoucherFormRepository->with(['costCenter','accountHead'])->findWhere(['paginate'=>$limit]);
            if($allJournalVoucherForms->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allJournalVoucherForms->toArray());
        }catch(\Exception $e){
            return $this->respondInternalError();
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
//        try{
//            try{
                $inputs['user_id']=1;
                $inputs['estate_id']=1;
                $request->merge($inputs);
                $this->journalVoucherFormValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                if($request->accountTransactionSplits){
                    $transactions = array();
                    foreach($request->accountTransactionSplits as $accountTransition) {
                        $newTrans = $accountTransition;
                        $newTrans['date'] = $request->date;
                        $newTrans['voucher_no'] = $request->voucher_no;
                        $this->journalVoucherFormRepository->create($newTrans);

                    }

                    return $this->respondWithMessage('Journal Voucher Form Created Successfully!!!', $request->all());
                }else{
                    $this->respondInternalError();
                }

//            }catch(ValidatorException $e){
//                return $this->respondWithError($e->getMessageBag());
//            }
//        }catch(\Exception $e){
//            $this->respondInternalError();
//        }
        //
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
            $journalVoucherForm=$this->journalVoucherFormRepository->with(['costCenter','accountHead'])->findWhere(['id'=>$id]);
            if($journalVoucherForm->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $journalVoucherForm->first());
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
                $this->journalVoucherFormValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->journalVoucherFormRepository->update($request->all(), $id);
                return $this->respondWithMessage('Record Updated Successfully', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
            return $this->respondInternalError();
        }
        //
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
        $this->journalVoucherFormRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
//        } catch (\Exception $e) {
//            return $this->respondInternalError();
//        }
        //
    }
}
