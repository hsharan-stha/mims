<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class RequisitionDetail extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'inv_requisition_details';

    protected $fillable = ['id','indent_no','indent_date','from_store_id','to_store_id','status','executed','approve_by','approve_date','user_id','estate_id'];

    public function requisitionItemDetails(){
        return $this->hasMany('App\Entities\RequisitionItemDetail','requisition_id','id');
    }

    public function toStore(){
        return $this->belongsTo('App\Entities\Store', 'to_store_id', 'id');
    }

    public function fromStore(){
        return $this->belongsTo('App\Entities\Store', 'from_store_id', 'id');
    }
}
