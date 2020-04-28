<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class IrrigationUnitValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'code'=>'required|min:1',
            'name'=>'required|min:1'
        ],
        ValidatorInterface::RULE_UPDATE => [
            'code'=>'min:1',
            'name'=>'min:1'
        ],
   ];

}