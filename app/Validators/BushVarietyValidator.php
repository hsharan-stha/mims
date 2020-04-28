<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class BushVarietyValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'code' => ['required'],
            'name' => ['required'],
            'scientific_name' => ['required'],
            'remarks' => ['required']
        ],
        ValidatorInterface::RULE_UPDATE => [],
   ];

}