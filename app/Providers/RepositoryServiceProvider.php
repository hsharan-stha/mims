<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {

    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('App\Repositories\UserRepository', 'App\Repositories\UserRepositoryEloquent');
        $this->app->bind('App\Repositories\RoleRepository', 'App\Repositories\RoleRepositoryEloquent');
        $this->app->bind('App\Repositories\RouteRepository', 'App\Repositories\RouteRepositoryEloquent');
        $this->app->bind('App\Repositories\ProfileRepository', 'App\Repositories\ProfileRepositoryEloquent');
        $this->app->bind('App\Repositories\PermissionRepository', 'App\Repositories\PermissionRepositoryEloquent');
        $this->app->bind('App\Repositories\GardenRepository', 'App\Repositories\GardenRepositoryEloquent');
        $this->app->bind('App\Repositories\CompanyRepository', 'App\Repositories\CompanyRepositoryEloquent');
        $this->app->bind('App\Repositories\UnitRepository', 'App\Repositories\UnitRepositoryEloquent');
        $this->app->bind('App\Repositories\DivisionRepository', 'App\Repositories\DivisionRepositoryEloquent');
        $this->app->bind('App\Repositories\SisterGardenRepository', 'App\Repositories\SisterGardenRepositoryEloquent');
        $this->app->bind('App\Repositories\SectionRepository', 'App\Repositories\SectionRepositoryEloquent');
        $this->app->bind('App\Repositories\ProductCategoryRepository', 'App\Repositories\ProductCategoryRepositoryEloquent');
        $this->app->bind('App\Repositories\PaybookRepository', 'App\Repositories\PaybookRepositoryEloquent');
        $this->app->bind('App\Repositories\DepartmentRepository', 'App\Repositories\DepartmentRepositoryEloquent');
        $this->app->bind('App\Repositories\HolidayRepository', 'App\Repositories\HolidayRepositoryEloquent');
        $this->app->bind('App\Repositories\DesignationRepository', 'App\Repositories\DesignationRepositoryEloquent');
        $this->app->bind('App\Repositories\LeaveTypeRepository', 'App\Repositories\LeaveTypeRepositoryEloquent');
        $this->app->bind('App\Repositories\ItemRepository', 'App\Repositories\ItemRepositoryEloquent');
        $this->app->bind('App\Repositories\ProductSubcategoryRepository', 'App\Repositories\ProductSubcategoryRepositoryEloquent');
        $this->app->bind('App\Repositories\RequisitionDetailRepository', 'App\Repositories\RequisitionDetailRepositoryEloquent');
        $this->app->bind('App\Repositories\RequisitionItemDetailRepository', 'App\Repositories\RequisitionItemDetailRepositoryEloquent');
        $this->app->bind('App\Repositories\PORequisitionDetailRepository', 'App\Repositories\PORequisitionDetailRepositoryEloquent');
        $this->app->bind('App\Repositories\POItemRequisitionDetailRepository', 'App\Repositories\POItemRequisitionDetailRepositoryEloquent');
        $this->app->bind('App\Repositories\DirectPORepository', 'App\Repositories\DirectPORepositoryEloquent');
        $this->app->bind('App\Repositories\DirectPOItemRepository', 'App\Repositories\DirectPOItemRepositoryEloquent');
        $this->app->bind('App\Repositories\GRNPORepository', 'App\Repositories\GRNPORepositoryEloquent');
        $this->app->bind('App\Repositories\GRNPOItemRepository', 'App\Repositories\GRNPOItemRepositoryEloquent');
        $this->app->bind('App\Repositories\CostCenterRepository', 'App\Repositories\CostCenterRepositoryEloquent');
        $this->app->bind('App\Repositories\WelfareItemRepository', 'App\Repositories\WelfareItemRepositoryEloquent');
        $this->app->bind('App\Repositories\MaterialIssueRepository', 'App\Repositories\MaterialIssueRepositoryEloquent');
        $this->app->bind('App\Repositories\MaterialIssueDetailItemRepository', 'App\Repositories\MaterialIssueDetailItemRepositoryEloquent');
        $this->app->bind('App\Repositories\ShadeTreeTypeRepository', 'App\Repositories\ShadeTreeTypeRepositoryEloquent');
        $this->app->bind('App\Repositories\BushTypeRepository', 'App\Repositories\BushTypeRepositoryEloquent');
        $this->app->bind('App\Repositories\BushVarietyRepository', 'App\Repositories\BushVarietyRepositoryEloquent');
        $this->app->bind('App\Repositories\SectionHistoryRepository', 'App\Repositories\SectionHistoryRepositoryEloquent');
        $this->app->bind('App\Repositories\PruneStyleRepository', 'App\Repositories\PruneStyleRepositoryEloquent');
        $this->app->bind('App\Repositories\PrunePlanRepository', 'App\Repositories\PrunePlanRepositoryEloquent');
        $this->app->bind('App\Repositories\SectionFieldActivityRepository', 'App\Repositories\SectionFieldActivityRepositoryEloquent');
        $this->app->bind('App\Repositories\DryerRepository', 'App\Repositories\DryerRepositoryEloquent');
        $this->app->bind('App\Repositories\TeaMadeProcessRepository', 'App\Repositories\TeaMadeProcessRepositoryEloquent');
        $this->app->bind('App\Repositories\ExcessTeaMadeRepository', 'App\Repositories\ExcessTeaMadeRepositoryEloquent');
        $this->app->bind('App\Repositories\TeaGradeSortingRepository', 'App\Repositories\TeaGradeSortingRepositoryEloquent');
        $this->app->bind('App\Repositories\TeaGradeTransferRepository', 'App\Repositories\TeaGradeTransferRepositoryEloquent');
        $this->app->bind('App\Repositories\DailyBoughtLeafRepository', 'App\Repositories\DailyBoughtLeafRepositoryEloquent');
        $this->app->bind('App\Repositories\SupplierRepository', 'App\Repositories\SupplierRepositoryEloquent');
        $this->app->bind('App\Repositories\SisterGardenDailyLeafRepository', 'App\Repositories\SisterGardenDailyLeafRepositoryEloquent');
        $this->app->bind('App\Repositories\GardenDailyLeafRepository', 'App\Repositories\GardenDailyLeafRepositoryEloquent');
        $this->app->bind('App\Repositories\TeaGradeRepository', 'App\Repositories\TeaGradeRepositoryEloquent');
        $this->app->bind('App\Repositories\DryerDailyLogRepository', 'App\Repositories\DryerDailyLogRepositoryEloquent');
        $this->app->bind('App\Repositories\AccountHeadRepository', 'App\Repositories\AccountHeadRepositoryEloquent');
        $this->app->bind('App\Repositories\StoreRepository', 'App\Repositories\StoreRepositoryEloquent');
        $this->app->bind('App\Repositories\VendorRepository', 'App\Repositories\VendorRepositoryEloquent');
        $this->app->bind('App\Repositories\InventorySetupRepository', 'App\Repositories\InventorySetupRepositoryEloquent');
        $this->app->bind('App\Repositories\FiscalYearRepository', 'App\Repositories\FiscalYearRepositoryEloquent');
        $this->app->bind('App\Repositories\IrrigationUnitRepository', 'App\Repositories\IrrigationUnitRepositoryEloquent');
        $this->app->bind('App\Repositories\IrrigationActivityRepository', 'App\Repositories\IrrigationActivityRepositoryEloquent');
        $this->app->bind('App\Repositories\SectionalShadeTreeDetailsRepository', 'App\Repositories\SectionalShadeTreeDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\SectionalInfillingHistoryRepository', 'App\Repositories\SectionalInfillingHistoryRepositoryEloquent');
        $this->app->bind('App\Repositories\SectionalPluckingHistoryRepository', 'App\Repositories\SectionalPluckingHistoryRepositoryEloquent');
        $this->app->bind('App\Repositories\ActivityMasterRepository', 'App\Repositories\ActivityMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\WorkerMasterRepository', 'App\Repositories\WorkerMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\StaffMasterRepository', 'App\Repositories\StaffMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\LeaveMasterRepository', 'App\Repositories\LeaveMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\EarningMasterRepository', 'App\Repositories\EarningMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\DeductionMasterRepository', 'App\Repositories\DeductionMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\StaffAttendenceMasterRepository', 'App\Repositories\StaffAttendenceMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\WorkerAttendenceMasterRepository', 'App\Repositories\WorkerAttendenceMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\PaybookMasterRepository', 'App\Repositories\PaybookMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\DirectGRNRepository', 'App\Repositories\DirectGRNRepositoryEloquent');
        $this->app->bind('App\Repositories\DirectGRNItemRepository', 'App\Repositories\DirectGRNItemRepositoryEloquent');
        $this->app->bind('App\Repositories\AccountTransactionRepository', 'App\Repositories\AccountTransactionRepositoryEloquent');
        $this->app->bind('App\Repositories\AccountTransactionSplitsRepository', 'App\Repositories\AccountTransactionSplitsRepositoryEloquent');
        $this->app->bind('App\Repositories\StoreTransactionRepository', 'App\Repositories\StoreTransactionRepositoryEloquent');
        $this->app->bind('App\Repositories\DailyGreenLeafRepository', 'App\Repositories\DailyGreenLeafRepositoryEloquent');
        $this->app->bind('App\Repositories\SectionalWeatherHistoryRepository', 'App\Repositories\SectionalWeatherHistoryRepositoryEloquent');
        $this->app->bind('App\Repositories\SectionwiseAreaPluckedRepository', 'App\Repositories\SectionwiseAreaPluckedRepositoryEloquent');
        $this->app->bind('App\Repositories\DailyGreenLeafTransferRepository', 'App\Repositories\DailyGreenLeafTransferRepositoryEloquent');
        $this->app->bind('App\Repositories\TeaPackRepository', 'App\Repositories\TeaPackRepositoryEloquent');
        $this->app->bind('App\Repositories\WorkerHouseInformationRepository', 'App\Repositories\WorkerHouseInformationRepositoryEloquent');
        $this->app->bind('App\Repositories\SectionwiseTeaMadeRepository', 'App\Repositories\SectionwiseTeaMadeRepositoryEloquent');
        $this->app->bind('App\Repositories\ActivityGroupRepository', 'App\Repositories\ActivityGroupRepositoryEloquent');
        $this->app->bind('App\Repositories\EstateRepository', 'App\Repositories\EstateRepositoryEloquent');
        $this->app->bind('App\Repositories\ActivityPaybookRepository', 'App\Repositories\ActivityPaybookRepositoryEloquent');
        $this->app->bind('App\Repositories\ElectricityUnitConsumptionRepository', 'App\Repositories\ElectricityUnitConsumptionRepositoryEloquent');
        $this->app->bind('App\Repositories\GensetUnitConsumptionRepository', 'App\Repositories\GensetUnitConsumptionRepositoryEloquent');
        $this->app->bind('App\Repositories\ConsumptionParticularMasterRepository', 'App\Repositories\ConsumptionParticularMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\FuelConsumptionDailyLogRepository', 'App\Repositories\FuelConsumptionDailyLogRepositoryEloquent');
        $this->app->bind('App\Repositories\FuelTypeMasterRepository', 'App\Repositories\FuelTypeMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\GensetMasterRepository', 'App\Repositories\GensetMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\GensetDailyLogRepository', 'App\Repositories\GensetDailyLogRepositoryEloquent');
        $this->app->bind('App\Repositories\CTCMachineMasterRepository', 'App\Repositories\CTCMachineMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\CTCMachineDailyLogRepository', 'App\Repositories\CTCMachineDailyLogRepositoryEloquent');
        $this->app->bind('App\Repositories\CFMMachineRepository', 'App\Repositories\CFMMachineRepositoryEloquent');
        $this->app->bind('App\Repositories\CFMMachineDailyLogRepository', 'App\Repositories\CFMMachineDailyLogRepositoryEloquent');
        $this->app->bind('App\Repositories\SeedCloneMasterRepository', 'App\Repositories\SeedCloneMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\NurseryMasterRepository', 'App\Repositories\NurseryMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\JournalVoucherFormRepository', 'App\Repositories\JournalVoucherFormRepositoryEloquent');
        $this->app->bind('App\Repositories\WorkerDailyDeductionLogsRepository', 'App\Repositories\WorkerDailyDeductionLogsRepositoryEloquent');
        $this->app->bind('App\Repositories\WorkerDailyEarningLogsRepository', 'App\Repositories\WorkerDailyEarningLogsRepositoryEloquent');
        $this->app->bind('App\Repositories\WorkerWagesCalculationRepository', 'App\Repositories\WorkerWagesCalculationRepositoryEloquent');
        $this->app->bind('App\Repositories\WorkerPFDepositRepository', 'App\Repositories\WorkerPFDepositRepositoryEloquent');
        $this->app->bind('App\Repositories\StaffPFDepositRepository', 'App\Repositories\StaffPFDepositRepositoryEloquent');
        $this->app->bind('App\Repositories\WorkerTDSLogRepository', 'App\Repositories\WorkerTDSLogRepositoryEloquent');
        $this->app->bind('App\Repositories\WorkerWagesCalculationDetailsRepository', 'App\Repositories\WorkerWagesCalculationDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\TeaDispatchRepository', 'App\Repositories\TeaDispatchRepositoryEloquent');
        $this->app->bind('App\Repositories\WorkerPFLoanTakenRepository', 'App\Repositories\WorkerPFLoanTakenRepositoryEloquent');
        $this->app->bind('App\Repositories\WorkerPFLoanDeductionRepository', 'App\Repositories\WorkerPFLoanDeductionRepositoryEloquent');
        $this->app->bind('App\Repositories\TeaDispatchDetailsRepository', 'App\Repositories\TeaDispatchDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\StaffPaybookRepository', 'App\Repositories\StaffPaybookRepositoryEloquent');
        $this->app->bind('App\Repositories\StaffDeductionLogRepository', 'App\Repositories\StaffDeductionLogRepositoryEloquent');
        $this->app->bind('App\Repositories\StaffEarningLogRepository', 'App\Repositories\StaffEarningLogRepositoryEloquent');
        $this->app->bind('App\Repositories\StaffTDSLogRepository', 'App\Repositories\StaffTDSLogRepositoryEloquent');
        $this->app->bind('App\Repositories\StaffWagesCalculationDetailsRepository', 'App\Repositories\StaffWagesCalculationDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\StaffWagesCalculationRepository', 'App\Repositories\StaffWagesCalculationRepositoryEloquent');
        $this->app->bind('App\Repositories\StaffPFLoanTakenRepository', 'App\Repositories\StaffPFLoanTakenRepositoryEloquent');
        $this->app->bind('App\Repositories\StaffPFLoanDeductionRepository', 'App\Repositories\StaffPFLoanDeductionRepositoryEloquent');
        $this->app->bind('App\Repositories\WorkerLeaveSummaryRepository', 'App\Repositories\WorkerLeaveSummaryRepositoryEloquent');
        $this->app->bind('App\Repositories\PluckingMandaysBudgetRepository', 'App\Repositories\PluckingMandaysBudgetRepositoryEloquent');
        $this->app->bind('App\Repositories\PluckingMandaysBudgetDetailsRepository', 'App\Repositories\PluckingMandaysBudgetDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\ActivityMandaysBudgetRepository', 'App\Repositories\ActivityMandaysBudgetRepositoryEloquent');
        $this->app->bind('App\Repositories\ActivityMandaysBudgetDetailsRepository', 'App\Repositories\ActivityMandaysBudgetDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\ActivityMonthlyBudgetRepository', 'App\Repositories\ActivityMonthlyBudgetRepositoryEloquent');
        $this->app->bind('App\Repositories\ActivityMonthlyBudgetDetailsRepository', 'App\Repositories\ActivityMonthlyBudgetDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\WorkerWagesPaySlipRepository', 'App\Repositories\WorkerWagesPaySlipRepositoryEloquent');
        $this->app->bind('App\Repositories\TeaSalesRepository', 'App\Repositories\TeaSalesRepositoryEloquent');
        $this->app->bind('App\Repositories\TeaSalesDetailsRepository', 'App\Repositories\TeaSalesDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\TeaDispatchReceivedRepository', 'App\Repositories\TeaDispatchReceivedRepositoryEloquent');
        $this->app->bind('App\Repositories\TeaDispatchReceivedDetailsRepository', 'App\Repositories\TeaDispatchReceivedDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\BoughtLeafPaymentPeriodMasterRepository', 'App\Repositories\BoughtLeafPaymentPeriodMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\BoughtLeafPaymentDetailsRepository', 'App\Repositories\BoughtLeafPaymentDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\BoughtLeafPaymentSlipDetailsMasterRepository', 'App\Repositories\BoughtLeafPaymentSlipDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\LotNumberRepository', 'App\Repositories\LotNumberRepositoryEloquent');
        $this->app->bind('App\Repositories\TeaStockTransactionRepository', 'App\Repositories\TeaStockTransactionRepositoryEloquent');
        $this->app->bind('App\Repositories\TroughNumberRepository', 'App\Repositories\TroughNumberRepositoryEloquent');
        $this->app->bind('App\Repositories\LotWiseDryingRepository', 'App\Repositories\LotWiseDryingRepositoryEloquent');
        $this->app->bind('App\Repositories\LotWiseDryingDetailsRepository', 'App\Repositories\LotWiseDryingDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\LotWiseWitheringRepository', 'App\Repositories\LotWiseWitheringRepositoryEloquent');
        $this->app->bind('App\Repositories\LotWiseWitheringDetailsRepository', 'App\Repositories\LotWiseWitheringDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\LotWiseRollingRepository', 'App\Repositories\LotWiseRollingRepositoryEloquent');
        $this->app->bind('App\Repositories\LotWiseRollingDetailsRepository', 'App\Repositories\LotWiseRollingDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\BillSundryMasterRepository', 'App\Repositories\BillSundryMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\VoucharRepository', 'App\Repositories\VoucharRepositoryEloquent');
        $this->app->bind('App\Repositories\VoucharDetailsRepository', 'App\Repositories\VoucharDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\AccountBudgetRepository', 'App\Repositories\AccountBudgetRepositoryEloquent');
        $this->app->bind('App\Repositories\AccountBudgetDetailsRepository', 'App\Repositories\AccountBudgetDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\AccountHeadBudgetMasterRepository', 'App\Repositories\AccountHeadBudgetMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\GRNBillSundryDetailsRepository', 'App\Repositories\GRNBillSundryDetailsRepositoryEloquent');
        $this->app->bind('App\Repositories\BOMMasterRepository', 'App\Repositories\BOMMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\BOMItemRepository', 'App\Repositories\BOMItemRepositoryEloquent');
        $this->app->bind('App\Repositories\ProductionVoucherMasterRepository', 'App\Repositories\ProductionVoucherMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\ProductionVoucherItemRepository', 'App\Repositories\ProductionVoucherItemRepositoryEloquent');
        $this->app->bind('App\Repositories\StockJournalMasterRepository', 'App\Repositories\StockJournalMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\StockJournalItemRepository', 'App\Repositories\StockJournalItemRepositoryEloquent');
        $this->app->bind('App\Repositories\SalesMasterRepository', 'App\Repositories\SalesMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\SalesItemsRepository', 'App\Repositories\SalesItemsRepositoryEloquent');
        $this->app->bind('App\Repositories\StoreTransferMasterRepository', 'App\Repositories\StoreTransferMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\StoreTransferItemsRepository', 'App\Repositories\StoreTransferItemsRepositoryEloquent');
        $this->app->bind('App\Repositories\PurchaseReturnMasterRepository', 'App\Repositories\PurchaseReturnMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\PurchaseReturnItemsRepository', 'App\Repositories\PurchaseReturnItemsRepositoryEloquent');
        $this->app->bind('App\Repositories\SalesReturnMasterRepository', 'App\Repositories\SalesReturnMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\SalesReturnItemsRepository', 'App\Repositories\SalesReturnItemsRepositoryEloquent');
        $this->app->bind('App\Repositories\IssueReturnMasterRepository', 'App\Repositories\IssueReturnMasterRepositoryEloquent');
        $this->app->bind('App\Repositories\ProductionVoucherExpenseRepository', 'App\Repositories\ProductionVoucherExpenseRepositoryEloquent');
    }
}
