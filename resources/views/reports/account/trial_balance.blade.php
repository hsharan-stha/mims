<!DOCTYPE html>
<html>
<head>

</head>
<table>
    <tr colspan="5"><td><h1>Trial Balance</h1>
        </td></tr>
    <tr colspan="5"><td>Date : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</td></tr>
    <tr colspan="5"><td>Date : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</td></tr>
    <tr><td colspan="5" style="text-align: center">Particulars</td></tr>
    <tr><td></td><td>Opening</td><td colspan="2">Transactions</td><td>Closing</td></tr>
    <tr>
        <td></td>
        <td>Balance </td>
        <td>Debit</td>
        <td>Credit</td>
        <td>Balance</td>
    </tr>
    @foreach($accounts as $akey=>$account)
        @if(is_array($account))
            <tr><td>{!! $akey !!}</td>
                <td>{!! $account['opening'] !!}</td>
                <td>{!! abs($account['debit']) !!}</td>
                <td>{!! abs($account['credit']) !!}</td>
                <td>{!! $account['closing'] !!}</td>
            </tr>
            @foreach($account as $ckey=>$child_account)
                @if(is_array($child_account))
                <tr style="text-align: center;"><td>{!! $ckey !!}</td>
                    <td>{!! $child_account['opening'] !!} </td>
                    <td>{!! abs($child_account['debit']) !!}</td>
                    <td>{!! abs($child_account['credit']) !!}</td>
                    <td>{!! $child_account['closing'] !!} </td>
                </tr>
                @foreach($child_account as $key=>$grand_child_account)
                    @if(is_array($grand_child_account))
            <tr style="text-align:right;">
                <td>{!! $key !!}</td>
                <?php $opening= $grand_child_account['opening'];?>
                <td>{!! $opening!!}</td>
                <?php $debit= $grand_child_account['debit'];?>
                <td>{!! abs($debit) !!}</td>
                <?php $credit=$grand_child_account['credit'];?>
                <td>{!! abs($credit) !!}</td>
                <?php $closing = $grand_child_account['closing']?>
                <td>{!! $closing !!} </td>
            </tr>
                        @endif
                    @endforeach
                @endif
                @endforeach
            @endif
        @endforeach
    </table>
</body>
</html>
