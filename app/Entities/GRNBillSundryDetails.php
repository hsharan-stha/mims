<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class GRNBillSundryDetails extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'inv_bill_sundries_details';

    protected $fillable = ['grn_item_id', 'bill_sundry_id', 'item_id','group_name','value', 'user_id', 'estate_id'];

    public function grnPOItem()
    {
        return $this->belongsTo('App\Entities\GRNPOItem', 'item_id','id');
    }

    public function billSundry()
    {
        return $this->belongsTo('App\Entities\BillSundryMaster', 'bill_sundry_id','id');

    }

}
