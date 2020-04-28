<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class MaterialIssueDetailItem extends Model implements Transformable
{
    use TransformableTrait;

    protected  $table = 'inv_material_issue_item_details';

    protected $fillable = ['id','item_id','material_issue_id','quantity','rate','value','consumed_detail','activity_id'];


    public function materialIssue(){
        return $this->belongsTo('App\Entities\MaterialIssue','material_issue_id','id');
    }

    public function item(){
        return $this->belongsTo('App\Entities\Item','item_id','id');
    }
    public function activity(){
        return $this->belongsTo('App\Entities\ActivityMaster','activity_id','id');
    }

}
