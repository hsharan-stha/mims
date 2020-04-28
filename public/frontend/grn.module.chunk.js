webpackJsonp(["grn.module"],{

/***/ "./src/app/layout/inventory-master/grn/grn-add/grn-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\" style=\"float: left;\">\r\n            <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n                <form name=\"grnPoForm\" [formGroup]=\"grnPoForm\" style=\"padding-bottom:0px;\">\r\n                    <table class=\"table-w-tooltip\">\r\n\r\n                        <tr>\r\n                            <td style=\"padding-bottom:10px; width:93px;\">Grn No</td>\r\n                            <td style=\"padding-bottom:10px;\">\r\n                                <jqxInput class=\"grn_noInput\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"grn_no\"></jqxInput>\r\n                            </td>\r\n                            <td style=\"padding-bottom:10px; width:111px;\">Grn Date</td>\r\n                            <td style=\"padding-bottom:10px;\">\r\n                                <jqxDateTimeInput #datetime class=\"grn_dateInput\" [theme]=\"'energyblue'\" [formatString]=\"'yyyy-MM-dd'\" [height]=\"23\" [width]=\"180\"\r\n                                    formControlName=\"grn_date\"></jqxDateTimeInput>\r\n                            </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                            <td>Store</td>\r\n                            <td>\r\n                                <jqxComboBox #myComboBox (onChange)=\"storeChanged()\" class=\"store_idInput\" [height]=\"23\" [theme]=\"'energyblue'\" [width]=\"180\" [source]=\"storeAdapter\"\r\n                                    [displayMember]=\"'name'\" [searchMode]=\"'containsignorecase'\" [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n                                </jqxComboBox>\r\n                            </td>\r\n                            <td>Bill No</td>\r\n                            <td>\r\n                                <jqxInput class=\"bill_noInput\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"bill_no\"></jqxInput>\r\n                            </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                            <td>Vendor</td>\r\n                            <td>\r\n                                <jqxComboBox #myComboBox2 (onChange)=\"vendorChanged()\" class=\"vendor_idInput\" [height]=\"23\" [theme]=\"'energyblue'\" [width]=\"180\" [source]=\"vendorAdapter\"\r\n                                    [displayMember]=\"'name'\" [searchMode]=\"'containsignorecase'\" [valueMember]=\"'id'\" (onSelect)=\"withPOChange($event)\">\r\n                                </jqxComboBox>\r\n                            </td>\r\n                            <td>Vendor Chalaan No</td>\r\n                            <td>\r\n                                <jqxInput #vChalaanNo class=\"vendor_chalaan_noInput\" [height]=\"23\" [theme]=\"'energyblue'\" [width]=\"180\" formControlName=\"vendor_chalaan_no\"></jqxInput>\r\n                            </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                            <td>With Purchase Order</td>\r\n                            <td>\r\n                                <jqxComboBox #withPOCombo class=\"po_idInput\" [height]=\"23\" [theme]=\"'energyblue'\" [width]=\"180\" [source]=\"withPOAdapter\"\r\n                                    [displayMember]=\"'name'\" [searchMode]=\"'containsignorecase'\" [valueMember]=\"'id'\" (onSelect)=\"withPOChange($event)\">\r\n                                </jqxComboBox>\r\n                            </td>\r\n                            <td>Remarks</td>\r\n                            <td>\r\n                                <jqxInput class=\"remarksInput\" [height]=\"23\" [theme]=\"'energyblue'\" [width]=\"'100%'\" formControlName=\"remarks\"></jqxInput>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </form>\r\n            </jqxValidator>\r\n        </div>\r\n        <div class=\"col-md-6\" style=\"margin-bottom:5px; float: right;\">\r\n            <div class=\"tfm-custom-toolbar tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-10\">\r\n                        <strong>\r\n                            Wholesum Bill Sundry:\r\n                            <span *ngIf=\"itemLoader\">\r\n                                <i class=\"fa fa-refresh fa-spin fa-fw\"></i>\r\n                            </span>\r\n                        </strong>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <jqxGrid #wholeSumGrid [width]=\"'100%'\" [height]=\"200\" [source]=\"wholeSumBSDataAdapter\" [columns]=\"wholeSumBSColumns\" [editable]=\"true\"\r\n                [enabletooltips]=\"true\" [selectionmode]=\"'multiplecellsadvanced'\" [theme]=\"'energyblue'\">\r\n            </jqxGrid>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"tfm-custom-toolbar tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n                <strong>\r\n                    GRN ITEMS:\r\n                    <span *ngIf=\"itemLoader\">\r\n                        <i class=\"fa fa-refresh fa-spin fa-fw\"></i>\r\n                    </span>\r\n                </strong>\r\n            </div>\r\n            <div class=\"col-md-10\" style=\"text-align:right;margin-left:-3%;\">\r\n                <jqxButton style=\"margin-right: 5px;\" (onClick)=\"addNewItem()\" [theme]=\"'energyblue'\">\r\n                    Add New Item\r\n                </jqxButton>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <jqxGrid #grnPoAddGrid [width]=\"'99%'\" [height]=\"280\" [source]=\"dataAdapter\" [columns]=\"columns\" [editable]=\"true\" [enabletooltips]=\"true\"\r\n        [selectionmode]=\"'multiplecellsadvanced'\" [theme]=\"'energyblue'\" [showstatusbar]=\"true\" [statusbarheight]=\"30\" [showaggregates]=\"true\"\r\n        [columngroups]=\"columngroups\" [keyboardnavigation]=\"true\">\r\n    </jqxGrid>\r\n</div>\r\n<div style=\"padding-top: 10px; text-align:right;\">\r\n    <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" [disabled]=\"!grnPoForm.valid || !store || !vendor\" (onClick)=\"saveBtn(grnPoForm.value)\">\r\n        Save\r\n    </jqxButton>\r\n    <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"cancelBtn()\">\r\n        Cancel\r\n    </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\" [isModal]=\"true\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n    [autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n    <div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/grn/grn-add/grn-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/grn/grn-add/grn-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrnAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxdatetimeinput.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxinput__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxinput.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
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










var GrnAddComponent = /** @class */ (function () {
    function GrnAddComponent(fb, apiUrl, prdms, gps, itemService, ehs, cdr, mis, ccs, cus, bsms) {
        var _this = this;
        this.fb = fb;
        this.prdms = prdms;
        this.gps = gps;
        this.itemService = itemService;
        this.ehs = ehs;
        this.cdr = cdr;
        this.mis = mis;
        this.ccs = ccs;
        this.cus = cus;
        this.bsms = bsms;
        this.AddedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.vendorShow = false;
        this.miShow = false;
        this.groupNameAdapter = [];
        this.store = false;
        this.vendor = false;
        this.typeAdapter = [
            { name: 'HO', id: 'ho' },
            { name: 'Supplier', id: 'sup' },
            { name: 'Adjustment', id: 'adj' },
            { name: 'Inter Estate Transfer ', id: 'iet' },
            { name: 'Return', id: 'ret' },
        ];
        this.withPOAdapter = [
            { name: 'Yes', id: true },
            { name: 'No', id: false }
        ];
        this.userData = {};
        this.itemLoader = false;
        //  Start of account Head Grid
        this.achLoader = false;
        this.wholeSumBSSource = {
            datatype: 'json',
            datafields: [
                { name: 'id', type: 'string' },
                { name: 'name', type: 'string' },
                { name: 'amount', type: 'number' },
            ],
            id: 'id',
            updaterow: function (rowid, rowdata, commit) {
                commit(true);
            },
            localdata: []
        };
        this.crDrAdapter = [
            { value: 'cr', label: 'CR' },
            { value: 'dr', label: 'DR' },
        ];
        this.wholeSumBSDataAdapter = new jqx.dataAdapter(this.wholeSumBSSource);
        this.wholeSumBSColumns = [
            { text: 'Bill Sundry Name', displayfield: 'name', datafield: 'id', columntype: 'textbox', editable: false },
            { text: 'Amount', displayfield: 'amount', datafield: 'amount', columntype: 'textbox', width: 140, editable: true },
        ];
        //  End of whole sum bill sundry
        // start of group wise bill sundry
        this.groupWiseSource = {};
        //groupWisedataAdapter: any;
        this.groupWiseColumns = [];
        this.rules = [
            { input: '.grn_noInput', message: 'Grn no is required!', action: 'keydown, blur', rule: 'required' },
            {
                input: '.grn_dateInput', message: ' Grn date is required!', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.datetime.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            { input: '.bill_noInput', message: ' Bill no is required!', action: 'keydown, blur', rule: 'required' },
            // { input: '.bill_codeInput', message: ' Bill code is required!', action: 'keydown, blur', rule: 'required' },
            {
                input: '.store_idInput', message: ' Store name is required!', action: 'keydown, blur,change', rule: function (input, commit) {
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
    GrnAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                    { name: 'code' },
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
        this.vendor_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                url: this.apiUrl + 'vendor?limit=all',
            };
        this.vendorAdapter = new jqx.dataAdapter(this.vendor_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }
        });
        this.miSource =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'issue_no' },
                ],
                data: this.userData,
                url: this.apiUrl + 'material_issue?limit=all',
            };
        this.miAdapter = new jqx.dataAdapter(this.miSource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }
        });
        this.grnpoitemSource =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'po_no' }
                ],
                data: this.userData,
                url: this.apiUrl + 'po_requisition_detail?limit=all'
            };
        this.grnpoitemAdapter = new jqx.dataAdapter(this.grnpoitemSource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
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
                _this.achLoader = false;
                return tData;
            },
            loadError: function (jqXHR, status, error) {
                _this.achLoader = false;
            }
        });
        this.accHeadItemSource = {
            datatype: "json",
            contentType: "application/json; charset=utf-8",
            datafields: [
                { name: 'id' },
                { name: 'name' },
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
                }
                _this.achLoader = false;
                return tData;
            },
            loadError: function (jqXHR, status, error) {
                _this.achLoader = false;
            }
        });
        this.itemService.index({ limit: 'all', transact: '1' }).subscribe(function (response) {
            var tData = response;
            for (var i = 0; i < tData.length; i++) {
                tData[i]['name'] = tData[i]['code'] + ' - ' + tData[i]['name'];
            }
            _this.itemAdapter = tData;
        }, function (error) {
            console.log(error);
        });
    };
    GrnAddComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.datetime.value(new Date());
        var codeData = {
            find_is_no: 'grn_po',
            return_type: 'for_client'
        };
        this.ccs.get(codeData).subscribe(function (response) {
            setTimeout(function () {
                _this.grnPoForm.controls['grn_no'].setValue(response['grn_no']);
            }, 500);
        }, function (error) {
            console.log(error);
        });
        this.getGroupWiseBillSundry();
        this.getBillSundryData();
        this.generateItemDataSource('sup');
        this.cdr.detectChanges();
    };
    GrnAddComponent.prototype.createForm = function () {
        this.grnPoForm = this.fb.group({
            'grn_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'grn_date': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'vendor_chalaan_no': [null],
            // 'bill_code': [null, Validators.required],
            'bill_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'remarks': [null],
        });
    };
    GrnAddComponent.prototype.getBillSundryData = function () {
        var _this = this;
        this.wholeSumBSSource.localdata = [];
        var getData = {
            get_bill_sundery: 'purchase',
            whole_sum_bill_sundry: true
        };
        this.bsms.index(getData).subscribe(function (response) {
            var arrayData = response;
            var formattedData = [];
            for (var i = 0; i < arrayData.length; i++) {
                formattedData[i] = {};
                formattedData[i].id = arrayData[i].id;
                formattedData[i].name = arrayData[i].name;
                formattedData[i].amount = null;
            }
            _this.wholeSumBSSource.localdata = formattedData;
            _this.wholeSumGrid.updatebounddata();
        }, function (error) {
            console.log(error);
        });
    };
    GrnAddComponent.prototype.generateItemDataSource = function (type) {
        var _this = this;
        this.jqxLoader.open();
        // console.log(type);
        this.source =
            {
                datatype: 'json',
                datafields: [
                    // { name: 'po_id', type: 'string' },
                    { name: 'item_id', type: 'string' },
                    { name: 'item_name', type: 'string' },
                    // { name: 'account_group_code', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'rate', type: 'number' },
                    { name: 'unit_id', type: 'string' },
                    { name: 'unit_name', type: 'string' },
                    { name: 'value', type: 'number' },
                    // { name: 'vat', type: 'number' },
                    // { name: 'vat_value', type: 'number' },
                    { name: 'total', type: 'number' },
                ],
                updaterow: function (rowid, rowdata, commit) {
                    commit(true);
                },
                localdata: []
            };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        var columnData = [
            {
                text: 'Item Name', datafield: 'item_id', displayfield: "item_name", columntype: "combobox", width: 190,
                createeditor: function (row, column, editor) {
                    // let contractorAdapter = this.itemAdapter;
                    // this.itemLoader = true;
                    editor.jqxComboBox({
                        source: _this.itemAdapter,
                        displayMember: "name",
                        valueMember: "id",
                        searchMode: "containsignorecase"
                    });
                },
                cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                    if (newvalue !== oldvalue) {
                        // console.log(newvalue);
                        var currentRow_1 = _this.grnPoAddGrid.getrowdata(row).boundindex;
                        _this.itemService.show(newvalue['value']).subscribe(function (result) {
                            if (result['data']['unit']) {
                                _this.grnPoAddGrid.setcellvalue(currentRow_1, 'unit_name', result['data']['unit'].name);
                                _this.grnPoAddGrid.setcellvalue(currentRow_1, 'unit_id', result['data'].unit_id);
                            }
                            if (result['data']['quantity']) {
                                _this.grnPoAddGrid.setcellvalue(currentRow_1, 'quantity', result['data'].quantity);
                            }
                            else {
                                _this.grnPoAddGrid.setcellvalue(currentRow_1, 'quantity', 0);
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                },
            },
            // {
            //   text: 'Group Name', datafield: 'group_name', displayfield: "group_name", columntype: "combobox", width: 120,
            //   createeditor: (row: number, column: any, editor: any): void => {
            //     // let contractorAdapter = this.itemAdapter;
            //     // this.itemLoader = true;
            //     editor.jqxComboBox({
            //       source: this.groupNameAdapter,
            //       displayMember: "name",
            //       valueMember: "id",
            //       searchMode: "containsignorecase"
            //     });
            //   }
            // },
            {
                text: 'Quantity', datafield: 'quantity', columntype: 'textbox', width: 100,
                cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                    if (newvalue !== oldvalue) {
                        var currentRow = _this.grnPoAddGrid.getrowdata(row);
                        var rowId = _this.grnPoAddGrid.getrowdata(row).boundindex;
                        currentRow['quantity'] = newvalue;
                        _this.amountCalculation(currentRow, rowId);
                    }
                },
            },
            // {
            //   text: 'Item Name', datafield: 'unit_id', displayfield: "unit_name", columntype: "textbox", width: 150, disabled: true
            // },
            {
                text: 'Rate', datafield: 'rate', columntype: 'textbox', width: 90,
                cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                    if (newvalue !== oldvalue) {
                        var currentRow = _this.grnPoAddGrid.getrowdata(row);
                        var rowId = _this.grnPoAddGrid.getrowdata(row).boundindex;
                        currentRow['rate'] = newvalue;
                        _this.amountCalculation(currentRow, rowId);
                    }
                },
            },
            {
                text: 'Unit Name', datafield: 'unit_id', displayfield: 'unit_name', columntype: 'combobox', width: 120, editable: false,
            },
            { text: 'Value', datafield: 'value', columntype: 'textbox', width: 140, editable: false },
            // { text: 'Vat %', datafield: 'vat', columntype: 'textbox', width: 50,
            //   cellvaluechanging: (row: number, datafield: string, columntype: any, oldvalue: any, newvalue: any): void => {
            //     if (newvalue !== oldvalue) {
            //       let currentRow = this.grnPoAddGrid.getrowdata(row);
            //       let rowId = this.grnPoAddGrid.getrowdata(row).boundindex;
            //       currentRow['vat'] = newvalue;
            //       this.amountCalculation(currentRow, rowId);
            //     }
            //   },
            // },
            // { text: 'Vat', datafield: 'vat_value', columntype: 'textbox', width: 100, editable:false },
            {
                text: 'Total', datafield: 'total', columntype: 'textbox', width: 140, editable: false,
                // cellsrenderer: (index: number, datafield: string, value: any, defaultvalue: any, column: any, rowdata: any): string => {
                //   if (rowdata.quantity && rowdata.rate) {
                //     let total = parseFloat(rowdata.quantity) * parseFloat(rowdata.rate);
                //     // this.grnPoAddGrid.setcellvalue(rowdata.boundindex,'total',total);
                //     return '<div style="jqx-align-right">' + this.dataAdapter.formatNumber(total, 'f2') + '</div>';
                //   }
                // },
                aggregates: [{
                        'Total': function (aggregatedValue, currentValue, column, record) {
                            var value;
                            if (aggregatedValue) {
                                value = aggregatedValue;
                            }
                            else {
                                value = 0;
                            }
                            return value + currentValue;
                        }
                    }],
                aggregatesrenderer: function (aggregates) {
                    var value;
                    if (aggregates['Total']) {
                        value = aggregates['Total'];
                    }
                    else {
                        value = 0;
                    }
                    var renderstring = '<div style="float: left; margin: 4px; overflow: hidden;">' + "Total" + ': ' + value + '</div>';
                    return renderstring;
                },
            },
            {
                text: 'New Item', datafield: 'Add New', columntype: 'button', width: 70,
                cellsrenderer: function () {
                    return 'Add New';
                },
                buttonclick: function (row) {
                    _this.addNewItem();
                }
            },
            {
                text: 'Actions', datafield: 'Delete', columntype: 'button', width: 70,
                cellsrenderer: function () {
                    return 'Delete';
                },
                buttonclick: function (row) {
                    var rowid = _this.grnPoAddGrid.getrowid(row);
                    _this.grnPoAddGrid.deleterow(rowid);
                }
            }
        ];
        this.columngroups =
            [
                { text: 'Itemwise Bill Sundry', align: 'center', name: 'ItemWiseBillSundry' }
            ];
        if (type == 'sup') {
            var getData = {
                get_bill_sundery: 'purchase',
                item_wise_bill_sundry: true
            };
            this.bsms.index(getData).subscribe(function (response) {
                var arrayData = response;
                var formattedData = [];
                _this.displayFieldAdd = response;
                var colIndex = 1;
                for (var i = 0; i < arrayData.length; i++) {
                    if (arrayData[i].purchase == 1 && arrayData[i].purchase_type == 'ITEMWISE') {
                        // formattedData[i] = {};
                        // formattedData[i].pch_dr_item_wise_account_head_id = arrayData[i].purchase_dr_item_wise_account_head.id;
                        // formattedData[i].bs_name = arrayData[i].purchase_dr_item_wise_account_head.name;
                        // formattedData[i].amount = null;
                        var dataFieldName = 'bs_name_' + arrayData[i].id;
                        var displayFieldName = arrayData[i].name;
                        _this.source.datafields.push({ name: dataFieldName, type: 'number' });
                        var col = { text: displayFieldName, datafield: dataFieldName, columntype: 'textbox', width: 140, editable: true, columngroup: 'ItemWiseBillSundry' };
                        columnData.splice(4 + colIndex, 0, col);
                        colIndex++;
                    }
                }
                console.info(columnData);
                // this.wholeSumBSSource.localdata = formattedData;
                _this.jqxLoader.close();
                _this.columns = columnData;
                _this.grnPoAddGrid.updatebounddata();
            }, function (error) {
                console.log(error);
                _this.jqxLoader.close();
                _this.columns = columnData;
                _this.grnPoAddGrid.updatebounddata();
            });
        }
        else {
            this.columns = columnData;
            this.grnPoAddGrid.updatebounddata();
            this.jqxLoader.close();
        }
        // this.grnPoAddGrid.updatebounddata();
    };
    GrnAddComponent.prototype.amountCalculation = function (data, rowid) {
        if (data) {
            var value = 0; //, vat_amount:number = 0, total:number = 0;
            if (data['quantity'] && data['rate']) {
                value = data['quantity'] * data['rate'];
            }
            // if(value && data['vat']){
            //   vat_amount = value * (data['vat']/100);
            // }
            // total = value + vat_amount;
            this.grnPoAddGrid.setcellvalue(rowid, 'value', value.toFixed(2));
            // this.grnPoAddGrid.setcellvalue(rowid,'vat_value',vat_amount.toFixed(2));
            this.grnPoAddGrid.setcellvalue(rowid, 'total', value.toFixed(2)); //total.toFixed(2)
        }
    };
    /**
     * Add New Row in Grn Po Grid
     */
    GrnAddComponent.prototype.addNewItem = function () {
        var datarow = this.generaterow();
        this.grnPoAddGrid.addrow(null, datarow);
    };
    /**
     * Initialize Row data field to be pushed to Grn Po Grid
     */
    GrnAddComponent.prototype.generaterow = function () {
        var row = {};
        row['item_id'] = '';
        row['quantity'] = 0;
        row['rate'] = 0;
        row['unit_id'] = '';
        row['value'] = 0;
        // row['vat'] = '13';
        // row['vat_value'] = '';
        row['total'] = 0;
        // row['mi_num'] = 0;
        console.info(this.displayFieldAdd);
        for (var i = 0; i < this.displayFieldAdd.length; i++) {
            if (this.displayFieldAdd[i].purchase == 1 && this.displayFieldAdd[i].purchase_type == 'ITEMWISE') {
                var dataFieldName = 'bs_name_' + this.displayFieldAdd[i].id;
                row[dataFieldName] = 0;
            }
        }
        return row;
    };
    GrnAddComponent.prototype.getGroupWiseBillSundry = function () {
        var _this = this;
        this.groupWiseSource =
            {
                datatype: 'json',
                datafields: [
                    { name: 'group_name', type: 'string' },
                ],
                updaterow: function (rowid, rowdata, commit) {
                    commit(true);
                },
                localdata: []
            };
        // this.groupWisedataAdapter = new jqx.dataAdapter(this.groupWiseSource);
        var columnData = [
            {
                text: 'Group Name', datafield: 'group_name', displayfield: "group_name", columntype: 'textbox', width: 120, editable: false
            },
            {
                text: 'Actions', datafield: 'Delete', columntype: 'button', width: 70,
                cellsrenderer: function () {
                    return 'Delete';
                },
                buttonclick: function (row) {
                    //let rowid = this.groupWiseGrid.getrowid(row);
                    //let rowData = this.groupWiseGrid.getrowdatabyid(rowid);
                    //this.groupWiseGrid.deleterow(rowid);
                    //this.createGroupNameAdapter();
                }
            }
        ];
        var getData = {
            get_bill_sundery: 'purchase',
            item_wise_bill_sundry: true
        };
        this.bsms.index(getData).subscribe(function (response) {
            var arrayData = response;
            var formattedData = [];
            var colIndex = 1;
            for (var i = 0; i < arrayData.length; i++) {
                if (arrayData[i].purchase == 1 && arrayData[i].purchase_type == 'ITEMWISE') {
                    var dataFieldName = 'bs_name_' + arrayData[i].id;
                    var displayFieldName = arrayData[i].name;
                    _this.groupWiseSource.datafields.push({ name: dataFieldName, type: 'number' });
                    var col = { text: displayFieldName, datafield: dataFieldName, displayfield: dataFieldName, columntype: 'textbox', width: 140, editable: true };
                    columnData.splice(0 + colIndex, 0, col);
                    colIndex++;
                }
            }
            // this.wholeSumBSSource.localdata = formattedData;
            _this.jqxLoader.close();
            // this.groupWiseColumns = columnData;
            // this.groupWiseGrid.updatebounddata();
        }, function (error) {
            console.log(error);
            _this.jqxLoader.close();
            //this.groupWiseColumns = columnData;
            //this.groupWiseGrid.updatebounddata();
        });
    };
    // addNewGroup() {
    //   let allData = this.groupWiseGrid.getrows();
    //   let dataLength = allData.length;
    //   let groupName;
    //   if (allData.length > 0) {
    //     let lastItem = allData[dataLength - 1];
    //     let lastItemNumber = lastItem['group_name'].substr(9);
    //     groupName = 'GroupName' + (Number(lastItemNumber) + 1);
    //   } else {
    //     groupName = 'GroupName' + (dataLength + 1);
    //   }
    //   let datarow = {
    //     group_name: groupName
    //   };
    //   this.groupWiseGrid.addrow(null, datarow);
    //   this.createGroupNameAdapter();
    // }
    // createGroupNameAdapter() {
    //   //let allData = this.groupWiseGrid.getrows();
    //   let groupNames = [];
    //   for (let i = 0; i < allData.length; i++) {
    //     let data = {
    //       id: allData[i].group_name,
    //       name: allData[i].group_name
    //     }
    //     groupNames.push(data);
    //   }
    //   this.groupNameAdapter = groupNames;
    // }
    // end of group wise bill sundry
    ///
    /**
    * Event Triggred when With PO combobox
    * value changed
    */
    GrnAddComponent.prototype.withPOChange = function (event) {
        var _this = this;
        this.source.localdata = [];
        this.grnPoAddGrid.updatebounddata('cells');
        var selectedType = 'sup'; //this.directGrnType.getSelectedItem().value;
        var selectedVendor = this.myComboBox2.val() || null;
        var withPO = this.withPOCombo.val() || false;
        console.log(withPO);
        if (selectedType == 'sup' && selectedVendor && withPO == true) {
            this.prdms.index({ get_po_for_grn: true, vendor_id: selectedVendor }).subscribe(function (response) {
                console.log(response);
                var grnData = response || [];
                var itemData = [];
                for (var i = 0; i < grnData.length; i++) {
                    var currentItems = grnData[i].po_item_requisition_details || [];
                    for (var j = 0; j < currentItems.length; j++) {
                        // currentItems[j].account_group_code = currentItems[j].item && currentItems[j].item.account_group_code || null;
                        currentItems[j].item_name = currentItems[j].item && currentItems[j].item.name + ' - ' + currentItems[j].item.code;
                        currentItems[j].unit_id = currentItems[j].item && currentItems[j].item.unit_id || null;
                        currentItems[j].unit_name = currentItems[j].item && currentItems[j].item.unit && currentItems[j].item.unit.name || null;
                        itemData.push(currentItems[j]);
                    }
                }
                console.log(itemData);
                _this.source.localdata = itemData;
                _this.grnPoAddGrid.updatebounddata('cells');
            }, function (error) {
                console.log(error);
                var data = _this.ehs.formatError(error);
                var messageDiv = document.getElementById('windowMessage');
                messageDiv.innerText = data['message'];
                _this.winNotification.open();
                _this.jqxLoader.close();
            });
        }
        // else{
        //   let messageDiv: any = document.getElementById('windowMessage');
        //   messageDiv.innerText = 'Please Select Vendor Name First';
        //   this.winNotification.open();
        // }
    };
    GrnAddComponent.prototype.saveBtn = function (post) {
        var _this = this;
        post['store_id'] = this.myComboBox.val();
        // Get Rows from Grn Item Grid
        post['grnPOItems'] = [];
        var gridRows = this.grnPoAddGrid.getrows();
        post['grnPOItems'] = gridRows;
        // for (let i = 0; i < gridRows.length; i++) {
        //   gridRows[i]['total'] = gridRows[i]['quantity'] * gridRows[i]['rate'];
        //   post['grnPOItems'][i] = gridRows[i];
        // }
        // Get Rows from Account Head Grid
        post['wholesumBillSundry'] = this.wholeSumGrid.getrows();
        //post['groupwiseBillSundry'] = this.groupWiseGrid.getrows();
        // Get value Based on Selected Type
        var selectedType = 'sup'; //this.directGrnType.getSelectedItem().value;
        post['vendor_id'] = (selectedType == 'sup') ? this.myComboBox2.val() : null;
        post['vendor_chalaan_no'] = (selectedType == 'sup') ? this.vChalaanNo.val() : null;
        // post['material_issue_id'] = (selectedType == 'ret' || selectedType == 'iet' || selectedType == 'ho') ? this.mIssueCombo.val() : null;
        post['type'] = selectedType;
        post['with_po'] = this.withPOCombo.val() || false;
        ;
        // for (let i = 0; i < post['grnPOItems'].length; i++) {
        //   post['grnPOItems'][i]['po_id'] = this.grnPoItemsCombo.getSelectedItem().value;
        // }
        post['local'] = true;
        console.log(post);
        this.myValidator.validate(document.getElementById('grnPoForm'));
        if (post['store_id'] && post['grnPOItems'].length > 0) {
            this.jqxLoader.open();
            this.gps.store(post).subscribe(function (result) {
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
    GrnAddComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    GrnAddComponent.prototype.storeChanged = function () {
        this.store = this.myComboBox.val() ? true : false;
    };
    GrnAddComponent.prototype.vendorChanged = function () {
        this.vendor = this.myComboBox2.val() == null ? false : true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('grnPoAddGrid'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _a || Object)
    ], GrnAddComponent.prototype, "grnPoAddGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('wholeSumGrid'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _b || Object)
    ], GrnAddComponent.prototype, "wholeSumGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], GrnAddComponent.prototype, "myComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox2'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], GrnAddComponent.prototype, "myComboBox2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datetime'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */]) === "function" && _e || Object)
    ], GrnAddComponent.prototype, "datetime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('grnPoItemsCombo'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _f || Object)
    ], GrnAddComponent.prototype, "grnPoItemsCombo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('directGrnType'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _g || Object)
    ], GrnAddComponent.prototype, "directGrnType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mIssueCombo'),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _h || Object)
    ], GrnAddComponent.prototype, "mIssueCombo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('withPOCombo'),
        __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _j || Object)
    ], GrnAddComponent.prototype, "withPOCombo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('vChalaanNo'),
        __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */]) === "function" && _k || Object)
    ], GrnAddComponent.prototype, "vChalaanNo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _l || Object)
    ], GrnAddComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _m || Object)
    ], GrnAddComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _o || Object)
    ], GrnAddComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], GrnAddComponent.prototype, "AddedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], GrnAddComponent.prototype, "cancelData", void 0);
    GrnAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grn-add',
            template: __webpack_require__("./src/app/layout/inventory-master/grn/grn-add/grn-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/grn/grn-add/grn-add.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _p || Object, String, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["X" /* PoRequisitionDetailMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["X" /* PoRequisitionDetailMasterService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["I" /* GrnPoMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["I" /* GrnPoMasterService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _u || Object, typeof (_v = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["S" /* MaterialIssueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["S" /* MaterialIssueService */]) === "function" && _v || Object, typeof (_w = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["s" /* CodeCheckerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["s" /* CodeCheckerService */]) === "function" && _w || Object, typeof (_x = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _x || Object, typeof (_y = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["n" /* BillSundryMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["n" /* BillSundryMasterService */]) === "function" && _y || Object])
    ], GrnAddComponent);
    return GrnAddComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
}());

//# sourceMappingURL=grn-add.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/grn/grn-edit/grn-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'label'\">\r\n            <form name=\"grnPoForm\" [formGroup]=\"grnPoForm\" style=\"padding-bottom:20px;\">\r\n              <table>\r\n                <tr>\r\n                  <td style=\"padding-bottom:10px; width:93px;\">Grn No</td>\r\n                  <td style=\"padding-bottom:10px;\">\r\n                    <jqxInput class=\"grn_noInput\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"grn_no\"></jqxInput>\r\n                  </td>\r\n                  <td style=\"padding-bottom:10px;  width:111px;\">Grn Date</td>\r\n                  <td style=\"padding-bottom:10px;\">\r\n                    <jqxDateTimeInput #datetime\r\n                     class=\"grn_dateInput\" [height]=\"23\" [width]=\"180\" [theme]=\"'energyblue'\" [formatString] = \"'yyyy-MM-dd'\" formControlName=\"grn_date\"></jqxDateTimeInput>\r\n                  </td>\r\n                  <!-- <td>Receipt No</td>\r\n                    <td>\r\n                      <jqxInput class=\"receipt_noInput\" [height]=\"23\" formControlName=\"receipt_no\"></jqxInput>\r\n                    </td> -->\r\n                </tr>\r\n                <tr>\r\n                  <!-- <td>Dr Account Head</td>\r\n                    <td>\r\n                      <jqxInput class=\"dr_account_headInput\" [height]=\"23\" formControlName=\"dr_account_head\"></jqxInput>\r\n                    </td>\r\n                    <td>Dr Account Sub Head</td>\r\n                    <td>\r\n                      <jqxInput class=\"dr_account_sub_headInput\" [height]=\"23\" formControlName=\"dr_account_sub_head\"></jqxInput>\r\n                    </td> -->\r\n                  <td>Store</td>\r\n                  <td>\r\n                      <jqxComboBox  #myComboBox [searchMode]=\"'contains'\"\r\n                      class=\"store_idInput\" [height]=\"23\" [width]=\"180\" [theme]=\"'energyblue'\"  [source]=\"storeAdapter\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n                      </jqxComboBox> \r\n                  </td>\r\n                  <td>Remarks</td>\r\n                  <td>\r\n                    <jqxInput class=\"remarksInput\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"remarks\"></jqxInput>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Bill Code</td>\r\n                    <td>\r\n                      <jqxInput class=\"bill_codeInput\" [theme]=\"'energyblue'\" [height]=\"23\" formControlName=\"bill_code\"></jqxInput>\r\n                    </td>\r\n                    <td>Bill No</td>\r\n                    <td>\r\n                      <jqxInput class=\"bill_noInput\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"bill_no\"></jqxInput>\r\n                    </td>\r\n                </tr>\r\n                <!-- <tr>\r\n                    <td>Cr Account Head</td>\r\n                    <td>\r\n                      <jqxInput class=\"cr_account_headInput\" [height]=\"23\" formControlName=\"cr_account_head\"></jqxInput>\r\n                    </td>\r\n                    <td>Cr Account Sub Head</td>\r\n                    <td>\r\n                      <jqxInput class=\"cr_account_sub_headInput\" [height]=\"23\" formControlName=\"cr_account_sub_head\"></jqxInput>\r\n                    </td>\r\n                    \r\n                  </tr> -->\r\n                <tr>\r\n                  <td>Type</td>\r\n                  <td>\r\n                    <jqxComboBox #directGrnType class=\"type_input\" [height]=\"23\" [theme]=\"'energyblue'\" [width]=\"180\" [source]=\"typeAdapter\" [displayMember]=\"'name'\"\r\n                    [searchMode]=\"'containsignorecase'\" [valueMember]=\"'id'\" (onSelect)=\"typeChange($event)\">\r\n                  </jqxComboBox>\r\n                  </td>\r\n                </tr>\r\n                <tr *ngIf=\"vendorShow\">\r\n                  <td>Vendor</td>\r\n                  <td>\r\n                    <jqxComboBox #myComboBox2 class=\"vendor_idInput\" [height]=\"23\" [theme]=\"'energyblue'\" [width]=\"180\" [source]=\"vendorAdapter\" [displayMember]=\"'name'\"\r\n                      [searchMode]=\"'containsignorecase'\" [valueMember]=\"'id'\">\r\n                    </jqxComboBox>\r\n                  </td>\r\n                  <td>Vendor Chalaan No</td>\r\n                  <td>\r\n                    <jqxInput #vChalaanNo class=\"vendor_chalaan_noInput\" [height]=\"23\" [theme]=\"'energyblue'\" [width]=\"180\" formControlName=\"vendor_chalaan_no\"></jqxInput>\r\n                  </td>\r\n                </tr>\r\n                <tr *ngIf=\"miShow\">\r\n                  <td>Material Issue</td>\r\n                  <td>\r\n                    <jqxComboBox #mIssueCombo class=\"mi_Input\" [height]=\"23\" [theme]=\"'energyblue'\" [width]=\"180\" [source]=\"miAdapter\" [displayMember]=\"'issue_no'\"\r\n                      [searchMode]=\"'containsignorecase'\" [valueMember]=\"'id'\">\r\n                    </jqxComboBox>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </form>\r\n          </jqxValidator>\r\n    </div>\r\n    <div class=\"col-md-5\" style=\"margin-bottom:10px\">\r\n        <div class=\"tfm-custom-toolbar tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\" style=\"margin-right:-10.5%;\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <strong>\r\n                  Account Head: \r\n                  <span *ngIf=\"achLoader\"> <i class=\"fa fa-refresh fa-spin fa-fw\"></i> </span>\r\n                </strong>\r\n              </div>\r\n              <div class=\"col-md-9\" style=\"text-align:right;\">\r\n                <jqxButton style=\"margin-right: 5px;\" (onClick)=\"addAccountHeadItem()\" [theme]=\"'energyblue'\">\r\n                    Add New Account Head\r\n                  </jqxButton>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <jqxGrid #accHeadAddGrid [width]=\"'110%'\" [height]=\"160\" [source]=\"accHeadDataAdapter\" [columns]=\"accHeadcolumns\" [editable]=\"true\" [enabletooltips]=\"true\"\r\n          [selectionmode]=\"'multiplecellsadvanced'\" [theme]=\"'energyblue'\">\r\n        </jqxGrid>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"tfm-custom-toolbar tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\" style=\"margin-right:10px;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <strong>\r\n          GRN ITEMS: \r\n          <span *ngIf=\"itemLoader\"> <i class=\"fa fa-refresh fa-spin fa-fw\"></i> </span>\r\n        </strong>\r\n      </div>\r\n      <div class=\"col-md-10\" style=\"text-align:right;margin-left:-3%;\">\r\n        <jqxButton style=\"margin-right: 5px;\" (onClick)=\"addNewItem()\" [theme]=\"'energyblue'\">\r\n          Add New Item\r\n        </jqxButton>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <jqxGrid #grnPoEditGrid [width]=\"'99%'\" [height]=\"200\" [source]=\"dataAdapter\" [columns]=\"columns\"\r\n    [editable]=\"true\" [enabletooltips]=\"true\" [selectionmode]=\"'multiplecellsadvanced'\" [theme]=\"'energyblue'\" [showstatusbar]=\"true\" [statusbarheight]=\"30\" [showaggregates]=\"true\">\r\n  </jqxGrid>\r\n</div>\r\n\r\n<div style=\"padding-top: 10px;text-align:right;\">\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" [disabled]=\"!grnPoForm.valid\" (onClick)=\"saveBtn(grnPoForm.value)\">\r\n    Update\r\n  </jqxButton>\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"cancelBtn()\">\r\n    Cancel\r\n  </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\" [isModal]=\"true\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/grn/grn-edit/grn-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/grn/grn-edit/grn-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrnEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxdatetimeinput.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxinput__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxinput.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
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










var GrnEditComponent = /** @class */ (function () {
    function GrnEditComponent(fb, apiUrl, cdr, prdms, gps, itemService, ehs, cus) {
        var _this = this;
        this.fb = fb;
        this.cdr = cdr;
        this.prdms = prdms;
        this.gps = gps;
        this.itemService = itemService;
        this.ehs = ehs;
        this.cus = cus;
        this.UpdatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ready = false;
        this.grn_items = [];
        this.itemLoader = false;
        this.vendorShow = false;
        this.miShow = false;
        this.achLoader = false;
        this.typeAdapter = [
            { name: 'HO', id: 'ho' },
            { name: 'Supplier', id: 'sup' },
            { name: 'Adjustment', id: 'adj' },
            { name: 'Inter Estate Transfer ', id: 'iet' },
            { name: 'Return', id: 'ret' },
        ];
        this.userData = {};
        this.rendertoolbar = function (toolbar) {
            var container = document.createElement('div');
            container.style.margin = '5px';
            var grnPoEditHeadingContainer = document.createElement('div');
            // let grnPoEditAddButtonContainer = document.createElement('div');
            grnPoEditHeadingContainer.id = 'grnPoEditHeadingContainer';
            // grnPoEditAddButtonContainer.id = 'grnPoEditAddButtonContainer';
            grnPoEditHeadingContainer.style.cssText = 'float: left;padding:5px;margin-right:10px;font-weight:bold;';
            // grnPoEditAddButtonContainer.style.cssText = 'float: right';
            grnPoEditHeadingContainer.innerHTML = 'Grn Po Items:';
            container.appendChild(grnPoEditHeadingContainer);
            // container.appendChild(grnPoEditAddButtonContainer);
            toolbar[0].appendChild(container);
            // let addRowButton = jqwidgets.createInstance('#grnPoEditAddButtonContainer', 'jqxButton', { width: 155, value: 'Add New Grn Po Item' });
            // addRowButton.addEventHandler('click', () => {
            //   let datarow = this.generaterow();
            //   this.grnPoEditGrid.addrow(null, datarow);
            // })
        };
        this.accHeadSource = {
            datatype: 'json',
            datafields: [
                { name: 'id', type: 'number' },
                { name: 'account_head_id', type: 'string' },
                { name: 'code', type: 'string' },
                { name: 'name', type: 'string' },
                { name: 'cr_dr', type: 'string' },
                { name: 'label', type: 'string' },
                { name: 'value', type: 'string' },
                { name: 'cost_center_id', type: 'string' },
                { name: 'cost_center_name', type: 'string', map: 'cost_center>name' },
            ],
            id: 'id',
            updaterow: function (rowid, rowdata, commit) {
                commit(true);
            },
            localdata: []
        };
        this.crDrAdapter = [
            { cr_dr: 'cr', label: 'CR' },
            { cr_dr: 'dr', label: 'DR' },
        ];
        this.accHeadDataAdapter = new jqx.dataAdapter(this.accHeadSource);
        this.accHeadcolumns = [
            {
                text: 'Accound Head', datafield: 'account_head_id', displayfield: 'code', editable: true, columntype: 'combobox',
                createeditor: function (row, column, editor) {
                    _this.achLoader = true;
                    editor.jqxComboBox({
                        source: _this.accHeadItemAdapter,
                        displayMember: "code",
                        valueMember: "account_head_id"
                    });
                },
            },
            {
                text: 'Cr/Dr', datafield: 'cr_dr', displayfield: 'label', columntype: 'combobox', width: 60, editable: true,
                createeditor: function (row, column, editor) {
                    editor.jqxComboBox({
                        source: _this.crDrAdapter,
                        displayMember: "label",
                        valueMember: "cr_dr"
                    });
                }
            },
            {
                text: 'Amount', datafield: 'value', columntype: 'textbox', width: 100,
                cellsrenderer: function (index, datafield, value, defaultvalue, column, rowdata) {
                    // console.log(rowdata);
                    if (rowdata.cr_dr && rowdata.value) {
                        var amountSign = void 0;
                        if (rowdata.cr_dr == 'cr') {
                            amountSign = '-';
                        }
                        else {
                            amountSign = '+';
                        }
                        var total = amountSign + '' + rowdata.value;
                        // console.log(total);
                        return '<div style="padding: 5px;">' + total + '</div>';
                    }
                },
            },
            {
                text: 'Cost Center', datafield: 'cost_center_id', displayfield: 'cost_center_name', columntype: 'combobox',
                createeditor: function (row, column, editor) {
                    _this.achLoader = true;
                    editor.jqxComboBox({
                        source: _this.costCenterAdapter,
                        displayMember: "name",
                        valueMember: "id"
                    });
                }
            },
            // {
            //   text: 'Total', datafield: 'total', columntype: 'textbox', width: 120, 
            //   cellsrenderer: (index: number, datafield: string, value: any, defaultvalue: any, column: any, rowdata: any): string => {
            //     if (rowdata.quantity && rowdata.rate) {
            //       let total = parseFloat(rowdata.quantity) * parseFloat(rowdata.rate);
            //       return '<div style="jqx-align-right">' + this.dataAdapter.formatNumber(total, 'f2') + '</div>';
            //     }
            //   }
            // },
            {
                text: 'Actions', datafield: 'Delete', columntype: 'button', width: 70,
                cellsrenderer: function () {
                    return 'Delete';
                },
                buttonclick: function (row) {
                    var rowid = _this.accHeadAddGrid.getrowid(row);
                    _this.accHeadAddGrid.deleterow(rowid);
                }
            }
        ];
        this.rules = [
            { input: '.grn_noInput', message: 'Grn no is required!', action: 'keyup, blur', rule: 'required' },
            {
                input: '.grn_dateInput', message: ' Grn date is required!', action: 'keyup, blur', rule: function (input, commit) {
                    var data = _this.datetime.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            // { input: '.vendor_chalaan_noInput', message: 'Vendor chalaan no is required!', action: 'keyup, blur', rule: 'required' },
            { input: '.bill_noInput', message: ' Bill no is required!', action: 'keyup, blur', rule: 'required' },
            { input: '.bill_codeInput', message: ' Bill code is required!', action: 'keyup, blur', rule: 'required' },
            {
                input: '.store_idInput', message: ' Store name is required!', action: 'change', rule: function (input, commit) {
                    var data = _this.myComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            // {
            //   input: '.vendor_idInput', message: ' Vendor name is required!', action: 'change', rule: (input: any, commit: any): any => {
            //     let data = this.myComboBox2.val();
            //     let result = (data != '') ? true : false;
            //     return result;
            //   }
            // },
            { input: '.remarksInput', message: ' Remarks is required!', action: 'keyup, blur', rule: 'required' },
        ];
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.createForm();
    }
    GrnEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getItem();
        this.EditData = new __WEBPACK_IMPORTED_MODULE_2__shared__["H" /* GrnPo */](this.GRnPoEditData);
        this.grnPoForm.setValue(this.EditData);
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
                _this.myComboBox.selectItem(_this.GRnPoEditData.store_id);
            }
        });
        this.vendor_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                url: this.apiUrl + 'vendor?limit=all',
            };
        this.vendorAdapter = new jqx.dataAdapter(this.vendor_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }, loadComplete: function () {
                _this.myComboBox2.selectItem(_this.GRnPoEditData.vendor_id);
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
                for (var i = 0; i < tData.length; i++) {
                    tData[i]['cost_center_id'] = tData[i]['id'];
                }
                _this.achLoader = false;
                return tData;
            },
            loadError: function (jqXHR, status, error) {
                _this.achLoader = false;
            }
        });
        this.accHeadItemSource = {
            datatype: "json",
            contentType: "application/json; charset=utf-8",
            datafields: [
                { name: 'id' },
                { name: 'account_head_id' },
                // { name: 'name' },
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
                _this.achLoader = false;
                return tData;
            },
            loadComplete: function () {
            },
            loadError: function (jqXHR, status, error) {
                _this.achLoader = false;
            }
        });
        // For items in Item Add Grid
        this.itemSource =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'number' },
                    { name: 'name', type: 'string' },
                    { name: 'item_id', type: 'number' },
                    { name: 'code', type: 'string' },
                ],
                updaterow: function (rowid, rowdata, commit) {
                    commit(true);
                },
                url: this.apiUrl + 'item?limit=all'
            };
        this.itemAdapter = new jqx.dataAdapter(this.itemSource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                for (var i = 0; i < tData.length; i++) {
                    tData[i]['name'] = tData[i]['code'] + ' - ' + tData[i]['name'];
                    tData[i]['item_id'] = tData[i]['id'];
                }
                _this.itemLoader = false;
                return tData;
            },
        });
        this.miSource =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'issue_no' },
                ],
                url: this.apiUrl + 'material_issue?limit=all',
                data: this.userData,
            };
        this.miAdapter = new jqx.dataAdapter(this.miSource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }
        });
    };
    GrnEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.jqxLoader.open();
        this.gps.show(this.GRnPoEditData.id).subscribe(function (result) {
            console.log(result);
            var po = result && result['po'];
            if (po['type']) {
                _this.directGrnType.selectItem(po['type']);
            }
            _this.grn_items = result['po'] && result['po']['grn_items'] || [];
            for (var _i = 0; _i < _this.grn_items.length; _i++) {
                _this.grn_items[_i]['name'] = _this.grn_items[_i]['item'] && _this.grn_items[_i]['item'].code + '-' + _this.grn_items[_i]['item'].name;
                _this.grn_items[_i]['item_id'] = _this.grn_items[_i]['item'] && _this.grn_items[_i]['item'].unit_id || null;
                _this.grn_items[_i]['uname'] = _this.grn_items[_i]['item'] && _this.grn_items[_i]['item']['unit'] && _this.grn_items[_i]['item']['unit'].name || null;
                _this.grn_items[_i]['unit_id'] = _this.grn_items[_i]['item'] && _this.grn_items[_i]['item']['unit_id'] || null;
                // this.grn_items[_i]['vat_percent'] = '13';
                // this.grn_items[_i]['total'] = Number(this.grn_items[_i]['total']) + Number(this.grn_items[_i]['vat']);
                // this.grn_items[_i]['po_no'] = this.grn_items[_i]['purchase_order'] && this.grn_items[_i]['purchase_order'].po_no;
            }
            _this.source.localdata = _this.grn_items;
            // console.log(this.grn_items);
            _this.grnPoEditGrid.updatebounddata("cells");
            if (result['accountTransaction'] && result['accountTransaction']['account_transaction_splits']) {
                for (var i = 0; i < result['accountTransaction']['account_transaction_splits'].length; i++) {
                    result['accountTransaction']['account_transaction_splits'][i]['code'] = result['accountTransaction']['account_transaction_splits'][i]['account_head'].code + ' - ' + result['accountTransaction']['account_transaction_splits'][i]['account_head'].name;
                    if (result['accountTransaction']['account_transaction_splits'][i]['value'] > 0) {
                        result['accountTransaction']['account_transaction_splits'][i]['cr_dr'] = 'dr';
                        result['accountTransaction']['account_transaction_splits'][i]['label'] = 'DR';
                    }
                    else {
                        result['accountTransaction']['account_transaction_splits'][i]['value'] = Math.abs(result['accountTransaction']['account_transaction_splits'][i]['value']);
                        result['accountTransaction']['account_transaction_splits'][i]['cr_dr'] = 'cr';
                        result['accountTransaction']['account_transaction_splits'][i]['label'] = 'CR';
                    }
                }
            }
            _this.account_transaction = result['accountTransaction'] && result['accountTransaction']['account_transaction_splits'] || [];
            _this.accHeadSource.localdata = _this.account_transaction;
            _this.accHeadAddGrid.updatebounddata();
            _this.jqxLoader.close();
        }, function (error) {
            console.log(error);
            _this.jqxLoader.close();
        });
        this.cdr.detectChanges();
    };
    /**
     * Track Change Event of Type Combobox
     * @param
     */
    GrnEditComponent.prototype.typeChange = function ($event) {
        var selectedType = this.directGrnType.getSelectedItem().value;
        switch (selectedType) {
            case 'ho': {
                this.vendorShow = false;
                this.miShow = true;
                break;
            }
            case 'sup': {
                this.vendorShow = true;
                this.miShow = false;
                break;
            }
            case 'adj': {
                this.vendorShow = false;
                this.miShow = false;
                break;
            }
            case 'ret': {
                this.vendorShow = false;
                this.miShow = true;
                break;
            }
            case 'iet': {
                this.vendorShow = false;
                this.miShow = true;
                break;
            }
            default: {
                break;
            }
        }
        // switch
    };
    GrnEditComponent.prototype.createForm = function () {
        this.grnPoForm = this.fb.group({
            'grn_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'grn_date': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'vendor_chalaan_no': [null],
            'bill_code': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'bill_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'remarks': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    };
    GrnEditComponent.prototype.getItem = function () {
        var _this = this;
        this.source =
            {
                localdata: [],
                datatype: 'json',
                datafields: [
                    // { name: 'po_id', type: 'string' },
                    // { name: 'po_no', type: 'string' },
                    { name: 'item_id', type: 'string' },
                    { name: 'name', type: 'string' },
                    { name: 'account_group_code', type: 'string' },
                    { name: 'uname', type: 'string' },
                    { name: 'quantity', type: 'string' },
                    { name: 'rate', type: 'string' },
                    { name: 'unit_id', type: 'string' },
                    { name: 'value', type: 'string' },
                    { name: 'vat', type: 'string' },
                    { name: 'vat_value', type: 'string' },
                    { name: 'total', type: 'number' },
                ],
                updaterow: function (rowid, rowdata, commit) {
                    commit(true);
                }
            };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns =
            [
                {
                    text: 'Item Name', datafield: 'item_id', displayfield: 'name', columntype: 'combobox',
                    createeditor: function (row, column, editor) {
                        var contractorAdapter = _this.itemAdapter;
                        editor.jqxComboBox({
                            source: contractorAdapter,
                            displayMember: "name",
                            valueMember: "item_id"
                        });
                    },
                    cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                        if (newvalue !== oldvalue) {
                            // console.log(newvalue);
                            var currentRow_1 = _this.grnPoEditGrid.getrowdata(row).boundindex;
                            _this.grnPoEditGrid.setcellvalue(currentRow_1, 'vat_percent', '13');
                            _this.itemService.show(newvalue['value']).subscribe(function (result) {
                                if (result['data']['unit']) {
                                    _this.grnPoEditGrid.setcellvalue(currentRow_1, 'uname', result['data']['unit'].name);
                                    _this.grnPoEditGrid.setcellvalue(currentRow_1, 'unit_id', result['data'].unit_id);
                                }
                                if (result['data']['quantity']) {
                                    _this.grnPoEditGrid.setcellvalue(currentRow_1, 'quantity', result['data'].quantity);
                                }
                                else {
                                    _this.grnPoEditGrid.setcellvalue(currentRow_1, 'quantity', 0);
                                }
                                if (result['data']['account_group_code']) {
                                    _this.grnPoEditGrid.setcellvalue(currentRow_1, 'account_group_code', result['data'].account_group_code);
                                }
                            }, function (error) {
                                console.log(error);
                            });
                        }
                    },
                },
                {
                    text: 'DR Account Head', datafield: 'account_group_code', displayfield: 'account_group_code', columntype: 'textbox', width: 120, editable: false
                },
                { text: 'Quantity', datafield: 'quantity', columntype: 'textbox', width: 120,
                    cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                        if (newvalue !== oldvalue) {
                            var currentRow = _this.grnPoEditGrid.getrowdata(row);
                            var rowId = _this.grnPoEditGrid.getrowdata(row).boundindex;
                            currentRow['quantity'] = newvalue;
                            _this.amountCalculation(currentRow, rowId);
                        }
                    },
                },
                { text: 'Rate', datafield: 'rate', columntype: 'textbox', width: 100,
                    cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                        if (newvalue !== oldvalue) {
                            var currentRow = _this.grnPoEditGrid.getrowdata(row);
                            var rowId = _this.grnPoEditGrid.getrowdata(row).boundindex;
                            currentRow['rate'] = newvalue;
                            _this.amountCalculation(currentRow, rowId);
                        }
                    },
                },
                {
                    text: 'Unit Name', datafield: 'unit_id', displayfield: 'uname', columntype: 'combobox', width: 160, editable: false,
                },
                { text: 'Value', datafield: 'value', columntype: 'textbox', width: 140, editable: false },
                { text: 'Vat %', datafield: 'vat', columntype: 'textbox', width: 50,
                    cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                        if (newvalue !== oldvalue) {
                            var currentRow = _this.grnPoEditGrid.getrowdata(row);
                            var rowId = _this.grnPoEditGrid.getrowdata(row).boundindex;
                            currentRow['vat'] = newvalue;
                            _this.amountCalculation(currentRow, rowId);
                        }
                    },
                },
                { text: 'Vat', datafield: 'vat_value', columntype: 'textbox', width: 100, editable: false },
                {
                    text: 'Total', datafield: 'total', displayfield: 'total', columntype: 'textbox',
                    // cellsrenderer: (index: number, datafield: string, value: any, defaultvalue: any, column: any, rowdata: any): string => {
                    //   if (rowdata.quantity && rowdata.rate) {
                    //     let total = parseFloat(rowdata.quantity) * parseFloat(rowdata.rate);
                    //     return '<div style="jqx-align-right">' + this.dataAdapter.formatNumber(total, 'f2') + '</div>';
                    //   }
                    // },
                    aggregates: [{
                            'Total': function (aggregatedValue, currentValue, column, record) {
                                var value;
                                if (aggregatedValue) {
                                    value = aggregatedValue;
                                }
                                else {
                                    value = 0;
                                }
                                return value + currentValue;
                            }
                        }],
                    aggregatesrenderer: function (aggregates) {
                        var value;
                        if (aggregates['Total']) {
                            value = aggregates['Total'];
                        }
                        else {
                            value = 0;
                        }
                        var renderstring = '<div style="float: left; margin: 4px; overflow: hidden;">' + "Total" + ': ' + value + '</div>';
                        return renderstring;
                    },
                },
                {
                    text: 'Actions', datafield: 'Delete', columntype: 'button', width: 70,
                    cellsrenderer: function () {
                        return 'Delete';
                    },
                    buttonclick: function (row) {
                        var rowid = _this.grnPoEditGrid.getrowid(row);
                        _this.grnPoEditGrid.deleterow(rowid);
                    }
                }
            ];
    };
    GrnEditComponent.prototype.amountCalculation = function (data, rowid) {
        if (data) {
            var value = 0, vat_amount = 0, total = 0;
            if (data['quantity'] && data['rate']) {
                value = data['quantity'] * data['rate'];
            }
            if (value && data['vat']) {
                vat_amount = value * (data['vat'] / 100);
            }
            total = value + vat_amount;
            this.grnPoEditGrid.setcellvalue(rowid, 'value', value);
            this.grnPoEditGrid.setcellvalue(rowid, 'vat_value', vat_amount);
            this.grnPoEditGrid.setcellvalue(rowid, 'total', total.toFixed(2));
        }
    };
    GrnEditComponent.prototype.getItemByRequisitionDetails = function (id) {
        var _this = this;
        if (id) {
            this.prdms.show(id).subscribe(function (res) {
                var item = res['data']['po_item_requisition_details'];
                var tData = [];
                for (var i = 0; i < item.length; i++) {
                    var dt = {};
                    dt['name'] = item[i]['item']['name'] + '-' + item[i]['item']['code'];
                    dt['id'] = item[i]['item']['id'];
                    tData.push(dt);
                }
                _this.itemAdapter = tData;
            });
        }
    };
    GrnEditComponent.prototype.addNewItem = function () {
        var datarow = this.generaterow();
        this.grnPoEditGrid.addrow(null, datarow);
    };
    GrnEditComponent.prototype.generaterow = function () {
        var row = {};
        row['item_id'] = '';
        row['name'] = '';
        row['quantity'] = '';
        row['rate'] = '';
        row['unit_id'] = '';
        row['uname'] = '';
        row['value'] = '';
        row['vat'] = '13';
        row['vat_value'] = '';
        row['total'] = '';
        return row;
    };
    // Start Account Head Grid
    GrnEditComponent.prototype.addAccountHeadItem = function () {
        var datarow = this.generateAccountHeadRow();
        this.accHeadAddGrid.addrow(null, datarow);
    };
    GrnEditComponent.prototype.generateAccountHeadRow = function () {
        var row = {};
        row['account_head_id'] = '';
        row['cr_dr'] = '';
        row['label'] = '';
        row['value'] = '';
        row['amount'] = '';
        row['cost_center_id'] = '';
        row['cost_center_name'] = '';
        row['total'] = '';
        return row;
    };
    // End Account Head Grid
    GrnEditComponent.prototype.saveBtn = function (post) {
        var _this = this;
        post['store_id'] = this.myComboBox.val();
        // Get Rows from Grn Item Grid
        post['grnPOItems'] = [];
        var gridRows = this.grnPoEditGrid.getrows();
        post['grnPOItems'] = gridRows;
        // for (let i = 0; i < gridRows.length; i++) {
        //   gridRows[i]['total'] = gridRows[i]['quantity'] * gridRows[i]['rate'];
        //   post['grnPOItems'][i] = gridRows[i];
        // }
        // post['grnPOItems'] = this.grnPoEditGrid.getrows();
        // post['vendor_id'] = this.myComboBox2.val();
        // Get Rows from Account Head Grid
        var account_head = this.accHeadAddGrid.getrows();
        post['accountTransaction'] = {};
        post['accountTransaction']['accountTransactionSplits'] = account_head;
        // Get value Based on Selected Type
        var selectedType = this.directGrnType.getSelectedItem().value;
        console.log(selectedType);
        post['vendor_id'] = (selectedType == 'sup') ? this.myComboBox2.val() : null;
        post['vendor_chalaan_no'] = (selectedType == 'sup') ? this.vChalaanNo.val() : null;
        post['material_issue_id'] = (selectedType == 'ret' || selectedType == 'iet' || selectedType == 'ho') ? this.mIssueCombo.val() : null;
        post['type'] = selectedType;
        // console.log(post);
        this.myValidator.validate(document.getElementById('grnPoForm'));
        if (post['store_id'] && post['type']) {
            this.jqxLoader.open();
            this.gps.update(this.GRnPoEditData.id, post).subscribe(function (result) {
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
    GrnEditComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], GrnEditComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('grnPoEditGrid'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _b || Object)
    ], GrnEditComponent.prototype, "grnPoEditGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('accHeadAddGrid'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _c || Object)
    ], GrnEditComponent.prototype, "accHeadAddGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], GrnEditComponent.prototype, "myComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox2'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _e || Object)
    ], GrnEditComponent.prototype, "myComboBox2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datetime'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */]) === "function" && _f || Object)
    ], GrnEditComponent.prototype, "datetime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _g || Object)
    ], GrnEditComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('directGrnType'),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _h || Object)
    ], GrnEditComponent.prototype, "directGrnType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mIssueCombo'),
        __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _j || Object)
    ], GrnEditComponent.prototype, "mIssueCombo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('vChalaanNo'),
        __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */]) === "function" && _k || Object)
    ], GrnEditComponent.prototype, "vChalaanNo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _l || Object)
    ], GrnEditComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('GRnPoEditData'),
        __metadata("design:type", Object)
    ], GrnEditComponent.prototype, "GRnPoEditData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], GrnEditComponent.prototype, "UpdatedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], GrnEditComponent.prototype, "cancelData", void 0);
    GrnEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grn-edit',
            template: __webpack_require__("./src/app/layout/inventory-master/grn/grn-edit/grn-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/grn/grn-edit/grn-edit.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _m || Object, String, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["X" /* PoRequisitionDetailMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["X" /* PoRequisitionDetailMasterService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["I" /* GrnPoMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["I" /* GrnPoMasterService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _t || Object])
    ], GrnEditComponent);
    return GrnEditComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
}());

//# sourceMappingURL=grn-edit.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/grn/grn-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrnRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grn_component__ = __webpack_require__("./src/app/layout/inventory-master/grn/grn.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__grn_component__["a" /* GrnComponent */]
    }
];
var GrnRoutingModule = /** @class */ (function () {
    function GrnRoutingModule() {
    }
    GrnRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], GrnRoutingModule);
    return GrnRoutingModule;
}());

//# sourceMappingURL=grn-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/grn/grn-view/grn-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\" style=\"font-size: 18px;\">\r\n    <table style=\"width: 100%\">\r\n      <tr>\r\n        <td>Grn Date: {{items?.grn_date}}</td>\r\n        <td>Store Name: {{items?.store?.name}}</td>\r\n        <td>Vendor: {{items?.vendor?.name}}</td>\r\n        <td>Grn No. {{items?.grn_no}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Vendor Chalan No. {{items?.vendor_chalaan_no}}</td>\r\n        <td>Bill Code: {{items?.bill_code}}</td>\r\n        <td>Bill No: {{items?.bill_no}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top: 25px;\">\r\n    <div class=\"col-md-12 new-col-md-12\">\r\n      <div class=\"rs-grid-panel bg-white\">\r\n        <table style=\"width: 90%; text-align: center;\" class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <td style=\"writing-mode: tb-rl;\" rowspan=\"2\">Bill Sundry</td>\r\n              <td style=\"text-align: center;\" [attr.colspan]=\"items?.grn_items.length\">Items</td>\r\n            </tr>\r\n            <tr>\r\n              <td *ngFor=\"let item of items?.grn_items\">{{item.item?.name}}<br />total={{item.total}}</td>\r\n              <!-- <td>Item 2<br />value=180</td>\r\n              <td>Item 3<br />value=180</td>\r\n              <td>Item 4<br />value=180</td> -->\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let bill of billSundrys\">\r\n              <td>{{bill.name}}</td>\r\n              <td *ngFor=\"let billItem of bill['array']\">{{billItem.value}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <fieldset style=\"width: 90%\" *ngFor=\"let item of items?.grn_items\">\r\n  <legend>Items</legend>\r\n  <table>\r\n    <tr>\r\n      <td>Item Name: {{item.item?.name}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Total: {{item.total}}</td>\r\n    </tr>\r\n  </table>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Bill Sundry Name</th>\r\n        <th>Value</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let bill of item.grn_bill_sundry_details\">\r\n        <td>{{bill.bill_sundry.name}}</td>\r\n        <td>{{bill.value}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</fieldset> -->"

/***/ }),

/***/ "./src/app/layout/inventory-master/grn/grn-view/grn-view.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/grn/grn-view/grn-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrnViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GrnViewComponent = /** @class */ (function () {
    function GrnViewComponent(grn) {
        this.grn = grn;
        this.billSunArray = [];
        this.billSundrys = [];
    }
    GrnViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.grnItems.id
        this.grn.getGrnById(this.grnItems.id).subscribe(function (result) {
            _this.items = result.data[0];
            for (var i = 0; i < _this.items.grn_items.length; i++) {
                // this.billSundrys[i].
                for (var j = 0; j < _this.items.grn_items[i].grn_bill_sundry_details.length; j++) {
                    var billId = _this.items.grn_items[i].grn_bill_sundry_details[j].bill_sundry_id;
                    var index = _this.billSunArray.indexOf(billId);
                    var data = {
                        name: _this.items.grn_items[i].grn_bill_sundry_details[j].bill_sundry.name,
                        value: _this.items.grn_items[i].grn_bill_sundry_details[j].value
                    };
                    if (index < 0) {
                        _this.billSunArray.push(billId);
                        _this.billSundrys[j] = {};
                        _this.billSundrys[j].name = _this.items.grn_items[i].grn_bill_sundry_details[j].bill_sundry.name;
                        _this.billSundrys[j].array = [];
                        _this.billSundrys[j].array.push(data);
                    }
                    else {
                        _this.billSundrys[index].array.push(data);
                    }
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GrnViewComponent.prototype, "grnItems", void 0);
    GrnViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grn-view',
            template: __webpack_require__("./src/app/layout/inventory-master/grn/grn-view/grn-view.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/grn/grn-view/grn-view.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["y" /* DirectGrnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["y" /* DirectGrnService */]) === "function" && _a || Object])
    ], GrnViewComponent);
    return GrnViewComponent;
    var _a;
}());

//# sourceMappingURL=grn-view.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/grn/grn.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-2 tfm-panel-left\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> Quick Access </h2>\r\n              </div>\r\n               <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                  <ng-template #quickAccess></ng-template>\r\n              </jqxPanel> \r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-10 tfm-panel-right\">\r\n          <div class=\"tfm-panel-container\">\r\n            <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                <h2>Good Receiving Notes</h2>\r\n            </div>\r\n            <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                <jqxGrid  #myGrid\r\n                    [width]=\"'99.8%'\" [height]=\"'100%'\" [source]=\"dataAdapter\" [sortable]=\"true\" [filterable]=\"true\" [pageable]=\"true\" [columns]=\"columns\" [theme]=\"'energyblue'\"\r\n                    [showtoolbar]=\"true\" [rendertoolbar]=\"rendertoolbar\" [selectionmode]=\"'checkbox'\" [showfilterrow]=\"true\" [virtualmode]=\"true\" [rendergridrows]=\"rendergridrows\">\r\n                </jqxGrid>\r\n            </jqxPanel>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<jqxWindow #myWindow [width]=\"'100%'\" [height]=\"'97%'\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n  <div id=\"windowContent\">\r\n      <ng-template #Insert></ng-template>\r\n  </div>\r\n</jqxWindow>\r\n<jqxNotification #msgNotification\r\n    [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n    [autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\" [theme]=\"'energyblue'\">\r\n    <div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n  </jqxLoader>\r\n  <jqxNotification #winNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n  [autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n  <div id='listingMessage'></div>\r\n  </jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/grn/grn.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/grn/grn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grn_add_grn_add_component__ = __webpack_require__("./src/app/layout/inventory-master/grn/grn-add/grn-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__grn_view_grn_view_component__ = __webpack_require__("./src/app/layout/inventory-master/grn/grn-view/grn-view.component.ts");
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








var GrnComponent = /** @class */ (function () {
    function GrnComponent(gps, ss, vs, componentFactoryResolver, apiUrl, fileExport, cus) {
        var _this = this;
        this.gps = gps;
        this.ss = ss;
        this.vs = vs;
        this.componentFactoryResolver = componentFactoryResolver;
        this.fileExport = fileExport;
        this.cus = cus;
        this.editrow = -1;
        this.report = false;
        this.userData = {};
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
            buttonContainer1.id = 'buttonContainer1';
            buttonContainer2.id = 'buttonContainer2';
            buttonContainer3.id = 'buttonContainer3';
            buttonContainer4.id = 'buttonContainer4';
            buttonContainer5.id = 'buttonContainer5';
            buttonContainer1.style.cssText = 'float: left';
            buttonContainer2.style.cssText = 'float: left; margin-left: 5px';
            buttonContainer3.style.cssText = 'float: left; margin-left: 5px';
            buttonContainer4.style.cssText = 'float: left; margin-left: 5px';
            buttonContainer5.style.cssText = 'float: left; margin-left: 5px';
            container.appendChild(buttonContainer1);
            container.appendChild(buttonContainer2);
            container.appendChild(buttonContainer3);
            container.appendChild(buttonContainer4);
            container.appendChild(buttonContainer5);
            toolbar[0].appendChild(container);
            var addRowButton = jqwidgets.createInstance('#buttonContainer1', 'jqxButton', { width: 105, value: 'Add New Row', theme: 'energyblue' });
            var deleteRowButton = jqwidgets.createInstance('#buttonContainer3', 'jqxButton', { width: 150, value: 'Delete Selected Row', theme: 'energyblue' });
            var reloadGridButton = jqwidgets.createInstance('#buttonContainer2', 'jqxButton', { width: 80, value: '<i class="fa fa-refresh fa-fw"></i> Reload', theme: 'energyblue' });
            var exportExcelButton = jqwidgets.createInstance('#buttonContainer4', 'jqxButton', { width: 120, value: '<i class="fa fa-file-excel-o fa-fw"></i> Export Excel', theme: 'energyblue' });
            var resetSearchdata = jqwidgets.createInstance('#buttonContainer5', 'jqxButton', { width: 150, value: 'Reset Search Data', theme: 'energyblue' });
            addRowButton.addEventHandler('click', function () {
                _this.myWindow.draggable(true);
                _this.myWindow.title('Add GRN');
                _this.myWindow.open();
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__grn_add_grn_add_component__["a" /* GrnAddComponent */]);
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
            resetSearchdata.addEventHandler('click', function () {
                _this.myGrid.clearfilters();
            });
            exportExcelButton.addEventHandler('click', function () {
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
                        _this.gps.destroy('[' + ids + ']').subscribe(function (data) {
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
        }; //render toolbar
        this.apiUrl = apiUrl;
        this.userData = {
            token: this.cus.getTokenData()['token'],
            local: true
        };
        console.log(this.userData);
        this.getDryer();
    }
    GrnComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
    };
    // ngAfterViewInit(): void {
    //   this.ss.index('').subscribe((res) => {
    //     let  store_item: Array<any> = [];
    //     for(let i=0;i<res['data']['length'];i++){
    //       let dt = {};
    //       dt['store_name'] = res['data'][i]['name'];
    //       dt['store_id'] = res['data'][i]['id'];
    //       store_item.push(dt);
    //     }
    //     this.myGrid.setcolumnproperty('sname', 'filteritems',store_item);
    //   }, (error) => {
    //     // console.info(error);
    //   });
    //   this.vs.index('').subscribe((res) => {
    //     let  vendor_item: Array<any> = [];
    //     for(let i=0;i<res['data']['length'];i++){
    //       let dt = {};
    //       dt['vendor_name'] = res['data'][i]['name'];
    //       dt['vendor_id'] = res['data'][i]['id'];
    //       vendor_item.push(dt);
    //     }
    //     this.myGrid.setcolumnproperty('vname', 'filteritems',vendor_item);
    //   }, (error) => {
    //     // console.info(error);
    //   }); 
    // }
    GrnComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    GrnComponent.prototype.getDryer = function () {
        var _this = this;
        var myUrl = this.apiUrl + 'grn_po';
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'string' },
                    { name: 'grn_no', type: 'string' },
                    { name: 'grn_date', type: 'date' },
                    { name: 'vendor_chalaan_no', type: 'number' },
                    { name: 'bill_code', type: 'number' },
                    { name: 'bill_no', type: 'number' },
                    { name: 'store_id', type: 'number' },
                    { name: 'sname', type: 'number', map: 'store>name' },
                    { name: 'vendor_id', type: 'string' },
                    { name: 'vname', type: 'string', map: 'vendor>name' },
                    { name: 'remarks', type: 'string', },
                ],
                id: 'id',
                root: 'data',
                pagesize: 20,
                url: myUrl,
                data: this.userData,
                totalrecords: 100,
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
                    data['report_type'] = 'goods_receipt_report';
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
                _this.source.totalrecords = data.total;
                var tData = data.data;
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
                { text: 'Grn Date', datafield: 'grn_date', columntype: 'date', filtertype: 'range', cellsformat: 'yyyy-MM-dd', width: 240 },
                { text: 'Store Name', datafield: 'store_id', displayfield: 'sname', columntype: 'textbox', filtertype: 'list' },
                { text: 'Vendor', datafield: 'vendor_id', displayfield: 'vname', columntype: 'textbox', filtertype: 'list' },
                { text: 'Grn No', datafield: 'grn_no', width: 150, filterable: false, sortable: false },
                { text: 'Vendor Chalan No', datafield: 'vendor_chalaan_no', width: 100, filterable: false, sortable: false, },
                { text: 'Bill Code', datafield: 'bill_code', columntype: 'textbox', filterable: false, sortable: false, width: 80 },
                { text: 'Bill No', datafield: 'bill_no', columntype: 'textbox', filterable: false, sortable: false, width: 80 },
                { text: 'Remarks', datafield: 'remarks', columntype: 'textbox', hidden: true, filterable: false, sortable: false, width: 150 },
                { text: 'Action', columntype: 'button',
                    cellsrenderer: function () {
                        return "View";
                    }, buttonclick: function (row) {
                        _this.myWindow.draggable(true);
                        _this.myWindow.title('GRN');
                        _this.myWindow.open();
                        var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_7__grn_view_grn_view_component__["a" /* GrnViewComponent */]);
                        _this.Insert.clear();
                        var dynamic_Component = _this.Insert.createComponent(componentFactory);
                        dynamic_Component.instance.grnItems = _this.myGrid.getrowdata(row);
                    } }
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
                //     const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TeDirectGrnEditComponent);
                //     this.Insert.clear();
                //     const dynamic_Component = this.Insert.createComponent(componentFactory);
                //     (<TeDirectGrnEditComponent>dynamic_Component.instance).GRnPoEditData = dataRecord;
                //     (<TeDirectGrnEditComponent>dynamic_Component.instance).UpdatedData.subscribe(result => {
                //       if (result.result == true) {
                //         let messageDiv = document.getElementById('message');
                //         messageDiv.innerText = result['message'];
                //         this.msgNotification.open();
                //         this.myWindow.hide();
                //         this.myGrid.updatebounddata();
                //         dynamic_Component.destroy();
                //       }
                //       else{
                //         let messageDiv = document.getElementById('message');
                //         messageDiv.innerText = result['message'];
                //         this.msgNotification.open();
                //       }
                //     });
                //     (<TeDirectGrnEditComponent>dynamic_Component.instance).cancelData.subscribe(result => {
                //       if (result == true) {
                //         this.myWindow.hide();
                //         dynamic_Component.destroy();
                //       }
                //     });
                //   }
                // }
            ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], GrnComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _b || Object)
    ], GrnComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _c || Object)
    ], GrnComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _d || Object)
    ], GrnComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _e || Object)
    ], GrnComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Insert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object)
    ], GrnComponent.prototype, "Insert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object)
    ], GrnComponent.prototype, "quickAccess", void 0);
    GrnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grn',
            template: __webpack_require__("./src/app/layout/inventory-master/grn/grn.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/grn/grn.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["I" /* GrnPoMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["I" /* GrnPoMasterService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["_14" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["_14" /* StoreService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["_23" /* VendorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["_23" /* VendorService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _l || Object, String, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["E" /* FileExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["E" /* FileExportService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */]) === "function" && _o || Object])
    ], GrnComponent);
    return GrnComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=grn.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/grn/grn.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrnModule", function() { return GrnModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grn_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/grn/grn-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grn_component__ = __webpack_require__("./src/app/layout/inventory-master/grn/grn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grn_add_grn_add_component__ = __webpack_require__("./src/app/layout/inventory-master/grn/grn-add/grn-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grn_edit_grn_edit_component__ = __webpack_require__("./src/app/layout/inventory-master/grn/grn-edit/grn-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__grn_view_grn_view_component__ = __webpack_require__("./src/app/layout/inventory-master/grn/grn-view/grn-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var GrnModule = /** @class */ (function () {
    function GrnModule() {
    }
    GrnModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__grn_routing_module__["a" /* GrnRoutingModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__grn_add_grn_add_component__["a" /* GrnAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__grn_edit_grn_edit_component__["a" /* GrnEditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__grn_view_grn_view_component__["a" /* GrnViewComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__grn_component__["a" /* GrnComponent */],
                __WEBPACK_IMPORTED_MODULE_5__grn_add_grn_add_component__["a" /* GrnAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__grn_edit_grn_edit_component__["a" /* GrnEditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__grn_view_grn_view_component__["a" /* GrnViewComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], GrnModule);
    return GrnModule;
}());

//# sourceMappingURL=grn.module.js.map

/***/ })

});
//# sourceMappingURL=grn.module.chunk.js.map