<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class PaybookMaster extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'act_master_paybooks';

    protected $fillable = ['id','estate_id','user_id','code','name','is_male','is_female','is_ado','min_task',
        'min_rate','ot_task_flag','ot_rate','applied_date','status','leave_with_wages','worker_category',
        'earning','deduction','active'];


    public function activities(){
        return $this->belongsToMany('App\Entities\ActivityMaster', 'paybook_master_activity', 'paybook_master_id', 'activity_id');
    }

    public function deductions(){
        return $this->belongsToMany('App\Entities\DeductionMaster', 'paybook_master_deduction', 'paybook_master_id', 'deduction_id');
    }

    public function earnings(){
        return $this->belongsToMany('App\Entities\EarningMaster', 'paybook_master_earning', 'paybook_master_id', 'earning_id');
    }

//    public function holidays(){
//        return $this->belongsToMany('App\Entities\Holiday', 'paybook_master_holiday', 'paybook_master_id', 'holiday_id');
//    }

    public function leaves(){
        return $this->belongsToMany('App\Entities\LeaveMaster', 'paybook_master_leave', 'paybook_master_id', 'leave_id');
    }

    public function paybookActivities(){
        return $this->hasMany('App\Entities\ActivityPaybookMaster','paybook_id','id');
    }

    public function paybookLeaves(){
        return $this->hasMany('App\Entities\LeavePaybookMaster','paybook_id','id');
    }
}
