<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class StoreTransaction extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'inv_store_transactions';

    protected $fillable = ['id', 'store_id', 'item_id', 'date', 'quantity', 'rest_quantity', 'rate', 'value', 'total', 'remarks', 'ref', 'user_id', 'opening', 'estate_id', 'type'];

    public function store()
    {
        return $this->belongsTo('App\Entities\Store', 'store_id', 'id');
    }

    public function item()
    {
        return $this->belongsTo('App\Entities\Item', 'item_id', 'id');
    }

}
