<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class PORequisitionDetail extends Model implements Transformable
{
    use TransformableTrait;

    protected  $table = 'inv_powith_requisition_details';

    protected $fillable = ['id','po_no','po_date','extra_ref','store_id','vendor_id','type','executed','valid_up_to','user_id','estate_id','approve_by','approve_date'];

    public function poItemRequisitionDetails(){
        return $this->hasMany('App\Entities\POItemRequisitionDetail','po_item_requisition_id','id');
    }
    public function store(){
        return $this->belongsTo('App\Entities\Store','store_id','id');
    }

    public function vendor(){
        return $this->belongsTo('App\Entities\Vendor','vendor_id','id');
    }

}
