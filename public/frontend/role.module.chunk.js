webpackJsonp(["role.module"],{

/***/ "./src/app/layout/user-master/role/role-add/role-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\">\r\n  <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'label'\">\r\n          \r\n  <form name=\"roleForm\" [formGroup]=\"roleForm\">\r\n    <table>\r\n    <tr>\r\n      <td align=\"left\"> Name</td>\r\n      \r\n      <td align=\"left\"> \r\n        Permissions\r\n        <jqxButton style=\"margin-right: 5px;\" (onClick)=\"checkAll()\">\r\n            Check All\r\n        </jqxButton>\r\n        <jqxButton style=\"margin-right: 5px;\" (onClick)=\"unCheckAll()\">\r\n            Uncheck All\r\n        </jqxButton>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td align=\"left\">\r\n          <jqxInput  class=\"name\" [height]=\"23\" formControlName=\"name\"></jqxInput>\r\n      </td>\r\n      <td rowspan=\"6\">\r\n          <jqxListBox #permsListBox\r\n          [filterable]=\"true\"\r\n          [selectedIndex]=\"0\"\r\n          [multiple]=\"true\"\r\n          [source]=\"permissionAdapter\"\r\n          [filterPlaceHolder]=\"'Select Permissions...'\"\r\n          [displayMember]=\"'display_name'\"\r\n          [checkboxes]=\"true\"\r\n          [valueMember]=\"'id'\"\r\n          [width]=\"250\"\r\n          [height]=\"240\"\r\n          [searchMode]=\"'containsignorecase'\"\r\n          [incrementalSearch]=\"false\"\r\n          [theme]=\"'energyblue'\">\r\n          </jqxListBox>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td align=\"left\"> Display Name</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n        <td align=\"left\">\r\n            <jqxInput  class=\"display_name\" [height]=\"23\" formControlName=\"display_name\"></jqxInput>\r\n        </td>\r\n        <td></td>\r\n    </tr>\r\n    <tr>\r\n        <td align=\"left\">Description</td>\r\n        <td></td>\r\n    </tr>\r\n    <tr>\r\n      <td align=\"left\">\r\n        <jqxInput class=\"description\"  [height]=\"23\" formControlName=\"description\"></jqxInput>\r\n      </td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <td align=\"left\">\r\n          <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!roleForm.valid\" (onClick)=\"saveBtn(roleForm.value)\">\r\n              Save\r\n          </jqxButton>\r\n  \r\n          <jqxButton style=\"margin-right: 5px;\" (onClick)=\"cancelBtn()\">\r\n              Cancel\r\n          </jqxButton>\r\n      </td>\r\n      <td align=\"left\">\r\n      </td>\r\n    </tr>\r\n    </table>\r\n  </form>\r\n</jqxValidator>\r\n\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/user-master/role/role-add/role-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/user-master/role/role-add/role-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxlistbox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxlistbox.ts");
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






var RoleAddComponent = /** @class */ (function () {
    function RoleAddComponent(fb, rols, apiUrl, cus) {
        this.fb = fb;
        this.rols = rols;
        this.cus = cus;
        this.AddedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userData = {};
        this.rules = [
            { input: '.name', message: 'Name is required !', action: 'keyup, blur', rule: 'required' },
            { input: '.display_name', message: 'Display Name is required!', action: 'keyup, blur', rule: 'required' },
        ];
        this.createForm();
        this.userData = this.cus.getTokenData();
        this.apiUrl = apiUrl;
    }
    RoleAddComponent.prototype.ngOnInit = function () {
        this.createPermissionSource();
    };
    RoleAddComponent.prototype.createForm = function () {
        this.roleForm = this.fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'display_name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'description': [null],
        });
    };
    RoleAddComponent.prototype.createPermissionSource = function () {
        var url = this.apiUrl + 'permission?limit=all';
        // prepare the data
        this.permissionSource = {
            datatype: "json",
            datafields: [
                { name: 'id' },
                { name: 'display_name' }
            ],
            id: 'id',
            url: url,
            data: this.userData
        };
        this.permissionAdapter = new jqx.dataAdapter(this.permissionSource, {
            downloadComplete: function (data, status, xhr) {
                console.log(data);
                // this.permissionSource.totalrecords = data.data.total;
                var tableData = data.data.data;
                return tableData;
            },
            loadComplete: function () {
                // this.selectItems();
            }
        });
    };
    RoleAddComponent.prototype.selectItems = function () {
        // console.log('Inside Select Items Function');
        // this.permsListBox.checkItem(2);
    };
    RoleAddComponent.prototype.checkAll = function () {
        this.permsListBox.checkAll();
    };
    RoleAddComponent.prototype.unCheckAll = function () {
        this.permsListBox.uncheckAll();
    };
    RoleAddComponent.prototype.saveBtn = function (post) {
        var _this = this;
        var permsList = this.permsListBox.getCheckedItems();
        post['permission_id'] = [];
        for (var i = 0; i < permsList.length; i++) {
            post['permission_id'].push(permsList[i].value);
        }
        console.log(permsList);
        this.jqxLoader.open();
        this.rols.store(post).subscribe(function (result) {
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
    RoleAddComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], RoleAddComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], RoleAddComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('permsListBox'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxlistbox__["a" /* jqxListBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxlistbox__["a" /* jqxListBoxComponent */]) === "function" && _c || Object)
    ], RoleAddComponent.prototype, "permsListBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], RoleAddComponent.prototype, "AddedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], RoleAddComponent.prototype, "cancelData", void 0);
    RoleAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-role-add',
            template: __webpack_require__("./src/app/layout/user-master/role/role-add/role-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/user-master/role/role-add/role-add.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_7" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_7" /* RoleService */]) === "function" && _e || Object, String, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _f || Object])
    ], RoleAddComponent);
    return RoleAddComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=role-add.component.js.map

/***/ }),

/***/ "./src/app/layout/user-master/role/role-edit/role-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\">\r\n    <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'label'\">\r\n            \r\n    <form name=\"roleForm\" [formGroup]=\"roleForm\">\r\n      <table>\r\n      <tr>\r\n        <td align=\"left\"> Name</td>\r\n        \r\n        <td align=\"left\"> \r\n            Permissions\r\n            <jqxButton style=\"margin-right: 5px;\" (onClick)=\"checkAll()\">\r\n                    Check All\r\n            </jqxButton>\r\n            <jqxButton style=\"margin-right: 5px;\" (onClick)=\"unCheckAll()\">\r\n                Uncheck All\r\n            </jqxButton>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td align=\"left\">\r\n            <jqxInput  class=\"name\" [height]=\"23\" formControlName=\"name\"></jqxInput>\r\n        </td>\r\n        <td rowspan=\"6\">\r\n            <jqxListBox #permsListBox\r\n            [filterable]=\"true\"\r\n            [selectedIndex]=\"0\"\r\n            [multiple]=\"true\"\r\n            [source]=\"permissionAdapter\"\r\n            [filterPlaceHolder]=\"'Select Permissions...'\"\r\n            [displayMember]=\"'display_name'\"\r\n            [checkboxes]=\"true\"\r\n            [valueMember]=\"'id'\"\r\n            [width]=\"250\"\r\n            [height]=\"240\"\r\n            [searchMode]=\"'containsignorecase'\"\r\n            [incrementalSearch]=\"false\"\r\n            [theme]=\"'energyblue'\">\r\n            </jqxListBox>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td align=\"left\"> Display Name</td>\r\n        <td></td>\r\n      </tr>\r\n      <tr>\r\n          <td align=\"left\">\r\n              <jqxInput  class=\"display_name\" [height]=\"23\" formControlName=\"display_name\"></jqxInput>\r\n          </td>\r\n          <td></td>\r\n      </tr>\r\n      <tr>\r\n          <td align=\"left\">Description</td>\r\n          <td></td>\r\n      </tr>\r\n      <tr>\r\n        <td align=\"left\">\r\n          <jqxInput class=\"description\"  [height]=\"23\" formControlName=\"description\"></jqxInput>\r\n        </td>\r\n        <td></td>\r\n      </tr>\r\n      <tr>\r\n        <td align=\"left\">\r\n            <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!roleForm.valid\" (onClick)=\"saveBtn(roleForm.value)\">\r\n                Update\r\n            </jqxButton>\r\n    \r\n            <jqxButton style=\"margin-right: 5px;\" (onClick)=\"cancelBtn()\">\r\n                Cancel\r\n            </jqxButton>\r\n        </td>\r\n        <td align=\"left\">\r\n        </td>\r\n      </tr>\r\n      </table>\r\n    </form>\r\n  </jqxValidator>\r\n  \r\n  </div>\r\n  <jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n  </jqxLoader>"

/***/ }),

/***/ "./src/app/layout/user-master/role/role-edit/role-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/user-master/role/role-edit/role-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxlistbox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxlistbox.ts");
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






var RoleEditComponent = /** @class */ (function () {
    function RoleEditComponent(fb, rols, apiUrl, cdr, cus) {
        this.fb = fb;
        this.rols = rols;
        this.cdr = cdr;
        this.cus = cus;
        this.UpdatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userData = {};
        this.rules = [
            { input: '.name', message: 'Name is required !', action: 'keyup, blur', rule: 'required' },
            { input: '.display_name', message: 'Display Name is required!', action: 'keyup, blur', rule: 'required' },
        ];
        this.createForm();
        this.userData = this.cus.getTokenData();
        this.apiUrl = apiUrl;
    }
    RoleEditComponent.prototype.ngOnInit = function () {
        this.createPermissionSource();
        var roleFormData = new __WEBPACK_IMPORTED_MODULE_2__shared__["_6" /* Role */](this.RoleEditData);
        this.roleForm.setValue(roleFormData);
    };
    RoleEditComponent.prototype.createForm = function () {
        this.roleForm = this.fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'display_name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'description': [null],
        });
    };
    RoleEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.jqxLoader.open();
        this.rols.show(this.RoleEditData.id).subscribe(function (result) {
            var roleData = result['data'];
            _this.selectItems(roleData['perms']);
            _this.jqxLoader.close();
        }, function (error) {
            console.log(error);
            _this.jqxLoader.close();
        });
        this.cdr.detectChanges();
    };
    RoleEditComponent.prototype.createPermissionSource = function () {
        var url = this.apiUrl + 'permission?limit=all';
        // prepare the data
        this.permissionSource = {
            datatype: "json",
            datafields: [
                { name: 'id' },
                { name: 'display_name' }
            ],
            id: 'id',
            url: url,
            data: this.userData
        };
        this.permissionAdapter = new jqx.dataAdapter(this.permissionSource, {
            downloadComplete: function (data, status, xhr) {
                console.log(data);
                // this.permissionSource.totalrecords = data.data.total;
                var tableData = data.data.data;
                return tableData;
            },
            loadComplete: function () {
                // this.selectItems();
            }
        });
    };
    RoleEditComponent.prototype.selectItems = function (perms) {
        if (perms.length > 0) {
            for (var i = 0; i < perms.length; i++) {
                this.permsListBox.checkItem(perms[i].id);
            }
        }
    };
    RoleEditComponent.prototype.saveBtn = function (post) {
        var _this = this;
        var permsList = this.permsListBox.getCheckedItems();
        post['permission_id'] = [];
        for (var i = 0; i < permsList.length; i++) {
            post['permission_id'].push(permsList[i].value);
        }
        console.log(permsList);
        this.jqxLoader.open();
        this.rols.update(this.RoleEditData.id, post).subscribe(function (result) {
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
    RoleEditComponent.prototype.checkAll = function () {
        this.permsListBox.checkAll();
    };
    RoleEditComponent.prototype.unCheckAll = function () {
        this.permsListBox.uncheckAll();
    };
    RoleEditComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], RoleEditComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], RoleEditComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('permsListBox'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxlistbox__["a" /* jqxListBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxlistbox__["a" /* jqxListBoxComponent */]) === "function" && _c || Object)
    ], RoleEditComponent.prototype, "permsListBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('RoleEditData'),
        __metadata("design:type", Object)
    ], RoleEditComponent.prototype, "RoleEditData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], RoleEditComponent.prototype, "UpdatedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], RoleEditComponent.prototype, "cancelData", void 0);
    RoleEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-role-edit',
            template: __webpack_require__("./src/app/layout/user-master/role/role-edit/role-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/user-master/role/role-edit/role-edit.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_7" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_7" /* RoleService */]) === "function" && _e || Object, String, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _g || Object])
    ], RoleEditComponent);
    return RoleEditComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=role-edit.component.js.map

/***/ }),

/***/ "./src/app/layout/user-master/role/role-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role_component__ = __webpack_require__("./src/app/layout/user-master/role/role.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__role_component__["a" /* RoleComponent */],
    }
];
var RoleRoutingModule = /** @class */ (function () {
    function RoleRoutingModule() {
    }
    RoleRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], RoleRoutingModule);
    return RoleRoutingModule;
}());

//# sourceMappingURL=role-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/user-master/role/role.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-2 tfm-panel-left\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> Quick Access </h2>\r\n              </div>\r\n               <jqxPanel [width]=\"'99.7%'\" [height]=\"'94.2%'\" >\r\n                    <ng-template #quickAccess></ng-template>\r\n              </jqxPanel> \r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-10 tfm-panel-right\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> Roles Management </h2>\r\n              </div>\r\n          <jqxPanel #jPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\">\r\n            <jqxGrid #myGrid\r\n              [height]=\"'100%'\" [width]=\"'99.8%'\" [source]=\"dataAdapter\" [columns]=\"columns\"  \r\n              [virtualmode]=\"true\" [pageable]=\"true\" [filterable]=\"true\" [sortable]=\"true\" [theme]=\"'energyblue'\"\r\n              [rendergridrows]=\"rendergridrows\" [selectionmode]=\"'checkbox'\" [showfilterrow]=\"true\" [showtoolbar]=\"true\" [rendertoolbar]=\"rendertoolbar\">\r\n            </jqxGrid>\r\n          </jqxPanel>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<jqxWindow #myWindow [width]=\"520\" [height]=\"360\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n  <div id=\"windowContent\">\r\n    <ng-template #Insert></ng-template>\r\n  </div>\r\n</jqxWindow>\r\n\r\n<jqxNotification #msgNotification\r\n[width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n[autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n<div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n    </jqxLoader>"

/***/ }),

/***/ "./src/app/layout/user-master/role/role.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/user-master/role/role.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__role_add_role_add_component__ = __webpack_require__("./src/app/layout/user-master/role/role-add/role-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__role_edit_role_edit_component__ = __webpack_require__("./src/app/layout/user-master/role/role-edit/role-edit.component.ts");
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








var RoleComponent = /** @class */ (function () {
    function RoleComponent(apiUrl, componentFactoryResolver, vc, rols, cus) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.vc = vc;
        this.rols = rols;
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
                _this.myWindow.title('Add Role');
                _this.myWindow.open();
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__role_add_role_add_component__["a" /* RoleAddComponent */]);
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
                        _this.rols.destroy('[' + ids + ']').subscribe(function (data) {
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
    RoleComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
    };
    RoleComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    RoleComponent.prototype.getTable = function () {
        var _this = this;
        var myUrl = this.apiUrl + 'role';
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
            { text: 'Name ', datafield: 'name', filterable: false, sortable: false },
            { text: 'Display Name', datafield: 'display_name', columntype: 'textbox', filtercondition: 'starts_with' },
            { text: 'Description', datafield: 'description', filterable: false, sortable: false },
            {
                text: 'Edit', datafield: 'Edit', sortable: false, filterable: false, width: 75, columntype: 'button',
                cellsrenderer: function () {
                    return 'Edit';
                },
                buttonclick: function (row) {
                    _this.editrow = row;
                    var dataRecord = _this.myGrid.getrowdata(_this.editrow);
                    // this.myWindow.position({ x: '45%', y: '13%' });
                    _this.myWindow.draggable(true);
                    _this.myWindow.title('Edit Role');
                    _this.myWindow.open();
                    var component_factory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_7__role_edit_role_edit_component__["a" /* RoleEditComponent */]);
                    _this.Insert.clear();
                    var dynamic_Component = _this.Insert.createComponent(component_factory);
                    dynamic_Component.instance.RoleEditData = dataRecord;
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
    ], RoleComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jPanel'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], RoleComponent.prototype, "jPanel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _c || Object)
    ], RoleComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _d || Object)
    ], RoleComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _e || Object)
    ], RoleComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Insert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object)
    ], RoleComponent.prototype, "Insert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object)
    ], RoleComponent.prototype, "quickAccess", void 0);
    RoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-role',
            template: __webpack_require__("./src/app/layout/user-master/role/role.component.html"),
            styles: [__webpack_require__("./src/app/layout/user-master/role/role.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [String, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["_7" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["_7" /* RoleService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */]) === "function" && _l || Object])
    ], RoleComponent);
    return RoleComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=role.component.js.map

/***/ }),

/***/ "./src/app/layout/user-master/role/role.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModule", function() { return RoleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role_component__ = __webpack_require__("./src/app/layout/user-master/role/role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__role_routing_module__ = __webpack_require__("./src/app/layout/user-master/role/role-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__role_add_role_add_component__ = __webpack_require__("./src/app/layout/user-master/role/role-add/role-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__role_edit_role_edit_component__ = __webpack_require__("./src/app/layout/user-master/role/role-edit/role-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RoleModule = /** @class */ (function () {
    function RoleModule() {
    }
    RoleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__role_routing_module__["a" /* RoleRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__role_component__["a" /* RoleComponent */], __WEBPACK_IMPORTED_MODULE_5__role_add_role_add_component__["a" /* RoleAddComponent */], __WEBPACK_IMPORTED_MODULE_6__role_edit_role_edit_component__["a" /* RoleEditComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__role_add_role_add_component__["a" /* RoleAddComponent */], __WEBPACK_IMPORTED_MODULE_6__role_edit_role_edit_component__["a" /* RoleEditComponent */]]
        })
    ], RoleModule);
    return RoleModule;
}());

//# sourceMappingURL=role.module.js.map

/***/ })

});
//# sourceMappingURL=role.module.chunk.js.map