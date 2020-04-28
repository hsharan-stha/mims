<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\DirectGRNItemRepository;
use App\Entities\DirectGRNItem;
use App\Validators\DirectGRNItemValidator;;

/**
 * Class DirectGRNItemRepositoryEloquent
 * @package namespace App\Repositories;
 */
class DirectGRNItemRepositoryEloquent extends BaseRepository implements DirectGRNItemRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DirectGRNItem::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
