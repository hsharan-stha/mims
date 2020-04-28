<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class ActivityGroupValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'code' => ['required'],
            'name' => ['required'],
            'activity_group_id' => ['exists','numeric'],
        ],
        ValidatorInterface::RULE_UPDATE => [
            'activity_group_id' => ['numeric'],
        ],
   ];

}