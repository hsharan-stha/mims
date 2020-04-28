<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class PurchaseReturnValidator extends LaravelValidator
{

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'date' => 'date_format:"Y-m-d"|required',
            'grn_id' => 'required|numeric|exists:inv_grns,id',
        ],
        ValidatorInterface::RULE_UPDATE => [],
    ];

}