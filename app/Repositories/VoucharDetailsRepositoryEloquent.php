<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\VoucharDetailsRepository;
use App\Entities\VoucharDetails;
use App\Validators\VoucharDetailsValidator;;

/**
 * Class VoucharDetailsRepositoryEloquent
 * @package namespace App\Repositories;
 */
class VoucharDetailsRepositoryEloquent extends BaseRepository implements VoucharDetailsRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return VoucharDetails::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
