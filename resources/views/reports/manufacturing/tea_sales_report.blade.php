<!DOCTYPE html>
<html>
<head>

</head>
<table>
    <tr><td colspan="9" style="font-weight: bold;text-align:center;" rowspan="2">Tea Sales Report</td>
        @if($date)<td colspan="2">Date From : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</td>@endif
    </tr>
    <tr><td colspan="9"></td>
        @if($date)<td colspan="2">Date To : {!! $date['date_to_en'] !!}  Miti: {!! $date['date_to_np'] !!}</td>@endif
    </tr>
    <tr style="font-weight: 800;">
        <td>Bill Date</td>
        <td>Bill No </td>
        <td>DO No</td>
        <td>DO Date</td>
        <td>Customer</td>
        <td>Broker</td>
        <td>Total Amount</td>
        <td>Net Bill Amount</td>
        <td>Payment Date</td>
        <td colspan="3">Tea Sales Details</td>
    </tr>
    <tr style="font-weight: 800;">
        <td colspan="9"></td>
        <td>Tea Quantity</td>
        <td>Tea Grade</td>
        <td>Quality of Bag</td>
    <?php $total_bill_amount=0;$total_amount=0;$total_qty=0;?>
    @foreach($teaSales as $teaSale)
        <?php $i=0;?>
        <?php $total_sub_qty=0;?>
        <?php $total_bill_amount=$total_bill_amount + $teaSale['net_bill_amount'];?>
        <?php $total_amount=$total_amount+$teaSale['total_amount'];?>
        @foreach($teaSale->teaSalesDetails->toArray() as $teaSaleDetail)
        @if($i==0)
            <?php $i++;?>
                <tr>
                    <td>{!! $teaSale['bill_date'] !!}</td>
                    <td>{!! $teaSale['bill_no'] !!}</td>
                    <td>{!! $teaSale['do_no'] !!}</td>
                    <td>{!! $teaSale['do_date'] !!}</td>
                    <td>{!! $teaSale['customer'] !!}</td>
                    <td>{!! $teaSale['broker'] !!}</td>
                    <td>{!! $teaSale['total_amount'] !!}</td>
                    <td>{!! $teaSale['net_bill_amount'] !!}</td>
                    <td>{!! $teaSale['payment_date'] !!}</td>
                    <td>{!! $teaSaleDetail['sales_quantity']!!}</td>
                    <?php $total_sub_qty=$total_sub_qty + $teaSaleDetail['sales_quantity']; ?>
                    @if($teaSaleDetail['tea_pack'])
                        <td>{!! $teaSaleDetail['tea_pack']['tea_grade']['name'] !!}</td>
                        <td>{!! $teaSaleDetail['tea_pack']['quality_of_bag'] !!}</td>
                    @endif
                </tr>
        @else
                    <tr>
                        <td colspan="9"></td>
                        <td>{!! $teaSaleDetail['sales_quantity'] !!}</td>
                        <?php $total_sub_qty=$total_sub_qty+$teaSaleDetail['sales_quantity']; ?>
                        @if($teaSaleDetail['tea_pack'])
                            <td>{!! $teaSaleDetail['tea_pack']['tea_grade']['name'] !!}</td>
                            <td>{!! $teaSaleDetail['tea_pack']['quality_of_bag'] !!}</td>
                        @endif
                    </tr>
        @endif
        @endforeach
            <tr style="font-weight: bold;">
                <td colspan="9">Sub Total</td>
                <td>{!! $total_sub_qty !!}</td>
                <?php $total_qty=$total_qty+$total_sub_qty;?>
                <td></td>
                <td></td>
            </tr>
            <tr><td colspan="12"></td></tr>
        @endforeach
    <tr style="background-color: #9d9d9d">
        <td>Total</td>
        <td colspan="5"></td>
        <td>{!! $total_amount !!}</td>
        <td>{!! $total_bill_amount !!}</td>
        <td></td>
        <td>{!! $total_qty !!}</td>
        <td></td>
        <td></td>
    </tr>
</table>
</body>
</html>
