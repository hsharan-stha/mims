<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Paybook extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'master_paybooks';

    protected $fillable = ['id','division_id','code','name','sex','incharge','activity_pay_of_post','wage','leave_with_wage','bonus'];

    public function division(){
        return $this->belongsTo('App\Entities\Division','division_id','id');
    }

}
