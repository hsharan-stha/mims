<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class GRNPO extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'inv_grns';

    protected $fillable = ['id', 'grn_no', 'grn_date', 'vendor_chalaan_no', 'bill_code', 'bill_no', 'store_id', 'vendor_id', 'remarks',
        'type', 'executed', 'user_id', 'estate_id', 'bill_sundry_total', 'cr_account_head_id'];

    public function grnItems()
    {
        return $this->hasMany('App\Entities\GRNPOItem', 'grn_id', 'id');
    }

    public function purchaseReturnMaster()
    {
        return $this->hasMany(PurchaseReturnMaster::class, 'grn_id', 'id');
    }

    public function store()
    {
        return $this->belongsTo('App\Entities\Store', 'store_id', 'id');

    }

    public function vendor()
    {
        return $this->belongsTo('App\Entities\Vendor', 'vendor_id', 'id');
    }

    public function crAccountHead()
    {
        return $this->belongsTo('App\Entities\AccountHead', 'cr_account_head_id', 'id');
    }

}
