<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\GRNBillSundryDetailsRepository;
use App\Entities\GRNBillSundryDetails;
use App\Validators\GRNBillSundryDetailsValidator;;

/**
 * Class GRNBillSundryDetailsRepositoryEloquent
 * @package namespace App\Repositories;
 */
class GRNBillSundryDetailsRepositoryEloquent extends BaseRepository implements GRNBillSundryDetailsRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return GRNBillSundryDetails::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
