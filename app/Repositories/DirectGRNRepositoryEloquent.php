<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\DirectGRNRepository;
use App\Entities\DirectGRN;
use App\Validators\DirectGRNValidator;;

/**
 * Class DirectGRNRepositoryEloquent
 * @package namespace App\Repositories;
 */
class DirectGRNRepositoryEloquent extends BaseRepository implements DirectGRNRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DirectGRN::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
