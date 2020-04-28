<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Supplier extends Model implements Transformable
{
    use TransformableTrait;

    protected  $table = 'fac_master_suppliers';

    protected $fillable = ['id','name','address','contact_no','type'];

    public function boughtLeafPaymentDetails(){
        return $this->hasMany('App\Entities\BoughtLeafPaymentDetails','supplier_id','id');
    }

}
