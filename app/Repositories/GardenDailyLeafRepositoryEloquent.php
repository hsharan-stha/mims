<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\GardenDailyLeafRepository;
use App\Entities\GardenDailyLeaf;
use App\Validators\GardenDailyLeafValidator;;

/**
 * Class GardenDailyLeafRepositoryEloquent
 * @package namespace App\Repositories;
 */
class GardenDailyLeafRepositoryEloquent extends BaseRepository implements GardenDailyLeafRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return GardenDailyLeaf::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
