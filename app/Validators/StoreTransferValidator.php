<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class StoreTransferValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'date' => 'required|date_format:"Y-m-d"|required',
            'from_store_id' => 'required|numeric|exists:inv_master_stores,id',
            'to_store_id' => 'required|numeric|exists:inv_master_stores,id',
        ],
        ValidatorInterface::RULE_UPDATE => [],
   ];

}