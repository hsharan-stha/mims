<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class MaterialIssueValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
           'issue_no'=>'unique:inv_material_issues,issue_no',
            'issue_date'=>'required|date_format:"Y-m-d"',
            'store_id'=>'numeric|exists:inv_master_stores,id',
            'to_store_id'=>'numeric|exists:inv_master_vendors,id'
            ],
        ValidatorInterface::RULE_UPDATE => [
            'issue_date'=>'date_format:"Y-m-d"',
            'store_id'=>'numeric|exists:inv_master_stores,id',
            'to_store_id'=>'numeric|exists:inv_master_stores,id'
        ],
   ];

}