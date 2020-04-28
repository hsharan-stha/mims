<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\GRNPOItemRepository;
use App\Entities\GRNPOItem;
use App\Validators\GRNPOItemValidator;;

/**
 * Class GRNPOItemRepositoryEloquent
 * @package namespace App\Repositories;
 */
class GRNPOItemRepositoryEloquent extends BaseRepository implements GRNPOItemRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return GRNPOItem::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
