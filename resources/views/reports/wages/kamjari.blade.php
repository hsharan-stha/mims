<!DOCTYPE html>
<html>
<head>

</head>


<table>
    <thead><tr colspan="10"><th><h1>Kamjari(Only Mandays)</h1>
        </th></tr></thead>
    <thead><tr colspan="10"><th>Date : {!! $date['date_from_en'] !!}  Miti: {!! $date['date_from_np'] !!}</th></tr></thead>
    @foreach($activities as $key=>$activityGroup)
        @if(is_array($activityGroup))
            <tr >
                <th>S.NO.</th>
                <th>Particulars</th>
                <th>This Period</th>
                <th>Last Period</th>
                <th>To DT</th>
                <th>L/Y to DT</th>
            </tr>
            <tbody>
            <tr><td colspan="6"><h4>{!! $key !!}</h4></td></tr>
            <?php $i=0;?>
            @foreach($activityGroup as $activity_key=>$activity)
                @if(is_array($activity))
                    <tr>


                        <?php $i++;?>
                        <td>{!! $i !!}</td>
                        <td> {!! $activity_key !!}</td>
                        <td>{!! $activity['this_period'] !!}</td>
                        <td>{!! $activity['last_period'] !!}</td>
                        <td>{!! $activity['todate_this_period'] !!}</td>
                        <td>{!! $activity['todate_last_period'] !!}</td>
                        <td>

                    </tr>
                @endif
            @endforeach
            <tr><td colspan="2">Sub-total</td>
                <td>{!! $activityGroup['this_period'] !!}</td>
                <td>{!! $activityGroup['last_period'] !!}</td>
                <td>{!! $activityGroup['todate_this_period'] !!}</td>
                <td>{!! $activityGroup['todate_last_period'] !!}</td></tr>
            </tbody>
        @endif
    @endforeach
    <tbody><tr>
        <td colspan="2">Total</td>
        <td>{!! $activities['this_period'] !!}</td>
        <td>{!! $activities['last_period'] !!}</td>
        <td>{!! $activities['todate_this_period'] !!}</td>
        <td>{!! $activities['todate_last_period'] !!}</td>
    </tr></tbody>
</table>
</body>
</html>
