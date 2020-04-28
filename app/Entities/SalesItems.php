<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class SalesItems extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'sales_items';

    protected $fillable = ['id', 'sales_id', 'item_id', 'quantity', 'rate', 'amount', 'total'];

    public function salesMaster()
    {
        return $this->belongsTo('App\Entities\SalesMaster', 'sales_id', 'id');
    }

    public function item()
    {
        return $this->belongsTo('App\Entities\Item', 'item_id', 'id');

    }

}
