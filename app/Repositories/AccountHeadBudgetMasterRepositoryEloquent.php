<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\AccountHeadBudgetMasterRepository;
use App\Entities\AccountHeadBudgetMaster;
use App\Validators\AccountHeadBudgetMasterValidator;;

/**
 * Class AccountHeadBudgetMasterRepositoryEloquent
 * @package namespace App\Repositories;
 */
class AccountHeadBudgetMasterRepositoryEloquent extends BaseRepository implements AccountHeadBudgetMasterRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return AccountHeadBudgetMaster::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
