<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\IssueReturnItemsRepository;
use App\Entities\IssueReturnItems;
use App\Validators\IssueReturnItemsValidator;;

/**
 * Class IssueReturnItemsRepositoryEloquent
 * @package namespace App\Repositories;
 */
class IssueReturnItemsRepositoryEloquent extends BaseRepository implements IssueReturnItemsRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return IssueReturnItems::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
