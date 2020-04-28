<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\ActivityMasterRepository;
use App\Entities\ActivityMaster;
use App\Validators\ActivityMasterValidator;;

/**
 * Class ActivityMasterRepositoryEloquent
 * @package namespace App\Repositories;
 */
class ActivityMasterRepositoryEloquent extends BaseRepository implements ActivityMasterRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ActivityMaster::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
