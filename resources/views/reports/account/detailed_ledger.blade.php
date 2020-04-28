<!DOCTYPE html>
<html>
<head>

</head>
<table>
    <tr colspan="6"><td><h1>Ledger:  {!! $allTransactionSplits[0]->accountHead->name !!}</h1>
        </td></tr>
    <tr colspan="6"><td>Date : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</td></tr>
    <tr colspan="6"><td>Date : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</td></tr>
    <tr>
        <td> Date </td>
        <td>Particulars</td>
        <td>JV no</td>
        <td>Debit</td>
        <td>Credit</td>
    </tr>
    <tr><td></td></tr>
    @foreach($allTransactionSplits as $key=>$transactionSplit)
        <tr>
            <td>
                {!! $transactionSplit->accountTransaction()->accountTransactionSplits->first()->accountHead->name !!}
            </td>
            <td>
                {!! $transactionSplit->accountTransaction->vouchar_type.'-'.$transactionSplit->accountTransaction->vouchar_no !!}
            </td>
            <?php $transaction_value=$transactionSplit->accountTransaction()->acccountTransactionSplits()->sum('value');?>
            @if($transaction_value > 0)
                <td>
                    {!! $transaction_id_value !!}
                </td>
                <td></td>
            @else
                <td> </td>
                <td>
                    {!! $transaction_id_value !!}
                </td>
            @endif

            <td>
                {!! $transactionSplit->created_at !!}
            </td>
        </tr>
    @endforeach
</table>
</body>
</html>
