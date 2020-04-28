<!DOCTYPE html>
<html>
<head>

</head>
<table border="2">
    <tr>
        <td>item name</td>
        @if(array_key_exists(0,$item_name))<td>{{$item_name[0]->item_name}}</td>@endif
        <td></td>
        <td>Valuation</td>
        <td>WT AUG</td>
    </tr>
    <tr>
        <td>date range</td>
        <td>from({{$date_from}})-to({{$date_to}})</td>
        <td></td>
        <td>Normal loss</td>
        <td>2%</td>
    </tr>
    <tr>
        <th colspan="4"></th>
        <th colspan="3" align="center">In/Out</th>
        <th colspan="3" align="center">Balance</th>
    </tr>
    <tr>
        <th>Date</th>
        <th>type</th>
        <th>ref</th>
        <th>remarks</th>
        <th>quantity</th>
        <th>rate</th>
        <th>total</th>

        <th>quantity</th>
        <th>rate</th>
        <th>total</th>

    </tr>
    <tr>
        <td></td>
        <td>opening</td>
        <td></td>
        <td></td>
        @foreach($opening as $o)

                <td>{{$o->quantity}}</td>
            @if($o->quantity <> 0) <td>{{$o->total/$o->quantity}}</td> @else {{ 0 }} @endif
                <td>{{$o->total}}</td>

                <td>{{$o->quantity}}</td>
            @if($o->quantity <> 0) <td>{{$o->total/$o->quantity}}</td> @else {{ 0 }} @endif
                <td>{{$o->total}}</td>
    </tr>
    <?php
    $quantity = $o->quantity;
    //    $rate = $o->total / $o->quantity;
    $total = $o->total;
    ?>
    @endforeach
    @foreach($actual_report as $ar)
        <tr>
            <td>{{$ar->date}}</td>
            <td>{{$ar->type}}</td>
            <td>{{$ar->ref}}</td>
            <td>{{$ar->remarks}}</td>
            @if($ar->quantity > 0)
                <td>{{$ar->quantity}}</td>
                @if($ar->quantity <> 0)
                    <td>{{$ar->total/$ar->quantity}}</td>
                @else
                    <td>0</td>
                @endif
                <td>{{$ar->total}}</td>

                <td>{{$ar->quantity+$quantity}}</td>
                @if(($ar->quantity+$quantity) <> 0)
                    <td>{{($ar->total+$total)/($ar->quantity+$quantity)}}</td>
                @else
                    <td>0</td>
                @endif
                <td>{{$ar->total+$total}}</td>
            @else
                <td>({{-1*$ar->quantity}})</td>
                @if($ar->quantity <> 0)
                    <td>{{-1*($ar->total/$ar->quantity)}}</td>
                @else
                    <td>0</td>
                @endif
                <td>({{$ar->total}})</td>

                <td>{{$ar->quantity+$quantity}}</td>
                @if(($ar->quantity+$quantity)<> 0)
                    <td>{{($ar->total+$total)/($ar->quantity+$quantity)}}</td>
                @else
                    <td>0</td>
                @endif
                <td>{{-$ar->total+$total}}</td>
            @endif


        </tr>
        <?php
        $quantity = $ar->quantity + $quantity;
        //        $rate = ($ar->total / $ar->quantity) + $rate;
        if ($ar->quantity > 0) {
            $total = $ar->total + $total;
        } else {
            $total = -$ar->total + $total;
        }

        ?>
    @endforeach

</table>
</body>
</html>
