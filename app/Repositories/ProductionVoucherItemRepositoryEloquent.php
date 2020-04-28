<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\ProductionVoucherItemRepository;
use App\Entities\ProductionVoucherItem;
use App\Validators\ProductionVoucherItemValidator;;

/**
 * Class ProductionVoucherItemRepositoryEloquent
 * @package namespace App\Repositories;
 */
class ProductionVoucherItemRepositoryEloquent extends BaseRepository implements ProductionVoucherItemRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ProductionVoucherItem::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
