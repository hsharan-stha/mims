webpackJsonp(["production-voucher.module"],{

/***/ "./src/app/layout/inventory-master/production-voucher/production-voucher-add/production-voucher-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n    <form name=\"pvForm\" [formGroup]=\"pvForm\">\r\n        <table>\r\n            <tr>\r\n                <!-- <td>Code *</td>\r\n                <td>\r\n                  <input class=\"code form-control\" name=\"code\" formControlName=\"code\">\r\n                </td> -->\r\n                <td>Date *</td>\r\n                <td>\r\n                    <jqxDateTimeInput #dateInput class=\"dateInput\" [height]=\"23\" [width]=\"180\" [formatString]=\"'yyyy-MM-dd'\" [theme]=\"'energyblue'\"></jqxDateTimeInput>\r\n                </td>\r\n                <td>Bill of Material&nbsp;*</td>\r\n                <td>\r\n                    <jqxComboBox #bomComboBox (onChange)=\"bomChange($event)\" [theme]=\"'energyblue'\" class=\"bom\" [width]=\"180\" [height]=\"23\" [source]=\"bomAdapter\"\r\n                        [displayMember]=\"'display_field'\" [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n                    </jqxComboBox>\r\n                </td>\r\n                <td>\r\n                    Store&nbsp;*\r\n                </td>\r\n                <td>\r\n                    <jqxComboBox #storeComboBox (onChange)=\"storeItemSelected($event)\" class=\"store_input\" [height]=\"23\" [theme]=\"'energyblue'\" [width]=\"180\" [source]=\"storeAdapter\"\r\n                        [displayMember]=\"'name'\" [searchMode]=\"'containsignorecase'\" [valueMember]=\"'id'\">\r\n                    </jqxComboBox>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5 new-col-md-5\">\r\n                <div class=\"rs-grid-panel bg-white\">\r\n                    <fieldset style=\"height: 377px;\">\r\n                        <legend>Output Items</legend>\r\n                        <!-- <a (click)=\"addItem('output_materials')\" class=\"btn btn-sm btn-primary px-btn\">\r\n                  <i class=\"fa fa-fw fa-plus\" aria-hidden=\"true\"></i> Add</a> -->\r\n                        <div formArrayName=\"output_materials\" style=\"height: 87%;\">\r\n                            <div class=\"row row-head\">\r\n                                <div class=\"col-md-4\">\r\n                                    <p>Item Name</p>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <p>Quantity</p>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <p>Rate</p>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <p>Value</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-array-container\" style=\"height: 90%;\">\r\n                                <div *ngFor=\"let material of pvForm.get('output_materials')['controls']; let i = index\" class=\"form-array-container-inner\">\r\n                                    <div class=\"row p-1 row-body\" [formGroupName]=\"i\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" formControlName=\"item_name\" class=\"px-control\">\r\n                                            <input type=\"hidden\" formControlName=\"item_id\" class=\"px-control\">\r\n                                        </div>\r\n                                        <!-- <div class=\"col-md-3\">\r\n                                            <input type=\"text\" (keyup)=\"outputItemFilter($event, i)\" formControlName=\"item_id\" class=\"px-control\" placeholder=\"Item\">\r\n                                            <span *ngIf=\"outputItemFocus[i]\" class=\"px-select-container\">\r\n                                                <select (input)=\"outputItemListSelected($event.target.value, i)\" (blur)=\"outputItemFocus[i] = false;\" size=\"5\" name=\"item_id\"\r\n                                                    class=\"px-control px-select-list\" id=\"itemCode2\">\r\n                                                    <option *ngFor='let item of outputItemAdapter[i]' [value]=\"item.code\">{{ item.name }}</option>\r\n                                                </select>\r\n                                            </span>\r\n                                            <small [hidden]=\"material['controls'].item_id.valid || !material['controls'].item_id.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                                                * required\r\n                                            </small>\r\n                                        </div> -->\r\n                                        <div class=\"col-md-2\">\r\n                                            <input type=\"hidden\" formControlName=\"actual_qty\">\r\n                                            <input type=\"text\" formControlName=\"qty\" class=\"px-control\" (input)=\"opQtyChange($event.target.value,i)\">\r\n                                            <small [hidden]=\"material['controls'].qty.valid || !material['controls'].qty.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                                                *\r\n                                            </small>\r\n                                        </div>\r\n                                        <!-- (input)=\"optRateChange($event.target.value,i)\" -->\r\n                                        <div class=\"col-md-2\">\r\n                                            <input type=\"text\" formControlName=\"rate\" [attr.disabled]=\"true\" class=\"px-control\">\r\n                                            <small [hidden]=\"material['controls'].rate.valid || !material['controls'].rate.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                                                *\r\n                                            </small>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\">\r\n                                            <input type=\"text\" formControlName=\"value\" class=\"px-control\" (input)=\"optValueChange()\">\r\n                                            <small [hidden]=\"material['controls'].value.valid || !material['controls'].value.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                                                *\r\n                                            </small>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row row-head\">\r\n                            <div class=\"col-md-4\">\r\n\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n\r\n                            </div>\r\n                            <div class=\"col-md-2 text-center\">\r\n                                <p>Total</p>\r\n                            </div>\r\n                            <div class=\"col-md-2 text-left\">\r\n                                <p><strong>{{ valueTotal['output_materials'] }}</strong></p>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"rs-grid-panel bg-white\">\r\n                    <fieldset style=\"height: 377px;\">\r\n                        <legend>Input Items</legend>\r\n                        <!-- <a (click)=\"addItem('input_materials')\" class=\"btn btn-sm btn-primary px-btn\">\r\n              <i class=\"fa fa-fw fa-plus\" aria-hidden=\"true\"></i> Add</a> -->\r\n                        <div formArrayName=\"input_materials\" style=\"height: 87%\">\r\n                            <div class=\"row row-head\">\r\n                                <div class=\"col-md-4\">\r\n                                    <p>Item</p>\r\n                                </div>\r\n                                <div class=\"col-md-1\">\r\n                                    <p>Qty.</p>\r\n                                </div>\r\n                                <div class=\"col-md-1\">\r\n                                    <p>Rate</p>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <p>Value</p>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <p>Actual Qty.</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-array-container\" style=\"height: 90%\">\r\n                                <div *ngFor=\"let material of pvForm.get('input_materials')['controls']; let i = index\" class=\"form-array-container-inner\">\r\n                                    <div class=\"row p-1 row-body\" [formGroupName]=\"i\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <input type=\"text\" formControlName=\"item_name\" class=\"px-control\">\r\n                                            <input type=\"hidden\" formControlName=\"item_id\" class=\"px-control\">\r\n                                        </div>\r\n                                        <div class=\"col-md-1\">\r\n                                            <input type=\"text\" formControlName=\"qty\" class=\"px-control\" [attr.disabled]=\"true\">\r\n                                            <small [hidden]=\"material['controls'].qty.valid || !material['controls'].qty.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                                                *\r\n                                            </small>\r\n                                        </div>\r\n                                        <div class=\"col-md-1\">\r\n                                            <input type=\"text\" formControlName=\"rate\" class=\"px-control\" (input)=\"inptRateChange($event.target.value,i)\">\r\n                                            <small [hidden]=\"material['controls'].rate.valid || !material['controls'].rate.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                                                *\r\n                                            </small>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\">\r\n                                            <input type=\"text\" formControlName=\"value\" class=\"px-control\" [attr.disabled]=\"true\">\r\n                                            <small [hidden]=\"material['controls'].value.valid || !material['controls'].value.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                                                *\r\n                                            </small>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\">\r\n                                            <input type=\"text\" formControlName=\"actual_qty\" class=\"px-control text-red\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <label style=\"font-weight: 600;margin-left: 5px;\" *ngIf=\"showDiv\">Extra Expenses</label>\r\n                                <div [formGroup]=\"extraCostForm\" *ngIf=\"showDiv\">\r\n                                    <div formArrayName=\"extraCost\">\r\n                                        <div class=\"row p-1 row-body\" [formGroupName]=\"i\" *ngFor=\"let cost of extraCostForm.get('extraCost').controls; let i=index;\">\r\n                                            <div class=\"col-md-6\">\r\n                                                <input placeholder=\"Item name\" type=\"text\" formControlName=\"item_name\" class=\"px-control\" value=\"Labour Cost\">\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input placeholder=\"cost\" type=\"text\" formControlName=\"cost\" (input)=\"getLabourCost($event.target.value, i)\" class=\"px-control\">\r\n                                            </div>\r\n                                            <div class=\"col-md-2\">\r\n                                                <button type=\"button\" (click)=\"addExtraCost()\" class=\"btn btn-sm btn-info\"> <i\r\n                                                        class=\"fa fa-plus fa-fw\" aria-hidden=\"true\"></i> </button>\r\n                                                <button type=\"button\" [disabled]=\"extraCostForm.value['extraCost'].length == 1\" (click)=\"removeExtraCost(i)\" class=\"btn btn-sm btn-danger\">\r\n                                                    <i class=\"fa fa-times fa-fw\" aria-hidden=\"true\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row row-head\">\r\n                            <div class=\"col-md-4\">\r\n\r\n                            </div>\r\n                            <div class=\"col-md-1\">\r\n\r\n                            </div>\r\n                            <div class=\"col-md-1 text-center\">\r\n                                <p>Total</p>\r\n                            </div>\r\n                            <div class=\"col-md-2 text-left\">\r\n                                <p><strong>{{ total }}</strong></p>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </form>\r\n</div>\r\n<!-- || (total | number: '.1-2' != valueTotal['output_materials']) -->\r\n<!-- [disabled]=\"!pvForm.valid || !(valueTotal['input_materials'] > 0 || valueTotal['output_materials'] > 0) || (valueTotal['input_materials'] != valueTotal['output_materials']) || labourCost == 0 || extraCost == 0\" -->\r\n<div style=\"padding-top: 10px; text-align:right;margin-right: 65px;\">\r\n    <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\"[disabled]=\"!pvForm.valid || !(valueTotal['input_materials'] > 0 || valueTotal['output_materials'] > 0) || (valueTotal['output_materials'] != total) || !extraCostForm.valid || !storeSelected\" \r\n        (onClick)=\"save(pvForm.value)\">\r\n        Save\r\n    </jqxButton>\r\n    <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"cancelBtn()\">\r\n        Cancel\r\n    </jqxButton>\r\n</div>\r\n\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>\r\n<jqxNotification #msgNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n    [autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n    <div id='message'></div>\r\n</jqxNotification>\r\n\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n    [autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n    <div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/production-voucher/production-voucher-add/production-voucher-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/production-voucher/production-voucher-add/production-voucher-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductionVoucherAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxdatetimeinput.ts");
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








var ProductionVoucherAddComponent = /** @class */ (function () {
    // outputTotal:number = 0;
    function ProductionVoucherAddComponent(fb, ehs, cus, ims, pvs, boms, ss, apiUrl) {
        this.fb = fb;
        this.ehs = ehs;
        this.cus = cus;
        this.ims = ims;
        this.pvs = pvs;
        this.boms = boms;
        this.ss = ss;
        this.AddedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.inputItemAdapter = [];
        this.inputItemFocus = [];
        this.outputItemAdapter = [];
        this.outputItemFocus = [];
        this.bomAdapter = [];
        this.storeAdapter = [];
        this.currentInputArray = [];
        this.currentOutputArray = [];
        this.valueTotal = {};
        this.labourCost = 0;
        this.exCost = 0;
        this.showDiv = false;
        this.storeSelected = false;
        this.apiUrl = apiUrl;
        this.createForm();
    }
    ProductionVoucherAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ss.index({ limit: 'all' }).subscribe(function (response) {
            // console.log(response);
            _this.storeAdapter = response;
        }, function (error) {
            console.log(error);
        });
        this.extraCostForm = this.fb.group({
            extraCost: this.fb.array([this.createFormGroupItems()])
        });
    };
    ProductionVoucherAddComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.jqxLoader.open();
        this.boms.all().subscribe(function (response) {
            // console.log(response);
            var rawData = response['data'];
            for (var i = 0; i < rawData.length; i++) {
                rawData[i].display_field = rawData[i].name + ' - ' + rawData[i].code;
            }
            _this.bomAdapter = rawData;
            _this.jqxLoader.close();
        }, function (error) {
            console.log(error);
            _this.jqxLoader.close();
        });
    };
    ProductionVoucherAddComponent.prototype.createForm = function () {
        this.pvForm = this.fb.group({
            'input_materials': this.fb.array([
                this.initMaterials(),
            ]),
            'output_materials': this.fb.array([
                this.initMaterials(),
            ])
        });
    };
    ProductionVoucherAddComponent.prototype.initMaterials = function () {
        return this.fb.group({
            item_name: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            item_id: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            qty: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            actual_qty: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            rate: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            value: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    /**
   * inputItemFilter Event is called when Item input field has
   * keyup action followed by 'Space'
   * Generate Remote Suggestion based on input value entered
   * @param searchString
   * @param index
   */
    ProductionVoucherAddComponent.prototype.inputItemFilter = function (searchPr, index) {
        var _this = this;
        var keycode = searchPr['keyCode'];
        if ((keycode == 40)) {
            document.getElementById('itemCode1').focus();
        }
        var searchString = searchPr['target'].value;
        var len = searchString.length;
        var dataString = searchString.substr(len - 1, len);
        var temp = searchString.replace(' ', '');
        temp = temp.replace(/\s/g, '');
        if (dataString == ' ' && temp.length > 2) {
            if (temp) {
                this.inputItemFocus[index] = true;
                this.ims.index({ code: temp, transact: 1, limit: 'all' }).subscribe(function (response) {
                    // console.log(response);
                    _this.inputItemAdapter[index] = [];
                    _this.inputItemAdapter[index] = response;
                    // console.log(this.inputItemAdapter);
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this.inputItemFocus[index] = false;
            }
        }
    };
    ProductionVoucherAddComponent.prototype.outputItemFilter = function (searchPr, index) {
        var _this = this;
        var keycode = searchPr['keyCode'];
        if ((keycode == 40)) {
            document.getElementById('itemCode2').focus();
        }
        var searchString = searchPr['target'].value;
        var len = searchString.length;
        var dataString = searchString.substr(len - 1, len);
        var temp = searchString.replace(' ', '');
        temp = temp.replace(/\s/g, '');
        if (dataString == ' ' && temp.length > 2) {
            if (temp) {
                this.outputItemFocus[index] = true;
                this.ims.index({ code: temp, transact: 1, limit: 'all' }).subscribe(function (response) {
                    _this.outputItemAdapter[index] = [];
                    _this.outputItemAdapter[index] = response;
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this.outputItemFocus[index] = false;
            }
        }
    };
    /**
     * Event fired when option is selected from Item Suggestion Select field
     * Hide Select field after Item Selected.
     * @param selectedValue
     * @param index
     */
    ProductionVoucherAddComponent.prototype.inputItemListSelected = function (selectedValue, index) {
        // console.log(selectedValue);
        if (selectedValue) {
            this.pvForm.get('input_materials')['controls'][index].get('item_id').patchValue(selectedValue.toFixed(2));
            // this.inputItemFocus[index] = false;
        }
    };
    ProductionVoucherAddComponent.prototype.outputItemListSelected = function (selectedValue, index) {
        // console.log(selectedValue);
        if (selectedValue) {
            this.pvForm.get('output_materials')['controls'][index].get('item_id').patchValue(selectedValue.toFixed(2));
            // this.outputItemFocus[index] = false;
        }
    };
    /**
     * Add FormGroup to Requisition Item FormArray
     * Increments   Item FormArray
     */
    ProductionVoucherAddComponent.prototype.addItem = function (arrayName) {
        var control1 = this.pvForm.controls[arrayName];
        control1.push(this.initMaterials());
        // console.log(control1.length);
    };
    /**
     * Remove FormGroup at particular position form Requisition Item FormArray
     * Decrements   Item FormArray
     */
    ProductionVoucherAddComponent.prototype.removeItem = function (i, arrayName) {
        var control1 = this.pvForm.controls[arrayName];
        control1.removeAt(i);
        /**
         * Remove itemAdapter itemArray at Particular position i,
         * Select Field option for select field at position 'i' of formArray
         */
        if (arrayName == 'output_materials') {
            this.outputItemAdapter.splice(i, 1);
        }
        else {
            this.inputItemAdapter.splice(i, 1);
        }
    };
    ProductionVoucherAddComponent.prototype.bomChange = function (event) {
        this.showDiv = true;
        this.pvForm.setControl('input_materials', this.fb.array([]));
        this.pvForm.setControl('output_materials', this.fb.array([]));
        this.currentInputArray = [];
        this.currentOutputArray = [];
        // console.log(event);
        var comboVal = this.bomComboBox.val() || null;
        if (comboVal) {
            var currentBomData = this.bomAdapter.filter(function (x) { return x.id == comboVal; })[0];
            var bomData = {};
            bomData['input_materials'] = [];
            bomData['output_materials'] = [];
            if (currentBomData && currentBomData.bom_items && currentBomData.bom_items.length > 0) {
                this.jqxLoader.open();
                for (var i = 0; i < currentBomData.bom_items.length; i++) {
                    var itemData = {};
                    itemData['qty'] = 0;
                    itemData['actual_qty'] = currentBomData.bom_items[i].qty || 0;
                    itemData['rate'] = 0;
                    itemData['value'] = 0;
                    itemData['item_id'] = currentBomData.bom_items[i].item_id;
                    itemData['item_name'] = currentBomData.bom_items[i].item && currentBomData.bom_items[i].item.name + ' (' + currentBomData.bom_items[i].item.code + ')';
                    if (currentBomData.bom_items[i].type == 1) {
                        bomData['input_materials'].push(itemData);
                        this.currentInputArray.push(currentBomData.bom_items[i]);
                        this.calculateValue(currentBomData.bom_items[i].item_id, 'input_materials', bomData['input_materials'].length - 1);
                    }
                    if (currentBomData.bom_items[i].type == 0) {
                        bomData['output_materials'].push(itemData);
                        this.currentOutputArray.push(currentBomData.bom_items[i]);
                        this.calculateValue(currentBomData.bom_items[i].item_id, 'output_materials', bomData['output_materials'].length - 1);
                    }
                }
                // console.log(this.currentInputArray);
                // console.log(this.currentOutputArray);
                // Creating formArray
                for (var i = 0; i < (this.currentInputArray.length); i++) {
                    this.addItem('input_materials');
                }
                // Creating formArray
                for (var i = 0; i < (this.currentOutputArray.length); i++) {
                    this.addItem('output_materials');
                }
                // console.log(bomData);
                this.pvForm.setValue(bomData);
                this.jqxLoader.close();
            }
        }
    };
    ProductionVoucherAddComponent.prototype.calculateValue = function (itemId, arrayName, inputIndex) {
        var _this = this;
        // console.log('item INdex : '+ inputIndex);
        // this.jqxLoader.open();
        var date = this.dateInput.val();
        this.ims.showItem(itemId, date).subscribe(function (response) {
            var itemRate = response && response['data'] && response['data'].rate.toFixed(2) || 0;
            _this.pvForm.get(arrayName)['controls'][inputIndex].get('rate').patchValue(itemRate);
            // console.log(response);
            // this.jqxLoader.close();
        }, function (error) {
            console.log('error');
            // this.jqxLoader.close();
        });
    };
    ProductionVoucherAddComponent.prototype.optRateChange = function (value, index) {
        var qty = this.pvForm.get('output_materials')['controls'][index].get('qty').value || 0;
        var rate = this.pvForm.get('output_materials')['controls'][index].get('rate').value || 0;
        var currentvalue = qty * rate;
        // console.log(currentvalue);
        this.pvForm.get('output_materials')['controls'][index].get('value').patchValue(currentvalue.toFixed(2));
        this.calculateTotal('output_materials');
    };
    ProductionVoucherAddComponent.prototype.inptRateChange = function (value, index) {
        this.getLabourCost(null, null);
        var qty = this.pvForm.get('input_materials')['controls'][index].get('qty').value || 0;
        var rate = this.pvForm.get('input_materials')['controls'][index].get('rate').value || 0;
        var currentvalue = qty * rate;
        // console.log(currentvalue);
        this.pvForm.get('input_materials')['controls'][index].get('value').patchValue(currentvalue.toFixed(2));
        // this.getLabourCost(null, null);
        this.calculateTotal('input_materials');
    };
    ProductionVoucherAddComponent.prototype.opQtyChange = function (value, index) {
        var length = this.pvForm.get('output_materials')['controls'].length;
        for (var i = 0; i < length; i++) {
            this.calculateRate(parseFloat(this.pvForm.get('output_materials')['controls'][i].get('value').value), parseFloat(this.pvForm.get('output_materials')['controls'][i].get('qty').value), i);
        }
        //this.optRateChange(value, index);
        if (value > 0) {
            //Get Current quantity qty at 'index' of output items
            // console.log('-------- CUrrent OP Item ---------- ');
            // console.log(this.currentOutputArray[index]);
            var outputQtyAtIndex = this.currentOutputArray[index].qty;
            // console.log('output quantity at' + index + ' :' + outputQtyAtIndex);
            //create current ratio
            this.currentRatio = Number(value) / outputQtyAtIndex;
            // console.log('current Ratio :' + this.currentRatio);
            for (var i = 0; i < this.currentOutputArray.length; i++) {
                if (i != index) {
                    // output value to be set in qty input field of Output Items
                    // console.log('---- Op Data '+ i +' ----');
                    // console.log(this.currentOutputArray[i]);
                    // console.log('is not number ratio : '+ isNaN(this.currentRatio));
                    // console.log('actual Qty: ' + this.currentOutputArray[i].qty);
                    var actualQuantity = parseFloat("0" + this.currentOutputArray[i].qty);
                    // console.log('is not number ratio : '+ isNaN(actualQuantity));
                    var currentOutputValue = this.currentRatio * actualQuantity;
                    // console.log('current OP Value :' + currentOutputValue);
                    // console.log('is not number OP value: '+ isNaN(currentOutputValue));
                    this.pvForm.get('output_materials')['controls'][i].get('qty').patchValue(currentOutputValue.toFixed(2));
                }
                //this.optRateChange(null, i);
            }
            //this.calculateTotal('output_materials');
            for (var i = 0; i < this.currentInputArray.length; i++) {
                // Input value to be set in qty input field of Input Items
                var currentInputValue = this.currentRatio * parseFloat("0" + this.currentInputArray[i].qty);
                // console.log('current IP Value :' + currentInputValue);
                this.pvForm.get('input_materials')['controls'][i].get('qty').patchValue(currentInputValue.toFixed(2));
                this.inptRateChange(null, i);
            }
            //this.calculateTotal('input_materials');
        }
    };
    /**
     *
     * Pass FormArray Name
     * @param arrayName
     */
    ProductionVoucherAddComponent.prototype.calculateTotal = function (arrayName) {
        var controlLength = this.pvForm.get(arrayName)['controls'].length;
        var controlTotal = 0;
        for (var i = 0; i < controlLength; i++) {
            controlTotal += parseFloat(this.pvForm.get(arrayName)['controls'][i].get('value').value);
        }
        this.valueTotal[arrayName] = controlTotal;
        // console.log(this.valueTotal);
    };
    /**
     * Check total Value of Input and Output items,
     * compares them and return boolean value based on condition.
     */
    ProductionVoucherAddComponent.prototype.checkTotalValidity = function () {
        var inputTotal = this.valueTotal && this.valueTotal['input_materials'] || null;
        var outputTotal = this.valueTotal && this.valueTotal['output_materials'] || null;
        if (inputTotal && (inputTotal > 0) && outputTotal && (outputTotal > 0) && inputTotal == outputTotal) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Function triggered when save button is clicked
     * @param formData
     */
    ProductionVoucherAddComponent.prototype.save = function (formData) {
        var _this = this;
        // console.log(formData);
        formData['date'] = this.dateInput.val();
        formData['bom_id'] = this.bomComboBox.val() || null;
        formData['store_id'] = this.storeComboBox.val() || null;
        //formData['labour_cost'] = this.labourCost;
        //formData['extraCost'] = this.exCost;
        formData['extraCost'] = this.extraCostForm.value['extraCost'];
        // formData['lot_no'] = '1/' + this.dateInput.val();
        if (formData['bom_id'] && formData['date'] && formData['store_id']) {
            formData['pvItems'] = [];
            for (var i = 0; i < formData['input_materials'].length; i++) {
                formData['input_materials'][i].type = 1;
                delete formData['input_materials'][i].item_name;
                formData['pvItems'].push(formData['input_materials'][i]);
            }
            for (var i = 0; i < formData['output_materials'].length; i++) {
                formData['output_materials'][i].type = 0;
                delete formData['output_materials'][i].item_name;
                formData['pvItems'].push(formData['output_materials'][i]);
            }
            // removing unwanted fields for formObject;
            delete formData['input_materials'];
            delete formData['output_materials'];
            // console.log(formData);
            this.jqxLoader.open();
            this.pvs.store(formData).subscribe(function (result) {
                var data = _this.ehs.formatError(result);
                // console.log(data);
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
                _this.jqxLoader.close();
                console.info(error);
            });
        }
        else {
            var messageDiv = document.getElementById('message');
            messageDiv.innerText = 'Select Bill of Material / Date';
            this.msgNotification.open();
            this.jqxLoader.close();
        }
    };
    ProductionVoucherAddComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    ProductionVoucherAddComponent.prototype.getLabourCost = function ($event, i) {
        var total = 0;
        this.extraCostForm.get('extraCost').value.forEach(function (result) {
            total += parseFloat(result.cost);
        });
        this.total = (parseFloat(this.valueTotal['input_materials']) + total).toFixed(2);
    };
    //extracost
    ProductionVoucherAddComponent.prototype.addExtraCost = function () {
        this.extraCost = this.extraCostForm.controls['extraCost'];
        this.extraCost.push(this.createFormGroupItems());
    };
    ProductionVoucherAddComponent.prototype.removeExtraCost = function (i) {
        this.extraCost.removeAt(i);
    };
    ProductionVoucherAddComponent.prototype.createFormGroupItems = function () {
        return this.fb.group({
            item_name: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            cost: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    ProductionVoucherAddComponent.prototype.optValueChange = function () {
        var length = this.pvForm.get('output_materials')['controls'].length;
        var totalValue = 0;
        for (var i = 0; i < length; i++) {
            totalValue += parseFloat(this.pvForm.get('output_materials')['controls'][i].get('value').value);
            this.calculateRate(this.pvForm.get('output_materials')['controls'][i].get('value').value, this.pvForm.get('output_materials')['controls'][i].get('qty').value, i);
        }
        this.valueTotal['output_materials'] = totalValue.toFixed(2);
    };
    ProductionVoucherAddComponent.prototype.calculateRate = function (value, quantity, i) {
        var rate = (parseFloat(value) / parseFloat(quantity)).toFixed(2);
        if (rate == "Infinity")
            this.pvForm.get('output_materials')['controls'][i].get('rate').patchValue(0);
        else
            this.pvForm.get('output_materials')['controls'][i].get('rate').patchValue(rate);
    };
    ProductionVoucherAddComponent.prototype.storeItemSelected = function ($event) {
        if (this.storeComboBox.val())
            this.storeSelected = true;
        else
            this.storeSelected = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], ProductionVoucherAddComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], ProductionVoucherAddComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _c || Object)
    ], ProductionVoucherAddComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _d || Object)
    ], ProductionVoucherAddComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bomComboBox'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _e || Object)
    ], ProductionVoucherAddComponent.prototype, "bomComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('storeComboBox'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _f || Object)
    ], ProductionVoucherAddComponent.prototype, "storeComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dateInput'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */]) === "function" && _g || Object)
    ], ProductionVoucherAddComponent.prototype, "dateInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProductionVoucherAddComponent.prototype, "AddedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProductionVoucherAddComponent.prototype, "cancelData", void 0);
    ProductionVoucherAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-production-voucher-add',
            template: __webpack_require__("./src/app/layout/inventory-master/production-voucher/production-voucher-add/production-voucher-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/production-voucher/production-voucher-add/production-voucher-add.component.scss")]
        }),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_2" /* ProductionVoucherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_2" /* ProductionVoucherService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* BillOfMaterialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* BillOfMaterialService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_14" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_14" /* StoreService */]) === "function" && _p || Object, String])
    ], ProductionVoucherAddComponent);
    return ProductionVoucherAddComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=production-voucher-add.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/production-voucher/production-voucher-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductionVoucherRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__production_voucher_component__ = __webpack_require__("./src/app/layout/inventory-master/production-voucher/production-voucher.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__production_voucher_component__["a" /* ProductionVoucherComponent */],
    }
];
var ProductionVoucherRoutingModule = /** @class */ (function () {
    function ProductionVoucherRoutingModule() {
    }
    ProductionVoucherRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ProductionVoucherRoutingModule);
    return ProductionVoucherRoutingModule;
}());

//# sourceMappingURL=production-voucher-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/production-voucher/production-voucher-view/production-voucher-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"head\">\r\n      <table class=\"table table-bordered\">\r\n        <tr>\r\n          <td>\r\n            Lot Number\r\n          </td>\r\n          <td>\r\n            {{ pvData.lot_no }}\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            Date\r\n          </td>\r\n          <td>\r\n            {{ pvData.date }}\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <table class=\"table table-bordered\">\r\n        <tr style=\"background: #d6d8d2;\">\r\n          <th>Item Name</th>\r\n          <th>Quantity</th>\r\n          <th>Rate</th>\r\n          <th>Total Value</th>\r\n          <th>Actual Quantity</th>\r\n          <th>Type</th>\r\n        </tr>\r\n        <tbody *ngIf=\"pvData.pv_items.length > 0\">\r\n          <tr *ngFor=\"let item of pvData.pv_items\">\r\n            <td>\r\n              <span>{{ item?.item?.name }}</span>\r\n            </td>\r\n            <td>\r\n              {{ item.qty }}\r\n            </td>\r\n            <td>\r\n              {{ item.rate }}\r\n            </td>\r\n            <td>\r\n              {{ item.value }}\r\n            </td>\r\n            <td>\r\n              {{ item.actual_qty }}\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"item.type == 1\">Input</span>\r\n              <span *ngIf=\"item.type == 0\">Output</span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody *ngIf=\"pvData.pv_items.length < 1\">\r\n          <tr>\r\n            <td colspan=\"3\" class=\"text-center\">\r\n              No Items\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <hr>\r\n      <label>\r\n        <h5>Extra Expenses</h5>\r\n      </label>\r\n      <table class=\"table table-bordered\">\r\n        <tr style=\"font-weight: 600; background: #d6d8d2;\">\r\n          <td>Item Name</td>\r\n          <td>Cost</td>\r\n        </tr>\r\n        <tr *ngFor=\"let expenses of pvData.pv_expenses\">\r\n          <td>{{expenses.item_name}}</td>\r\n          <td>{{expenses.cost}}</td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/inventory-master/production-voucher/production-voucher-view/production-voucher-view.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/production-voucher/production-voucher-view/production-voucher-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductionVoucherViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductionVoucherViewComponent = /** @class */ (function () {
    function ProductionVoucherViewComponent() {
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProductionVoucherViewComponent.prototype.ngOnInit = function () {
        this.pvData = this.ViewData;
    };
    ProductionVoucherViewComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProductionVoucherViewComponent.prototype, "cancelData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ViewData'),
        __metadata("design:type", Object)
    ], ProductionVoucherViewComponent.prototype, "ViewData", void 0);
    ProductionVoucherViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-production-voucher-view',
            template: __webpack_require__("./src/app/layout/inventory-master/production-voucher/production-voucher-view/production-voucher-view.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/production-voucher/production-voucher-view/production-voucher-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductionVoucherViewComponent);
    return ProductionVoucherViewComponent;
}());

//# sourceMappingURL=production-voucher-view.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/production-voucher/production-voucher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 tfm-panel-left\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                    <h2> Quick Access </h2>\r\n                </div>\r\n                <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                    <ng-template #quickAccess></ng-template>\r\n                </jqxPanel>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-10 tfm-panel-right\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                    <h2>Production Voucher</h2>\r\n                </div>\r\n                <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                    <jqxGrid #myGrid [width]=\"'99.8%'\" [height]=\"'100%'\" [source]=\"dataAdapter\" [sortable]=\"true\"\r\n                        [filterable]=\"true\" [pageable]=\"true\" [columns]=\"columns\" [theme]=\"'energyblue'\" [showtoolbar]=\"true\"\r\n                        [rendertoolbar]=\"rendertoolbar\" [selectionmode]=\"'checkbox'\" [showfilterrow]=\"true\"\r\n                        [virtualmode]=\"true\" [rendergridrows]=\"rendergridrows\">\r\n                    </jqxGrid>\r\n                </jqxPanel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<jqxWindow #myWindow [width]=\"'100%'\" [height]=\"'90%'\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n    <div id=\"windowContent\">\r\n        <ng-template #Insert></ng-template>\r\n    </div>\r\n</jqxWindow>\r\n<jqxNotification #msgNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n    [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\" [theme]=\"'energyblue'\">\r\n    <div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\"\r\n    [autoOpen]=\"false\" [autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n    <div id='listingMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/production-voucher/production-voucher.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/production-voucher/production-voucher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductionVoucherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__production_voucher_add_production_voucher_add_component__ = __webpack_require__("./src/app/layout/inventory-master/production-voucher/production-voucher-add/production-voucher-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__production_voucher_view_production_voucher_view_component__ = __webpack_require__("./src/app/layout/inventory-master/production-voucher/production-voucher-view/production-voucher-view.component.ts");
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








var ProductionVoucherComponent = /** @class */ (function () {
    function ProductionVoucherComponent(componentFactoryResolver, apiUrl, fileExport, cus, bom) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.fileExport = fileExport;
        this.cus = cus;
        this.bom = bom;
        this.editrow = -1;
        this.report = false;
        this.userData = {};
        this.rendergridrows = function (params) {
            // console.log(params);
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
            container.appendChild(buttonContainer3);
            container.appendChild(buttonContainer2);
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
                _this.myWindow.title('Add Production Voucher');
                _this.myWindow.open();
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__production_voucher_add_production_voucher_add_component__["a" /* ProductionVoucherAddComponent */]);
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
                        _this.bom.destroy('[' + ids + ']').subscribe(function (data) {
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
        this.userData = this.cus.getTokenData();
    }
    ProductionVoucherComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
        this.createGridData();
    };
    ProductionVoucherComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    ProductionVoucherComponent.prototype.createGridData = function () {
        var _this = this;
        var myUrl = this.apiUrl + 'pv';
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'string' },
                    { name: 'lot_no', type: 'string' },
                    { name: 'date', type: 'string' },
                    { name: 'bom_name', type: 'string', map: 'bom_master>name' },
                    { name: 'bom_master' },
                    { name: 'pv_items' },
                    { name: 'bom_id' },
                    { name: 'pv_expenses' }
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
                // console.log(data);
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
                { text: 'Lot No.', datafield: 'lot_no', columntype: 'textbox', filtertype: 'range', width: 240, filterable: false, sortable: false, editable: false },
                { text: 'Date', datafield: 'date', columntype: 'textbox', filterable: false, sortable: false, editable: false },
                { text: 'BOM Name', datafield: 'bom_name', columntype: 'textbox', filterable: false, sortable: false, editable: false },
                {
                    text: 'Actions', datafield: 'View', columntype: 'button', sortable: false, filterable: false, width: 70,
                    cellsrenderer: function () {
                        return 'View';
                    },
                    buttonclick: function (row) {
                        _this.editrow = row;
                        var dataRecord = _this.myGrid.getrowdata(_this.editrow);
                        _this.myWindow.draggable(true);
                        _this.myWindow.title('View Production Voucher Items');
                        _this.myWindow.open();
                        var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_7__production_voucher_view_production_voucher_view_component__["a" /* ProductionVoucherViewComponent */]);
                        _this.Insert.clear();
                        var dynamic_Component = _this.Insert.createComponent(componentFactory);
                        dynamic_Component.instance.ViewData = dataRecord;
                        dynamic_Component.instance.cancelData.subscribe(function (result) {
                            if (result == true) {
                                _this.myWindow.hide();
                                dynamic_Component.destroy();
                            }
                        });
                    }
                },
            ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], ProductionVoucherComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _b || Object)
    ], ProductionVoucherComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _c || Object)
    ], ProductionVoucherComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _d || Object)
    ], ProductionVoucherComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _e || Object)
    ], ProductionVoucherComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Insert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object)
    ], ProductionVoucherComponent.prototype, "Insert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object)
    ], ProductionVoucherComponent.prototype, "quickAccess", void 0);
    ProductionVoucherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-production-voucher',
            template: __webpack_require__("./src/app/layout/inventory-master/production-voucher/production-voucher.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/production-voucher/production-voucher.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _h || Object, String, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["E" /* FileExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["E" /* FileExportService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["l" /* BillOfMaterialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["l" /* BillOfMaterialService */]) === "function" && _l || Object])
    ], ProductionVoucherComponent);
    return ProductionVoucherComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=production-voucher.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/production-voucher/production-voucher.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionVoucherModule", function() { return ProductionVoucherModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__production_voucher_component__ = __webpack_require__("./src/app/layout/inventory-master/production-voucher/production-voucher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__production_voucher_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/production-voucher/production-voucher-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__production_voucher_add_production_voucher_add_component__ = __webpack_require__("./src/app/layout/inventory-master/production-voucher/production-voucher-add/production-voucher-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__production_voucher_view_production_voucher_view_component__ = __webpack_require__("./src/app/layout/inventory-master/production-voucher/production-voucher-view/production-voucher-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProductionVoucherModule = /** @class */ (function () {
    function ProductionVoucherModule() {
    }
    ProductionVoucherModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__production_voucher_routing_module__["a" /* ProductionVoucherRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__production_voucher_component__["a" /* ProductionVoucherComponent */],
                __WEBPACK_IMPORTED_MODULE_5__production_voucher_add_production_voucher_add_component__["a" /* ProductionVoucherAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__production_voucher_view_production_voucher_view_component__["a" /* ProductionVoucherViewComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__production_voucher_add_production_voucher_add_component__["a" /* ProductionVoucherAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__production_voucher_view_production_voucher_view_component__["a" /* ProductionVoucherViewComponent */]
            ]
        })
    ], ProductionVoucherModule);
    return ProductionVoucherModule;
}());

//# sourceMappingURL=production-voucher.module.js.map

/***/ })

});
//# sourceMappingURL=production-voucher.module.chunk.js.map