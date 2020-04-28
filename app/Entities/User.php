<?php

namespace App\Entities;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Zizaco\Entrust\Traits\EntrustUserTrait;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class User extends Authenticatable implements Transformable
{
    use TransformableTrait;

    use EntrustUserTrait;

//    protected $primaryKey = '_id';

    // protected $collection = 'users';

//    protected $connection = 'mysql';

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['email', 'password','username' ,'activation_code', 'flag'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token', 'activation_code', 'flag'];


    /**
     * @var array
     */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    public  function estates(){
        return $this->belongsToMany('App\Entities\Estate', 'estate_user', 'user_id', 'estate_id');
    }

}
