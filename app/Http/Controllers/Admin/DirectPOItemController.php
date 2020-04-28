<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\DirectPOItemRepository;
use App\Validators\DirectPOItemValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class DirectPOItemController extends ApiBaseController
{
    protected $directPOItemRepository;

    protected $directPOItemValidator;

    public function __construct(DirectPOItemRepository $directPOItemRepository,
                                DirectPOItemValidator $directPOItemValidator){
        $this->directPOItemRepository = $directPOItemRepository;
        $this->directPOItemValidator = $directPOItemValidator;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $limit=$request->limit != null ? $request->limit : 20;
            $allPOitems=$this->directPOItemRepository->findWhere(['paginate'=>$limit]);
            if ($allPOitems->first() == null) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allPOitems->toArray());
        }
        catch(\Exception $e){
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
        try{
            try{
                $this->directPOItemValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $this->directPOItemRepository->create($request->all());
                return $this->respondWithMessage('Direct PO Item Created Successfully!!!', $request->all());
            }catch(ValidatorException $e){
                return $this->respondWithError($e->getMessageBag());
            }
        }catch(\Exception $e){
            $this->respondInternalError();
        }
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
            $item=$this->directPOItemRepository->findWhere(['id'=>$id]);
            if($item->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $item);
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
                $this->directPOItemValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->directPOItemRepository->update($request->all(), $id);
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
        try {
            $data['id']= $id;
            $this->directPOItemRepository->delete($id);
            return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
        } catch (\Exception $e) {
            return $this->respondInternalError();
        }
        //
    }
}
