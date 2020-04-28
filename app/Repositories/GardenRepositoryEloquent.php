<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\GardenRepository;
use App\Entities\Garden;
use App\Validators\GardenValidator;

/**
 * Class GardenRepositoryEloquent
 * @package namespace App\Repositories;
 */
class GardenRepositoryEloquent extends BaseRepository implements GardenRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Garden::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

        public function validator()
    {
        return "App\\Validators\\GardenValidator";
    }

}
