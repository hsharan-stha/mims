<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\GRNwithPOItemRepository;
use App\Entities\GRNwithPOItem;
use App\Validators\GRNwithPOItemValidator;;

/**
 * Class GRNwithPOItemRepositoryEloquent
 * @package namespace App\Repositories;
 */
class GRNwithPOItemRepositoryEloquent extends BaseRepository implements GRNwithPOItemRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return GRNwithPOItem::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
