<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class IrrigationActivityValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'irrigation_unit_id'=>'numeric|required',
            'section_id'=>'numeric|required',
            'running_hours_of_setting'=>'numeric',
            'no_of_sprinkle'=>'numeric',
            'rain_received'=>'numeric',
            'area_per_setting'=>'numeric',
            'area_covered_today'=>'numeric',
            'area_covered_todate'=>'numeric',
            'round'=>'numeric|min:0',
            'mandays_today'=>'numeric|min:0',
            'mandays_todate'=>'numeric|min:0',
        ],
        ValidatorInterface::RULE_UPDATE => [
            'irrigation_unit_id'=>'numeric',
            'section_id'=>'numeric',
            'running_hours_of_setting'=>'numeric',
            'no_of_sprinkle'=>'numeric',
            'rain_received'=>'numeric',
            'area_per_setting'=>'numeric',
            'area_covered_today'=>'numeric',
            'area_covered_todate'=>'numeric',
            'round'=>'numeric|min:0',
            'mandays_today'=>'numeric|min:0',
            'mandays_todate'=>'numeric|min:0',
        ],

   ];

}