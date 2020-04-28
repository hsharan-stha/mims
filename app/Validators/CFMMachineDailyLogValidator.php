<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class CFMMachineDailyLogValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'cfm_machine_id'=>['required|numeric']
        ],
        ValidatorInterface::RULE_UPDATE => [],
   ];

}