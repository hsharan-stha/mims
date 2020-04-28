<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class ActivityMaster extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'act_master_activities';

    protected $fillable = ['id','estate_id','activity_group_id','minimum_task','unit_of_task','is_tds_applicable','code','name','user_id',
        'active','factory','garden','unproductive','hand_plucking','machine_plucking','cash_hand_plucking','cash_machine_plucking'];

    public function workerAttendences(){
        return $this->hasMany('App\Entities\WorkerAttendenceMaster','activity_id','id');
    }

    public function activityGroup(){
        return $this->belongsTo('App\Entities\ActivityGroup','activity_group_id','id');
    }

    public function activityPaybooks(){
        return $this->hasMany('App\Entities\ActivityPaybookMaster','activity_id','id');
    }

}
