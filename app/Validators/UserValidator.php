<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;
use \Prettus\Validator\Exceptions\ValidatorException;

class UserValidator extends LaravelValidator
{

    /**
     * @var array
     */
    protected $messages = [];

    /**
     * @var array
     */
    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'email' => ['required','email','unique:users,email'],
            'password' => ['required', 'min:6', 'confirmed'],
            'password_confirmation'=>['required','same:password'],
            'username'=>['required','min:6', 'unique:users,username'],
            // 'role_id'=>['required'],
        ],
        ValidatorInterface::RULE_UPDATE => [
            'password' => [ 'min:6', 'confirmed'],
            'password_confirmation'=>['same:password'],
            'email'=>['email'],
            'username'=>['min:6'],
        ],
   ];

}