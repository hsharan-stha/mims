<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class IssueReturnItems extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'issue_return_items';

    protected $fillable = ['id', 'i_r_id', 'item_id', 'quantity', 'rate', 'value'];

    public function issueReturnMaster()
    {
        return $this->belongsTo('App/Entities/IssueReturnMaster', 'i_r_id', 'id');
    }

    public function item()
    {
        return $this->belongsTo('App\Entities\Item', 'item_id', 'id');
    }
}
