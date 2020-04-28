webpackJsonp(["accounting.module"],{

/***/ "./src/app/layout/accounting/accounting-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accounting_component__ = __webpack_require__("./src/app/layout/accounting/accounting.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__accounting_component__["a" /* AccountingComponent */],
        children: [
            { path: '', redirectTo: 'staff-master', pathMatch: 'full' },
            { path: 'account-head', loadChildren: './account-head/account-head.module#AccountHeadModule' },
            { path: 'account-group', loadChildren: './account-group/account-group.module#AccountGroupModule' },
            { path: 'journal-voucher-form', loadChildren: './journal-voucher-form/journal-voucher-form.module#JournalVoucherFormModule' },
            { path: 'account-transaction', loadChildren: './account-transaction/account-transaction.module#AccountTransactionModule' },
            { path: 'cost-center-master', loadChildren: './cost-center-master/cost-center-master.module#CostCenterMasterModule' },
            { path: 'bill-sundry-master', loadChildren: './bill-sundry-master/bill-sundry-master.module#BillSundryMasterModule' },
            { path: 'payment-voucher-form', loadChildren: './payment-voucher-form/payment-voucher-form.module#PaymentVoucherFormModule' },
            { path: 'receipt-voucher-form', loadChildren: './receipt-voucher-form/receipt-voucher-form.module#ReceiptVoucherFormModule' },
        ]
    },
];
var AccountingRoutingModule = /** @class */ (function () {
    function AccountingRoutingModule() {
    }
    AccountingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AccountingRoutingModule);
    return AccountingRoutingModule;
}());

//# sourceMappingURL=accounting-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/accounting/accounting.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/accounting/accounting.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/accounting/accounting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountingComponent; });
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

var AccountingComponent = /** @class */ (function () {
    function AccountingComponent() {
    }
    AccountingComponent.prototype.ngOnInit = function () {
    };
    AccountingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accounting',
            template: __webpack_require__("./src/app/layout/accounting/accounting.component.html"),
            styles: [__webpack_require__("./src/app/layout/accounting/accounting.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountingComponent);
    return AccountingComponent;
}());

//# sourceMappingURL=accounting.component.js.map

/***/ }),

/***/ "./src/app/layout/accounting/accounting.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountingModule", function() { return AccountingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounting_routing_module__ = __webpack_require__("./src/app/layout/accounting/accounting-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounting_component__ = __webpack_require__("./src/app/layout/accounting/accounting.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AccountingModule = /** @class */ (function () {
    function AccountingModule() {
    }
    AccountingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__accounting_routing_module__["a" /* AccountingRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__accounting_component__["a" /* AccountingComponent */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], AccountingModule);
    return AccountingModule;
}());

//# sourceMappingURL=accounting.module.js.map

/***/ })

});
//# sourceMappingURL=accounting.module.chunk.js.map