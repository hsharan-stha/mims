webpackJsonp(["welfare-item-master.module"],{

/***/ "./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-add/welfare-item-master-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n    <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n        <form name=\"welfareForm\" [formGroup]=\"welfareForm\">\r\n            <table class=\"table-w-tooltip\">\r\n                <tr>\r\n                    <td> Code</td>\r\n                    <td>\r\n                        <jqxInput class=\"code\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"code\"></jqxInput>\r\n                    </td>\r\n                    <td>Welfare Name</td>\r\n                    <td>\r\n                        <jqxInput class=\"name\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"name\"></jqxInput>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Link with store item</td>\r\n                    <td>\r\n                        <jqxComboBox #lComboBox class=\"link\" [theme]=\"'energyblue'\" [autoDropDownHeight]=\"true\" [height]=\"23\" [width]=\"180\" [source]=\"lAdapter\" [searchMode]=\"'containsignorecase'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n                    <td>Item name</td>\r\n                    <td>\r\n                        <jqxComboBox #myComboBox class=\"item_id\" [theme]=\"'energyblue'\" [width]=\"180\" [autoDropDownHeight]=\"true\" [height]=\"23\" [source]=\"itemAdapter\" [valueMember]=\"'id'\" [displayMember]=\"'name'\" [searchMode]=\"'containsignorecase'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n            </table>\r\n        </form>\r\n    </jqxValidator>\r\n</div>\r\n<div style=\"padding-top: 10px;text-align:right;\">\r\n    <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!welfareForm.valid\" [theme]=\"'energyblue'\" (onClick)=\"saveBtn(welfareForm.value)\">\r\n        Save\r\n    </jqxButton>\r\n    <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"cancelBtn()\">\r\n        Cancel\r\n    </jqxButton>\r\n</div>\r\n\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-add/welfare-item-master-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-add/welfare-item-master-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelfareItemMasterAddComponent; });
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







var WelfareItemMasterAddComponent = /** @class */ (function () {
    function WelfareItemMasterAddComponent(fb, WIService, ehs, apiUrl, cus) {
        var _this = this;
        this.fb = fb;
        this.WIService = WIService;
        this.ehs = ehs;
        this.cus = cus;
        this.AddedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.lAdapter = [
            { value: '1', label: 'Yes' },
            { value: '0', label: 'No ' }
        ];
        this.userData = {};
        this.rules = [
            { input: '.code', message: 'Code is required !', action: 'keydown, blur', rule: 'required' },
            { input: '.name', message: 'Name is required!', action: 'keydown, blur', rule: 'required' },
            { input: '.link', message: 'link is required!', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.lComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                } },
            { input: '.item_id', message: 'Item name is required!', action: 'keydown, blur,change', rule: function (input, commit) {
                    var data = _this.myComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
        ];
        this.createForm();
        this.userData = this.cus.getTokenData();
        this.apiUrl = apiUrl;
    }
    WelfareItemMasterAddComponent.prototype.ngOnInit = function () {
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
            }
        });
        //   this.estate_data =
        //   {
        //     datatype: "json",
        //     contentType: "application/json; charset=utf-8",
        //     datafields: [
        //       { name: 'id' },
        //       { name: 'name' },
        //     ],
        //     url: this.apiUrl + 'tea_estate?limit=all',
        //   };
        // this.estateAdapter = new jqx.dataAdapter(this.estate_data, {
        //   downloadComplete: (data, status, xhr) => {
        //     let tData = data.data;
        //     console.info(tData);
        //     return tData;
        //   }
        // });
    };
    WelfareItemMasterAddComponent.prototype.createForm = function () {
        this.welfareForm = this.fb.group({
            'code': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    };
    WelfareItemMasterAddComponent.prototype.saveBtn = function (post) {
        var _this = this;
        post['item_id'] = this.myComboBox.val();
        post['link_with_store_item'] = this.lComboBox.val();
        // post['estate_id'] = this.myComboBox2.getSelectedItem().value;
        this.myValidator.validate(document.getElementById('welfareForm'));
        if (post['item_id'] && post['link_with_store_item']) {
            this.jqxLoader.open();
            this.WIService.add(post).subscribe(function (result) {
                var data = _this.ehs.formatError(result);
                if (data['result'] == true) {
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
    WelfareItemMasterAddComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], WelfareItemMasterAddComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], WelfareItemMasterAddComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], WelfareItemMasterAddComponent.prototype, "myComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lComboBox'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], WelfareItemMasterAddComponent.prototype, "lComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _e || Object)
    ], WelfareItemMasterAddComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WelfareItemMasterAddComponent.prototype, "AddedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WelfareItemMasterAddComponent.prototype, "cancelData", void 0);
    WelfareItemMasterAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-welfare-item-master-add',
            template: __webpack_require__("./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-add/welfare-item-master-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-add/welfare-item-master-add.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_25" /* WelfareItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_25" /* WelfareItemMasterService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _h || Object, String, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _j || Object])
    ], WelfareItemMasterAddComponent);
    return WelfareItemMasterAddComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=welfare-item-master-add.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-edit/welfare-item-master-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n    <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n        <form name=\"welfareForm\" [formGroup]=\"welfareForm\">\r\n            <table class=\"table-w-tooltip\">\r\n                <tr>\r\n                    <td align=\"right\"> Code</td>\r\n                    <td align=\"left\">\r\n                        <jqxInput class=\"code\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"code\"></jqxInput>\r\n                    </td>\r\n                    <td align=\"right\">Welfare Name</td>\r\n                    <td align=\"left\">\r\n                        <jqxInput class=\"name\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"name\"></jqxInput>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td align=\"right\">Link with store item</td>\r\n                    <td align=\"left\">\r\n                        <jqxComboBox #lComboBox class=\"link\" [theme]=\"'energyblue'\" [autoDropDownHeight]=\"true\" [height]=\"23\" [width]=\"180\" [source]=\"lAdapter\" [searchMode]=\"'containsignorecase'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n                    <td align=\"right\">Item name</td>\r\n                    <td align=\"left\">\r\n                        <jqxComboBox #myComboBox class=\"item_id\" [theme]=\"'energyblue'\" [autoDropDownHeight]=\"true\" [width]=\"180\" [height]=\"23\" [source]=\"itemAdapter\" [valueMember]=\"'id'\" [displayMember]=\"'name'\" [searchMode]=\"'containsignorecase'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </form>\r\n    </jqxValidator>\r\n</div>\r\n<div style=\"padding-top: 10px;text-align:right;\">\r\n    <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" [disabled]=\"!welfareForm.valid\" (onClick)=\"saveBtn(welfareForm.value)\">\r\n        Save\r\n    </jqxButton>\r\n    <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"cancelBtn()\">\r\n        Cancel\r\n    </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-edit/welfare-item-master-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-edit/welfare-item-master-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelfareItemMasterEditComponent; });
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







var WelfareItemMasterEditComponent = /** @class */ (function () {
    function WelfareItemMasterEditComponent(fb, wITS, ehs, apiUrl, cus, cdr) {
        var _this = this;
        this.fb = fb;
        this.wITS = wITS;
        this.ehs = ehs;
        this.cus = cus;
        this.cdr = cdr;
        this.UpdatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.lAdapter = [
            { value: '1', label: 'Yes' },
            { value: '0', label: 'No ' }
        ];
        this.userData = {};
        this.rules = [
            { input: '.code', message: 'Code is required !', action: 'keydown, blur', rule: 'required' },
            { input: '.name', message: 'Name is required!', action: 'keydown, blur', rule: 'required' },
            { input: '.link', message: 'link is required!', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.lComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                } },
            { input: '.item_id', message: 'Item name is required!', action: 'keydown, blur,change', rule: function (input, commit) {
                    var data = _this.myComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
        ];
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.createForm();
    }
    WelfareItemMasterEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.welfareData = new __WEBPACK_IMPORTED_MODULE_2__shared__["_24" /* WelfareItem */](this.WelfareItemEditData);
        this.welfareForm.setValue(this.welfareData);
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
                _this.myComboBox.selectItem(_this.WelfareItemEditData.item_id);
            }
        });
    };
    WelfareItemMasterEditComponent.prototype.ngAfterViewInit = function () {
        this.lComboBox.selectItem(this.WelfareItemEditData.link_with_store_item);
        this.cdr.detectChanges();
    };
    WelfareItemMasterEditComponent.prototype.createForm = function () {
        this.welfareForm = this.fb.group({
            'code': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    };
    WelfareItemMasterEditComponent.prototype.saveBtn = function (post) {
        var _this = this;
        post['item_id'] = this.myComboBox.val();
        post['link_with_store_item'] = this.lComboBox.val();
        this.myValidator.validate(document.getElementById('welfareForm'));
        if (post['item_id'] && post['link_with_store_item']) {
            this.jqxLoader.open();
            this.wITS.update(this.WelfareItemEditData.id, post).subscribe(function (result) {
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
    WelfareItemMasterEditComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], WelfareItemMasterEditComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], WelfareItemMasterEditComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('WelfareItemEditData'),
        __metadata("design:type", Object)
    ], WelfareItemMasterEditComponent.prototype, "WelfareItemEditData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], WelfareItemMasterEditComponent.prototype, "myComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lComboBox'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], WelfareItemMasterEditComponent.prototype, "lComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _e || Object)
    ], WelfareItemMasterEditComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WelfareItemMasterEditComponent.prototype, "UpdatedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WelfareItemMasterEditComponent.prototype, "cancelData", void 0);
    WelfareItemMasterEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-welfare-item-master-edit',
            template: __webpack_require__("./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-edit/welfare-item-master-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-edit/welfare-item-master-edit.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_25" /* WelfareItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_25" /* WelfareItemMasterService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _h || Object, String, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _k || Object])
    ], WelfareItemMasterEditComponent);
    return WelfareItemMasterEditComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=welfare-item-master-edit.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelfareItemMasterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welfare_item_master_component__ = __webpack_require__("./src/app/layout/inventory-master/welfare-item-master/welfare-item-master.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__welfare_item_master_component__["a" /* WelfareItemMasterComponent */],
    }
];
var WelfareItemMasterRoutingModule = /** @class */ (function () {
    function WelfareItemMasterRoutingModule() {
    }
    WelfareItemMasterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], WelfareItemMasterRoutingModule);
    return WelfareItemMasterRoutingModule;
}());

//# sourceMappingURL=welfare-item-master-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/welfare-item-master/welfare-item-master.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 tfm-panel-left\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                    <h2> Quick Access </h2>\r\n                </div>\r\n                 <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                    <ng-template #quickAccess></ng-template>\r\n                </jqxPanel> \r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-10 tfm-panel-right\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                    <h2> Welfare Item Master </h2>\r\n                </div>\r\n            <jqxPanel #jPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\">\r\n              <jqxGrid #myGrid\r\n                [height]=\"'100%'\" [width]=\"'99.8%'\" [source]=\"dataAdapter\" [columns]=\"columns\"  \r\n                [virtualmode]=\"true\" [pageable]=\"true\" [sortable]=\"true\" [theme]=\"'energyblue'\"\r\n                [rendergridrows]=\"rendergridrows\" [selectionmode]=\"'checkbox'\" [showtoolbar]=\"true\" [rendertoolbar]=\"rendertoolbar\">\r\n            </jqxGrid>\r\n            </jqxPanel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  \r\n\r\n  <jqxWindow #myWindow [width]=\"600\" [height]=\"200\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\">\r\n<div id=\"windowContent\">\r\n\r\n   <ng-template #Insert></ng-template>\r\n   \r\n    </div>\r\n  </jqxWindow>\r\n  <jqxNotification #msgNotification\r\n  [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n  [autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n  <div id='message'></div>\r\n  </jqxNotification>\r\n  <jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n    </jqxLoader>\r\n    <jqxNotification #winNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n    [autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n    <div id='listingMessage'></div>\r\n    </jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/welfare-item-master/welfare-item-master.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/welfare-item-master/welfare-item-master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelfareItemMasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welfare_item_master_edit_welfare_item_master_edit_component__ = __webpack_require__("./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-edit/welfare-item-master-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welfare_item_master_add_welfare_item_master_add_component__ = __webpack_require__("./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-add/welfare-item-master-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake__ = __webpack_require__("./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts__ = __webpack_require__("./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts__);
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










var WelfareItemMasterComponent = /** @class */ (function () {
    function WelfareItemMasterComponent(apiUrl, welfareItemService, componentFactoryResolver, fileExport, vc, is, cus) {
        var _this = this;
        this.welfareItemService = welfareItemService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.fileExport = fileExport;
        this.vc = vc;
        this.is = is;
        this.cus = cus;
        this.editrow = -1;
        //data:any;
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
            var buttonContainer4 = document.createElement('div');
            var buttonContainer5 = document.createElement('div');
            var buttonContainer6 = document.createElement('div');
            buttonContainer1.id = 'buttonContainer1';
            buttonContainer2.id = 'buttonContainer2';
            buttonContainer3.id = 'buttonContainer3';
            buttonContainer4.id = 'buttonContainer4';
            buttonContainer5.id = 'buttonContainer5';
            buttonContainer6.id = 'buttonContainer6';
            buttonContainer1.style.cssText = 'float: left';
            buttonContainer2.style.cssText = 'float: left; margin-left: 5px';
            buttonContainer3.style.cssText = 'float: left; margin-left: 5px';
            buttonContainer4.style.cssText = 'float: left; margin-left: 5px';
            buttonContainer5.style.cssText = 'float: left; margin-left: 5px';
            buttonContainer6.style.cssText = 'float: left; margin-left: 5px';
            container.appendChild(buttonContainer1);
            container.appendChild(buttonContainer3);
            container.appendChild(buttonContainer2);
            container.appendChild(buttonContainer4);
            container.appendChild(buttonContainer5);
            container.appendChild(buttonContainer6);
            toolbar[0].appendChild(container);
            var addRowButton = jqwidgets.createInstance('#buttonContainer1', 'jqxButton', { width: 105, value: 'Add New Row', theme: 'energyblue' });
            var deleteRowButton = jqwidgets.createInstance('#buttonContainer3', 'jqxButton', { width: 150, value: 'Delete Selected Row', theme: 'energyblue' });
            var reloadGridButton = jqwidgets.createInstance('#buttonContainer2', 'jqxButton', { width: 80, value: '<i class="fa fa-refresh fa-fw"></i> Reload', theme: 'energyblue' });
            var exportExcelButton = jqwidgets.createInstance('#buttonContainer4', 'jqxButton', { width: 120, value: '<i class="fa fa-file-excel-o fa-fw"></i> Export Excel', theme: 'energyblue' });
            var exportPdfButton = jqwidgets.createInstance('#buttonContainer5', 'jqxButton', { width: 110, value: '<i class="fa fa-file-pdf-o fa-fw"></i> Export PDF', theme: 'energyblue' });
            var printButton = jqwidgets.createInstance('#buttonContainer6', 'jqxButton', { width: 110, value: '<i class="fa fa-print fa-fw"></i> Print', theme: 'energyblue' });
            addRowButton.addEventHandler('click', function () {
                //  this.myWindow.position({ x: '45%', y: '13%' });
                _this.myWindow.draggable(true);
                _this.myWindow.title('Add Welfare Item Master');
                _this.myWindow.open();
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__welfare_item_master_add_welfare_item_master_add_component__["a" /* WelfareItemMasterAddComponent */]);
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
                        _this.welfareItemService.destroy('[' + ids + ']').subscribe(function (data) {
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
            exportExcelButton.addEventHandler('click', function () {
                // let currentDate = new Date().toLocaleDateString();
                // let fileName = 'Product-Category-'+ currentDate;
                // this.myGrid.exportdata('xls', 'Product-Category-Master');
                var post = {};
                _this.welfareItemService.index(post)
                    .subscribe(function (data) {
                    // set items to json response
                    console.log(data);
                    var exportData = data;
                    var fileName = _this.fileExport.getFileName('product-category');
                    _this.fileExport.downloadFile(exportData, fileName);
                }, function (error) {
                    console.log(error);
                });
            });
            exportPdfButton.addEventHandler('click', function () {
                var type = 'download';
                _this.createPdfFormat(type);
                // this.myGrid.exportdata('pdf', 'Product-Category-Master');
            });
            printButton.addEventHandler('click', function () {
                var type = 'print';
                _this.createPdfFormat(type);
            });
        }; //render toolbar ends
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.getTable();
    }
    WelfareItemMasterComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
    };
    WelfareItemMasterComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.is.index('').subscribe(function (res) {
            var item = [];
            for (var i = 0; i < res['data']['length']; i++) {
                var dt = {};
                dt['item_name'] = res['data'][i]['name'];
                dt['item_id'] = res['data'][i]['id'];
                item.push(dt);
            }
            _this.myGrid.setcolumnproperty('item_name', 'filteritems', item);
        }, function (error) {
            console.info(error);
        });
    };
    WelfareItemMasterComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_7__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    WelfareItemMasterComponent.prototype.getTable = function () {
        var _this = this;
        this.itemSource = {
            datatype: 'json',
            datafields: [
                { name: 'id', type: 'string' },
                { name: 'name', type: 'string' },
            ],
            id: 'id',
            data: this.userData,
            url: this.apiUrl + 'item?limit=all',
        };
        this.itemAdapter = new jqx.dataAdapter(this.itemSource, { autoBind: true });
        var myUrl = this.apiUrl + 'welfare_item';
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'string' },
                    { name: 'code', type: 'string' },
                    { name: 'name', type: 'string' },
                    { name: 'link_with_store_item', type: 'string' },
                    { name: 'item_name', type: 'string', map: 'item>name', values: { source: this.itemAdapter.records, value: 'id', name: 'name' } },
                    { name: 'item_id', type: 'string' },
                ],
                id: 'id',
                root: 'data',
                pagesize: 20,
                totalrecords: 100,
                data: this.userData,
                url: myUrl,
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
            }, loadError: function (jqXHR, status, error) {
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
            { text: 'Code', datafield: 'code', width: 100 },
            { text: 'Name ', datafield: 'name', columntype: 'textbox', filtercondition: 'starts_with', width: 400 },
            { text: 'Link with store item  ', datafield: 'link_with_store_item', columntype: 'textbox', filtercondition: 'starts_with', createwidget: function (row, column, value, htmlElement) {
                    var dataRecord = row['bounddata'];
                    var post = dataRecord.link_with_store_item;
                    var container = document.createElement('div');
                    var cellValue;
                    if (post == 1) {
                        cellValue = '<div style="margin: 4px;">Yes</div>';
                    }
                    else {
                        cellValue = '<div style="margin: 4px;">No</div>';
                    }
                    container.innerHTML = cellValue;
                    htmlElement.appendChild(container);
                },
                initwidget: function (row, column, value, htmlElement) { }
            },
            { text: 'Item name ', datafield: 'item_id', displayfield: 'item_name', width: 300, columntype: 'combobox', filtertype: 'list' },
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
                    _this.myWindow.title('Edit');
                    _this.myWindow.open();
                    var component_factory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__welfare_item_master_edit_welfare_item_master_edit_component__["a" /* WelfareItemMasterEditComponent */]);
                    _this.Insert.clear();
                    var dynamic_Component = _this.Insert.createComponent(component_factory);
                    dynamic_Component.instance.WelfareItemEditData = dataRecord;
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
    WelfareItemMasterComponent.prototype.createPdfFormat = function (type) {
        var _this = this;
        var rows = [];
        var post = {};
        __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake__["vfs"] = __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts__["pdfMake"].vfs;
        this.welfareItemService.index(post)
            .subscribe(function (data) {
            // set items to json response
            var exportData = data;
            // Define rows as array to push table rows data.
            var rows = [];
            // Define first row for table to be displayed as header.
            var header = ['Id', 'Code', 'Name'];
            // Push Firt row into rows array.
            rows.push(header);
            // Format required data & field to be displayed in pdf.
            for (var i = 0; i < exportData.length; i++) {
                // Define a column array for the i(th) row.
                var cols = [];
                cols.push(exportData[i].id);
                cols.push(exportData[i].code);
                cols.push(exportData[i].name);
                // Push the columns array ie a single row into rows array.
                rows.push(cols);
            }
            // Define PDF Doc
            var dd = {
                pageSize: 'A4',
                content: [
                    {
                        table: {
                            // headers are automatically repeated if the table spans over multiple pages
                            // you can declare how many rows should be treated as headers
                            headerRows: 1,
                            widths: ['*', '*', '*', '*'],
                            // Set the rows array into body of the table.
                            body: rows
                        }
                    }
                ],
            };
            // createPdf with the provided file name & Download it
            if (type == 'download') {
                var fileName = _this.fileExport.getFileName('product-category');
                __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake__["createPdf"](dd).download(fileName);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake__["createPdf"](dd).print();
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], WelfareItemMasterComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jPanel'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], WelfareItemMasterComponent.prototype, "jPanel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _c || Object)
    ], WelfareItemMasterComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _d || Object)
    ], WelfareItemMasterComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _e || Object)
    ], WelfareItemMasterComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _f || Object)
    ], WelfareItemMasterComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Insert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object)
    ], WelfareItemMasterComponent.prototype, "Insert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _h || Object)
    ], WelfareItemMasterComponent.prototype, "quickAccess", void 0);
    WelfareItemMasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-welfare-item-master',
            template: __webpack_require__("./src/app/layout/inventory-master/welfare-item-master/welfare-item-master.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/welfare-item-master/welfare-item-master.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [String, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__shared__["_25" /* WelfareItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared__["_25" /* WelfareItemMasterService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_7__shared__["E" /* FileExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared__["E" /* FileExportService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_7__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared__["O" /* ItemMasterService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_7__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared__["v" /* CurrentUserService */]) === "function" && _p || Object])
    ], WelfareItemMasterComponent);
    return WelfareItemMasterComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=welfare-item-master.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/welfare-item-master/welfare-item-master.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelfareItemMasterModule", function() { return WelfareItemMasterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welfare_item_master_component__ = __webpack_require__("./src/app/layout/inventory-master/welfare-item-master/welfare-item-master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welfare_item_master_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welfare_item_master_add_welfare_item_master_add_component__ = __webpack_require__("./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-add/welfare-item-master-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welfare_item_master_edit_welfare_item_master_edit_component__ = __webpack_require__("./src/app/layout/inventory-master/welfare-item-master/welfare-item-master-edit/welfare-item-master-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var WelfareItemMasterModule = /** @class */ (function () {
    function WelfareItemMasterModule() {
    }
    WelfareItemMasterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__welfare_item_master_routing_module__["a" /* WelfareItemMasterRoutingModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__welfare_item_master_add_welfare_item_master_add_component__["a" /* WelfareItemMasterAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__welfare_item_master_edit_welfare_item_master_edit_component__["a" /* WelfareItemMasterEditComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__welfare_item_master_component__["a" /* WelfareItemMasterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__welfare_item_master_add_welfare_item_master_add_component__["a" /* WelfareItemMasterAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__welfare_item_master_edit_welfare_item_master_edit_component__["a" /* WelfareItemMasterEditComponent */]
            ]
        })
    ], WelfareItemMasterModule);
    return WelfareItemMasterModule;
}());

//# sourceMappingURL=welfare-item-master.module.js.map

/***/ })

});
//# sourceMappingURL=welfare-item-master.module.chunk.js.map