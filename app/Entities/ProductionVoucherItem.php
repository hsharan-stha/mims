<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class ProductionVoucherItem extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'production_voucher_items';
    protected $fillable = ['id', 'pvm_id', 'item_id', 'type', 'qty', 'rate', 'value','actual_qty'];

    public function item()
    {
        return $this->belongsTo('App\Entities\Item', 'item_id', 'id');

    }

    public function pvMaster()
    {
        return $this->belongsTo('App\Entities\ProductionVoucherMaster', 'pvm_id', 'id');
    }
}
