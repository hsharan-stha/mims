<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Department extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'master_departments';

    protected $fillable = ['id','name'];

}