<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\StockJournalMasterRepository;
use App\Entities\StockJournalMaster;
use App\Validators\StockJournalMasterValidator;;

/**
 * Class StockJournalMasterRepositoryEloquent
 * @package namespace App\Repositories;
 */
class StockJournalMasterRepositoryEloquent extends BaseRepository implements StockJournalMasterRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return StockJournalMaster::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
