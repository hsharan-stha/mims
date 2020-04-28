<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\AccountBudgetRepository;
use App\Entities\AccountBudget;
use App\Validators\AccountBudgetValidator;;

/**
 * Class AccountBudgetRepositoryEloquent
 * @package namespace App\Repositories;
 */
class AccountBudgetRepositoryEloquent extends BaseRepository implements AccountBudgetRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return AccountBudget::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
