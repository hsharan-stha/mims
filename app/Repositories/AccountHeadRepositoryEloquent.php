<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\AccountHeadRepository;
use App\Entities\AccountHead;
use App\Validators\AccountHeadValidator;;

/**
 * Class AccountHeadRepositoryEloquent
 * @package namespace App\Repositories;
 */
class AccountHeadRepositoryEloquent extends BaseRepository implements AccountHeadRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return AccountHead::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
