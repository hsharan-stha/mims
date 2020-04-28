<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class DailyBoughtLeafValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'green_leaf'=>['required','min:0']
        ],
        ValidatorInterface::RULE_UPDATE => [
            'green_leaf'=>['min:0']
        ],
   ];

}