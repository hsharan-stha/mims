<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class PurchaseReturnMaster extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'purchase_return_master';

    protected $fillable = ['id', 'date', 'grn_id'];

    public function purchaseReturnItems()
    {
        return $this->hasMany(PurchaseReturnItems::class, 'p_r_id', 'id');
    }

    public function grn()
    {
        return $this->belongsTo('App\Entities\GRNPO', 'grn_id', 'id');
    }

}
