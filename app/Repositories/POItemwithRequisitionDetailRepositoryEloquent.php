<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\POItemwithRequisitionDetailRepository;
use App\Entities\POItemwithRequisitionDetail;
use App\Validators\POItemwithRequisitionDetailValidator;;

/**
 * Class POItemwithRequisitionDetailRepositoryEloquent
 * @package namespace App\Repositories;
 */
class POItemwithRequisitionDetailRepositoryEloquent extends BaseRepository implements POItemwithRequisitionDetailRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return POItemwithRequisitionDetail::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
