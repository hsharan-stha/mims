<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class ProductionVoucherExpense extends Model implements Transformable
{
    use TransformableTrait;

    protected $table='inv_production_voucher_expenses';

    protected $fillable = ['pvm_id','item_name','cost'];

   public function productionVoucher(){
       return $this->belongsTo('App\Entities\ProductionVoucherMaster','pvm_id','id');
   }
}
