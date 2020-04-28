<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\ItemSummaryRepository;
use App\Entities\ItemSummary;
use App\Validators\ItemSummaryValidator;;

/**
 * Class ItemSummaryRepositoryEloquent
 * @package namespace App\Repositories;
 */
class ItemSummaryRepositoryEloquent extends BaseRepository implements ItemSummaryRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ItemSummary::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
