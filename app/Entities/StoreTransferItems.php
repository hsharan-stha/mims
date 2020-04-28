<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class StoreTransferItems extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'store_transfer_items';
    protected $fillable = ['id', 'st_m_id', 'item_id', 'type', 'quantity', 'rate', 'value'];

    public function storeTransferMaster()
    {
        return $this->belongsTo('App\Entities\StoreTransferMaster', 'st_m_id', 'id');
    }

    public function item()
    {
        return $this->belongsTo('App\Entities\Item', 'item_id', 'id');

    }

}
