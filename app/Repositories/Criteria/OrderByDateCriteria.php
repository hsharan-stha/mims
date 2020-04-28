<?php
namespace App\Repositories\Criteria;
use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Contracts\CriteriaInterface;

class OrderByDateCriteria implements CriteriaInterface {

    public function apply($model, RepositoryInterface $repository)
    {
        $model = $model->orderBy('created_at','desc');
        return $model;
    }
}