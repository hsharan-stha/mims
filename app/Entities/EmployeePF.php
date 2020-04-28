<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class EmployeePF extends Model implements Transformable
{
    use TransformableTrait;

    protected $table='pay_employee_pfs';

    protected $fillable = ['employee_id','employee_type','employable_type'];




}
