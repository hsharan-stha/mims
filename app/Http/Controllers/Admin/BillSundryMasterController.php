<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\BillSundryMasterRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class BillSundryMasterController extends ApiBaseController
{
    protected $billSundryMasterRepository;

    public function __construct(BillSundryMasterRepository $billSundryMasterRepository)
    {
        $this->billSundryMasterRepository = $billSundryMasterRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $limit = $request->limit != null ? $request->limit : "all";
//            $item_wise_bill_sundry=$request->item_wise_bill_sundry ==  true || $request->item_wise_bill_sundry ==  'true' ? 'ITEMWISE' : 'WHOLESUM';
//            $wise_bill_sundry = $request->whole_sum_bill_sundry == true || $request->whole_sum_bill_sundry == 'true' ? 'WHOLESUM' : 'ITEMWISE';
            if ($request->whole_sum_bill_sundry == true || $request->whole_sum_bill_sundry == 'true') {
                $wise_bill_sundry = 'WHOLESUM';
            } else if ($request->group_sum_bill_sundry == true || $request->group_sum_bill_sundry == 'true') {
                $wise_bill_sundry = 'GROUPWISE';
            } else {
                $wise_bill_sundry = 'ITEMWISE';
            }

            if ($request->get_bill_sundery == 'sale') {
                $allBillSundries = $this->billSundryMasterRepository->findWhere(['paginate' => $limit, 'sale' => 1]);
            } elseif ($request->get_bill_sundery == 'purchase') {
                $allBillSundries = $this->billSundryMasterRepository->findWhere(['paginate' => $limit, 'purchase' => 1, 'purchase_type' => $wise_bill_sundry]);

            } else {
                $allBillSundries = $this->billSundryMasterRepository->findWhere(['paginate' => $limit]);
            }
            if ($allBillSundries->first() == null) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $allBillSundries->toArray());
        } catch (\Exception $e) {
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $inputs['user_id'] = 1;
            $inputs['estate_id'] = 1;
            if ($request->sale == 1 || $request->sale == '1') {
                $inputs['sale'] = 1;
                $inputs['purchase'] = 0;
            } else {
                $inputs['sale'] = 0;
                $inputs['purchase'] = 1;
            }
//        if ($request->pch_dr_item_wise == 1 || $request->pch_dr_item_wise == '1') {
//            $inputs['pch_dr_whole_sum_account_head_code'] = null;
//            if ($request->pch_dr_inventory_ledger == 1 || $request->pch_dr_inventory_ledger == '1') {
//
//            }
//        } else {
//
//        }
            $request->merge($inputs);
            $billSundry = $this->billSundryMasterRepository->create($request->all());
            return $this->respondWithMessage('Bill Sundry Created Successfully!!!', $billSundry->toArray());
        } catch (ValidatorException $e) {
            return $this->respondWithError($e->getMessageBag());
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
            $billSundry = $this->billSundryMasterRepository
                ->findWhere(['id' => $id]);
            if ($billSundry->first() == null) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $billSundry->first());
        } catch (\Exception $e) {
            $this->respondWithError($e->getMessage());
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
                $inputs['user_id'] = 1;
                $inputs['estate_id'] = 1;
                $request->merge($inputs);
                $billSundry = $this->billSundryMasterRepository->update($request->all(), $id);
                return $this->respondWithMessage('Bill Sundry Updated Successfully!!!', $billSundry->toArray());
            } catch (ValidatorException $e) {
                return $this->respondWithError($e->getMessageBag());
            }
        } catch (\Exception $e) {
            $this->respondWithError($e->getMessage());
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
            $this->billSundryMasterRepository->deleteSelected('id', array_values(explode(",", substr($id, 1, -1))));
            return $this->respondWithMessage('Record Deleted Successfully!!!', $data);
        } catch (\Exception $e) {
            $this->respondWithError($e->getMessage());
        }
    }
}
