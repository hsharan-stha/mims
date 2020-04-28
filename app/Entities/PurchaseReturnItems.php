<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class PurchaseReturnItems extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'purchase_return_items';
    protected $fillable = ['id', 'p_r_id', 'item_id', 'quantity', 'rate', 'value'];

    public function purchaseReturnMaster()
    {
        return $this->belongsTo('App/Entities/PurchaseReturnMaster', 'p_r_id', 'id');
    }

    public function item()
    {
        return $this->belongsTo('App\Entities\Item', 'item_id', 'id');
    }
}
