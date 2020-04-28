<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Front End Routes


Route::get('/', 'FrontController@index');
Route::get('/frontend', 'FrontController@index');

Route::group(['prefix' => 'api/v1/'], function () {
    Route::post('authenticate', 'Auth\AuthenticateController@authenticate');
    Route::get('authenticate', 'Auth\AuthenticateController@index');
    Route::get('estate', 'Admin\EstateController@index');
});
//Route::group(['middleware' => 'authorize'], function () {
Route::group(['prefix' => 'api/v1/'], function () {
    Route::post('estate', 'Admin\EstateController@store');
    Route::get('estate/{id}', 'Admin\EstateController@show');
    Route::put('estate/{id}', 'Admin\EstateController@update');
    Route::delete('estate/{id}', 'Admin\EstateController@delete');
    Route::resource('user', 'Admin\UserController');
    Route::resource('role', 'Admin\RoleController');
    Route::resource('permission', 'Admin\PermissionController');
    Route::resource('route', 'Admin\RouteController');
    Route::resource('profile', 'Admin\ProfileController');

    Route::resource('company', 'Admin\CompanyController');
    Route::resource('garden', 'Admin\GardenController');
    Route::resource('division', 'Admin\DivisionController');
    Route::resource('department', 'Admin\DepartmentController');
    Route::resource('designations', 'Admin\DesignationController');
    Route::resource('leavetype', 'Admin\LeaveTypeController');
    Route::resource('section', 'Admin\SectionController');

    /* Inventory Module */
    Route::resource('unit', 'Admin\UnitController');
    Route::resource('item', 'Admin\ItemController');

    Route::resource('product_category', 'Admin\ProductCategoryController');
    Route::resource('product_sub_category', 'Admin\ProductSubCategoryController');
    Route::resource('holiday', 'Admin\HolidayController');
    Route::resource('costcenter', 'Admin\CostCenterController');
    Route::resource('welfare_item', 'Admin\WelfareItemController');
    /*Inventory Remaining */
    Route::resource('requisition_detail', 'Admin\RequisitionDetailController');
    Route::resource('po_requisition_detail', 'Admin\PORequisitionDetailController');
    Route::resource('grn_po', 'Admin\GRNPOController');
    Route::resource('material_issue', 'Admin\MaterialIssueController');
    Route::resource('direct_grn', 'Admin\DirectGRNController');
    Route::resource('direct_grn_item', 'Admin\DirectGRNItemController');
    Route::resource('daily_store_log', 'Admin\DailyStoreController');


    Route::resource('store', 'Admin\StoreController');
    Route::resource('store_transaction', 'Admin\StoreTransactionController');
    Route::resource('vendor', 'Admin\VendorController');
    /* Field Module */
    Route::resource('shade_tree_type', 'Admin\ShadeTreeTypeController');
    Route::resource('bushtype', 'Admin\BushTypeController');
    Route::resource('bushvariety', 'Admin\BushVarietyController');
    Route::resource('section_history', 'Admin\SectionHistoryController');
    Route::resource('section_field_activity', 'Admin\SectionFieldActivityController');
    Route::resource('irrigation_unit', 'Admin\IrrigationUnitController');
    Route::resource('irrigation_activity', 'Admin\IrrigationActivityController');
    Route::resource('sectional_infilling_history', 'Admin\SectionalInfillingHistoryController');
    Route::resource('sectional_shade_tree', 'Admin\SectionalShadeTreeDetailsController');
    Route::resource('sectional_plucking_history', 'Admin\SectionalPluckingHistoryController');
    Route::resource('sectional_weather_history', 'Admin\SectionalWeatherHistoryController');
    Route::resource('sectionwise_area_plucked', 'Admin\SectionwiseAreaPluckedController');
    Route::resource('sectionwise_tea_made', 'Admin\SectionwiseTeaMadeController');
    Route::resource('seed_clone_master', 'Admin\SeedCloneMasterController');
    Route::resource('nursery_master', 'Admin\NurseryMasterController');


    /* Pruning Master */
    Route::resource('prunestyle', 'Admin\PruneStyleController');
    Route::resource('pruneplan', 'Admin\PrunePlanController');
    /* Factory Master */
    Route::resource('dryer', 'Admin\DryerController');
    Route::resource('teamade_process', 'Admin\TeaMadeProcessController');
    Route::resource('excess_teamade', 'Admin\ExcessTeaMadeController');
    Route::resource('teagrade_sorting', 'Admin\TeaGradeSortingController');
    Route::resource('teagrade_transfer', 'Admin\TeaGradeTransferController');
    Route::resource('sister_garden', 'Admin\SisterGardenController');
    Route::resource('daily_bought_leaf', 'Admin\DailyBoughtLeafController');
    Route::resource('supplier', 'Admin\SupplierController');
    Route::resource('sister_garden_daily_leaf', 'Admin\SisterGardenDailyLeafController');
    Route::resource('garden_daily_leaf', 'Admin\GardenDailyLeafController');
    Route::resource('tea_grade', 'Admin\TeaGradeController');
    Route::resource('daily_greenleaf_transfer', 'Admin\DailyGreenLeafTransferController');
    Route::resource('tea_pack', 'Admin\TeaPackController');
    Route::resource('electricity_unit_consumption', 'Admin\ElectricityUnitConsumptionController');
    Route::resource('genset_unit_consumption', 'Admin\GensetUnitConsumptionController');
    Route::resource('consumption_particular_master', 'Admin\ConsumptionParticularMasterController');
    Route::resource('tea_dispatch', 'Admin\TeaDispatchController');
    Route::resource('production_analysis_report', 'Admin\ProductAnalysisReportController');
    Route::resource('daily_factory_report', 'Admin\DailyFactoryReportController');
    Route::resource('tea_sales', 'Admin\TeaSalesController');
    Route::resource('tea_dispatch_received', 'Admin\TeaDispatchReceivedController');
    Route::resource('lot_number', 'Admin\LotNumberController');
    Route::resource('trough_number', 'Admin\TroughNumberController');
    Route::resource('lot_wise_withering', 'Admin\LotWiseWitheringController');
    Route::resource('lot_wise_rolling', 'Admin\LotWiseRollingController');
    Route::resource('lot_wise_drying', 'Admin\LotWiseDryingController');

    /* Account Head */
    Route::resource('account_head', 'Admin\AccountHeadMasterController');
    Route::resource('fiscal_year', 'Admin\FiscalYearController');
    Route::resource('inventory_setup', 'Admin\InventorySetupController');
    Route::resource('account_transaction', 'Admin\AccountTransactionController');
    Route::resource('journal_voucher_form', 'Admin\JournalVoucherFormController');
    Route::resource('bill_sundry', 'Admin\BillSundryMasterController');


    /* Activity Master */
    Route::resource('activity_master', 'Admin\ActivityMasterController');
    Route::resource('worker_master', 'Admin\WorkerMasterController');
    Route::resource('workerhouse_information', 'Admin\WorkerHouseInformationController');
    Route::resource('activity_group', 'Admin\ActivityGroupController');


    /* Paybook Master */
    Route::resource('staff_master', 'Admin\StaffMasterController');
    Route::resource('leave_master', 'Admin\LeaveMasterController');
    Route::resource('earning_master', 'Admin\EarningMasterController');
    Route::resource('deduction_master', 'Admin\DeductionMasterController');
    Route::resource('staff_attendence_master', 'Admin\StaffAttendenceMasterController');
    Route::resource('worker_attendence_master', 'Admin\WorkerAttendenceMasterController');
    Route::resource('paybook_master', 'Admin\PaybookMasterController');
    Route::resource('staff_paybook_master', 'Admin\StaffPaybookController');
    Route::resource('worker_pf_loan_taken', 'Admin\WorkerPFLoanTakenController');
    Route::resource('worker_pf_loan_deduction', 'Admin\WorkerPFLoanDeductionController');
    Route::resource('staff_pf_loan_taken', 'Admin\StaffPFLoanTakenController');
    Route::resource('staff_pf_loan_deduction', 'Admin\StaffPFLoanDeductionController');
    Route::resource('worker_tds', 'Admin\WorkerTDSController');
    Route::resource('staff_tds', 'Admin\StaffTDSController');

    /* Reports */
    Route::resource('daily_green_leaf', 'Admin\DailyGreenLeafController');
    Route::resource('sectionwise_green_leaf', 'Admin\SectionWiseGreenLeafReportController');
    Route::resource('activity_mandys', 'Admin\ActivityMandaysController');
    Route::resource('worker_wages_calculation', 'Admin\WorkerWagesCalculationController');
    Route::resource('staff_wages_calculation', 'Admin\StaffWagesCalculationController');
//        Route::get('grn_po_report', 'Admin\GRNPOController@report');

    /* power comsumption */

    Route::resource('genset_daily_log', 'Admin\GensetDailyLogController');
    Route::resource('genset_master', 'Admin\GensetMasterController');
    Route::resource('fuel_type_master', 'Admin\FuelTypeMasterController');
    Route::resource('fuel_type_daily_logs', 'Admin\FuelConsumptionLogController');
    Route::resource('ctc_machine_master', 'Admin\CTCMachineMasterController');
    Route::resource('ctc_machine_daily_logs', 'Admin\CTCMachineDailyLogController');
    Route::resource('cfm_machine', 'Admin\CFMMachineController');
    Route::resource('cfm_machine_daily_logs', 'Admin\CFMMachineDailyLogController');

    /* Worker wages calculation routes for temporary */

    Route::resource('worker_deduction_logs', 'Admin\WorkerDeductionLogController');
    Route::resource('worker_earning_logs', 'Admin\WorkerEarningLogController');
    Route::resource('worker_wages_calculation_details', 'Admin\WorkerWagesCalculationDetailsController');
    Route::resource('staff_deduction_logs', 'Admin\StaffDeductionLogController');
    Route::resource('staff_earning_logs', 'Admin\StaffEarningLogController');
    Route::resource('staff_wages_calculation_details', 'Admin\StaffWagesCalculationDetailsController');
    Route::resource('inventory_setup_no_checker', 'Admin\InventorySetupCheckerController');

    /*Budget */
    Route::resource('budget_plucking_mandays', 'Admin\PluckingMandaysBudgetController');
    Route::resource('budget_activity_mandays', 'Admin\ActivityMandaysBudgetController');
    Route::resource('budget_activity_monthly', 'Admin\ActivityMonthlyBudgetController');
    Route::resource('worker_leave_status', 'Admin\WorkerLeaveStatusController');
    Route::resource('bought_leaf_payment_period', 'Admin\BoughtLeafPaymentPeriodMasterController');
    Route::resource('bought_leaf_payment_detail', 'Admin\BoughtLeafPaymentDetailsController');
    Route::resource('financial_budget', 'Admin\AccountBudgetController');
    Route::resource('financial_budget_details', 'Admin\AccountBudgetDetailsController');
    Route::resource('production_stock', 'Admin\ProductionStockController');

    /*BOM*/
    Route::resource('bom', 'Admin\BOMController');

    /*production voucher*/
    Route::resource('pv', 'Admin\ProductionVoucherController');

    /*stock journal*/
    Route::resource('sj', 'Admin\StockJournalController');

    /*sales*/
    Route::resource('sales', 'Admin\SalesController');

    /*store transfer*/
    Route::resource('store_transfer', 'Admin\StoreTransferController');

    /*purchase return*/
    Route::resource('purchase_return', 'Admin\PurchaseReturnController');

    /*sales return*/
    Route::resource('sales_return', 'Admin\SalesReturnController');

    /*issue return*/
    Route::resource('issue_return', 'Admin\IssueReturnController');


});
//});
