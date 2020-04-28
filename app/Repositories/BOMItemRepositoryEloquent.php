<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\BOMItemRepository;
use App\Entities\BOMItem;
use App\Validators\BOMItemValidator;;

/**
 * Class BOMItemRepositoryEloquent
 * @package namespace App\Repositories;
 */
class BOMItemRepositoryEloquent extends BaseRepository implements BOMItemRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return BOMItem::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
