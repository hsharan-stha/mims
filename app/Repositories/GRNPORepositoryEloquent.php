<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\GRNPORepository;
use App\Entities\GRNPO;
use App\Validators\GRNPOValidator;;

/**
 * Class GRNPORepositoryEloquent
 * @package namespace App\Repositories;
 */
class GRNPORepositoryEloquent extends BaseRepository implements GRNPORepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return GRNPO::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
