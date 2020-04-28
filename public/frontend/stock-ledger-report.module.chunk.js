webpackJsonp(["stock-ledger-report.module"],{

/***/ "./src/app/layout/reports/stock-ledger-report/stock-ledger-report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockLedgerReportRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock_ledger_report_component__ = __webpack_require__("./src/app/layout/reports/stock-ledger-report/stock-ledger-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__stock_ledger_report_component__["a" /* StockLedgerReportComponent */]
    }
];
var StockLedgerReportRoutingModule = /** @class */ (function () {
    function StockLedgerReportRoutingModule() {
    }
    StockLedgerReportRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], StockLedgerReportRoutingModule);
    return StockLedgerReportRoutingModule;
}());

//# sourceMappingURL=stock-ledger-report-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/reports/stock-ledger-report/stock-ledger-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 tfm-panel-left\">\r\n      <div class=\"tfm-panel-container\">\r\n        <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n          <h2> Quick Access </h2>\r\n        </div>\r\n        <jqxPanel [width]=\"'99.7%'\" [height]=\"'94.2%'\">\r\n          <ng-template #quickAccess></ng-template>\r\n        </jqxPanel>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-10 tfm-panel-right\">\r\n      <div class=\"tfm-panel-container\">\r\n        <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n          <h2>Stock Ledger </h2>\r\n        </div>\r\n        <div class=\"report-filter\">\r\n          <form name=\"storeLedgerReportForm\" [formGroup]=\"storeLedgerReportForm\">\r\n            <table>\r\n              <tr>\r\n                <td> Item</td>\r\n                <td>\r\n                  <input type=\"text\" formControlName=\"item_id\" class=\"px-control\" placeholder=\"Item\" hidden>\r\n                  <input type=\"text\" (keyup)=\"ItemFilter($event)\" formControlName=\"item_name\" class=\"px-control\" placeholder=\"Enter Item Code\">\r\n                  <span *ngIf=\"ItemFocus\" class=\"px-select-container\">\r\n                    <select (change)=\"ItemListSelected($event)\" (blur)=\"ItemFocus = false;\" size=\"5\" name=\"item_id\" class=\"px-control px-select-list\"\r\n                      id=\"itemCode2\">\r\n                      <option *ngFor='let item of ItemAdapter' [value]=\"item.id\">{{ item.name }}</option>\r\n                    </select>\r\n                  </span>\r\n                  <small [hidden]=\"storeLedgerReportForm.get('item_id').valid || !storeLedgerReportForm.get('item_id').touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                    * required\r\n                  </small>\r\n                </td>\r\n                <td>Date From</td>\r\n                <td>\r\n                  <jqxDateTimeInput class=\"code\" [height]=\"23\" formControlName=\"date_from\" [formatString]=\"'yyyy-MM-dd'\"></jqxDateTimeInput>\r\n                </td>\r\n                <td>Date To</td>\r\n                <td>\r\n                  <jqxDateTimeInput class=\"amount\" [height]=\"23\" formControlName=\"date_to\" [formatString]=\"'yyyy-MM-dd'\"></jqxDateTimeInput>\r\n                </td>\r\n                <td>\r\n                  <jqxComboBox #sComboBox (onChange)=\"getStockId($event)\" class=\"store_id\" [width]=\"185\" [theme]=\"'energyblue'\" [height]=\"23\"\r\n                    [dropDownHeight]=\"100\" [placeHolder]=\"'Select item'\" [source]=\"storeAdapter\" [displayMember]=\"'name'\" [valueMember]=\"'id'\"\r\n                    [searchMode]=\"'containsignorecase'\">\r\n                  </jqxComboBox>\r\n                </td>\r\n                <td>\r\n                  <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!storeLedgerReportForm.valid\" (onClick)=\"saveBtn(storeLedgerReportForm.value, false)\">\r\n                    View Report\r\n                  </jqxButton>\r\n                </td>\r\n                <td>\r\n                  <jqxButton *ngIf=\"showGenerateReportButton\" style=\"margin-right: 5px;\" [disabled]=\"!storeLedgerReportForm.valid\" (onClick)=\"saveBtn(storeLedgerReportForm.value, true)\">\r\n                    Generate Report\r\n                  </jqxButton>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n            <div style=\"text-align: center;\">\r\n              <h5 *ngIf=\"dataNotFound\">Data not found</h5>\r\n            </div>\r\n\r\n            <div style=\"height: 525px; width: 100%;overflow-y: auto\">\r\n              <table *ngIf=\"showGenerateReportButton && reportData.length\" border=\"1\" style=\"text-align: center;width: 100%;\">\r\n                <tr style=\"font-weight: 600;background: #d6d8d2;\">\r\n                  <td colspan=\"2\">Item Name:&nbsp;{{itemName}}</td>\r\n                  <td colspan=\"3\">Date Range: From&nbsp;{{dateFrom}}&nbsp;To&nbsp;{{dateTo}} </td>\r\n                  <td colspan=\"3\">Valuation</td>\r\n                  <td colspan=\"2\">Normal Loss</td>\r\n                </tr>\r\n                <tr style=\"font-weight: 600;background: #d6d8d2;\">\r\n                  <td colspan=\"7\">In/Out</td>\r\n                  <td colspan=\"3\">Balance</td>\r\n                </tr>\r\n                <tr style=\"font-weight: 600;background: #d6d8d2;\">\r\n                  <td>Date</td>\r\n                  <td>Type</td>\r\n                  <td>ref</td>\r\n                  <td>Remarks</td>\r\n                  <td>Quantity</td>\r\n                  <td>Rate</td>\r\n                  <td>Total</td>\r\n                  <td>Quantity</td>\r\n                  <td>Rate</td>\r\n                  <td>Total</td>\r\n                </tr>\r\n                <tr *ngFor=\"let open of openingData\">\r\n                  <td></td>\r\n                  <td>Opening</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td>{{open.quantity ? open.quantity : 0}}</td>\r\n                  <td>{{open.total / open.quantity}}</td>\r\n                  <td>{{open.total ? open.total : 0}}</td>\r\n                  <td>{{open.quantity ? open.quantity : 0}}</td>\r\n                  <td>{{open.total / open.quantity}}</td>\r\n                  <td>{{open.total ? open.total : 0}}</td>\r\n                </tr>\r\n                <tr *ngFor=\"let data of reportData\">\r\n                  <td>{{data.date}}</td>\r\n                  <td>{{data.type}}</td>\r\n                  <td>{{data.ref}}</td>\r\n                  <td>{{data.remarks}}</td>\r\n                  <td>\r\n                    <span *ngIf=\"data.inquantity < 0\">({{data.inquantity * -1 | number: '.1-2'}})</span>\r\n                    <span *ngIf=\"data.inquantity > 0\">{{data.inquantity | number: '.1-2'}}</span>\r\n                  </td>\r\n                  <td>\r\n                    <span *ngIf=\"data.inrate < 0\">({{data.inrate * -1 | number: '.1-2'}})</span>\r\n                    <span *ngIf=\"data.inrate > 0\">{{data.inrate | number: '.1-2'}}</span>\r\n                  </td>\r\n                  <td>\r\n                    <span *ngIf=\"data.intotal < 0\">({{data.intotal * -1 | number: '.1-2'}})</span>\r\n                    <span *ngIf=\"data.intotal > 0\">{{data.intotal | number: '.1-2'}}</span>\r\n                  </td>\r\n                  <td>\r\n                    <span *ngIf=\"data.bquantity < 0\">({{data.bquantity * -1 | number: '.1-2'}})</span>\r\n                    <span *ngIf=\"data.bquantity > 0\">{{data.bquantity | number: '.1-2'}}</span>\r\n                  </td>\r\n                  <td>\r\n                    <span *ngIf=\"data.brate < 0\">({{data.brate * -1 | number: '.1-2'}})</span>\r\n                    <span *ngIf=\"data.brate > 0\">{{data.brate | number: '.1-2'}}</span>\r\n                  </td>\r\n                  <td>\r\n                    <span *ngIf=\"data.btotal < 0\">({{data.btotal * -1 | number: '.1-2'}})</span>\r\n                    <span *ngIf=\"data.btotal > 0\">{{data.btotal | number: '.1-2'}}</span>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<jqxNotification #msgNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n  [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n  <div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/reports/stock-ledger-report/stock-ledger-report.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/reports/stock-ledger-report/stock-ledger-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockLedgerReportComponent; });
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






var StockLedgerReportComponent = /** @class */ (function () {
    function StockLedgerReportComponent(fb, rs, fes, ims, cus, apiUrl, componentFactoryResolver) {
        this.fb = fb;
        this.rs = rs;
        this.fes = fes;
        this.ims = ims;
        this.cus = cus;
        this.componentFactoryResolver = componentFactoryResolver;
        this.ItemFocus = false;
        this.stockId = 0;
        this.userData = {};
        this.showGenerateReportButton = false;
        this.reportData = [];
        this.openingQuantity = 0;
        this.openingTotal = 0;
        this.dataNotFound = false;
        this.createForm();
        this.apiUrl = apiUrl;
        this.userData['token'] = this.cus.getTokenData()['token'];
    }
    StockLedgerReportComponent.prototype.ngOnInit = function () {
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
    StockLedgerReportComponent.prototype.ngAfterViewInit = function () {
        this.sComboBox.addItem('Select All');
    };
    StockLedgerReportComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    StockLedgerReportComponent.prototype.createForm = function () {
        this.storeLedgerReportForm = this.fb.group({
            'date_from': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'date_to': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'item_id': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'item_name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    /**
    * inputItemFilter Event is called when Item input field has
    * keyup action followed by 'Enter'
    * Generate Suggestion based on input value entered
    * @param searchString
    * @param index
    */
    StockLedgerReportComponent.prototype.ItemFilter = function (searchPr) {
        var _this = this;
        var keycode = searchPr['keyCode'];
        if ((keycode == 40)) {
            document.getElementById('itemCode1').focus();
        }
        var searchString = searchPr['target'].value;
        var len = searchString.length;
        var dataString = searchString.substr(len - 1, len);
        var temp = searchString.replace(' ', '');
        temp = temp.replace(/\s/g, '');
        if (dataString == ' ' && temp.length > 1) {
            if (temp) {
                this.ItemFocus = true;
                this.ims.index({ code: temp, transact: 1, limit: 'all' }).subscribe(function (response) {
                    console.log(response);
                    _this.ItemAdapter = response;
                    console.log(_this.ItemAdapter);
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this.ItemFocus = false;
            }
        }
    };
    /**
     * Event fired when option is selected from Item Suggestion Select field
     * Hide Select field after Item Selected.
     * @param selectedEvent
     * @param index
     */
    StockLedgerReportComponent.prototype.ItemListSelected = function (selectedEvent) {
        if (selectedEvent && selectedEvent.target && selectedEvent.target.value) {
            var displayText = selectedEvent.target.selectedOptions[0].text;
            this.storeLedgerReportForm.get('item_id').patchValue(selectedEvent.target.value);
            this.storeLedgerReportForm.get('item_name').patchValue(displayText);
            this.ItemFocus = false;
        }
    };
    StockLedgerReportComponent.prototype.saveBtn = function (post, generate) {
        var _this = this;
        //post = [];
        if (!generate) {
            this.reportData = [];
        }
        if (!generate) {
            this.showGenerateReportButton = true;
        }
        post['limit'] = 'all';
        post['report'] = true;
        post['stock_ledger'] = true;
        if (this.stockId) {
            post['store_id'] = this.stockId;
        }
        if (generate) {
            post['stock_ledger_generate'] = true;
        }
        this.jqxLoader.open();
        this.rs.getStoreLedgerReport(post, generate ? true : false).subscribe(function (result) {
            if (generate) {
                _this.fes.SaveFile(result, 'Stock Ledger Report');
            }
            else {
                _this.dataNotFound = result.actual_report.length ? false : true;
                if (_this.dataNotFound)
                    _this.jqxLoader.close();
                _this.dateFrom = result.date_from;
                _this.dateTo = result.date_to;
                _this.itemName = result.item_name[0].item_name;
                _this.openingData = result.opening;
                _this.openingData.forEach(function (result) {
                    _this.openingQuantity += (result.quantity || 0);
                    _this.openingTotal += (parseFloat(result.total) || 0);
                });
                var qty_1 = _this.openingQuantity;
                var tot_1 = _this.openingTotal;
                //console.log(isNaN(tot));
                result.actual_report.forEach(function (stockResult) {
                    var data = {
                        date: stockResult.date,
                        type: stockResult.type,
                        ref: stockResult.ref,
                        remarks: stockResult.remarks,
                        inquantity: stockResult.quantity,
                        inrate: stockResult.total / stockResult.quantity,
                        intotal: stockResult.total,
                        bquantity: stockResult.quantity + qty_1,
                        brate: (parseFloat(stockResult.total) + tot_1) / (stockResult.quantity + qty_1),
                        btotal: parseFloat(stockResult.total) + tot_1
                    };
                    qty_1 = stockResult.quantity + qty_1;
                    tot_1 = parseFloat(stockResult.total) + tot_1;
                    _this.reportData.push(data);
                    _this.jqxLoader.close();
                });
            }
            _this.jqxLoader.close();
        }, function (error) {
            _this.jqxLoader.close();
        });
    };
    StockLedgerReportComponent.prototype.getStockId = function ($event) {
        this.stockId = $event.args.item.originalItem.id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], StockLedgerReportComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object)
    ], StockLedgerReportComponent.prototype, "quickAccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _c || Object)
    ], StockLedgerReportComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sComboBox'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], StockLedgerReportComponent.prototype, "sComboBox", void 0);
    StockLedgerReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stock-ledger-report',
            template: __webpack_require__("./src/app/layout/reports/stock-ledger-report/stock-ledger-report.component.html"),
            styles: [__webpack_require__("./src/app/layout/reports/stock-ledger-report/stock-ledger-report.component.scss")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["f" /* AllReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["f" /* AllReportService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["E" /* FileExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["E" /* FileExportService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _j || Object, String, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _k || Object])
    ], StockLedgerReportComponent);
    return StockLedgerReportComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=stock-ledger-report.component.js.map

/***/ }),

/***/ "./src/app/layout/reports/stock-ledger-report/stock-ledger-report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockLedgerReportModule", function() { return StockLedgerReportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stock_ledger_report_routing_module__ = __webpack_require__("./src/app/layout/reports/stock-ledger-report/stock-ledger-report-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stock_ledger_report_component__ = __webpack_require__("./src/app/layout/reports/stock-ledger-report/stock-ledger-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StockLedgerReportModule = /** @class */ (function () {
    function StockLedgerReportModule() {
    }
    StockLedgerReportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__stock_ledger_report_routing_module__["a" /* StockLedgerReportRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__stock_ledger_report_component__["a" /* StockLedgerReportComponent */]]
        })
    ], StockLedgerReportModule);
    return StockLedgerReportModule;
}());

//# sourceMappingURL=stock-ledger-report.module.js.map

/***/ })

});
//# sourceMappingURL=stock-ledger-report.module.chunk.js.map