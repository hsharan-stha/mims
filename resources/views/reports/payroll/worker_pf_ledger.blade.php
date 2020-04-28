<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table>
    <thead>
    <tr colspan="6">
        <th><h1>WORKER PF LEDGER</h1></th>
    </tr>
    @if($workerPFs->first())<tr colspan="6">
        <th colspan="6"><h1>@if($workerPFs[0]->worker){!! $workerPFs[0]->worker->name.'('.$workerPFs[0]->worker->name.')' !!}@endif</h1></th>
    </tr>@endif
    </thead>
    <thead>
    <tr >
        <th>S.N</th>
        <th>Date</th>
        <th>Worker PF</th>
        <th>Employer PF</th>
        <th>Deposited</th>
        <th>Cumilative Balance</th>
    </tr>
    </thead>
    <tbody>
    <?php $i=0;?>
    <tr>
        <th colspan="5">Opening</th>
        <th>{!! $opening !!}</th>
    </tr>
    <?php $cum_balance=$opening;?>
    @foreach($workerPFs as $workerPF)
        <tr>
            <?php $i++;?>
            <td>{!! $i !!}</td>
            <td> {!! $workerPF->date !!}</td>
            <td> {!!  $workerPF->pf_worker !!}</td>
            <td> {!! $workerPF->pf_employer !!}</td>
            <td> {!! $workerPF->pf_deposit !!}</td>
                <?php $cum_balance=$cum_balance+$workerPF->pf_deposit;?>
            <td style="font-weight: bold"> {!! $cum_balance !!}</td>
        </tr>
    @endforeach
    <tr>
        <td colspan="5">Closing</td>
        <td>{!! $cum_balance !!}</td>
    </tr>
    </tbody>
</table>
</body>
</html>
