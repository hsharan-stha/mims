webpackJsonp(["permission.module"],{

/***/ "./src/app/layout/user-master/permission/permission-add/permission-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\">\r\n  <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'label'\">\r\n          \r\n  <form name=\"permissionForm\" [formGroup]=\"permissionForm\">\r\n    <table>\r\n    <tr>\r\n      <td align=\"left\"> Name</td>\r\n      \r\n      <td align=\"Left\">Display Name</td>\r\n      \r\n    </tr>\r\n    <tr>\r\n      <td align=\"left\">\r\n          <jqxInput  class=\"name\" [height]=\"23\" formControlName=\"name\"></jqxInput>\r\n      </td>\r\n      <td align=\"left\">\r\n        <jqxInput  class=\"display_name\" [height]=\"23\" formControlName=\"display_name\"></jqxInput>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td align=\"left\" colspan=\"2\">Description</td>\r\n    </tr>\r\n    <tr>\r\n      <td align=\"left\" colspan=\"2\">\r\n        <jqxInput class=\"description\"  [height]=\"23\" [width]=\"280\" formControlName=\"description\"></jqxInput>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td align=\"left\"></td>\r\n      <td style=\"padding-top: 10px;\" align=\"left\">\r\n\r\n        <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!permissionForm.valid\" (onClick)=\"saveBtn(permissionForm.value)\">\r\n            Save\r\n        </jqxButton>\r\n\r\n        <jqxButton style=\"margin-right: 5px;\" (onClick)=\"cancelBtn()\">\r\n            Cancel\r\n        </jqxButton>\r\n\r\n      </td>\r\n    </tr>\r\n    </table>\r\n  </form>\r\n</jqxValidator>\r\n\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/user-master/permission/permission-add/permission-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/user-master/permission/permission-add/permission-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
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





var PermissionAddComponent = /** @class */ (function () {
    function PermissionAddComponent(fb, perms, apiUrl) {
        this.fb = fb;
        this.perms = perms;
        this.AddedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.rules = [
            { input: '.name', message: 'Name is required !', action: 'keyup, blur', rule: 'required' },
            { input: '.display_name', message: 'Display Name is required!', action: 'keyup, blur', rule: 'required' },
        ];
        this.createForm();
        this.apiUrl = apiUrl;
    }
    PermissionAddComponent.prototype.ngOnInit = function () {
    };
    PermissionAddComponent.prototype.createForm = function () {
        this.permissionForm = this.fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'display_name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'description': [null],
        });
    };
    PermissionAddComponent.prototype.saveBtn = function (post) {
        var _this = this;
        this.jqxLoader.open();
        this.perms.store(post).subscribe(function (result) {
            var data = {
                result: true,
                message: result['message']
            };
            _this.AddedData.emit(data);
            _this.jqxLoader.close();
        }, function (error) {
            var data = {
                result: false,
                message: error['error']['error']['message']
            };
            _this.AddedData.emit(data);
            _this.jqxLoader.close();
        });
    };
    PermissionAddComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], PermissionAddComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], PermissionAddComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PermissionAddComponent.prototype, "AddedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PermissionAddComponent.prototype, "cancelData", void 0);
    PermissionAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission-add',
            template: __webpack_require__("./src/app/layout/user-master/permission/permission-add/permission-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/user-master/permission/permission-add/permission-add.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["V" /* PermissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["V" /* PermissionService */]) === "function" && _d || Object, String])
    ], PermissionAddComponent);
    return PermissionAddComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=permission-add.component.js.map

/***/ }),

/***/ "./src/app/layout/user-master/permission/permission-edit/permission-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\">\r\n  <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'label'\">\r\n          \r\n  <form name=\"permissionForm\" [formGroup]=\"permissionForm\">\r\n    <table>\r\n    <tr>\r\n      <td align=\"left\"> Name</td>\r\n      \r\n      <td align=\"Left\">Display Name</td>\r\n      \r\n    </tr>\r\n    <tr>\r\n      <td align=\"left\">\r\n          <jqxInput  class=\"name\" [height]=\"23\" formControlName=\"name\"></jqxInput>\r\n      </td>\r\n      <td align=\"left\">\r\n        <jqxInput  class=\"display_name\" [height]=\"23\" formControlName=\"display_name\"></jqxInput>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td align=\"left\" colspan=\"2\">Description</td>\r\n    </tr>\r\n    <tr>\r\n      <td align=\"left\" colspan=\"2\">\r\n        <jqxInput class=\"description\" [height]=\"23\" [width]=\"200\" formControlName=\"description\"></jqxInput>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td align=\"left\"></td>\r\n      <td style=\"padding-top: 10px;\" align=\"left\">\r\n\r\n        <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!permissionForm.valid\" (onClick)=\"saveBtn(permissionForm.value)\">\r\n            Update\r\n        </jqxButton>\r\n\r\n        <jqxButton style=\"margin-right: 5px;\" (onClick)=\"cancelBtn()\">\r\n            Cancel\r\n        </jqxButton>\r\n\r\n      </td>\r\n    </tr>\r\n    </table>\r\n  </form>\r\n</jqxValidator>\r\n\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/user-master/permission/permission-edit/permission-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/user-master/permission/permission-edit/permission-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
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





var PermissionEditComponent = /** @class */ (function () {
    function PermissionEditComponent(fb, perms, apiUrl) {
        this.fb = fb;
        this.perms = perms;
        this.UpdatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.rules = [
            { input: '.name', message: 'Name is required !', action: 'keyup, blur', rule: 'required' },
            { input: '.display_name', message: 'Display Name is required!', action: 'keyup, blur', rule: 'required' },
        ];
        this.createForm();
        this.apiUrl = apiUrl;
    }
    PermissionEditComponent.prototype.ngOnInit = function () {
        this.permissionData = new __WEBPACK_IMPORTED_MODULE_2__shared__["U" /* Permission */](this.PermissionEditData);
        this.permissionForm.setValue(this.permissionData);
    };
    PermissionEditComponent.prototype.createForm = function () {
        this.permissionForm = this.fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'display_name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'description': [null],
        });
    };
    PermissionEditComponent.prototype.saveBtn = function (post) {
        var _this = this;
        this.jqxLoader.open();
        this.perms.update(this.PermissionEditData.id, post).subscribe(function (result) {
            var data = {
                result: true,
                message: result['message']
            };
            _this.UpdatedData.emit(data);
            _this.jqxLoader.close();
        }, function (error) {
            var data = {
                result: false,
                message: error['error']['error']['message']
            };
            _this.UpdatedData.emit(data);
            _this.jqxLoader.close();
        });
    };
    PermissionEditComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], PermissionEditComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], PermissionEditComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('PermissionEditData'),
        __metadata("design:type", Object)
    ], PermissionEditComponent.prototype, "PermissionEditData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PermissionEditComponent.prototype, "UpdatedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PermissionEditComponent.prototype, "cancelData", void 0);
    PermissionEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission-edit',
            template: __webpack_require__("./src/app/layout/user-master/permission/permission-edit/permission-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/user-master/permission/permission-edit/permission-edit.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["V" /* PermissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["V" /* PermissionService */]) === "function" && _d || Object, String])
    ], PermissionEditComponent);
    return PermissionEditComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=permission-edit.component.js.map

/***/ }),

/***/ "./src/app/layout/user-master/permission/permission-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_component__ = __webpack_require__("./src/app/layout/user-master/permission/permission.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__permission_component__["a" /* PermissionComponent */],
    }
];
var PermissionRoutingModule = /** @class */ (function () {
    function PermissionRoutingModule() {
    }
    PermissionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], PermissionRoutingModule);
    return PermissionRoutingModule;
}());

//# sourceMappingURL=permission-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/user-master/permission/permission.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\" >\r\n  <div class=\"row\">\r\n      <div class=\"col-md-2 tfm-panel-left\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> Quick Access </h2>\r\n              </div>\r\n               <jqxPanel [width]=\"'99.7%'\" [height]=\"'94.2%'\" >\r\n                    <ng-template #quickAccess></ng-template>\r\n              </jqxPanel> \r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-10 tfm-panel-right\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> Permissions Management </h2>\r\n              </div>\r\n          <jqxPanel #jPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\">\r\n            <jqxGrid #myGrid\r\n              [height]=\"'100%'\" [width]=\"'99.8%'\" [source]=\"dataAdapter\" [columns]=\"columns\"  \r\n              [virtualmode]=\"true\" [pageable]=\"true\" [filterable]=\"true\" [sortable]=\"true\" [theme]=\"'energyblue'\"\r\n              [rendergridrows]=\"rendergridrows\" [selectionmode]=\"'checkbox'\" [showfilterrow]=\"true\" [showtoolbar]=\"true\" [rendertoolbar]=\"rendertoolbar\">\r\n            </jqxGrid>\r\n          </jqxPanel>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<jqxWindow #myWindow [width]=\"400\" [height]=\"230\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n  <div id=\"windowContent\">\r\n    <ng-template #Insert></ng-template>\r\n  </div>\r\n</jqxWindow>\r\n\r\n<jqxNotification #msgNotification\r\n[width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n[autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n<div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n    </jqxLoader>"

/***/ }),

/***/ "./src/app/layout/user-master/permission/permission.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/user-master/permission/permission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__permission_add_permission_add_component__ = __webpack_require__("./src/app/layout/user-master/permission/permission-add/permission-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__permission_edit_permission_edit_component__ = __webpack_require__("./src/app/layout/user-master/permission/permission-edit/permission-edit.component.ts");
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








var PermissionComponent = /** @class */ (function () {
    function PermissionComponent(apiUrl, componentFactoryResolver, vc, perms, cus) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.vc = vc;
        this.perms = perms;
        this.cus = cus;
        this.editrow = -1;
        this.userData = {};
        //Get Data after the server side processing as pagination
        this.rendergridrows = function (params) {
            return params.data;
        };
        this.rendertoolbar = function (toolbar) {
            var container = document.createElement('div');
            container.style.margin = '5px';
            var buttonContainer1 = document.createElement('div');
            var buttonContainer2 = document.createElement('div');
            var buttonContainer3 = document.createElement('div');
            buttonContainer1.id = 'buttonContainer1';
            buttonContainer2.id = 'buttonContainer2';
            buttonContainer3.id = 'buttonContainer3';
            buttonContainer1.style.cssText = 'float: left';
            buttonContainer2.style.cssText = 'float: left; margin-left: 5px';
            buttonContainer3.style.cssText = 'float: left; margin-left: 5px';
            container.appendChild(buttonContainer1);
            container.appendChild(buttonContainer3);
            container.appendChild(buttonContainer2);
            toolbar[0].appendChild(container);
            var addRowButton = jqwidgets.createInstance('#buttonContainer1', 'jqxButton', { width: 105, value: 'Add New Row', theme: 'energyblue' });
            var deleteRowButton = jqwidgets.createInstance('#buttonContainer3', 'jqxButton', { width: 150, value: 'Delete Selected Row', theme: 'energyblue' });
            var reloadGridButton = jqwidgets.createInstance('#buttonContainer2', 'jqxButton', { width: 80, value: '<i class="fa fa-refresh fa-fw"></i> Reload', theme: 'energyblue' });
            addRowButton.addEventHandler('click', function () {
                // this.myWindow.position({ x: '45%', y: '13%' });
                _this.myWindow.draggable(true);
                _this.myWindow.title('Add Permission');
                _this.myWindow.open();
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__permission_add_permission_add_component__["a" /* PermissionAddComponent */]);
                _this.Insert.clear();
                var dynamic_Component = _this.Insert.createComponent(componentFactory);
                dynamic_Component.instance.AddedData.subscribe(function (result) {
                    if (result.result == true) {
                        var messageDiv = document.getElementById('message');
                        messageDiv.innerText = result['message'];
                        _this.msgNotification.open();
                        _this.myWindow.hide();
                        _this.myGrid.updatebounddata('cells');
                        dynamic_Component.destroy();
                    }
                    else {
                        var messageDiv = document.getElementById('message');
                        messageDiv.innerText = result['message'];
                        _this.msgNotification.open();
                    }
                });
                dynamic_Component.instance.cancelData.subscribe(function (result) {
                    if (result == true) {
                        _this.myWindow.hide();
                        dynamic_Component.destroy();
                    }
                });
            });
            deleteRowButton.addEventHandler('click', function () {
                var id = _this.myGrid.getselectedrowindexes();
                var ids = [];
                var rowscount = _this.myGrid.getdatainformation().rowscount;
                for (var i = 0; i < id.length; i++) {
                    var dataRecord = _this.myGrid.getrowdata(Number(id[i]));
                    ids.push(dataRecord.id);
                }
                if (ids.length > 0 && ids.length <= parseFloat(rowscount)) {
                    if (confirm("Are you sure? You Want to delete")) {
                        // let id = this.myGrid.getrowid(selectedrowindex);
                        _this.jqxLoader.open();
                        _this.perms.destroy('[' + ids + ']').subscribe(function (data) {
                            var messageDiv = document.getElementById('message');
                            messageDiv.innerText = data['message'];
                            _this.msgNotification.open();
                            _this.jqxLoader.close();
                            _this.myGrid.updatebounddata('cells');
                        });
                    }
                }
                else {
                    var messageDiv = document.getElementById('message');
                    messageDiv.innerText = 'Please select some item to delete';
                    _this.msgNotification.open();
                }
            });
            reloadGridButton.addEventHandler('click', function () {
                _this.myGrid.updatebounddata('cells');
            });
        }; //render toolbar ends
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.getTable();
    }
    PermissionComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
    };
    PermissionComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    PermissionComponent.prototype.getTable = function () {
        var _this = this;
        var myUrl = this.apiUrl + 'permission';
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'string' },
                    { name: 'name', type: 'string' },
                    { name: 'display_name', type: 'string' },
                    { name: 'description', type: 'string' },
                ],
                id: 'id',
                url: myUrl,
                data: this.userData,
                filter: function () {
                    // update the grid and send a request to the server.
                    _this.myGrid.updatebounddata('filter');
                },
                sort: function () {
                    // update the grid and send a request to the server.
                    _this.myGrid.updatebounddata('sort');
                },
                beforeprocessing: function (data) {
                }
            };
        this.dataAdapter = new jqx.dataAdapter(this.source, {
            formatData: function (data) {
                data['page'] = data['pagenum'] + 1;
                data['limit'] = data['pagesize'];
                return data;
            },
            downloadComplete: function (data, status, xhr) {
                _this.source.totalrecords = data.data.total;
                var tableData = data.data.data;
                return tableData;
            }
        });
        this.columns = [
            {
                text: 'S.N', sortable: false, filterable: false, editable: false,
                groupable: false, draggable: false, resizable: false,
                datafield: 'id', columntype: 'number', width: 50,
                cellsrenderer: function (row, column, value) {
                    return "<div style='margin:4px;'>" + (value + 1) + "</div>";
                }
            },
            { text: 'Name ', datafield: 'name', filterable: false, sortable: false, width: '250' },
            { text: 'Display Name', datafield: 'display_name', columntype: 'textbox', filtercondition: 'starts_with' },
            { text: 'Description', datafield: 'description', filterable: false, sortable: false },
            {
                text: 'Edit', datafield: 'Edit', sortable: false, filterable: false, width: 85, columntype: 'button',
                cellsrenderer: function () {
                    return 'Edit';
                },
                buttonclick: function (row) {
                    _this.editrow = row;
                    var dataRecord = _this.myGrid.getrowdata(_this.editrow);
                    // this.myWindow.position({ x: '45%', y: '13%' });
                    _this.myWindow.draggable(true);
                    _this.myWindow.title('Edit Permission');
                    _this.myWindow.open();
                    var component_factory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_7__permission_edit_permission_edit_component__["a" /* PermissionEditComponent */]);
                    _this.Insert.clear();
                    var dynamic_Component = _this.Insert.createComponent(component_factory);
                    dynamic_Component.instance.PermissionEditData = dataRecord;
                    dynamic_Component.instance.UpdatedData.subscribe(function (result) {
                        if (result.result == true) {
                            var messageDiv = document.getElementById('message');
                            messageDiv.innerText = result['message'];
                            _this.msgNotification.open();
                            _this.myWindow.hide();
                            _this.myGrid.updatebounddata('cells');
                            dynamic_Component.destroy();
                            //this.Insert.destroyComponent(componentFactory);
                        }
                        else {
                            var messageDiv = document.getElementById('message');
                            messageDiv.innerText = result['message'];
                            _this.msgNotification.open();
                        }
                    });
                    dynamic_Component.instance.cancelData.subscribe(function (result) {
                        if (result == true) {
                            _this.myWindow.hide();
                            dynamic_Component.destroy();
                        }
                    });
                }
            }
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], PermissionComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jPanel'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], PermissionComponent.prototype, "jPanel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _c || Object)
    ], PermissionComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _d || Object)
    ], PermissionComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Insert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object)
    ], PermissionComponent.prototype, "Insert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _f || Object)
    ], PermissionComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object)
    ], PermissionComponent.prototype, "quickAccess", void 0);
    PermissionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission',
            template: __webpack_require__("./src/app/layout/user-master/permission/permission.component.html"),
            styles: [__webpack_require__("./src/app/layout/user-master/permission/permission.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [String, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["V" /* PermissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["V" /* PermissionService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */]) === "function" && _l || Object])
    ], PermissionComponent);
    return PermissionComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=permission.component.js.map

/***/ }),

/***/ "./src/app/layout/user-master/permission/permission.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionModule", function() { return PermissionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_component__ = __webpack_require__("./src/app/layout/user-master/permission/permission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__permission_routing_module__ = __webpack_require__("./src/app/layout/user-master/permission/permission-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__permission_add_permission_add_component__ = __webpack_require__("./src/app/layout/user-master/permission/permission-add/permission-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__permission_edit_permission_edit_component__ = __webpack_require__("./src/app/layout/user-master/permission/permission-edit/permission-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PermissionModule = /** @class */ (function () {
    function PermissionModule() {
    }
    PermissionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__permission_routing_module__["a" /* PermissionRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__permission_component__["a" /* PermissionComponent */], __WEBPACK_IMPORTED_MODULE_5__permission_add_permission_add_component__["a" /* PermissionAddComponent */], __WEBPACK_IMPORTED_MODULE_6__permission_edit_permission_edit_component__["a" /* PermissionEditComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__permission_add_permission_add_component__["a" /* PermissionAddComponent */], __WEBPACK_IMPORTED_MODULE_6__permission_edit_permission_edit_component__["a" /* PermissionEditComponent */]]
        })
    ], PermissionModule);
    return PermissionModule;
}());

//# sourceMappingURL=permission.module.js.map

/***/ })

});
//# sourceMappingURL=permission.module.chunk.js.map