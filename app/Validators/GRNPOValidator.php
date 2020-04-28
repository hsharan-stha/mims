<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class GRNPOValidator extends LaravelValidator
{

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'grn_no' => 'required|unique:inv_grns,grn_no',
            'vendor_chalaan_no' => 'required',
            'foreign_currency'=>'regex:/^[\pL\s\-]+$/u',
            'foreign_rate'=>'numeric',
            'grn_date' => 'date_format:"Y-m-d"|required',
            'store_id' => 'required|numeric|exists:inv_master_stores,id',
            'vendor_id' => 'numeric|exists:inv_master_vendors,id',
            'remarks' => 'required|regex:/^[\pL\s\-]+$/u',
//            'grnPOItems' => 'required',
//            'wholeSumBillSundry' => 'required',
//            'groupwiseBillSundry' => 'required',
        ],
        ValidatorInterface::RULE_UPDATE => [
            'grn_date' => 'date_format:"Y-m-d"',
            'store_id' => 'numeric,exists:inv_master_stores,id,NOT_NULL',
            'vendor_id' => 'numeric,exists:inv_master_vendors,id,NULL'
        ],
    ];

}