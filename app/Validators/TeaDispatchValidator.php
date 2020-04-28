<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class TeaDispatchValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'invoice_no'=>'required|alpha_num',
            'invoice_date'=>'date_format:"Y-m-d"|required'
        ],
        ValidatorInterface::RULE_UPDATE => [
            'invoice_no'=>'alpha_num',
            'invoice_date'=>'date_format:"Y-m-d"'
        ],
   ];

}