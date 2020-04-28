<!DOCTYPE html>
<html>
<head>

</head>


<table>
    <thead><tr colspan="10"><th><h1>Tea Grade Sorting Report</h1>
        </th></tr></thead>
    <thead><tr colspan="10"><th>Date From: {!! $date['date_from_en'] !!}  Date To: {!! $date['date_to_en'] !!}</th></tr></thead>
    <thead><tr colspan="10"><th>Miti From: {!! $date['date_from_np'] !!}  Miti To: {!! $date['date_to_np'] !!}</th></tr></thead>
    <thead>
    <tr >
        <th>Tea Grade</th>
        <th> Opening Gross Weight</th>
        <th> Current Gross Weight</th>
        <th> Closing Gross Weight</th>
    </tr></thead>
    <tbody>
    <?php $teaGradeSortingOpening=$teaGradeSortingCurrent=$teaGradeSortingClosing=0;?>
    @foreach($teaGradeLogs as $teaGradeLog)
        <tr>
            <td>{!! $teaGradeLog['name'] !!}</td>
            <?php $teaGradeSortingOpening=$teaGradeSortingOpening+$teaGradeLog['sorted']['opening'];?>
            <td>{!! $teaGradeLog['sorted']['opening'] !!}</td>
            <?php $teaGradeSortingCurrent=$teaGradeSortingCurrent+$teaGradeLog['sorted']['current'];?>
            <td>{!! $teaGradeLog['sorted']['current'] !!}</td>
            <?php $teaGradeSortingClosing=$teaGradeSortingClosing+$teaGradeLog['sorted']['opening']+$teaGradeLog['sorted']['current'];?>
            <td>{!! $teaGradeLog['sorted']['opening']+$teaGradeLog['sorted']['current'] !!}</td>
        </tr>
    @endforeach
    <tr style="border-top: 1px solid #000000;font-weight:bold;">
        <td>Total</td>
        <td>{!! $teaGradeSortingOpening !!}</td>
        <td>{!! $teaGradeSortingCurrent !!}</td>
        <td>{!! $teaGradeSortingClosing !!}</td>
    </tr>
    </tbody>
</table>
</body>
</html>
