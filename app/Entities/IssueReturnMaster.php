<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class IssueReturnMaster extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'issue_return_master';

    protected $fillable = ['id', 'date', 'material_issue_id'];

    public function issueReturnItems()
    {
        return $this->hasMany(IssueReturnItems::class, 'i_r_id', 'id');
    }

    public function materialIssue()
    {
        return $this->belongsTo('App\Entities\MaterialIssue', 'material_issue_id', 'id');
    }

}
