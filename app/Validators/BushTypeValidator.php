<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class BushTypeValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'code' => ['required','alpha_num'],
            'name' => ['required'],
        ],
        ValidatorInterface::RULE_UPDATE => [
            'code'=>['alpha_num']
        ],
   ];

}