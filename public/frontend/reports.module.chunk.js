webpackJsonp(["reports.module"],{

/***/ "./src/app/layout/reports/reports-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports_component__ = __webpack_require__("./src/app/layout/reports/reports.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__reports_component__["a" /* ReportsComponent */],
        children: [
            // { path: '', redirectTo: 'daily-green-leaf-report', pathMatch: 'full' },
            // { path: 'daily-green-leaf-report', loadChildren: './daily-green-leaf-report/daily-green-leaf-report.module#DailyGreenLeafReportModule' },
            // { path: 'supplier-wise-bought-leaf-report', loadChildren: './supplier-wise-bought-leaf-report/supplier-wise-bought-leaf-report.module#SupplierWiseBoughtLeafReportModule' },
            // { path: 'dryer-details-log-report', loadChildren: './dryer-details-log-report/dryer-details-log-report.module#DryerDetailsLogReportModule' },
            // { path: 'section-wise-green-leaf-report', loadChildren: './section-wise-green-leaf-report/section-wise-green-leaf-report.module#SectionWiseGreenLeafReportModule' },
            // { path: 'irrigation-activity-report', loadChildren: './irrigation-activity-report/irrigation-activity-report.module#IrrigationActivityReportModule' },
            // { path: 'sectional-weather-report', loadChildren: './sectional-weather-report/sectional-weather-report.module#SectionalWeatherReportModule' },
            // { path: 'sectional-plucking-records-report', loadChildren: './sectional-plucking-records-report/sectional-plucking-records-report.module#SectionalPluckingRecordsReportModule' },
            // { path: 'activity-master-checklist-report', loadChildren: './activity-master-checklist-report/activity-master-checklist-report.module#ActivityMasterChecklistReportModule' },
            // { path: 'activity-wise-kamjari-report', loadChildren: './activity-wise-kamjari-report/activity-wise-kamjari-report.module#ActivityWiseKamjariReportModule' },
            // { path: 'daily-control-sheet-permanent-report', loadChildren: './daily-control-sheet-permanent-report/daily-control-sheet-permanent-report.module#DailyControlSheetPermanentReportModule' },
            // { path: 'daily-control-sheet-temporary-report', loadChildren: './daily-control-sheet-temporary-report/daily-control-sheet-temporary-report.module#DailyControlSheetTemporaryReportModule' },
            // { path: 'daily-factory-report', loadChildren: './daily-factory-report/daily-factory-report.module#DailyFactoryReportModule' },
            // { path: 'daily-packing-report', loadChildren: './daily-packing-report/daily-packing-report.module#DailyPackingReportModule' },
            // { path: 'daily-wages-register-report', loadChildren: './daily-wages-register-report/daily-wages-register-report.module#DailyWagesRegisterReportModule' },
            // { path: 'fortnight-attendance-sheet-report', loadChildren: './fortnight-attendance-sheet-report/fortnight-attendance-sheet-report.module#FortnightAttendanceSheetReportModule' },
            // { path: 'fortnight-summary-report', loadChildren: './fortnight-summary-report/fortnight-summary-report.module#FortnightSummaryReportModule' },
            // { path: 'garden-weather-report', loadChildren: './garden-weather-report/garden-weather-report.module#GardenWeatherReportModule' },
            // { path: 'irrigation-progress-report', loadChildren: './irrigation-progress-report/irrigation-progress-report.module#IrrigationProgressReportModule' },
            // { path: 'leave-with-wages-register-report', loadChildren: './leave-with-wages-register-report/leave-with-wages-register-report.module#LeaveWithWagesRegisterReportModule' },
            // { path: 'nursery-plant-distribution-report', loadChildren: './nursery-plant-distribution-report/nursery-plant-distribution-report.module#NurseryPlantDistributionReportModule' },
            // { path: 'nursery-stock-summary-report', loadChildren: './nursery-stock-summary-report/nursery-stock-summary-report.module#NurseryStockSummaryReportModule' },
            // { path: 'paybook-wise-worker-details-report', loadChildren: './paybook-wise-worker-details-report/paybook-wise-worker-details-report.module#PaybookWiseWorkerDetailsReportModule' },
            // { path: 'pf-deduction-register-report', loadChildren: './pf-deduction-register-report/pf-deduction-register-report.module#PfDeductionRegisterReportModule' },
            // { path: 'production-analysis-report', loadChildren: './production-analysis-report/production-analysis-report.module#ProductionAnalysisReportModule' },
            // { path: 'section-history-report', loadChildren: './section-history-report/section-history-report.module#SectionHistoryReportModule' },
            // { path: 'staff-salary-register-report', loadChildren: './staff-salary-register-report/staff-salary-register-report.module#StaffSalaryRegisterReportModule' },
            // { path: 'tea-grade-sorting-report', loadChildren: './tea-grade-sorting-report/tea-grade-sorting-report.module#TeaGradeSortingReportModule' },
            // { path: 'wage-summary-report', loadChildren: './wage-summary-report/wage-summary-report.module#WageSummaryReportModule' },
            // { path: 'work-force-summary-report', loadChildren: './work-force-summary-report/work-force-summary-report.module#WorkForceSummaryReportModule' },
            // { path: 'worker-bonus-earning-register-report', loadChildren: './worker-bonus-earning-register-report/worker-bonus-earning-register-report.module#WorkerBonusEarningRegisterReportModule' },
            // { path: 'worker-fortnightly-pf-ledger-report', loadChildren: './worker-fortnightly-pf-ledger-report/worker-fortnightly-pf-ledger-report.module#WorkerFortnightlyPfLedgerReportModule' },
            // { path: 'worker-leave-status-report', loadChildren: './worker-leave-status-report/worker-leave-status-report.module#WorkerLeaveStatusReportModule' },
            // { path: 'over-time-earning-report', loadChildren: './over-time-earning-report/over-time-earning-report.module#OverTimeEarningReportModule' },
            // { path: 'section-yield-report', loadChildren: './yield-report/yield-report.module#YieldReportModule' },
            // { path: 'item-category-summary-report', loadChildren: './item-category-summary-report/item-category-summary-report.module#ItemCategorySummaryReportModule' },
            // { path: 'grns-for-which-purchase-bills-pending-report', loadChildren: './grns-for-which-purchase-bills-pending-report/grns-for-which-purchase-bills-pending-report.module#GrnsForWhichPurchaseBillsPendingReportModule' },
            // { path: 'opening-balance-report', loadChildren: './opening-balance-report/opening-balance-report.module#OpeningBalanceReportModule' },
            // { path: 'issue-register-date-and-item-category-wise-report', loadChildren: './issue-register-date-and-item-category-wise-report/issue-register-date-and-item-category-wise-report.module#IssueRegisterDateAndItemCategoryWiseReportModule' },
            // { path: 'store-consumption-summary', loadChildren: './store-consumption-summary/store-consumption-summary.module#StoreConsumptionSummaryModule' },
            // { path: 'bill-register-item-wise-report', loadChildren: './bill-register-item-wise-report/bill-register-item-wise-report.module#BillRegisterItemWiseReportModule' },
            // { path: 'item-wise-store-receipt-register-report', loadChildren: './item-wise-store-receipt-register-report/item-wise-store-receipt-register-report.module#ItemWiseStoreReceiptRegisterReportModule' },
            // { path: 'item-stock-balance-report', loadChildren: './item-stock-balance-report/item-stock-balance-report.module#ItemStockBalanceReportModule' },
            // { path: 'purchase-order-checklist-report', loadChildren: './purchase-order-checklist-report/purchase-order-checklist-report.module#PurchaseOrderChecklistReportModule' },
            // { path: 'requisition-checklist-reports', loadChildren: './requisition-checklist-reports/requisition-checklist-reports.module#RequisitionChecklistReportsModule' },
            // { path: 'purchase-order-supplier-wise-report', loadChildren: './purchase-order-supplier-wise-report/purchase-order-supplier-wise-report.module#PurchaseOrderSupplierWiseReportModule' },
            { path: 'store-ledger-report', loadChildren: './store-ledger-report/store-ledger-report.module#StoreLedgerReportModule' },
            { path: 'stock-ledger-report', loadChildren: './stock-ledger-report/stock-ledger-report.module#StockLedgerReportModule' },
            // { path: 'daily-factory-kamjari-report', loadChildren: './daily-factory-kamjari-report/daily-factory-kamjari-report.module#DailyFactoryKamjariReportModule' },
            // { path: 'daily-garden-kamjari-report', loadChildren: './daily-garden-kamjari-report/daily-garden-kamjari-report.module#DailyGardenKamjariReportModule' },
            { path: 'daily-store-log-report', loadChildren: './daily-store-log-report/daily-store-log-report.module#DailyStoreLogReportModule' },
            { path: 'goods-receipt-report', loadChildren: './goods-receipt-report/goods-receipt-report.module#GoodsReceiptReportModule' },
            { path: 'material-issue-report', loadChildren: './material-issue-report/material-issue-report.module#MaterialIssueReportModule' },
            { path: 'po-with-requisition-report', loadChildren: './po-with-requisition-report/po-with-requisition-report.module#PoWithRequisitionReportModule' },
            { path: 'po-direct', loadChildren: './po-direct/po-direct.module#PoDirectModule' },
            { path: 'cost-of-materials', loadChildren: './cost-of-materials/cost-of-materials.module#CostOfMaterialsModule' },
            // { path: 'tea-dispatch-report', loadChildren: './tea-dispatch-report/tea-dispatch-report.module#TeaDispatchReportModule' },
            // { path: 'sample-tea-dispatch-report', loadChildren: './sample-tea-dispatch-report/sample-tea-dispatch-report.module#SampleTeaDispatchReportModule' },
            // { path: 'ledger-report', loadChildren: './ledger-report/ledger-report.module#LedgerReportModule' },
            // { path: 'trial-balance-report', loadChildren: './trial-balance-report/trial-balance-report.module#TrialBalanceReportModule' },
            // { path: 'pl-report', loadChildren: './pl-report/pl-report.module#PlReportModule' },
            // { path: 'balance-sheet-report', loadChildren: './balance-sheet-report/balance-sheet-report.module#BalanceSheetReportModule' },
            // { path: 'account-schedule-report', loadChildren: './account-schedule-report/account-schedule-report.module#AccountScheduleReportModule' },
            { path: 'opening-report', loadChildren: './opening-report/opening-report.module#OpeningReportModule' },
            { path: 'closing-fifo-report', loadChildren: './closing-fifo-report/closing-fifo-report.module#ClosingFifoReportModule' },
            { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
        ]
    },
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());

//# sourceMappingURL=reports-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/reports/reports.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__("./src/app/layout/reports/reports.component.html"),
            styles: [__webpack_require__("./src/app/layout/reports/reports.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());

//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "./src/app/layout/reports/reports.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reports_routing_module__ = __webpack_require__("./src/app/layout/reports/reports-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reports_component__ = __webpack_require__("./src/app/layout/reports/reports.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__reports_routing_module__["a" /* ReportsRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__reports_component__["a" /* ReportsComponent */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], ReportsModule);
    return ReportsModule;
}());

//# sourceMappingURL=reports.module.js.map

/***/ })

});
//# sourceMappingURL=reports.module.chunk.js.map