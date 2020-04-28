<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\SalesItemsRepository;
use App\Entities\SalesItems;
use App\Validators\SalesItemsValidator;;

/**
 * Class SalesItemsRepositoryEloquent
 * @package namespace App\Repositories;
 */
class SalesItemsRepositoryEloquent extends BaseRepository implements SalesItemsRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return SalesItems::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
