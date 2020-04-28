<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\VoucharRepository;
use App\Entities\Vouchar;
use App\Validators\VoucharValidator;;

/**
 * Class VoucharRepositoryEloquent
 * @package namespace App\Repositories;
 */
class VoucharRepositoryEloquent extends BaseRepository implements VoucharRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Vouchar::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
