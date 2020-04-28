<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\SalesReturnMasterRepository;
use App\Entities\SalesReturnMaster;
use App\Validators\SalesReturnMasterValidator;;

/**
 * Class SalesReturnMasterRepositoryEloquent
 * @package namespace App\Repositories;
 */
class SalesReturnMasterRepositoryEloquent extends BaseRepository implements SalesReturnMasterRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return SalesReturnMaster::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
