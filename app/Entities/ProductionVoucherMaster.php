<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class ProductionVoucherMaster extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'production_voucher_master';
    protected $fillable = ['id', 'bom_id', 'store_id', 'date', 'lot', 'lot_no','extra_cost'];

    public function bomMaster()
    {
        return $this->belongsTo('App\Entities\BOMMaster', 'bom_id', 'id');
    }

    public function pvItems()
    {
        return $this->hasMany(ProductionVoucherItem::class, 'pvm_id', 'id');
    }

    public function store(){
        return $this->belongsTo(Store::class ,'store_id', 'id');
    }

    public function pvExpenses(){
        return $this->hasMany(ProductionVoucherExpense::class,'pvm_id','id');
    }
}
