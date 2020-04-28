<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\BillSundryMasterRepository;
use App\Entities\BillSundryMaster;
use App\Validators\BillSundryMasterValidator;;

/**
 * Class BillSundryMasterRepositoryEloquent
 * @package namespace App\Repositories;
 */
class BillSundryMasterRepositoryEloquent extends BaseRepository implements BillSundryMasterRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return BillSundryMaster::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
