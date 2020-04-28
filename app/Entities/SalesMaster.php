<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class SalesMaster extends Model implements Transformable
{
    use TransformableTrait;
    protected $table = 'sales_master';

    protected $fillable = ['id', 'sales_module', 'date', 'customer', 'bill_no', 'remarks', 'shipping_details'];

    public function salesItems()
    {
        return $this->hasMany(SalesItems::class, 'sales_id', 'id');
    }

    public function salesReturnMaster()
    {
        return $this->hasMany(SalesReturnMaster::class, 'sales_id', 'id');
    }

}
