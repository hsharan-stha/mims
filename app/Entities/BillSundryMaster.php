<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class BillSundryMaster extends Model implements Transformable
{
    use TransformableTrait;

    protected $table='ac_master_bill_sundries';

    protected $fillable = ['code','name','sale','purchase','purchase_type','effect_valuation','proportion','user_id','estate_id'];
}
