<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Route extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * @var array

     */
    protected $collection = 'routes';

    protected $fillable = ['name', 'method', 'path', 'action_name','permission_id'];

}
