<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\JournalVoucherFormRepository;
use App\Entities\JournalVoucherForm;
use App\Validators\JournalVoucherFormValidator;;

/**
 * Class JournalVoucherFormRepositoryEloquent
 * @package namespace App\Repositories;
 */
class JournalVoucherFormRepositoryEloquent extends BaseRepository implements JournalVoucherFormRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return JournalVoucherForm::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
