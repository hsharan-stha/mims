webpackJsonp(["store-ledger-report.module"],{

/***/ "./src/app/layout/reports/store-ledger-report/store-ledger-report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreLedgerReportRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_ledger_report_component__ = __webpack_require__("./src/app/layout/reports/store-ledger-report/store-ledger-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__store_ledger_report_component__["a" /* StoreLedgerReportComponent */]
    }
];
var StoreLedgerReportRoutingModule = /** @class */ (function () {
    function StoreLedgerReportRoutingModule() {
    }
    StoreLedgerReportRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], StoreLedgerReportRoutingModule);
    return StoreLedgerReportRoutingModule;
}());

//# sourceMappingURL=store-ledger-report-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/reports/store-ledger-report/store-ledger-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 tfm-panel-left\">\r\n      <div class=\"tfm-panel-container\">\r\n        <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n          <h2> Quick Access </h2>\r\n        </div>\r\n        <jqxPanel [width]=\"'99.7%'\" [height]=\"'94.2%'\">\r\n          <ng-template #quickAccess></ng-template>\r\n        </jqxPanel>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-10 tfm-panel-right\">\r\n      <div class=\"tfm-panel-container\">\r\n        <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n          <h2>Stock Report </h2>\r\n        </div>\r\n        <div class=\"report-filter\">\r\n          <form name=\"storeLedgerReportForm\" [formGroup]=\"storeLedgerReportForm\">\r\n            <table>\r\n              <tr>\r\n                <td>Date From</td>\r\n                <td>\r\n                  <jqxDateTimeInput class=\"code\" [height]=\"23\" formControlName=\"date_from\" [formatString]=\"'yyyy-MM-dd'\"></jqxDateTimeInput>\r\n                </td>\r\n                <td>Date To</td>\r\n                <td>\r\n                  <jqxDateTimeInput class=\"amount\" [height]=\"23\" formControlName=\"date_to\" [formatString]=\"'yyyy-MM-dd'\"></jqxDateTimeInput>\r\n                </td>\r\n                <td>Store Item</td>\r\n                <td>\r\n                  <jqxComboBox #sComboBox (onChange)=\"getStockId($event)\" class=\"store_id\" [width]=\"185\" [theme]=\"'energyblue'\"\r\n                    [height]=\"23\" [placeHolder]=\"'Select item'\" [dropDownHeight]=\"100\" [source]=\"storeAdapter\"\r\n                    [displayMember]=\"'name'\" [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n                  </jqxComboBox>\r\n                </td>\r\n                <td>\r\n                  <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!storeLedgerReportForm.valid\" (onClick)=\"saveBtn(storeLedgerReportForm.value, false)\">\r\n                    View Report\r\n                  </jqxButton>\r\n                </td>\r\n                <td>\r\n                  <jqxButton *ngIf=\"showGenerateReportButton\" style=\"margin-right: 5px;\" (onClick)=\"saveBtn(storeLedgerReportForm.value, true)\">\r\n                    Generate Report\r\n                  </jqxButton>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </form>\r\n        </div>\r\n        <div class=\"reportView\" *ngIf=\"reportDatas\" style=\"height: 525px; width: 100%;overflow-y: auto\">\r\n          <table border=\"1\" style=\"text-align: center;width: 100%\">\r\n            <tr style=\"font-weight: 600;background: #d6d8d2;\">\r\n              <td style=\"text-align: left;\" colspan=\"14\"><b style=\"font-weight: 600\">From:</b>&nbsp;{{reportDatas.date_from}}&nbsp;<b\r\n                  style=\"font-weight: 600\">To:</b>&nbsp;{{reportDatas.date_to}}</td>\r\n            </tr>\r\n            <tr style=\"font-weight: 600;background: #d6d8d2;\">\r\n              <td></td>\r\n              <td></td>\r\n              <td colspan=\"3\" align=\"center\">Opening</td>\r\n              <td colspan=\"3\" align=\"center\">Inward</td>\r\n              <td colspan=\"3\" align=\"center\">Outward</td>\r\n              <td colspan=\"3\" align=\"center\">Balance</td>\r\n            </tr>\r\n            <tr style=\"font-weight: 600;background: #d6d8d2;\">\r\n              <td>Type</td>\r\n              <td>Item</td>\r\n              <td>Qty</td>\r\n              <td>Rate</td>\r\n              <td>Amt</td>\r\n\r\n              <td>Qty</td>\r\n              <td>Rate</td>\r\n              <td>Amt</td>\r\n\r\n              <td>Qty</td>\r\n              <td>Rate</td>\r\n              <td>Amt</td>\r\n\r\n              <td>Qty</td>\r\n              <td>Rate</td>\r\n              <td>Amt</td>\r\n            </tr>\r\n            <tr *ngFor=\"let stock of stockDatas\">\r\n              <td style=\"font-weight: 600;\">{{stock.category_name}}</td>\r\n              <td style=\"font-weight: 600;\">{{stock.itemname}}</td>\r\n              <td>{{stock.opening_quantity ? (stock.opening_quantity | number: '.1-2') : 0}}</td>\r\n              <td>\r\n                <span *ngIf=\"stock.opening_total / stock.opening_quantity < 0\">({{stock.opening_total /\r\n                  stock.opening_quantity\r\n                  * -1 | number: '.1-2'}})</span>\r\n                <span *ngIf=\"stock.opening_total / stock.opening_quantity > 0\">{{stock.opening_total /\r\n                  stock.opening_quantity\r\n                  | number: '.1-2'}}</span>\r\n              </td>\r\n              <td>{{stock.opening_total}}</td>\r\n\r\n              <td>{{stock.inward_quantity ? (stock.inward_quantity | number: '.1-2') : 0}}</td>\r\n              <td>\r\n                <span *ngIf=\"stock.inward_total / stock.inward_quantity < 0\">({{stock.inward_total /\r\n                  stock.inward_quantity\r\n                  * -1 | number: '.1-2'}})</span>\r\n                <span *ngIf=\"stock.inward_total / stock.inward_quantity > 0\">{{stock.inward_total /\r\n                  stock.inward_quantity\r\n                  | number: '.1-2'}}</span>\r\n              </td>\r\n              <td>{{stock.inward_total}}</td>\r\n\r\n              <td>\r\n                <span *ngIf=\"stock.outward_quantity < 0\">({{stock.outward_quantity * -1 | number: '.1-2'}})</span>\r\n                <span *ngIf=\"stock.outward_quantity > 0\">{{stock.outward_quantity | number: '.1-2'}}</span>\r\n              </td>\r\n              <td>\r\n                <span *ngIf=\"stock.outward_total / stock.outward_quantity < 0\">({{stock.outward_total /\r\n                  stock.outward_quantity\r\n                  * -1 | number: '.1-2'}})</span>\r\n                <span *ngIf=\"stock.outward_total / stock.outward_quantity > 0\">{{stock.outward_total /\r\n                  stock.outward_quantity\r\n                  | number: '.1-2'}}</span>\r\n              </td>\r\n              <td>{{stock.outward_total | number: '.1-2'}}</td>\r\n\r\n              <td>\r\n                <span *ngIf=\"stock.balance_quantity < 0\">({{stock.balance_quantity * -1 | number: '.1-2'}})</span>\r\n                <span *ngIf=\"stock.balance_quantity > 0\">{{stock.balance_quantity | number: '.1-2'}}</span>\r\n              </td>\r\n              <td>\r\n                <span *ngIf=\"stock.balance_rate < 0\">({{stock.balance_rate * -1 | number: '.1-2'}})</span>\r\n                <span *ngIf=\"stock.balance_rate > 0\">{{stock.balance_rate | number: '.1-2'}}</span>\r\n              </td>\r\n              <td>\r\n                <span *ngIf=\"stock.balance_total < 0\">({{stock.balance_total * -1 | number: '.1-2'}})</span>\r\n                <span *ngIf=\"stock.balance_total > 0\">{{stock.balance_total | number: '.1-2'}}</span>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<jqxNotification #msgNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n  [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n  <div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/reports/store-ledger-report/store-ledger-report.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/reports/store-ledger-report/store-ledger-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreLedgerReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var StoreLedgerReportComponent = /** @class */ (function () {
    function StoreLedgerReportComponent(fb, rs, fes, cus, componentFactoryResolver, apiUrl) {
        this.fb = fb;
        this.rs = rs;
        this.fes = fes;
        this.cus = cus;
        this.componentFactoryResolver = componentFactoryResolver;
        this.storeAdapter = [];
        this.store_data = [];
        this.userData = {};
        this.stockId = 0;
        this.showGenerateReportButton = false;
        this.stockDatas = [];
        this.apiUrl = apiUrl;
        this.userData['token'] = this.cus.getTokenData()['token'];
        this.createForm();
    }
    StoreLedgerReportComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
        this.store_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                url: this.apiUrl + 'store?limit=all',
            };
        this.storeAdapter = new jqx.dataAdapter(this.store_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = [];
                var dt = {};
                dt['id'] = '';
                dt['name'] = 'Select All';
                tData.push(dt);
                for (var i = 0; i < data.data.length; i++) {
                    tData.push(data.data[i]);
                }
                console.info(tData);
                return tData;
            }
        });
    };
    StoreLedgerReportComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    StoreLedgerReportComponent.prototype.createForm = function () {
        this.storeLedgerReportForm = this.fb.group({
            'date_from': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'date_to': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    };
    StoreLedgerReportComponent.prototype.saveBtn = function (post, type) {
        var _this = this;
        this.stockDatas = [];
        if (!type) {
            this.showGenerateReportButton = true;
            this.stockDatas = [];
        }
        if (post['stock_report_generate']) {
            delete post['stock_report_generate'];
        }
        post['limit'] = 'all';
        post['stock_report'] = true;
        if (type) {
            post['stock_report_generate'] = true;
        }
        if (this.stockId) {
            post['store_id'] = this.stockId;
        }
        this.jqxLoader.open();
        this.rs.getStoreLedgerReport(post, type).subscribe(function (result) {
            if (type) {
                _this.fes.SaveFile(result, 'Stock  Report');
            }
            else {
                _this.reportDatas = result;
                var data = result;
                var k = 0;
                for (var i = 0; i < data.category.length; i++) {
                    for (var j = 0; j < data.items[i].length; j++) {
                        var catName = '';
                        if (j == 0) {
                            catName = data.category[i].name;
                        }
                        var oq = data.opening[k][0].total && parseFloat(data.opening[k][0].total) || 0;
                        var iq = data.inward[k][0].total && parseFloat(data.inward[k][0].total) || 0;
                        var ouq = data.outward[k][0].total && parseFloat(data.outward[k][0].total) || 0;
                        var balance_total = oq + iq - ouq;
                        var balance_quantity = data.opening[k][0].quantity + data.inward[k][0].quantity - data.outward[k][0].quantity;
                        var balance_rate = balance_total / balance_quantity;
                        var rowData = {
                            category_name: catName,
                            itemname: data.items[i][j].name,
                            opening_quantity: data.opening[k][0].quantity,
                            opening_total: oq,
                            inward_quantity: data.inward[k][0].quantity,
                            inward_total: iq,
                            outward_quantity: data.outward[k][0].quantity,
                            outward_total: ouq,
                            balance_total: balance_total,
                            balance_quantity: balance_quantity,
                            balance_rate: balance_rate
                        };
                        _this.stockDatas.push(rowData);
                        k++;
                    }
                }
                console.log(_this.stockDatas);
            }
            _this.jqxLoader.close();
            _this.sComboBox.val('');
        }, function (error) {
            console.log(error);
            _this.jqxLoader.close();
        });
    };
    StoreLedgerReportComponent.prototype.getStockId = function ($event) {
        this.stockId = $event.args.item.originalItem.id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], StoreLedgerReportComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object)
    ], StoreLedgerReportComponent.prototype, "quickAccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _c || Object)
    ], StoreLedgerReportComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sComboBox'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], StoreLedgerReportComponent.prototype, "sComboBox", void 0);
    StoreLedgerReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-store-ledger-report',
            template: __webpack_require__("./src/app/layout/reports/store-ledger-report/store-ledger-report.component.html"),
            styles: [__webpack_require__("./src/app/layout/reports/store-ledger-report/store-ledger-report.component.scss")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["f" /* AllReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["f" /* AllReportService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["E" /* FileExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["E" /* FileExportService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _j || Object, String])
    ], StoreLedgerReportComponent);
    return StoreLedgerReportComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=store-ledger-report.component.js.map

/***/ }),

/***/ "./src/app/layout/reports/store-ledger-report/store-ledger-report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreLedgerReportModule", function() { return StoreLedgerReportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_ledger_report_routing_module__ = __webpack_require__("./src/app/layout/reports/store-ledger-report/store-ledger-report-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_ledger_report_component__ = __webpack_require__("./src/app/layout/reports/store-ledger-report/store-ledger-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StoreLedgerReportModule = /** @class */ (function () {
    function StoreLedgerReportModule() {
    }
    StoreLedgerReportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__store_ledger_report_routing_module__["a" /* StoreLedgerReportRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__store_ledger_report_component__["a" /* StoreLedgerReportComponent */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], StoreLedgerReportModule);
    return StoreLedgerReportModule;
}());

//# sourceMappingURL=store-ledger-report.module.js.map

/***/ })

});
//# sourceMappingURL=store-ledger-report.module.chunk.js.map