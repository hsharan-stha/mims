webpackJsonp(["store-transaction.module"],{

/***/ "./src/app/layout/inventory-master/store-transaction/store-transaction-add/store-transaction-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n  <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n    <form name=\"storeForm\" [formGroup]=\"storeForm\">\r\n      <table class=\"table-w-tooltip\">\r\n        <tr>\r\n          <td>Store name&nbsp;*</td>\r\n          <td>\r\n            <jqxComboBox #sComboBox (onChange)=\"storeNameChanged()\" class=\"store_id\" [width]=\"185\" [theme]=\"'energyblue'\" [height]=\"23\" [dropDownHeight]=\"100\" [source]=\"storeAdapter\" [displayMember]=\"'name'\"\r\n              [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n            </jqxComboBox>\r\n          </td>\r\n          <td>Item name&nbsp;*</td>\r\n          <td>\r\n            <jqxComboBox #iComboBox (onChange)=\"itemNameChanged()\" class=\"item_id\" [width]=\"185\" [theme]=\"'energyblue'\" [height]=\"23\" [dropDownHeight]=\"150\" [source]=\"itemAdapter\" [displayMember]=\"'name'\"\r\n              [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n            </jqxComboBox>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Quantity&nbsp;*</td>\r\n          <td>\r\n            <jqxInput class=\"quantity\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"quantity\"></jqxInput>\r\n          </td>\r\n          <td>Rate&nbsp;*</td>\r\n          <td>\r\n            <jqxInput class=\"rate\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"rate\"></jqxInput>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Remarks</td>\r\n          <td>\r\n            <jqxInput class=\"remarks\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"remarks\"></jqxInput>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </form>\r\n  </jqxValidator>\r\n</div>\r\n<div style=\"padding-top: 10px;text-align:right;padding-right: 7px;\">\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" [disabled]=\"!storeForm.valid || !storeChanged || !itemChanged\" (onClick)=\"saveBtn(storeForm.value,'save')\">\r\n    Save Only\r\n  </jqxButton>\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" [disabled]=\"!storeForm.valid || !storeChanged || !itemChanged\" (onClick)=\"saveBtn(storeForm.value,'close')\">\r\n    Save & Close\r\n  </jqxButton>\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"cancelBtn()\">\r\n    Cancel\r\n  </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>\r\n<jqxNotification #msgNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n  [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n  <div id='message'></div>\r\n</jqxNotification>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/store-transaction/store-transaction-add/store-transaction-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/store-transaction/store-transaction-add/store-transaction-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreTransactionAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
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







var StoreTransactionAddComponent = /** @class */ (function () {
    function StoreTransactionAddComponent(fb, stService, ehs, apiUrl, cus) {
        var _this = this;
        this.fb = fb;
        this.stService = stService;
        this.ehs = ehs;
        this.cus = cus;
        this.AddedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.storeChanged = false;
        this.itemChanged = false;
        this.userData = {};
        this.rules = [
            {
                input: '.store_id', message: 'Store name required!', action: 'keydown, blur,change', rule: function (input, commit) {
                    var data = _this.sComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            { input: '.quantity', message: 'Quantity required!', action: 'keydown, blur', rule: 'required' },
            {
                input: '.item_id', message: 'Item name required!', action: 'keydown, blur,change', rule: function (input, commit) {
                    var data = _this.iComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            // { input: '.remarks', message: 'Remarks required!', action: 'keydown, blur', rule: 'required' },
            // { input: '.value', message: 'Value required!', action: 'keydown, blur', rule: 'required' },
            // { input: '.total', message: 'Total required!', action: 'keydown, blur', rule: 'required' },
            { input: '.rate', message: 'Rate required!', action: 'keydown, blur', rule: 'required' },
        ];
        this.apiUrl = apiUrl;
        this.userData['token'] = this.cus.getTokenData()['token'];
        this.createForm();
    }
    StoreTransactionAddComponent.prototype.ngOnInit = function () {
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
                var tData = data.data;
                return tData;
            }
        });
        this.item_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                url: this.apiUrl + 'item?limit=all&transact=1',
            };
        this.itemAdapter = new jqx.dataAdapter(this.item_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                for (var i = 0; i < tData.length; i++) {
                    tData[i]['name'] = tData[i]['name'] + ' - ' + tData[i]['code'];
                }
                return tData;
            }
        });
    };
    StoreTransactionAddComponent.prototype.createForm = function () {
        this.storeForm = this.fb.group({
            'quantity': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            // 'value': [null],
            'rate': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            // 'total': [null],
            'remarks': [null],
        });
    };
    StoreTransactionAddComponent.prototype.saveBtn = function (post, afterSuccess) {
        var _this = this;
        post['store_id'] = this.sComboBox.val();
        post['item_id'] = this.iComboBox.val();
        this.myValidator.validate(document.getElementById('storeForm'));
        if (post['store_id'] && post['item_id']) {
            this.jqxLoader.open();
            this.stService.store(post).subscribe(function (result) {
                var data = _this.ehs.formatError(result);
                if (data['result'] == true) {
                    data['afterSuccess'] = afterSuccess;
                    if (afterSuccess == 'save') {
                        _this.storeForm.reset();
                    }
                    _this.AddedData.emit(data);
                }
                else {
                    var messageDiv = document.getElementById('windowMessage');
                    messageDiv.innerHTML = '';
                    for (var i = 0; i < data['message'].length; i++) {
                        var errorDiv = document.createElement('li');
                        errorDiv.innerText = data['message'][i];
                        messageDiv.appendChild(errorDiv);
                    }
                    _this.winNotification.open();
                }
                _this.jqxLoader.close();
            }, function (error) {
                var data = _this.ehs.formatError(error);
                var messageDiv = document.getElementById('windowMessage');
                messageDiv.innerText = data['message'];
                _this.winNotification.open();
                _this.jqxLoader.close();
            });
        }
    };
    StoreTransactionAddComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    StoreTransactionAddComponent.prototype.storeNameChanged = function () {
        this.storeChanged = this.sComboBox.val() ? true : false;
        console.log(this.storeChanged);
    };
    StoreTransactionAddComponent.prototype.itemNameChanged = function () {
        this.itemChanged = this.iComboBox.val() ? true : false;
        console.log(this.itemChanged);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], StoreTransactionAddComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], StoreTransactionAddComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sComboBox'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], StoreTransactionAddComponent.prototype, "sComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('iComboBox'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], StoreTransactionAddComponent.prototype, "iComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _e || Object)
    ], StoreTransactionAddComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], StoreTransactionAddComponent.prototype, "AddedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], StoreTransactionAddComponent.prototype, "cancelData", void 0);
    StoreTransactionAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-store-transaction-add',
            template: __webpack_require__("./src/app/layout/inventory-master/store-transaction/store-transaction-add/store-transaction-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/store-transaction/store-transaction-add/store-transaction-add.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_16" /* StoreTransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_16" /* StoreTransactionService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _h || Object, String, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _j || Object])
    ], StoreTransactionAddComponent);
    return StoreTransactionAddComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=store-transaction-add.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/store-transaction/store-transaction-edit/store-transaction-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n  <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n    <form name=\"storeForm\" [formGroup]=\"storeForm\">\r\n      <table class=\"table-w-tooltip\">\r\n        <tr>\r\n          <td>Store name</td>\r\n          <td>\r\n            <jqxComboBox #sComboBox class=\"store_id\" [theme]=\"'energyblue'\" [width]=\"185\" [height]=\"23\" [dropDownHeight]=\"100\" [source]=\"storeAdapter\" [displayMember]=\"'name'\"\r\n              [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n            </jqxComboBox>\r\n          </td>\r\n          <td>Item name</td>\r\n          <td>\r\n            <jqxComboBox #iComboBox class=\"item_id\"  [theme]=\"'energyblue'\" [width]=\"185\" [height]=\"23\" [dropDownHeight]=\"150\" [source]=\"itemAdapter\" [displayMember]=\"'name'\"\r\n              [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n            </jqxComboBox>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Quantity</td>\r\n          <td>\r\n            <jqxInput class=\"quantity\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"quantity\"></jqxInput>\r\n          </td>\r\n          <td>Rate</td>\r\n          <td>\r\n            <jqxInput class=\"rate\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"rate\"></jqxInput>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Remarks</td>\r\n          <td>\r\n            <jqxInput class=\"remarks\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"remarks\"></jqxInput>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </form>\r\n  </jqxValidator>\r\n</div>\r\n<div style=\"padding-top: 10px;text-align:right;padding-right: 7px;\">\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" [disabled]=\"!storeForm.valid\" (onClick)=\"saveBtn(storeForm.value)\">\r\n    Update\r\n  </jqxButton>\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"cancelBtn()\">\r\n    Cancel\r\n  </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>\r\n<jqxNotification #msgNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n  [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n  <div id='message'></div>\r\n</jqxNotification>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/store-transaction/store-transaction-edit/store-transaction-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/store-transaction/store-transaction-edit/store-transaction-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreTransactionEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
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







var StoreTransactionEditComponent = /** @class */ (function () {
    function StoreTransactionEditComponent(fb, stService, ehs, cus, apiUrl) {
        var _this = this;
        this.fb = fb;
        this.stService = stService;
        this.ehs = ehs;
        this.cus = cus;
        this.UpdatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userData = {};
        this.rules = [
            { input: '.store_id', message: 'Store name required!', action: 'keydown, blur,change', rule: function (input, commit) {
                    var data = _this.sComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                } },
            { input: '.quantity', message: 'Quantity required!', action: 'keydown, blur', rule: 'required' },
            { input: '.item_id', message: 'Item name required!', action: 'keydown, blur,change', rule: function (input, commit) {
                    var data = _this.iComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                } },
            // { input: '.remarks', message: 'Remarks required!', action: 'keydown, blur', rule: 'required' },
            // { input: '.value', message: 'Value required!', action: 'keydown, blur', rule: 'required' },
            // { input: '.total', message: 'Total required!', action: 'keydown, blur', rule: 'required' },
            { input: '.rate', message: 'Rate required!', action: 'keydown, blur', rule: 'required' },
        ];
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.createForm();
    }
    StoreTransactionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.EditData = new __WEBPACK_IMPORTED_MODULE_2__shared__["_15" /* StoreTransaction */](this.StoreTransactionEditData);
        this.storeForm.setValue(this.EditData);
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
                var tData = data.data;
                return tData;
            }, loadComplete: function () {
                _this.sComboBox.selectItem(_this.StoreTransactionEditData.store_id);
            }
        });
        this.item_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                url: this.apiUrl + 'item?limit=all',
            };
        this.itemAdapter = new jqx.dataAdapter(this.item_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }, loadComplete: function () {
                _this.iComboBox.selectItem(_this.StoreTransactionEditData.item_id);
            }
        });
    };
    StoreTransactionEditComponent.prototype.createForm = function () {
        this.storeForm = this.fb.group({
            'quantity': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'value': [null],
            'rate': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'total': [null],
            'remarks': [null],
        });
    };
    StoreTransactionEditComponent.prototype.saveBtn = function (post) {
        var _this = this;
        post['store_id'] = this.sComboBox.val();
        post['item_id'] = this.iComboBox.val();
        this.myValidator.validate(document.getElementById('storeForm'));
        if (post['store_id'] && post['item_id']) {
            this.jqxLoader.open();
            this.stService.update(this.StoreTransactionEditData.id, post).subscribe(function (result) {
                var data = _this.ehs.formatError(result);
                if (data['result'] == true) {
                    _this.UpdatedData.emit(data);
                }
                else {
                    var messageDiv = document.getElementById('windowMessage');
                    messageDiv.innerHTML = '';
                    for (var i = 0; i < data['message'].length; i++) {
                        var errorDiv = document.createElement('li');
                        errorDiv.innerText = data['message'][i];
                        messageDiv.appendChild(errorDiv);
                    }
                    _this.winNotification.open();
                }
                _this.jqxLoader.close();
            }, function (error) {
                var data = _this.ehs.formatError(error);
                var messageDiv = document.getElementById('windowMessage');
                messageDiv.innerText = data['message'];
                _this.winNotification.open();
                _this.jqxLoader.close();
            });
        }
    };
    StoreTransactionEditComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], StoreTransactionEditComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], StoreTransactionEditComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sComboBox'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], StoreTransactionEditComponent.prototype, "sComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('iComboBox'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], StoreTransactionEditComponent.prototype, "iComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('StoreTransactionEditData'),
        __metadata("design:type", Object)
    ], StoreTransactionEditComponent.prototype, "StoreTransactionEditData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _e || Object)
    ], StoreTransactionEditComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], StoreTransactionEditComponent.prototype, "UpdatedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], StoreTransactionEditComponent.prototype, "cancelData", void 0);
    StoreTransactionEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-store-transaction-edit',
            template: __webpack_require__("./src/app/layout/inventory-master/store-transaction/store-transaction-edit/store-transaction-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/store-transaction/store-transaction-edit/store-transaction-edit.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_16" /* StoreTransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_16" /* StoreTransactionService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _j || Object, String])
    ], StoreTransactionEditComponent);
    return StoreTransactionEditComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=store-transaction-edit.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/store-transaction/store-transaction-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreTransactionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_transaction_component__ = __webpack_require__("./src/app/layout/inventory-master/store-transaction/store-transaction.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__store_transaction_component__["a" /* StoreTransactionComponent */],
    }
];
var StoreTransactionRoutingModule = /** @class */ (function () {
    function StoreTransactionRoutingModule() {
    }
    StoreTransactionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], StoreTransactionRoutingModule);
    return StoreTransactionRoutingModule;
}());

//# sourceMappingURL=store-transaction-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/store-transaction/store-transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-2 tfm-panel-left\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> Quick Access </h2>\r\n              </div>\r\n               <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                    <ng-template #quickAccess></ng-template>\r\n              </jqxPanel> \r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-10 tfm-panel-right\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> Store Item Table </h2>\r\n              </div>\r\n          <jqxPanel #jPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n            <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                <jqxButton #add [width]='150' [height]='25' (onClick)=\"addNewStock()\" [theme]=\"'energyblue'\">\r\n                    Add Opening Stock\r\n                </jqxButton>\r\n                <jqxButton #reload [width]='120' [height]='25' (onClick)=\"reloadGrid()\" [theme]=\"'energyblue'\">\r\n                    Reload\r\n                </jqxButton>\r\n                <jqxButton #reload [width]='120' [height]='25' [theme]=\"'energyblue'\" (onClick)=\"generateReport()\">\r\n                    Generate Report\r\n                </jqxButton>\r\n                <jqxComboBox style=\"display:inline-block;vertical-align: bottom;\"\r\n                    #storeSelection [width]=\"185\" [source]=\"storeAdapter\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [height]=\"25\" [searchMode]=\"'containsignorecase'\" (onChange)=\"storeSelected($event)\" [theme]=\"'energyblue'\" [dropDownHeight]=\"120\">\r\n                </jqxComboBox>\r\n            </div>\r\n            <jqxGrid #myGrid\r\n              [height]=\"'93.2%'\" [width]=\"'99.8%'\" [source]=\"dataAdapter\" [columns]=\"columns\"  \r\n               [pageable]=\"true\" [filterable]=\"true\" [sortable]=\"true\" [theme]=\"'energyblue'\"\r\n               [selectionmode]=\"'checkbox'\" [showfilterrow]=\"true\">\r\n          </jqxGrid>\r\n          <!-- [rendergridrows]=\"rendergridrows\" [virtualmode]=\"true\" -->\r\n          </jqxPanel>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<jqxWindow #myWindow [width]=\"558\" [height]=\"280\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n  \r\n  <div id=\"windowContent\">\r\n <ng-template #Insert></ng-template>\r\n \r\n  </div>\r\n</jqxWindow>\r\n<jqxNotification #msgNotification\r\n[width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n[autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\" [theme]=\"'energyblue'\">\r\n<div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='listingMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/store-transaction/store-transaction.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/store-transaction/store-transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreTransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_transaction_add_store_transaction_add_component__ = __webpack_require__("./src/app/layout/inventory-master/store-transaction/store-transaction-add/store-transaction-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
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








var StoreTransactionComponent = /** @class */ (function () {
    function StoreTransactionComponent(apiUrl, stService, componentFactoryResolver, rs, fes, vc, ss, cus) {
        var _this = this;
        this.stService = stService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.rs = rs;
        this.fes = fes;
        this.vc = vc;
        this.ss = ss;
        this.cus = cus;
        this.source = {};
        this.editrow = -1;
        this.storeAdapter = [];
        this.initialLoad = true;
        this.selectLoad = false;
        this.counter = 1;
        this.userData = {};
        //Get Data after the server side processing as pagination
        this.rendergridrows = function (params) {
            return params.data;
        };
        this.tooltiprenderer = function (element) {
            var id = "toolTipContainer" + _this.counter;
            element[0].id = id;
            var content = element[0].innerHTML;
            setTimeout(function (_) { return jqwidgets.createInstance("#" + id, 'jqxTooltip', { position: 'mouse', content: content }); });
            _this.counter++;
        };
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.getTable();
    }
    StoreTransactionComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
    };
    StoreTransactionComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.jqxLoader.open();
        this.ss.index({ limit: 'all' }).subscribe(function (response) {
            console.log(response);
            _this.storeAdapter = response;
            _this.jqxLoader.close();
        }, function (error) {
            _this.jqxLoader.close();
        });
    };
    StoreTransactionComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    StoreTransactionComponent.prototype.storeSelected = function ($event) {
        var val = this.storeSelection.val();
        this.source.url = this.apiUrl + 'store_transaction?limit=all&store_id=' + val;
        this.myGrid.updatebounddata('cells');
    };
    StoreTransactionComponent.prototype.getTable = function () {
        var _this = this;
        var myUrl = this.apiUrl + 'store_transaction?limit=all';
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'string' },
                    //   { name: 'store_id', type: 'String' },
                    //   { name: 'store_name', type: 'String',map:'store>name' },
                    //   { name: 'item_id', type: 'String' },
                    { name: 'name', type: 'string', map: 'item>name' },
                    { name: 'item_id', type: 'number' },
                    { name: 'quantity', type: 'string' },
                    { name: 'rate', type: 'string' },
                    { name: 'value', type: 'string' },
                    { name: 'total', type: 'string' },
                    { name: 'remarks', type: 'string' },
                    { name: 'reorder_quantity', type: 'number' },
                    { name: 'maximum_stock', type: 'number' },
                    { name: 'minimum_stock', type: 'number' },
                    { name: 'status', type: 'string' },
                ],
                id: 'id',
                root: 'data',
                pagesize: 20,
                data: this.userData,
                //   totalrecords: 100,
                url: myUrl,
                filter: function () {
                    // update the grid and send a request to the server.
                    _this.myGrid.updatebounddata('filter');
                },
                sort: function () {
                    // update the grid and send a request to the server.
                    _this.myGrid.updatebounddata('sort');
                },
            };
        this.dataAdapter = new jqx.dataAdapter(this.source, {
            formatData: function (data) {
                //   data['page'] = data['pagenum'] + 1;
                //   data['limit'] = data['pagesize'];
                return data;
            },
            downloadComplete: function (data, status, xhr) {
                var tableData;
                if (!_this.initialLoad) {
                    _this.initialLoad = false;
                    tableData = [];
                }
                else {
                    _this.source.totalrecords = data.length;
                    // this.source.pagesize = data.length;
                    tableData = data.data;
                }
                return tableData;
            }, loadError: function (jqXHR, status, error) {
                console.log(error);
                var messageDiv = document.getElementById('listingMessage');
                messageDiv.innerText = error;
                _this.winNotification.open();
                _this.jqxLoader.close();
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
            //   { text: 'Store name', datafield: 'store_id',displayfield:'store_name', columntype: 'textbox', filtercondition: 'starts_with' },
            { text: 'Item name', datafield: 'name', displayfield: 'name', columntype: 'textbox', filtercondition: 'starts_with' },
            { text: 'Quantity', datafield: 'quantity', columntype: 'textbox', filterable: false },
            { text: 'Rate', datafield: 'rate', columntype: 'textbox', filterable: false },
            { text: 'Value', datafield: 'value', columntype: 'textbox', filterable: false },
            { text: 'Status', datafield: 'status', columntype: 'combobox', filtertype: 'list', filteritems: ['Reorder Stock', 'In Stock', 'Out of Stock'],
            },
        ];
    };
    StoreTransactionComponent.prototype.addNewStock = function () {
        var _this = this;
        this.myWindow.draggable(true);
        this.myWindow.title('Add Opening Stock');
        this.myWindow.open();
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__store_transaction_add_store_transaction_add_component__["a" /* StoreTransactionAddComponent */]);
        this.Insert.clear();
        var dynamic_Component = this.Insert.createComponent(componentFactory);
        dynamic_Component.instance.AddedData.subscribe(function (result) {
            if (result.result == true) {
                var messageDiv = document.getElementById('message');
                messageDiv.innerText = result['message'];
                _this.msgNotification.open();
                if (result.afterSuccess == 'close') {
                    _this.myWindow.hide();
                    _this.myGrid.updatebounddata('cells');
                    dynamic_Component.destroy();
                }
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
    };
    StoreTransactionComponent.prototype.reloadGrid = function () {
        this.myGrid.updatebounddata('cells');
    };
    StoreTransactionComponent.prototype.generateReport = function () {
        var _this = this;
        console.info(this.storeSelection.val());
        var post = {};
        post['limit'] = 'all';
        post['store_id'] = this.storeSelection.val();
        post['current_report'] = true;
        post['report_type'] = 'current_report';
        this.jqxLoader.open();
        this.rs.getStoreTransactionReport(post).subscribe(function (result) {
            _this.fes.SaveFile(result, 'Current Report');
            _this.jqxLoader.close();
        }, function (error) {
            _this.jqxLoader.close();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], StoreTransactionComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _b || Object)
    ], StoreTransactionComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _c || Object)
    ], StoreTransactionComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jPanel'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
    ], StoreTransactionComponent.prototype, "jPanel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _e || Object)
    ], StoreTransactionComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _f || Object)
    ], StoreTransactionComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Insert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object)
    ], StoreTransactionComponent.prototype, "Insert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _h || Object)
    ], StoreTransactionComponent.prototype, "quickAccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('storeSelection'),
        __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _j || Object)
    ], StoreTransactionComponent.prototype, "storeSelection", void 0);
    StoreTransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-store-transaction',
            template: __webpack_require__("./src/app/layout/inventory-master/store-transaction/store-transaction.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/store-transaction/store-transaction.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [String, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["_16" /* StoreTransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["_16" /* StoreTransactionService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["f" /* AllReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["f" /* AllReportService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["E" /* FileExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["E" /* FileExportService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["_14" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["_14" /* StoreService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["v" /* CurrentUserService */]) === "function" && _r || Object])
    ], StoreTransactionComponent);
    return StoreTransactionComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
}());

//# sourceMappingURL=store-transaction.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/store-transaction/store-transaction.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreTransactionModule", function() { return StoreTransactionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_transaction_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/store-transaction/store-transaction-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_transaction_component__ = __webpack_require__("./src/app/layout/inventory-master/store-transaction/store-transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_transaction_add_store_transaction_add_component__ = __webpack_require__("./src/app/layout/inventory-master/store-transaction/store-transaction-add/store-transaction-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_transaction_edit_store_transaction_edit_component__ = __webpack_require__("./src/app/layout/inventory-master/store-transaction/store-transaction-edit/store-transaction-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var StoreTransactionModule = /** @class */ (function () {
    function StoreTransactionModule() {
    }
    StoreTransactionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__store_transaction_routing_module__["a" /* StoreTransactionRoutingModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__store_transaction_add_store_transaction_add_component__["a" /* StoreTransactionAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__store_transaction_edit_store_transaction_edit_component__["a" /* StoreTransactionEditComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__store_transaction_component__["a" /* StoreTransactionComponent */],
                __WEBPACK_IMPORTED_MODULE_5__store_transaction_add_store_transaction_add_component__["a" /* StoreTransactionAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__store_transaction_edit_store_transaction_edit_component__["a" /* StoreTransactionEditComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], StoreTransactionModule);
    return StoreTransactionModule;
}());

//# sourceMappingURL=store-transaction.module.js.map

/***/ })

});
//# sourceMappingURL=store-transaction.module.chunk.js.map