<!DOCTYPE html>
<html>
<head>

</head>
<table>
    <tr colspan="6" style="text-align:center ;"><td><h1>Daily Stores</h1>
        </td></tr>
    <tr><td colspan="6">Date : {!! date('Y-m-d',strtotime($date['date_en'])) !!}  Miti: {!! $date['date_np'] !!}</td></tr>
    <tr></tr>
    <tr><td colspan="6" style="text-align: center;background-color:#FFFF66;"><h3>Direct Purchase</h3></td></tr>
    <tr style="font-weight: bold;">
        <td>S.No.</td>
        <td>Supplier Name</td>
        <td>Item Name</td>
        <td>Quantity</td>
        <td>Rate</td>
        <td>Amount</td>
    </tr>
    <?php $i=0;?>
    @foreach($direct_purchase_items as $direct_purchase_item)
        @foreach($direct_purchase_item->grnItems as $direct_purchase_item_details)
            @if($direct_purchase_item_details->po_id == null)
            <tr>
                <td>{!! ++$i !!}</td>
                <td>@if($direct_purchase_item->vendor){!! $direct_purchase_item->vendor->name  !!}@endif</td>
                <td>@if($direct_purchase_item_details->item){!! $direct_purchase_item_details->item->name !!}@endif</td>
                <td>{!! $direct_purchase_item_details->quantity !!}</td>
                <td>{!! $direct_purchase_item_details->rate !!}</td>
                <td>{!! $direct_purchase_item_details->quantity * $direct_purchase_item_details->rate !!}</td>
            </tr>
            @endif
        @endforeach
    @endforeach
    <tr><td colspan="5" style="text-align: center;background-color:#FFFF66;"><h3>Store Consumptions</h3></td></tr>
    <tr style="font-weight: bold;">
        <td>S.NO.</td>
        <td>Item Name</td>
        <td>Quantity</td>
        <td>Unit</td>
        <td>Used In(Specify in Detail)</td>
    </tr>
    <?php $i=0;?>
    @foreach($store_consumptions as $store_consumption)
        @foreach($store_consumption->materialIssueDetails as $store_consumption_item)
            <tr>
                <td>{!! ++$i !!}</td>
                <td>@if($store_consumption_item->item){!! $store_consumption_item->item->name !!}@endif</td>
                <td>{!! $store_consumption_item->quantity !!}</td>
                <td>@if($store_consumption_item->item){!! $store_consumption_item->item->unit->name !!}@endif</td>
                <td>@if($store_consumption_item){!! $store_consumption_item->consumed_detail !!}@endif</td>
            </tr>
            @endforeach
        @endforeach

    <tr><td colspan="6" style="text-align: center;background-color:#FFFF66;"><h3>From HO Store</h3></td></tr>
    <tr style="font-weight: bold;">
        <td>S.No.</td>
        <td>Transfer Chalaan No.</td>
        <td>Item Name</td>
        <td>Quantity</td>
        <td>Rate</td>
        <td>Amount</td>
    </tr>
    <?php $i=0;?>
    @foreach($from_hos as $ho_item)
        @foreach($ho_item->grnItems as $ho_received_item)
            <tr>
                <td>{!! ++$i !!}</td>
                <td>{!! $ho_received_item->vendor_challan_no  !!}</td>
                <td>@if($ho_received_item->item){!! $ho_received_item->item->name !!}@endif</td>
                <td>{!! $ho_received_item->quantity !!}</td>
                <td>{!! $ho_received_item->rate !!}</td>
                <td>{!! $ho_received_item->total !!}</td>
            </tr>
        @endforeach
    @endforeach
    <tr><td colspan="6" style="text-align: center;background-color:#FFFF66;"><h3>Inter Estate Transfer (Store Received)</h3></td></tr>
    <tr style="font-weight: bold;">
        <td>S.No.</td>
        <td>From Location</td>
        <td>Item Name</td>
        <td>Quantity</td>
        <td>Rate</td>
        <td>Amount</td>
    </tr>
    <?php $i=0;?>
    @foreach($from_iets as $inter_estate_received)
        @foreach($inter_estate_received->grnItems as $iet_received_item)
            <tr>
            <td>{!! ++$i !!}</td>
            <td></td>
            <td>@if($iet_received_item){!! $iet_received_item->item->name !!}@endif</td>
            <td>{!! $iet_received_item->quantity !!}</td>
            <td>{!! $iet_received_item->rate !!}</td>
            <td>{!! $iet_received_item->quantity*$iet_received_item->rate !!}</td>
            </tr>
            @endforeach
        @endforeach
    <tr><td colspan="6" style="text-align: center;background-color:#FFFF66;"><h3>Inter Estate Transfer (Store Transferred)</h3></td></tr>
    <tr style="font-weight: bold;">
        <td>S.No.</td>
        <td>To Location</td>
        <td>Item Name</td>
        <td>Quantity</td>
        <td>Rate</td>
        <td>Amount</td>
    </tr>
    <?php $i=0;?>
    @foreach($to_iets as $inter_estate_transferred)
        @foreach($inter_estate_transferred->materialIssueDetails as $iet_transferred_item)
           <tr>
               <td>{!! ++$i !!}</td>
                <td>@if($inter_estate_transferred->toStore){!! $inter_estate_transferred->toStore->name !!}@endif</td>
                <td>@if($iet_transferred_item->item){!! $iet_transferred_item->item->name !!}@endif</td>
                <td>{!! $iet_transferred_item->quantity !!}</td>
                <td>{!! $iet_transferred_item->rate !!}</td>
                <td>{!! $iet_transferred_item->quantity*$iet_transferred_item->rate !!}</td>
           </tr>
        @endforeach
    @endforeach
</table>
</body>
</html>
