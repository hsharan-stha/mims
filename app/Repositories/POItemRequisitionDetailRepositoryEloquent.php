<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\POItemRequisitionDetailRepository;
use App\Entities\POItemRequisitionDetail;
use App\Validators\POItemRequisitionDetailValidator;;

/**
 * Class POItemRequisitionDetailRepositoryEloquent
 * @package namespace App\Repositories;
 */
class POItemRequisitionDetailRepositoryEloquent extends BaseRepository implements POItemRequisitionDetailRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return POItemRequisitionDetail::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
