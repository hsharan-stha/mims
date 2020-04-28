<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class AccountTransactionSplits extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'ac_account_transaction_splits';

    protected $fillable = ['id','ac_transaction_id','ac_code','cr_value','dr_value','cheque_no','particulars','bank_name','reference','cost_center_id'];


    public function accountHead(){
        return $this->belongsTo('App\Entities\AccountHead','ac_code','group_code');
    }

    public function costCenter(){
        return $this->belongsTo('App\Entities\CostCenter','cost_center_id','id');
    }

    public function accountTransaction(){
        return $this->belongsTo('App\Entities\AccountTransaction','ac_transaction_id','id');
    }

}
