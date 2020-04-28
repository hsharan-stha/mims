<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\PurchaseReturnMasterRepository;
use App\Entities\PurchaseReturnMaster;
use App\Validators\PurchaseReturnMasterValidator;;

/**
 * Class PurchaseReturnMasterRepositoryEloquent
 * @package namespace App\Repositories;
 */
class PurchaseReturnMasterRepositoryEloquent extends BaseRepository implements PurchaseReturnMasterRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return PurchaseReturnMaster::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
