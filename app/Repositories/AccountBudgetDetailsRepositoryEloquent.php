<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\AccountBudgetDetailsRepository;
use App\Entities\AccountBudgetDetails;
use App\Validators\AccountBudgetDetailsValidator;;

/**
 * Class AccountBudgetDetailsRepositoryEloquent
 * @package namespace App\Repositories;
 */
class AccountBudgetDetailsRepositoryEloquent extends BaseRepository implements AccountBudgetDetailsRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return AccountBudgetDetails::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
