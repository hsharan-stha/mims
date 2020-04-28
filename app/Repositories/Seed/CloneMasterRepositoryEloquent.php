<?php

namespace App\Repositories\Seed;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\Seed\CloneMasterRepository;
use App\Entities\Seed\CloneMaster;
use App\Validators\Seed\CloneMasterValidator;;

/**
 * Class CloneMasterRepositoryEloquent
 * @package namespace App\Repositories\Seed;
 */
class CloneMasterRepositoryEloquent extends BaseRepository implements CloneMasterRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return CloneMaster::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
