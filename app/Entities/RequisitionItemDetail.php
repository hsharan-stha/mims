<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class RequisitionItemDetail extends Model implements Transformable
{
    use TransformableTrait;

    protected $table ='inv_requisition_item_details';

    protected $fillable = ['requisition_id','item_id','quantity','last_date_of_requirement','urgent','budgeted','remarks'];

    public function requisitionDetail(){
      return  $this->belongsTo('App\Entities\RequisitionDetail','requisition_id','id');
    }

    public function item(){
       return $this->belongsTo('App\Entities\Item','item_id','id');
    }

}
