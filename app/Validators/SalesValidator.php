<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class SalesValidator extends LaravelValidator
{

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'date' => 'date_format:"Y-m-d"|required',
            'bill_no' => 'required',
            'customer' => 'required|regex:/^[\pL\s\-]+$/u|max:255',
            'remarks' => 'required|regex:/^[\pL\s\-]+$/u',
            'shipping_details' => 'required|regex:/^[\pL\s\-]+$/u',
        ],
        ValidatorInterface::RULE_UPDATE => [],
    ];

}