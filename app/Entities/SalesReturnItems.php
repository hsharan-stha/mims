<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class SalesReturnItems extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'sales_return_items';
    protected $fillable = ['id', 's_r_id', 'item_id', 'quantity', 'rate', 'value'];

    public function salesReturnMaster()
    {
        return $this->belongsTo('App/Entities/SalesReturnMaster', 's_r_id', 'id');
    }

    public function item()
    {
        return $this->belongsTo('App\Entities\Item', 'item_id', 'id');
    }
}
