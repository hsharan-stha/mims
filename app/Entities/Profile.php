<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Profile extends Model implements Transformable
{
    use TransformableTrait;

    protected $fillable = [
        'name',
        'gender',
        'dob',
        'phone',
        'mobile',
        'address_line_1',
        'address_line_2',
        'vdc_municipality',
        'district',
        'zone',
        'country',
        'temporary_address',
        'temporary_phone',
        'temporary_mobile',
        'images'
    ];

    protected $collection = 'profiles';

    public $timestamps=false;

    public function getImagesAttribute($value)
    {
        return json_decode($value, true);
    }

    public function user()
    {
        return $this->hasOne('App\Entities\User');
    }

}
