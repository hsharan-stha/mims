<!DOCTYPE html>
<html>
<head>

</head>
<body>
<table border="1">
    <tr>
        <td>Date range</td>
        <td>from:{{$fiscal_start_date}}-to:{{date('y-m-d')}}</td>
    </tr>
    <tr>
        <th>
            <tbody>
            <tr>
                <th>Type</th>
                <th>Item</th>
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
