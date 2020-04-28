webpackJsonp(["goods-receipt-report.module"],{

/***/ "./src/app/layout/reports/goods-receipt-report/goods-receipt-report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodsReceiptReportRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goods_receipt_report_component__ = __webpack_require__("./src/app/layout/reports/goods-receipt-report/goods-receipt-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__goods_receipt_report_component__["a" /* GoodsReceiptReportComponent */]
    }
];
var GoodsReceiptReportRoutingModule = /** @class */ (function () {
    function GoodsReceiptReportRoutingModule() {
    }
    GoodsReceiptReportRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], GoodsReceiptReportRoutingModule);
    return GoodsReceiptReportRoutingModule;
}());

//# sourceMappingURL=goods-receipt-report-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/reports/goods-receipt-report/goods-receipt-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 tfm-panel-left\">\r\n      <div class=\"tfm-panel-container\">\r\n        <div class=\"tfm-panel-header jqx-widget-header jqx-window-header\">\r\n          <h2> Quick Access </h2>\r\n        </div>\r\n        <jqxPanel [width]=\"'99.7%'\" [height]=\"'94.2%'\">\r\n          <ng-template #quickAccess></ng-template>\r\n        </jqxPanel>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-10 tfm-panel-right\">\r\n      <div class=\"tfm-panel-container\">\r\n        <div class=\"tfm-panel-header jqx-widget-header jqx-window-header\">\r\n          <h2>Goods Receipt Report </h2>\r\n        </div>\r\n        <div class=\"report-filter\">\r\n          <form name=\"goodsReceiptReportForm\" [formGroup]=\"goodsReceiptReportForm\">\r\n            <table>\r\n              <tr>\r\n                <td>Date From</td>\r\n                <td>\r\n                  <jqxDateTimeInput class=\"code\" [width]=\"180\" [height]=\"23\" formControlName=\"date_from\" [formatString]=\"'yyyy-MM-dd'\"></jqxDateTimeInput>\r\n                </td>\r\n                <td>Date To</td>\r\n                <td>\r\n                  <jqxDateTimeInput class=\"amount\" [width]=\"180\" [height]=\"23\" formControlName=\"date_to\" [formatString]=\"'yyyy-MM-dd'\"></jqxDateTimeInput>\r\n                </td>\r\n                <td>Select Item</td>\r\n                <td>\r\n                  <input type=\"text\" formControlName=\"item_id\" class=\"px-control\" placeholder=\"Item\" hidden>\r\n                  <input type=\"text\" formControlName=\"item_name\" (keyup)=\"sentItemFilter($event)\" class=\"px-control\" placeholder=\"Enter Item Code\">\r\n                  <span *ngIf=\"sentItemFocus\" class=\"px-select-container\">\r\n                    <select (change)=\"sentItemListSelected($event)\" (blur)=\"sentItemFocus = false;\" size=\"5\" name=\"item_id\" class=\"px-control px-select-list\"\r\n                      id=\"itemCode2\">\r\n                      <option *ngFor='let item of sentItemAdapter' [value]=\"item.id\">{{ item.name }}</option>\r\n                    </select>\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Store</td>\r\n                <td>\r\n                  <jqxComboBox #storeComboBox (onChange)=\"storeChanged()\" [source]=\"storeAdapter\" [width]=\"180\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [height]=\"23\"></jqxComboBox>\r\n                </td>\r\n                <td>Vendor</td>\r\n                <td>\r\n                  <jqxComboBox #vendorComboBox [source]=\"vendorAdapter\" [width]=\"180\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [height]=\"23\"></jqxComboBox>\r\n                </td>\r\n                <td>\r\n                  Received By\r\n                </td>\r\n                <td>\r\n                  <input type=\"text\" formControlName=\"received_by\" placeholder=\"received by\" />\r\n                </td>\r\n                <td>\r\n                  <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!goodsReceiptReportForm.valid || !store\" (onClick)=\"saveBtn(goodsReceiptReportForm.value)\">\r\n                    Generate Report\r\n                  </jqxButton>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<jqxNotification #msgNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n  [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n  <div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/reports/goods-receipt-report/goods-receipt-report.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/reports/goods-receipt-report/goods-receipt-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodsReceiptReportComponent; });
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






var GoodsReceiptReportComponent = /** @class */ (function () {
    function GoodsReceiptReportComponent(fb, apiUrl, rs, fes, ims, componentFactoryResolver) {
        this.fb = fb;
        this.rs = rs;
        this.fes = fes;
        this.ims = ims;
        this.componentFactoryResolver = componentFactoryResolver;
        this.sentItemAdapter = [];
        this.typeAdapter = [
            { value: 'HO', label: 'Head Office' },
            { value: 'SES', label: 'Sister Estate' },
            { value: 'RET', label: 'Return' },
            { value: 'ADJ', label: 'Adjustment' },
            { value: 'VEN', label: 'Vendor' },
        ];
        this.store = false;
        this.apiUrl = apiUrl;
        this.createForm();
    }
    GoodsReceiptReportComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
        this.store_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' }
                ],
                async: false,
                url: this.apiUrl + 'store?limit=all',
            };
        this.storeAdapter = new jqx.dataAdapter(this.store_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }
        });
        this.vendor_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' }
                ],
                async: false,
                url: this.apiUrl + 'vendor?limit=all',
            };
        this.vendorAdapter = new jqx.dataAdapter(this.vendor_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }
        });
    };
    GoodsReceiptReportComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    GoodsReceiptReportComponent.prototype.createForm = function () {
        this.goodsReceiptReportForm = this.fb.group({
            'date_from': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'date_to': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'item_id': [null],
            'item_name': [null],
            'received_by': [null]
        });
    };
    GoodsReceiptReportComponent.prototype.saveBtn = function (post) {
        var _this = this;
        post['limit'] = 'all';
        post['grn_details'] = true;
        post['store_id'] = this.storeComboBox.val();
        post['vendor_id'] = this.vendorComboBox.val();
        //post['type'] = this.typeComboBox.val();
        post['report_type'] = 'goods_receipt_report';
        this.jqxLoader.open();
        this.rs.getGoodsReceiptReport(post).subscribe(function (result) {
            _this.fes.SaveFile(result, 'Goods Receipt Report');
            _this.jqxLoader.close();
        }, function (error) {
            _this.jqxLoader.close();
        });
    };
    GoodsReceiptReportComponent.prototype.sentItemFilter = function (searchPr, index) {
        var _this = this;
        var keycode = searchPr['keyCode'];
        if ((keycode == 40)) {
            document.getElementById('itemCode2').focus();
        }
        var searchString = searchPr['target'].value;
        var len = searchString.length;
        var dataString = searchString.substr(len - 1, len);
        var temp = searchString.replace(' ', '');
        temp = temp.replace(/\s/g, '');
        if (dataString == ' ' && temp.length > 1) {
            if (temp) {
                this.sentItemFocus = true;
                this.ims.index({ code: temp, transact: 1, limit: 'all' }).subscribe(function (response) {
                    _this.sentItemAdapter = [];
                    _this.sentItemAdapter = response;
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this.sentItemFocus = false;
            }
        }
    };
    GoodsReceiptReportComponent.prototype.sentItemListSelected = function (selectedEvent) {
        if (selectedEvent && selectedEvent.target && selectedEvent.target.value) {
            this.sentItemFocus = false;
            this.goodsReceiptReportForm.get('item_id').patchValue(selectedEvent.target.value);
            this.goodsReceiptReportForm.get('item_name').patchValue(selectedEvent.target.selectedOptions[0].text);
        }
    };
    GoodsReceiptReportComponent.prototype.storeChanged = function () {
        this.store = this.storeComboBox.val() ? true : false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], GoodsReceiptReportComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object)
    ], GoodsReceiptReportComponent.prototype, "quickAccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _c || Object)
    ], GoodsReceiptReportComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('storeComboBox'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], GoodsReceiptReportComponent.prototype, "storeComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('vendorComboBox'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _e || Object)
    ], GoodsReceiptReportComponent.prototype, "vendorComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('typeComboBox'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _f || Object)
    ], GoodsReceiptReportComponent.prototype, "typeComboBox", void 0);
    GoodsReceiptReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-goods-receipt-report',
            template: __webpack_require__("./src/app/layout/reports/goods-receipt-report/goods-receipt-report.component.html"),
            styles: [__webpack_require__("./src/app/layout/reports/goods-receipt-report/goods-receipt-report.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object, String, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["f" /* AllReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["f" /* AllReportService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["E" /* FileExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["E" /* FileExportService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _l || Object])
    ], GoodsReceiptReportComponent);
    return GoodsReceiptReportComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=goods-receipt-report.component.js.map

/***/ }),

/***/ "./src/app/layout/reports/goods-receipt-report/goods-receipt-report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsReceiptReportModule", function() { return GoodsReceiptReportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__goods_receipt_report_routing_module__ = __webpack_require__("./src/app/layout/reports/goods-receipt-report/goods-receipt-report-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__goods_receipt_report_component__ = __webpack_require__("./src/app/layout/reports/goods-receipt-report/goods-receipt-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GoodsReceiptReportModule = /** @class */ (function () {
    function GoodsReceiptReportModule() {
    }
    GoodsReceiptReportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__goods_receipt_report_routing_module__["a" /* GoodsReceiptReportRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__goods_receipt_report_component__["a" /* GoodsReceiptReportComponent */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], GoodsReceiptReportModule);
    return GoodsReceiptReportModule;
}());

//# sourceMappingURL=goods-receipt-report.module.js.map

/***/ })

});
//# sourceMappingURL=goods-receipt-report.module.chunk.js.map