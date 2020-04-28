<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\StoreRepository;
use App\Validators\StoreValidator;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;

class StoreController extends ApiBaseController
{
    protected $storeValidator;

    protected $storeRepository;

    public function __construct(StoreRepository $storeRepository, StoreValidator $storeValidator)
    {
        $this->storeRepository = $storeRepository;
        $this->storeValidator = $storeValidator;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $code = '*';
            $name = '*';
            $contact = '*';
            $limit = $request->limit != null ? $request->limit : "all";
            if ($request->filterGroups) {
                foreach ($request->filterGroups as $filterGroup) {
                    if ($filterGroup['field'] == 'name') {
                        $name = ['name', 'LIKE', '%' . $filterGroup['filters'][0]['value'] . '%'];
                    } elseif ($filterGroup['field'] == 'code') {
                        $code = ['code', 'LIKE', '%' . $filterGroup['filters'][0]['value'] . '%'];
                    } elseif ($filterGroup['field'] == 'contact_no') {
                        $contact = ['contact_no', 'LIKE', '%' . $filterGroup['filters'][0]['value'] . '%'];
                    } else {

                    }
                }
            }
            $allStores = $this->storeRepository
                ->findWhere(['code' => $code, 'name' => $name, 'contact_no' => $contact, 'paginate' => $limit]);
            if ($allStores->first() == null) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allStores->toArray());
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            try {
                $inputs['user_id'] = 1;
                $inputs['estate_id'] = 1;
                $request->merge($inputs);
                $this->storeValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $this->storeRepository->create($request->all());
                return $this->respondWithMessage('Store Created Successfully!!!', $request->all());
            } catch (ValidatorException $e) {
                return $this->respondWithError($e->getMessageBag());
            }
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $store = $this->storeRepository->findWhere(['id' => $id]);
            if ($store->first() == null) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $store->first());
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            try {
                $this->storeValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->storeRepository->update($request->all(), $id);
                return $this->respondWithMessage('Record Updated Successfully', $request->all());
            } catch (ValidatorException $e) {
                return $this->respondWithError($e->getMessageBag());
            }
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $data['id'] = $id;
            $this->storeRepository->deleteSelected('id', array_values(explode(",", substr($id, 1, -1))));
            return $this->respondWithMessage('Record Deleted Successfully!!!', $data);
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
