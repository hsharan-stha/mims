<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\ItemRepository;
use App\Repositories\StoreTransactionRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Repositories\DirectGRNRepository;
use App\Validators\DirectGRNValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class DirectGRNController extends ApiBaseController
{
    protected $directGRNRepository;

    protected $directGRNValidator;

    protected $storeTransactionRepository;

    protected $itemRepository;


    public function __construct(DirectGRNRepository $directGRNRepository,
                                DirectGRNValidator $directGRNValidator,
                                StoreTransactionRepository $storeTransactionRepository,
                                ItemRepository $itemRepository    ){
        $this->directGRNRepository = $directGRNRepository;
        $this->directGRNValidator = $directGRNValidator;
        $this->storeTransactionRepository= $storeTransactionRepository;
        $this->itemRepository= $itemRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // try{
            $limit=$request->limit != null ? $request->limit: 20;
            $allDirectGRNs=$this->directGRNRepository->with(['directGRNItems','directGRNItems.item','directGRNItems.unit',
                'directGRNItems.drAccountHead'])->findWhere(['paginate'=>$limit]);
            if($allDirectGRNs->first() == null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allDirectGRNs->toArray());
        // }catch(\Exception $e){
        //     return $this->respondInternalError();
        // }
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
                $this->directGRNValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                if ($request->directGRNItems)
                {
                    $directGRN=$this->directGRNRepository->create($request->all());
                    foreach ($request->directGRNItems as $direct_grn_item) {
                        $this->directGRNRepository
                            ->with(['directGRNItems'])
                            ->find($directGRN->id)
                            ->directGRNItems()
                            ->create($direct_grn_item);
                        $store_transaction['store_id'] = $request->store_id;
                        $store_transaction['item_id'] = $direct_grn_item['item_id'];
                        $store_transaction['quantity'] =  $direct_grn_item['quantity'];
                        $store_transaction['rate'] = $direct_grn_item['value'] / $direct_grn_item['quantity'];
                        $store_transaction['value'] = $direct_grn_item['value'];
                        $store_transaction['total'] = $store_transaction['rate'] * $store_transaction['value'];
                        $store_transaction['remarks']=$direct_grn_item['remarks'];
                        $store_transaction['user_id'] = 1;
                        $store_transaction['estate_id'] = 1;
                        $request->merge($store_transaction);
                        $this->storeTransactionRepository->create($request->all());
                        $item['quantity'] = $this->itemRepository->find($direct_grn_item['item_id'])->quantity + $store_transaction['quantity'];
                        $request->merge($item);
                        $this->itemRepository->update($request->all(), $direct_grn_item['item_id']);
                    }
                }else{
                    return $this->respondWithError("Please Enter Items also.");
                }

                return $this->respondWithMessage('Direct GRN Created Successfully!!!', $request->all());
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
            $directGRN=$this->directGRNRepository->with(['directGRNItems','directGRNItems.item','directGRNItems.item.unit',
                'directGRNItems.drAccountHead'])->findWhere(['id'=>$id]);
            if($directGRN->first()== null){
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $directGRN->first());
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
                $this->directGRNValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->directGRNRepository->update($request->all(), $id);
                if($request->directGRNItems) {
                    foreach ($request->directGRNItems as $direct_grn_item) {
                        $this->directGRNRepository
                            ->with(['directGRNItems'])
                            ->find($id)
                            ->directGRNItems()
                            ->create($direct_grn_item);
                    }
                }

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
            $this->directGRNRepository->deleteSelected('id',array_values(explode(",",substr($id, 1, -1))));
            return $this->respondWithMessage('Record Deleted Successfully!!!', $data );
//        } catch (\Exception $e) {
//            return $this->respondInternalError();
//        }
    }
}
