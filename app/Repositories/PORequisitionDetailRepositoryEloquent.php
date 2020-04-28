<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\PORequisitionDetailRepository;
use App\Entities\PORequisitionDetail;
use App\Validators\PORequisitionDetailValidator;;

/**
 * Class PORequisitionDetailRepositoryEloquent
 * @package namespace App\Repositories;
 */
class PORequisitionDetailRepositoryEloquent extends BaseRepository implements PORequisitionDetailRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return PORequisitionDetail::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
