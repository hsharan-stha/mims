<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class ProductionVoucherValidator extends LaravelValidator
{
    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'date' => 'date_format:"Y-m-d"|required',
            'bom_id' => 'required|numeric|exists:bom_master,id',
            'store_id' => 'required|numeric|exists:inv_master_stores,id',
            'pvItems' => 'required',
        ],
        ValidatorInterface::RULE_UPDATE => [],
    ];
}