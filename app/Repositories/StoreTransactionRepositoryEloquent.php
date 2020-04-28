<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\StoreTransactionRepository;
use App\Entities\StoreTransaction;
use App\Validators\StoreTransactionValidator;;

/**
 * Class StoreTransactionRepositoryEloquent
 * @package namespace App\Repositories;
 */
class StoreTransactionRepositoryEloquent extends BaseRepository implements StoreTransactionRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return StoreTransaction::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
