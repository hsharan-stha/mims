<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\FiscalYearRepository;
use App\Entities\FiscalYear;

/**
 * Class FiscalYearRepositoryEloquent
 * @package namespace App\Repositories;
 */
class FiscalYearRepositoryEloquent extends BaseRepository implements FiscalYearRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return FiscalYear::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
