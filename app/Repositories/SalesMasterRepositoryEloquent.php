<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\SalesMasterRepository;
use App\Entities\SalesMaster;
use App\Validators\SalesMasterValidator;;

/**
 * Class SalesMasterRepositoryEloquent
 * @package namespace App\Repositories;
 */
class SalesMasterRepositoryEloquent extends BaseRepository implements SalesMasterRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return SalesMaster::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
