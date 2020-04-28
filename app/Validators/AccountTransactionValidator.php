<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class AccountTransactionValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
//            'start_at'      => ['required|date|date_format:Y-m-d|before:end_at'],
//            'end_at'        => ['required|date|date_format:Y-m-d|after:start_at'],
//            'voucher_no'    => ['numeric'],
//            'ac_transaction_id' => ['numeric']

        ],
        ValidatorInterface::RULE_UPDATE => [],
   ];

}