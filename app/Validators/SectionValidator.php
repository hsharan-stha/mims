<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class SectionValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
        ],
        ValidatorInterface::RULE_UPDATE => [],
   ];

}