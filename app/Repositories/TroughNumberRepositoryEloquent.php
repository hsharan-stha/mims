<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\TroughNumberRepository;
use App\Entities\TroughNumber;
use App\Validators\TroughNumberValidator;;

/**
 * Class TroughNumberRepositoryEloquent
 * @package namespace App\Repositories;
 */
class TroughNumberRepositoryEloquent extends BaseRepository implements TroughNumberRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return TroughNumber::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
