webpackJsonp(["opening-report.module"],{

/***/ "./src/app/layout/reports/opening-report/opening-report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpeningReportRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opening_report_component__ = __webpack_require__("./src/app/layout/reports/opening-report/opening-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__opening_report_component__["a" /* OpeningReportComponent */]
    }
];
var OpeningReportRoutingModule = /** @class */ (function () {
    function OpeningReportRoutingModule() {
    }
    OpeningReportRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], OpeningReportRoutingModule);
    return OpeningReportRoutingModule;
}());

//# sourceMappingURL=opening-report-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/reports/opening-report/opening-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 tfm-panel-left\">\r\n      <div class=\"tfm-panel-container\">\r\n        <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n          <h2> Quick Access </h2>\r\n        </div>\r\n        <jqxPanel [width]=\"'99.7%'\" [height]=\"'94.2%'\">\r\n          <ng-template #quickAccess></ng-template>\r\n        </jqxPanel>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-10 tfm-panel-right\">\r\n      <div class=\"tfm-panel-container\">\r\n        <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n          <h2>Opening Report</h2>\r\n        </div>\r\n        <div class=\"report-filter\" style=\"padding: 10px;\">\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                Select a store item\r\n              </td>\r\n              <td>\r\n                <jqxComboBox #sComboBox (onChange)=\"getOpeningId($event)\" class=\"store_id\" [width]=\"185\" [theme]=\"'energyblue'\" [height]=\"23\"\r\n                  [placeHolder]=\"'Select item'\" [dropDownHeight]=\"100\" [source]=\"storeAdapter\" [displayMember]=\"'name'\" [valueMember]=\"'id'\"\r\n                  [searchMode]=\"'containsignorecase'\">\r\n                </jqxComboBox>\r\n              </td>\r\n              <td>\r\n                <jqxButton style=\"margin-right: 5px;\" (onClick)=\"generateReport(false)\">\r\n                  View Report\r\n                </jqxButton>\r\n              </td>\r\n              <td>\r\n                <jqxButton *ngIf=\"showGenerateReportButton\" style=\"margin-right: 5px;\" (onClick)=\"generateReport(true)\">\r\n                  Generate Report\r\n                </jqxButton>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n          <br>\r\n          <br>\r\n          <!-- <h5 style=\"text-align: center;\" *ngIf=\"reportData.length == 0\">Data not found!</h5> -->\r\n          <div style=\"height: 525px; width: 100%;overflow-y: auto\">\r\n            <table *ngIf=\"showGenerateReportButton && reportData.length\" border=\"1\" style=\"text-align: center;width: 100%\">\r\n              <tr style=\"font-weight: 700;background: #d6d8d2;height: 35px;\">\r\n                <td>Type</td>\r\n                <td>Item</td>\r\n                <td>Qty</td>\r\n                <td>Rate</td>\r\n                <td>Amt</td>\r\n              </tr>\r\n              <tr *ngFor=\"let report of reportData\">\r\n                <td style=\"font-weight: 600;\">{{report.category}}</td>\r\n                <td>{{report.itemName}}</td>\r\n                <td>{{report.quantity ? report.quantity : 0}}</td>\r\n                <td>{{report.rate ? report.rate : 0}}</td>\r\n                <td>{{report.amount ? report.amount : 0}}</td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"false\"\r\n  [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n  <div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/reports/opening-report/opening-report.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/reports/opening-report/opening-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpeningReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
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





var OpeningReportComponent = /** @class */ (function () {
    function OpeningReportComponent(componentFactoryResolver, cus, rs, fes, apiUrl) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cus = cus;
        this.rs = rs;
        this.fes = fes;
        this.userData = {};
        this.reportData = [];
        this.showGenerateReportButton = false;
        this.userData['token'] = this.cus.getTokenData()['token'];
        this.apiUrl = apiUrl;
    }
    OpeningReportComponent.prototype.ngOnInit = function () {
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
                dt['id'] = '0';
                dt['name'] = 'Select All';
                tData.push(dt);
                for (var i = 0; i < data.data.length; i++) {
                    tData.push(data.data[i]);
                }
                return tData;
            }
        });
    };
    OpeningReportComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    OpeningReportComponent.prototype.getOpeningId = function ($event) {
        this.openingId = $event.args.item.originalItem.id;
    };
    OpeningReportComponent.prototype.generateReport = function (generate) {
        var _this = this;
        console.log(this.sComboBox.val());
        if (this.sComboBox.val()) {
            if (!generate) {
                this.showGenerateReportButton = true;
            }
            var post = [];
            if (this.openingId) {
                post['store_id'] = this.openingId;
            }
            post['opening_report'] = true;
            if (generate) {
                post['opening_report_generate'] = true;
            }
            this.jqxLoader.open();
            this.rs.getStoreLedgerReport(post, true ? generate : false).subscribe(function (result) {
                _this.jqxLoader.close();
                if (generate) {
                    _this.fes.SaveFile(result, 'Opening Report');
                }
                else {
                    _this.reportData = [];
                    var itemCount_1 = 0;
                    var openingCount_1 = 0;
                    result.category.forEach(function (resultCategory) {
                        result.items[itemCount_1].forEach(function (resultItems) {
                            result.opening[openingCount_1].forEach(function (openingItems) {
                                var data = {
                                    category: _this.categoryName != resultCategory.name ? resultCategory.name : null,
                                    itemName: resultItems.name,
                                    quantity: openingItems.quantity,
                                    rate: (openingItems.total / openingItems.quantity).toFixed(2),
                                    amount: openingItems.total
                                };
                                _this.reportData.push(data);
                                _this.categoryName = resultCategory.name;
                            });
                            openingCount_1++;
                        });
                        itemCount_1++;
                    });
                }
            }, function (error) {
                console.log(error);
                _this.jqxLoader.close();
            });
        }
        else {
            var messageDiv = document.getElementById('windowMessage');
            messageDiv.innerText = "Please select an item";
            this.winNotification.open();
            this.jqxLoader.close();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object)
    ], OpeningReportComponent.prototype, "quickAccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sComboBox'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _b || Object)
    ], OpeningReportComponent.prototype, "sComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _c || Object)
    ], OpeningReportComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _d || Object)
    ], OpeningReportComponent.prototype, "winNotification", void 0);
    OpeningReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-opening-report',
            template: __webpack_require__("./src/app/layout/reports/opening-report/opening-report.component.html"),
            styles: [__webpack_require__("./src/app/layout/reports/opening-report/opening-report.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["v" /* CurrentUserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* AllReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* AllReportService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["E" /* FileExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["E" /* FileExportService */]) === "function" && _h || Object, String])
    ], OpeningReportComponent);
    return OpeningReportComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=opening-report.component.js.map

/***/ }),

/***/ "./src/app/layout/reports/opening-report/opening-report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpeningReportModule", function() { return OpeningReportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opening_report_routing_module__ = __webpack_require__("./src/app/layout/reports/opening-report/opening-report-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opening_report_component__ = __webpack_require__("./src/app/layout/reports/opening-report/opening-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OpeningReportModule = /** @class */ (function () {
    function OpeningReportModule() {
    }
    OpeningReportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__opening_report_routing_module__["a" /* OpeningReportRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__opening_report_component__["a" /* OpeningReportComponent */]]
        })
    ], OpeningReportModule);
    return OpeningReportModule;
}());

//# sourceMappingURL=opening-report.module.js.map

/***/ })

});
//# sourceMappingURL=opening-report.module.chunk.js.map