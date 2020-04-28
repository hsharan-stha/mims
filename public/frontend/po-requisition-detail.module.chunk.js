webpackJsonp(["po-requisition-detail.module"],{

/***/ "./src/app/layout/inventory-master/po-requisition-detail-master/po-item-details-view/po-item-details-view.component.html":
/***/ (function(module, exports) {

module.exports = "<jqxGrid #myGrid [width]=\"'99%'\" [height]=\"'100%'\" [theme]=\"'energyblue'\" [source]=\"dataAdapter\" [columns]=\"columns\" [showtoolbar]=\"true\" [rendertoolbar]=\"rendertoolbar\"\r\n[editable]=\"true\" [enabletooltips]=\"true\" [selectionmode]=\"'multiplecellsadvanced'\">\r\n</jqxGrid>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/inventory-master/po-requisition-detail-master/po-item-details-view/po-item-details-view.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/po-requisition-detail-master/po-item-details-view/po-item-details-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoItemDetailsViewComponent; });
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




var PoItemDetailsViewComponent = /** @class */ (function () {
    function PoItemDetailsViewComponent(apiUrl, cdr, prdms) {
        this.cdr = cdr;
        this.prdms = prdms;
        this.po_requisition_item = [];
        this.rendertoolbar = function (toolbar) {
            var container = document.createElement('div');
            container.style.margin = '5px';
            var headingContainer4 = document.createElement('div');
            var buttonContainer5 = document.createElement('div');
            headingContainer4.id = 'headingContainer4';
            buttonContainer5.id = 'buttonContainer5';
            headingContainer4.style.cssText = 'float: left;padding:5px;margin-right:10px;font-weight:bold;';
            buttonContainer5.style.cssText = 'float: right';
            headingContainer4.innerHTML = 'Po Requisition Item Details:';
            container.appendChild(headingContainer4);
            container.appendChild(buttonContainer5);
            toolbar[0].appendChild(container);
        };
        this.apiUrl = apiUrl;
    }
    PoItemDetailsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getItem();
        this.prdms.show(this.RequisitionDetailViewData.id).subscribe(function (result) {
            _this.po_requisition_item = result['data']['po_item_requisition_details'];
            for (var _i = 0; _i < _this.po_requisition_item.length; _i++) {
                _this.po_requisition_item[_i]['code'] = _this.po_requisition_item[_i]['item'] && _this.po_requisition_item[_i]['item'].code;
            }
            _this.source.localdata = _this.po_requisition_item;
            _this.myGrid.updatebounddata("cells");
        }, function (error) {
            console.log(error);
        });
        var itemsource = {
            datatype: "json",
            contentType: "application/json; charset=utf-8",
            datafields: [
                { name: 'id' },
                { name: 'code' },
            ],
            url: this.apiUrl + 'item?limit=all'
        };
        this.contractorAdapter = new jqx.dataAdapter(itemsource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                for (var _i = 0; _i < tData.length; _i++) {
                    tData[_i]['item_id'] = tData[_i]['id'];
                }
                console.info(tData);
                return tData;
            }
        });
    };
    PoItemDetailsViewComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
    };
    PoItemDetailsViewComponent.prototype.getItem = function () {
        var _this = this;
        this.source =
            {
                localdata: {},
                datatype: 'json',
                datafields: [
                    { name: 'requisition_id', type: 'string' },
                    { name: 'item_id', type: 'string' },
                    { name: 'code', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'rate', type: 'number' },
                    { name: 'vat', type: 'number' },
                    { name: 'total', type: 'number' },
                    { name: 'remarks', type: 'string' },
                ],
                id: 'item_id',
                updaterow: function (rowid, rowdata, commit) {
                    commit(true);
                }
            };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.reqsource =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'requisition_id', type: 'string' }
                ],
                url: this.apiUrl + 'requisition_detail?limit=all'
            };
        this.reqAdapter = new jqx.dataAdapter(this.reqsource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                for (var _i = 0; _i < tData.length; _i++) {
                    tData[_i]['requisition_id'] = tData[_i]['id'];
                }
                return tData;
            }
        });
        this.columns =
            [
                { text: 'REQ ID', datafield: 'requisition_id', columntype: 'combobox',
                    createeditor: function (row, cellvalue, editor, celltext, cellwidth, cellheight) {
                        editor.jqxComboBox({
                            source: _this.reqAdapter,
                            displayMember: "requisition_id",
                            valueMember: "requisition_id"
                        });
                    }
                },
                { text: 'Item Code', datafield: 'item_id', displayfield: 'code', columntype: 'combobox',
                    initeditor: function (row, cellvalue, editor, celltext, cellwidth, cellheight) {
                        editor.jqxComboBox({
                            source: _this.contractorAdapter,
                            displayMember: "code",
                            valueMember: "item_id"
                        });
                    }
                },
                { text: 'Quantity', columntype: 'textbox', datafield: 'quantity', width: 120 },
                { text: 'Rate', datafield: 'rate', columntype: 'textbox', width: 70 },
                { text: 'Vat', datafield: 'vat', columntype: 'textbox', width: 120 },
                { text: 'Total', datafield: 'total', editable: false, width: 120,
                    cellsrenderer: function (index, datafield, value, defaultvalue, column, rowdata) {
                        if (rowdata.quantity && rowdata.rate) {
                            var total = parseFloat(rowdata.quantity) * parseFloat(rowdata.rate);
                            return '<div style="jqx-align-right">' + _this.dataAdapter.formatNumber(total, 'f2') + '</div>';
                        }
                    }
                },
                { text: 'Remarks', datafield: 'remarks', columntype: 'textbox', width: 120 }
            ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], PoItemDetailsViewComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _b || Object)
    ], PoItemDetailsViewComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('RequisitionDetailViewData'),
        __metadata("design:type", Object)
    ], PoItemDetailsViewComponent.prototype, "RequisitionDetailViewData", void 0);
    PoItemDetailsViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-po-item-details-view',
            template: __webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-item-details-view/po-item-details-view.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-item-details-view/po-item-details-view.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [String, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["X" /* PoRequisitionDetailMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["X" /* PoRequisitionDetailMasterService */]) === "function" && _d || Object])
    ], PoItemDetailsViewComponent);
    return PoItemDetailsViewComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=po-item-details-view.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-add-detail-master/po-requisition-add-detail-master.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n    <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n        <form name=\"porequisitionDetailForm\" [formGroup]=\"porequisitionDetailForm\" style=\"padding-bottom:20px;\">\r\n            <table class=\"table-w-tooltip\">\r\n                <tr>\r\n                    <td style=\"padding-bottom:10px;\">Purchase Number</td>\r\n                    <td style=\"padding-bottom:10px;\">\r\n                        <jqxInput class=\"po_no\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"po_no\"></jqxInput>\r\n                    </td>\r\n                    <td>Purchase Date</td>\r\n                    <td>\r\n                        <jqxDateTimeInput #purchasedate class=\"po_date\" [height]=\"23\" [theme]=\"'energyblue'\" [formatString]=\"'yyyy-MM-dd'\" [width]=\"185\" formControlName=\"po_date\"></jqxDateTimeInput>\r\n                    </td>\r\n                    <td style=\"padding-bottom:10px;\">Valid Up To</td>\r\n                    <td style=\"padding-bottom:10px;\">\r\n                        <jqxDateTimeInput #validdate class=\"valid_up_to\" [height]=\"23\" [theme]=\"'energyblue'\" [width]=\"185\" [formatString]=\"'yyyy-MM-dd'\" formControlName=\"valid_up_to\"></jqxDateTimeInput>\r\n                    </td>\r\n\r\n                </tr>\r\n                <tr>\r\n                    <td>Store</td>\r\n                    <td>\r\n                        <jqxComboBox #myStoreBox (onChange)=\"storeChanged()\" [height]=\"23\" class=\"store_id\" [width]=\"185\" [theme]=\"'energyblue'\" [source]=\"storeAdapter\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n\r\n                    <td>Vendor</td>\r\n                    <td>\r\n                        <jqxComboBox #myVendorBox (onChange)=\"vendorChanged()\" class=\"vendor\" [height]=\"23\" [theme]=\"'energyblue'\" [width]=\"185\" [source]=\"vendorAdapter\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n                    <td>Extra Reference</td>\r\n                    <td>\r\n                        <jqxInput class=\"extra_ref\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"extra_ref\"></jqxInput>\r\n                    </td>\r\n\r\n                </tr>\r\n                <!-- <tr>\r\n                    <td style=\"padding-bottom:10px;\">\r\n                        Purchase Type\r\n                    </td>\r\n                    <td style=\"padding-bottom:10px;\">\r\n                        <jqxComboBox class=\"purchasetype\" #pComboBox [width]=\"185\" height=\"23\" [source]=\"typelist\" [displayMember]=\"'name'\" [valueMember]=\"'value'\" [searchMode]=\"'containsignorecase'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n                </tr> -->\r\n            </table>\r\n        </form>\r\n    </jqxValidator>\r\n    <div class=\"tfm-custom-toolbar tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\" style=\"margin-right:6px;\">\r\n        <div class=\"row\">\r\n            <!-- <div class=\"col-md-12\"> -->\r\n                <div class=\"col-md-2\">\r\n                    <strong>Requisition Items: </strong>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <jqxComboBox #reqItemsCombo [height]=\"23\"  [width]=\"180\" [source]=\"reqAdapter\" [displayMember]=\"'indent_no'\" [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\" [autoComplete]=\"false\" [checkboxes]=\"true\" [theme]=\"'energyblue'\" style=\"display:inline-block;vertical-align: top;\">\r\n                    </jqxComboBox>\r\n                    <jqxButton style=\"margin-right: 5px;display:inline-block;\" (onClick)=\"reqItemSelect()\" [theme]=\"'energyblue'\">\r\n                        Load Items\r\n                    </jqxButton>\r\n                </div>\r\n            <!-- </div> -->\r\n        </div>\r\n    </div>\r\n    <jqxGrid #myGrid [width]=\"'99%'\" [height]=\"200\" [source]=\"dataAdapter\" [columns]=\"columns\"\r\n        [editable]=\"true\" [enabletooltips]=\"true\" [selectionmode]=\"'multiplecellsadvanced'\" [theme]=\"'energyblue'\">\r\n    </jqxGrid>\r\n</div>\r\n\r\n<div style=\"padding-top: 10px;text-align:right;\">\r\n    <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!porequisitionDetailForm.valid || !storeItemChanged || !vendorItemChanged\" (onClick)=\"saveBtn(porequisitionDetailForm.value)\" [theme]=\"'energyblue'\">\r\n        Save\r\n    </jqxButton>\r\n    <jqxButton style=\"margin-right: 5px;\" (onClick)=\"cancelBtn()\" [theme]=\"'energyblue'\">\r\n        Cancel\r\n    </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n</jqxLoader>\r\n<jqxNotification #msgNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n    [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\" [theme]=\"'energyblue'\">\r\n    <div id='message'></div>\r\n</jqxNotification>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-add-detail-master/po-requisition-add-detail-master.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-add-detail-master/po-requisition-add-detail-master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoRequisitionAddDetailMasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
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











var PoRequisitionAddDetailMasterComponent = /** @class */ (function () {
    function PoRequisitionAddDetailMasterComponent(poreqDetailService, itemService, rds, fb, ehs, ccs, apiUrl, cdr, cus) {
        var _this = this;
        this.poreqDetailService = poreqDetailService;
        this.itemService = itemService;
        this.rds = rds;
        this.fb = fb;
        this.ehs = ehs;
        this.ccs = ccs;
        this.cdr = cdr;
        this.cus = cus;
        this.AddedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.typelist = [];
        this.po_requisition_item = [];
        this.userData = {};
        this.storeItemChanged = false;
        this.vendorItemChanged = false;
        this.source = {
            localdata: this.po_requisition_item,
            datatype: 'json',
            datafields: [
                // { name: 'indent_no', type: 'string' },
                { name: 'requisition_id', type: 'string' },
                { name: 'item_id', type: 'string' },
                { name: 'item_name', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'rate', type: 'number' },
                // { name: 'vat_percent', type: 'number' },
                // { name: 'vat', type: 'number' },
                { name: 'total', type: 'number' },
                { name: 'remarks', type: 'string' },
            ],
            id: 'item_id',
            updaterow: function (rowid, rowdata, commit) {
                commit(true);
            }
        };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
            {
                text: 'REQ ID', datafield: 'requisition_id', displayfield: 'requisition_id', width: 70, editable: false,
            },
            {
                text: 'Item code', datafield: 'item_id', displayfield: 'item_name', columntype: 'combobox', width: 120,
                createeditor: function (row, column, editor) {
                    editor.jqxComboBox({
                        source: _this.itemAdapter,
                        displayMember: "name",
                        valueMember: "id",
                        searchMode: "containsignorecase"
                    });
                }
            },
            { text: 'Quantity', columntype: 'textbox', datafield: 'quantity', width: 100,
                cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                    if (newvalue !== oldvalue) {
                        var currentRow = _this.myGrid.getrowdata(row);
                        var rowId = _this.myGrid.getrowdata(row).boundindex;
                        currentRow['quantity'] = newvalue;
                        _this.amountCalculation(currentRow, rowId);
                    }
                },
            },
            { text: 'Rate', datafield: 'rate', columntype: 'textbox', width: 70,
                cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                    if (newvalue !== oldvalue) {
                        var currentRow = _this.myGrid.getrowdata(row);
                        var rowId = _this.myGrid.getrowdata(row).boundindex;
                        currentRow['rate'] = newvalue;
                        _this.amountCalculation(currentRow, rowId);
                    }
                },
            },
            // { text: 'Vat %', datafield: 'vat_percent', columntype: 'textbox', width: 50,
            //   cellvaluechanging: (row: number, datafield: string, columntype: any, oldvalue: any, newvalue: any): void => {
            //     if (newvalue !== oldvalue) {
            //       let currentRow = this.myGrid.getrowdata(row);
            //       let rowId = this.myGrid.getrowdata(row).boundindex;
            //       currentRow['quantity'] = newvalue;
            //       this.amountCalculation(currentRow, rowId);
            //     }
            //   },
            // },
            // { text: 'Vat', datafield: 'vat', columntype: 'textbox', width: 120 },
            {
                text: 'Total', datafield: 'total', columntype: 'textbox', width: 120, editable: false
                // cellsrenderer: (index: number, datafield: string, value: any, defaultvalue: any, column: any, rowdata: any): string => {
                //   if (rowdata.quantity && rowdata.rate && rowdata.vat) {
                //     let value = parseFloat(rowdata.quantity) * parseFloat(rowdata.rate);
                //     let total = value + ( value * (rowdata.vat/100));
                //     return '<div style="padding:5px;">' + this.dataAdapter.formatNumber(total, 'f2') + '</div>';
                //   }
                // }
            },
            { text: 'Remarks', datafield: 'remarks', columntype: 'textbox', width: 120 },
            {
                text: 'Actions', datafield: 'Delete', columntype: 'button',
                cellsrenderer: function () {
                    return 'Delete';
                },
                buttonclick: function (row) {
                    var rowid = _this.myGrid.getrowid(row);
                    _this.myGrid.deleterow(rowid);
                }
            }
        ];
        this.rules = [
            { input: '.po_no', message: 'Purchase required!', action: 'keydown, blur', rule: 'required' },
            {
                input: '.po_date', message: 'Purchase Date required!', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.purchasedate.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            // { input: '.extra_ref', message: 'Extra ref required!', action: 'keydown, blur', rule: 'required' },
            {
                input: '.store_id', message: 'Store required!', action: 'keydown, blur,change', rule: function (input, commit) {
                    var data = _this.myStoreBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            {
                input: '.vendor', message: 'Vendor required!', action: 'keydown, blur,change', rule: function (input, commit) {
                    var data = _this.myVendorBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            // {
            //   input: '.purchasetype', message: 'Purchase Type required!', action: 'keydown, blur,change', rule: (input: any, commit: any): any => {
            //     let data = this.pComboBox.val();
            //     let result = (data != '') ? true : false;
            //     return result;
            //   }
            // },
            {
                input: '.valid_up_to', message: 'Valid Date required!', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.validdate.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
        ];
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData;
        this.porequisitionDetailForm = fb.group({
            'po_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'valid_up_to': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'po_date': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'extra_ref': [null],
        });
    }
    PoRequisitionAddDetailMasterComponent.prototype.ngOnInit = function () {
        this.typelist = [
            {
                id: 1,
                name: 'Direct Purchase',
                value: 'dp'
            },
            {
                id: 2,
                name: 'Purchase using Indents',
                value: 'ip'
            }
        ];
        this.division_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                async: false,
                url: this.apiUrl + 'division?limit=all',
            };
        this.divisionAdapter = new jqx.dataAdapter(this.division_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }
        });
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
        this.reqSource =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'indent_no' }
                ],
                data: this.userData,
                url: this.apiUrl + 'requisition_detail?limit=all'
            };
        this.reqAdapter = new jqx.dataAdapter(this.reqSource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }
        });
    };
    PoRequisitionAddDetailMasterComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var codeData = {
            find_is_no: 'po_requisition',
            return_type: 'for_client'
        };
        this.ccs.get(codeData).subscribe(function (response) {
            _this.porequisitionDetailForm.controls['po_no'].setValue(response['po_no']);
        }, function (error) {
            console.log(error);
        });
        this.cdr.detectChanges();
    };
    PoRequisitionAddDetailMasterComponent.prototype.getItemByRequisitionDetails = function (id) {
        var _this = this;
        if (id) {
            this.rds.show(id).subscribe(function (res) {
                var item = res['data']['requisition_item_details'];
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
    PoRequisitionAddDetailMasterComponent.prototype.reqItemSelect = function () {
        var _this = this;
        this.purchaseitems = [];
        this.source.localdata = [];
        this.purchaseitems = this.reqItemsCombo.getCheckedItems();
        // let rqitem = this.reqItemsCombo.getSelectedItem().value;
        for (var i = 0; i < this.purchaseitems.length; i++) {
            var id = this.purchaseitems[i].value;
            this.jqxLoader.open();
            this.rds.show(id).subscribe(function (result) {
                console.log(result);
                var item = result['data']['requisition_item_details'];
                for (var i_1 = 0; i_1 < item.length; i_1++) {
                    var dt = {};
                    item[i_1]['requisition_id'] = result['data'].id;
                    item[i_1]['item_name'] = item[i_1]['item']['name'] + '-' + item[i_1]['item']['code'];
                    item[i_1]['unit_name'] = item[i_1]['item'] && item[i_1]['item']['unit'] && item[i_1]['item']['unit'].name || null;
                    item[i_1]['unit_id'] = item[i_1]['item'] && item[i_1]['item']['unit_id'] || null;
                    _this.source.localdata.push(item[i_1]);
                }
                // this.source.localdata = item;
                // this.myGrid.updatebounddata();
                // if(i == this.purchaseitems.length - 1){
                _this.myGrid.updatebounddata();
                // }
                _this.jqxLoader.close();
            }, function (error) {
                console.log(error);
                _this.jqxLoader.close();
            });
        }
    };
    // rendertoolbar = (toolbar: any): void => {
    //   let container = document.createElement('div');
    //   container.style.margin = '5px';
    //   let buttonContainerAddRow = document.createElement('div');
    //   buttonContainerAddRow.id = 'buttonContainerAddRow';
    //   buttonContainerAddRow.style.cssText = 'float: right';
    //   container.appendChild(buttonContainerAddRow);
    //   toolbar[0].appendChild(container);
    //   let addRowButton = jqwidgets.createInstance('#buttonContainerAddRow', 'jqxButton', { width: 155, value: 'Add New Item' });
    //   addRowButton.addEventHandler('click', () => {
    //     let datarow = this.generaterow();
    //     this.myGrid.addrow(null, datarow);
    //   })
    // };
    PoRequisitionAddDetailMasterComponent.prototype.amountCalculation = function (data, rowid) {
        if (data) {
            var total = 0;
            if (data['quantity'] && data['rate']) {
                total = data['quantity'] * data['rate'];
            }
            this.myGrid.setcellvalue(rowid, 'total', total.toFixed(2));
        }
    };
    PoRequisitionAddDetailMasterComponent.prototype.addNewItem = function () {
        var datarow = this.generaterow();
        this.myGrid.addrow(null, datarow);
    };
    PoRequisitionAddDetailMasterComponent.prototype.generaterow = function () {
        var row = {};
        row['requisition_id'] = '';
        row['item_id'] = '';
        row['quantity'] = '';
        row['rate'] = '';
        // row['vat_percent'] = '13';
        // row['vat'] = '';
        row['total'] = '';
        row['remarks'] = '';
        return row;
    };
    PoRequisitionAddDetailMasterComponent.prototype.saveBtn = function (post) {
        var _this = this;
        post['poItemRequisitionDetail'] = [];
        var gridRows = this.myGrid.getrows();
        post['poItemRequisitionDetail'] = gridRows;
        post['store_id'] = this.myStoreBox.val();
        post['vendor_id'] = this.myVendorBox.val();
        post['type'] = 'req'; //post['type'] = this.pComboBox.val();
        this.myValidator.validate(document.getElementById('porequisitionDetailForm'));
        if (post['store_id'] && post['vendor_id'] && post['type']) {
            this.jqxLoader.open();
            this.poreqDetailService.store(post).subscribe(function (result) {
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
    PoRequisitionAddDetailMasterComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    PoRequisitionAddDetailMasterComponent.prototype.storeChanged = function () {
        this.storeItemChanged = this.myStoreBox.val() ? true : false;
    };
    PoRequisitionAddDetailMasterComponent.prototype.vendorChanged = function () {
        this.vendorItemChanged = this.myVendorBox.val() == null ? false : true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _a || Object)
    ], PoRequisitionAddDetailMasterComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PoRequisitionAddDetailMasterComponent.prototype, "AddedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PoRequisitionAddDetailMasterComponent.prototype, "cancelData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _b || Object)
    ], PoRequisitionAddDetailMasterComponent.prototype, "myComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('reqItemsCombo'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], PoRequisitionAddDetailMasterComponent.prototype, "reqItemsCombo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myStoreBox'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], PoRequisitionAddDetailMasterComponent.prototype, "myStoreBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myVendorBox'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _e || Object)
    ], PoRequisitionAddDetailMasterComponent.prototype, "myVendorBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _f || Object)
    ], PoRequisitionAddDetailMasterComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pComboBox'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _g || Object)
    ], PoRequisitionAddDetailMasterComponent.prototype, "pComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('purchasedate'),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */]) === "function" && _h || Object)
    ], PoRequisitionAddDetailMasterComponent.prototype, "purchasedate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('validdate'),
        __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */]) === "function" && _j || Object)
    ], PoRequisitionAddDetailMasterComponent.prototype, "validdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _k || Object)
    ], PoRequisitionAddDetailMasterComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _l || Object)
    ], PoRequisitionAddDetailMasterComponent.prototype, "jqxLoader", void 0);
    PoRequisitionAddDetailMasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-po-requisition-add-detail-master',
            template: __webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-add-detail-master/po-requisition-add-detail-master.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-add-detail-master/po-requisition-add-detail-master.component.scss")]
        }),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["X" /* PoRequisitionDetailMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["X" /* PoRequisitionDetailMasterService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_5" /* RequisitionDetailMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_5" /* RequisitionDetailMasterService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["s" /* CodeCheckerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["s" /* CodeCheckerService */]) === "function" && _s || Object, String, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _u || Object])
    ], PoRequisitionAddDetailMasterComponent);
    return PoRequisitionAddDetailMasterComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
}());

//# sourceMappingURL=po-requisition-add-detail-master.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-detail-master.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 tfm-panel-left\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                    <h2> Quick Access </h2>\r\n                </div>\r\n                <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                    <ng-template #quickAccess></ng-template>\r\n                </jqxPanel>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-10 tfm-panel-right\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                    <h2> Purchase Order Requisition Detail Master </h2>\r\n                </div>\r\n                <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                    <jqxGrid #myGrid [width]=\"'99.8%'\" [height]=\"'100%'\" [source]=\"dataAdapter\" [sortable]=\"true\" [filterable]=\"true\" [pageable]=\"true\" [columns]=\"columns\"\r\n                        [showtoolbar]=\"true\" [selectionmode]=\"'checkbox'\" [showfilterrow]=\"true\" [rendertoolbar]=\"rendertoolbar\" [theme]=\"'energyblue'\">\r\n                    </jqxGrid>\r\n                </jqxPanel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<jqxWindow #myWindow [width]=\"900\" [height]=\"'70%'\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n    <div id=\"windowContent\">\r\n        <ng-template #Insert></ng-template>\r\n    </div>\r\n</jqxWindow>\r\n<jqxNotification #msgNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n    [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\" [theme]=\"'energyblue'\">\r\n    <div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='listingMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-detail-master.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-detail-master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoRequisitionDetailMasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__po_requisition_add_detail_master_po_requisition_add_detail_master_component__ = __webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-add-detail-master/po-requisition-add-detail-master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__po_item_details_view_po_item_details_view_component__ = __webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-item-details-view/po-item-details-view.component.ts");
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








var PoRequisitionDetailMasterComponent = /** @class */ (function () {
    function PoRequisitionDetailMasterComponent(componentFactoryResolver, apiUrl, prdm, cus) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.prdm = prdm;
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
            var buttonContainer6 = document.createElement('div');
            buttonContainer1.id = 'buttonContainer1';
            buttonContainer3.id = 'buttonContainer3';
            buttonContainer5.id = 'buttonContainer5';
            buttonContainer6.id = 'buttonContainer6';
            buttonContainer1.style.cssText = 'float: left';
            buttonContainer3.style.cssText = 'float: left; margin-left: 5px';
            buttonContainer5.style.cssText = 'float: left; margin-left: 5px';
            buttonContainer6.style.cssText = 'float: left; margin-left: 5px';
            container.appendChild(buttonContainer1);
            container.appendChild(buttonContainer3);
            container.appendChild(buttonContainer5);
            container.appendChild(buttonContainer6);
            toolbar[0].appendChild(container);
            var addRowButton = jqwidgets.createInstance('#buttonContainer1', 'jqxButton', { width: 105, value: 'Add New Row', theme: 'energyblue' });
            var deleteRowButton = jqwidgets.createInstance('#buttonContainer3', 'jqxButton', { width: 150, value: 'Delete Selected Row', theme: 'energyblue' });
            var resetSearchdata = jqwidgets.createInstance('#buttonContainer5', 'jqxButton', { width: 150, value: 'Reset Search Data', theme: 'energyblue' });
            var generateReport = jqwidgets.createInstance('#buttonContainer6', 'jqxButton', { width: 150, value: 'Generate Report', theme: 'energyblue' });
            addRowButton.addEventHandler('click', function () {
                _this.myWindow.draggable(true);
                _this.myWindow.title('Add Purchase Requisition Details');
                _this.myWindow.open();
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__po_requisition_add_detail_master_po_requisition_add_detail_master_component__["a" /* PoRequisitionAddDetailMasterComponent */]);
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
                _this.myGrid.updatebounddata('filter');
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
                        _this.prdm.destroy('[' + ids + ']').subscribe(function (data) {
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
        this.getPoRequisitionDetail();
    }
    PoRequisitionDetailMasterComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
    };
    PoRequisitionDetailMasterComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    PoRequisitionDetailMasterComponent.prototype.getPoRequisitionDetail = function () {
        var _this = this;
        var myUrl = this.apiUrl + 'po_requisition_detail';
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'string' },
                    { name: 'po_no', type: 'string' },
                    { name: 'po_date', type: 'date' },
                    { name: 'extra_ref', type: 'string' },
                    { name: 'type', type: 'string' },
                    { name: 'valid_up_to', type: 'date' },
                    { name: 'store_name', type: 'string', map: 'store>name' },
                    { name: 'vendor_name', type: 'string', map: 'vendor>name' },
                    { name: 'store_id', type: 'string' },
                    { name: 'vendor_id', type: 'string' }
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
                    data['report_type'] = 'po_requisition_detail_master';
                    data['type'] = 'req';
                }
                else {
                    data['page'] = data['pagenum'] + 1;
                    data['limit'] = data['pagesize'];
                    data['type'] = 'req';
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
                    setTimeout(function () {
                        _this.myGrid.updatebounddata();
                    }, 100);
                }
                else {
                    var messageDiv = document.getElementById('listingMessage');
                    messageDiv.innerText = error;
                    _this.winNotification.open();
                    _this.jqxLoader.close();
                }
            }, bindingComplete: function () {
                _this.myGrid.updatebounddata();
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
                { text: 'Date', datafield: 'po_date', filtertype: 'range', width: 200, cellsformat: 'yyyy-MM-dd' },
                { text: 'Purchase Number', datafield: 'po_no', columntype: 'textbox', filtercondition: 'starts_with', width: 150 },
                { text: 'Type', datafield: 'type', columntype: 'textbox', filtercondition: 'starts_with', width: 175 },
                { text: 'Valid Upto', datafield: 'valid_up_to', sortable: false, filterable: false, width: 175, cellsformat: 'yyyy-MM-dd' },
                { text: 'Store', datafield: 'store_id', displayfield: 'store_name', columntype: 'textbox', filtertype: 'list', width: 175 },
                { text: 'Vendor', datafield: 'vendor_id', displayfield: 'vendor_name', columntype: 'textbox', filtertype: 'list', width: 200 },
                { text: 'Extra Reference', datafield: 'extra_ref', hidden: 'true', columntype: 'textbox', filtercondition: 'starts_with', width: 175 },
                {
                    text: 'Req Item Details', datafield: 'view_item_details', sortable: false, filterable: false, columntype: 'button', width: 150,
                    cellsrenderer: function () {
                        return 'View Item Details';
                    },
                    buttonclick: function (row) {
                        _this.editrow = row;
                        var dataRecord = _this.myGrid.getrowdata(_this.editrow);
                        _this.myWindow.draggable(true);
                        _this.myWindow.title('&nbsp;');
                        var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__po_item_details_view_po_item_details_view_component__["a" /* PoItemDetailsViewComponent */]);
                        _this.Insert.clear();
                        var dynamic_Component = _this.Insert.createComponent(componentFactory);
                        _this.myWindow.open();
                        dynamic_Component.instance.RequisitionDetailViewData = dataRecord;
                    }
                }
                // ,
                // {
                //   text: 'Actions', datafield: 'Edit', sortable: false, filterable: false, columntype: 'button',
                //   cellsrenderer: (): string => {
                //     return 'Edit';
                //   },
                //   buttonclick: (row: number): void => {
                //     this.editrow = row;
                //     let dataRecord = this.myGrid.getrowdata(this.editrow);
                //     this.myWindow.draggable(true);
                //     this.myWindow.title('Edit');
                //     this.myWindow.open();
                //     const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PoRequisitionEditDetailMasterComponent);
                //     this.Insert.clear();
                //     const dynamic_Component = this.Insert.createComponent(componentFactory);
                //     (<PoRequisitionEditDetailMasterComponent>dynamic_Component.instance).PoEditData = dataRecord;
                //     (<PoRequisitionEditDetailMasterComponent>dynamic_Component.instance).UpdatedData.subscribe(result => {
                //       if (result.result == true) {
                //         let messageDiv = document.getElementById('message');
                //         messageDiv.innerText = result['message'];
                //         this.msgNotification.open();
                //         this.myWindow.hide();
                //         this.myGrid.updatebounddata('cells');
                //         dynamic_Component.destroy();
                //       } else {
                //         let messageDiv = document.getElementById('message');
                //         messageDiv.innerText = result['message'];
                //         this.msgNotification.open();
                //       }
                //     });
                //     (<PoRequisitionEditDetailMasterComponent>dynamic_Component.instance).cancelData.subscribe(result => {
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], PoRequisitionDetailMasterComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _b || Object)
    ], PoRequisitionDetailMasterComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _c || Object)
    ], PoRequisitionDetailMasterComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _d || Object)
    ], PoRequisitionDetailMasterComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _e || Object)
    ], PoRequisitionDetailMasterComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Insert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object)
    ], PoRequisitionDetailMasterComponent.prototype, "Insert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object)
    ], PoRequisitionDetailMasterComponent.prototype, "quickAccess", void 0);
    PoRequisitionDetailMasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-po-requisition-detail-master',
            template: __webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-detail-master.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-detail-master.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _h || Object, String, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["X" /* PoRequisitionDetailMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["X" /* PoRequisitionDetailMasterService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["v" /* CurrentUserService */]) === "function" && _k || Object])
    ], PoRequisitionDetailMasterComponent);
    return PoRequisitionDetailMasterComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=po-requisition-detail-master.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-detail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoRequisitionDetailModule", function() { return PoRequisitionDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__po_requisition_master_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-master-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__po_requisition_detail_master_component__ = __webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-detail-master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__po_requisition_edit_detail_master_po_requisition_edit_detail_master_component__ = __webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-edit-detail-master/po-requisition-edit-detail-master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__po_requisition_add_detail_master_po_requisition_add_detail_master_component__ = __webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-add-detail-master/po-requisition-add-detail-master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__po_item_details_view_po_item_details_view_component__ = __webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-item-details-view/po-item-details-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PoRequisitionDetailModule = /** @class */ (function () {
    function PoRequisitionDetailModule() {
    }
    PoRequisitionDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__po_requisition_master_routing_module__["a" /* PoRequisitionDetailMasterRoutingModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__po_requisition_edit_detail_master_po_requisition_edit_detail_master_component__["a" /* PoRequisitionEditDetailMasterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__po_requisition_add_detail_master_po_requisition_add_detail_master_component__["a" /* PoRequisitionAddDetailMasterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__po_item_details_view_po_item_details_view_component__["a" /* PoItemDetailsViewComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__po_requisition_detail_master_component__["a" /* PoRequisitionDetailMasterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__po_requisition_edit_detail_master_po_requisition_edit_detail_master_component__["a" /* PoRequisitionEditDetailMasterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__po_requisition_add_detail_master_po_requisition_add_detail_master_component__["a" /* PoRequisitionAddDetailMasterComponent */], __WEBPACK_IMPORTED_MODULE_7__po_item_details_view_po_item_details_view_component__["a" /* PoItemDetailsViewComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], PoRequisitionDetailModule);
    return PoRequisitionDetailModule;
}());

//# sourceMappingURL=po-requisition-detail.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-edit-detail-master/po-requisition-edit-detail-master.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n    <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n        <form name=\"porequisitionDetailForm\" [formGroup]=\"porequisitionDetailForm\" style=\"padding-bottom:20px;\">\r\n            <table class=\"table-w-tooltip\">\r\n                <tr>\r\n                    <td style=\"padding-bottom:10px;\">Purchase Number</td>\r\n                    <td style=\"padding-bottom:10px;\">\r\n                        <jqxInput class=\"po_no\" [height]=\"23\" formControlName=\"po_no\" [theme]=\"'energyblue'\"></jqxInput>\r\n                    </td>\r\n                    <td>Purchase Date</td>\r\n                    <td>\r\n                        <jqxDateTimeInput #purchasedate class=\"po_date\" [height]=\"23\" [formatString]=\"'yyyy-MM-dd'\" [width]=\"185\" formControlName=\"po_date\" [theme]=\"'energyblue'\"></jqxDateTimeInput>\r\n                    </td>\r\n                    <td style=\"padding-bottom:10px;\">Valid Up To</td>\r\n                    <td style=\"padding-bottom:10px;\">\r\n                        <jqxDateTimeInput #validdate class=\"valid_up_to\" [width]=\"185\" [formatString]=\"'yyyy-MM-dd'\" [height]=\"23\" formControlName=\"valid_up_to\" [theme]=\"'energyblue'\"></jqxDateTimeInput>\r\n                    </td>\r\n\r\n                </tr>\r\n                <tr>\r\n                    <td>Store</td>\r\n                    <td>\r\n                        <jqxComboBox #myStoreBox [height]=\"23\" class=\"store_id\" [width]=\"185\" [source]=\"storeAdapter\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\" [theme]=\"'energyblue'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n\r\n                    <td>Vendor</td>\r\n                    <td>\r\n                        <jqxComboBox #myVendorBox class=\"vendor\" [height]=\"23\" [width]=\"185\" [source]=\"vendorAdapter\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\" [theme]=\"'energyblue'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n                    <td>Extra Reference</td>\r\n                    <td>\r\n                        <jqxInput class=\"extra_ref\" [height]=\"23\" formControlName=\"extra_ref\" [theme]=\"'energyblue'\"></jqxInput>\r\n                    </td>\r\n                </tr>\r\n                <!-- <tr>\r\n                    <td style=\"padding-bottom:10px;\">Purchase Type</td>\r\n                    <td style=\"padding-bottom:10px;\">\r\n                        <jqxComboBox class=\"purchasetype\" #pComboBox height=\"23\" [source]=\"typelist\" [displayMember]=\"'name'\" [width]=\"185\" [valueMember]=\"'value'\" [searchMode]=\"'containsignorecase'\" [theme]=\"'energyblue'\">\r\n                        </jqxComboBox>\r\n                    </td>\r\n                </tr> -->\r\n            </table>\r\n        </form>\r\n    </jqxValidator>\r\n    <jqxGrid #reqDetailEditGrid [width]=\"'99%'\" [height]=\"200\" [source]=\"dataAdapter\" [columns]=\"columns\" [showtoolbar]=\"true\" [rendertoolbar]=\"rendertoolbar\"\r\n        [editable]=\"true\" [enabletooltips]=\"true\" [selectionmode]=\"'multiplecellsadvanced'\" [theme]=\"'energyblue'\">\r\n    </jqxGrid>\r\n</div>\r\n\r\n<div style=\"padding-top: 10px; text-align:right;\">\r\n    <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!porequisitionDetailForm.valid\" (onClick)=\"saveBtn(porequisitionDetailForm.value)\" [theme]=\"'energyblue'\">\r\n        Save\r\n    </jqxButton>\r\n    <jqxButton style=\"margin-right: 5px;\" (onClick)=\"cancelBtn()\" [theme]=\"'energyblue'\">\r\n        Cancel\r\n    </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n</jqxLoader>\r\n<jqxNotification #msgNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n    [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\" [theme]=\"'energyblue'\">\r\n    <div id='message'></div>\r\n</jqxNotification>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>\r\n"

/***/ }),

/***/ "./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-edit-detail-master/po-requisition-edit-detail-master.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-edit-detail-master/po-requisition-edit-detail-master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoRequisitionEditDetailMasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
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









var PoRequisitionEditDetailMasterComponent = /** @class */ (function () {
    function PoRequisitionEditDetailMasterComponent(fb, apiUrl, cdr, rds, prdms, ehs, cus) {
        var _this = this;
        this.fb = fb;
        this.cdr = cdr;
        this.rds = rds;
        this.prdms = prdms;
        this.ehs = ehs;
        this.cus = cus;
        this.UpdatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ready = false;
        this.po_requisition_item = [];
        this.typelist = [];
        this.userData = {};
        this.rendertoolbar = function (toolbar) {
            console.log('Add toolbar rendered');
            var container = document.createElement('div');
            container.style.margin = '5px';
            var buttonContainerPoTitle = document.createElement('div');
            // let buttonContainerPoEditAddRow = document.createElement('div');
            buttonContainerPoTitle.id = 'buttonContainerPoTitle';
            // buttonContainerPoEditAddRow.id = 'buttonContainerPoEditAddRow';
            buttonContainerPoTitle.style.cssText = 'float: left;padding:5px;margin-right:10px;font-weight:bold;';
            // buttonContainerPoEditAddRow.style.cssText = 'float: right';
            buttonContainerPoTitle.innerHTML = 'Requisition Details:';
            container.appendChild(buttonContainerPoTitle);
            // container.appendChild(buttonContainerPoEditAddRow);
            toolbar[0].appendChild(container);
            // let addRowButton = jqwidgets.createInstance('#buttonContainerPoEditAddRow', 'jqxButton', { width: 155, value: 'Add New Item' });
            // addRowButton.addEventHandler('click', () => {
            //   let datarow = this.generaterow();
            //   this.reqDetailEditGrid.addrow(null, datarow);
            // })
        };
        this.rules = [
            { input: '.po_no', message: 'Purchase required!', action: 'keydown, blur', rule: 'required' },
            {
                input: '.po_date', message: 'Purchase Date required!', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.purchasedate.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            { input: '.extra_ref', message: 'Extra ref required!', action: 'keydown, blur', rule: 'required' },
            {
                input: '.store_id', message: 'Store required!', action: 'keydown, blur,change', rule: function (input, commit) {
                    var data = _this.myStoreBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            {
                input: '.vendor', message: 'Vendor required!', action: 'keydown,blur,change', rule: function (input, commit) {
                    var data = _this.myVendorBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            // {
            //   input: '.purchasetype', message: 'Purchase Type required!', action: 'keydown, blur,change', rule: (input: any, commit: any): any => {
            //     let data = this.pComboBox.val();
            //     let result = (data != '') ? true : false;
            //     return result;
            //   }
            // },
            {
                input: '.valid_up_to', message: 'Valid Date required!', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.validdate.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
        ];
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.createForm();
    }
    PoRequisitionEditDetailMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getItem();
        this.typelist = [
            {
                id: 1,
                name: 'Direct Purchase',
                value: 'dp'
            },
            {
                id: 2,
                name: 'Purchase using Indents',
                value: 'ip'
            }
        ];
        this.EditData = new __WEBPACK_IMPORTED_MODULE_2__shared__["W" /* PoRequisition */](this.PoEditData);
        this.porequisitionDetailForm.setValue(this.EditData);
        this.prdms.show(this.PoEditData.id).subscribe(function (result) {
            _this.po_requisition_item = result['data']['po_item_requisition_details'];
            for (var _i = 0; _i < _this.po_requisition_item.length; _i++) {
                _this.po_requisition_item[_i]['name'] = _this.po_requisition_item[_i]['item'] && _this.po_requisition_item[_i]['item'].code + '-' + _this.po_requisition_item[_i]['item'].name;
            }
            _this.source.localdata = _this.po_requisition_item;
            _this.reqDetailEditGrid.updatebounddata("cells");
        }, function (error) {
            console.log(error);
        });
        this.division_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                async: false,
                url: this.apiUrl + 'division?limit=all',
            };
        this.divisionAdapter = new jqx.dataAdapter(this.division_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }
        });
        this.store_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                url: this.apiUrl + 'store?limit=all',
            };
        this.storeAdapter = new jqx.dataAdapter(this.store_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }, loadComplete: function () {
                _this.myStoreBox.selectItem(_this.PoEditData.store_id);
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
                _this.myVendorBox.selectItem(_this.PoEditData.vendor_id);
            }
        });
    };
    PoRequisitionEditDetailMasterComponent.prototype.createForm = function () {
        this.porequisitionDetailForm = this.fb.group({
            'po_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'po_date': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'extra_ref': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'valid_up_to': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    };
    PoRequisitionEditDetailMasterComponent.prototype.ngAfterViewInit = function () {
        // if(this.PoEditData.type){
        //   this.pComboBox.selectItem(this.PoEditData.type);
        // }
        if (this.PoEditData.division_id) {
            this.myComboBox.selectItem(this.PoEditData.division_id);
        }
        this.cdr.detectChanges();
    };
    PoRequisitionEditDetailMasterComponent.prototype.getItemByRequisitionDetails = function (id) {
        var _this = this;
        if (id) {
            this.rds.show(id).subscribe(function (res) {
                var item = res['data']['requisition_item_details'];
                var tData = [];
                for (var i = 0; i < item.length; i++) {
                    var dt = {};
                    dt['name'] = item[i]['item']['name'] + '-' + item[i]['item']['code'];
                    dt['id'] = item[i]['item']['id'];
                    tData.push(dt);
                }
                _this.contractorAdapter = tData;
            });
        }
    };
    PoRequisitionEditDetailMasterComponent.prototype.getItem = function () {
        var _this = this;
        this.source =
            {
                localdata: {},
                datatype: 'json',
                datafields: [
                    { name: 'requisition_id', type: 'string' },
                    { name: 'item_id', type: 'string' },
                    { name: 'name', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'rate', type: 'number' },
                    { name: 'vat', type: 'number' },
                    { name: 'total', type: 'number' },
                    { name: 'remarks', type: 'string' },
                ],
                id: 'item_id',
                updaterow: function (rowid, rowdata, commit) {
                    commit(true);
                }
            };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        // this.reqsource =
        //   {
        //     datatype: "json",
        //     contentType: "application/json; charset=utf-8",
        //     datafields: [
        //       { name: 'requisition_id', type: 'string' }
        //     ],
        //     url: this.apiUrl + 'requisition_detail?limit=all'
        //   };
        // this.reqAdapter = new jqx.dataAdapter(this.reqsource, {
        //   downloadComplete: (data, status, xhr) => {
        //     let tData = data.data;
        //     for (var _i = 0; _i < tData.length; _i++) {
        //       tData[_i]['requisition_id'] = tData[_i]['id'];
        //       // tData[_i]['name'] = tData[_i]['item'] && tData[_i]['item']['name'] + ' - ' + tData[_i]['item']['code'];
        //     }
        //     return tData;
        //   }
        // });
        this.columns =
            [
                {
                    text: 'REQ ID', datafield: 'requisition_id', editable: false, width: 70,
                },
                {
                    text: 'Item Code', datafield: 'item_id', displayfield: 'name', editable: false
                    //  columntype: 'combobox',
                    // initeditor: (row: number, cellvalue: string, editor: any, celltext: string, cellwidth: number, cellheight: number): void => {
                    //   editor.jqxComboBox({
                    //     source: this.contractorAdapter,
                    //     displayMember: "name",
                    //     valueMember: "id"
                    //   });
                    // }
                },
                { text: 'Quantity', columntype: 'textbox', datafield: 'quantity', width: 120,
                    cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                        if (newvalue !== oldvalue) {
                            var currentRow = _this.reqDetailEditGrid.getrowdata(row);
                            var rowId = _this.reqDetailEditGrid.getrowdata(row).boundindex;
                            currentRow['quantity'] = newvalue;
                            _this.amountCalculation(currentRow, rowId);
                        }
                    },
                },
                { text: 'Rate', datafield: 'rate', columntype: 'textbox', width: 70,
                    cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                        if (newvalue !== oldvalue) {
                            var currentRow = _this.reqDetailEditGrid.getrowdata(row);
                            var rowId = _this.reqDetailEditGrid.getrowdata(row).boundindex;
                            currentRow['rate'] = newvalue;
                            _this.amountCalculation(currentRow, rowId);
                        }
                    },
                },
                // { text: 'Vat', datafield: 'vat', columntype: 'textbox', width: 120 },
                {
                    text: 'Total', datafield: 'total', editable: false, width: 120,
                    cellsrenderer: function (index, datafield, value, defaultvalue, column, rowdata) {
                        if (rowdata.quantity && rowdata.rate && rowdata.vat) {
                            var value_1 = parseFloat(rowdata.quantity) * parseFloat(rowdata.rate);
                            var total = value_1 + (value_1 * (rowdata.vat / 100));
                            return '<div style="padding:5px;">' + _this.dataAdapter.formatNumber(total, 'f2') + '</div>';
                        }
                    }
                },
                { text: 'Remarks', datafield: 'remarks', columntype: 'textbox', width: 120 },
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
    PoRequisitionEditDetailMasterComponent.prototype.amountCalculation = function (data, rowid) {
        if (data) {
            var total = 0;
            if (data['quantity'] && data['rate']) {
                total = data['quantity'] * data['rate'];
            }
            this.reqDetailEditGrid.setcellvalue(rowid, 'total', total.toFixed(2));
        }
    };
    PoRequisitionEditDetailMasterComponent.prototype.generaterow = function () {
        var row = {};
        row['requisition_id'] = '';
        row['item_id'] = '';
        row['quantity'] = '';
        row['rate'] = '';
        row['vat'] = '';
        row['total'] = '';
        row['remarks'] = '';
        return row;
    };
    PoRequisitionEditDetailMasterComponent.prototype.saveBtn = function (post) {
        var _this = this;
        post['poItemRequisitionDetail'] = [];
        var gridRows = this.reqDetailEditGrid.getrows();
        post['poItemRequisitionDetail'] = gridRows;
        post['store_id'] = this.myStoreBox.val();
        post['vendor_id'] = this.myVendorBox.val();
        post['type'] = 'req'; //post['type'] = this.pComboBox.val();
        this.myValidator.validate(document.getElementById('porequisitionDetailForm'));
        if (post['store_id'] && post['vendor_id'] && post['type']) {
            this.jqxLoader.open();
            this.prdms.update(this.PoEditData.id, post).subscribe(function (result) {
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
    PoRequisitionEditDetailMasterComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('reqDetailEditGrid'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _a || Object)
    ], PoRequisitionEditDetailMasterComponent.prototype, "reqDetailEditGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], PoRequisitionEditDetailMasterComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], PoRequisitionEditDetailMasterComponent.prototype, "myComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myStoreBox'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], PoRequisitionEditDetailMasterComponent.prototype, "myStoreBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myVendorBox'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _e || Object)
    ], PoRequisitionEditDetailMasterComponent.prototype, "myVendorBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pComboBox'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _f || Object)
    ], PoRequisitionEditDetailMasterComponent.prototype, "pComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('purchasedate'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */]) === "function" && _g || Object)
    ], PoRequisitionEditDetailMasterComponent.prototype, "purchasedate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('validdate'),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */]) === "function" && _h || Object)
    ], PoRequisitionEditDetailMasterComponent.prototype, "validdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _j || Object)
    ], PoRequisitionEditDetailMasterComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('PoEditData'),
        __metadata("design:type", Object)
    ], PoRequisitionEditDetailMasterComponent.prototype, "PoEditData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PoRequisitionEditDetailMasterComponent.prototype, "UpdatedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PoRequisitionEditDetailMasterComponent.prototype, "cancelData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _k || Object)
    ], PoRequisitionEditDetailMasterComponent.prototype, "jqxLoader", void 0);
    PoRequisitionEditDetailMasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-po-requisition-edit-detail-master',
            template: __webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-edit-detail-master/po-requisition-edit-detail-master.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-edit-detail-master/po-requisition-edit-detail-master.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _l || Object, String, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_5" /* RequisitionDetailMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_5" /* RequisitionDetailMasterService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["X" /* PoRequisitionDetailMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["X" /* PoRequisitionDetailMasterService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _r || Object])
    ], PoRequisitionEditDetailMasterComponent);
    return PoRequisitionEditDetailMasterComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
}());

//# sourceMappingURL=po-requisition-edit-detail-master.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-master-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoRequisitionDetailMasterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__po_requisition_detail_master_component__ = __webpack_require__("./src/app/layout/inventory-master/po-requisition-detail-master/po-requisition-detail-master.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__po_requisition_detail_master_component__["a" /* PoRequisitionDetailMasterComponent */]
    }
];
var PoRequisitionDetailMasterRoutingModule = /** @class */ (function () {
    function PoRequisitionDetailMasterRoutingModule() {
    }
    PoRequisitionDetailMasterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], PoRequisitionDetailMasterRoutingModule);
    return PoRequisitionDetailMasterRoutingModule;
}());

//# sourceMappingURL=po-requisition-master-routing.module.js.map

/***/ })

});
//# sourceMappingURL=po-requisition-detail.module.chunk.js.map