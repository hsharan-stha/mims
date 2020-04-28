<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class ElectricityUnitConsumptionValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'start_unit'=>'required|numeric',
            'stop_unit'=>'required|numeric',
            'rate'=>'required|numeric|min:0',

        ],
        ValidatorInterface::RULE_UPDATE => [
            'start_unit'=>'numeric',
            'stop_unit'=>'numeric',
            'rate'=>'numeric|min:0'
        ],
   ];

}