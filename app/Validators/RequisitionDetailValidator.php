<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class RequisitionDetailValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'indent_no'=>'unique:inv_requisition_details,indent_no',
        ],
        ValidatorInterface::RULE_UPDATE => [
        ],
   ];

}