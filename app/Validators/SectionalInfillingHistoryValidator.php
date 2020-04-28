<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class SectionalInfillingHistoryValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'section_id'=>'required|numeric',
            'bush_variety_id'=>'required|numeric',
            'bush_type_id'=>'required|numeric',
            'bush_clone_id'=>'required|numeric',
            'no_of_trees'=>'numeric|min:0',
            'bush_density'=>'numeric|min:0',
            'area_covered'=>'numeric|min:0',
            'plant_infilled'=>'numeric|min:0'
        ],
        ValidatorInterface::RULE_UPDATE => [
            'section_id'=>'numeric',
            'bush_variety_id'=>'numeric',
            'bush_type_id'=>'numeric',
            'bush_clone_id'=>'numeric',
            'no_of_trees'=>'numeric|min:0',
            'bush_density'=>'numeric|min:0',
            'area_covered'=>'numeric|min:0',
            'plant_infilled'=>'numeric|min:0'
        ],
   ];

}