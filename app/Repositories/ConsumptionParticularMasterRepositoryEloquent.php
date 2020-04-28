<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\ConsumptionParticularMasterRepository;
use App\Entities\ConsumptionParticularMaster;
use App\Validators\ConsumptionParticularMasterValidator;;

/**
 * Class ConsumptionParticularMasterRepositoryEloquent
 * @package namespace App\Repositories;
 */
class ConsumptionParticularMasterRepositoryEloquent extends BaseRepository implements ConsumptionParticularMasterRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ConsumptionParticularMaster::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
