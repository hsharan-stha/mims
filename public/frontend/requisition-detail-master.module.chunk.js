webpackJsonp(["requisition-detail-master.module"],{

/***/ "./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master-add/requisition-detail-master-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n    <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n        <form name=\"requisitionDetailForm\" [formGroup]=\"requisitionDetailForm\" style=\"padding-bottom:20px;\">\r\n            <table class=\"table-w-tooltip\">\r\n                <tr>\r\n                    <td style=\"padding-bottom:10px;\">Indent No&nbsp;*</td>\r\n                    <td style=\"padding-bottom:10px;\">\r\n                        <jqxInput class=\"indent_noInput\" [height]=\"23\" formControlName=\"indent_no\" [theme]=\"'energyblue'\"></jqxInput>\r\n                    </td>\r\n                    <td style=\"padding-bottom:10px;\">Indent Date&nbsp;*</td>\r\n                    <td style=\"padding-bottom:10px;\">\r\n                        <jqxDateTimeInput #datetime class=\"indent_dateInput\" [formatString]=\"'yyyy-MM-dd'\" [width]=\"180\" [height]=\"23\" formControlName=\"indent_date\" [theme]=\"'energyblue'\"></jqxDateTimeInput>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>From Store&nbsp;*</td>\r\n                    <td>\r\n                        <jqxComboBox #fComboBox (onChange)=\"fromStoreChanged()\" class=\"from_store_id\" [height]=\"23\" [width]=\"180\" [source]=\"storeData\" [displayMember]=\"'name'\" [searchMode]=\"'containsignorecase'\" [theme]=\"'energyblue'\"\r\n                            [valueMember]=\"'id'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n                    <td>To Store&nbsp;*</td>\r\n                    <td>\r\n                        <jqxComboBox #tComboBox (onChange)=\"toStoreChanged()\" class=\"to_store_id\" [height]=\"23\" [width]=\"180\" [source]=\"toStoreData\" [displayMember]=\"'name'\" [searchMode]=\"'containsignorecase'\" [theme]=\"'energyblue'\"\r\n                            [valueMember]=\"'id'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </form>\r\n    </jqxValidator>\r\n    <div class=\"tfm-custom-toolbar tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\" style=\"margin-right:4px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <strong>Requisition Items: </strong>\r\n                <jqxButton style=\"margin-left: 10px;\" (onClick)=\"addNewItem()\" [theme]=\"'energyblue'\">\r\n                        Add New Item\r\n                </jqxButton>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <jqxGrid #reqdetailAddGrid [width]=\"'99%'\" [height]=\"200\" [source]=\"dataAdapter\" [columns]=\"columns\"\r\n        [editable]=\"true\" [enabletooltips]=\"true\" [selectionmode]=\"'multiplecellsadvanced'\" [theme]=\"'energyblue'\">\r\n    </jqxGrid>\r\n</div>\r\n\r\n<div style=\"padding-top: 10px; text-align:right;\">\r\n    <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!requisitionDetailForm.valid || !formStore || !toStore\" (onClick)=\"saveBtn(requisitionDetailForm.value)\" [theme]=\"'energyblue'\">\r\n        Save\r\n    </jqxButton>\r\n    <jqxButton style=\"margin-right: 5px;\" (onClick)=\"cancelBtn()\" [theme]=\"'energyblue'\">\r\n        Cancel\r\n    </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master-add/requisition-detail-master-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master-add/requisition-detail-master-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequisitionDetailMasterAddComponent; });
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










var RequisitionDetailMasterAddComponent = /** @class */ (function () {
    function RequisitionDetailMasterAddComponent(reqDetailService, itemService, fb, apiUrl, cdr, ehs, ccs, cus, sms) {
        var _this = this;
        this.reqDetailService = reqDetailService;
        this.itemService = itemService;
        this.fb = fb;
        this.cdr = cdr;
        this.ehs = ehs;
        this.ccs = ccs;
        this.cus = cus;
        this.sms = sms;
        this.AddedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.requisition_item = [];
        this.formStore = false;
        this.toStore = false;
        this.userData = {};
        this.source = {
            localdata: this.requisition_item,
            datatype: 'json',
            datafields: [
                { name: 'item_id', type: 'string', map: 'name' },
                { name: 'quantity', type: 'number' },
                { name: 'unit_id', type: 'number' },
                { name: 'unit_name', type: 'string' },
                { name: 'remarks', type: 'string' },
            ]
        };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
            {
                text: 'Item Name', datafield: 'item_id', displayfield: 'name', columntype: 'combobox', width: 140,
                createeditor: function (row, column, editor) {
                    var contractorsource = {
                        datatype: "json",
                        contentType: "application/json; charset=utf-8",
                        datafields: [
                            { name: 'id' },
                            { name: 'name' },
                        ],
                        data: _this.userData,
                        async: false,
                        url: _this.apiUrl + 'item?limit=all&transact=1'
                    };
                    var contractorAdapter = new jqx.dataAdapter(contractorsource, {
                        downloadComplete: function (data, status, xhr) {
                            var tData = data.data;
                            return tData;
                        }
                    });
                    editor.jqxComboBox({
                        source: contractorAdapter,
                        displayMember: "name",
                        valueMember: "id"
                    });
                },
                cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                    // if (newvalue != oldvalue) {
                    var currentRow = _this.reqdetailAddGrid.getrowdata(row).boundindex;
                    _this.itemService.show(newvalue['value']).subscribe(function (result) {
                        if (result['data']['quantity']) {
                            _this.reqdetailAddGrid.setcellvalue(currentRow, 'quantity', result['data'].quantity);
                        }
                        else {
                            _this.reqdetailAddGrid.setcellvalue(currentRow, 'quantity', 0);
                        }
                        if (result['data']['unit']) {
                            _this.reqdetailAddGrid.setcellvalue(currentRow, 'unit_name', result['data']['unit'].name);
                            _this.reqdetailAddGrid.setcellvalue(currentRow, 'unit_id', result['data'].unit_id);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    // }
                },
            },
            { text: 'Quantity', columntype: 'textbox', datafield: 'quantity', width: 120 },
            { text: 'Unit', datafield: 'unit_id', editable: false, displayfield: 'unit_name', columntype: 'textbox', width: 70 },
            { text: 'Remarks', datafield: 'remarks', columntype: 'textbox' },
            {
                text: 'Actions', datafield: 'Delete', columntype: 'button', width: 70,
                cellsrenderer: function () {
                    return 'Delete';
                },
                buttonclick: function (row) {
                    var rowid = _this.reqdetailAddGrid.getrowid(row);
                    _this.reqdetailAddGrid.deleterow(rowid);
                }
            }
        ];
        this.rules = [
            { input: '.indent_noInput', message: 'Indent no is required!', action: 'keydown, blur', rule: 'required' },
            {
                input: '.indent_dateInput', message: ' Indent date is required!', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.datetime.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            {
                input: '.from_store_id', message: 'From store is required!', action: 'keydown, blur,change', rule: function (input, commit) {
                    var data = _this.fComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            {
                input: '.to_store_id', message: 'To store is required!', action: 'keydown, blur,change', rule: function (input, commit) {
                    var data = _this.tComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            }
        ];
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.requisitionDetailForm = fb.group({
            'indent_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'indent_date': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    }
    RequisitionDetailMasterAddComponent.prototype.ngOnInit = function () {
        // this.store_data =
        //   {
        //     datatype: "json",
        //     contentType: "application/json; charset=utf-8",
        //     datafields: [
        //       { name: 'id' },
        //       { name: 'name' },
        //     ],
        //     data: this.userData,
        //     url: this.apiUrl + 'store?limit=all',
        //   };
        // this.storeAdapter = new jqx.dataAdapter(this.store_data, {
        //   downloadComplete: (data, status, xhr) => {
        //     let tData = data.data;
        //     return tData;
        //   }
        // });
        var _this = this;
        this.sms.index({ limit: 'all' }).subscribe(function (response) {
            _this.storeData = response;
            _this.toStoreData = response.filter(function (x) { return x.type == 'HO'; });
        }, function (error) {
            console.log(error);
        });
    };
    RequisitionDetailMasterAddComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var codeData = {
            find_is_no: 'requisition',
            return_type: 'for_client'
        };
        this.ccs.get(codeData).subscribe(function (response) {
            _this.requisitionDetailForm.controls['indent_no'].setValue(response['indent_no']);
        }, function (error) {
            console.log(error);
        });
        this.datetime.value(new Date());
        this.cdr.detectChanges();
    };
    // rendertoolbar = (toolbar: any): void => {
    //   console.log('Add toolbar rendered');
    //   console.log(toolbar);
    //   let container = document.createElement('div');
    //   container.style.margin = '5px';
    //   let ReqDetailMasterAddAddRow = document.createElement('div');
    //   ReqDetailMasterAddAddRow.id = 'ReqDetailMasterAddAddRow';
    //   ReqDetailMasterAddAddRow.style.cssText = 'float: left';
    //   container.appendChild(ReqDetailMasterAddAddRow);
    //   toolbar[0].appendChild(container);
    //   let addRowButton = jqwidgets.createInstance('#ReqDetailMasterAddAddRow', 'jqxButton', { width: 155, value: 'Add New Item' });
    //   addRowButton.addEventHandler('click', () => {
    //     let datarow = this.generaterow();
    //     this.reqdetailAddGrid.addrow(null, datarow);
    //   })
    // };
    RequisitionDetailMasterAddComponent.prototype.addNewItem = function () {
        var datarow = this.generaterow();
        this.reqdetailAddGrid.addrow(null, datarow);
    };
    RequisitionDetailMasterAddComponent.prototype.generaterow = function () {
        var row = {};
        row['item_id'] = '';
        row['quantity'] = '';
        row['unit_id'] = '';
        row['remarks'] = '';
        return row;
    };
    // currentItem:any;
    // getItemByItemId(id){
    //   if(id){
    //   }
    // }
    RequisitionDetailMasterAddComponent.prototype.saveBtn = function (post) {
        var _this = this;
        post['requisitionItemDetails'] = this.reqdetailAddGrid.getrows();
        post['from_store_id'] = this.fComboBox.val();
        post['to_store_id'] = this.tComboBox.val();
        this.myValidator.validate(document.getElementById('requisitionDetailForm'));
        if (post['from_store_id'] && post['to_store_id']) {
            this.jqxLoader.open();
            this.reqDetailService.store(post).subscribe(function (result) {
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
    RequisitionDetailMasterAddComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    RequisitionDetailMasterAddComponent.prototype.fromStoreChanged = function () {
        this.formStore = this.fComboBox.val() ? true : false;
    };
    RequisitionDetailMasterAddComponent.prototype.toStoreChanged = function () {
        this.toStore = this.tComboBox.val() ? true : false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], RequisitionDetailMasterAddComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('reqdetailAddGrid'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _b || Object)
    ], RequisitionDetailMasterAddComponent.prototype, "reqdetailAddGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fComboBox'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], RequisitionDetailMasterAddComponent.prototype, "fComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tComboBox'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], RequisitionDetailMasterAddComponent.prototype, "tComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datetime'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */]) === "function" && _e || Object)
    ], RequisitionDetailMasterAddComponent.prototype, "datetime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _f || Object)
    ], RequisitionDetailMasterAddComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _g || Object)
    ], RequisitionDetailMasterAddComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], RequisitionDetailMasterAddComponent.prototype, "AddedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], RequisitionDetailMasterAddComponent.prototype, "cancelData", void 0);
    RequisitionDetailMasterAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-requisition-detail-master-add',
            template: __webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master-add/requisition-detail-master-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master-add/requisition-detail-master-add.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_5" /* RequisitionDetailMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_5" /* RequisitionDetailMasterService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _k || Object, String, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["s" /* CodeCheckerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["s" /* CodeCheckerService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_14" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_14" /* StoreService */]) === "function" && _q || Object])
    ], RequisitionDetailMasterAddComponent);
    return RequisitionDetailMasterAddComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
}());

//# sourceMappingURL=requisition-detail-master-add.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master-edit/requisition-detail-master-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n    <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n        <form name=\"requisitionDetailForm\" [formGroup]=\"requisitionDetailForm\" style=\"padding-bottom:20px;\">\r\n            <table class=\"table-w-tooltip\">\r\n                <tr>\r\n                    <td style=\"padding-bottom:10px;\">Indent No</td>\r\n                    <td style=\"padding-bottom:10px;\">\r\n                        <jqxInput class=\"indent_noInput\" [height]=\"23\" formControlName=\"indent_no\" [theme]=\"'energyblue'\"></jqxInput>\r\n                    </td>\r\n                    <td style=\"padding-bottom:10px;\">Indent Date</td>\r\n                    <td style=\"padding-bottom:10px;\">\r\n                        <jqxDateTimeInput #datetime class=\"indent_dateInput\" [formatString]=\"'yyyy-MM-dd'\" [width]=\"180\" [height]=\"23\" formControlName=\"indent_date\" [theme]=\"'energyblue'\"></jqxDateTimeInput>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>From Store</td>\r\n                    <td>\r\n                        <jqxComboBox #fComboBox class=\"from_store_id\" [height]=\"23\" [width]=\"180\" [source]=\"storeAdapter\" [displayMember]=\"'name'\" [searchMode]=\"'containsignorecase'\" [theme]=\"'energyblue'\"\r\n                            [valueMember]=\"'id'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n                    <td>To Store</td>\r\n                    <td>\r\n                        <jqxComboBox #tComboBox class=\"to_store_id\" [height]=\"23\" [width]=\"180\" [source]=\"storeAdapter\" [displayMember]=\"'name'\"[searchMode]=\"'containsignorecase'\" [theme]=\"'energyblue'\"\r\n                            [valueMember]=\"'id'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </form>\r\n    </jqxValidator>\r\n    <div class=\"tfm-custom-toolbar tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\" style=\"margin-right:4px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <strong>Requisition Items:</strong>\r\n                <jqxButton style=\"margin-left: 10px;\" [theme]=\"'energyblue'\" (onClick)=\"addNewItem()\">\r\n                        Add New Item\r\n                </jqxButton>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <jqxGrid #reqDetailEditGrid [width]=\"'99%'\" [height]=\"200\" [source]=\"dataAdapter\" [columns]=\"columns\"\r\n        [selectionmode]=\"'checkbox'\" [editable]=\"true\" [enabletooltips]=\"true\" [selectionmode]=\"'multiplecellsadvanced'\" [theme]=\"'energyblue'\">\r\n    </jqxGrid>\r\n</div>\r\n\r\n<div style=\"padding-top: 10px; text-align:right;\">\r\n    <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!requisitionDetailForm.valid\" (onClick)=\"saveBtn(requisitionDetailForm.value)\" [theme]=\"'energyblue'\">\r\n        Update\r\n    </jqxButton>\r\n    <jqxButton style=\"margin-right: 5px;\" (onClick)=\"cancelBtn()\" [theme]=\"'energyblue'\">\r\n        Cancel\r\n    </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master-edit/requisition-detail-master-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master-edit/requisition-detail-master-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequisitionDetailMasterEditComponent; });
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









var RequisitionDetailMasterEditComponent = /** @class */ (function () {
    function RequisitionDetailMasterEditComponent(fb, apiUrl, cdr, rdms, ehs, itemService, cus) {
        var _this = this;
        this.fb = fb;
        this.cdr = cdr;
        this.rdms = rdms;
        this.ehs = ehs;
        this.itemService = itemService;
        this.cus = cus;
        this.UpdatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ready = false;
        this.requisition_item = [];
        this.userData = {};
        this.rules = [
            { input: '.indent_noInput', message: 'Indent no is required!', action: 'keydown, blur', rule: 'required' },
            {
                input: '.indent_dateInput', message: ' Indent date is required!', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.datetime.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            {
                input: '.from_store_id', message: 'From store is required!', action: 'keydown, blur,change', rule: function (input, commit) {
                    var data = _this.fComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            {
                input: '.to_store_id', message: 'To store is required!', action: 'keydown, blur,change', rule: function (input, commit) {
                    var data = _this.tComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            }
        ];
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.createForm();
    }
    RequisitionDetailMasterEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getItem();
        this.EditData = new __WEBPACK_IMPORTED_MODULE_2__shared__["_4" /* RequisitionDetail */](this.RequisitionDetailEditData);
        this.requisitionDetailForm.setValue(this.EditData);
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
                totalrecords: 0
            };
        this.storeAdapter = new jqx.dataAdapter(this.store_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }, loadComplete: function () {
                _this.fComboBox.selectItem(_this.RequisitionDetailEditData.from_store_id);
                _this.tComboBox.selectItem(_this.RequisitionDetailEditData.to_store_id);
            }
        });
    };
    RequisitionDetailMasterEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.jqxLoader.open();
        this.rdms.show(this.RequisitionDetailEditData.id).subscribe(function (result) {
            _this.requisition_item = result['data'].requisition_item_details;
            for (var _i = 0; _i < _this.requisition_item.length; _i++) {
                _this.requisition_item[_i]['name'] = _this.requisition_item[_i]['item'] && _this.requisition_item[_i]['item'].name;
                _this.requisition_item[_i]['unit_name'] = _this.requisition_item[_i]['item'] && _this.requisition_item[_i]['item']['unit'] && _this.requisition_item[_i]['item']['unit'].name;
            }
            _this.source.totalrecords = _this.requisition_item.length - 1;
            _this.source.localdata = _this.requisition_item;
            _this.reqDetailEditGrid.updatebounddata();
            _this.jqxLoader.close();
        }, function (error) {
            console.log(error);
        });
        this.cdr.detectChanges();
    };
    RequisitionDetailMasterEditComponent.prototype.createForm = function () {
        this.requisitionDetailForm = this.fb.group({
            'indent_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'indent_date': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    };
    RequisitionDetailMasterEditComponent.prototype.getItem = function () {
        var _this = this;
        this.source =
            {
                localdata: {},
                datatype: 'json',
                datafields: [
                    { name: 'name', type: 'string' },
                    { name: 'item_id', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'unit_id', type: 'number' },
                    { name: 'unit_name', type: 'string' },
                    { name: 'remarks', type: 'string' },
                ],
                id: 'item_id'
            };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.contractorsource =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'item_id', type: 'string' },
                    { name: 'name', type: 'string' },
                ],
                data: this.userData,
                url: this.apiUrl + 'item?limit=all'
            };
        this.contractorAdapter = new jqx.dataAdapter(this.contractorsource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                for (var _i = 0; _i < tData.length; _i++) {
                    tData[_i]['item_id'] = tData[_i]['id'];
                }
                return tData;
            }
        });
        this.columns =
            [
                {
                    text: 'Item Name', datafield: 'item_id', displayfield: 'name', columntype: 'combobox',
                    initeditor: function (row, cellvalue, editor, celltext, cellwidth, cellheight) {
                        editor.jqxComboBox({
                            source: _this.contractorAdapter,
                            displayMember: "name",
                            valueMember: "item_id",
                        });
                    },
                    cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                        if (newvalue != oldvalue) {
                            var currentRow_1 = _this.reqDetailEditGrid.getrowdata(row).boundindex;
                            _this.itemService.show(newvalue['value']).subscribe(function (result) {
                                if (result['data']['quantity']) {
                                    _this.reqDetailEditGrid.setcellvalue(currentRow_1, 'quantity', result['data'].quantity);
                                }
                                else {
                                    _this.reqDetailEditGrid.setcellvalue(currentRow_1, 'quantity', 0);
                                }
                                if (result['data']['unit']) {
                                    _this.reqDetailEditGrid.setcellvalue(currentRow_1, 'unit_name', result['data']['unit'].name);
                                    _this.reqDetailEditGrid.setcellvalue(currentRow_1, 'unit_id', result['data'].unit_id);
                                }
                            }, function (error) {
                                console.log(error);
                            });
                        }
                        ;
                    },
                },
                { text: 'Quantity', columntype: 'textbox', datafield: 'quantity' },
                { text: 'Unit', datafield: 'unit_id', displayfield: 'unit_name', columntype: 'textbox' },
                { text: 'Remarks', datafield: 'remarks', columntype: 'textbox' },
                {
                    text: 'Delete', datafield: 'Delete', columntype: 'button', width: 70,
                    cellsrenderer: function () {
                        return 'Delete';
                    },
                    buttonclick: function (row) {
                        var rowID = _this.reqDetailEditGrid.getrowid(row);
                        _this.reqDetailEditGrid.deleterow(rowID);
                    }
                }
            ];
    };
    // rendertoolbar = (toolbar: any): void => {
    //   console.log('Req Edit Toolbar Rendered')
    //   let container = document.createElement('div');
    //   container.style.margin = '5px';
    //   let ReqDetailMasterEditTitle = document.createElement('div');
    //   let ReqDetailMasterEditAddItem = document.createElement('div');
    //   ReqDetailMasterEditTitle.id = 'ReqDetailMasterEditTitle';
    //   ReqDetailMasterEditAddItem.id = 'ReqDetailMasterEditAddItem';
    //   ReqDetailMasterEditTitle.style.cssText = 'float: left;padding:5px;margin-right:10px;font-weight:bold;';
    //   ReqDetailMasterEditAddItem.style.cssText = 'float: right';
    //   ReqDetailMasterEditTitle.innerHTML = 'Requisition Details:';
    //   container.appendChild(ReqDetailMasterEditTitle);
    //   container.appendChild(ReqDetailMasterEditAddItem);
    //   toolbar[0].appendChild(container);
    //   let addRowButton = jqwidgets.createInstance('#ReqDetailMasterEditAddItem', 'jqxButton', { width: 155, value: 'Add New Item' });
    //   addRowButton.addEventHandler('click', () => {
    //     let datarow = this.generaterow();
    //     this.reqDetailEditGrid.addrow(null, datarow);
    //   })
    // };
    RequisitionDetailMasterEditComponent.prototype.addNewItem = function () {
        var datarow = this.generaterow();
        this.reqDetailEditGrid.addrow(null, datarow);
    };
    RequisitionDetailMasterEditComponent.prototype.generaterow = function () {
        var row = {};
        row['item_id'] = '';
        row['quantity'] = '';
        row['unit_id'] = '';
        row['remarks'] = '';
        return row;
    };
    RequisitionDetailMasterEditComponent.prototype.saveBtn = function (post) {
        var _this = this;
        post['requisitionItemDetails'] = this.reqDetailEditGrid.getrows();
        post['from_store_id'] = this.fComboBox.val();
        post['to_store_id'] = this.tComboBox.val();
        this.myValidator.validate(document.getElementById('requisitionDetailForm'));
        if (post['from_store_id'] && post['to_store_id']) {
            this.jqxLoader.open();
            this.rdms.update(this.RequisitionDetailEditData.id, post).subscribe(function (result) {
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
    RequisitionDetailMasterEditComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], RequisitionDetailMasterEditComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('reqDetailEditGrid'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _b || Object)
    ], RequisitionDetailMasterEditComponent.prototype, "reqDetailEditGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _c || Object)
    ], RequisitionDetailMasterEditComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fComboBox'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], RequisitionDetailMasterEditComponent.prototype, "fComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tComboBox'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _e || Object)
    ], RequisitionDetailMasterEditComponent.prototype, "tComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datetime'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */]) === "function" && _f || Object)
    ], RequisitionDetailMasterEditComponent.prototype, "datetime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _g || Object)
    ], RequisitionDetailMasterEditComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('RequisitionDetailEditData'),
        __metadata("design:type", Object)
    ], RequisitionDetailMasterEditComponent.prototype, "RequisitionDetailEditData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], RequisitionDetailMasterEditComponent.prototype, "UpdatedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], RequisitionDetailMasterEditComponent.prototype, "cancelData", void 0);
    RequisitionDetailMasterEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-requisition-detail-master-edit',
            template: __webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master-edit/requisition-detail-master-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master-edit/requisition-detail-master-edit.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _h || Object, String, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_5" /* RequisitionDetailMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_5" /* RequisitionDetailMasterService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _o || Object])
    ], RequisitionDetailMasterEditComponent);
    return RequisitionDetailMasterEditComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=requisition-detail-master-edit.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequisitionDetailMasterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requisition_detail_master_component__ = __webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__requisition_detail_master_component__["a" /* RequisitionDetailMasterComponent */],
    }
];
var RequisitionDetailMasterRoutingModule = /** @class */ (function () {
    function RequisitionDetailMasterRoutingModule() {
    }
    RequisitionDetailMasterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], RequisitionDetailMasterRoutingModule);
    return RequisitionDetailMasterRoutingModule;
}());

//# sourceMappingURL=requisition-detail-master-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-2 tfm-panel-left\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> Quick Access </h2>\r\n              </div>\r\n               <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                    <ng-template #quickAccess></ng-template>\r\n              </jqxPanel> \r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-10 tfm-panel-right\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> Requisition Detail Master </h2>\r\n              </div>\r\n            <jqxPanel #jPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                <jqxGrid #myGrid\r\n                    [height]=\"'100%'\" [width]=\"'99.8%'\" [source]=\"dataAdapter\" [columns]=\"columns\"  \r\n                    [virtualmode]=\"true\" [pageable]=\"true\" [filterable]=\"true\" [sortable]=\"true\"\r\n                    [rendergridrows]=\"rendergridrows\" [showtoolbar]=\"true\" [showfilterrow]=\"true\" [rendertoolbar]=\"rendertoolbar\" [theme]=\"'energyblue'\">\r\n                </jqxGrid>\r\n            </jqxPanel>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<jqxWindow #myWindow [width]=\"600\" [height]=\"'70%'\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n    <div id=\"windowContent\">\r\n        <ng-template #Insert></ng-template>\r\n    </div>\r\n</jqxWindow>\r\n<jqxNotification #msgNotification\r\n[width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n[autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\" [theme]=\"'energyblue'\">\r\n<div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='listingMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequisitionDetailMasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requisition_detail_master_add_requisition_detail_master_add_component__ = __webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master-add/requisition-detail-master-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__requisition_item_details_view_requisition_item_details_view_component__ = __webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-item-details-view/requisition-item-details-view.component.ts");
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








var RequisitionDetailMasterComponent = /** @class */ (function () {
    function RequisitionDetailMasterComponent(rdm, componentFactoryResolver, ss, apiUrl, cus) {
        var _this = this;
        this.rdm = rdm;
        this.componentFactoryResolver = componentFactoryResolver;
        this.ss = ss;
        this.cus = cus;
        this.editrow = -1;
        this.report = false;
        this.store_item = [];
        this.userData = {};
        this.rendergridrows = function (params) {
            return params.data;
        };
        this.rendertoolbar = function (toolbar) {
            var container = document.createElement('div');
            container.style.margin = '5px';
            var ReqDetailMasterAddRow = document.createElement('div');
            var ReqDetailMasterDeleteRow = document.createElement('div');
            var buttonContainer6 = document.createElement('div');
            var buttonContainer5 = document.createElement('div');
            ReqDetailMasterAddRow.id = 'ReqDetailMasterAddRow';
            ReqDetailMasterDeleteRow.id = 'ReqDetailMasterDeleteRow';
            buttonContainer5.id = 'buttonContainer5';
            buttonContainer6.id = 'buttonContainer6';
            ReqDetailMasterAddRow.style.cssText = 'float: left';
            ReqDetailMasterDeleteRow.style.cssText = 'float: left; margin-left: 5px';
            buttonContainer5.style.cssText = 'float: left; margin-left: 5px';
            buttonContainer6.style.cssText = 'float: left; margin-left: 5px';
            container.appendChild(ReqDetailMasterAddRow);
            container.appendChild(ReqDetailMasterDeleteRow);
            container.appendChild(buttonContainer5);
            container.appendChild(buttonContainer6);
            toolbar[0].appendChild(container);
            var addRowButton = jqwidgets.createInstance('#ReqDetailMasterAddRow', 'jqxButton', { width: 105, value: 'Add New Row', theme: 'energyblue' });
            var deleteRowButton = jqwidgets.createInstance('#ReqDetailMasterDeleteRow', 'jqxButton', { width: 150, value: 'Delete Selected Row', theme: 'energyblue' });
            var resetSearchdata = jqwidgets.createInstance('#buttonContainer5', 'jqxButton', { width: 150, value: 'Reset Search Data', theme: 'energyblue' });
            var generateReport = jqwidgets.createInstance('#buttonContainer6', 'jqxButton', { width: 150, value: 'Generate Report', theme: 'energyblue' });
            addRowButton.addEventHandler('click', function () {
                _this.myWindow.draggable(true);
                _this.myWindow.title('Add Requisition Details');
                _this.myWindow.open();
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__requisition_detail_master_add_requisition_detail_master_add_component__["a" /* RequisitionDetailMasterAddComponent */]);
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
            resetSearchdata.addEventHandler('click', function () {
                _this.myGrid.clearfilters();
            });
            generateReport.addEventHandler('click', function () {
                _this.report = true;
                _this.myGrid.updatebounddata();
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
                        _this.rdm.destroy('[' + ids + ']').subscribe(function (data) {
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
        this.getList();
    }
    RequisitionDetailMasterComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
    };
    RequisitionDetailMasterComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ss.index('').subscribe(function (res) {
            // let  store_item: Array<any> = [];
            for (var i = 0; i < res.length; i++) {
                var dt = {};
                dt['store_name'] = res[i]['name'];
                dt['store_id'] = res[i]['id'];
                _this.store_item.push(dt);
            }
            // this.myGrid.setcolumnproperty('from_store_name', 'filteritems', this.store_item);
        }, function (error) {
            console.info(error);
        });
    };
    RequisitionDetailMasterComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    RequisitionDetailMasterComponent.prototype.getList = function () {
        var _this = this;
        var myUrl = this.apiUrl + 'requisition_detail';
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'string' },
                    { name: 'indent_no', type: 'string' },
                    { name: 'indent_date', type: 'date' },
                    { name: 'from_store_id', type: 'string' },
                    { name: 'to_store_id', type: 'string' },
                    { name: 'from_store_name', type: 'string', map: 'from_store>name' },
                    { name: 'to_store_name', type: 'string', map: 'to_store>name' }
                ],
                id: 'id',
                root: 'data',
                pagesize: 20,
                url: myUrl,
                totalrecords: 100,
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
                if (_this.report) {
                    data['limit'] = 'all';
                    data['report'] = true;
                    data['report_type'] = 'excel';
                }
                else {
                    data['page'] = data['pagenum'] + 1;
                    data['limit'] = data['pagesize'];
                }
                return data;
            },
            beforeSend: function (jqXHR, settings) {
                if (_this.report) {
                    _this.request_url = settings.url;
                }
            }, downloadComplete: function (data, status, xhr) {
                _this.source.totalrecords = data.data.total;
                var tData = data.data.data;
                return tData;
            }, loadError: function (jqXHR, status, error) {
                if (_this.report) {
                    _this.report = false;
                    var anchor = document.createElement('a');
                    anchor.style.cssText = 'display: none';
                    document.body.appendChild(anchor); // Attach to document
                    anchor.href = _this.request_url;
                    anchor.click();
                    _this.myGrid.updatebounddata();
                }
                else {
                    var messageDiv = document.getElementById('listingMessage');
                    messageDiv.innerText = error;
                    _this.winNotification.open();
                    _this.jqxLoader.close();
                }
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
                { text: 'Indent Date', datafield: 'indent_date', cellsformat: 'yyyy-MM-dd', columntype: 'date', filtertype: 'range' },
                { text: 'Indent Number', datafield: 'indent_no', columntype: 'textbox', filtercondition: 'starts_with' },
                { text: 'From Store', datafield: 'from_store_id', displayfield: 'from_store_name', columntype: 'combobox', filtertype: 'list' },
                { text: 'To store', datafield: 'to_store_id', displayfield: 'to_store_name', columntype: 'combobox', filtertype: 'list', width: 200 },
                {
                    text: 'Req Item Details', datafield: 'view_item_details', columntype: 'button', sortable: false, filterable: false, width: 150,
                    cellsrenderer: function () {
                        return 'View Item Details';
                    },
                    buttonclick: function (row) {
                        _this.editrow = row;
                        var dataRecord = _this.myGrid.getrowdata(_this.editrow);
                        _this.myWindow.draggable(true);
                        _this.myWindow.title('&nbsp;');
                        var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__requisition_item_details_view_requisition_item_details_view_component__["a" /* RequisitionItemDetailsViewComponent */]);
                        _this.Insert.clear();
                        var dynamic_Component = _this.Insert.createComponent(componentFactory);
                        _this.myWindow.open();
                        dynamic_Component.instance.RequisitionDetailViewData = dataRecord;
                    }
                },
            ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], RequisitionDetailMasterComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _b || Object)
    ], RequisitionDetailMasterComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _c || Object)
    ], RequisitionDetailMasterComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _d || Object)
    ], RequisitionDetailMasterComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Insert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object)
    ], RequisitionDetailMasterComponent.prototype, "Insert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object)
    ], RequisitionDetailMasterComponent.prototype, "quickAccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _g || Object)
    ], RequisitionDetailMasterComponent.prototype, "winNotification", void 0);
    RequisitionDetailMasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-requisition-detail-master',
            template: __webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["_5" /* RequisitionDetailMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["_5" /* RequisitionDetailMasterService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["_14" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["_14" /* StoreService */]) === "function" && _k || Object, String, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */]) === "function" && _l || Object])
    ], RequisitionDetailMasterComponent);
    return RequisitionDetailMasterComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=requisition-detail-master.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequisitionDetailMasterModule", function() { return RequisitionDetailMasterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requisition_detail_master_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__requisition_detail_master_component__ = __webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requisition_detail_master_add_requisition_detail_master_add_component__ = __webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master-add/requisition-detail-master-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__requisition_detail_master_edit_requisition_detail_master_edit_component__ = __webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-detail-master-edit/requisition-detail-master-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__requisition_item_details_view_requisition_item_details_view_component__ = __webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-item-details-view/requisition-item-details-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RequisitionDetailMasterModule = /** @class */ (function () {
    function RequisitionDetailMasterModule() {
    }
    RequisitionDetailMasterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__requisition_detail_master_routing_module__["a" /* RequisitionDetailMasterRoutingModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__requisition_detail_master_add_requisition_detail_master_add_component__["a" /* RequisitionDetailMasterAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__requisition_detail_master_edit_requisition_detail_master_edit_component__["a" /* RequisitionDetailMasterEditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__requisition_item_details_view_requisition_item_details_view_component__["a" /* RequisitionItemDetailsViewComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__requisition_detail_master_component__["a" /* RequisitionDetailMasterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__requisition_detail_master_add_requisition_detail_master_add_component__["a" /* RequisitionDetailMasterAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__requisition_detail_master_edit_requisition_detail_master_edit_component__["a" /* RequisitionDetailMasterEditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__requisition_item_details_view_requisition_item_details_view_component__["a" /* RequisitionItemDetailsViewComponent */]
            ]
        })
    ], RequisitionDetailMasterModule);
    return RequisitionDetailMasterModule;
}());

//# sourceMappingURL=requisition-detail-master.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/requisition-detail-master/requisition-item-details-view/requisition-item-details-view.component.html":
/***/ (function(module, exports) {

module.exports = "<jqxGrid #myGrid [width]=\"'99%'\" [height]=\"200\" [source]=\"dataAdapter\" [columns]=\"columns\" [showtoolbar]=\"true\" [rendertoolbar]=\"rendertoolbar\"\r\n  [editable]=\"true\" [enabletooltips]=\"true\" [selectionmode]=\"'multiplecellsadvanced'\">\r\n</jqxGrid>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/inventory-master/requisition-detail-master/requisition-item-details-view/requisition-item-details-view.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/requisition-detail-master/requisition-item-details-view/requisition-item-details-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequisitionItemDetailsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
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




var RequisitionItemDetailsViewComponent = /** @class */ (function () {
    function RequisitionItemDetailsViewComponent(apiUrl, cdr, rdms) {
        this.cdr = cdr;
        this.rdms = rdms;
        this.requisition_item = [];
        this.rendertoolbar = function (toolbar) {
            var container = document.createElement('div');
            container.style.margin = '5px';
            var headingContainer4 = document.createElement('div');
            var buttonContainer5 = document.createElement('div');
            headingContainer4.id = 'headingContainer4';
            buttonContainer5.id = 'buttonContainer5';
            headingContainer4.style.cssText = 'float: left;padding:5px;margin-right:10px;font-weight:bold;';
            buttonContainer5.style.cssText = 'float: right';
            headingContainer4.innerHTML = 'Requisition Item Details:';
            container.appendChild(headingContainer4);
            container.appendChild(buttonContainer5);
            toolbar[0].appendChild(container);
        };
        this.apiUrl = apiUrl;
    }
    RequisitionItemDetailsViewComponent.prototype.ngOnInit = function () {
        this.getItem();
    };
    RequisitionItemDetailsViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.jqxLoader.open();
        this.rdms.show(this.RequisitionDetailViewData.id).subscribe(function (result) {
            _this.requisition_item = result['data'].requisition_item_details;
            for (var _i = 0; _i < _this.requisition_item.length; _i++) {
                _this.requisition_item[_i]['name'] = _this.requisition_item[_i]['item'] && _this.requisition_item[_i]['item'].name;
                _this.requisition_item[_i]['unit_name'] = _this.requisition_item[_i]['item'] && _this.requisition_item[_i]['item']['unit'] && _this.requisition_item[_i]['item']['unit'].name;
            }
            _this.source.localdata = _this.requisition_item;
            _this.myGrid.updatebounddata("cells");
            _this.jqxLoader.close();
        }, function (error) {
            console.log(error);
        });
        this.cdr.detectChanges();
    };
    RequisitionItemDetailsViewComponent.prototype.getItem = function () {
        var _this = this;
        this.source =
            {
                localdata: {},
                datatype: 'json',
                datafields: [
                    { name: 'name', type: 'string' },
                    { name: 'item_id', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'unit_id', type: 'number' },
                    { name: 'unit_name', type: 'string' },
                    { name: 'remarks', type: 'string' },
                ],
            };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.contractorsource =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'item_id', type: 'string' },
                    { name: 'name', type: 'string' },
                ],
                url: this.apiUrl + 'item?limit=all'
            };
        this.contractorAdapter = new jqx.dataAdapter(this.contractorsource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                for (var _i = 0; _i < tData.length; _i++) {
                    tData[_i]['item_id'] = tData[_i]['id'];
                }
                return tData;
            }
        });
        this.columns =
            [
                {
                    text: 'Item Name', datafield: 'item_id', displayfield: 'name', columntype: 'combobox',
                    initeditor: function (row, cellvalue, editor, celltext, cellwidth, cellheight) {
                        editor.jqxComboBox({
                            source: _this.contractorAdapter,
                            displayMember: "name",
                            valueMember: "item_id"
                        });
                    }
                },
                { text: 'Quantity', columntype: 'textbox', datafield: 'quantity' },
                { text: 'Unit', datafield: 'unit_id', displayfield: 'unit_name', columntype: 'textbox' },
                { text: 'Remarks', datafield: 'remarks', columntype: 'textbox' },
            ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], RequisitionItemDetailsViewComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _b || Object)
    ], RequisitionItemDetailsViewComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('RequisitionDetailViewData'),
        __metadata("design:type", Object)
    ], RequisitionItemDetailsViewComponent.prototype, "RequisitionDetailViewData", void 0);
    RequisitionItemDetailsViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-requisition-item-details-view',
            template: __webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-item-details-view/requisition-item-details-view.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/requisition-detail-master/requisition-item-details-view/requisition-item-details-view.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [String, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["_5" /* RequisitionDetailMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["_5" /* RequisitionDetailMasterService */]) === "function" && _d || Object])
    ], RequisitionItemDetailsViewComponent);
    return RequisitionItemDetailsViewComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=requisition-item-details-view.component.js.map

/***/ })

});
//# sourceMappingURL=requisition-detail-master.module.chunk.js.map