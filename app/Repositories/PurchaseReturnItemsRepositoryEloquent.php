<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\PurchaseReturnItemsRepository;
use App\Entities\PurchaseReturnItems;
use App\Validators\PurchaseReturnItemsValidator;;

/**
 * Class PurchaseReturnItemsRepositoryEloquent
 * @package namespace App\Repositories;
 */
class PurchaseReturnItemsRepositoryEloquent extends BaseRepository implements PurchaseReturnItemsRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return PurchaseReturnItems::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
