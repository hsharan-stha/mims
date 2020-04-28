<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\StockJournalItemRepository;
use App\Entities\StockJournalItem;
use App\Validators\StockJournalItemValidator;;

/**
 * Class StockJournalItemRepositoryEloquent
 * @package namespace App\Repositories;
 */
class StockJournalItemRepositoryEloquent extends BaseRepository implements StockJournalItemRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return StockJournalItem::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
