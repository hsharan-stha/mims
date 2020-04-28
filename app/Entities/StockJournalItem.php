<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class StockJournalItem extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'stock_journal_items';
    protected $fillable = ['id', 'sjm_id', 'item_id', 'type', 'quantity'];

    public function item()
    {
        return $this->belongsTo('App\Entities\Item', 'item_id', 'id');
    }

    public function sjMaster()
    {
        return $this->belongsTo("App\Entities\StockJournalMaster", 'sjm_id', 'id');
    }

}
