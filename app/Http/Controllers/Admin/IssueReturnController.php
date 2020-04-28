<?php

namespace App\Http\Controllers\Admin;

use App\Entities\FiscalYear;
use App\Entities\StoreTransaction;
use App\Repositories\IssueReturnMasterRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class IssueReturnController extends ApiBaseController
{
    protected $issueReturnMasterRepository;


    public function __construct(IssueReturnMasterRepository $issueReturnMasterRepository)
    {
        $this->issueReturnMasterRepository = $issueReturnMasterRepository;

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
            return $this->issueReturnMasterRepository
                ->with(['issueReturnItems', 'materialIssue', 'issueReturnItems.item'])
                ->orderBy('id', 'desc')
                ->findWhere(['paginate' => $limit]);
        } catch (Exception $e) {
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
            if (sizeof($request->issueReturnItems) < 1) {
                return $this->respondWithError("No input/Output Items");
            }

            $fiscalyear = FiscalYear::first()->pluck('name');

            $issueReturnMaster = $this->issueReturnMasterRepository
                ->create($request->all());

            $store_transaction_items = [];
            foreach ($request->issueReturnItems as $returnItem) {
                $this->issueReturnMasterRepository
                    ->with(['issueReturnItems'])
                    ->find($issueReturnMaster->id)
                    ->issueReturnItems()
                    ->create($returnItem);

                $store_transaction_item['store_id'] = 1;
                $store_transaction_item['item_id'] = $returnItem['item_id'];
                $store_transaction_item['quantity'] = $returnItem['quantity'];
                $store_transaction_item['rest_quantity'] = $returnItem['quantity'];
                $store_transaction_item['rate'] = 0;
                $store_transaction_item['value'] = 0;
                $store_transaction_item['total'] = 0;
                $store_transaction_item['remarks'] = 'issue_return' . '/' . $fiscalyear;
                $store_transaction_item['date'] = $request->date;
                $store_transaction_item['type'] = "issue_return";
                $store_transaction_item['ref'] = 'issue_return' . '/' . $fiscalyear;
                $store_transaction_item['opening'] = 1;
                $store_transaction_item['user_id'] = 1;
                $store_transaction_item['estate_id'] = 1;
                array_push($store_transaction_items, $store_transaction_item);
            }

            StoreTransaction::insert($store_transaction_items);

            return $this->respondWithMessage('issue return created successfully', $request->all());

        } catch (Exception $e) {
            $this->respondWithError($e->getMessage());

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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
