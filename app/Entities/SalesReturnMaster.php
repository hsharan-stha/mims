<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class SalesReturnMaster extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'sales_return_master';

    protected $fillable = ['id', 'date', 'sales_id'];

    public function salesReturnItems()
    {
        return $this->hasMany(SalesReturnItems::class, 's_r_id', 'id');
    }

    public function salesMaster()
    {
        return $this->belongsTo('App\Entities\SalesMaster', 'sales_id', 'id');
    }
}
