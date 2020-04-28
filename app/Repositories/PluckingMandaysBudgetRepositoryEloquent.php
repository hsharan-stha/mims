<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\PluckingMandaysBudgetRepository;
use App\Entities\PluckingMandaysBudget;
use App\Validators\PluckingMandaysBudgetValidator;;

/**
 * Class PluckingMandaysBudgetRepositoryEloquent
 * @package namespace App\Repositories;
 */
class PluckingMandaysBudgetRepositoryEloquent extends BaseRepository implements PluckingMandaysBudgetRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return PluckingMandaysBudget::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
