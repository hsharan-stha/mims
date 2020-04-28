webpackJsonp(["material-issue.module"],{

/***/ "./src/app/layout/inventory-master/material-issue/material-issue-add/material-issue-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n  <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n    <form name=\"materialIssueForm\" [formGroup]=\"materialIssueForm\" id=\"materialIssueForm\">\r\n      <table class=\"table-w-tooltip\">\r\n        <tr>\r\n          <td>Issue No *</td>\r\n          <td>\r\n            <jqxInput class=\"issue_noInput\" [theme]=\"'energyblue'\" [height]=\"23\" formControlName=\"issue_no\"></jqxInput>\r\n          </td>\r\n          <td>Issue Date</td>\r\n          <td>\r\n            <jqxDateTimeInput #datetime class=\"issue_dateInput\" [formatString] = \"'yyyy-MM-dd'\" [height]=\"23\" [theme]=\"'energyblue'\" [width]=\"185\" formControlName=\"date\"></jqxDateTimeInput>\r\n          </td>\r\n        </tr>\r\n        <!-- <tr>\r\n          <td style=\"padding:10px;\" id=\"formContainer\">Cr. Cost Center</td>\r\n          <td style=\"padding-bottom:10px;\">\r\n            <jqxComboBox class=\"costcenter_idInput\" #myComboBox [width]=\"185\" height=\"23\" [theme]=\"'energyblue'\" [source]=\"costCenterAdapter\" [displayMember]=\"'name'\"\r\n              [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n            </jqxComboBox>\r\n          </td>\r\n          <td style=\"padding:10px;\" id=\"formContainer\">Dr. Cost Center</td>\r\n          <td style=\"padding-bottom:10px;\">\r\n            <jqxComboBox class=\"dr_costcenter_idInput\" #myComboBoxDrCC [width]=\"185\" height=\"23\" [theme]=\"'energyblue'\" [source]=\"costCenterAdapter\" [displayMember]=\"'name'\"\r\n              [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n            </jqxComboBox>\r\n          </td>\r\n          <td></td>\r\n          <td></td>\r\n        </tr> -->\r\n        <tr>\r\n            <td>From Store</td>\r\n            <td>\r\n                <jqxComboBox #myComboBoxFstore class=\"from_store\" formControlName=\"from_store\" height=\"23\" [theme]=\"'energyblue'\" [width]=\"185\" [source]=\"storeAdapter\" [displayMember]=\"'name'\"\r\n                [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n              </jqxComboBox>\r\n            </td>\r\n          <!-- <td>Relate To</td>\r\n          <td>\r\n            <jqxInput class=\"relate_toInput\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"relate_to\"></jqxInput>\r\n          </td> -->\r\n          <td>Type</td>\r\n          <td>\r\n            <jqxComboBox #typeComboBox [source]=\"typeAdapter\" [width]=\"180\" [theme]=\"'energyblue'\" class=\"type\" [displayMember]=\"'name'\" [valueMember]=\"'id'\"\r\n              [height]=\"23\" [searchMode]=\"'containsignorecase'\" (onSelect)=\"typeChange($event)\">\r\n            </jqxComboBox>\r\n          </td>\r\n          <td *ngIf=\"toStoreShow\">To Store</td>\r\n          <td *ngIf=\"toStoreShow\">\r\n            <jqxComboBox #myComboBox2 class=\"store_idInput\" height=\"23\" [theme]=\"'energyblue'\" [width]=\"185\" [source]=\"storeAdapter\" [displayMember]=\"'name'\"\r\n              [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n            </jqxComboBox>\r\n          </td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td>Remarks</td>\r\n          <td colspan=\"3\">\r\n            <jqxInput class=\"remarksInput\" [height]=\"23\" [width]=\"'100%'\" [theme]=\"'energyblue'\" formControlName=\"remarks\"></jqxInput>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </form>\r\n  </jqxValidator>\r\n  <div class=\"tfm-custom-toolbar tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\" style=\"margin-right:2px;\">\r\n    <div class=\"row justify-content-end\">\r\n      <div class=\"col-md-6\" style=\"max-width: 45%;\">\r\n        <strong>Material Issue Item Details: </strong>\r\n      </div>\r\n      <div class=\"col-md-6\" style=\"text-align:right;\">\r\n        <jqxButton style=\"margin-right: 5px;\" (onClick)=\"addNewItem()\" [theme]=\"'energyblue'\">\r\n          Add Material Issue Item\r\n        </jqxButton>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <jqxGrid #myGrid [width]=\"'99.5%'\" [height]=\"200\" [source]=\"dataAdapter\" [columns]=\"columns\"\r\n    [editable]=\"true\" [enabletooltips]=\"true\" [selectionmode]=\"'multiplecellsadvanced'\" [theme]=\"'energyblue'\">\r\n  </jqxGrid>\r\n</div>\r\n\r\n<div style=\"padding-top: 10px; text-align:right;\">\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" [disabled]=\"!materialIssueForm.valid\" (onClick)=\"saveBtn(materialIssueForm.value)\">\r\n    Save\r\n  </jqxButton>\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"cancelBtn()\">\r\n    Cancel\r\n  </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/material-issue/material-issue-add/material-issue-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/material-issue/material-issue-add/material-issue-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialIssueAddComponent; });
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









var MaterialIssueAddComponent = /** @class */ (function () {
    function MaterialIssueAddComponent(mis, apiUrl, fb, itemService, ehs, cdr, ccs, cus) {
        var _this = this;
        this.mis = mis;
        this.fb = fb;
        this.itemService = itemService;
        this.ehs = ehs;
        this.cdr = cdr;
        this.ccs = ccs;
        this.cus = cus;
        this.AddedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.typeAdapter = [
            { value: 'sc', label: 'Store Consumption' },
            { value: 'iet', label: 'Inter Estate Transfer' },
            { value: 'adj', label: 'Adjustment' },
        ];
        this.toStoreShow = false;
        this.userData = {};
        this.source = {
            datatype: 'json',
            datafields: [
                { name: 'item_id', type: 'string' },
                { name: 'quantity', type: 'string' },
                { name: 'rate', type: 'string' },
                { name: 'value', type: 'string' },
                { name: 'consumed_detail', type: 'string' },
                // { name: 'dr_account_head_id', type: 'string' },
                // { name: 'dr_account_head_name', type: 'string', map: 'dr_account_head>name' },
                // { name: 'activity_id', type: 'string' },
                { name: 'actvity_name', type: 'string', map: 'activity>name' },
            ],
            updaterow: function (rowid, rowdata, commit) {
                commit(true);
            }
        };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
            {
                text: 'Item Name', datafield: 'item_id', displayfield: 'name', columntype: 'combobox', width: 120,
                createeditor: function (row, column, editor) {
                    // let contractorsource =
                    //   {
                    //     datatype: "json",
                    //     contentType: "application/json; charset=utf-8",
                    //     datafields: [
                    //       { name: 'id' },
                    //       { name: 'name' },
                    //     ],
                    //     async: false,
                    //     url: this.apiUrl + 'item?limit=all'
                    //   };
                    // let contractorAdapter = new jqx.dataAdapter(contractorsource, {
                    //   downloadComplete: (data, status, xhr) => {
                    //     let tData = data.data;
                    //     return tData;
                    //   }
                    // });
                    editor.jqxComboBox({
                        source: _this.itemAdapter,
                        displayMember: "name",
                        valueMember: "id",
                        searchMode: "containsignorecase"
                    });
                },
                cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                    // if (newvalue != oldvalue) {
                    console.log(newvalue);
                    var currentRow = _this.myGrid.getrowdata(row).boundindex;
                    _this.itemService.show(newvalue['value']).subscribe(function (result) {
                        console.log(result);
                        if (result['data']['quantity']) {
                            _this.myGrid.setcellvalue(currentRow, 'quantity', result['data'].quantity);
                        }
                        else {
                            _this.myGrid.setcellvalue(currentRow, 'quantity', 0);
                        }
                        if (result['data']['rate']) {
                            _this.myGrid.setcellvalue(currentRow, 'rate', result['data'].rate);
                        }
                        else {
                            _this.myGrid.setcellvalue(currentRow, 'rate', 0);
                        }
                        if (result['data']['quantity'] && result['data']['rate']) {
                            var val = Number(result['data']['rate']) * Number(result['data']['quantity']);
                            _this.myGrid.setcellvalue(currentRow, 'value', val.toFixed(2));
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    // }
                },
            },
            // {
            //   text: 'Cr Account Head', datafield: 'cr_account_head_id', displayfield: 'cr_account_head_name', width: 150, columntype: 'combobox', createeditor: (row: number, column: any, editor: any): void => {
            //     editor.jqxComboBox({
            //       source: this.accountAdapter,
            //       displayMember: "name",
            //       valueMember: "id",
            //       searchMode: "containsignorecase"
            //     });
            //   }
            // },
            // {
            //   text: 'Dr Account Head', datafield: 'dr_account_head_id', displayfield: 'dr_account_head_name', width: 150, columntype: 'combobox', createeditor: (row: number, column: any, editor: any): void => {
            //     editor.jqxComboBox({
            //       source: this.accountAdapter,
            //       displayMember: "name",
            //       valueMember: "id",
            //       searchMode: "containsignorecase"
            //     });
            //   }
            // },
            { text: 'Quantity', datafield: 'quantity', columntype: 'textbox', width: 80,
                cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                    if (newvalue !== oldvalue) {
                        var currentRow = _this.myGrid.getrowdata(row);
                        var rowId = _this.myGrid.getrowdata(row).boundindex;
                        currentRow['quantity'] = newvalue;
                        _this.amountCalculation(currentRow, rowId);
                    }
                },
            },
            { text: 'Rate', datafield: 'rate', columntype: 'textbox', width: 90,
                cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                    if (newvalue !== oldvalue) {
                        var currentRow = _this.myGrid.getrowdata(row);
                        var rowId = _this.myGrid.getrowdata(row).boundindex;
                        currentRow['rate'] = newvalue;
                        _this.amountCalculation(currentRow, rowId);
                    }
                },
            },
            {
                text: 'Value', datafield: 'value', columntype: 'textbox', width: 100, editable: false,
            },
            { text: 'Consumed Detail', datafield: 'consumed_detail', columntype: 'textbox' },
            // {
            //   text: 'Activity', datafield: 'activity_id', displayfield: 'activity_name', width: 150, columntype: 'combobox', createeditor: (row: number, column: any, editor: any): void => {
            //     let contractorsource =
            //       {
            //         datatype: "json",
            //         contentType: "application/json; charset=utf-8",
            //         datafields: [
            //           { name: 'id' },
            //           { name: 'name' },
            //         ],
            //         data: this.userData,
            //         async: false,
            //         url: this.apiUrl + 'activity_master?limit=all'
            //       };
            //     let contractorAdapter = new jqx.dataAdapter(contractorsource, {
            //       downloadComplete: (data, status, xhr) => {
            //         let tData = data.data;
            //         return tData;
            //       }
            //     });
            //     editor.jqxComboBox({
            //       source: contractorAdapter,
            //       displayMember: "name",
            //       valueMember: "id",
            //       searchMode: "containsignorecase"
            //     });
            //   }
            // },
            {
                text: 'Actions', datafield: 'Delete', columntype: 'button', width: 70,
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
            { input: '.issue_noInput', message: 'Issue no is required!', action: 'keydown, blur', rule: 'required' },
            {
                input: '.issue_dateInput', message: 'Issue date is required!', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.datetime.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            // {
            //   input: '.costcenter_idInput', message: 'Cost center name is required!', action: 'keydown, blur,change', rule: (input: any, commit: any): any => {
            //     let data = this.myComboBox.val();
            //     let result = (data != '') ? true : false;
            //     return result;
            //   }
            // },
            // {
            //   input: '.store_idInput', message: 'Store name is required!', action: 'keydown, blur,change', rule: (input: any, commit: any): any => {
            //     let data = this.myComboBox2.val();
            //     let result = (data!='')?true:false;
            //     return result;
            //   }
            // },
            {
                input: '.type', message: 'Type is required !', action: 'keydown, blur,change', rule: function (input, commit) {
                    var data = _this.typeComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            // {
            //   input: '.cr_account_head_idInput', message: 'Cr account head is required!', action: 'keydown, blur', rule: (input: any, commit: any): any => {
            //     let data = this.aComboBox.val();
            //     let result = (data != '') ? true : false;
            //     return result;
            //   }
            // },
            {
                input: '.from_store', message: 'From Store is required!', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.myComboBoxFstore.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
        ];
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.materialIssueForm = this.fb.group({
            'issue_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'date': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'from_store': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            // 'relate_to': [null],
            'remarks': [null],
        });
    }
    MaterialIssueAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.costCenter_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                url: this.apiUrl + 'costcenter?limit=all',
            };
        this.costCenterAdapter = new jqx.dataAdapter(this.costCenter_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }
        });
        this.account_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                url: this.apiUrl + 'account_head?limit=all',
            };
        this.accountAdapter = new jqx.dataAdapter(this.account_data, {
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
        this.itemService.index({ limit: 'all', transact: '1' }).subscribe(function (response) {
            _this.itemAdapter = response;
        }, function (error) {
            console.log(error);
        });
    };
    MaterialIssueAddComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var codeData = {
            find_is_no: 'material_issue',
            return_type: 'for_client'
        };
        this.ccs.get(codeData).subscribe(function (response) {
            _this.materialIssueForm.controls['issue_no'].setValue(response['issue_no']);
        }, function (error) {
            console.log(error);
        });
        this.datetime.value(new Date());
        this.cdr.detectChanges();
    };
    /**
   * Track Change Event of Type Combobox
   * @param
   */
    MaterialIssueAddComponent.prototype.typeChange = function ($event) {
        var selectedType = this.typeComboBox.getSelectedItem().value;
        switch (selectedType) {
            case 'sc': {
                this.toStoreShow = false;
                break;
            }
            case 'iet': {
                this.toStoreShow = true;
                break;
            }
            case 'adj': {
                this.toStoreShow = false;
                break;
            }
            default: {
                break;
            }
        }
        // switch
    };
    MaterialIssueAddComponent.prototype.amountCalculation = function (data, rowid) {
        if (data) {
            var value = 0;
            if (data['quantity'] && data['rate']) {
                value = data['quantity'] * data['rate'];
            }
            this.myGrid.setcellvalue(rowid, 'value', value);
        }
    };
    // rendertoolbar = (toolbar: any): void => {
    //   let container = document.createElement('div');
    //   container.style.margin = '5px';
    //   let headingContainer4 = document.createElement('div');
    //   let buttonContainer5 = document.createElement('div');
    //   headingContainer4.id = 'headingContainer4';
    //   buttonContainer5.id = 'buttonContainer5';
    //   headingContainer4.style.cssText = 'float: left;padding:5px;margin-right:10px;font-weight:bold;';
    //   buttonContainer5.style.cssText = 'float: right';
    //   headingContainer4.innerHTML = 'Material Issue Item Details:';
    //   container.appendChild(headingContainer4);
    //   container.appendChild(buttonContainer5);
    //   toolbar[0].appendChild(container);
    //   let addRowButton = jqwidgets.createInstance('#buttonContainer5', 'jqxButton', { width: 165, value: 'Add Material Issue Item' });
    //   addRowButton.addEventHandler('click', () => {
    //     let datarow = this.generaterow();
    //     this.myGrid.addrow(null, datarow);
    //   })
    // };
    MaterialIssueAddComponent.prototype.addNewItem = function () {
        var datarow = this.generaterow();
        this.myGrid.addrow(null, datarow);
    };
    MaterialIssueAddComponent.prototype.generaterow = function () {
        var row = {};
        row['item_id'] = '';
        row['quantity'] = '';
        row['rate'] = '';
        row['value'] = '';
        // row['dr_account_head_id'] = '';
        // row['activity_id'] = '';
        row['consumed_detail'] = '';
        row['remarks'] = '';
        return row;
    };
    MaterialIssueAddComponent.prototype.saveBtn = function (post) {
        var _this = this;
        // post['cr_cost_center_id'] = this.myComboBox.getSelectedItem() && this.myComboBox.getSelectedItem().value;
        // post['dr_cost_center_id'] = this.myComboBoxDrCC.getSelectedItem() && this.myComboBoxDrCC.getSelectedItem().value;
        post['store_id'] = this.myComboBoxFstore.getSelectedItem() && this.myComboBoxFstore.getSelectedItem().value;
        // post['cr_account_head_id'] = this.aComboBox.getSelectedItem() && this.aComboBox.getSelectedItem().value;
        post['materialIssues'] = this.myGrid.getrows();
        // Get value Based on Selected Type
        var selectedType = this.typeComboBox.getSelectedItem().value;
        post['to_store_id'] = (selectedType == 'iet') ? this.myComboBox2.val() : null;
        post['type'] = selectedType;
        this.myValidator.validate(document.getElementById('materialIssueForm'));
        console.log(post);
        if (post['materialIssues'] != undefined && post['type']) {
            this.jqxLoader.open();
            this.mis.store(post).subscribe(function (result) {
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
    MaterialIssueAddComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification1'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], MaterialIssueAddComponent.prototype, "msgNotification1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _b || Object)
    ], MaterialIssueAddComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], MaterialIssueAddComponent.prototype, "myComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBoxDrCC'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], MaterialIssueAddComponent.prototype, "myComboBoxDrCC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox2'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _e || Object)
    ], MaterialIssueAddComponent.prototype, "myComboBox2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBoxFstore'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _f || Object)
    ], MaterialIssueAddComponent.prototype, "myComboBoxFstore", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('aComboBox'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _g || Object)
    ], MaterialIssueAddComponent.prototype, "aComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('typeComboBox'),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _h || Object)
    ], MaterialIssueAddComponent.prototype, "typeComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datetime'),
        __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */]) === "function" && _j || Object)
    ], MaterialIssueAddComponent.prototype, "datetime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _k || Object)
    ], MaterialIssueAddComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _l || Object)
    ], MaterialIssueAddComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _m || Object)
    ], MaterialIssueAddComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MaterialIssueAddComponent.prototype, "AddedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MaterialIssueAddComponent.prototype, "cancelData", void 0);
    MaterialIssueAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-material-issue-add',
            template: __webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue-add/material-issue-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue-add/material-issue-add.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["S" /* MaterialIssueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["S" /* MaterialIssueService */]) === "function" && _o || Object, String, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["s" /* CodeCheckerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["s" /* CodeCheckerService */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _u || Object])
    ], MaterialIssueAddComponent);
    return MaterialIssueAddComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
}());

//# sourceMappingURL=material-issue-add.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/material-issue/material-issue-edit/material-issue-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n  <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n    <form name=\"materialIssueForm\" [formGroup]=\"materialIssueForm\" id=\"materialIssueForm\">\r\n      <table class=\"table-w-tooltip\">\r\n        <tr>\r\n          <td>Issue No *</td>\r\n          <td>\r\n            <jqxInput class=\"issue_noInput\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"issue_no\"></jqxInput>\r\n          </td>\r\n          <td>Issue Date</td>\r\n          <td>\r\n            <jqxDateTimeInput #datetime class=\"issue_dateInput\" [formatString]=\"'yyyy-MM-dd'\" [height]=\"23\" [theme]=\"'energyblue'\" [width]=\"185\" formControlName=\"issue_date\"></jqxDateTimeInput>\r\n          </td>\r\n        </tr>\r\n        <!-- <tr>\r\n          <td style=\"padding:10px;\" id=\"formContainer\">Cr. Cost Center</td>\r\n          <td style=\"padding-bottom:10px;\">\r\n            <jqxComboBox class=\"costcenter_idInput\" #myComboBox [width]=\"185\" height=\"23\" [theme]=\"'energyblue'\" [source]=\"costCenterAdapter\" [displayMember]=\"'name'\"\r\n              [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n            </jqxComboBox>\r\n          </td>\r\n          <td style=\"padding:10px;\" id=\"formContainer\">Dr. Cost Center</td>\r\n          <td style=\"padding-bottom:10px;\">\r\n            <jqxComboBox class=\"dr_costcenter_idInput\" #myComboBoxDrCC [width]=\"185\" height=\"23\" [theme]=\"'energyblue'\" [source]=\"costCenterAdapter\" [displayMember]=\"'name'\"\r\n              [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n            </jqxComboBox>\r\n          </td>\r\n          <td></td>\r\n          <td></td>\r\n        </tr> -->\r\n        <tr>\r\n          <td>From Store</td>\r\n          <td>\r\n            <jqxComboBox #myComboBoxFstore class=\"from_store\" height=\"23\" [theme]=\"'energyblue'\" [width]=\"185\" [source]=\"storeAdapter\"\r\n              [displayMember]=\"'name'\" [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n            </jqxComboBox>\r\n          </td>\r\n          <!-- <td>Relate To</td>\r\n          <td>\r\n            <jqxInput class=\"relate_toInput\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"relate_to\"></jqxInput>\r\n          </td> -->\r\n          <td>Type</td>\r\n          <td>\r\n            <jqxComboBox #typeComboBox [source]=\"typeAdapter\" [theme]=\"'energyblue'\" [width]=\"180\" class=\"type\" [displayMember]=\"'name'\" [valueMember]=\"'id'\"\r\n              [height]=\"23\" [searchMode]=\"'containsignorecase'\" (onSelect)=\"typeChange($event)\">\r\n            </jqxComboBox>\r\n          </td>\r\n          <td *ngIf=\"toStoreShow\">To Store</td>\r\n          <td *ngIf=\"toStoreShow\">\r\n            <jqxComboBox #myComboBox2 class=\"store_idInput\" height=\"23\" [theme]=\"'energyblue'\" [width]=\"185\" [source]=\"storeAdapter\" [displayMember]=\"'name'\"\r\n              [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n            </jqxComboBox>\r\n          </td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td>Remarks</td>\r\n          <td colspan=\"3\">\r\n            <jqxInput class=\"remarksInput\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"remarks\"></jqxInput>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </form>\r\n  </jqxValidator>\r\n  <div class=\"tfm-custom-toolbar tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\" style=\"margin-right:2px;\">\r\n    <div class=\"row justify-content-end\">\r\n      <div class=\"col-md-6\" style=\"max-width: 45%;\">\r\n        <strong>Material Issue Item Details: </strong>\r\n      </div>\r\n      <div class=\"col-md-6\" style=\"text-align:right;\">\r\n        <jqxButton style=\"margin-right: 5px;\" (onClick)=\"addNewItem()\" [theme]=\"'energyblue'\">\r\n          Add Material Issue Item\r\n        </jqxButton>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <jqxGrid #myGrid [width]=\"'99.5%'\" [height]=\"200\" [source]=\"dataAdapter\" [columns]=\"columns\" [editable]=\"true\" [enabletooltips]=\"true\"\r\n    [selectionmode]=\"'multiplecellsadvanced'\" [theme]=\"'energyblue'\">\r\n  </jqxGrid>\r\n</div>\r\n\r\n<div style=\"padding-top: 10px; text-align:right;\">\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" [disabled]=\"!materialIssueForm.valid\" (onClick)=\"saveBtn(materialIssueForm.value)\">\r\n    Save\r\n  </jqxButton>\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"cancelBtn()\">\r\n    Cancel\r\n  </jqxButton>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/material-issue/material-issue-edit/material-issue-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/material-issue/material-issue-edit/material-issue-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialIssueEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxdatetimeinput.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
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









var MaterialIssueEditComponent = /** @class */ (function () {
    function MaterialIssueEditComponent(fb, cdr, apiUrl, ehs, mis, itemService, cus) {
        var _this = this;
        this.fb = fb;
        this.cdr = cdr;
        this.ehs = ehs;
        this.mis = mis;
        this.itemService = itemService;
        this.cus = cus;
        this.UpdatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.material_item = [];
        this.typeAdapter = [
            { value: 'sc', label: 'Store Consumption' },
            { value: 'iet', label: 'Inter Estate Transfer' },
            { value: 'adj', label: 'Adjustment' },
        ];
        this.toStoreShow = false;
        this.userData = {};
        this.rules = [
            { input: '.issue_noInput', message: 'Issue no is required!', action: 'keydown, blur', rule: 'required' },
            {
                input: '.issue_dateInput', message: 'Issue date is required!', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.datetime.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            // {
            //   input: '.costcenter_idInput', message: 'Cost center name is required!', action: 'keydown, blur,change', rule: (input: any, commit: any): any => {
            //     let data = this.myComboBox.val();
            //     let result = (data != '') ? true : false;
            //     return result;
            //   }
            // },
            // {
            //   input: '.store_idInput', message: 'Store name is required!', action: 'keydown, blur,change', rule: (input: any, commit: any): any => {
            //     let data = this.myComboBox2.val();
            //     let result = (data!='')?true:false;
            //     return result;
            //   }
            // },
            {
                input: '.type', message: 'Type is required !', action: 'keydown, blur,change', rule: function (input, commit) {
                    var data = _this.typeComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            // {
            //   input: '.cr_account_head_idInput', message: 'Cr account head is required!', action: 'keydown, blur', rule: (input: any, commit: any): any => {
            //     let data = this.aComboBox.val();
            //     let result = (data != '') ? true : false;
            //     return result;
            //   }
            // },
            {
                input: '.from_store', message: 'From Store is required!', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.myComboBoxFstore.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
        ];
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.createForm();
    }
    MaterialIssueEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getItem();
        this.costCenter_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                url: this.apiUrl + 'costcenter?limit=all',
            };
        this.costCenterAdapter = new jqx.dataAdapter(this.costCenter_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }, loadComplete: function () {
                if (_this.MaterialIssueEditData.cost_center_id) {
                    _this.myComboBox.val(_this.MaterialIssueEditData.cost_center_id);
                }
            }
        });
        this.account_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                url: this.apiUrl + 'account_head?limit=all',
            };
        this.accountAdapter = new jqx.dataAdapter(this.account_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }, loadComplete: function () {
                // if (this.MaterialIssueEditData.cr_account_head_id) {
                //   this.aComboBox.val(this.MaterialIssueEditData.cr_account_head_id);
                // }
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
            }, loadComplete: function () {
                console.log(_this.MaterialIssueEditData);
                if (_this.MaterialIssueEditData.to_store_id) {
                    // this.myComboBox2.val(this.MaterialIssueEditData.to_store_id);
                    _this.myComboBox2.selectItem(_this.MaterialIssueEditData.to_store_id);
                }
                if (_this.MaterialIssueEditData.store_id) {
                    _this.myComboBoxFstore.val(_this.MaterialIssueEditData.store_id);
                }
            }
        });
        this.EditData = new __WEBPACK_IMPORTED_MODULE_2__shared__["R" /* MaterialIssue */](this.MaterialIssueEditData);
        this.materialIssueForm.setValue(this.EditData);
        this.itemService.index({ limit: 'all' }).subscribe(function (response) {
            _this.itemAdapter = response;
        }, function (error) {
            console.log(error);
        });
    };
    /**
     *
     */
    MaterialIssueEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log(this.MaterialIssueEditData);
        this.jqxLoader.open();
        this.mis.show(this.MaterialIssueEditData.id).subscribe(function (result) {
            if (result['data'] && result['data']['materialIssue'] && result['data']['materialIssue']['store_id']) {
                _this.myComboBoxFstore.selectItem(result['data']['materialIssue']['store_id']);
            }
            if (result['data'] && result['data']['materialIssue'] && result['data']['materialIssue'].type) {
                _this.typeComboBox.selectItem(result['data']['materialIssue'].type);
            }
            _this.material_item = result['data'] && result['data']['materialIssue'] && result['data']['materialIssue'].material_issue_details || [];
            for (var _i = 0; _i < _this.material_item.length; _i++) {
                _this.material_item[_i]['name'] = _this.material_item[_i]['item'] && _this.material_item[_i]['item'].name;
            }
            _this.source.localdata = _this.material_item;
            _this.myGrid.updatebounddata("cells");
            _this.jqxLoader.close();
        }, function (error) {
            console.log(error);
        });
        this.cdr.detectChanges();
    };
    MaterialIssueEditComponent.prototype.createForm = function () {
        this.materialIssueForm = this.fb.group({
            'issue_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'issue_date': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            // 'from_store': [null, Validators.required],
            // 'relate_to': [null],
            'remarks': [null],
        });
    };
    /**
  * Track Change Event of Type Combobox
  * @param
  */
    MaterialIssueEditComponent.prototype.typeChange = function ($event) {
        var selectedType = this.typeComboBox.getSelectedItem().value;
        switch (selectedType) {
            case 'sc': {
                this.toStoreShow = false;
                break;
            }
            case 'iet': {
                this.toStoreShow = true;
                break;
            }
            case 'adj': {
                this.toStoreShow = false;
                break;
            }
            default: {
                break;
            }
        }
        // switch
    };
    MaterialIssueEditComponent.prototype.getItem = function () {
        var _this = this;
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'item_id', type: 'string', map: 'id' },
                    { name: 'name', type: 'string' },
                    { name: 'quantity', type: 'string' },
                    { name: 'rate', type: 'string' },
                    { name: 'value', type: 'string' },
                    { name: 'consumed_detail', type: 'string' },
                    { name: 'dr_account_head_id', type: 'string' },
                    { name: 'dr_account_head_name', type: 'string', map: 'dr_account_head>name' },
                    { name: 'activity_id', type: 'string' },
                    { name: 'activity_name', type: 'string', map: 'activity>name' },
                ],
            };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns =
            [
                {
                    text: 'Item Name', datafield: 'item_id', displayfield: 'name', columntype: 'combobox', width: 120,
                    createeditor: function (row, column, editor) {
                        // let contractorsource =
                        //   {
                        //     datatype: "json",
                        //     contentType: "application/json; charset=utf-8",
                        //     datafields: [
                        //       { name: 'id' },
                        //       { name: 'name' },
                        //     ],
                        //     async: false,
                        //     url: this.apiUrl + 'item?limit=all'
                        //   };
                        // let contractorAdapter = new jqx.dataAdapter(contractorsource, {
                        //   downloadComplete: (data, status, xhr) => {
                        //     let tData = data.data;
                        //     return tData;
                        //   }
                        // });
                        editor.jqxComboBox({
                            source: _this.itemAdapter,
                            displayMember: "name",
                            valueMember: "id",
                            searchMode: "containsignorecase"
                        });
                    },
                    cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                        // if (newvalue != oldvalue) {
                        console.log(newvalue);
                        var currentRow = _this.myGrid.getrowdata(row).boundindex;
                        _this.itemService.show(newvalue['value']).subscribe(function (result) {
                            console.log(result);
                            if (result['data']['quantity']) {
                                _this.myGrid.setcellvalue(currentRow, 'quantity', result['data'].quantity);
                            }
                            else {
                                _this.myGrid.setcellvalue(currentRow, 'quantity', 0);
                            }
                            if (result['data']['rate']) {
                                _this.myGrid.setcellvalue(currentRow, 'rate', result['data'].rate);
                            }
                            else {
                                _this.myGrid.setcellvalue(currentRow, 'rate', 0);
                            }
                            if (result['data']['quantity'] && result['data']['rate']) {
                                var val = Number(result['data']['rate']) * Number(result['data']['quantity']);
                                _this.myGrid.setcellvalue(currentRow, 'value', val.toFixed(2));
                            }
                        }, function (error) {
                            console.log(error);
                        });
                        // }
                    },
                },
                // {
                //   text: 'Cr Account Head', datafield: 'cr_account_head_id', displayfield: 'cr_account_head_name', columntype: 'combobox', createeditor: (row: number, column: any, editor: any): void => {
                //     editor.jqxComboBox({
                //       source: this.accountAdapter,
                //       displayMember: "name",
                //       valueMember: "id",
                //       searchMode: "containsignorecase"
                //     });
                //   }
                // },
                // {
                //   text: 'Dr Account Head', datafield: 'dr_account_head_id', displayfield: 'dr_account_head_name', columntype: 'combobox', createeditor: (row: number, column: any, editor: any): void => {
                //     editor.jqxComboBox({
                //       source: this.accountAdapter,
                //       displayMember: "name",
                //       valueMember: "id",
                //       searchMode: "containsignorecase"
                //     });
                //   }
                // },
                { text: 'Quantity', datafield: 'quantity', columntype: 'textbox', width: 80,
                    cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                        if (newvalue !== oldvalue) {
                            var currentRow = _this.myGrid.getrowdata(row);
                            var rowId = _this.myGrid.getrowdata(row).boundindex;
                            currentRow['quantity'] = newvalue;
                            _this.amountCalculation(currentRow, rowId);
                        }
                    },
                },
                { text: 'Rate', datafield: 'rate', columntype: 'textbox', width: 90,
                    cellvaluechanging: function (row, datafield, columntype, oldvalue, newvalue) {
                        if (newvalue !== oldvalue) {
                            var currentRow = _this.myGrid.getrowdata(row);
                            var rowId = _this.myGrid.getrowdata(row).boundindex;
                            currentRow['rate'] = newvalue;
                            _this.amountCalculation(currentRow, rowId);
                        }
                    },
                },
                {
                    text: 'Value', datafield: 'value', columntype: 'textbox', editable: false, width: 90,
                },
                { text: 'Consumed Detail', datafield: 'consumed_detail', columntype: 'textbox' },
                {
                    text: 'Activity', datafield: 'activity_id', displayfield: 'activity_name', width: 140, columntype: 'combobox', createeditor: function (row, column, editor) {
                        var contractorsource = {
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            datafields: [
                                { name: 'id' },
                                { name: 'name' },
                            ],
                            data: _this.userData,
                            async: false,
                            url: _this.apiUrl + 'activity_master?limit=all'
                        };
                        var contractorAdapter = new jqx.dataAdapter(contractorsource, {
                            downloadComplete: function (data, status, xhr) {
                                var tData = data.data;
                                // for(let i = 0; i < tData.length; i++){
                                //   tData[i]['name']
                                // }
                                return tData;
                            }
                        });
                        editor.jqxComboBox({
                            source: contractorAdapter,
                            displayMember: "name",
                            valueMember: "id",
                            searchMode: "containsignorecase"
                        });
                    }
                },
                {
                    text: 'Actions', datafield: 'Delete', columntype: 'button', width: 70,
                    cellsrenderer: function () {
                        return 'Delete';
                    },
                    buttonclick: function (row) {
                        var rowid = _this.myGrid.getrowid(row);
                        _this.myGrid.deleterow(rowid);
                    }
                }
            ];
    };
    MaterialIssueEditComponent.prototype.amountCalculation = function (data, rowid) {
        if (data) {
            var value = 0;
            if (data['quantity'] && data['rate']) {
                value = data['quantity'] * data['rate'];
            }
            this.myGrid.setcellvalue(rowid, 'value', value);
        }
    };
    // rendertoolbar = (toolbar: any): void => {
    //   let container = document.createElement('div');
    //   container.style.margin = '5px';
    //   let headingContainer4 = document.createElement('div');
    //   let buttonContainer5 = document.createElement('div');
    //   headingContainer4.id = 'headingContainer4';
    //   buttonContainer5.id = 'buttonContainer5';
    //   headingContainer4.style.cssText = 'float: left;padding:5px;margin-right:10px;font-weight:bold;';
    //   buttonContainer5.style.cssText = 'float: right';
    //   headingContainer4.innerHTML = 'Material Issue Item Details:';
    //   container.appendChild(headingContainer4);
    //   container.appendChild(buttonContainer5);
    //   toolbar[0].appendChild(container);
    //   let addRowButton = jqwidgets.createInstance('#buttonContainer5', 'jqxButton', { width: 155, value: 'Add Material Issue Item' });
    //   addRowButton.addEventHandler('click', () => {
    //     let datarow = this.generaterow();
    //     this.myGrid.addrow(null, datarow);
    //   })
    // };
    MaterialIssueEditComponent.prototype.addNewItem = function () {
        var datarow = this.generaterow();
        this.myGrid.addrow(null, datarow);
    };
    MaterialIssueEditComponent.prototype.generaterow = function () {
        var row = {};
        row['item_id'] = '';
        row['quantity'] = '';
        row['rate'] = '';
        row['value'] = '';
        // row['dr_account_head_id'] = '';
        row['activity_id'] = '';
        row['consumed_detail'] = '';
        row['remarks'] = '';
        return row;
    };
    MaterialIssueEditComponent.prototype.saveBtn = function (post) {
        var _this = this;
        // post['cr_cost_center_id'] = this.myComboBox.getSelectedItem() && this.myComboBox.getSelectedItem().value;
        // post['dr_cost_center_id'] = this.myComboBoxDrCC.getSelectedItem() && this.myComboBoxDrCC.getSelectedItem().value;
        post['store_id'] = this.myComboBoxFstore.getSelectedItem() && this.myComboBoxFstore.getSelectedItem().value;
        // post['cr_account_head_id'] = this.aComboBox.getSelectedItem() && this.aComboBox.getSelectedItem().value;
        post['materialIssueDetails'] = this.myGrid.getrows();
        // Get value Based on Selected Type
        var selectedType = this.typeComboBox.getSelectedItem().value;
        post['to_store_id'] = (selectedType == 'iet') ? this.myComboBox2.val() : null;
        post['type'] = selectedType;
        this.myValidator.validate(document.getElementById('materialIssueForm'));
        if (post['cr_account_head_id'] != undefined && post['cr_cost_center_id'] != undefined && post['materialIssueDetails'] != undefined && post['type']) {
            this.jqxLoader.open();
            this.mis.update(this.MaterialIssueEditData.id, post).subscribe(function (result) {
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
    MaterialIssueEditComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _a || Object)
    ], MaterialIssueEditComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _b || Object)
    ], MaterialIssueEditComponent.prototype, "myComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBoxDrCC'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], MaterialIssueEditComponent.prototype, "myComboBoxDrCC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox2'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], MaterialIssueEditComponent.prototype, "myComboBox2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBoxFstore'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _e || Object)
    ], MaterialIssueEditComponent.prototype, "myComboBoxFstore", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('aComboBox'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _f || Object)
    ], MaterialIssueEditComponent.prototype, "aComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('typeComboBox'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _g || Object)
    ], MaterialIssueEditComponent.prototype, "typeComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datetime'),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */]) === "function" && _h || Object)
    ], MaterialIssueEditComponent.prototype, "datetime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _j || Object)
    ], MaterialIssueEditComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _k || Object)
    ], MaterialIssueEditComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('MaterialIssueEditData'),
        __metadata("design:type", Object)
    ], MaterialIssueEditComponent.prototype, "MaterialIssueEditData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MaterialIssueEditComponent.prototype, "UpdatedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MaterialIssueEditComponent.prototype, "cancelData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _l || Object)
    ], MaterialIssueEditComponent.prototype, "winNotification", void 0);
    MaterialIssueEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-material-issue-edit',
            template: __webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue-edit/material-issue-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue-edit/material-issue-edit.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _o || Object, String, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["S" /* MaterialIssueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["S" /* MaterialIssueService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _s || Object])
    ], MaterialIssueEditComponent);
    return MaterialIssueEditComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
}());

//# sourceMappingURL=material-issue-edit.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/material-issue/material-issue-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialIssueRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_issue_component__ = __webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__material_issue_component__["a" /* MaterialIssueComponent */]
    }
];
var MaterialIssueRoutingModule = /** @class */ (function () {
    function MaterialIssueRoutingModule() {
    }
    MaterialIssueRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], MaterialIssueRoutingModule);
    return MaterialIssueRoutingModule;
}());

//# sourceMappingURL=material-issue-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/material-issue/material-issue-view/material-issue-view.component.html":
/***/ (function(module, exports) {

module.exports = "<jqxGrid #myGrid [width]=\"'99%'\"  [source]=\"dataAdapter\" [columns]=\"columns\" [showtoolbar]=\"true\" [rendertoolbar]=\"rendertoolbar\"\r\n[editable]=\"true\" [enabletooltips]=\"true\" [selectionmode]=\"'multiplecellsadvanced'\" [theme]=\"'energyblue'\">\r\n</jqxGrid>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/inventory-master/material-issue/material-issue-view/material-issue-view.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/material-issue/material-issue-view/material-issue-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialIssueViewComponent; });
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




var MaterialIssueViewComponent = /** @class */ (function () {
    function MaterialIssueViewComponent(cdr, mis) {
        this.cdr = cdr;
        this.mis = mis;
        this.material_item = [];
        this.rendertoolbar = function (toolbar) {
            var container = document.createElement('div');
            container.style.margin = '5px';
            var headingContainer4 = document.createElement('div');
            headingContainer4.id = 'headingContainer4';
            headingContainer4.style.cssText = 'float: left;padding:5px;margin-right:10px;font-weight:bold;';
            headingContainer4.innerHTML = 'Material Issue Item Details:';
            container.appendChild(headingContainer4);
            toolbar[0].appendChild(container);
        };
    }
    MaterialIssueViewComponent.prototype.ngOnInit = function () {
        this.getItem();
    };
    MaterialIssueViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.jqxLoader.open();
        this.mis.show(this.MaterialIssueDetailViewData.id).subscribe(function (result) {
            _this.material_item = result['data'].material_issue_details;
            for (var _i = 0; _i < _this.material_item.length; _i++) {
                _this.material_item[_i]['name'] = _this.material_item[_i]['item'] && _this.material_item[_i]['item'].name;
            }
            _this.source.localdata = _this.material_item;
            _this.myGrid.updatebounddata("cells");
            _this.jqxLoader.close();
        }, function (error) {
            console.log(error);
        });
        this.cdr.detectChanges();
    };
    MaterialIssueViewComponent.prototype.getItem = function () {
        var _this = this;
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'name', type: 'string' },
                    { name: 'item_id', type: 'string' },
                    { name: 'quantity', type: 'string' },
                    { name: 'rate', type: 'string' },
                    { name: 'value', type: 'string' },
                    { name: 'consumed_detail', type: 'string' },
                    { name: 'dr_account_head_name', type: 'string', map: 'dr_account_head>name' },
                    { name: 'dr_account_head_id', type: 'string' },
                ],
            };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns =
            [
                {
                    text: 'Item Name', datafield: 'item_id', displayfield: 'name', columntype: 'combobox', width: 120,
                    createeditor: function (row, column, editor) {
                        var contractorsource = {
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            datafields: [
                                { name: 'id' },
                                { name: 'name' },
                            ],
                            async: false,
                            url: _this.apiUrl + 'item?limit=all'
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
                    }
                },
                { text: 'Quantity', datafield: 'quantity', columntype: 'textbox' },
                { text: 'Rate', datafield: 'rate', columntype: 'textbox' },
                { text: 'Value', datafield: 'value', columntype: 'textbox' },
                { text: 'Consumed Detail', datafield: 'consumed_detail', columntype: 'textbox' },
                { text: 'Dr Account Head name', datafield: 'dr_account_head_id', displayfield: 'dr_account_head_name', columntype: 'textbox' },
            ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], MaterialIssueViewComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _b || Object)
    ], MaterialIssueViewComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('MaterialIssueDetailViewData'),
        __metadata("design:type", Object)
    ], MaterialIssueViewComponent.prototype, "MaterialIssueDetailViewData", void 0);
    MaterialIssueViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-material-issue-view',
            template: __webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue-view/material-issue-view.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue-view/material-issue-view.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["S" /* MaterialIssueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["S" /* MaterialIssueService */]) === "function" && _d || Object])
    ], MaterialIssueViewComponent);
    return MaterialIssueViewComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=material-issue-view.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/material-issue/material-issue.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 tfm-panel-left\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                    <h2> Quick Access </h2>\r\n                </div>\r\n                <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                    <ng-template #quickAccess></ng-template>\r\n                </jqxPanel>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-10 tfm-panel-right\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                    <h2>TE Material Issue </h2>\r\n                </div>\r\n                <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                    <jqxGrid #myGrid [width]=\"'99.8%'\" [height]=\"'100%'\" [source]=\"dataAdapter\" [sortable]=\"true\" [filterable]=\"true\" [pageable]=\"true\"\r\n                        [columns]=\"columns\" [showtoolbar]=\"true\" [rendertoolbar]=\"rendertoolbar\" [showfilterrow]=\"true\" [selectionmode]=\"'checkbox'\"\r\n                        [virtualmode]=\"true\" [rendergridrows]=\"rendergridrows\" [theme]=\"'energyblue'\">\r\n                    </jqxGrid>\r\n                </jqxPanel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<jqxWindow #myWindow [width]=\"'80%'\" [height]=\"'80%'\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n    <div id=\"windowContent\">\r\n        <ng-template #Insert></ng-template>\r\n    </div>\r\n</jqxWindow>\r\n<jqxNotification #msgNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n    [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\" [theme]=\"'energyblue'\">\r\n    <div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n    [autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n    <div id='listingMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/material-issue/material-issue.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/material-issue/material-issue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialIssueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_issue_add_material_issue_add_component__ = __webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue-add/material-issue-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_issue_edit_material_issue_edit_component__ = __webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue-edit/material-issue-edit.component.ts");
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








var MaterialIssueComponent = /** @class */ (function () {
    function MaterialIssueComponent(mis, componentFactoryResolver, apiUrl, cus) {
        var _this = this;
        this.mis = mis;
        this.componentFactoryResolver = componentFactoryResolver;
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
            var buttonContainer3 = document.createElement('div');
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
                _this.myWindow.title('Add Material Issue');
                _this.myWindow.open();
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__material_issue_add_material_issue_add_component__["a" /* MaterialIssueAddComponent */]);
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
                        _this.mis.destroy('[' + ids + ']').subscribe(function (data) {
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
        this.getDryer();
    }
    MaterialIssueComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
    };
    MaterialIssueComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    MaterialIssueComponent.prototype.getDryer = function () {
        var _this = this;
        var myUrl = this.apiUrl + 'material_issue';
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'string' },
                    { name: 'issue_no', type: 'string' },
                    { name: 'issue_date', type: 'date' },
                    { name: 'store_id', type: 'string' },
                    { name: 'to_store_id', type: 'string' },
                    { name: 'to_store_name', type: 'string', map: 'to_store>name' },
                    { name: 'store_name', type: 'string', map: 'store>name' },
                    { name: 'cr_account_head_id', type: 'string' },
                    { name: 'cr_account_head_name', type: 'string', map: 'cr_account_head>name' },
                    { name: 'cr_cost_center_name', type: 'string', map: 'cr_cost_center>name' },
                    { name: 'cr_cost_center_id', type: 'string' },
                    { name: 'dr_cost_center_name', type: 'string', map: 'dr_cost_center>name' },
                    { name: 'dr_cost_center_id', type: 'string' },
                    { name: 'relate_to', type: 'string' },
                    { name: 'remarks', type: 'number' },
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
                    data['report_type'] = 'material_issue_report';
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
                { text: 'Issue Date', datafield: 'issue_date', columntype: 'date', filtertype: 'range', cellsformat: 'yyyy-MM-dd', width: 210 },
                { text: 'Issue No', datafield: 'issue_no', columntype: 'textbox', filtercondition: 'starts_with', width: 150 },
                { text: 'From Store', datafield: 'store_id', displayfield: 'store_name', columntype: 'textbox', filtertype: 'list', width: 180 },
                { text: 'Store', datafield: 'to_store_id', displayfield: 'to_store_name', columntype: 'textbox', filtertype: 'list', width: 180 },
                { text: 'Cr. Account Head', datafield: 'cr_account_head_id', displayfield: 'cr_account_head_name', hidden: 'true', columntype: 'textbox', filtercondition: 'starts_with', width: 180 },
                { text: 'Cr. Cost Center', hidden: 'true', datafield: 'cr_cost_center_id', displayfield: 'cr_cost_center_name', columntype: 'textbox', sortable: false, filterable: false, width: 180 },
                { text: 'Dr. Cost Center', hidden: 'true', datafield: 'dr_cost_center_id', displayfield: 'dr_cost_center_name', columntype: 'textbox', sortable: false, filterable: false, width: 180 },
                { text: 'Relate To', datafield: 'relate_to', columntype: 'textbox', hidden: 'true', filtercondition: 'starts_with', width: 150, },
                { text: 'Remark', datafield: 'remarks', columntype: 'textbox', hidden: 'true', filtercondition: 'starts_with', width: 100, },
                // {
                //   text: 'Material Issue Details', datafield: 'view_item_details', sortable:false,filterable:false, columntype: 'button', width: 200,
                //   cellsrenderer: (): string => {
                //     return 'View Material Issue Details';
                //   },
                //   buttonclick: (row: number): void => {
                //     this.editrow = row;
                //     let dataRecord = this.myGrid.getrowdata(this.editrow);
                //     this.myWindow.draggable(true);
                //     this.myWindow.title('&nbsp;');
                //     const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MaterialIssueViewComponent);
                //     this.Insert.clear();
                //     const dynamic_Component = this.Insert.createComponent(componentFactory);
                //     this.myWindow.open();
                //     (<MaterialIssueViewComponent>dynamic_Component.instance).MaterialIssueDetailViewData = dataRecord;
                //   }
                // },
                {
                    text: 'Actions', datafield: 'Edit', columntype: 'button', sortable: false, filterable: false, width: 70,
                    cellsrenderer: function () {
                        return 'Edit';
                    },
                    buttonclick: function (row) {
                        _this.editrow = row;
                        var dataRecord = _this.myGrid.getrowdata(_this.editrow);
                        _this.myWindow.draggable(true);
                        _this.myWindow.title('Edit');
                        _this.myWindow.open();
                        var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__material_issue_edit_material_issue_edit_component__["a" /* MaterialIssueEditComponent */]);
                        _this.Insert.clear();
                        var dynamic_Component = _this.Insert.createComponent(componentFactory);
                        dynamic_Component.instance.MaterialIssueEditData = dataRecord;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], MaterialIssueComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _b || Object)
    ], MaterialIssueComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _c || Object)
    ], MaterialIssueComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _d || Object)
    ], MaterialIssueComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _e || Object)
    ], MaterialIssueComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Insert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object)
    ], MaterialIssueComponent.prototype, "Insert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object)
    ], MaterialIssueComponent.prototype, "quickAccess", void 0);
    MaterialIssueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-material-issue',
            template: __webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["S" /* MaterialIssueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["S" /* MaterialIssueService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _j || Object, String, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */]) === "function" && _k || Object])
    ], MaterialIssueComponent);
    return MaterialIssueComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=material-issue.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/material-issue/material-issue.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialIssueModule", function() { return MaterialIssueModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_issue_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_issue_component__ = __webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_issue_add_material_issue_add_component__ = __webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue-add/material-issue-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_issue_edit_material_issue_edit_component__ = __webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue-edit/material-issue-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_issue_view_material_issue_view_component__ = __webpack_require__("./src/app/layout/inventory-master/material-issue/material-issue-view/material-issue-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MaterialIssueModule = /** @class */ (function () {
    function MaterialIssueModule() {
    }
    MaterialIssueModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_issue_routing_module__["a" /* MaterialIssueRoutingModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__material_issue_add_material_issue_add_component__["a" /* MaterialIssueAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__material_issue_edit_material_issue_edit_component__["a" /* MaterialIssueEditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__material_issue_view_material_issue_view_component__["a" /* MaterialIssueViewComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__material_issue_component__["a" /* MaterialIssueComponent */],
                __WEBPACK_IMPORTED_MODULE_5__material_issue_add_material_issue_add_component__["a" /* MaterialIssueAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__material_issue_edit_material_issue_edit_component__["a" /* MaterialIssueEditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__material_issue_view_material_issue_view_component__["a" /* MaterialIssueViewComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], MaterialIssueModule);
    return MaterialIssueModule;
}());

//# sourceMappingURL=material-issue.module.js.map

/***/ })

});
//# sourceMappingURL=material-issue.module.chunk.js.map