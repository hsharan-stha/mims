<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\ProductUnitRepository;
use App\Entities\ProductUnit;
use App\Validators\ProductUnitValidator;;

/**
 * Class ProductUnitRepositoryEloquent
 * @package namespace App\Repositories;
 */
class ProductUnitRepositoryEloquent extends BaseRepository implements ProductUnitRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ProductUnit::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
