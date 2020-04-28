<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\RequisitionItemDetailRepository;
use App\Entities\RequisitionItemDetail;
use App\Validators\RequisitionItemDetailValidator;;

/**
 * Class RequisitionItemDetailRepositoryEloquent
 * @package namespace App\Repositories;
 */
class RequisitionItemDetailRepositoryEloquent extends BaseRepository implements RequisitionItemDetailRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return RequisitionItemDetail::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
