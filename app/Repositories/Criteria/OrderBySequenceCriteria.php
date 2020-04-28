<?php
namespace App\Repositories\Criteria;
use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Contracts\CriteriaInterface;

class OrderBySequenceCriteria implements CriteriaInterface {

    public function apply($model, RepositoryInterface $repository)
    {
        $model = $model->orderBy('sequence','asc');
        return $model;
    }
}