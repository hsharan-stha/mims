webpackJsonp(["material-issue-report.module"],{

/***/ "./src/app/layout/reports/material-issue-report/material-issue-report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialIssueReportRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_issue_report_component__ = __webpack_require__("./src/app/layout/reports/material-issue-report/material-issue-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__material_issue_report_component__["a" /* MaterialIssueReportComponent */]
    }
];
var MaterialIssueReportRoutingModule = /** @class */ (function () {
    function MaterialIssueReportRoutingModule() {
    }
    MaterialIssueReportRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], MaterialIssueReportRoutingModule);
    return MaterialIssueReportRoutingModule;
}());

//# sourceMappingURL=material-issue-report-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/reports/material-issue-report/material-issue-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 tfm-panel-left\">\r\n      <div class=\"tfm-panel-container\">\r\n        <div class=\"tfm-panel-header jqx-widget-header jqx-window-header\">\r\n          <h2> Quick Access </h2>\r\n        </div>\r\n        <jqxPanel [width]=\"'99.7%'\" [height]=\"'94.2%'\">\r\n          <ng-template #quickAccess></ng-template>\r\n        </jqxPanel>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-10 tfm-panel-right\">\r\n      <div class=\"tfm-panel-container\">\r\n        <div class=\"tfm-panel-header jqx-widget-header jqx-window-header\">\r\n          <h2>Material Issue Report </h2>\r\n        </div>\r\n        <div class=\"report-filter\">\r\n          <form name=\"materialIssueReportForm\" [formGroup]=\"materialIssueReportForm\">\r\n            <table>\r\n              <tr>\r\n                <td>Date From</td>\r\n                <td>\r\n                  <jqxDateTimeInput class=\"code\" [width]=\"180\" [height]=\"23\" formControlName=\"date_from\" [formatString]=\"'yyyy-MM-dd'\"></jqxDateTimeInput>\r\n                </td>\r\n                <td>Date To</td>\r\n                <td>\r\n                  <jqxDateTimeInput class=\"amount\" [width]=\"180\" [height]=\"23\" formControlName=\"date_to\" [formatString]=\"'yyyy-MM-dd'\"></jqxDateTimeInput>\r\n                </td>\r\n                <!-- <td>Issue No</td>\r\n                <td>\r\n                  <jqxInput [width]=\"180\" [height]=\"23\" formControlName=\"issue_no\"></jqxInput>\r\n                </td> -->\r\n              </tr>\r\n              <tr>\r\n                  <td>Type</td>\r\n                  <td>\r\n                    <jqxComboBox #typeComboBox [source]=\"typeAdapter\" [width]=\"180\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [height]=\"23\"></jqxComboBox>\r\n                  </td>\r\n                <td>Store</td>\r\n                <td>\r\n                  <jqxComboBox #storeComboBox [source]=\"storeAdapter\" [width]=\"180\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [height]=\"23\"></jqxComboBox>\r\n                </td>\r\n                <!-- <td>To Store</td>\r\n                <td>\r\n                  <jqxComboBox #vendorComboBox [source]=\"vendorAdapter\" [width]=\"180\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [height]=\"23\"></jqxComboBox>\r\n                </td> -->\r\n                <td>\r\n                  <jqxButton style=\"margin-right: 5px;\" (onClick)=\"saveBtn(materialIssueReportForm.value)\">\r\n                    Generate Report\r\n                  </jqxButton>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<jqxNotification #msgNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n  [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n  <div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/reports/material-issue-report/material-issue-report.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/reports/material-issue-report/material-issue-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialIssueReportComponent; });
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






var MaterialIssueReportComponent = /** @class */ (function () {
    function MaterialIssueReportComponent(fb, apiUrl, rs, fes, componentFactoryResolver) {
        this.fb = fb;
        this.rs = rs;
        this.fes = fes;
        this.componentFactoryResolver = componentFactoryResolver;
        this.typeAdapter = [
            { value: 'sc', label: 'Store Consumption' },
            { value: 'iet', label: 'Inter Estate Transfer' },
            { value: 'adj', label: 'Adjustment' },
        ];
        this.apiUrl = apiUrl;
        this.createForm();
    }
    MaterialIssueReportComponent.prototype.ngOnInit = function () {
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
                url: this.apiUrl + 'store?limit=all',
            };
        this.vendorAdapter = new jqx.dataAdapter(this.vendor_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }
        });
    };
    MaterialIssueReportComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    MaterialIssueReportComponent.prototype.createForm = function () {
        this.materialIssueReportForm = this.fb.group({
            'date_from': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'date_to': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    MaterialIssueReportComponent.prototype.saveBtn = function (post) {
        var _this = this;
        post['limit'] = 'all';
        post['report'] = true;
        post['store_id'] = this.storeComboBox.val();
        post['to_store_id'] = this.vendorComboBox.val();
        post['type'] = this.typeComboBox.val();
        post['report_type'] = 'material_issue_report';
        this.jqxLoader.open();
        this.rs.getMaterialIssueReport(post).subscribe(function (result) {
            _this.fes.SaveFile(result, 'Material Issue Report');
            _this.jqxLoader.close();
        }, function (error) {
            _this.jqxLoader.close();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], MaterialIssueReportComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object)
    ], MaterialIssueReportComponent.prototype, "quickAccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _c || Object)
    ], MaterialIssueReportComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('storeComboBox'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], MaterialIssueReportComponent.prototype, "storeComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('vendorComboBox'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _e || Object)
    ], MaterialIssueReportComponent.prototype, "vendorComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('typeComboBox'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _f || Object)
    ], MaterialIssueReportComponent.prototype, "typeComboBox", void 0);
    MaterialIssueReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-material-issue-report',
            template: __webpack_require__("./src/app/layout/reports/material-issue-report/material-issue-report.component.html"),
            styles: [__webpack_require__("./src/app/layout/reports/material-issue-report/material-issue-report.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object, String, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["f" /* AllReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["f" /* AllReportService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["E" /* FileExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["E" /* FileExportService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _k || Object])
    ], MaterialIssueReportComponent);
    return MaterialIssueReportComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=material-issue-report.component.js.map

/***/ }),

/***/ "./src/app/layout/reports/material-issue-report/material-issue-report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialIssueReportModule", function() { return MaterialIssueReportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_issue_report_routing_module__ = __webpack_require__("./src/app/layout/reports/material-issue-report/material-issue-report-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_issue_report_component__ = __webpack_require__("./src/app/layout/reports/material-issue-report/material-issue-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MaterialIssueReportModule = /** @class */ (function () {
    function MaterialIssueReportModule() {
    }
    MaterialIssueReportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_issue_report_routing_module__["a" /* MaterialIssueReportRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__material_issue_report_component__["a" /* MaterialIssueReportComponent */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], MaterialIssueReportModule);
    return MaterialIssueReportModule;
}());

//# sourceMappingURL=material-issue-report.module.js.map

/***/ })

});
//# sourceMappingURL=material-issue-report.module.chunk.js.map