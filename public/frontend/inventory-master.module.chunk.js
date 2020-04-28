webpackJsonp(["inventory-master.module"],{

/***/ "./src/app/layout/inventory-master/inventory-master-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryMasterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inventory_master_component__ = __webpack_require__("./src/app/layout/inventory-master/inventory-master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_permissions__ = __webpack_require__("./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_permissions__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__inventory_master_component__["a" /* InventoryMasterComponent */],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_3_ngx_permissions__["NgxPermissionsGuard"]],
        children: [
            { path: '', redirectTo: 'product-class-master', pathMatch: 'full' },
            {
                path: 'product-class-master',
                loadChildren: './product-class-master/product-class-master.module#ProductClassMasterModule',
            },
            { path: 'product-group-master', loadChildren: './product-group-master/product-group-master.module#ProductGroupMasterModule' },
            {
                path: 'product-category-master',
                loadChildren: './product-category-master/product-category-master.module#ProductCategoryMasterModule',
            },
            {
                path: 'item-master',
                loadChildren: './item-master/item-master.module#ItemMasterModule',
            },
            { path: 'unit-master', loadChildren: './unit-master/unit-master.module#UnitMasterModule' },
            { path: 'welfare-item-master', loadChildren: './welfare-item-master/welfare-item-master.module#WelfareItemMasterModule' },
            { path: 'po-requisition-detail-master', loadChildren: './po-requisition-detail-master/po-requisition-detail.module#PoRequisitionDetailModule' },
            { path: 'direct-purchase-detail-master', loadChildren: './direct-purchase-detail-master/direct-purchase-detail-master.module#DirectPurchaseDetailMasterModule' },
            { path: 'requisition-detail-master', loadChildren: './requisition-detail-master/requisition-detail-master.module#RequisitionDetailMasterModule' },
            { path: 'grn-po-master', loadChildren: './grn-po-master/grn-po-master.module#GrnPoMasterModule' },
            { path: 'direct-po-master', loadChildren: './direct-po-master/direct-po-master.module#DirectPoMasterModule' },
            { path: 'direct-po-item-master', loadChildren: './direct-po-item-master/direct-po-item-master.module#DirectPoItemMasterModule' },
            { path: 'garden-po-item-master', loadChildren: './garden-po-item-master/garden-po-item-master.module#GardenPoItemMasterModule' },
            { path: 'garden-po-master', loadChildren: './garden-po-master/garden-po-master.module#GardenPoMasterModule' },
            { path: 'material-issue', loadChildren: './material-issue/material-issue.module#MaterialIssueModule' },
            { path: 'product-subcategory-master', loadChildren: './product-subcategory-master/product-subcategory-master.module#ProductSubcategoryMasterModule' },
            // { path:'account-head', loadChildren:'./account-head/account-head.module#AccountHeadModule'},
            { path: 'fiscal-year', loadChildren: './fiscal-year/fiscal-year.module#FiscalYearModule' },
            { path: 'vendor', loadChildren: './vendor/vendor.module#VendorModule' },
            { path: 'store', loadChildren: './store/store.module#StoreModule' },
            { path: 'store-transaction', loadChildren: './store-transaction/store-transaction.module#StoreTransactionModule' },
            { path: 'inventory-setup', loadChildren: './inventory-setup/inventory-setup.module#InventorySetupModule' },
            { path: 'direct-grn', loadChildren: './direct-grn/direct-grn.module#DirectGrnModule' },
            { path: 'grn', loadChildren: './grn/grn.module#GrnModule' },
            // { path:'account-transaction', loadChildren:'./account-transaction/account-transaction.module#AccountTransactionModule'},  
            { path: 'direct-grn-ho', loadChildren: './direct-grn-ho/direct-grn-ho.module#DirectGrnHoModule' },
            { path: 'te-direct-grn', loadChildren: './te-direct-grn/te-direct-grn.module#TeDirectGrnModule' },
            { path: 'te-po-grn', loadChildren: './te-po-grn/te-po-grn.module#TePoGrnModule' },
            // { path:'journal-voucher-form', loadChildren:'./journal-voucher-form/journal-voucher-form.module#JournalVoucherFormModule'},                
            { path: 'ho-material-issue', loadChildren: './ho-material-issue/ho-material-issue.module#HoMaterialIssueModule' },
            { path: 'approve-purchase-order', loadChildren: './approve-purchase-order/approve-purchase-order.module#ApprovePurchaseOrderModule' },
            { path: 'approve-requisition', loadChildren: './approve-requisition/approve-requisition.module#ApproveRequisitionModule' },
            { path: 'approve-issue', loadChildren: './approve-issue/approve-issue.module#ApproveIssueModule' },
            { path: 'bill-of-material', loadChildren: './bill-of-material/bill-of-material.module#BillOfMaterialModule' },
            { path: 'production-voucher', loadChildren: './production-voucher/production-voucher.module#ProductionVoucherModule' },
            { path: 'stock-journal', loadChildren: './stock-journal/stock-journal.module#StockJournalModule' },
            { path: 'sales', loadChildren: './sales/sales.module#SalesModule' },
            { path: 'store-transfer', loadChildren: './store-transfer/store-transfer.module#StoreTransferModule' },
            { path: 'purchase-return', loadChildren: './purchase-return/purchase-return.module#PurchaseReturnModule' },
            { path: 'issue-return', loadChildren: './issue-return/issue-return.module#IssueReturnModule' },
            { path: 'sales-return', loadChildren: './sales-return/sales-return.module#SalesReturnModule' },
            { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
        ]
    },
];
var InventoryMasterRoutingModule = /** @class */ (function () {
    function InventoryMasterRoutingModule() {
    }
    InventoryMasterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], InventoryMasterRoutingModule);
    return InventoryMasterRoutingModule;
}());

//# sourceMappingURL=inventory-master-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/inventory-master.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/layout/inventory-master/inventory-master.component.scss":
/***/ (function(module, exports) {

module.exports = ".new-col-md-5 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 45.66666667%;\n          flex: 0 0 45.66666667%;\n  max-width: 45.666667%; }\n"

/***/ }),

/***/ "./src/app/layout/inventory-master/inventory-master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryMasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryMasterComponent = /** @class */ (function () {
    function InventoryMasterComponent(router) {
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
            }
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
    InventoryMasterComponent.prototype.ngOnInit = function () {
    };
    InventoryMasterComponent.prototype.canDeactivate = function () {
        console.log('i am navigating away');
        alert('Navigating Away');
        // if the editName !== this.user.name
        // if (this.user.name !== this.editName) {
        return window.confirm('Discard changes?');
        // }
        // return false;
        // return true;
    };
    InventoryMasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inventory-master',
            template: __webpack_require__("./src/app/layout/inventory-master/inventory-master.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/inventory-master.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
    ], InventoryMasterComponent);
    return InventoryMasterComponent;
    var _a;
}());

//# sourceMappingURL=inventory-master.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/inventory-master.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryMasterModule", function() { return InventoryMasterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inventory_master_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/inventory-master-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_master_component__ = __webpack_require__("./src/app/layout/inventory-master/inventory-master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_category_master_product_category_add_product_category_add_component__ = __webpack_require__("./src/app/layout/inventory-master/product-category-master/product-category-add/product-category-add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var InventoryMasterModule = /** @class */ (function () {
    function InventoryMasterModule() {
    }
    InventoryMasterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__inventory_master_routing_module__["a" /* InventoryMasterRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__inventory_master_component__["a" /* InventoryMasterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__product_category_master_product_category_add_product_category_add_component__["a" /* ProductCategoryAddComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__product_category_master_product_category_add_product_category_add_component__["a" /* ProductCategoryAddComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], InventoryMasterModule);
    return InventoryMasterModule;
}());

//# sourceMappingURL=inventory-master.module.js.map

/***/ })

});
//# sourceMappingURL=inventory-master.module.chunk.js.map