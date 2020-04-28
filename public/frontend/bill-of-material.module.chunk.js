webpackJsonp(["bill-of-material.module"],{

/***/ "./src/app/layout/inventory-master/bill-of-material/bill-of-material-add/bill-of-material-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n  <form name=\"bomForm\" [formGroup]=\"bomForm\">\r\n    <table>\r\n      <tr>\r\n        <td>Code *</td>\r\n        <td>\r\n          <input class=\"code form-control\" name=\"code\" formControlName=\"code\">\r\n        </td>\r\n        <td>Name *</td>\r\n        <td>\r\n          <input class=\"name form-control\" name=\"name\" formControlName=\"name\">\r\n        </td>\r\n        <td>Status *</td>\r\n        <td>\r\n          <select formControlName=\"status\" class=\"form-control\">\r\n            <option [value]='1'>Enabled</option>\r\n            <option [value]='0'>Disabled</option>\r\n          </select>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"rs-grid-panel bg-white\">\r\n          <fieldset>\r\n            <legend>Input Items</legend>\r\n            <a (click)=\"addItem('input_materials')\" class=\"btn btn-sm btn-primary px-btn\">\r\n              <i class=\"fa fa-fw fa-plus\" aria-hidden=\"true\"></i> Add</a>\r\n            <div formArrayName=\"input_materials\">\r\n              <div class=\"row row-head\">\r\n                <div class=\"col-md-5\">\r\n                  <p>Item</p>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                  <p>Quantity</p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <p>Action</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-array-container\" #inputContainer>\r\n                <div *ngFor=\"let material of bomForm.get('input_materials')['controls']; let i = index\" class=\"form-array-container-inner\">\r\n                  <div class=\"row p-1 row-body\" [formGroupName]=\"i\">\r\n                    <div class=\"col-md-5\">\r\n                      <input type=\"text\" formControlName=\"item_id\" class=\"px-control\" placeholder=\"Item\" hidden>\r\n                      <input type=\"text\" (keyup)=\"inputItemFilter($event, i)\" formControlName=\"item_name\" class=\"px-control\" placeholder=\"Enter Item Code\">\r\n                      <span *ngIf=\"inputItemFocus[i]\" class=\"px-select-container\">\r\n                        <select (change)=\"inputItemListSelected($event, i)\" (blur)=\"inputItemFocus[i] = false;\" size=\"5\" name=\"item_id\" class=\"px-control px-select-list\"\r\n                          id=\"itemCode1\">\r\n                          <option *ngFor='let item of inputItemAdapter[i]' [value]=\"item.id\">{{ item.name }}</option>\r\n                        </select>\r\n                      </span>\r\n                      <small [hidden]=\"material['controls'].item_id.valid || !material['controls'].item_id.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                        * required\r\n                      </small>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                      <input type=\"text\" formControlName=\"qty\" class=\"px-control\" placeholder=\"Quantity\">\r\n                      <small [hidden]=\"material['controls'].qty.valid || !material['controls'].qty.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                        * required\r\n                      </small>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <button type=\"button\" (click)=\"addItem('input_materials')\" class=\"btn btn-sm btn-info\">\r\n                        <i class=\"fa fa-plus fa-fw\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                      <button type=\"button\" (click)=\"removeItem(i,'input_materials')\" class=\"btn btn-sm btn-danger\" [disabled]=\"bomForm.get('input_materials').length < 2\">\r\n                        <i class=\"fa fa-times fa-fw\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-5 new-col-md-5\">\r\n        <div class=\"rs-grid-panel bg-white\">\r\n          <fieldset>\r\n            <legend>Output Items</legend>\r\n            <a (click)=\"addItem('output_materials')\" class=\"btn btn-sm btn-primary px-btn\">\r\n              <i class=\"fa fa-fw fa-plus\" aria-hidden=\"true\"></i> Add</a>\r\n            <div formArrayName=\"output_materials\">\r\n              <div class=\"row row-head\">\r\n                <div class=\"col-md-5\">\r\n                  <p>Item</p>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                  <p>Quantity</p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <p>Action</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-array-container\" #outputContainer>\r\n                <div *ngFor=\"let material of bomForm.get('output_materials')['controls']; let i = index\" class=\"form-array-container-inner\">\r\n                  <div class=\"row p-1 row-body\" [formGroupName]=\"i\">\r\n                    <div class=\"col-md-5\">\r\n                      <input type=\"text\" formControlName=\"item_id\" class=\"px-control\" placeholder=\"Item\" hidden>\r\n                      <input type=\"text\" (keyup)=\"outputItemFilter($event, i)\" formControlName=\"item_name\" class=\"px-control\" placeholder=\"Enter Item Code\">\r\n                      <span *ngIf=\"outputItemFocus[i]\" class=\"px-select-container\">\r\n                        <select (change)=\"outputItemListSelected($event, i)\" (blur)=\"outputItemFocus[i] = false;\" size=\"5\" name=\"item_id\" class=\"px-control px-select-list\"\r\n                          id=\"itemCode2\">\r\n                          <option *ngFor='let item of outputItemAdapter[i]' [value]=\"item.id\">{{ item.name }}</option>\r\n                        </select>\r\n                      </span>\r\n                      <small [hidden]=\"material['controls'].item_id.valid || !material['controls'].item_id.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                        * required\r\n                      </small>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                      <input type=\"text\" formControlName=\"qty\" class=\"px-control\" placeholder=\"Quantity\">\r\n                      <small [hidden]=\"material['controls'].qty.valid || !material['controls'].qty.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                        * required\r\n                      </small>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <button type=\"button\" (click)=\"addItem('output_materials')\" class=\"btn btn-sm btn-info\">\r\n                        <i class=\"fa fa-plus fa-fw\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                      <button type=\"button\" (click)=\"removeItem(i,'output_materials')\" class=\"btn btn-sm btn-danger\" [disabled]=\"bomForm.get('output_materials').length < 2\">\r\n                        <i class=\"fa fa-times fa-fw\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<jqxWindow #eventWindow (onClose)=\"eventWindowClose($event)\" [width]=\"270\" [height]=\"180\" [maxHeight]=\"160\" [maxWidth]=\"340\"\r\n  [minHeight]=\"30\" [minWidth]=\"300\" [isModal]=\"true\" [modalOpacity]=\"0.3\" [cancelButton]=\"'.cancel'\" [okButton]=\"'.ok'\" [resizable]=\"false\"\r\n  [showCloseButton]=\"false\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n  <div>\r\n    <i class=\"fa fa-question-circle fa-fw\"></i>\r\n    Confirm Entry\r\n  </div>\r\n  <div>\r\n    <div>\r\n      You cannot edit once saved. Please confirm and continue.\r\n      <br>\r\n      <small>(Entered data will be saved if you click 'OK', Press 'Cancel' to recheck data)</small>\r\n    </div>\r\n    <div style=\"float: right; margin-top: 15px;\">\r\n      <div style=\"float: right;\">\r\n        <jqxButton #okButton class=\"ok\" style=\"display: inline-block; margin-right: 10px;\" [width]=\"80\" [theme]=\"'energyblue'\">\r\n          OK\r\n        </jqxButton>\r\n        <jqxButton #cancelButton class=\"cancel\" style=\"display: inline-block;\" [width]=\"80\" [theme]=\"'energyblue'\">\r\n          Cancel\r\n        </jqxButton>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jqxWindow>\r\n\r\n<div style=\"padding-top: 10px; text-align:center;\">\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" [disabled]=\"!bomForm.valid\" (onClick)=\"confirmSave()\">\r\n    Save\r\n  </jqxButton>\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"cancelBtn()\">\r\n    Cancel\r\n  </jqxButton>\r\n</div>\r\n\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>\r\n<jqxNotification #msgNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n  [autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n  <div id='message'></div>\r\n</jqxNotification>\r\n\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n  [autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n  <div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/bill-of-material/bill-of-material-add/bill-of-material-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/bill-of-material/bill-of-material-add/bill-of-material-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillOfMaterialAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
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







var BillOfMaterialAddComponent = /** @class */ (function () {
    function BillOfMaterialAddComponent(fb, ehs, cus, ims, boms, apiUrl) {
        this.fb = fb;
        this.ehs = ehs;
        this.cus = cus;
        this.ims = ims;
        this.boms = boms;
        this.AddedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.inputItemAdapter = [];
        this.inputItemFocus = [];
        this.outputItemAdapter = [];
        this.outputItemFocus = [];
        this.apiUrl = apiUrl;
        this.createForm();
    }
    BillOfMaterialAddComponent.prototype.ngOnInit = function () {
    };
    BillOfMaterialAddComponent.prototype.createForm = function () {
        this.bomForm = this.fb.group({
            'code': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'status': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'input_materials': this.fb.array([
                this.initMaterials(),
            ]),
            'output_materials': this.fb.array([
                this.initMaterials(),
            ])
        });
    };
    BillOfMaterialAddComponent.prototype.initMaterials = function () {
        return this.fb.group({
            item_id: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            item_name: [null],
            qty: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    };
    /**
   * inputItemFilter Event is called when Item input field has
   * keyup action followed by 'Enter'
   * Generate Suggestion based on input value entered
   * @param searchString
   * @param index
   */
    BillOfMaterialAddComponent.prototype.inputItemFilter = function (searchPr, index) {
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
        if (dataString == ' ' && temp.length > 1) {
            if (temp) {
                this.inputItemFocus[index] = true;
                this.scrollToBottom('inputContainer');
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
    BillOfMaterialAddComponent.prototype.outputItemFilter = function (searchPr, index) {
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
        if (dataString == ' ' && temp.length > 1) {
            if (temp) {
                this.outputItemFocus[index] = true;
                this.scrollToBottom('outputContainer');
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
     * @param selectedEvent
     * @param index
     */
    BillOfMaterialAddComponent.prototype.inputItemListSelected = function (selectedEvent, index) {
        // console.log(selectedEvent);
        if (selectedEvent && selectedEvent.target && selectedEvent.target.value) {
            var displayText = selectedEvent.target.selectedOptions[0].text;
            this.bomForm.get('input_materials')['controls'][index].get('item_id').patchValue(selectedEvent.target.value);
            this.bomForm.get('input_materials')['controls'][index].get('item_name').patchValue(displayText);
            this.inputItemFocus[index] = false;
        }
    };
    BillOfMaterialAddComponent.prototype.outputItemListSelected = function (selectedEvent, index) {
        // console.log(selectedEvent);
        if (selectedEvent && selectedEvent.target && selectedEvent.target.value) {
            var displayText = selectedEvent.target.selectedOptions[0].text;
            this.bomForm.get('output_materials')['controls'][index].get('item_id').patchValue(selectedEvent.target.value);
            this.bomForm.get('output_materials')['controls'][index].get('item_name').patchValue(displayText);
            this.outputItemFocus[index] = false;
        }
    };
    /**
     * Add FormGroup to Requisition Item FormArray
     * Increments Requestion Item FormArray
     */
    BillOfMaterialAddComponent.prototype.addItem = function (arrayName) {
        var control1 = this.bomForm.controls[arrayName];
        control1.push(this.initMaterials());
        // console.log(control1.length);
    };
    /**
     * Remove FormGroup at particular position form Requisition Item FormArray
     * Decrements Requestion Item FormArray
     */
    BillOfMaterialAddComponent.prototype.removeItem = function (i, arrayName) {
        var control1 = this.bomForm.controls[arrayName];
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
    /**
     * Open Modal window to confirm before
     * saving form data
     */
    BillOfMaterialAddComponent.prototype.confirmSave = function () {
        this.eventWindow.open();
    };
    /**
     * Event Triggered when confirm modal is closed.
     * @param event
     */
    BillOfMaterialAddComponent.prototype.eventWindowClose = function (event) {
        // console.log(event);
        if (event.type === 'close') {
            if (event.args.dialogResult.OK) {
                // console.log('OK Pressed');
                this.store();
            }
            else if (event.args.dialogResult.Cancel) {
                // console.log('Cancel Pressed');
            }
        }
    };
    BillOfMaterialAddComponent.prototype.scrollToBottom = function (containerName) {
        var _this = this;
        try {
            setTimeout(function () {
                if (containerName == 'inputContainer') {
                    _this.inputContainer.nativeElement.scrollTop = _this.inputContainer.nativeElement.scrollHeight;
                }
                else {
                    _this.outputContainer.nativeElement.scrollTop = _this.outputContainer.nativeElement.scrollHeight;
                }
            }, 100);
        }
        catch (err) {
            console.log(err);
        }
    };
    /**
     * Function triggered when save is confirmed
     * @param formData
     */
    BillOfMaterialAddComponent.prototype.store = function () {
        var _this = this;
        var formData = this.bomForm.getRawValue();
        formData['bomItems'] = [];
        for (var i = 0; i < formData['input_materials'].length; i++) {
            formData['input_materials'][i].type = 1;
            formData['bomItems'].push(formData['input_materials'][i]);
        }
        for (var i = 0; i < formData['output_materials'].length; i++) {
            formData['output_materials'][i].type = 0;
            formData['bomItems'].push(formData['output_materials'][i]);
        }
        // console.log(formData);
        this.jqxLoader.open();
        this.boms.store(formData).subscribe(function (result) {
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
            _this.jqxLoader.close();
            console.info(error);
        });
    };
    BillOfMaterialAddComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], BillOfMaterialAddComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], BillOfMaterialAddComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _c || Object)
    ], BillOfMaterialAddComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _d || Object)
    ], BillOfMaterialAddComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('eventWindow'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _e || Object)
    ], BillOfMaterialAddComponent.prototype, "eventWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputContainer'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object)
    ], BillOfMaterialAddComponent.prototype, "inputContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('outputContainer'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _g || Object)
    ], BillOfMaterialAddComponent.prototype, "outputContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], BillOfMaterialAddComponent.prototype, "AddedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], BillOfMaterialAddComponent.prototype, "cancelData", void 0);
    BillOfMaterialAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bill-of-material-add',
            template: __webpack_require__("./src/app/layout/inventory-master/bill-of-material/bill-of-material-add/bill-of-material-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/bill-of-material/bill-of-material-add/bill-of-material-add.component.scss")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* BillOfMaterialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* BillOfMaterialService */]) === "function" && _m || Object, String])
    ], BillOfMaterialAddComponent);
    return BillOfMaterialAddComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=bill-of-material-add.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/bill-of-material/bill-of-material-edit/bill-of-material-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n  <form name=\"bomForm\" [formGroup]=\"bomForm\">\r\n    <table>\r\n      <tr>\r\n        <td>Code *</td>\r\n        <td>\r\n          <input class=\"code form-control\" name=\"code\" formControlName=\"code\">\r\n        </td>\r\n        <td>Name *</td>\r\n        <td>\r\n          <input class=\"name form-control\" name=\"name\" formControlName=\"name\">\r\n        </td>\r\n        <td>Status *</td>\r\n        <td>\r\n          <select formControlName=\"status\" class=\"form-control\">\r\n            <option [value]='1'>Enabled</option>\r\n            <option [value]='0'>Disabled</option>\r\n          </select>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"rs-grid-panel bg-white\">\r\n          <fieldset>\r\n            <legend>Input Items</legend>\r\n            <!-- <a (click)=\"addItem('input_materials')\" class=\"btn btn-sm btn-primary px-btn\">\r\n              <i class=\"fa fa-fw fa-plus\" aria-hidden=\"true\"></i> Add</a> -->\r\n            <div formArrayName=\"input_materials\">\r\n              <div class=\"row row-head\">\r\n                <div class=\"col-md-5\">\r\n                  <p>Item</p>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                  <p>Quantity</p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <p>Action</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-array-container\">\r\n                <div *ngFor=\"let material of bomForm.get('input_materials')['controls']; let i = index\" class=\"form-array-container-inner\">\r\n                  <div class=\"row p-1 row-body\" [formGroupName]=\"i\">\r\n                    <div class=\"col-md-5\">\r\n                        <input type=\"text\" formControlName=\"item_id\" class=\"px-control\" placeholder=\"Item\" hidden>\r\n                        <input type=\"text\" (keyup)=\"inputItemFilter($event, i)\" formControlName=\"item_name\" class=\"px-control\" placeholder=\"Enter Item Code\">\r\n                      <span *ngIf=\"inputItemFocus[i]\" class=\"px-select-container\">\r\n                        <select (change)=\"inputItemListSelected($event, i)\" (blur)=\"inputItemFocus[i] = false;\" size=\"5\" name=\"item_id\"\r\n                          class=\"px-control px-select-list\" id=\"itemCode1\">\r\n                          <option *ngFor='let item of inputItemAdapter[i]' [value]=\"item.id\">{{ item.name }}</option>\r\n                        </select>\r\n                      </span>\r\n                      <small [hidden]=\"material['controls'].item_id.valid || !material['controls'].item_id.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                        * required\r\n                      </small>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                      <input type=\"text\" formControlName=\"qty\" class=\"px-control\" placeholder=\"Quantity\">\r\n                      <small [hidden]=\"material['controls'].qty.valid || !material['controls'].qty.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                        * required\r\n                      </small>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <button type=\"button\" (click)=\"removeItem(i,'input_materials')\" class=\"btn btn-sm btn-danger\" [attr.disabled]=\"true\">\r\n                        <i class=\"fa fa-times fa-fw\" aria-hidden=\"true\"></i> Delete\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-5 new-col-md-5\">\r\n        <div class=\"rs-grid-panel bg-white\">\r\n          <fieldset>\r\n            <legend>Output Items</legend>\r\n            <!-- <a (click)=\"addItem('output_materials')\" class=\"btn btn-sm btn-primary px-btn\">\r\n              <i class=\"fa fa-fw fa-plus\" aria-hidden=\"true\"></i> Add</a> -->\r\n            <div formArrayName=\"output_materials\">\r\n              <div class=\"row row-head\">\r\n                <div class=\"col-md-5\">\r\n                  <p>Item</p>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                  <p>Quantity</p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <p>Action</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-array-container\">\r\n                <div *ngFor=\"let material of bomForm.get('output_materials')['controls']; let i = index\" class=\"form-array-container-inner\">\r\n                  <div class=\"row p-1 row-body\" [formGroupName]=\"i\">\r\n                    <div class=\"col-md-5\">\r\n                      <input type=\"text\" formControlName=\"item_id\" class=\"px-control\" placeholder=\"Item\" hidden>\r\n                      <input type=\"text\" (keyup)=\"outputItemFilter($event, i)\" formControlName=\"item_name\" class=\"px-control\" placeholder=\"Enter Item Code\">\r\n                      <span *ngIf=\"outputItemFocus[i]\" class=\"px-select-container\">\r\n                        <select (change)=\"outputItemListSelected($event, i)\" (blur)=\"outputItemFocus[i] = false;\" size=\"5\" name=\"item_id\"\r\n                          class=\"px-control px-select-list\" id=\"itemCode2\">\r\n                          <option *ngFor='let item of outputItemAdapter[i]' [value]=\"item.id\">{{ item.name }}</option>\r\n                        </select>\r\n                      </span>\r\n                      <small [hidden]=\"material['controls'].item_id.valid || !material['controls'].item_id.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                        * required\r\n                      </small>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                      <input type=\"text\" formControlName=\"qty\" class=\"px-control\" placeholder=\"Quantity\">\r\n                      <small [hidden]=\"material['controls'].qty.valid || !material['controls'].qty.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                        * required\r\n                      </small>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <button type=\"button\" (click)=\"removeItem(i,'output_materials')\" class=\"btn btn-sm btn-danger\" [attr.disabled]=\"true\">\r\n                        <i class=\"fa fa-times fa-fw\" aria-hidden=\"true\"></i> Delete\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div style=\"padding-top: 10px; text-align:center;\">\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" [disabled]=\"!bomForm.valid\" (onClick)=\"save(bomForm.value)\">\r\n    Save\r\n  </jqxButton>\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"cancelBtn()\">\r\n    Cancel\r\n  </jqxButton>\r\n</div>\r\n\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>\r\n<jqxNotification #msgNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n  [autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n  <div id='message'></div>\r\n</jqxNotification>\r\n\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n  [autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n  <div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/bill-of-material/bill-of-material-edit/bill-of-material-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/bill-of-material/bill-of-material-edit/bill-of-material-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillOfMaterialEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
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






var BillOfMaterialEditComponent = /** @class */ (function () {
    function BillOfMaterialEditComponent(fb, ehs, cus, ims, boms, cdr, apiUrl) {
        this.fb = fb;
        this.ehs = ehs;
        this.cus = cus;
        this.ims = ims;
        this.boms = boms;
        this.cdr = cdr;
        this.UpdatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.inputItemAdapter = [];
        this.inputItemFocus = [];
        this.outputItemAdapter = [];
        this.outputItemFocus = [];
        this.apiUrl = apiUrl;
        this.createForm();
    }
    BillOfMaterialEditComponent.prototype.ngOnInit = function () {
        // console.log(this.EditData);
        // this.bomForm.setValue(this.EditData);
    };
    BillOfMaterialEditComponent.prototype.ngAfterViewInit = function () {
        var bomData = {};
        bomData['code'] = this.EditData.code;
        bomData['name'] = this.EditData.name;
        bomData['status'] = this.EditData.status;
        bomData['input_materials'] = [];
        bomData['output_materials'] = [];
        this.bomForm.setControl('input_materials', this.fb.array([]));
        this.bomForm.setControl('output_materials', this.fb.array([]));
        if (this.EditData && this.EditData.bom_items) {
            for (var i = 0; i < this.EditData.bom_items.length; i++) {
                var itemData = {};
                itemData['qty'] = this.EditData.bom_items[i].qty || 0;
                itemData['item_id'] = this.EditData.bom_items[i].item_id;
                itemData['item_name'] = this.EditData.bom_items[i].item && this.EditData.bom_items[i].item.name || '';
                if (this.EditData.bom_items[i].type == 1) {
                    bomData['input_materials'].push(itemData);
                }
                if (this.EditData.bom_items[i].type == 0) {
                    bomData['output_materials'].push(itemData);
                }
            }
        }
        // Creating formArray
        for (var i = 0; i < (bomData['input_materials'].length); i++) {
            this.addItem('input_materials');
        }
        // Creating formArray
        for (var i = 0; i < (bomData['output_materials'].length); i++) {
            this.addItem('output_materials');
        }
        // console.log(bomData);
        this.bomForm.setValue(bomData);
        this.bomForm.get('name').disable();
        this.bomForm.get('code').disable();
        this.bomForm.get('input_materials').disable();
        this.bomForm.get('output_materials').disable();
        this.cdr.detectChanges();
    };
    BillOfMaterialEditComponent.prototype.createForm = function () {
        this.bomForm = this.fb.group({
            'code': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'status': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'input_materials': this.fb.array([
                this.initMaterials(),
            ]),
            'output_materials': this.fb.array([
                this.initMaterials(),
            ])
        });
    };
    BillOfMaterialEditComponent.prototype.initMaterials = function () {
        return this.fb.group({
            item_id: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            item_name: [null],
            qty: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    };
    /**
   * inputItemFilter Event is called when Item input field has
   * keyup action followed by 'Enter'
   * Generate Suggestion based on input value entered
   * @param searchString
   * @param index
   */
    BillOfMaterialEditComponent.prototype.inputItemFilter = function (searchPr, index) {
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
    BillOfMaterialEditComponent.prototype.outputItemFilter = function (searchPr, index) {
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
     * @param selectedEvent
     * @param index
     */
    BillOfMaterialEditComponent.prototype.inputItemListSelected = function (selectedEvent, index) {
        // console.log(selectedEvent);
        if (selectedEvent && selectedEvent.target && selectedEvent.target.value) {
            var displayText = selectedEvent.target.selectedOptions[0].text;
            this.bomForm.get('input_materials')['controls'][index].get('item_id').patchValue(selectedEvent.target.value);
            this.bomForm.get('input_materials')['controls'][index].get('item_name').patchValue(displayText);
            this.inputItemFocus[index] = false;
        }
    };
    BillOfMaterialEditComponent.prototype.outputItemListSelected = function (selectedEvent, index) {
        // console.log(selectedEvent);
        if (selectedEvent && selectedEvent.target && selectedEvent.target.value) {
            var displayText = selectedEvent.target.selectedOptions[0].text;
            this.bomForm.get('output_materials')['controls'][index].get('item_id').patchValue(selectedEvent.target.value);
            this.bomForm.get('output_materials')['controls'][index].get('item_name').patchValue(displayText);
            this.outputItemFocus[index] = false;
        }
    };
    /**
     * Add FormGroup to Requisition Item FormArray
     * Increments Requestion Item FormArray
     */
    BillOfMaterialEditComponent.prototype.addItem = function (arrayName) {
        var control1 = this.bomForm.controls[arrayName];
        control1.push(this.initMaterials());
        // console.log(control1.length);
    };
    /**
     * Remove FormGroup at particular position form Requisition Item FormArray
     * Decrements Requestion Item FormArray
     */
    BillOfMaterialEditComponent.prototype.removeItem = function (i, arrayName) {
        var control1 = this.bomForm.controls[arrayName];
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
    /**
     * Function triggered when save button is clicked
     * @param formData
     */
    BillOfMaterialEditComponent.prototype.save = function (formData) {
        var _this = this;
        formData = this.bomForm.getRawValue();
        // console.log(formData);
        formData['bomItems'] = [];
        for (var i = 0; i < formData['input_materials'].length; i++) {
            formData['input_materials'][i].type = 1;
            formData['bomItems'].push(formData['input_materials'][i]);
        }
        for (var i = 0; i < formData['output_materials'].length; i++) {
            formData['output_materials'][i].type = 0;
            formData['bomItems'].push(formData['output_materials'][i]);
        }
        // console.log(formData);
        this.jqxLoader.open();
        this.boms.update(this.EditData.id, formData).subscribe(function (result) {
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
            _this.jqxLoader.close();
            console.info(error);
        });
    };
    BillOfMaterialEditComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], BillOfMaterialEditComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _b || Object)
    ], BillOfMaterialEditComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _c || Object)
    ], BillOfMaterialEditComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _d || Object)
    ], BillOfMaterialEditComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], BillOfMaterialEditComponent.prototype, "UpdatedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], BillOfMaterialEditComponent.prototype, "cancelData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('EditData'),
        __metadata("design:type", Object)
    ], BillOfMaterialEditComponent.prototype, "EditData", void 0);
    BillOfMaterialEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bill-of-material-edit',
            template: __webpack_require__("./src/app/layout/inventory-master/bill-of-material/bill-of-material-edit/bill-of-material-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/bill-of-material/bill-of-material-edit/bill-of-material-edit.component.scss")]
        }),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* BillOfMaterialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* BillOfMaterialService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _k || Object, String])
    ], BillOfMaterialEditComponent);
    return BillOfMaterialEditComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=bill-of-material-edit.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/bill-of-material/bill-of-material-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillOfMaterialRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_of_material_component__ = __webpack_require__("./src/app/layout/inventory-master/bill-of-material/bill-of-material.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__bill_of_material_component__["a" /* BillOfMaterialComponent */],
    }
];
var BillOfMaterialRoutingModule = /** @class */ (function () {
    function BillOfMaterialRoutingModule() {
    }
    BillOfMaterialRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], BillOfMaterialRoutingModule);
    return BillOfMaterialRoutingModule;
}());

//# sourceMappingURL=bill-of-material-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/bill-of-material/bill-of-material.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-2 tfm-panel-left\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> Quick Access </h2>\r\n              </div>\r\n               <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                  <ng-template #quickAccess></ng-template>\r\n              </jqxPanel> \r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-10 tfm-panel-right\">\r\n          <div class=\"tfm-panel-container\">\r\n            <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                <h2>Bill Of Material</h2>\r\n            </div>\r\n            <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n                <jqxGrid  #myGrid\r\n                    [width]=\"'99.8%'\" [height]=\"'100%'\" [source]=\"dataAdapter\" [sortable]=\"true\" [filterable]=\"true\" [pageable]=\"true\" [columns]=\"columns\" [theme]=\"'energyblue'\"\r\n                    [showtoolbar]=\"true\" [rendertoolbar]=\"rendertoolbar\" [selectionmode]=\"'checkbox'\" [showfilterrow]=\"true\" [virtualmode]=\"true\" [rendergridrows]=\"rendergridrows\">\r\n                </jqxGrid>\r\n            </jqxPanel>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<jqxWindow #myWindow [width]=\"'100%'\" [height]=\"'87%'\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n  <div id=\"windowContent\">\r\n      <ng-template #Insert></ng-template>\r\n  </div>\r\n</jqxWindow>\r\n<jqxNotification #msgNotification\r\n    [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n    [autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\" [theme]=\"'energyblue'\">\r\n    <div id='message'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n  </jqxLoader>\r\n  <jqxNotification #winNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n  [autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n  <div id='listingMessage'></div>\r\n  </jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/bill-of-material/bill-of-material.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/bill-of-material/bill-of-material.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillOfMaterialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bill_of_material_add_bill_of_material_add_component__ = __webpack_require__("./src/app/layout/inventory-master/bill-of-material/bill-of-material-add/bill-of-material-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bill_of_material_edit_bill_of_material_edit_component__ = __webpack_require__("./src/app/layout/inventory-master/bill-of-material/bill-of-material-edit/bill-of-material-edit.component.ts");
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








var BillOfMaterialComponent = /** @class */ (function () {
    function BillOfMaterialComponent(componentFactoryResolver, apiUrl, fileExport, cus, bom) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.fileExport = fileExport;
        this.cus = cus;
        this.bom = bom;
        this.editrow = -1;
        this.report = false;
        this.userData = {};
        this.rendergridrows = function (params) {
            console.log(params);
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
                _this.myWindow.title('Add Bill of Materials');
                _this.myWindow.open();
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__bill_of_material_add_bill_of_material_add_component__["a" /* BillOfMaterialAddComponent */]);
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
    BillOfMaterialComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
        this.createGridData();
    };
    BillOfMaterialComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    BillOfMaterialComponent.prototype.createGridData = function () {
        var _this = this;
        var myUrl = this.apiUrl + 'bom';
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'string' },
                    { name: 'code', type: 'string' },
                    { name: 'name', type: 'string' },
                    { name: 'status', type: 'string' },
                    { name: 'bom_items' }
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
                console.log(data);
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
                { text: 'Name', datafield: 'name', columntype: 'textbox', filtertype: 'range', width: 240, filterable: false, sortable: false, editable: false },
                { text: 'Code', datafield: 'code', columntype: 'textbox', filterable: false, sortable: false, editable: false },
                { text: 'Status', datafield: 'status', columntype: 'textbox', filterable: false, sortable: false, editable: false },
                {
                    text: 'Actions', datafield: 'View', columntype: 'button', sortable: false, filterable: false, width: 70,
                    cellsrenderer: function () {
                        return 'View';
                    },
                    buttonclick: function (row) {
                        _this.editrow = row;
                        var dataRecord = _this.myGrid.getrowdata(_this.editrow);
                        _this.myWindow.draggable(true);
                        _this.myWindow.title('Bill Of Materials');
                        _this.myWindow.open();
                        var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_7__bill_of_material_edit_bill_of_material_edit_component__["a" /* BillOfMaterialEditComponent */]);
                        _this.Insert.clear();
                        var dynamic_Component = _this.Insert.createComponent(componentFactory);
                        dynamic_Component.instance.EditData = dataRecord;
                        dynamic_Component.instance.UpdatedData.subscribe(function (result) {
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
                    }
                }
            ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], BillOfMaterialComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _b || Object)
    ], BillOfMaterialComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _c || Object)
    ], BillOfMaterialComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _d || Object)
    ], BillOfMaterialComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _e || Object)
    ], BillOfMaterialComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Insert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object)
    ], BillOfMaterialComponent.prototype, "Insert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object)
    ], BillOfMaterialComponent.prototype, "quickAccess", void 0);
    BillOfMaterialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bill-of-material',
            template: __webpack_require__("./src/app/layout/inventory-master/bill-of-material/bill-of-material.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/bill-of-material/bill-of-material.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _h || Object, String, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["E" /* FileExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["E" /* FileExportService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["l" /* BillOfMaterialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["l" /* BillOfMaterialService */]) === "function" && _l || Object])
    ], BillOfMaterialComponent);
    return BillOfMaterialComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=bill-of-material.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/bill-of-material/bill-of-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillOfMaterialModule", function() { return BillOfMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bill_of_material_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/bill-of-material/bill-of-material-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bill_of_material_component__ = __webpack_require__("./src/app/layout/inventory-master/bill-of-material/bill-of-material.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bill_of_material_add_bill_of_material_add_component__ = __webpack_require__("./src/app/layout/inventory-master/bill-of-material/bill-of-material-add/bill-of-material-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bill_of_material_edit_bill_of_material_edit_component__ = __webpack_require__("./src/app/layout/inventory-master/bill-of-material/bill-of-material-edit/bill-of-material-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BillOfMaterialModule = /** @class */ (function () {
    function BillOfMaterialModule() {
    }
    BillOfMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__bill_of_material_routing_module__["a" /* BillOfMaterialRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__bill_of_material_component__["a" /* BillOfMaterialComponent */],
                __WEBPACK_IMPORTED_MODULE_5__bill_of_material_add_bill_of_material_add_component__["a" /* BillOfMaterialAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__bill_of_material_edit_bill_of_material_edit_component__["a" /* BillOfMaterialEditComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__bill_of_material_add_bill_of_material_add_component__["a" /* BillOfMaterialAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__bill_of_material_edit_bill_of_material_edit_component__["a" /* BillOfMaterialEditComponent */]
            ]
        })
    ], BillOfMaterialModule);
    return BillOfMaterialModule;
}());

//# sourceMappingURL=bill-of-material.module.js.map

/***/ })

});
//# sourceMappingURL=bill-of-material.module.chunk.js.map