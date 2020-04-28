<!DOCTYPE html>
<html>
<head>

</head>
<body>
<table border="1">
    <tr>
        <td>Date range</td>
        <td>from:{{$date_from}}-to:{{$date_to}}</td>
    </tr>
    <tr>
        <th>
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th colspan="3" align="center">Opening</th>
                <th colspan="3" align="center">Inward</th>
                <th colspan="3" align="center">Outward</th>
                <th colspan="3" align="center">Balance</th>
            </tr>
            <tr>
                <th>Type</th>
                <th>Item</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Amt</th>

                <th>Qty</th>
                <th>Rate</th>
                <th>Amt</th>

                <th>Qty</th>
                <th>Rate</th>
                <th>Amt</th>

                <th>Qty</th>
                <th>Rate</th>
                <th>Amt</th>
            </tr>
            </tbody>
        </th>
    </tr>
    <?php $a = 0; ?>
    <?php $k = 0; ?>
    @foreach($category as $c)

        <tr>
            <td>
                <tbody>
                <tr>
                    <th>{{$c->name}}</th>
                </tr>
                @for($i=$a;$i<($a+1);$i++)
                    @for($j=0;$j<sizeof($items[$i]);$j++)
                        <tr>
                            <td></td>
                            <td>{{$items[$i][$j]->name}}</td>
                            {{--start opening--}}
                            @if($opening[$k][0]->quantity <> 0)
                                <td>{{$opening[$k][0]->quantity}}</td>
                                <td>{{$opening[$k][0]->total/$opening[$k][0]->quantity}}</td>
                                <td>{{$opening[$k][0]->total}}</td>
                            @else
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            @endif
                            {{--end of opening--}}

                            {{--start inward--}}
                            @if($inward[$k][0]->quantity <> 0)
                                <td>{{$inward[$k][0]->quantity}}</td>
                                <td>{{$inward[$k][0]->total/$inward[$k][0]->quantity}}</td>
                                <td>{{$inward[$k][0]->total}}</td>

                            @else
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            @endif
                            {{--end of inward--}}

                            {{--start outward--}}
                            @if($outward[$k][0]->quantity <> 0)
                                <td>({{-1*$outward[$k][0]->quantity}})</td>
                                <td>({{-1*$outward[$k][0]->total/$outward[$k][0]->quantity}})</td>
                                <td>{{$outward[$k][0]->total}}</td>

                            @else
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            @endif
                            {{--end of outward--}}

                            {{--start balance--}}

                                <td>{{$opening[$k][0]->quantity+
                                    $inward[$k][0]->quantity+
                                     $outward[$k][0]->quantity
                                   }}</td>

                                <td>@if($opening[$k][0]->quantity != 0 || $inward[$k][0]->quantity != 0 || $outward[$k][0]->quantity != 0 ){{(($opening[$k][0]->total)+
                                    ($inward[$k][0]->total) +
                                    ($outward[$k][0]->total))/
                                    (($opening[$k][0]->quantity)+
                                    ($inward[$k][0]->quantity)+
                                    ($outward[$k][0]->quantity))
                                    }}
                            @else {{ 0  }} @endif
                                </td>

                                <td>{{(($opening[$k][0]->total)+
                                ($inward[$k][0]->total))-
                                ($outward[$k][0]->total)}}</td>



                            {{--end of balance--}}

                        </tr>
                        <?php $k = $k + 1;?>
                    @endfor
                @endfor
                </tbody>
            </td>
        </tr>
        <?php
        $a = $a + 1;
        ?>
    @endforeach

</table>
</body>
</html>
