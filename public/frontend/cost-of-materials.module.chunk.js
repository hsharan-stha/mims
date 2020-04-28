webpackJsonp(["cost-of-materials.module"],{

/***/ "./src/app/layout/reports/cost-of-materials/cost-of-materials-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CostOfMaterialsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cost_of_materials_component__ = __webpack_require__("./src/app/layout/reports/cost-of-materials/cost-of-materials.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__cost_of_materials_component__["a" /* CostOfMaterialsComponent */]
    }
];
var CostOfMaterialsRoutingModule = /** @class */ (function () {
    function CostOfMaterialsRoutingModule() {
    }
    CostOfMaterialsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], CostOfMaterialsRoutingModule);
    return CostOfMaterialsRoutingModule;
}());

//# sourceMappingURL=cost-of-materials-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/reports/cost-of-materials/cost-of-materials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 tfm-panel-left\">\r\n      <div class=\"tfm-panel-container\">\r\n        <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n          <h2> Quick Access </h2>\r\n        </div>\r\n        <jqxPanel [width]=\"'99.7%'\" [height]=\"'94.2%'\">\r\n          <ng-template #quickAccess></ng-template>\r\n        </jqxPanel>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-10 tfm-panel-right\">\r\n      <div class=\"tfm-panel-container\">\r\n        <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n          <h2>Cost Of Materials</h2>\r\n        </div>\r\n        <div class=\"report-filter\">\r\n          <form name=\"storeLedgerReportForm\">\r\n            <table>\r\n              <tr>\r\n                <td>Local GRN </td>\r\n                <td>\r\n                  <jqxComboBox #grnComboBox [source]=\"grnAdapter\" (onSelect)=\"onSelect($event, '1')\" [width]=\"180\" [displayMember]=\"'grn_no'\"\r\n                    [valueMember]=\"'grn_no'\" [height]=\"23\"></jqxComboBox>\r\n                </td>\r\n                <td>Import GRN</td>\r\n                <td>\r\n                  <jqxComboBox #grnComboBox1 [source]=\"grnAdapter1\" (onSelect)=\"onSelect($event, '2')\" [width]=\"180\" [displayMember]=\"'grn_no'\"\r\n                    [valueMember]=\"'grn_no'\" [height]=\"23\"></jqxComboBox>\r\n                </td>\r\n                <td>\r\n                  <jqxButton style=\"margin-right: 5px;\" (onClick)=\"generateReport()\">\r\n                    Generate Report\r\n                  </jqxButton>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<jqxNotification #msgNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n  [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n  <div id='message'></div>\r\n</jqxNotification>\r\n\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n  [animationOpenDelay]=\"3000\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n  <div id='windowMessage'></div>\r\n</jqxNotification>\r\n\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/reports/cost-of-materials/cost-of-materials.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/reports/cost-of-materials/cost-of-materials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CostOfMaterialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CostOfMaterialsComponent = /** @class */ (function () {
    function CostOfMaterialsComponent(rs, fes, componentFactoryResolver) {
        this.rs = rs;
        this.fes = fes;
        this.componentFactoryResolver = componentFactoryResolver;
        this.grnAdapter = [];
        this.grnAdapter1 = [];
    }
    CostOfMaterialsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createQuickAccess();
        this.rs.getAllGrn({ limit: 'all', local: 'true' }).subscribe(function (response) {
            _this.grnAdapter = response;
        }, function (error) {
            console.log(error);
        });
        this.rs.getAllGrn({ limit: 'all' }).subscribe(function (response) {
            _this.grnAdapter1 = response;
        }, function (error) {
            console.log(error);
        });
    };
    CostOfMaterialsComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    CostOfMaterialsComponent.prototype.generateReport = function () {
        var _this = this;
        var post = {};
        post['grn_no'] = this.grnNo || null;
        if (post['grn_no']) {
            this.jqxLoader.open();
            post['limit'] = 'all';
            post['report'] = true;
            this.rs.getCostOfMaterials(post).subscribe(function (result) {
                console.log(result);
                _this.fes.SaveFile(result, 'Cost of Materials');
                _this.jqxLoader.close();
            }, function (error) {
                _this.jqxLoader.close();
            });
        }
        else {
            var messageDiv = document.getElementById('windowMessage');
            messageDiv.innerHTML = 'Please Select GRN Number First';
            this.winNotification.open();
        }
    };
    CostOfMaterialsComponent.prototype.onSelect = function (event, type) {
        var args = event.args;
        if (args != undefined) {
            if (type == "1") {
                this.grnComboBox1.val('');
                this.grnNo = this.grnComboBox.val();
            }
            else {
                this.grnComboBox.val('');
                this.grnNo = this.grnComboBox1.val();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], CostOfMaterialsComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _b || Object)
    ], CostOfMaterialsComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object)
    ], CostOfMaterialsComponent.prototype, "quickAccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _d || Object)
    ], CostOfMaterialsComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('grnComboBox'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _e || Object)
    ], CostOfMaterialsComponent.prototype, "grnComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('grnComboBox1'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _f || Object)
    ], CostOfMaterialsComponent.prototype, "grnComboBox1", void 0);
    CostOfMaterialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cost-of-materials',
            template: __webpack_require__("./src/app/layout/reports/cost-of-materials/cost-of-materials.component.html"),
            styles: [__webpack_require__("./src/app/layout/reports/cost-of-materials/cost-of-materials.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* AllReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* AllReportService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["E" /* FileExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["E" /* FileExportService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _j || Object])
    ], CostOfMaterialsComponent);
    return CostOfMaterialsComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=cost-of-materials.component.js.map

/***/ }),

/***/ "./src/app/layout/reports/cost-of-materials/cost-of-materials.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostOfMaterialsModule", function() { return CostOfMaterialsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cost_of_materials_component__ = __webpack_require__("./src/app/layout/reports/cost-of-materials/cost-of-materials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cost_of_materials_routing_module__ = __webpack_require__("./src/app/layout/reports/cost-of-materials/cost-of-materials-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CostOfMaterialsModule = /** @class */ (function () {
    function CostOfMaterialsModule() {
    }
    CostOfMaterialsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__cost_of_materials_routing_module__["a" /* CostOfMaterialsRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cost_of_materials_component__["a" /* CostOfMaterialsComponent */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], CostOfMaterialsModule);
    return CostOfMaterialsModule;
}());

//# sourceMappingURL=cost-of-materials.module.js.map

/***/ })

});
//# sourceMappingURL=cost-of-materials.module.chunk.js.map