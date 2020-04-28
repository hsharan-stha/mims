<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\EmployeePFRepository;
use App\Entities\EmployeePF;
use App\Validators\EmployeePFValidator;;

/**
 * Class EmployeePFRepositoryEloquent
 * @package namespace App\Repositories;
 */
class EmployeePFRepositoryEloquent extends BaseRepository implements EmployeePFRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return EmployeePF::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
