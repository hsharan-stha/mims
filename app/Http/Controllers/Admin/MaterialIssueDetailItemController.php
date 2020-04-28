<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\MaterialIssueDetailItemRepository;
use App\Validators\MaterialIssueDetailItemValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class MaterialIssueDetailItemController extends ApiBaseController
{
    protected $materialIssueDetailItemRepository;

    protected $materialIssueDetailItemValidator;

    public function __construct(MaterialIssueDetailItemRepository $materialIssueDetailItemRepository,
                                MaterialIssueDetailItemValidator $materialIssueDetailItemValidator){
        $this->materialIssueDetailItemRepository = $materialIssueDetailItemRepository;
        $this->materialIssueDetailItemValidator = $materialIssueDetailItemValidator;
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
            $allMaterialIssues=$this->materialIssueDetailItemRepository->findWhere(['paginate'=>$limit]);
            if($allMaterialIssues->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allMaterialIssues->toArray());
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
                $this->materialIssueDetailItemValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $this->materialIssueDetailItemRepository->create($request->all());
                return $this->respondWithMessage('Material Issue Detail Item Created Successfully!!!', $request->all());
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
            $materialIssue=$this->materialIssueDetailItemRepository->findWhere(['id'=>$id]);
            if($materialIssue->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $materialIssue->first());
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
                $this->materialIssueDetailItemValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->materialIssueDetailItemRepository->update($request->all(), $id);
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
        $this->materialIssueDetailItemRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
        return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
