webpackJsonp(["sales-return.module"],{

/***/ "./src/app/layout/inventory-master/sales-return/sales-return-add/sales-return-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\" id=\"attWindowContainer\">\r\n  <form name=\"purchaseReturnForm\" [formGroup]=\"purchaseReturnForm\">\r\n    <table>\r\n      <tr>\r\n\r\n        <td>Date *</td>\r\n        <td>\r\n          <jqxDateTimeInput #dateInput formControlName=\"date\" class=\"dateInput\" [height]=\"23\" [width]=\"180\" [formatString]=\"'yyyy-MM-dd'\"\r\n            [theme]=\"'energyblue'\"></jqxDateTimeInput>\r\n        </td>\r\n        <td>Sales Number *</td>\r\n        <td>\r\n          <!-- <jqxComboBox #sComboBox (onChange)=\"getFromStoreId($event)\" class=\"store_id\" [width]=\"185\" [theme]=\"'energyblue'\" [height]=\"23\"\r\n              [dropDownHeight]=\"100\" [source]=\"storeAdapter\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [searchMode]=\"'containsignorecase'\">\r\n            </jqxComboBox> -->\r\n            <jqxComboBox #salesNoComboBox (onChange)=\"salesNoChanged()\" [source]=\"salesNoAdaptor\" [width]=\"180\" [displayMember]=\"'sales_module'\" [valueMember]=\"'id'\" [height]=\"23\"></jqxComboBox>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10 new-col-md-10\">\r\n        <div class=\"rs-grid-panel bg-white\">\r\n          <fieldset>\r\n            <legend>Sent salesReturnItems</legend>\r\n            <a (click)=\"addItem()\" class=\"btn btn-sm btn-primary px-btn\">\r\n              <i class=\"fa fa-fw fa-plus\" aria-hidden=\"true\"></i> Add</a>\r\n            <div formArrayName=\"salesReturnItems\">\r\n              <div class=\"row row-head\">\r\n                <div class=\"col-md-2\">\r\n                  <p>Item Name</p>\r\n                </div>\r\n                <div class=\"col-md-1\">\r\n                  <p>Quantity</p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <p>Rate</p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <p>Value</p>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                  <p>Action</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-array-container\">\r\n                <div *ngFor=\"let material of purchaseReturnForm.get('salesReturnItems')['controls']; let i = index\" class=\"form-array-container-inner\">\r\n                  <div class=\"row p-1 row-body\" [formGroupName]=\"i\">\r\n                    <div class=\"col-md-2\">\r\n                      <input type=\"text\" formControlName=\"item_id\" class=\"px-control\" placeholder=\"Item\" hidden>\r\n                      <input type=\"text\" (keyup)=\"purchaseItemFilter($event, i)\" formControlName=\"item_name\" class=\"px-control\" placeholder=\"Enter Item Code\">\r\n                      <span *ngIf=\"purchaseItemFocus[i]\" class=\"px-select-container\">\r\n                        <select (change)=\"purchaseItemListSelected($event, i)\" (blur)=\"purchaseItemFocus[i] = false;\" size=\"5\" name=\"item_id\" class=\"px-control px-select-list\"\r\n                          id=\"itemCode2\">\r\n                          <option *ngFor='let item of sentItemAdapter[i]' [value]=\"item.id\">{{ item.name }}</option>\r\n                        </select>\r\n                      </span>\r\n                      <small [hidden]=\"material['controls'].item_id.valid || !material['controls'].item_id.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                        * required\r\n                      </small>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-1\">\r\n                      <input type=\"text\" formControlName=\"quantity\" class=\"px-control\" placeholder=\"Qunatity\">\r\n                      <small [hidden]=\"material['controls'].quantity.valid || !material['controls'].quantity.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                        * required\r\n                      </small>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <input type=\"text\" (change)=\"calculateValue($event, i)\" formControlName=\"rate\" class=\"px-control\" placeholder=\"Rate\">\r\n                      <small [hidden]=\"material['controls'].rate.valid || !material['controls'].rate.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                        * required\r\n                      </small>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <input type=\"text\" (change)=\"calculateValue($event, i)\" formControlName=\"value\" class=\"px-control\" [attr.disabled]=\"true\" placeholder=\"Value\">\r\n                      <small [hidden]=\"material['controls'].value.valid || !material['controls'].value.touched\" class=\"form-control-feedback text-danger px-control-error\">\r\n                        * required\r\n                      </small>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                      <button type=\"button\" (click)=\"addItem()\" class=\"btn btn-sm btn-info\"> <i class=\"fa fa-plus fa-fw\"\r\n                          aria-hidden=\"true\"></i> </button>\r\n                      <button type=\"button\" (click)=\"removeItem(i)\" class=\"btn btn-sm btn-danger\">\r\n                        <i class=\"fa fa-times fa-fw\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div style=\"padding-top: 10px; text-align:right;\">\r\n  <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!purchaseReturnForm.valid\" [theme]=\"'energyblue'\" (onClick)=\"save(purchaseReturnForm.value)\">\r\n    Save\r\n  </jqxButton>\r\n  <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"cancelBtn()\">\r\n    Cancel\r\n  </jqxButton>\r\n</div>\r\n\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n  [autoClose]=\"true\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n  <div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/sales-return/sales-return-add/sales-return-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/sales-return/sales-return-add/sales-return-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesReturnAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_sale_return_service__ = __webpack_require__("./src/app/shared/services/sale-return.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_sales_service__ = __webpack_require__("./src/app/shared/services/sales.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
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








var SalesReturnAddComponent = /** @class */ (function () {
    function SalesReturnAddComponent(fb, ims, srs, ss, ehs) {
        this.fb = fb;
        this.ims = ims;
        this.srs = srs;
        this.ss = ss;
        this.ehs = ehs;
        this.closeWindow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateGrid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.purchaseItemFocus = [];
        this.sentItemAdapter = [];
        this.salesNoAdaptor = [];
        this.salesNo = false;
    }
    SalesReturnAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.purchaseReturnForm = this.fb.group({
            date: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            salesReturnItems: this.fb.array([
                this.initMaterials()
            ])
        });
        this.ss.index({ limit: 'all' }).subscribe(function (result) {
            _this.salesNoAdaptor = result;
        }, function (error) {
            console.log(error);
        });
    };
    SalesReturnAddComponent.prototype.initMaterials = function () {
        return this.fb.group({
            item_id: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            item_name: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            quantity: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            rate: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            value: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    SalesReturnAddComponent.prototype.addItem = function (items) {
        var control1 = this.purchaseReturnForm.controls['salesReturnItems'];
        control1.push(this.initMaterials());
    };
    SalesReturnAddComponent.prototype.removeItem = function (i, items) {
        var control1 = this.purchaseReturnForm.controls['salesReturnItems'];
        control1.removeAt(i);
    };
    SalesReturnAddComponent.prototype.purchaseItemListSelected = function (selectedEvent, index) {
        if (selectedEvent && selectedEvent.target && selectedEvent.target.value) {
            var displayText = selectedEvent.target.selectedOptions[0].text;
            this.purchaseReturnForm.get('salesReturnItems')['controls'][index].get('item_id').patchValue(selectedEvent.target.value);
            this.purchaseReturnForm.get('salesReturnItems')['controls'][index].get('item_name').patchValue(displayText);
            this.purchaseItemFocus[index] = false;
        }
    };
    SalesReturnAddComponent.prototype.purchaseItemFilter = function (searchPr, index) {
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
                this.purchaseItemFocus[index] = true;
                this.ims.index({ code: temp, transact: 1, limit: 'all' }).subscribe(function (response) {
                    _this.sentItemAdapter[index] = [];
                    _this.sentItemAdapter[index] = response;
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this.purchaseItemFocus[index] = false;
            }
        }
    };
    SalesReturnAddComponent.prototype.save = function (value) {
        var _this = this;
        this.jqxLoader.open();
        value.sales_id = this.salesNoComboBox.val();
        this.srs.store(value).subscribe(function (result) {
            _this.jqxLoader.close();
            _this.updateGrid.emit();
        }, function (error) {
            var data = _this.ehs.formatError(error);
            var messageDiv = document.getElementById("windowMessage");
            messageDiv.innerText(data["message"]);
            _this.jqxLoader.close();
        });
    };
    SalesReturnAddComponent.prototype.cancelBtn = function () {
        this.closeWindow.emit();
    };
    SalesReturnAddComponent.prototype.calculateValue = function ($event, i) {
        var quantity = this.purchaseReturnForm.get('salesReturnItems')['controls'][i].get('quantity').value;
        var rate = this.purchaseReturnForm.get('salesReturnItems')['controls'][i].get('rate').value;
        if (quantity && rate) {
            var total = parseFloat(quantity) * parseFloat(rate);
            this.purchaseReturnForm.get('salesReturnItems')['controls'][i].get('value').patchValue(total);
        }
    };
    SalesReturnAddComponent.prototype.salesNoChanged = function () {
        this.salesNo = this.salesNoComboBox.val() ? true : false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SalesReturnAddComponent.prototype, "closeWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SalesReturnAddComponent.prototype, "updateGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('salesNoComboBox'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _a || Object)
    ], SalesReturnAddComponent.prototype, "salesNoComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _b || Object)
    ], SalesReturnAddComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _c || Object)
    ], SalesReturnAddComponent.prototype, "jqxLoader", void 0);
    SalesReturnAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sales-return-add',
            template: __webpack_require__("./src/app/layout/inventory-master/sales-return/sales-return-add/sales-return-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/sales-return/sales-return-add/sales-return-add.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_sale_return_service__["a" /* SaleReturnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_sale_return_service__["a" /* SaleReturnService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_sales_service__["a" /* SalesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_sales_service__["a" /* SalesService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _h || Object])
    ], SalesReturnAddComponent);
    return SalesReturnAddComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=sales-return-add.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/sales-return/sales-return-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesReturnRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sales_return_component__ = __webpack_require__("./src/app/layout/inventory-master/sales-return/sales-return.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__sales_return_component__["a" /* SalesReturnComponent */]
    }
];
var SalesReturnRoutingModule = /** @class */ (function () {
    function SalesReturnRoutingModule() {
    }
    SalesReturnRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], SalesReturnRoutingModule);
    return SalesReturnRoutingModule;
}());

//# sourceMappingURL=sales-return-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/sales-return/sales-return-view/sales-return-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\" style=\"font-size: 18px;\">\r\n      <p><label>Date: {{salesReturnItems.date}}</label></p>\r\n      <p><label>Sales No: {{salesReturnItems.sales_no}}</label></p>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-top: 25px;\">\r\n      <div class=\"col-md-12 new-col-md-12\">\r\n        <div class=\"rs-grid-panel bg-white\">\r\n          <fieldset style=\"width: 90%\">\r\n            <legend>Invoices</legend>\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S.N.</th>\r\n                  <th>Item Name</th>\r\n                  <th>Quantity</th>\r\n                  <th>Rate</th>\r\n                  <th>Value</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let si of salesReturnItems.sales_return_items;let i=index;\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{si.item?.name}}</td>\r\n                  <td>{{si.quantity}}</td>\r\n                  <td>{{si.rate}}</td>\r\n                  <td>{{si.value}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/layout/inventory-master/sales-return/sales-return-view/sales-return-view.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/sales-return/sales-return-view/sales-return-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesReturnViewComponent; });
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

var SalesReturnViewComponent = /** @class */ (function () {
    function SalesReturnViewComponent() {
    }
    SalesReturnViewComponent.prototype.ngOnInit = function () {
        console.log(this.salesReturnItems);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SalesReturnViewComponent.prototype, "salesReturnItems", void 0);
    SalesReturnViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sales-return-view',
            template: __webpack_require__("./src/app/layout/inventory-master/sales-return/sales-return-view/sales-return-view.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/sales-return/sales-return-view/sales-return-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesReturnViewComponent);
    return SalesReturnViewComponent;
}());

//# sourceMappingURL=sales-return-view.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/sales-return/sales-return.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 tfm-panel-left\">\r\n      <div class=\"tfm-panel-container\">\r\n        <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n          <h2> Quick Access </h2>\r\n        </div>\r\n        <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n          <ng-template #quickAccess></ng-template>\r\n        </jqxPanel>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-10 tfm-panel-right\">\r\n      <div class=\"tfm-panel-container\">\r\n        <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n          <h2>Sales Return</h2>\r\n        </div>\r\n        <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" [theme]=\"'energyblue'\">\r\n          <jqxGrid #myGrid [width]=\"'99.8%'\" [height]=\"'100%'\" [source]=\"dataAdapter\" [sortable]=\"true\" [filterable]=\"true\" [pageable]=\"true\"\r\n            [columns]=\"columns\" [rendergridrows]=\"rendergridrows\" [virtualmode]=\"true\" [theme]=\"'energyblue'\" [showtoolbar]=\"true\"\r\n            [rendertoolbar]=\"rendertoolbar\" [selectionmode]=\"'checkbox'\">\r\n          </jqxGrid>\r\n        </jqxPanel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<jqxWindow #myWindow [width]=\"'800px'\" [height]=\"'520px'\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n  <div id=\"windowContent\">\r\n    <ng-template #Insert></ng-template>\r\n  </div>\r\n</jqxWindow>"

/***/ }),

/***/ "./src/app/layout/inventory-master/sales-return/sales-return.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/sales-return/sales-return.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesReturnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sales_return_view_sales_return_view_component__ = __webpack_require__("./src/app/layout/inventory-master/sales-return/sales-return-view/sales-return-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sales_return_add_sales_return_add_component__ = __webpack_require__("./src/app/layout/inventory-master/sales-return/sales-return-add/sales-return-add.component.ts");
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






var SalesReturnComponent = /** @class */ (function () {
    function SalesReturnComponent(componentFactoryResolver, apiUrl, cus) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.cus = cus;
        this.userData = {};
        this.rendergridrows = function (params) {
            return params.data;
        };
        this.rendertoolbar = function (toolbar) {
            var container = document.createElement('div');
            container.style.margin = '5px';
            var buttonContainer1 = document.createElement('div');
            var buttonContainer2 = document.createElement('div');
            buttonContainer1.id = 'buttonContainer1';
            buttonContainer2.id = 'buttonContainer2';
            buttonContainer1.style.cssText = 'float: left';
            buttonContainer2.style.cssText = 'float: left; margin-left: 5px';
            container.appendChild(buttonContainer1);
            container.appendChild(buttonContainer2);
            toolbar[0].appendChild(container);
            var addRowButton = jqwidgets.createInstance('#buttonContainer1', 'jqxButton', { width: 105, value: 'Add New Row', theme: 'energyblue' });
            var reloadGridButton = jqwidgets.createInstance('#buttonContainer2', 'jqxButton', { width: 80, value: '<i class="fa fa-refresh fa-fw"></i> Reload', theme: 'energyblue' });
            addRowButton.addEventHandler('click', function () {
                _this.myWindow.draggable(true);
                _this.myWindow.title('Sales Return');
                _this.myWindow.open();
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__sales_return_add_sales_return_add_component__["a" /* SalesReturnAddComponent */]);
                _this.Insert.clear();
                var dynamic_Component = _this.Insert.createComponent(componentFactory);
                (dynamic_Component.instance).updateGrid.subscribe(function (result) {
                    dynamic_Component.destroy();
                    _this.myWindow.close();
                    _this.myGrid.updatebounddata();
                });
                (dynamic_Component.instance).closeWindow.subscribe(function (result) {
                    dynamic_Component.destroy();
                    _this.myWindow.close();
                });
            });
            reloadGridButton.addEventHandler('click', function () {
                _this.myGrid.updatebounddata();
            });
        };
        this.apiUrl = apiUrl;
        this.userData['token'] = cus.getTokenData()['token'];
    }
    SalesReturnComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
        this.initGrid();
    };
    SalesReturnComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    SalesReturnComponent.prototype.initGrid = function () {
        var _this = this;
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'date', type: 'string' },
                    { name: 'sales_no', type: 'string', map: 'sales_master>sales_module' },
                    { name: 'sales_return_items', type: 'array' }
                ],
                id: 'id',
                root: 'data',
                pagesize: 20,
                url: this.apiUrl + "sales_return",
                data: this.userData
            };
        this.dataAdapter = new jqx.dataAdapter(this.source, {
            formatData: function (data) {
                data['page'] = data['pagenum'] + 1;
                data['limit'] = data['pagesize'];
                return data;
            }, downloadComplete: function (data, status, xhr) {
                _this.source.totalrecords = data.data.total;
                var tData = data.data.data;
                return tData;
            }
        });
        this.columns =
            [
                { text: 'Date', datafield: 'date' },
                { text: 'Sales', datafield: 'sales_no' },
                {
                    text: 'Actions', datafield: 'View', columntype: 'button', sortable: false, filterable: false, width: 70,
                    cellsrenderer: function () {
                        return 'View';
                    },
                    buttonclick: function (row) {
                        _this.myWindow.draggable(true);
                        _this.myWindow.title('Sales Return');
                        _this.myWindow.open();
                        var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__sales_return_view_sales_return_view_component__["a" /* SalesReturnViewComponent */]);
                        _this.Insert.clear();
                        var dynamic_Component = _this.Insert.createComponent(componentFactory);
                        dynamic_Component.instance.salesReturnItems = _this.myGrid.getrowdata(row);
                    }
                }
            ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object)
    ], SalesReturnComponent.prototype, "quickAccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _b || Object)
    ], SalesReturnComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _c || Object)
    ], SalesReturnComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Insert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object)
    ], SalesReturnComponent.prototype, "Insert", void 0);
    SalesReturnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sales-return',
            template: __webpack_require__("./src/app/layout/inventory-master/sales-return/sales-return.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/sales-return/sales-return.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _e || Object, String, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["v" /* CurrentUserService */]) === "function" && _f || Object])
    ], SalesReturnComponent);
    return SalesReturnComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=sales-return.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/sales-return/sales-return.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReturnModule", function() { return SalesReturnModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sales_return_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/sales-return/sales-return-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sales_return_component__ = __webpack_require__("./src/app/layout/inventory-master/sales-return/sales-return.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_sale_return_service__ = __webpack_require__("./src/app/shared/services/sale-return.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sales_return_view_sales_return_view_component__ = __webpack_require__("./src/app/layout/inventory-master/sales-return/sales-return-view/sales-return-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sales_return_add_sales_return_add_component__ = __webpack_require__("./src/app/layout/inventory-master/sales-return/sales-return-add/sales-return-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_sales_service__ = __webpack_require__("./src/app/shared/services/sales.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SalesReturnModule = /** @class */ (function () {
    function SalesReturnModule() {
    }
    SalesReturnModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__sales_return_routing_module__["a" /* SalesReturnRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__shared_services_sale_return_service__["a" /* SaleReturnService */],
                __WEBPACK_IMPORTED_MODULE_8__shared_services_sales_service__["a" /* SalesService */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__sales_return_component__["a" /* SalesReturnComponent */], __WEBPACK_IMPORTED_MODULE_6__sales_return_view_sales_return_view_component__["a" /* SalesReturnViewComponent */], __WEBPACK_IMPORTED_MODULE_7__sales_return_add_sales_return_add_component__["a" /* SalesReturnAddComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__sales_return_view_sales_return_view_component__["a" /* SalesReturnViewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sales_return_add_sales_return_add_component__["a" /* SalesReturnAddComponent */]
            ]
        })
    ], SalesReturnModule);
    return SalesReturnModule;
}());

//# sourceMappingURL=sales-return.module.js.map

/***/ }),

/***/ "./src/app/shared/services/sale-return.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleReturnService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
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


var SaleReturnService = /** @class */ (function () {
    function SaleReturnService(apiUrl, http) {
        this.http = http;
        this.apiUrl = apiUrl;
    }
    SaleReturnService.prototype.index = function (post) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]();
        myHeaders.append('Content-Type', 'application/json');
        var Params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpParams */]();
        for (var key in post) {
            if (post.hasOwnProperty(key)) {
                Params = Params.append(key, post[key]);
            }
        }
        return this.http.get(this.apiUrl + 'sales_return', { headers: myHeaders, params: Params })
            .map(function (response) { return response['data']; }, function (error) { return error; });
    };
    SaleReturnService.prototype.store = function (post) {
        console.log(post);
        return this.http.post(this.apiUrl + "sales_return", post)
            .map(function (response) { return response; }, function (error) { return error; });
    };
    SaleReturnService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [String, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], SaleReturnService);
    return SaleReturnService;
    var _a;
}());

//# sourceMappingURL=sale-return.service.js.map

/***/ })

});
//# sourceMappingURL=sales-return.module.chunk.js.map