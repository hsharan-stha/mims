webpackJsonp(["inventory-setup.module"],{

/***/ "./src/app/layout/inventory-master/inventory-setup/inventory-setup-add/inventory-setup-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\"  id=\"attWindowContainer\">\r\n    <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n\r\n        <form name=\"inventoryForm\" [formGroup]=\"inventoryForm\">\r\n            <table>\r\n                <tr>\r\n                    <td > Fiscal Year Name </td>\r\n                    <td>\r\n                        <jqxComboBox #myComboBox [source]=\"fiscalAdapter\" [height]=\"23\" [theme]=\"'energyblue'\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" class=\"fiscal_year_id\" [searchMode]=\"'containsignorecase'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n                    <td align=\"center\">\r\n                        <jqxCheckBox #pCheckBox style=\"margin-left: 380px;\" [width]='200' [height]='23' [theme]=\"'energyblue'\" class=\"purchase_order_expiry\">\r\n                            <span>Purchase Order Expiry</span>\r\n                        </jqxCheckBox>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table>\r\n                <tr>\r\n\r\n                </tr>\r\n                <tr>\r\n                    <td >\r\n                        <jqxCheckBox #agrCheckBox [width]='20' [height]='23' [theme]=\"'energyblue'\" class=\"auto_generate_req_no\">\r\n                        </jqxCheckBox>\r\n                    </td>\r\n                    <td>Auto Generated Requisition No. </td>\r\n                    <td> </td>\r\n\r\n                    <td>Prefix</td>\r\n                    <td >\r\n\r\n                        <jqxInput class=\"pre_req_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"pre_req_no\"></jqxInput>\r\n                    </td>\r\n                    <td>Last Requisition No.</td>\r\n                    <td >\r\n\r\n                        <jqxInput class=\"last_req_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"last_req_no\"></jqxInput>\r\n                    </td>\r\n                    <td>Suffix</td>\r\n                    <td >\r\n\r\n                        <jqxInput class=\"suf_req_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"suf_req_no\"></jqxInput>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td >\r\n                        <jqxCheckBox #agpCheckBox [width]='20' [height]='23' [theme]=\"'energyblue'\" class=\"auto_generate_po_no\">\r\n                        </jqxCheckBox>\r\n                    </td>\r\n                    <td>Auto Generated Purchase Order No.</td>\r\n                    <td> </td>\r\n                    <td>Prefix</td>\r\n                    <td >\r\n\r\n                        <jqxInput class=\"pre_po_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"pre_po_no\"></jqxInput>\r\n                    </td>\r\n                    <td>Last Purchase Order No.</td>\r\n                    <td >\r\n\r\n                        <jqxInput class=\"last_po_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"last_po_no\"></jqxInput>\r\n                    </td>\r\n                    <td>Suffix</td>\r\n                    <td >\r\n                        <jqxInput class=\"suf_po_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"suf_po_no\"></jqxInput>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td >\r\n                        <jqxCheckBox #aggCheckBox [width]='20' [height]='23' [theme]=\"'energyblue'\" class=\"auto_generate_grn_no\">\r\n                        </jqxCheckBox>\r\n                        <td>Auto Generated GRN No.</td>\r\n                        <td> </td>\r\n\r\n                        <td>Prefix</td>\r\n                        <td >\r\n\r\n                            <jqxInput class=\"pre_grn_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"pre_grn_no\"></jqxInput>\r\n                        </td>\r\n                        <td>Last GRN No.</td>\r\n                        <td >\r\n\r\n                            <jqxInput class=\"last_grn_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"last_grn_no\"></jqxInput>\r\n                        </td>\r\n                        <td>Suffix</td>\r\n                        <td >\r\n\r\n                            <jqxInput class=\"suf_grn_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"suf_grn_no\"></jqxInput>\r\n                        </td>\r\n                </tr>\r\n                <tr>\r\n                    <td >\r\n                        <jqxCheckBox #agmCheckBox [width]='20' [height]='23' [theme]=\"'energyblue'\" class=\"auto_generate_missue_no\">\r\n                        </jqxCheckBox>\r\n                    </td>\r\n                    <td>Auto Generated Invoice No.</td>\r\n                    <td> </td>\r\n                    <td>Prefix</td>\r\n                    <td >\r\n\r\n                        <jqxInput class=\"pre_missue_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"pre_missue_no\"></jqxInput>\r\n                    </td>\r\n                    <td>Last Invoice No.</td>\r\n                    <td >\r\n\r\n                        <jqxInput class=\"last_missue_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"last_missue_no\"></jqxInput>\r\n                    </td>\r\n                    <td>Suffix</td>\r\n                    <td >\r\n\r\n                        <jqxInput class=\"suf_missue_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"suf_missue_no\"></jqxInput>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <div align=\"center\">\r\n                <label>Validation method</label>\r\n                <table>\r\n                    <tr>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <jqxRadioButton #fifo [width]=\"80\" [height]=\"23\" [theme]=\"'energyblue'\" [checked]=\"false\" [disabled]=\"false\" value=\"FIFO\" class=\"validation_method\"\r\n                                groupName=\"validation\" formControlName=\"valuation_method\">\r\n                                <span>FIFO</span>\r\n                            </jqxRadioButton>\r\n                        </td>\r\n                        <td>\r\n                            <jqxRadioButton #lifo [width]=\"80\" [height]=\"23\" [theme]=\"'energyblue'\" value=\"LIFO\" formControlName=\"valuation_method\" class=\"validation_method\" groupName=\"validation\">\r\n                                <span>LIFO</span>\r\n                            </jqxRadioButton>\r\n                        </td>\r\n                        <td>\r\n                            <jqxRadioButton #wa [width]=\"80\" [height]=\"23\" [theme]=\"'energyblue'\" value=\"WA\" formControlName=\"valuation_method\" class=\"validation_method\" groupName=\"validation\">\r\n                                <span>WA</span>\r\n                            </jqxRadioButton>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </form>\r\n    </jqxValidator>\r\n</div>\r\n<div style=\"padding-top: 10px;text-align:right;padding-right: 7px;\">\r\n    <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" [disabled]=\"!inventoryForm.valid\" (onClick)=\"saveBtn(inventoryForm.value)\">\r\n        Save\r\n    </jqxButton>\r\n    <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"cancelBtn()\">\r\n        Cancel\r\n    </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>\r\n<jqxNotification #msgNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n    [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n    <div id='message'></div>\r\n</jqxNotification>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/inventory-setup/inventory-setup-add/inventory-setup-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/inventory-setup/inventory-setup-add/inventory-setup-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventorySetupAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxradiobutton__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxradiobutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcheckbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
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









var InventorySetupAddComponent = /** @class */ (function () {
    function InventorySetupAddComponent(fb, isService, ehs, cus, apiUrl) {
        var _this = this;
        this.fb = fb;
        this.isService = isService;
        this.ehs = ehs;
        this.cus = cus;
        this.AddedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userData = {};
        this.rules = [
            {
                input: '.fiscal_year_id', message: 'Fiscal year required!!', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.myComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            {
                input: '.purchase_order_expiry', message: '**', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.pCheckBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            {
                input: '.auto_generate_req_no', message: '**', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.agrCheckBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            {
                input: '.auto_generate_po_no', message: '**', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.agpCheckBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            {
                input: '.auto_generate_grn_no', message: '**', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.aggCheckBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            {
                input: '.auto_generate_missue_no', message: '**', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.agmCheckBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
        ];
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.createForm();
    }
    InventorySetupAddComponent.prototype.ngOnInit = function () {
        this.fiscal_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                async: false,
                url: this.apiUrl + 'fiscal_year?limit=all',
            };
        this.fiscalAdapter = new jqx.dataAdapter(this.fiscal_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }
        });
    };
    InventorySetupAddComponent.prototype.createForm = function () {
        this.inventoryForm = this.fb.group({
            // 'fiscal_year_id': [null,Validators.required],
            // 'purchase_order_expiry': [null,Validators.required],
            // 'auto_generate_req_no': [null,Validators.required],
            // 'auto_generate_po_no': [null,Validators.required],
            // 'auto_generate_grn_no': [null,Validators.required],
            // 'auto_generate_missue_no': [null,Validators.required],
            'pre_req_no': [null],
            'suf_req_no': [null],
            'last_req_no': [null],
            'pre_po_no': [null],
            'suf_po_no': [null],
            'last_po_no': [null],
            'pre_grn_no': [null],
            'suf_grn_no': [null],
            'last_grn_no': [null],
            'pre_missue_no': [null],
            'suf_missue_no': [null],
            'last_missue_no': [null],
            'valuation_method': [null],
        });
    };
    InventorySetupAddComponent.prototype.saveBtn = function (post) {
        var _this = this;
        this.pCheckBox.val() == true ? post['purchase_order_expiry'] = 1 : post['purchase_order_expiry'] = 0;
        this.agrCheckBox.val() == true ? post['auto_generate_req_no'] = 1 : post['auto_generate_req_no'] = 0;
        this.agpCheckBox.val() == true ? post['auto_generate_po_no'] = 1 : post['auto_generate_po_no'] = 0;
        this.aggCheckBox.val() == true ? post['auto_generate_grn_no'] = 1 : post['auto_generate_grn_no'] = 0;
        this.agmCheckBox.val() == true ? post['auto_generate_missue_no'] = 1 : post['auto_generate_missue_no'] = 0;
        post['fiscal_year_id'] = this.myComboBox.val();
        this.myValidator.validate(document.getElementById('inventoryForm'));
        if (post['fiscal_year_id'] && post['purchase_order_expiry'] && post['auto_generate_req_no'] && post['auto_generate_po_no'] && post['auto_generate_grn_no'] && post['auto_generate_missue_no']) {
            this.jqxLoader.open();
            console.log(post);
            this.isService.store(post).subscribe(function (result) {
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
    InventorySetupAddComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], InventorySetupAddComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], InventorySetupAddComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fifo'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */]) === "function" && _c || Object)
    ], InventorySetupAddComponent.prototype, "fifo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lifo'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */]) === "function" && _d || Object)
    ], InventorySetupAddComponent.prototype, "lifo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('wa'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */]) === "function" && _e || Object)
    ], InventorySetupAddComponent.prototype, "wa", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _f || Object)
    ], InventorySetupAddComponent.prototype, "myComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pCheckBox'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */]) === "function" && _g || Object)
    ], InventorySetupAddComponent.prototype, "pCheckBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('aggCheckBox'),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */]) === "function" && _h || Object)
    ], InventorySetupAddComponent.prototype, "aggCheckBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('agmCheckBox'),
        __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */]) === "function" && _j || Object)
    ], InventorySetupAddComponent.prototype, "agmCheckBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('agpCheckBox'),
        __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */]) === "function" && _k || Object)
    ], InventorySetupAddComponent.prototype, "agpCheckBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('agrCheckBox'),
        __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */]) === "function" && _l || Object)
    ], InventorySetupAddComponent.prototype, "agrCheckBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _m || Object)
    ], InventorySetupAddComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InventorySetupAddComponent.prototype, "AddedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InventorySetupAddComponent.prototype, "cancelData", void 0);
    InventorySetupAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inventory-setup-add',
            template: __webpack_require__("./src/app/layout/inventory-master/inventory-setup/inventory-setup-add/inventory-setup-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/inventory-setup/inventory-setup-add/inventory-setup-add.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["L" /* InventorySetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["L" /* InventorySetupService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _r || Object, String])
    ], InventorySetupAddComponent);
    return InventorySetupAddComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
}());

//# sourceMappingURL=inventory-setup-add.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/inventory-setup/inventory-setup-edit/inventory-setup-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\"  id=\"attWindowContainer\">\r\n    <jqxValidator #myValidator  [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n        <form name=\"inventoryForm\" [formGroup]=\"inventoryForm\">\r\n            <table>\r\n                <tr>\r\n                    <td> Fiscal Year Name </td>\r\n                    <td>\r\n                        <jqxComboBox #myComboBox class=\"fiscal_year_id\"\r\n                         [source]=\"fiscalAdapter\" [height]=\"23\" [theme]=\"'energyblue'\" [width]=\"180\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n                    <td align=\"center\">\r\n                        <jqxCheckBox style=\"margin-left: 380px;\" [width]='200' [height]='23' [theme]=\"'energyblue'\" formControlName=\"purchase_order_expiry\" [checked]=\"'false'\">\r\n                            <span>Purchase Order Expiry</span>\r\n                        </jqxCheckBox>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <table>\r\n                <tr>\r\n\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <jqxCheckBox [width]='20' [height]='23' [theme]=\"'energyblue'\" [width]=\"180\" formControlName=\"auto_generate_req_no\" [checked]=\"'false'\">\r\n                        </jqxCheckBox>\r\n                    </td>\r\n                    <td>Auto Generated Requisition No. </td>\r\n                    <td> </td>\r\n\r\n                    <td>Prefix</td>\r\n                    <td>\r\n\r\n                        <jqxInput class=\"pre_req_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"pre_req_no\"></jqxInput>\r\n                    </td>\r\n                    <td>Last Requisition No.</td>\r\n                    <td>\r\n\r\n                        <jqxInput class=\"last_req_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"last_req_no\"></jqxInput>\r\n                    </td>\r\n                    <td>Suffix</td>\r\n                    <td>\r\n\r\n                        <jqxInput class=\"suf_req_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"suf_req_no\"></jqxInput>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <jqxCheckBox [width]='20' [height]='23' [theme]=\"'energyblue'\" formControlName=\"auto_generate_po_no\" [checked]=\"'false'\">\r\n                        </jqxCheckBox>\r\n                    </td>\r\n                    <td>Auto Generated Purchase Order No.</td>\r\n                    <td> </td>\r\n                    <td>Prefix</td>\r\n                    <td>\r\n\r\n                        <jqxInput class=\"pre_po_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"pre_po_no\"></jqxInput>\r\n                    </td>\r\n                    <td>Last Purchase Order No.</td>\r\n                    <td>\r\n\r\n                        <jqxInput class=\"last_po_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"last_po_no\"></jqxInput>\r\n                    </td>\r\n                    <td>Suffix</td>\r\n                    <td>\r\n                        <jqxInput class=\"suf_po_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"suf_po_no\"></jqxInput>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <jqxCheckBox [width]='20' [height]='23' [theme]=\"'energyblue'\" formControlName=\"auto_generate_grn_no\" [checked]=\"'false'\">\r\n                        </jqxCheckBox>\r\n                        <td>Auto Generated GRN No.</td>\r\n                        <td> </td>\r\n\r\n                        <td>Prefix</td>\r\n                        <td>\r\n\r\n                            <jqxInput class=\"pre_grn_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"pre_grn_no\"></jqxInput>\r\n                        </td>\r\n                        <td>Last GRN No.</td>\r\n                        <td>\r\n\r\n                            <jqxInput class=\"last_grn_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"last_grn_no\"></jqxInput>\r\n                        </td>\r\n                        <td>Suffix</td>\r\n                        <td>\r\n\r\n                            <jqxInput class=\"suf_grn_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"suf_grn_no\"></jqxInput>\r\n                        </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <jqxCheckBox [width]='20' [height]='23' [theme]=\"'energyblue'\" formControlName=\"auto_generate_missue_no\" [checked]=\"'false'\">\r\n                        </jqxCheckBox>\r\n                    </td>\r\n                    <td>Auto Generated Invoice No.</td>\r\n                    <td> </td>\r\n                    <td>Prefix</td>\r\n                    <td>\r\n\r\n                        <jqxInput class=\"pre_missue_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"pre_missue_no\"></jqxInput>\r\n                    </td>\r\n                    <td>Last Invoice No.</td>\r\n                    <td>\r\n\r\n                        <jqxInput class=\"last_missue_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"last_missue_no\"></jqxInput>\r\n                    </td>\r\n                    <td>Suffix</td>\r\n                    <td>\r\n\r\n                        <jqxInput class=\"suf_missue_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"suf_missue_no\"></jqxInput>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <div align=\"center\">\r\n                <label>Validation method</label>\r\n                <table>\r\n                    <tr>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <jqxRadioButton #fifo [width]=\"80\" [height]=\"23\" [theme]=\"'energyblue'\" [checked]=\"'false'\" value=\"FIFO\" formControlName=\"validation_method\" groupName=\"validation\">\r\n                                <span>FIFO</span>\r\n                            </jqxRadioButton>\r\n                        </td>\r\n                        <td>\r\n                            <jqxRadioButton #lifo [width]=\"80\" [height]=\"23\" [theme]=\"'energyblue'\" [checked]=\"'false'\" value=\"LIFO\" formControlName=\"validation_method\" groupName=\"validation\">\r\n                                <span>LIFO</span>\r\n                            </jqxRadioButton>\r\n                        </td>\r\n                        <td>\r\n                            <jqxRadioButton #wa [width]=\"80\" [height]=\"23\" [theme]=\"'energyblue'\" [checked]=\"'false'\" value=\"WA\" formControlName=\"validation_method\" groupName=\"validation\">\r\n                                <span>WA</span>\r\n                            </jqxRadioButton>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </form>\r\n    </jqxValidator>\r\n</div>\r\n<div style=\"padding-top: 10px;text-align:right;padding-right: 7px;\">\r\n    <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" [disabled]=\"!inventoryForm.valid\" (onClick)=\"saveBtn(inventoryForm.value)\">\r\n        Update\r\n    </jqxButton>\r\n    <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"cancelBtn()\">\r\n        Cancel\r\n    </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>\r\n<jqxNotification #msgNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n    [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n    <div id='message'></div>\r\n</jqxNotification>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/inventory-setup/inventory-setup-edit/inventory-setup-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/inventory-setup/inventory-setup-edit/inventory-setup-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventorySetupEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxradiobutton__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxradiobutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
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








var InventorySetupEditComponent = /** @class */ (function () {
    function InventorySetupEditComponent(fb, isService, apiUrl, ehs, cus, cdr) {
        var _this = this;
        this.fb = fb;
        this.isService = isService;
        this.ehs = ehs;
        this.cus = cus;
        this.cdr = cdr;
        this.UpdatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userData = {};
        this.rules = [
            { input: '.fiscal_year_id', message: 'Fiscal year required!', action: 'keydown,blur',
                rule: function (input, commit) {
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
    InventorySetupEditComponent.prototype.ngOnInit = function () {
        this.isData = new __WEBPACK_IMPORTED_MODULE_2__shared__["K" /* InventorySetup */](this.isEditData);
        this.inventoryForm.setValue(this.isData);
        this.fiscal_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                async: false,
                data: this.userData,
                url: this.apiUrl + 'fiscal_year?limit=all',
            };
        this.fiscalAdapter = new jqx.dataAdapter(this.fiscal_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }
        });
    };
    InventorySetupEditComponent.prototype.ngAfterViewInit = function () {
        if (this.isData['validation_method'] == 'FIFO') {
            this.fifo.check();
        }
        else if (this.isData['validation_method'] == 'LIFO') {
            this.lifo.check();
        }
        else {
            this.wa.check();
        }
        //   if(this.isData['auto_generate_grn_no'] == true){
        //    // this.inventoryForm['auto_generate_grn_no'].checked=true;
        //   }
        //   if(this.isData['auto_generate_missue_no'] == true){
        //     //this.inventoryForm['auto_generate_missue_no'].checked=true;
        //   }
        this.myComboBox.selectItem(this.isEditData.fiscal_year_id);
        this.cdr.detectChanges();
    };
    InventorySetupEditComponent.prototype.createForm = function () {
        this.inventoryForm = this.fb.group({
            // 'fiscal_year_id': [null,Validators.required],
            'purchase_order_expiry': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'auto_generate_req_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'auto_generate_po_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'auto_generate_grn_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'auto_generate_missue_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'pre_req_no': [null],
            'suf_req_no': [null],
            'last_req_no': [null],
            'pre_po_no': [null],
            'suf_po_no': [null],
            'last_po_no': [null],
            'pre_grn_no': [null],
            'suf_grn_no': [null],
            'last_grn_no': [null],
            'pre_missue_no': [null],
            'suf_missue_no': [null],
            'last_missue_no': [null],
            'validation_method': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    };
    InventorySetupEditComponent.prototype.saveBtn = function (post) {
        var _this = this;
        if (post['purchase_order_expiry'] == true) {
            post['purchase_order_expiry'] = 1;
        }
        else {
            post['purchase_order_expiry'] = 0;
        }
        if (post['auto_generate_req_no'] == true) {
            post['auto_generate_req_no'] = 1;
        }
        else {
            post['auto_generate_req_no'] = 0;
        }
        if (post['auto_generate_po_no'] == true) {
            post['auto_generate_po_no'] = 1;
        }
        else {
            post['auto_generate_po_no'] = 0;
        }
        if (post['auto_generate_grn_no'] == true) {
            post['auto_generate_grn_no'] = 1;
        }
        else {
            post['auto_generate_grn_no'] = 0;
        }
        if (post['auto_generate_missue_no'] == true) {
            post['auto_generate_missue_no'] = 1;
        }
        else {
            post['auto_generate_missue_no'] = 0;
        }
        post['fiscal_year_id'] = this.myComboBox.val();
        this.myValidator.validate(document.getElementById('inventoryForm'));
        if (post['fiscal_year_id']) {
            this.jqxLoader.open();
            this.isService.update(this.isEditData.id, post).subscribe(function (result) {
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
    InventorySetupEditComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], InventorySetupEditComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], InventorySetupEditComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fifo'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */]) === "function" && _c || Object)
    ], InventorySetupEditComponent.prototype, "fifo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lifo'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */]) === "function" && _d || Object)
    ], InventorySetupEditComponent.prototype, "lifo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('wa'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */]) === "function" && _e || Object)
    ], InventorySetupEditComponent.prototype, "wa", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _f || Object)
    ], InventorySetupEditComponent.prototype, "myComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _g || Object)
    ], InventorySetupEditComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('isEditData'),
        __metadata("design:type", Object)
    ], InventorySetupEditComponent.prototype, "isEditData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InventorySetupEditComponent.prototype, "UpdatedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InventorySetupEditComponent.prototype, "cancelData", void 0);
    InventorySetupEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inventory-setup-edit',
            template: __webpack_require__("./src/app/layout/inventory-master/inventory-setup/inventory-setup-edit/inventory-setup-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/inventory-setup/inventory-setup-edit/inventory-setup-edit.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["L" /* InventorySetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["L" /* InventorySetupService */]) === "function" && _j || Object, String, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _m || Object])
    ], InventorySetupEditComponent);
    return InventorySetupEditComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=inventory-setup-edit.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/inventory-setup/inventory-setup-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventorySetupRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inventory_setup_component__ = __webpack_require__("./src/app/layout/inventory-master/inventory-setup/inventory-setup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__inventory_setup_component__["a" /* InventorySetupComponent */],
    }
];
var InventorySetupRoutingModule = /** @class */ (function () {
    function InventorySetupRoutingModule() {
    }
    InventorySetupRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], InventorySetupRoutingModule);
    return InventorySetupRoutingModule;
}());

//# sourceMappingURL=inventory-setup-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/inventory-setup/inventory-setup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-2 tfm-panel-left\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> Quick Access </h2>\r\n              </div>\r\n               <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                <ng-template #quickAccess></ng-template>\r\n              </jqxPanel> \r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-10 tfm-panel-right\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> Inventory Setup </h2>\r\n              </div>\r\n          <jqxPanel #jPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\">\r\n            <jqxGrid #myGrid\r\n              [height]=\"'100%'\" [width]=\"'99.8%'\" [source]=\"dataAdapter\" [columns]=\"columns\"  \r\n              [virtualmode]=\"true\" [pageable]=\"true\" [filterable]=\"true\" [sortable]=\"true\" [theme]=\"'energyblue'\"\r\n              [rendergridrows]=\"rendergridrows\" [selectionmode]=\"'checkbox'\" [showfilterrow]=\"true\" [showtoolbar]=\"true\" [rendertoolbar]=\"rendertoolbar\">\r\n          </jqxGrid>\r\n          </jqxPanel>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<jqxWindow #myWindow [width]=\"900\" [height]=\"400\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n  \r\n  <div id=\"windowContent\">\r\n <ng-template #Insert></ng-template>\r\n \r\n  </div>\r\n</jqxWindow>\r\n<jqxNotification #msgNotification\r\n[width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n[autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\" [theme]=\"'energyblue'\">\r\n<div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='listingMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/inventory-setup/inventory-setup.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/inventory-setup/inventory-setup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventorySetupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_setup_edit_inventory_setup_edit_component__ = __webpack_require__("./src/app/layout/inventory-master/inventory-setup/inventory-setup-edit/inventory-setup-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inventory_setup_add_inventory_setup_add_component__ = __webpack_require__("./src/app/layout/inventory-master/inventory-setup/inventory-setup-add/inventory-setup-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_pdfmake_build_pdfmake__ = __webpack_require__("./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_vfs_fonts__ = __webpack_require__("./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
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










var InventorySetupComponent = /** @class */ (function () {
    function InventorySetupComponent(apiUrl, isService, componentFactoryResolver, fileExport, cus, vc) {
        var _this = this;
        this.isService = isService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.fileExport = fileExport;
        this.cus = cus;
        this.vc = vc;
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
                // this.myWindow.position({ x: '25%', y:  '13%' });
                _this.myWindow.draggable(true);
                _this.myWindow.title('Add');
                _this.myWindow.open();
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__inventory_setup_add_inventory_setup_add_component__["a" /* InventorySetupAddComponent */]);
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
                        _this.isService.destroy('[' + ids + ']').subscribe(function (data) {
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
                _this.isService.index(post)
                    .subscribe(function (data) {
                    // set items to json response
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
    InventorySetupComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
    };
    InventorySetupComponent.prototype.ngAfterViewInit = function () {
    };
    InventorySetupComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    InventorySetupComponent.prototype.getTable = function () {
        var _this = this;
        var myUrl = this.apiUrl + 'inventory_setup';
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'string' },
                    { name: 'fiscal_year_name', type: 'String', map: 'fiscal_year>name' },
                    { name: 'fiscal_year_id', type: 'String' },
                    { name: 'purchase_order_expiry', type: 'String' },
                    { name: 'auto_generate_req_no', type: 'string' },
                    { name: 'auto_generate_po_no', type: 'string' },
                    { name: 'auto_generate_grn_no', type: 'string' },
                    { name: 'auto_generate_missue_no', type: 'string' },
                    { name: 'pre_req_no', type: 'string' },
                    { name: 'suf_req_no', type: 'string' },
                    { name: 'last_req_no', type: 'string' },
                    { name: 'pre_po_no', type: 'string' },
                    { name: 'suf_po_no', type: 'string' },
                    { name: 'last_po_no', type: 'string' },
                    { name: 'pre_grn_no', type: 'string' },
                    { name: 'suf_grn_no', type: 'string' },
                    { name: 'last_grn_no', type: 'string' },
                    { name: 'pre_missue_no', type: 'string' },
                    { name: 'suf_missue_no', type: 'string' },
                    { name: 'last_missue_no', type: 'string' },
                    { name: 'validation_method', type: 'string' },
                ],
                id: 'id',
                root: 'data',
                pagesize: 20,
                totalrecords: 100,
                url: myUrl,
                data: this.userData,
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
            { text: 'Fiscal year', datafield: 'fiscal_year_id', displayfield: 'fiscal_year_name', columntype: 'textbox', filtercondition: 'starts_with', width: 100 },
            { text: 'Prefix Requisition no', datafield: 'pre_req_no', columntype: 'textbox', filterable: false, sortable: false, width: 150 },
            { text: 'Suffix Requisition no', datafield: 'suf_req_no', columntype: 'textbox', filterable: false, sortable: false, width: 150 },
            { text: 'Last Requisition no', datafield: 'last_req_no', columntype: 'textbox', filterable: false, sortable: false, width: 150 },
            { text: 'Prefix Purchase Order no', datafield: 'pre_po_no', columntype: 'textbox', filterable: false, sortable: false, width: 170 },
            { text: 'Suffix Purchase Order no', datafield: 'suf_po_no', columntype: 'textbox', filterable: false, sortable: false, width: 170 },
            { text: 'Last Purchase Order no', datafield: 'last_po_no', columntype: 'textbox', filterable: false, sortable: false, width: 170 },
            { text: 'Prefix GRN no', datafield: 'pre_grn_no', columntype: 'textbox', filterable: false, sortable: false, width: 100 },
            { text: 'Suffix GRN no', datafield: 'suf_grn_no', columntype: 'textbox', filterable: false, sortable: false, width: 100 },
            { text: 'Last GRN no', datafield: 'last_grn_no', columntype: 'textbox', filterable: false, sortable: false, width: 100 },
            { text: 'Prefix Invoice no', datafield: 'pre_missue_no', columntype: 'textbox', filterable: false, sortable: false, width: 120 },
            { text: 'Suffix Invoice no', datafield: 'suf_missue_no', columntype: 'textbox', filterable: false, sortable: false, width: 120 },
            { text: 'Last Invoice no', datafield: 'last_missue_no', columntype: 'textbox', filterable: false, sortable: false, width: 120 },
            { text: 'Validation method', datafield: 'validation_method', columntype: 'textbox', filterable: false, sortable: false, width: 130 },
            {
                text: 'Edit', datafield: 'Edit', sortable: false, filterable: false, columntype: 'button', width: 70,
                cellsrenderer: function () {
                    return 'Edit';
                },
                buttonclick: function (row) {
                    _this.editrow = row;
                    var dataRecord = _this.myGrid.getrowdata(_this.editrow);
                    // this.myWindow.position({ x: '25%', y:  '13%' });
                    _this.myWindow.draggable(true);
                    _this.myWindow.title('Edit');
                    _this.myWindow.open();
                    var component_factory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__inventory_setup_edit_inventory_setup_edit_component__["a" /* InventorySetupEditComponent */]);
                    _this.Insert.clear();
                    var dynamic_Component = _this.Insert.createComponent(component_factory);
                    dynamic_Component.instance.isEditData = dataRecord;
                    dynamic_Component.instance.UpdatedData.subscribe(function (result) {
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
                }
            }
        ];
    };
    InventorySetupComponent.prototype.createPdfFormat = function (type) {
        var _this = this;
        var rows = [];
        var post = {
            limit: 'all'
        };
        __WEBPACK_IMPORTED_MODULE_7_pdfmake_build_pdfmake__["vfs"] = __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_vfs_fonts__["pdfMake"].vfs;
        this.isService.index(post)
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
                __WEBPACK_IMPORTED_MODULE_7_pdfmake_build_pdfmake__["createPdf"](dd).download(fileName);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_7_pdfmake_build_pdfmake__["createPdf"](dd).print();
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], InventorySetupComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _b || Object)
    ], InventorySetupComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jPanel'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
    ], InventorySetupComponent.prototype, "jPanel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _d || Object)
    ], InventorySetupComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _e || Object)
    ], InventorySetupComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _f || Object)
    ], InventorySetupComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Insert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object)
    ], InventorySetupComponent.prototype, "Insert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _h || Object)
    ], InventorySetupComponent.prototype, "quickAccess", void 0);
    InventorySetupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inventory-setup',
            template: __webpack_require__("./src/app/layout/inventory-master/inventory-setup/inventory-setup.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/inventory-setup/inventory-setup.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [String, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__shared__["L" /* InventorySetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared__["L" /* InventorySetupService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_6__shared__["E" /* FileExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared__["E" /* FileExportService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_6__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared__["v" /* CurrentUserService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _o || Object])
    ], InventorySetupComponent);
    return InventorySetupComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=inventory-setup.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/inventory-setup/inventory-setup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventorySetupModule", function() { return InventorySetupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inventory_setup_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/inventory-setup/inventory-setup-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_setup_add_inventory_setup_add_component__ = __webpack_require__("./src/app/layout/inventory-master/inventory-setup/inventory-setup-add/inventory-setup-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inventory_setup_component__ = __webpack_require__("./src/app/layout/inventory-master/inventory-setup/inventory-setup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inventory_setup_edit_inventory_setup_edit_component__ = __webpack_require__("./src/app/layout/inventory-master/inventory-setup/inventory-setup-edit/inventory-setup-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InventorySetupModule = /** @class */ (function () {
    function InventorySetupModule() {
    }
    InventorySetupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__inventory_setup_routing_module__["a" /* InventorySetupRoutingModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__inventory_setup_add_inventory_setup_add_component__["a" /* InventorySetupAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__inventory_setup_edit_inventory_setup_edit_component__["a" /* InventorySetupEditComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__inventory_setup_add_inventory_setup_add_component__["a" /* InventorySetupAddComponent */],
                __WEBPACK_IMPORTED_MODULE_5__inventory_setup_component__["a" /* InventorySetupComponent */],
                __WEBPACK_IMPORTED_MODULE_6__inventory_setup_edit_inventory_setup_edit_component__["a" /* InventorySetupEditComponent */]
            ]
        })
    ], InventorySetupModule);
    return InventorySetupModule;
}());

//# sourceMappingURL=inventory-setup.module.js.map

/***/ })

});
//# sourceMappingURL=inventory-setup.module.chunk.js.map