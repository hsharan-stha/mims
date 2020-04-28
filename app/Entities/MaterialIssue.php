<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class MaterialIssue extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'inv_material_issues';

    protected $fillable = ['id', 'issue_no', 'issue_date', 'store_id', 'to_store_id', 'relate_to',
        'remarks', 'user_id', 'estate_id', 'type', 'approve_by', 'approve_date'];

    public function store()
    {
        return $this->belongsTo('App\Entities\Store', 'store_id', 'id');
    }

    public function toStore()
    {
        return $this->belongsTo('App\Entities\Store', 'to_store_id', 'id');
    }


    public function materialIssueDetails()
    {
        return $this->hasMany('App\Entities\MaterialIssueDetailItem', 'material_issue_id');
    }

    public function issueReturnMaster()
    {
        return $this->hasMany('App\Entities\IssueReturnMaster', 'material_issue_id','id');
    }


}
