<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class CTCMachineDailyLogValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'ctc_machine_id'=>['required|numeric']
        ],
        ValidatorInterface::RULE_UPDATE => [
            'ctc_machine_id'=>['numeric']
        ],
   ];

}