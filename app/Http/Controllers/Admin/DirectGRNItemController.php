<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
Use App\Repositories\DirectGRNItemRepository;
use App\Validators\DirectGRNItemValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class DirectGRNItemController extends ApiBaseController
{
    protected $directGRNItemRepository;

    protected $directGRNItemValidator;

    public function __construct(DirectGRNItemRepository $directGRNItemRepository,
                                DirectGRNItemValidator $directGRNItemValidator){
        $this->directGRNItemRepository = $directGRNItemRepository;
        $this->directGRNItemValidator = $directGRNItemValidator;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
//        try{
            $limit=$request->limit != null ? $request->limit: 20;
            $allDirectGRNItems=$this->directGRNItemRepository->findWhere(['paginate'=>$limit]);
            if($allDirectGRNItems->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allDirectGRNItems->toArray());
//        }catch(\Exception $e){
            return $this->respondInternalError();
        }
//    }

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
                $this->directGRNItemValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $this->directGRNItemRepository->create($request->all());
                return $this->respondWithMessage('Direct GRN Item Created Successfully!!!', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
            $this->respondInternalError();
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
            $directGRNItem=$this->directGRNItemRepository->findWhere(['id'=>$id]);
            if($directGRNItem->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $directGRNItem);
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
                $this->directGRNItemValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->directGRNItemRepository->update($request->all(), $id);
                return $this->respondWithMessage('Record Updated Successfully', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
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
//        try {
        $data['id']= $id;
        $this->directGRNItemRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
//        } catch (\Exception $e) {
//            return $this->respondInternalError();
//        }
    }
}
