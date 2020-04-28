<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\StoreTransferMasterRepository;
use App\Entities\StoreTransferMaster;
use App\Validators\StoreTransferMasterValidator;;

/**
 * Class StoreTransferMasterRepositoryEloquent
 * @package namespace App\Repositories;
 */
class StoreTransferMasterRepositoryEloquent extends BaseRepository implements StoreTransferMasterRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return StoreTransferMaster::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
