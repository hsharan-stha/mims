<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class StoreTransactionValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'quantity'=>'required|numeric|min:0',
            'rate'=>'required|numeric|min:0',
        ],
        ValidatorInterface::RULE_UPDATE => [
            'quantity'=>'numeric|min:0',
            'rate'=>'numeric|min:0',
        ],
   ];

}