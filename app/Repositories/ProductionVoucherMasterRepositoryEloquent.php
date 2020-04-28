<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\ProductionVoucherMasterRepository;
use App\Entities\ProductionVoucherMaster;
use App\Validators\ProductionVoucherMasterValidator;;

/**
 * Class ProductionVoucherMasterRepositoryEloquent
 * @package namespace App\Repositories;
 */
class ProductionVoucherMasterRepositoryEloquent extends BaseRepository implements ProductionVoucherMasterRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ProductionVoucherMaster::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
