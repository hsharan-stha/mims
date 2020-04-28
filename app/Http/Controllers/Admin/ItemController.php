<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\AccountHeadRepository;
use App\Repositories\ProductCategoryRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\ItemRepository;
use App\Validators\ItemValidator;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Controllers\Admin\ItemPriceCalculator;
use DB;

class ItemController extends ApiBaseController
{
    protected $itemRepository;

    protected $itemValidator;

    protected $itemPriceCalculator;

    protected $accountHeadRepository;

    protected $productCategoryRepository;

    public function __construct(ItemRepository $itemRepository,
                                ItemValidator $itemValidator,
                                AccountHeadRepository $accountHeadRepository,
                                ProductCategoryRepository $productCategoryRepository,
                                ItemPriceCalculator $itemPriceCalculator)
    {
        $this->itemRepository = $itemRepository;
        $this->itemValidator = $itemValidator;
        $this->itemPriceCalculator = $itemPriceCalculator;
        $this->accountHeadRepository = $accountHeadRepository;
        $this->productCategoryRepository = $productCategoryRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $limit = $request->limit != null ? $request->limit : 20;
            $code = $request->code != null && $request->code != '' ? ['code', 'LIKE', '%' . $request->code . '%'] : '*';
            $name = $request->code != null && $request->code != '' ? ['name', 'LIKE', '%' . $request->code . '%'] : '*';

            $product_category_id = '*';
            $reorder_quantity = '*';
            $status = '*';
            $transact = $request->transact == null || $request->transact == '' ? '*' : $request->transact;
            $parent_id = $request->parent_id == null || $request->parent_id == '' ? '*' : $request->parent_id;
            if ($request->filterGroups) {
                foreach ($request->filterGroups as $filterGroup) {
                    if ($filterGroup['field'] == 'code') {
                        $code = ['code', 'LIKE', '%' . $filterGroup['filters'][0]['value'] . '%'];
                    } elseif ($filterGroup['field'] == 'name') {
                        $name = ['name', 'LIKE', '%' . $filterGroup['filters'][0]['value'] . '%'];
                    } elseif ($filterGroup['field'] == 'pcname') {
                        $product_category_id = $filterGroup['filters'][0]['value'];
                    } elseif ($filterGroup['field'] == 'reorder_quantity') {
                        $reorder_quantity = ['reorder_quantity', 'LIKE', '%' . $filterGroup['filters'][0]['value'] . '%'];
                    } elseif ($filterGroup['field'] == 'status') {
                        $status = ['status', 'LIKE', '%' . $filterGroup['filters'][0]['value'] . '%'];
                    } else {

                    }
                }
            }
            if ($code != '*') {
                $allItems = $this->itemRepository
                    ->with(['productCategory', 'unit', 'children', 'parent'])
                    ->findOrWhere([
                        'code' => $code,
                        'name' => $name,
                        'paginate' => '*'
                    ]);
            } else {
                $allItems = $this->itemRepository
                    ->with(['productCategory', 'unit', 'children', 'parent'])
                    ->findWhere([
                        'code' => $code,
                        'name' => $name,
                        'product_category_id' => $product_category_id,
                        'transact' => $transact,
                        'parent_id' => $parent_id,
                        'reorder_quantity' => $reorder_quantity,
                        'status' => $status, 'paginate' => $limit
                    ]);
            }
            if ($allItems->first() == null) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allItems->toArray());
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
                $this->itemValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                if ($request->transact == 1) {
                    // $productCategory = $this->productCategoryRepository->findWhere(['id' => $request->product_category_id])->first();
                    // if ($productCategory == null) {
                    // return $this->respondWithError("Product Category Not Found");
                    // }
                    // $accountHead['transact'] = 1;
                    // $accountHead['tr_level'] = 3;
                    // $accountHead['estate_id'] = $inputs['estate_id'];
                    // $accountHead['user_id'] = $inputs['user_id'];
                    // $accountHead['name'] = $request->name;
                    // if ($productCategory->valuation_method == 'PERPETUAL') {
                    // $accountHead['group_master_code'] = 103;
                    // } elseif ($productCategory->valuation_method == 'PERIODIC') {
                    // $accountHead['group_master_code'] = 403;
                    // } else {
                    // return $this->respondWithError("Product Category Not Found");
                    // }
                    // $child_account_heads = $this->accountHeadRepository->findWhere(['paginate' => '*', 'group_master_code' => $accountHead['group_master_code']]);
                    // if (count($child_account_heads) > 0) {
                    // $max_group_code_account_head = $child_account_heads->where('group_code', $child_account_heads->max('group_code'))->first();
                    // $max_group_code = str_replace($accountHead['group_master_code'], '', $max_group_code_account_head->group_code);
                    // $group_code = sprintf("%02d", $max_group_code + 1);
                    // $inputs['account_group_code'] = $accountHead['group_master_code'] . $group_code;
                    // } else {
                    // $inputs['account_group_code'] = $accountHead['group_master_code'] . '01';
                    // }
                    // $accountHead['group_code'] = $inputs['account_group_code'];

                }
                $request->merge($inputs);
                // DB::beginTransaction();
                // try {
                $this->itemRepository->create($request->all());
                //    if ($request->transact == 1) {
                //        $this->accountHeadRepository->create($accountHead);
                //    }
                // DB::commit();
                // } catch (\Exception $e) {
                // DB::rollback();
                // return $this->respondWithError("Error Occured during saving data");
                // }
                return $this->respondWithMessage('Item Created Successfully!!!', $request->all());
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
    public function show($id, Request $request)
    {
//        $date = $request->date;
//        $item_valuation = $this->itemPriceCalculator->WAValuationBySQL($id, 1, $date);
//        return $item_valuation[0]->rate;
        try {
            $date = $request->date;
//            $date = '2018-08-20';
            $item = $this->itemRepository->with(['productCategory', 'unit', 'children', 'parent'])->findWhere(['id' => $id])->first();
            if ($item == null) {
                return $this->respondNotFound();
            }
            if ($item->transact == 1) {
                $item_valuation = $this->itemPriceCalculator->WAValuationBySQL($id, $date);
                $item['rate'] = $item_valuation[0]->rate;
                $item['quantity'] = $item_valuation[0]->quantity;
            } else {
                $item['rate'] = 0;
                $item['quantity'] = 0;
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $item);
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
                $this->itemValidator->with($request->all())->passesOrFail(validatorinterface::RULE_UPDATE);
                $this->itemRepository->update($request->all(), $id);
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
            $this->itemRepository->deleteSelected('id', array_values(explode(",", substr($id, 1, -1))));
            return $this->respondWithMessage('Record Deleted Successfully!!!', $data);
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage());
        }
    }
}
