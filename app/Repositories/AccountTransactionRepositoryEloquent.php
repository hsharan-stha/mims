<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\AccountTransactonRepository;
use App\Entities\AccountTransaction;
use App\Validators\AccountTransactonValidator;;

/**
 * Class AccountTransactionRepositoryEloquent
 * @package namespace App\Repositories;
 */
class AccountTransactionRepositoryEloquent extends BaseRepository implements AccountTransactionRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return AccountTransaction::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
