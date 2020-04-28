<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\GRNwithPORepository;
use App\Entities\GRNwithPO;
use App\Validators\GRNwithPOValidator;;

/**
 * Class GRNwithPORepositoryEloquent
 * @package namespace App\Repositories;
 */
class GRNwithPORepositoryEloquent extends BaseRepository implements GRNwithPORepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return GRNwithPO::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
