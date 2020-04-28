<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class AccountTransaction extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'ac_account_transactions';

    protected $fillable = ['id','fiscal_year_id','vouchar_no','vouchar_type','total_amount','enter_by','enter_date','approve_by','approve_date','remarks','user_id','estate_id'];

    public function accountTransactionSplits(){
        return $this->hasMany('App\Entities\AccountTransactionSplits','ac_transaction_id','id');
    }


}
