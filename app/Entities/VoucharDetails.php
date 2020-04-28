<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class VoucharDetails extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'ac_master_vouchar_details';

    protected $fillable = ['id','vouchar_master_id','ac_code','cr_value','dr_value','particulars','bank_name','cheque_no','reference','cost_center_id'];


    public function accountHead(){
    return $this->belongsTo('App\Entities\AccountHead','ac_code','group_code');
}

    public function costCenter(){
        return $this->belongsTo('App\Entities\CostCenter','cost_center_id','id');
    }

    public function vouchar(){
        return $this->belongsTo('App\Entities\Vouchar','vouchar_master_id','id');
    }
}
