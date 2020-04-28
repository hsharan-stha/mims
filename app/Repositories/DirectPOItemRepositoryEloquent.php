<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\DirectPOItemRepository;
use App\Entities\DirectPOItem;
use App\Validators\DirectPOItemValidator;;

/**
 * Class DirectPOItemRepositoryEloquent
 * @package namespace App\Repositories;
 */
class DirectPOItemRepositoryEloquent extends BaseRepository implements DirectPOItemRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DirectPOItem::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
