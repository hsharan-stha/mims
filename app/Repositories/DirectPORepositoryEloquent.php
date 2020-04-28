<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\DirectPORepository;
use App\Entities\DirectPO;
use App\Validators\DirectPOValidator;;

/**
 * Class DirectPORepositoryEloquent
 * @package namespace App\Repositories;
 */
class DirectPORepositoryEloquent extends BaseRepository implements DirectPORepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DirectPO::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
