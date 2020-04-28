<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\SalesReturnItemsRepository;
use App\Entities\SalesReturnItems;
use App\Validators\SalesReturnItemsValidator;;

/**
 * Class SalesReturnItemsRepositoryEloquent
 * @package namespace App\Repositories;
 */
class SalesReturnItemsRepositoryEloquent extends BaseRepository implements SalesReturnItemsRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return SalesReturnItems::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
