<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\PluckingMandaysBudgetDetailsRepository;
use App\Entities\PluckingMandaysBudgetDetails;
use App\Validators\PluckingMandaysBudgetDetailsValidator;;

/**
 * Class PluckingMandaysBudgetDetailsRepositoryEloquent
 * @package namespace App\Repositories;
 */
class PluckingMandaysBudgetDetailsRepositoryEloquent extends BaseRepository implements PluckingMandaysBudgetDetailsRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return PluckingMandaysBudgetDetails::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
