<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class GRNPOItem extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'inv_grn_items';

    protected $fillable = ['id', 'grn_id', 'po_id', 'item_id', 'quantity', 'rate', 'value','foreign_currency', 'foreign_rate', 'value_after_Frate', 'vat', 'vat_value', 'bill_sundry_total', 'total', 'remarks', 'dr_account_head_id'];

    public function grn()
    {
        return $this->belongsTo('App\Entities\GRNPO', 'grn_id', 'id');
    }

    public function grnBillSundryDetails()
    {
        return $this->hasMany('App\Entities\GRNBillSundryDetails', 'grn_item_id', 'id');
    }

    public function purchaseOrder()
    {
        return $this->belongsTo('App\Entities\PORequisitionDetail', 'po_id', 'id');
    }

    public function item()
    {
        return $this->belongsTo('App\Entities\Item', 'item_id', 'id');
    }


    public function drAccountHead()
    {
        return $this->belongsTo('App\Entities\AccountHead', 'dr_account_head_id', 'id');
    }


}

