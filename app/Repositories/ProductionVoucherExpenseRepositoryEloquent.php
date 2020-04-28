<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\ProductionVoucherExpenseRepository;
use App\Entities\ProductionVoucherExpense;
use App\Validators\ProductionVoucherExpenseValidator;;

/**
 * Class ProductionVoucherExpenseRepositoryEloquent
 * @package namespace App\Repositories;
 */
class ProductionVoucherExpenseRepositoryEloquent extends BaseRepository implements ProductionVoucherExpenseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return ProductionVoucherExpense::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
