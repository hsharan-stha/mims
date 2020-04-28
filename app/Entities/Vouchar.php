<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Vouchar extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'ac_master_vouchars';

    protected $fillable = ['id','fiscal_year_id','vouchar_no','vouchar_type','total_amount','remarks','enter_by','enter_date','approve_by','approve_date','user_id','estate_id'];

    public function voucharDetails(){
        return $this->hasMany('App\Entities\VoucharDetails','vouchar_master_id','id');
    }

}
