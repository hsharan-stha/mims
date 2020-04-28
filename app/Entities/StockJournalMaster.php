<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class StockJournalMaster extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'stock_journal_masters';
    protected $fillable = ['id','date', 'stock_journal'];

    public function sjItems()
    {
        return $this->hasMany(StockJournalItem::class, 'sjm_id', 'id');
    }
}
