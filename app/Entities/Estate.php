<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Estate extends Model implements Transformable
{
    use TransformableTrait;

    protected  $table = 'master_tea_estates';

    protected $fillable = ['id','code','name','contact_no','address'];

    public  function users(){
        return $this->belongsToMany('App\Entities\User', 'estate_user', 'estate_id', 'user_id');
    }

}
