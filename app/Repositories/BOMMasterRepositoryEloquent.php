<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\BOMMasterRepository;
use App\Entities\BOMMaster;
use App\Validators\BOMMasterValidator;;

/**
 * Class BOMMasterRepositoryEloquent
 * @package namespace App\Repositories;
 */
class BOMMasterRepositoryEloquent extends BaseRepository implements BOMMasterRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return BOMMaster::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
