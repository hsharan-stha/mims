<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class POItemRequisitionDetail extends Model implements Transformable
{
    use TransformableTrait;

    protected  $table = 'inv_po_item_with_requisition_details';

    protected $fillable = ['id','po_item_requisition_id','requisition_id','item_id','quantity','rate','value','total','remarks'];

    public function requisitionDetail(){
        return $this->belongsTo('App\Entities\RequisitionDetail','requisition_id','id');
    }

    public function poRequisitionDetail(){
        return $this->belongsTo('App\Entities\PORequisitionDetail','po_item_requisition_id','id');
    }

    public function item(){
        return $this->belongsTo('App\Entities\Item','item_id','id');
    }
}
