<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\MaterialIssueDetailItemRepository;
use App\Entities\MaterialIssueDetailItem;
use App\Validators\MaterialIssueDetailItemValidator;;

/**
 * Class MaterialIssueDetailItemRepositoryEloquent
 * @package namespace App\Repositories;
 */
class MaterialIssueDetailItemRepositoryEloquent extends BaseRepository implements MaterialIssueDetailItemRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return MaterialIssueDetailItem::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
