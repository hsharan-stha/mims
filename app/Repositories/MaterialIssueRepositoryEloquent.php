<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\MaterialIssueRepository;
use App\Entities\MaterialIssue;
use App\Validators\MaterialIssueValidator;;

/**
 * Class MaterialIssueRepositoryEloquent
 * @package namespace App\Repositories;
 */
class MaterialIssueRepositoryEloquent extends BaseRepository implements MaterialIssueRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return MaterialIssue::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
