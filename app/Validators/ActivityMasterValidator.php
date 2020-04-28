<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class ActivityMasterValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'code' => ['required'],
            'name' => ['required'],
            'activity_group_id' => ['required','numeric'],
            'minimum_task' => ['required','min:0'],
            'unit_of_task' => ['required'],
            'activity_id' => ['exists','numeric'],
            'active' => ['required','boolean'],
            'factory'=> ['required','boolean'],
            'garden'=> ['required','boolean'],
            'hand_plucking'=> ['required','boolean'],
            'machine_plucking'=> ['required','boolean'],
            'cash_hand_plucking'=> ['required','boolean'],
            'cash_machine_plucking'=> ['required','boolean'],
            'unproductive'=> ['required','boolean'],
        ],
        ValidatorInterface::RULE_UPDATE => [
            'activity_group_id' => ['numeric'],
            'minimum_task' => ['min:0'],
            'activity_id' => ['exists','numeric'],
            'active' => ['boolean'],
            'factory'=> ['boolean'],
            'garden'=> ['boolean'],
            'hand_plucking'=> ['boolean'],
            'machine_plucking'=> ['boolean'],
            'cash_hand_plucking'=> ['boolean'],
            'cash_machine_plucking'=> ['boolean'],
            'unproductive'=> ['boolean'],
        ],
   ];

}