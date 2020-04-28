webpackJsonp(["user.module"],{

/***/ "./src/app/layout/user-master/user/user-add/user-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\">\r\n  <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n    <form name=\"userForm\" [formGroup]=\"userForm\" id=\"userForm\">\r\n      <fieldset>\r\n        <legend>Credentials Details</legend>\r\n        <table class=\"table-w-tooltip\">\r\n          <tr>\r\n            <td>Username *</td>\r\n            <td>\r\n              <jqxInput class=\"username\" [height]=\"23\" formControlName=\"username\"></jqxInput>\r\n            </td>\r\n            <td>Email *</td>\r\n            <td>\r\n              <jqxInput class=\"email\" [height]=\"23\" formControlName=\"email\"></jqxInput>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Password *</td>\r\n            <td>\r\n              <jqxPasswordInput #passwordInput class=\"password\" [height]=\"23\" formControlName=\"password\"></jqxPasswordInput>\r\n            </td>\r\n            <td>Confirm Password *</td>\r\n            <td>\r\n              <jqxPasswordInput #confirmPasswordInput class=\"password_confirmation\" [height]=\"23\" formControlName=\"password_confirmation\"></jqxPasswordInput>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </fieldset>\r\n\r\n      <fieldset>\r\n        <legend>Roles Selection</legend>\r\n        <table class=\"table-w-tooltip\">\r\n          <tr>\r\n            <td> Role</td>\r\n            <td>\r\n              <jqxComboBox #roleCombo class=\"role\" [width]=\"185\" [height]=\"23\" [source]=\"roleAdapter\" [displayMember]=\"'display_name'\"\r\n                [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n              </jqxComboBox>\r\n              <!-- <jqxInput  class=\"display_name\" [height]=\"23\" formControlName=\"display_name\"></jqxInput> -->\r\n            </td>\r\n            <td> Estates</td>\r\n            <td style=\"width:200px;overflow: hidden;height: 200px;\">\r\n              <jqxListBox #estateListBox [filterable]=\"true\" [selectedIndex]=\"0\" [multiple]=\"true\" [source]=\"estateAdapter\" [filterPlaceHolder]=\"'Search estate...'\"\r\n                [displayMember]=\"'name'\" [checkboxes]=\"true\" [valueMember]=\"'id'\" [width]=\"'100%'\" [height]=\"200\"\r\n                [theme]=\"'energyblue'\" [searchMode]=\"'containsignorecase'\">\r\n              </jqxListBox>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </fieldset>\r\n    </form>\r\n  </jqxValidator>\r\n</div>\r\n<div style=\"padding-top: 10px;text-align:right;\">\r\n  <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!userForm.valid\" (onClick)=\"saveBtn(userForm.value)\">\r\n    Save\r\n  </jqxButton>\r\n\r\n  <jqxButton style=\"margin-right: 5px;\" (onClick)=\"cancelBtn()\">\r\n    Cancel\r\n  </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/user-master/user/user-add/user-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/user-master/user/user-add/user-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxlistbox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxlistbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxpasswordinput__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxpasswordinput.ts");
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








var UserAddComponent = /** @class */ (function () {
    function UserAddComponent(fb, usrs, apiUrl, cus) {
        var _this = this;
        this.fb = fb;
        this.usrs = usrs;
        this.cus = cus;
        this.AddedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userData = {};
        this.rules = [
            { input: '.username', message: 'Username is required !', action: 'keyup, blur', rule: 'required' },
            { input: '.email', message: 'Email is required !', action: 'keyup, blur', rule: 'required' },
            { input: '.password', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
            { input: '.password_confirmation', message: 'Confirm Password is required!', action: 'keyup, blur', rule: 'required' },
            {
                input: '.password_confirmation', message: 'Passwords doesn\'t match!', action: 'keyup, focus',
                rule: function (input, commit) {
                    if (_this.passwordInput.val() === _this.confirmPasswordInput.val()) {
                        return true;
                    }
                    return false;
                }
            },
            {
                input: '.role', message: 'Role is required!', action: 'keyup, focus', rule: function (input, commit) {
                    var data = _this.roleCombo.val();
                    var result = (data) ? true : false;
                    return result;
                }
            }
        ];
        this.createForm();
        this.userData = this.cus.getTokenData();
        this.apiUrl = apiUrl;
    }
    UserAddComponent.prototype.ngOnInit = function () {
        this.roleSource =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'display_name' },
                ],
                data: this.userData,
                async: false,
                url: this.apiUrl + 'role?limit=all',
            };
        this.roleAdapter = new jqx.dataAdapter(this.roleSource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                // console.log(data);  
                return tData;
            }
        });
        this.estateSource =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                async: false,
                url: this.apiUrl + 'estate?limit=all',
            };
        this.estateAdapter = new jqx.dataAdapter(this.estateSource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                // console.log(data);  
                return tData;
            }
        });
    };
    UserAddComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'password_confirmation': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    };
    UserAddComponent.prototype.saveBtn = function (post) {
        var _this = this;
        this.myValidator.validate(document.getElementById('userForm'));
        var estateList = this.estateListBox.getCheckedItems();
        post['estate_id'] = [];
        for (var i = 0; i < estateList.length; i++) {
            post['estate_id'].push(String(estateList[i].value));
        }
        post['role_id'] = this.roleCombo.val();
        if (post['role_id'] && post['estate_id']) {
            this.jqxLoader.open();
            this.usrs.store(post).subscribe(function (result) {
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
        }
    };
    UserAddComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], UserAddComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], UserAddComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('roleCombo'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], UserAddComponent.prototype, "roleCombo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('estateListBox'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxlistbox__["a" /* jqxListBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxlistbox__["a" /* jqxListBoxComponent */]) === "function" && _d || Object)
    ], UserAddComponent.prototype, "estateListBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('passwordInput'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxpasswordinput__["a" /* jqxPasswordInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxpasswordinput__["a" /* jqxPasswordInputComponent */]) === "function" && _e || Object)
    ], UserAddComponent.prototype, "passwordInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('confirmPasswordInput'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxpasswordinput__["a" /* jqxPasswordInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxpasswordinput__["a" /* jqxPasswordInputComponent */]) === "function" && _f || Object)
    ], UserAddComponent.prototype, "confirmPasswordInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserAddComponent.prototype, "AddedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserAddComponent.prototype, "cancelData", void 0);
    UserAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-add',
            template: __webpack_require__("./src/app/layout/user-master/user/user-add/user-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/user-master/user/user-add/user-add.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_21" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_21" /* UserService */]) === "function" && _h || Object, String, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _j || Object])
    ], UserAddComponent);
    return UserAddComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=user-add.component.js.map

/***/ }),

/***/ "./src/app/layout/user-master/user/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\">\r\n  <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n    <form name=\"userForm\" [formGroup]=\"userForm\" id=\"userForm\">\r\n      <fieldset>\r\n        <legend>Credentials Details</legend>\r\n        <table class=\"table-w-tooltip\">\r\n          <tr>\r\n            <td>Username *</td>\r\n            <td>\r\n              <jqxInput class=\"username\" [height]=\"23\" formControlName=\"username\"></jqxInput>\r\n            </td>\r\n            <td>Email *</td>\r\n            <td>\r\n              <jqxInput class=\"email\" [height]=\"23\" formControlName=\"email\"></jqxInput>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Password *</td>\r\n            <td>\r\n              <jqxPasswordInput #passwordInput class=\"password\" [height]=\"23\" formControlName=\"password\"></jqxPasswordInput>\r\n            </td>\r\n            <td>Confirm Password *</td>\r\n            <td>\r\n              <jqxPasswordInput #confirmPasswordInput class=\"password_confirmation\" [height]=\"23\" formControlName=\"password_confirmation\"></jqxPasswordInput>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </fieldset>\r\n      <fieldset>\r\n        <legend>Roles Selection</legend>\r\n        <table class=\"table-w-tooltip\">\r\n          <tr>\r\n            <td> Role</td>\r\n            <td>\r\n              <jqxComboBox #roleCombo class=\"role\" [width]=\"185\" [height]=\"23\" [source]=\"roleAdapter\" [displayMember]=\"'display_name'\"\r\n                [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n              </jqxComboBox>\r\n              <!-- <jqxInput  class=\"display_name\" [height]=\"23\" formControlName=\"display_name\"></jqxInput> -->\r\n            </td>\r\n            <td> Estates</td>\r\n            <td style=\"width:200px;overflow: hidden;height: 200px;\">\r\n              <jqxListBox #estateListBox [filterable]=\"true\" [selectedIndex]=\"0\" [multiple]=\"true\" [source]=\"estateAdapter\" [filterPlaceHolder]=\"'Search estate...'\"\r\n                [displayMember]=\"'name'\" [checkboxes]=\"true\" [valueMember]=\"'id'\" [width]=\"'100%'\" [height]=\"200\" [theme]=\"'energyblue'\"\r\n                [searchMode]=\"'containsignorecase'\">\r\n              </jqxListBox>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </fieldset>\r\n    </form>\r\n  </jqxValidator>\r\n</div>\r\n\r\n<div style=\"padding-top: 10px;text-align:right;\">\r\n  <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!userForm.valid\" (onClick)=\"saveBtn(userForm.value)\">\r\n    Save\r\n  </jqxButton>\r\n\r\n  <jqxButton style=\"margin-right: 5px;\" (onClick)=\"cancelBtn()\">\r\n    Cancel\r\n  </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/user-master/user/user-edit/user-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/user-master/user/user-edit/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxlistbox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxlistbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxpasswordinput__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxpasswordinput.ts");
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








var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(fb, usrs, apiUrl, cdr, cus) {
        var _this = this;
        this.fb = fb;
        this.usrs = usrs;
        this.cdr = cdr;
        this.cus = cus;
        this.UpdatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userToken = {};
        this.rules = [
            { input: '.email', message: 'Email is required !', action: 'keyup, blur', rule: 'required' },
            { input: '.password', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
            { input: '.password_confirmation', message: 'Confirm Password is required!', action: 'keyup, blur', rule: 'required' },
            {
                input: '.password_confirmation', message: 'Passwords doesn\'t match!', action: 'keyup, focus',
                rule: function (input, commit) {
                    if (_this.passwordInput.val() === _this.confirmPasswordInput.val()) {
                        return true;
                    }
                    return false;
                }
            },
            {
                input: '.role', message: 'Role is required!', action: 'keyup, focus', rule: function (input, commit) {
                    var data = _this.roleCombo.val();
                    var result = (data) ? true : false;
                    return result;
                }
            }
        ];
        this.createForm();
        this.userToken = this.cus.getTokenData();
        this.apiUrl = apiUrl;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.userData = new __WEBPACK_IMPORTED_MODULE_2__shared__["_20" /* User */](this.UserEditData);
        this.userForm.setValue(this.userData);
    };
    UserEditComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'password_confirmation': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    };
    UserEditComponent.prototype.saveBtn = function (post) {
        var _this = this;
        this.myValidator.validate(document.getElementById('userForm'));
        post['role_id'] = this.roleCombo.val();
        var estateList = this.estateListBox.getCheckedItems();
        post['estate_id'] = [];
        for (var i = 0; i < estateList.length; i++) {
            post['estate_id'].push(String(estateList[i].value));
        }
        if (post['role_id']) {
            this.jqxLoader.open();
            this.usrs.update(this.UserEditData.id, post).subscribe(function (result) {
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
        }
    };
    UserEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.jqxLoader.open();
        this.roleSource =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'display_name' },
                ],
                data: this.userToken,
                async: false,
                url: this.apiUrl + 'role?limit=all',
            };
        this.roleAdapter = new jqx.dataAdapter(this.roleSource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                // console.log(data);  
                return tData;
            },
            loadComplete: function () {
                _this.roleCombo.selectItem(_this.UserEditData.role_id);
            }
        });
        this.estateSource =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userToken,
                async: false,
                url: this.apiUrl + 'estate?limit=all',
            };
        this.estateAdapter = new jqx.dataAdapter(this.estateSource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                // console.log(data);  
                return tData;
            }
        });
        setTimeout(function () {
            _this.setCheckedItems();
        }, 2000);
        this.jqxLoader.close();
        this.cdr.detectChanges();
    };
    UserEditComponent.prototype.setCheckedItems = function () {
        var _this = this;
        this.usrs.show(this.UserEditData.id).subscribe(function (result) {
            if (result['data']['estates'].length > 0) {
                for (var i = 0; i < result['data']['estates'].length; i++) {
                    _this.estateListBox.checkItem(result['data']['estates'][i].id);
                }
            }
        }, function (error) {
        });
    };
    UserEditComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], UserEditComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], UserEditComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('roleCombo'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], UserEditComponent.prototype, "roleCombo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('estateListBox'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxlistbox__["a" /* jqxListBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxlistbox__["a" /* jqxListBoxComponent */]) === "function" && _d || Object)
    ], UserEditComponent.prototype, "estateListBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('passwordInput'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxpasswordinput__["a" /* jqxPasswordInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxpasswordinput__["a" /* jqxPasswordInputComponent */]) === "function" && _e || Object)
    ], UserEditComponent.prototype, "passwordInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('confirmPasswordInput'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxpasswordinput__["a" /* jqxPasswordInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxpasswordinput__["a" /* jqxPasswordInputComponent */]) === "function" && _f || Object)
    ], UserEditComponent.prototype, "confirmPasswordInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('UserEditData'),
        __metadata("design:type", Object)
    ], UserEditComponent.prototype, "UserEditData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserEditComponent.prototype, "UpdatedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserEditComponent.prototype, "cancelData", void 0);
    UserEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__("./src/app/layout/user-master/user/user-edit/user-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/user-master/user/user-edit/user-edit.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_21" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_21" /* UserService */]) === "function" && _h || Object, String, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _k || Object])
    ], UserEditComponent);
    return UserEditComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=user-edit.component.js.map

/***/ }),

/***/ "./src/app/layout/user-master/user/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_component__ = __webpack_require__("./src/app/layout/user-master/user/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__user_component__["a" /* UserComponent */],
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());

//# sourceMappingURL=user-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/user-master/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-2 tfm-panel-left\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> Quick Access </h2>\r\n              </div>\r\n               <jqxPanel [width]=\"'99.7%'\" [height]=\"'94.2%'\" >\r\n                    <ng-template #quickAccess></ng-template>\r\n              </jqxPanel> \r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-10 tfm-panel-right\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> User Management </h2>\r\n              </div>\r\n          <jqxPanel #jPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\">\r\n            <jqxGrid #myGrid\r\n              [height]=\"'100%'\" [width]=\"'99.8%'\" [source]=\"dataAdapter\" [columns]=\"columns\"  \r\n              [virtualmode]=\"true\" [pageable]=\"true\" [filterable]=\"true\" [sortable]=\"true\" [theme]=\"'energyblue'\"\r\n              [rendergridrows]=\"rendergridrows\" [selectionmode]=\"'checkbox'\" [showfilterrow]=\"true\" [showtoolbar]=\"true\" [rendertoolbar]=\"rendertoolbar\">\r\n            </jqxGrid>\r\n          </jqxPanel>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<jqxWindow #myWindow [width]=\"650\" [height]=\"450\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n  \r\n  <div id=\"windowContent\">\r\n <ng-template #Insert></ng-template>\r\n \r\n  </div>\r\n</jqxWindow>\r\n<jqxNotification #msgNotification\r\n[width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n[autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n<div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n    </jqxLoader>"

/***/ }),

/***/ "./src/app/layout/user-master/user/user.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/user-master/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_add_user_add_component__ = __webpack_require__("./src/app/layout/user-master/user/user-add/user-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_edit_user_edit_component__ = __webpack_require__("./src/app/layout/user-master/user/user-edit/user-edit.component.ts");
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








var UserComponent = /** @class */ (function () {
    function UserComponent(apiUrl, componentFactoryResolver, vc, usrs, cus) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.vc = vc;
        this.usrs = usrs;
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
                _this.myWindow.title('Add user');
                _this.myWindow.open();
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__user_add_user_add_component__["a" /* UserAddComponent */]);
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
                        _this.usrs.destroy('[' + ids + ']').subscribe(function (data) {
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
    UserComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
    };
    UserComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    UserComponent.prototype.getTable = function () {
        var _this = this;
        var myUrl = this.apiUrl + 'user';
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'string' },
                    { name: 'username', type: 'string' },
                    { name: 'email', type: 'string' },
                    { name: 'role_id', type: 'string' },
                    { name: 'role_name', type: 'string' },
                ],
                id: 'id',
                url: myUrl,
                data: this.userData,
                // filter: () => {
                //   // update the grid and send a request to the server.
                //   this.myGrid.updatebounddata('filter');
                // },
                // sort: () => {
                //   // update the grid and send a request to the server.
                //   this.myGrid.updatebounddata('sort');
                // },
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
                for (var i = 0; i < tableData.length; i++) {
                    if (tableData[i].roles.length > 0) {
                        tableData[i]['role_id'] = tableData[i].roles[0].id;
                        tableData[i]['role_name'] = tableData[i].roles[0].display_name;
                    }
                    else {
                        tableData[i]['role_id'] = null;
                        tableData[i]['role_name'] = null;
                    }
                }
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
            { text: 'Username', datafield: 'username', filterable: false, sortable: false },
            { text: 'Email', datafield: 'email', filterable: false, sortable: false },
            { text: 'Role', datafield: 'role_id', displayfield: 'role_name', filterable: false, sortable: false },
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
                    _this.myWindow.title('Edit user');
                    _this.myWindow.open();
                    var component_factory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_7__user_edit_user_edit_component__["a" /* UserEditComponent */]);
                    _this.Insert.clear();
                    var dynamic_Component = _this.Insert.createComponent(component_factory);
                    dynamic_Component.instance.UserEditData = dataRecord;
                    dynamic_Component.instance.UpdatedData.subscribe(function (result) {
                        if (result.result == true) {
                            console.log(result.result);
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
    ], UserComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jPanel'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], UserComponent.prototype, "jPanel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _c || Object)
    ], UserComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _d || Object)
    ], UserComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _e || Object)
    ], UserComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Insert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object)
    ], UserComponent.prototype, "Insert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object)
    ], UserComponent.prototype, "quickAccess", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/layout/user-master/user/user.component.html"),
            styles: [__webpack_require__("./src/app/layout/user-master/user/user.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [String, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["_21" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["_21" /* UserService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */]) === "function" && _l || Object])
    ], UserComponent);
    return UserComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "./src/app/layout/user-master/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_routing_module__ = __webpack_require__("./src/app/layout/user-master/user/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_component__ = __webpack_require__("./src/app/layout/user-master/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_add_user_add_component__ = __webpack_require__("./src/app/layout/user-master/user/user-add/user-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_edit_user_edit_component__ = __webpack_require__("./src/app/layout/user-master/user/user-edit/user-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__user_routing_module__["a" /* UserRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_add_user_add_component__["a" /* UserAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__user_edit_user_edit_component__["a" /* UserEditComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__user_add_user_add_component__["a" /* UserAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__user_edit_user_edit_component__["a" /* UserEditComponent */]
            ]
        })
    ], UserModule);
    return UserModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map