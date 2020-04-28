<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class PluckingMandaysBudgetValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'fiscal_year_id'=>'required|numeric',
            'section_id'=>'required|numeric',
            'start_date'=>'required|date_format:"Y-m-d"|before:end_date',
            'end_date'=>'required|date_format:"Y-m-d"',
            'budgeted_date'=>'required|date_format:"Y-m-d"',
            'yrly_tea_made'=>'required|numeric|min:0',
            'yrly_recovery_percentage'=>'required|numeric|min:0',
            'yrly_production_per_plucker'=>'required|numeric|min:0',
            'yrly_mandays'=>'required|numeric|min:0',
            'yrly_green_leaf'=>'required|numeric|min:0'
        ],
        ValidatorInterface::RULE_UPDATE => [
            'fiscal_year_id'=>'numeric',
            'section_id'=>'numeric',
            'start_date'=>'date_format:"Y-m-d"|before:end_date',
            'end_date'=>'date_format:"Y-m-d"|after:start_date',
            'budgeted_date'=>'date_format:"Y-m-d"',
            'yrly_made_tea'=>'numeric|min:0',
            'yrly_recovery_percentage'=>'numeric|min:0',
            'yrly_production_per_plucker'=>'numeric|min:0',
            'yrly_mandays'=>'numeric|min:0',
            'yrly_green_leaf'=>'numeric|min:0'
        ],
   ];

}