<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class UnitValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'code'=>['unique:inv_product_units','required'],
            'name'=>['unique:inv_product_units','required']
        ],
        ValidatorInterface::RULE_UPDATE => [
            'code'=>['unique:inv_product_units'],
        ],
   ];

}