<!DOCTYPE html>
<html>
<head>

</head>
<table>
    {{--<tr colspan="6"><td><h1>Ledger:  {!! $allTransactionSplits[0]->accountHead->name !!}</h1>--}}
        </td></tr>
    @if($date)<tr colspan="6"><td>Date : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</td></tr>
    <tr colspan="6"><td>Date : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</td></tr> @endif
    <tr>
        <td> Date </td>
        <td>Particulars</td>
        <td>Vouchar no</td>
        <td>Debit</td>
        <td>Credit</td>
    </tr>
    <tr><td>{!! $date['date_from_en'] !!}</td><td>Opening Balance</td><td></td>@if($balance['opening_balance'] > 0)<td>{!! abs($balance['opening_balance']) !!}</td><td></td>@else<td></td><td>{!! abs($balance['opening_balance']) !!}</td>@endif</tr>
    @foreach($allTransactionSplits as $key=>$transactionSplit)
        <tr>
            <td>
                {!! date('Y-m-d',strtotime($transactionSplit->created_at)) !!}
            </td>
            <td>
               @if($transactionSplit->accountTransaction) {!! $transactionSplit->accountTransaction->accountTransactionSplits()->where('id','!=',$transactionSplit->id)->first()->accountHead->name !!}@else {!! 0 !!} @endif
            </td>
            <td>
                @if($transactionSplit->accountTransaction) {!! $transactionSplit->accountTransaction->vouchar_type.'-'.$transactionSplit->accountTransaction->vouchar_no !!} @else {!! 0 !!} @endif
            </td>
            <?php $transaction_value= $transactionSplit->value ;?>
            @if($transaction_value > 0)
            <td>
                {!! abs($transaction_value) !!}
            </td>
                <td></td>
            @else
                <td> </td>
                <td>
                    {!! abs($transaction_value) !!}
                </td>
            @endif


        </tr>
    @endforeach
    <tr><td>{!! $date['date_to_en'] !!}</td><td>Closing Balance</td><td></td>@if($balance['closing_balance'] > 0)<td>{!! abs($balance['closing_balance']) !!}</td><td></td>@else<td></td><td>{!! abs($balance['closing_balance']) !!}</td>@endif</tr>

</table>
</body>
</html>
