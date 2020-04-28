<?php
namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;
use \Prettus\Validator\Exceptions\ValidatorException;

class ProfileValidator extends LaravelValidator
{

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'full_name' => ['required'],
            'mobile_number'=>['required'],
             'image' => ['mimes:jpeg,bmp,png,jpg'],
        ],
        ValidatorInterface::RULE_UPDATE => [
            //'image' => ['mimes:jpeg,bmp,png'],
        ],
    ];


}