<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class InventorySetup extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'inv_master_inventory_setups';

    protected $fillable = ['fiscal_year_id','purchase_order_expiry','auto_generate_req_no','auto_generate_po_no','auto_generate_missue_no','auto_generate_grn_no',
    'pre_req_no','suf_req_no','last_req_no','pre_po_no','suf_po_no','last_po_no','pre_grn_no','suf_grn_no','last_grn_no','pre_missue_no','suf_missue_no','last_missue_no',
       'validation_method','active' ,'user_id','estate_id'];


    public function fiscalYear(){
        return $this->belongsTo('App\Entities\FiscalYear','fiscal_year_id','id');
    }

}
