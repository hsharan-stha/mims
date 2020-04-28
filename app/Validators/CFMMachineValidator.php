<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class CFMMachineValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'code'=>['required|alpha_num'],
            'name'=>['required|alpha_num']
        ],
        ValidatorInterface::RULE_UPDATE => [
            'code'=>['alpha_num'],
            'name'=>['alpha_num']
        ],
   ];

}