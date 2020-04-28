<!DOCTYPE html>
<html>
<head>

</head>


<table>
    <thead><tr colspan="10"><th><h1>Extra Wages</h1>
        </th></tr></thead>
    <thead><tr colspan="10"><th>Date : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    <thead><tr colspan="10"><th>Date : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</th></tr></thead>
    <thead><tr>
        <th>Type</th>
        <th>Name</th>
        <th>OT (Hrs)</th>
        <th>Rate</th>
        <th>Amount</th>
    </tr></thead>
    <tbody>
    <?php $total_ot_amount=0?>
    @foreach($workerExtraWages as $key=>$workerWages)
        <?php $worker_ot_amount=0;?>
    <tr>
    <td>@if($workerWages->first()->worker){!! $workerWages->first()->worker->type !!}@endif</td>
    <td>@if($workerWages->first()->worker){!! $workerWages->first()->worker->name !!}@endif</td>
    <td>{!! $workerWages->sum('ot') !!}</td>
    <td>@if($workerWages->sum('ot') != 0){!! round($workerWages->sum('ot_wages')/$workerWages->sum('ot'),2) !!}@else {!! 0 !!}@endif </td>
    <td>{!! $ot_amount= $workerWages->sum('ot_wages') !!}</td>
        <?php $total_ot_amount= $total_ot_amount+$ot_amount;?>
    <td></td>
    </tr>
        @endforeach
    <tr style="font-weight: bold; background-color: #9d9d9d"><td colspan="4">Total Amount</td><td>{!! $total_ot_amount !!}</td></tr>
    </tbody>
</table>
</body>
</html>
