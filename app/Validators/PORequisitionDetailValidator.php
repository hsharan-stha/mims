<?php

namespace App\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class PORequisitionDetailValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'po_no'=>'unique:inv_powith_requisition_details,po_no|required',
            'executed'=>'boolean',
            'po_date'=>'required|date_format:"Y-m-d"',
            'store_id'=>'numeric|exists:inv_master_stores,id',
            'vendor_id'=>'numeric|exists:inv_master_vendors,id'
        ],
        ValidatorInterface::RULE_UPDATE => [
            'executed'=>'boolean',
            'po_date'=>'date_format:"Y-m-d"',
            'store_id'=>'numeric|exists:inv_master_stores,id',
            'vendor_id'=>'numeric|exists:inv_master_vendors,id'
        ],
   ];

}