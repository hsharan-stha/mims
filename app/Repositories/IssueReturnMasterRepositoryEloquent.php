<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\IssueReturnMasterRepository;
use App\Entities\IssueReturnMaster;
use App\Validators\IssueReturnMasterValidator;;

/**
 * Class IssueReturnMasterRepositoryEloquent
 * @package namespace App\Repositories;
 */
class IssueReturnMasterRepositoryEloquent extends BaseRepository implements IssueReturnMasterRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return IssueReturnMaster::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
