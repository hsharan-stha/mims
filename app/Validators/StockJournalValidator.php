<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class StockJournalValidator extends LaravelValidator
{

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'stock_journal' => 'required|regex:/^[\pL\s\-]+$/u|max:255',
            'date'=>'date_format:"Y-m-d"|required',
            'sjItems'=>'required',
        ],
        ValidatorInterface::RULE_UPDATE => [],
   ];

}