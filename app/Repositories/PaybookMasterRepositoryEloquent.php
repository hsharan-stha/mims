<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\PaybookMasterRepository;
use App\Entities\PaybookMaster;
use App\Validators\PaybookMasterValidator;;

/**
 * Class PaybookMasterRepositoryEloquent
 * @package namespace App\Repositories;
 */
class PaybookMasterRepositoryEloquent extends BaseRepository implements PaybookMasterRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return PaybookMaster::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
