<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\PaybookRepository;
use App\Entities\Paybook;
use App\Validators\PaybookValidator;;

/**
 * Class PaybookRepositoryEloquent
 * @package namespace App\Repositories;
 */
class PaybookRepositoryEloquent extends BaseRepository implements PaybookRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Paybook::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
