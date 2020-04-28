<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\AccountTransactionSplitsRepository;
use App\Entities\AccountTransactionSplits;
use App\Validators\AccountTransactionSplitsValidator;;

/**
 * Class AccountTransactionSplitsRepositoryEloquent
 * @package namespace App\Repositories;
 */
class AccountTransactionSplitsRepositoryEloquent extends BaseRepository implements AccountTransactionSplitsRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return AccountTransactionSplits::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
