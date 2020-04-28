<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\StoreTransferItemsRepository;
use App\Entities\StoreTransferItems;
use App\Validators\StoreTransferItemsValidator;;

/**
 * Class StoreTransferItemsRepositoryEloquent
 * @package namespace App\Repositories;
 */
class StoreTransferItemsRepositoryEloquent extends BaseRepository implements StoreTransferItemsRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return StoreTransferItems::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
