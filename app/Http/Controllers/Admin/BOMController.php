<?php

namespace App\Http\Controllers\Admin;

use App\Entities\ProductionVoucherMaster;
use App\Repositories\BOMItemRepository;
use App\Repositories\BOMMasterRepository;
use App\Repositories\ItemRepository;
use App\Repositories\ProductionVoucherMasterRepository;
use App\Validators\BOMValidator;
use http\Env\Response;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Null_;
use Prettus\Validator\Exceptions\ValidatorException;
use Prettus\Validator\Contracts\ValidatorInterface;


class BOMController extends ApiBaseController
{
    protected $BOMMasterRepository;
    protected $BOMItemRepository;
    protected $ItemRepository;
    protected $productionVoucherMasterRepository;
    protected $BOMValidator;

    public function __construct(BOMMasterRepository $BOMMasterRepository,
                                BOMValidator $BOMValidator,
                                BOMItemRepository $BOMItemRepository,
                                ItemRepository $itemRepository,
                                ProductionVoucherMasterRepository $productionVoucherMasterRepository)
    {
        $this->BOMMasterRepository = $BOMMasterRepository;
        $this->BOMItemRepository = $BOMItemRepository;
        $this->ItemRepository = $itemRepository;
        $this->productionVoucherMasterRepository = $productionVoucherMasterRepository;
        $this->BOMValidator = $BOMValidator;
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
            $status = $request->status != null ? $request->status : '*';
            $allBOMS = $this->BOMMasterRepository
                ->with(['bomItems', 'bomItems.item'])
                ->orderBy('id', 'desc')
                ->findWhere(['status' => $status, 'paginate' => $limit]);
            if ($allBOMS->first() == null) {
                return $this->respondWithError("BOMs Not Found");
            }
            return $this->respondWithMessage("BOMs retrived successfully", $allBOMS->toArray());
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
        return $this->respond("this is create");

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            try {
                $this->BOMValidator->with($request->all())->passesOrFail(validatorinterface::RULE_CREATE);
                $BOMMaster = $this->BOMMasterRepository->create($request->all());
                foreach ($request->bomItems as $bomItem) {
                    $this->BOMMasterRepository
                        ->with(['bomItems'])
                        ->find($BOMMaster->id)
                        ->bomItems()
                        ->create($bomItem);
                }
                DB::commit();
                return $this->respondWithMessage('BOM created successfully', $request->all());
            } catch (ValidatorException $e) {
                return $this->respondWithError($e->getMessageBag());
            }
        } catch (\Exception $e) {
            DB::rollback();
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
        try {
            $BOMMaster = $this->BOMMasterRepository
                ->with(['bomItems', 'bomItems.item'])
                ->findWhere(['id' => $id])->first();
            if ($BOMMaster == null) {
                return $this->respondNotFound();
            }
            return $this->respondWithMessage('Data Retrieved Successfully', $BOMMaster);
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
//            $BOMMaster = $this->BOMMasterRepository
//                    ->update($request->all(), $id);
//            return $this->respondWithMessage('BOM updated successfully', $BOMMaster->toArray());

            $updateData = array(
                'status' => $request->status,
            );
            if ($request->status !== null) {
                $BOMMaster = $this->BOMMasterRepository
                    ->update($updateData, $id);
                return $this->respondWithMessage('BOM updated successfully', $BOMMaster->toArray());

            } else {
                return $this->respondWithMessage('BOM update failed', '');
            }

        } catch (Exception $e) {
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
            $ids = explode(',', $id);
            $pvAvailableData = $this->productionVoucherMasterRepository
                ->findWhereIn('bom_id', $ids)
                ->pluck('bom_id');
            if ($pvAvailableData->first() == null) {
                return $this->respondWithError("Zero BOM deleted");
            }
            $id = array_values(explode(",", substr($id, 1, -1)));
            $pvItems = $this->productionVoucherMasterRepository->findWhereIn('bom_id', $id);

            if ($pvItems != null) {
                return $this->respondWithMessage('Record cannot delete. data is in child table!!', '');
            } else {
                $BOMMater = $this->BOMMasterRepository->delete($id);
                return $this->respondWithMessage('Record Deleted Successfully!!!', $BOMMater);
            }
            $diff_ids = array_diff($ids, $pvAvailableData->toArray());
            $count_deleted = sizeof($diff_ids);
            $count_not_deleted = sizeof($ids) - $count_deleted;
            $this->BOMMasterRepository->deleteSelected('id', $diff_ids);
            return $this->respondWithMessage($count_deleted . ' Record Deleted Successfully.' . $count_not_deleted . 'cannot delete', '');
        } catch (\Exception $e) {
            $this->respondWithError($e->getMessage());
        }

    }
}
