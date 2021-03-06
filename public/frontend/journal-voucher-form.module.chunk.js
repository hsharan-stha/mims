webpackJsonp(["journal-voucher-form.module"],{

/***/ "./src/app/layout/accounting/journal-voucher-form/journal-voucher-form-add/journal-voucher-form-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n  <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n      <form name=\"jvfForm\" [formGroup]=\"jvfForm\" style=\"padding-bottom:20px;\">\r\n          <table class=\"table-w-tooltip\">\r\n             <tr>\r\n              <td style=\"padding-bottom:10px;\">Date</td>\r\n              <td style=\"padding-bottom:10px;\">\r\n                <jqxDateTimeInput #datetime \r\n                class=\"date\" [formatString]=\"'yyyy-MM-dd'\" [theme]=\"'energyblue'\" [height]=\"23\" [width]=\"180\" formControlName=\"date\"></jqxDateTimeInput>\r\n              </td>\r\n              <td style=\"padding-bottom:10px;\">Voucher No</td>\r\n              <td style=\"padding-bottom:10px;\">\r\n                <jqxInput class=\"voucher_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"vouchar_no\"></jqxInput>\r\n              </td>\r\n              <td style=\"padding-bottom:10px;\">Remarks</td>\r\n              <td style=\"padding-bottom:10px;\">\r\n                <jqxInput class=\"remarks\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"remarks\"></jqxInput>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n      </form>\r\n  </jqxValidator>\r\n  <div class=\"tfm-custom-toolbar tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\" style=\"margin-right:4px;\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n              <strong>Journal Voucher Form : </strong>\r\n              <jqxButton style=\"margin-left: 10px;\"  (onClick)=\"addNewItem()\" [theme]=\"'energyblue'\">\r\n                      Add New Item\r\n              </jqxButton>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <jqxGrid #jvfAddGrid [width]=\"'99%'\" [height]=\"200\" [source]=\"dataAdapter\" [columns]=\"columns\"\r\n      [editable]=\"true\" [enabletooltips]=\"true\"  [showstatusbar]=\"true\" [showaggregates]=\"true\" [selectionmode]=\"'multiplecellsadvanced'\" [theme]=\"'energyblue'\">\r\n  </jqxGrid>\r\n</div>\r\n\r\n<div style=\"padding-top: 10px; text-align:right;\">\r\n  <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!jvfForm.valid\" (onClick)=\"saveBtn(jvfForm.value)\" [theme]=\"'energyblue'\">\r\n      Save\r\n  </jqxButton>\r\n  <jqxButton style=\"margin-right: 5px;\" (onClick)=\"cancelBtn()\" [theme]=\"'energyblue'\">\r\n      Cancel\r\n  </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/accounting/journal-voucher-form/journal-voucher-form-add/journal-voucher-form-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/accounting/journal-voucher-form/journal-voucher-form-add/journal-voucher-form-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalVoucherFormAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxdatetimeinput.ts");
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









var JournalVoucherFormAddComponent = /** @class */ (function () {
    function JournalVoucherFormAddComponent(fb, apiUrl, jvfs, ehs, cdr, ats, cus) {
        var _this = this;
        this.fb = fb;
        this.jvfs = jvfs;
        this.ehs = ehs;
        this.cdr = cdr;
        this.ats = ats;
        this.cus = cus;
        this.AddedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.itemLoader = false;
        this.userDataRole = {};
        this.userData = {};
        this.source = {
            datatype: 'json',
            datafields: [
                { name: 'ac_code', type: 'string' },
                { name: 'account_head_name', type: 'string' },
                { name: 'cr_dr', type: 'string' },
                { name: 'cost_center_id', type: 'string' },
                { name: 'cost_center_name', type: 'string' },
                { name: 'cr_value', type: 'string' },
                { name: 'dr_value', type: 'string' },
                { name: 'value', type: 'string' },
                { name: 'bank_name', type: 'string' },
                { name: 'cheque_no', type: 'string' },
                { name: 'remarks', type: 'string' },
                { name: 'particulars', type: 'string' },
            ],
            updaterow: function (rowid, rowdata, commit) {
                commit(true);
            },
            localdata: []
        };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.crDrAdapter = [
            { value: 'cr', label: 'CR' },
            { value: 'dr', label: 'DR' },
        ];
        this.columns = [
            {
                text: 'Accound Head', datafield: 'ac_code', displayfield: 'name', editable: true, columntype: 'combobox',
                createeditor: function (row, column, editor) {
                    _this.itemLoader = true;
                    editor.jqxComboBox({
                        source: _this.accHeadItemAdapter,
                        displayMember: "name",
                        valueMember: "group_code",
                        searchMode: "containsignorecase"
                    });
                },
            },
            {
                text: 'Particulars', datafield: 'particulars', columntype: 'textbox', width: 150,
            },
            {
                text: 'Dr', datafield: 'dr_value', columntype: 'textbox', width: 100,
                cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                    if (newvalue != oldvalue) {
                        var currentRow = _this.jvfAddGrid.getrowdata(row).boundindex;
                        _this.jvfAddGrid.setcellvalue(currentRow, 'cr_value', 0);
                    }
                },
                aggregates: [{
                        'Total': function (aggregatedValue, currentValue, column, record) {
                            var total = parseFloat(record['dr_value']);
                            return aggregatedValue + total;
                        }
                    }], aggregatesrenderer: function (aggregates) {
                    var value = aggregates['Total'];
                    _this.valueTotal = value;
                    if (!value) {
                        value = 0;
                        _this.valueTotal = 0;
                    }
                    var renderstring = '<div style="float: left; margin: 4px; overflow: hidden;">' + "Total" + ': ' + value + '</div>';
                    return renderstring;
                }
            },
            {
                text: 'Cr', datafield: 'cr_value', columntype: 'textbox', width: 100,
                cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                    if (newvalue != oldvalue) {
                        var currentRow = _this.jvfAddGrid.getrowdata(row).boundindex;
                        _this.jvfAddGrid.setcellvalue(currentRow, 'dr_value', 0);
                    }
                },
                aggregates: [{
                        'Total': function (aggregatedValue, currentValue, column, record) {
                            var total = parseFloat(record['cr_value']);
                            return aggregatedValue + total;
                        }
                    }], aggregatesrenderer: function (aggregates) {
                    var value = aggregates['Total'];
                    _this.valueTotal = value;
                    if (!value) {
                        value = 0;
                        _this.valueTotal = 0;
                    }
                    var renderstring = '<div style="float: left; margin: 4px; overflow: hidden;">' + "Total" + ': ' + value + '</div>';
                    return renderstring;
                },
            },
            { text: 'Cheque No', datafield: 'cheque_no', columntype: 'textbox', width: 140 },
            { text: 'Bank Name', datafield: 'bank_name', columntype: 'textbox', width: 140 },
            {
                text: 'Cost Center', datafield: 'cost_center_id', displayfield: 'cname', columntype: 'combobox',
                createeditor: function (row, column, editor) {
                    _this.itemLoader = true;
                    editor.jqxComboBox({
                        source: _this.costCenterAdapter,
                        displayMember: "name",
                        valueMember: "id",
                        searchMode: "containsignorecase"
                    });
                }
            },
            // { text: 'Remarks', datafield: 'remarks', columntype: 'textbox', width: 140 },
            {
                text: 'Actions', datafield: 'Delete', columntype: 'button', width: 70,
                cellsrenderer: function () {
                    return 'Delete';
                },
                buttonclick: function (row) {
                    var rowid = _this.jvfAddGrid.getrowid(row);
                    _this.jvfAddGrid.deleterow(rowid);
                }
            }
        ];
        this.rules = [];
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.userDataRole = this.cus.getRole();
        this.createForm();
    }
    JournalVoucherFormAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accHeadItemSource = {
            datatype: "json",
            contentType: "application/json; charset=utf-8",
            datafields: [
                { name: 'id' },
                { name: 'name' },
                { name: 'group_code' }
            ],
            data: this.userData,
            url: this.apiUrl + 'account_head?limit=all&transact=1'
        };
        this.accHeadItemAdapter = new jqx.dataAdapter(this.accHeadItemSource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                // for (let i = 0; i < tData.length; i++) {
                //   tData[i]['code'] = tData[i]['code'] + ' - ' + tData[i]['name'];
                // }
                _this.itemLoader = false;
                return tData;
            },
            loadError: function (jqXHR, status, error) {
                _this.itemLoader = false;
            }
        });
        this.costCenterSource =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                async: false,
                url: this.apiUrl + 'costcenter?limit=all'
            };
        this.costCenterAdapter = new jqx.dataAdapter(this.costCenterSource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                _this.itemLoader = false;
                return tData;
            },
            loadError: function (jqXHR, status, error) {
                _this.itemLoader = false;
            }
        });
    };
    JournalVoucherFormAddComponent.prototype.ngAfterViewInit = function () {
        this.datetime.value(new Date());
        this.cdr.detectChanges();
    };
    JournalVoucherFormAddComponent.prototype.createForm = function () {
        this.jvfForm = this.fb.group({
            'date': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'vouchar_no': [null],
            'remarks': [null],
        });
    };
    JournalVoucherFormAddComponent.prototype.addNewItem = function () {
        var datarow = this.generaterow();
        this.jvfAddGrid.addrow(null, datarow);
    };
    JournalVoucherFormAddComponent.prototype.generaterow = function () {
        var row = {};
        row['ac_code'] = '';
        row['cost_center_id'] = '';
        row['value'] = '';
        row['remarks'] = '';
        row['particulars'] = '';
        row['cheque_no'] = '';
        row['bank_name'] = '';
        return row;
    };
    JournalVoucherFormAddComponent.prototype.saveBtn = function (post) {
        var _this = this;
        console.log(post);
        var jvfgridData = this.jvfAddGrid.getrows();
        // for (let i = 0; i < jvfgridData.length; i++) {
        //   jvfgridData[i]['value'] = (jvfgridData[i]['cr_dr'] == 'cr') ? -Math.abs(jvfgridData[i]['value']) : Math.abs(jvfgridData[i]['value']);
        // }
        post['accountTransactionSplits'] = jvfgridData;
        post['vouchar_type'] = 'JV';
        post['enter_by'] = this.userDataRole['name'];
        this.myValidator.validate(document.getElementById('jvfForm'));
        if (post['accountTransactionSplits'].length > 0) {
            this.jqxLoader.open();
            this.ats.store(post).subscribe(function (result) {
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
    JournalVoucherFormAddComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jvfAddGrid'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _a || Object)
    ], JournalVoucherFormAddComponent.prototype, "jvfAddGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _b || Object)
    ], JournalVoucherFormAddComponent.prototype, "myComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox2'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], JournalVoucherFormAddComponent.prototype, "myComboBox2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datetime'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */]) === "function" && _d || Object)
    ], JournalVoucherFormAddComponent.prototype, "datetime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _e || Object)
    ], JournalVoucherFormAddComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _f || Object)
    ], JournalVoucherFormAddComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _g || Object)
    ], JournalVoucherFormAddComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], JournalVoucherFormAddComponent.prototype, "AddedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], JournalVoucherFormAddComponent.prototype, "cancelData", void 0);
    JournalVoucherFormAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-journal-voucher-form-add',
            template: __webpack_require__("./src/app/layout/accounting/journal-voucher-form/journal-voucher-form-add/journal-voucher-form-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/accounting/journal-voucher-form/journal-voucher-form-add/journal-voucher-form-add.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _h || Object, String, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["Q" /* JournalVoucherFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["Q" /* JournalVoucherFormService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* AccountTransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* AccountTransactionService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _o || Object])
    ], JournalVoucherFormAddComponent);
    return JournalVoucherFormAddComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=journal-voucher-form-add.component.js.map

/***/ }),

/***/ "./src/app/layout/accounting/journal-voucher-form/journal-voucher-form-edit/journal-voucher-form-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n  <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n      <form name=\"jvfForm\" [formGroup]=\"jvfForm\" style=\"padding-bottom:20px;\">\r\n          <table class=\"table-w-tooltip\">\r\n             <tr>\r\n              <td style=\"padding-bottom:10px;\">Date</td>\r\n              <td style=\"padding-bottom:10px;\">\r\n                <jqxDateTimeInput #datetime \r\n                class=\"date\" [formatString]=\"'yyyy-MM-dd'\" [theme]=\"'energyblue'\" [height]=\"23\" [width]=\"180\" formControlName=\"date\"></jqxDateTimeInput>\r\n              </td>\r\n              <td style=\"padding-bottom:10px;\">Voucher No</td>\r\n              <td style=\"padding-bottom:10px;\">\r\n                <jqxInput class=\"voucher_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"vouchar_no\"></jqxInput>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n      </form>\r\n  </jqxValidator>\r\n  <div class=\"tfm-custom-toolbar tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\" style=\"margin-right:4px;\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n              <strong>Journal Voucher Form : </strong>\r\n              <!-- <jqxButton style=\"margin-left: 10px;\" (onClick)=\"addNewItem()\" [theme]=\"'energyblue'\">\r\n                      Add New Item\r\n              </jqxButton> -->\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <jqxGrid #jvfEditGrid [width]=\"'99%'\" [height]=\"200\" [source]=\"dataAdapter\" [columns]=\"columns\"\r\n      [editable]=\"true\" [enabletooltips]=\"true\"  [showstatusbar]=\"true\" [showaggregates]=\"true\" [selectionmode]=\"'multiplecellsadvanced'\" [theme]=\"'energyblue'\">\r\n  </jqxGrid>\r\n</div>\r\n\r\n<div style=\"padding-top: 10px; text-align:right;\">\r\n  <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!jvfForm.valid\" (onClick)=\"saveBtn(jvfForm.value)\" [theme]=\"'energyblue'\">\r\n      Update\r\n  </jqxButton>\r\n  <jqxButton style=\"margin-right: 5px;\" (onClick)=\"cancelBtn()\" [theme]=\"'energyblue'\">\r\n      Cancel\r\n  </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/accounting/journal-voucher-form/journal-voucher-form-edit/journal-voucher-form-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/accounting/journal-voucher-form/journal-voucher-form-edit/journal-voucher-form-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalVoucherFormEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxdatetimeinput.ts");
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









var JournalVoucherFormEditComponent = /** @class */ (function () {
    function JournalVoucherFormEditComponent(fb, apiUrl, ehs, jvfs, cdr, ats, cus) {
        var _this = this;
        this.fb = fb;
        this.ehs = ehs;
        this.jvfs = jvfs;
        this.cdr = cdr;
        this.ats = ats;
        this.cus = cus;
        this.UpdatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.itemLoader = false;
        this.accArray = [];
        this.userData = {};
        this.source = {
            datatype: 'json',
            datafields: [
                { name: 'account_head_id', type: 'string', map: 'account_head>id' },
                { name: 'account_head_name', type: 'string', map: 'account_head>name' },
                { name: 'cr_dr', type: 'string' },
                { name: 'cost_center_id', type: 'string', map: 'cost_center>id' },
                { name: 'cost_center_name', type: 'string', map: 'cost_center>name' },
                { name: 'cr_value', type: 'string', map: 'value>cr_value' },
                { name: 'dr_value', type: 'string', map: 'value>dr_value' },
                { name: 'value', type: 'string' },
                { name: 'remarks', type: 'string' },
                { name: 'reference', type: 'string' },
            ],
            updaterow: function (rowid, rowdata, commit) {
                commit(true);
            },
            localdata: []
        };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.crDrAdapter = [
            { cr_dr: 'cr', label: 'CR' },
            { cr_dr: 'dr', label: 'DR' },
        ];
        this.columns = [
            {
                text: 'Accound Head', datafield: 'account_head_id', displayfield: 'account_head_name', editable: true, columntype: 'combobox',
                createeditor: function (row, column, editor) {
                    _this.itemLoader = true;
                    editor.jqxComboBox({
                        source: _this.accHeadItemAdapter,
                        displayMember: "code",
                        valueMember: "id",
                        searchMode: "containsignorecase"
                    });
                },
            },
            {
                text: 'Dr', datafield: 'dr_value', columntype: 'textbox', width: 100,
                cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                    if (newvalue != oldvalue) {
                        var currentRow = _this.jvfEditGrid.getrowdata(row).boundindex;
                        _this.jvfEditGrid.setcellvalue(currentRow, 'cr_value', 0);
                    }
                },
                aggregates: [{
                        'Total': function (aggregatedValue, currentValue, column, record) {
                            var total = parseFloat(record['dr_value']);
                            return aggregatedValue + total;
                        }
                    }], aggregatesrenderer: function (aggregates) {
                    var value = aggregates['Total'];
                    _this.valueTotal = value;
                    if (!value) {
                        value = 0;
                        _this.valueTotal = 0;
                    }
                    var renderstring = '<div style="float: left; margin: 4px; overflow: hidden;">' + "Total" + ': ' + value + '</div>';
                    return renderstring;
                }
            },
            {
                text: 'Cr', datafield: 'cr_value', columntype: 'textbox', width: 100,
                cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                    if (newvalue != oldvalue) {
                        var currentRow = _this.jvfEditGrid.getrowdata(row).boundindex;
                        _this.jvfEditGrid.setcellvalue(currentRow, 'dr_value', 0);
                    }
                },
                aggregates: [{
                        'Total': function (aggregatedValue, currentValue, column, record) {
                            var total = parseFloat(record['cr_value']);
                            return aggregatedValue + total;
                        }
                    }], aggregatesrenderer: function (aggregates) {
                    var value = aggregates['Total'];
                    _this.valueTotal = value;
                    if (!value) {
                        value = 0;
                        _this.valueTotal = 0;
                    }
                    var renderstring = '<div style="float: left; margin: 4px; overflow: hidden;">' + "Total" + ': ' + value + '</div>';
                    return renderstring;
                },
            },
            {
                text: 'Cost Center', datafield: 'cost_center_id', displayfield: 'cost_center_name', columntype: 'combobox',
                createeditor: function (row, column, editor) {
                    _this.itemLoader = true;
                    editor.jqxComboBox({
                        source: _this.costCenterAdapter,
                        displayMember: "name",
                        valueMember: "id",
                        searchMode: "containsignorecase"
                    });
                }
            },
            { text: 'Remarks', datafield: 'remarks', columntype: 'textbox', width: 140 },
            {
                text: 'Reference', datafield: 'reference', columntype: 'textbox', width: 150,
            },
            {
                text: 'Actions', datafield: 'Delete', columntype: 'button', width: 70,
                cellsrenderer: function () {
                    return 'Delete';
                },
                buttonclick: function (row) {
                    var rowid = _this.jvfEditGrid.getrowid(row);
                    _this.jvfEditGrid.deleterow(rowid);
                }
            }
        ];
        this.rules = [];
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.createForm();
    }
    JournalVoucherFormEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.info(this.JVFEditData);
        this.EditData = new __WEBPACK_IMPORTED_MODULE_2__shared__["P" /* JournalVoucherForm */](this.JVFEditData);
        this.jvfForm.setValue(this.EditData);
        this.accHeadItemSource = {
            datatype: "json",
            contentType: "application/json; charset=utf-8",
            datafields: [
                { name: 'id' },
                { name: 'account_head_id' },
                { name: 'code' }
            ],
            data: this.userData,
            url: this.apiUrl + 'account_head?limit=all'
        };
        this.accHeadItemAdapter = new jqx.dataAdapter(this.accHeadItemSource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                for (var i = 0; i < tData.length; i++) {
                    tData[i]['code'] = tData[i]['code'] + ' - ' + tData[i]['name'];
                    tData[i]['account_head_id'] = tData[i]['id'];
                }
                _this.itemLoader = false;
                return tData;
            },
            loadError: function (jqXHR, status, error) {
                _this.itemLoader = false;
            }
        });
        this.costCenterSource =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                    { name: 'cost_center_id' }
                ],
                data: this.userData,
                async: false,
                url: this.apiUrl + 'costcenter?limit=all'
            };
        this.costCenterAdapter = new jqx.dataAdapter(this.costCenterSource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                _this.itemLoader = false;
                return tData;
            },
            loadError: function (jqXHR, status, error) {
                _this.itemLoader = false;
            }
        });
    };
    JournalVoucherFormEditComponent.prototype.ngAfterViewInit = function () {
        this.source.localdata = this.JVFEditData['account_transaction_splits'];
        this.jvfEditGrid.updatebounddata("cells");
        this.cdr.detectChanges();
    };
    JournalVoucherFormEditComponent.prototype.createForm = function () {
        this.jvfForm = this.fb.group({
            'date': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'vouchar_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    };
    JournalVoucherFormEditComponent.prototype.addNewItem = function () {
        var datarow = this.generaterow();
        this.jvfEditGrid.addrow(null, datarow);
    };
    JournalVoucherFormEditComponent.prototype.generaterow = function () {
        var row = {};
        row['account_head_id'] = '';
        row['cost_center_id'] = '';
        row['value'] = '';
        row['remarks'] = '';
        row['reference'] = '';
        return row;
    };
    JournalVoucherFormEditComponent.prototype.saveBtn = function (post) {
        var _this = this;
        var jvfgridData = this.jvfEditGrid.getrows();
        for (var i = 0; i < jvfgridData.length; i++) {
            jvfgridData[i]['value'] = (jvfgridData[i]['cr_dr'] == 'cr') ? -Math.abs(jvfgridData[i]['value']) : Math.abs(jvfgridData[i]['value']);
        }
        post['accountTransactionSplits'] = jvfgridData;
        post['vouchar_type'] = 'JV';
        this.myValidator.validate(document.getElementById('jvfForm'));
        if (post['accountTransactionSplits'].length > 0) {
            this.jqxLoader.open();
            this.ats.update(this.JVFEditData.id, post).subscribe(function (result) {
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
    JournalVoucherFormEditComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jvfEditGrid'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _a || Object)
    ], JournalVoucherFormEditComponent.prototype, "jvfEditGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _b || Object)
    ], JournalVoucherFormEditComponent.prototype, "myComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox2'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], JournalVoucherFormEditComponent.prototype, "myComboBox2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datetime'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */]) === "function" && _d || Object)
    ], JournalVoucherFormEditComponent.prototype, "datetime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _e || Object)
    ], JournalVoucherFormEditComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _f || Object)
    ], JournalVoucherFormEditComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _g || Object)
    ], JournalVoucherFormEditComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('JVFEditData'),
        __metadata("design:type", Object)
    ], JournalVoucherFormEditComponent.prototype, "JVFEditData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], JournalVoucherFormEditComponent.prototype, "UpdatedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], JournalVoucherFormEditComponent.prototype, "cancelData", void 0);
    JournalVoucherFormEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-journal-voucher-form-edit',
            template: __webpack_require__("./src/app/layout/accounting/journal-voucher-form/journal-voucher-form-edit/journal-voucher-form-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/accounting/journal-voucher-form/journal-voucher-form-edit/journal-voucher-form-edit.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _h || Object, String, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["Q" /* JournalVoucherFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["Q" /* JournalVoucherFormService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* AccountTransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* AccountTransactionService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _o || Object])
    ], JournalVoucherFormEditComponent);
    return JournalVoucherFormEditComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=journal-voucher-form-edit.component.js.map

/***/ }),

/***/ "./src/app/layout/accounting/journal-voucher-form/journal-voucher-form-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalVoucherFormRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__journal_voucher_form_component__ = __webpack_require__("./src/app/layout/accounting/journal-voucher-form/journal-voucher-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__journal_voucher_form_component__["a" /* JournalVoucherFormComponent */]
    }
];
var JournalVoucherFormRoutingModule = /** @class */ (function () {
    function JournalVoucherFormRoutingModule() {
    }
    JournalVoucherFormRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], JournalVoucherFormRoutingModule);
    return JournalVoucherFormRoutingModule;
}());

//# sourceMappingURL=journal-voucher-form-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/accounting/journal-voucher-form/journal-voucher-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 tfm-panel-left\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                    <h2> Quick Access </h2>\r\n                </div>\r\n                <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                    <ng-template #quickAccess></ng-template>\r\n                </jqxPanel>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-10 tfm-panel-right\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                    <h2> Journal Voucher Form </h2>\r\n                </div>\r\n                <jqxPanel [width]=\"'99.9%'\" [height]=\"'80.2%'\" [theme]=\"'energyblue'\">\r\n                    <jqxGrid #myGrid [width]=\"'99.8%'\" [height]=\"'100%'\" [source]=\"dataAdapter\" [sortable]=\"true\" [filterable]=\"true\" [pageable]=\"true\"\r\n                        [columns]=\"columns\" [theme]=\"'energyblue'\" (onRowselect)=\"rowChange($event)\" [showtoolbar]=\"true\" (onRowunselect)=\"rowUnChange($event)\"\r\n                        [rendertoolbar]=\"rendertoolbar\" [selectionmode]=\"'checkbox'\" [showfilterrow]=\"true\" [virtualmode]=\"true\"\r\n                        [rendergridrows]=\"rendergridrows\">\r\n                    </jqxGrid>\r\n                </jqxPanel>\r\n                <div class=\"submit-form\" style=\"padding:10px;\">\r\n                    <form name=\"approveReqForm\" [formGroup]=\"approveReqForm\">\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-2\">\r\n                                <label> Approve By </label>\r\n                                <jqxInput class=\"approve_by\" [theme]=\"'energyblue'\" [placeHolder]=\"'Shyam Sharma.'\" [height]=\"23\" [width]=\"170\" formControlName=\"approve_by\"></jqxInput>\r\n                            </div>\r\n                            <div class=\"form-group col-md-2\">\r\n                                <label> Approve Date </label>\r\n                                <jqxInput class=\"approve_date\" [theme]=\"'energyblue'\" [placeHolder]=\"'YYYY-MM-dd'\" [height]=\"23\" [width]=\"170\" formControlName=\"approve_date\"></jqxInput>\r\n                            </div>\r\n                            <div class=\"form-group text-right m-2\">\r\n                                <label class=\"mt-4\">&nbsp;</label>\r\n                                <jqxButton [theme]=\"'energyblue'\" [disabled]=\"!approveReqForm.valid\" [width]=\"140\" (onClick)=\"approve(approveReqForm.value)\">\r\n                                    <i class=\"fa fa-check\" style=\"color: #5eba7d;\" aria-hidden=\"true\"></i> Approve\r\n                                </jqxButton>\r\n                            </div>\r\n                            <!-- <div class=\"form-group text-right m-2\">\r\n                                <label class=\"mt-4\">&nbsp;</label>\r\n                                <jqxButton [theme]=\"'energyblue'\" [disabled]=\"!approveReqForm.valid\" [width]=\"140\" (onClick)=\"reject(approveReqForm.value)\">\r\n                                    <i style=\"color: #cc0000;\" class=\"fa fa-times\" aria-hidden=\"true\"></i> Reject\r\n                                </jqxButton>\r\n                            </div> -->\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<jqxWindow #myWindow [width]=\"'100%'\" [height]=\"'70%'\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n    <div id=\"windowContent\">\r\n        <ng-template #Insert></ng-template>\r\n    </div>\r\n</jqxWindow>\r\n<jqxWindow #myDetailWindow [width]=\"'90%'\" [height]=\"'40%'\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n    <div class=\"header\">Header Div</div>\r\n    <div id=\"windowContent\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">S.N</th>\r\n                    <th>Ac Code</th>\r\n                    <th>Ac Name</th>\r\n                    <th>Particular</th>\r\n                    <th>DR</th>\r\n                    <th>CR</th>\r\n                    <th>Bank Name</th>\r\n                    <th>Cheque No</th>\r\n                    <th>Cost Center</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of tableDatas; let i=index;\">\r\n                    <th>{{i+1}}</th>\r\n                    <td>{{ data['ac_code'] }}</td>\r\n                    <td>{{ data['account_head'] && data['account_head']['name'] || '' }}</td>\r\n                    <td>{{ data['particulars'] }}</td>\r\n                    <td>{{ data['cr_value'] }}</td>\r\n                    <td>{{ data['dr_value'] }}</td>\r\n                    <td>{{ data['bank_name'] }}</td>\r\n                    <td>{{ data['cheque_no'] }}</td>\r\n                    <td>{{ data['cost_center'] && data['cost_center']['name'] || ''}} </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</jqxWindow>\r\n<jqxNotification #msgNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n    [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\" [theme]=\"'energyblue'\">\r\n    <div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n    [autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n    <div id='listingMessage'></div>\r\n</jqxNotification>\r\n<jqxNotification #errNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n  [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'error'\">\r\n  <div id='error'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/accounting/journal-voucher-form/journal-voucher-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/accounting/journal-voucher-form/journal-voucher-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalVoucherFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__journal_voucher_form_add_journal_voucher_form_add_component__ = __webpack_require__("./src/app/layout/accounting/journal-voucher-form/journal-voucher-form-add/journal-voucher-form-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
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








var JournalVoucherFormComponent = /** @class */ (function () {
    function JournalVoucherFormComponent(jvfs, componentFactoryResolver, apiUrl, fileExport, ats, fb, cus) {
        var _this = this;
        this.jvfs = jvfs;
        this.componentFactoryResolver = componentFactoryResolver;
        this.fileExport = fileExport;
        this.ats = ats;
        this.fb = fb;
        this.cus = cus;
        this.editrow = -1;
        this.tableDatas = [];
        this.userData = {};
        this.userDataRole = {};
        this.selectedOrderList = [];
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
            var resetRowButton = jqwidgets.createInstance('#buttonContainer2', 'jqxButton', { width: 150, value: 'Reset Search Data', theme: 'energyblue' });
            resetRowButton.addEventHandler('click', function () {
                _this.myGrid.clearfilters();
            });
            addRowButton.addEventHandler('click', function () {
                _this.myWindow.draggable(true);
                _this.myWindow.title('Add Journal Voucher Form');
                _this.myWindow.open();
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__journal_voucher_form_add_journal_voucher_form_add_component__["a" /* JournalVoucherFormAddComponent */]);
                _this.Insert.clear();
                var dynamic_Component = _this.Insert.createComponent(componentFactory);
                dynamic_Component.instance.AddedData.subscribe(function (result) {
                    if (result.result == true) {
                        var messageDiv = document.getElementById('message');
                        messageDiv.innerText = result['message'];
                        _this.msgNotification.open();
                        _this.myWindow.hide();
                        _this.myGrid.updatebounddata();
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
                        _this.jqxLoader.open();
                        _this.ats.destroy('[' + ids + ']').subscribe(function (data) {
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
        };
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.userDataRole = this.cus.getRole();
        this.getJVForm();
        this.createForm();
    }
    JournalVoucherFormComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
    };
    JournalVoucherFormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.info(this.userDataRole);
        setTimeout(function () {
            _this.approveReqForm.controls['approve_by'].setValue(_this.userDataRole['name']);
            _this.approveReqForm.get('approve_by').markAsTouched();
        }, 100);
    };
    JournalVoucherFormComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    JournalVoucherFormComponent.prototype.createForm = function () {
        this.approveReqForm = this.fb.group({
            'approve_date': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'approve_by': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    JournalVoucherFormComponent.prototype.getJVForm = function () {
        var _this = this;
        var myUrl = this.apiUrl + 'account_transaction?vouchar_type=JV&required=VOUCHAR_FORM';
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'number' },
                    { name: 'enter_date', type: 'string' },
                    { name: 'vouchar_no', type: 'number' },
                    { name: 'enter_by', type: 'number' },
                    { name: 'total_amount', type: 'number' },
                    { name: 'remarks', type: 'string' },
                    { name: 'vouchar_details' }
                ],
                pagesize: 20,
                url: myUrl,
                data: this.userData,
                // totalrecords: 100,
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
            }, downloadComplete: function (data, status, xhr) {
                _this.source.totalrecords = data.data.total;
                var tData = data.data.data;
                console.log(tData);
                return tData;
            }, loadError: function (jqXHR, status, error) {
                var messageDiv = document.getElementById('listingMessage');
                messageDiv.innerText = error;
                _this.winNotification.open();
                _this.jqxLoader.close();
            }
        });
        this.columns =
            [
                {
                    text: 'S.N', sortable: false, filterable: false, editable: false,
                    groupable: false, draggable: false, resizable: false,
                    datafield: 'id', columntype: 'number', width: 50,
                    cellsrenderer: function (row, column, value) {
                        return "<div style='margin:4px;'>" + (value + 1) + "</div>";
                    }
                },
                { text: 'Date', datafield: 'enter_date', filtertype: 'date', },
                { text: 'Voucher No', datafield: 'vouchar_no', columntype: 'textbox', filtercondition: 'starts_with' },
                { text: 'Enter By', datafield: 'enter_by', columntype: 'textbox', filtercondition: 'starts_with' },
                { text: 'Total Amount', datafield: 'total_amount', columntype: 'textbox', filtercondition: 'starts_with' },
                // {
                //   text: 'Actions', datafield: 'Edit', columntype: 'button',sortable:false,filterable:false, width: 70,
                //   cellsrenderer: (): string => {
                //     return 'Edit';
                //   },
                //   buttonclick: (row: number): void => {
                //     this.editrow = row;
                //     let dataRecord = this.myGrid.getrowdata(this.editrow);
                //     this.myWindow.draggable(true);
                //     this.myWindow.title('Edit');
                //     this.myWindow.open();
                //     const componentFactory = this.componentFactoryResolver.resolveComponentFactory(JournalVoucherFormEditComponent);
                //     this.Insert.clear();
                //     const dynamic_Component = this.Insert.createComponent(componentFactory);
                //     (<JournalVoucherFormEditComponent>dynamic_Component.instance).JVFEditData = dataRecord;
                //     (<JournalVoucherFormEditComponent>dynamic_Component.instance).UpdatedData.subscribe(result => {
                //       if (result.result == true) {
                //         let messageDiv = document.getElementById('message');
                //         messageDiv.innerText = result['message'];
                //         this.msgNotification.open();
                //         this.myWindow.hide();
                //         this.myGrid.updatebounddata();
                //         dynamic_Component.destroy();
                //       }else{
                //         let messageDiv = document.getElementById('message');
                //         messageDiv.innerText = result['message'];
                //         this.msgNotification.open();
                //       }
                //     });
                //     (<JournalVoucherFormEditComponent>dynamic_Component.instance).cancelData.subscribe(result => {
                //       if (result == true) {
                //         this.myWindow.hide();
                //         dynamic_Component.destroy();
                //       }
                //     });
                //   }
                // },
                {
                    text: 'Actions', datafield: 'View', columntype: 'button', sortable: false, filterable: false, width: 150,
                    cellsrenderer: function () {
                        return 'View Detail';
                    },
                    buttonclick: function (row) {
                        _this.tableDatas = [];
                        _this.editrow = row;
                        var dataRecord = _this.myGrid.getrowdata(_this.editrow);
                        _this.tableDatas = dataRecord['vouchar_details'];
                        console.info(_this.tableDatas);
                        _this.myDetailWindow.draggable(true);
                        _this.myDetailWindow.title('Journal Detail');
                        _this.myDetailWindow.open();
                    }
                }
            ];
    };
    JournalVoucherFormComponent.prototype.rowChange = function (event) {
        var dataRecord = this.myGrid.getrowdata(event.args.rowindex);
        if (dataRecord) {
            this.selectedOrderList.push(dataRecord['id']);
        }
    };
    JournalVoucherFormComponent.prototype.rowUnChange = function (event) {
        var dataRecord = this.myGrid.getrowdata(event.args.rowindex);
        if (dataRecord) {
            var index = this.selectedOrderList.findIndex(function (x) { return x == dataRecord['id']; });
            if (index > -1) {
                this.selectedOrderList.splice(index, 1);
            }
        }
    };
    JournalVoucherFormComponent.prototype.approve = function (formData) {
        var _this = this;
        this.jqxLoader.open();
        formData['ids'] = this.selectedOrderList;
        formData['status'] = 'Approve';
        formData['multiple_approve'] = true;
        if (formData['ids'].length > 0) {
            this.ats.storeAprove(formData['ids'], formData).subscribe(function (result) {
                if (result['message']) {
                    _this.myGrid.clearselection();
                    _this.myGrid.updatebounddata();
                    var messageDiv = document.getElementById('message');
                    messageDiv.innerText = result['message'];
                    _this.msgNotification.open();
                }
                _this.jqxLoader.close();
                if (result['error']) {
                    _this.myGrid.clearselection();
                    _this.myGrid.updatebounddata();
                    var messageDiv = document.getElementById('error');
                    messageDiv.innerText = result['error']['message'];
                    _this.errNotification.open();
                }
            }, function (error) {
                _this.jqxLoader.close();
                console.info(error);
            });
        }
        else {
            this.jqxLoader.close();
            var messageDiv = document.getElementById('error');
            messageDiv.innerText = "Please Select at least one item";
            this.errNotification.open();
        }
    };
    JournalVoucherFormComponent.prototype.reject = function (formData) {
        var _this = this;
        formData['ids'] = this.selectedOrderList;
        formData['status'] = 'Reject';
        formData['multiple_approve'] = true;
        if (formData['ids'].length > 0) {
            this.ats.storeAprove(formData['ids'], formData).subscribe(function (result) {
                if (result['message']) {
                    _this.myGrid.clearselection();
                    _this.myGrid.updatebounddata();
                    var messageDiv = document.getElementById('message');
                    messageDiv.innerText = result['message'];
                    _this.msgNotification.open();
                }
                _this.jqxLoader.close();
                if (result['error']) {
                    _this.myGrid.clearselection();
                    _this.myGrid.updatebounddata();
                    var messageDiv = document.getElementById('error');
                    messageDiv.innerText = result['error']['message'];
                    _this.errNotification.open();
                }
            }, function (error) {
                _this.jqxLoader.close();
                console.info(error);
            });
        }
        else {
            this.jqxLoader.close();
            var messageDiv = document.getElementById('error');
            messageDiv.innerText = "Please Select at least one item";
            this.errNotification.open();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], JournalVoucherFormComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _b || Object)
    ], JournalVoucherFormComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('errNotification'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _c || Object)
    ], JournalVoucherFormComponent.prototype, "errNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _d || Object)
    ], JournalVoucherFormComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myDetailGrid'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _e || Object)
    ], JournalVoucherFormComponent.prototype, "myDetailGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _f || Object)
    ], JournalVoucherFormComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _g || Object)
    ], JournalVoucherFormComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myDetailWindow'),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _h || Object)
    ], JournalVoucherFormComponent.prototype, "myDetailWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Insert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _j || Object)
    ], JournalVoucherFormComponent.prototype, "Insert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _k || Object)
    ], JournalVoucherFormComponent.prototype, "quickAccess", void 0);
    JournalVoucherFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-journal-voucher-form',
            template: __webpack_require__("./src/app/layout/accounting/journal-voucher-form/journal-voucher-form.component.html"),
            styles: [__webpack_require__("./src/app/layout/accounting/journal-voucher-form/journal-voucher-form.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["Q" /* JournalVoucherFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["Q" /* JournalVoucherFormService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _m || Object, String, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["E" /* FileExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["E" /* FileExportService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["e" /* AccountTransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["e" /* AccountTransactionService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["v" /* CurrentUserService */]) === "function" && _r || Object])
    ], JournalVoucherFormComponent);
    return JournalVoucherFormComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
}());

//# sourceMappingURL=journal-voucher-form.component.js.map

/***/ }),

/***/ "./src/app/layout/accounting/journal-voucher-form/journal-voucher-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalVoucherFormModule", function() { return JournalVoucherFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__journal_voucher_form_routing_module__ = __webpack_require__("./src/app/layout/accounting/journal-voucher-form/journal-voucher-form-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__journal_voucher_form_component__ = __webpack_require__("./src/app/layout/accounting/journal-voucher-form/journal-voucher-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__journal_voucher_form_add_journal_voucher_form_add_component__ = __webpack_require__("./src/app/layout/accounting/journal-voucher-form/journal-voucher-form-add/journal-voucher-form-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__journal_voucher_form_edit_journal_voucher_form_edit_component__ = __webpack_require__("./src/app/layout/accounting/journal-voucher-form/journal-voucher-form-edit/journal-voucher-form-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var JournalVoucherFormModule = /** @class */ (function () {
    function JournalVoucherFormModule() {
    }
    JournalVoucherFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__journal_voucher_form_routing_module__["a" /* JournalVoucherFormRoutingModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__journal_voucher_form_add_journal_voucher_form_add_component__["a" /* JournalVoucherFormAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__journal_voucher_form_edit_journal_voucher_form_edit_component__["a" /* JournalVoucherFormEditComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__journal_voucher_form_component__["a" /* JournalVoucherFormComponent */],
                __WEBPACK_IMPORTED_MODULE_5__journal_voucher_form_add_journal_voucher_form_add_component__["a" /* JournalVoucherFormAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__journal_voucher_form_edit_journal_voucher_form_edit_component__["a" /* JournalVoucherFormEditComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], JournalVoucherFormModule);
    return JournalVoucherFormModule;
}());

//# sourceMappingURL=journal-voucher-form.module.js.map

/***/ })

});
//# sourceMappingURL=journal-voucher-form.module.chunk.js.map