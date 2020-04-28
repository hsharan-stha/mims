webpackJsonp(["product-subcategory-master.module"],{

/***/ "./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-add/product-subcategory-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"attWindowContainer\">\r\n<jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n    <form name=\"productSubCategoryForm\" [formGroup]=\"psCForm\">\r\n        <table class=\"table-w-tooltip\">\r\n            <tr>\r\n                <td>Code:</td>\r\n                <td>\r\n\r\n                    <jqxInput class=\"input_code\" [width]=\"178\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"code\"></jqxInput>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>Name:</td>\r\n                <td>\r\n\r\n                    <jqxInput class=\"input_name\" [width]=\"178\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"name\"></jqxInput>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>Parent Category:</td>\r\n                <td>\r\n                    <div class=\"input-button-group\">\r\n                        <jqxComboBox #categoryCombo [width]='150' [height]='23' [theme]=\"'energyblue'\" [source]='categoryAdapter' [valueMember]=\"'id'\" [displayMember]=\"'code'\" formControlName=\"category_id\" [searchMode]=\"'containsignorecase'\"></jqxComboBox>\r\n                    </div>\r\n                    <div class=\"input-button-group\">\r\n                        <jqxButton (onClick)=\"addCategory()\" [width]=\"28\" [theme]=\"'energyblue'\" [height]=\"25\"> <i class=\"fa fa-plus fa-fw\"></i> </jqxButton>\r\n                    </div>\r\n                    <div class=\"input-button-group\">\r\n                        <span *ngIf=\"catLoader\" class=\"tfms-field-loader\"><i class=\"fa fa-refresh fa-spin fa-fw\"></i></span>\r\n                    </div>  \r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td></td>\r\n                <td style=\"padding-top: 10px;\">\r\n                <jqxButton style=\"margin-right: 5px;\"  [theme]=\"'energyblue'\" [disabled]=\"!psCForm.valid\" (onClick)=\"addProductCategory(psCForm.value)\">\r\n                    Save\r\n                </jqxButton>\r\n\r\n                <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"clearForm()\">\r\n                    Reset\r\n                </jqxButton>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </form>\r\n</jqxValidator>\r\n</div>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [isModal]=\"true\" [width]=\"100\" [theme]=\"'energyblue'\" [height]=\"60\"></jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-add/product-subcategory-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-add/product-subcategory-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSubcategoryAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
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






var ProductSubcategoryAddComponent = /** @class */ (function () {
    function ProductSubcategoryAddComponent(fb, pscm, ehs, apiUrl, cdr, cus) {
        this.fb = fb;
        this.pscm = pscm;
        this.ehs = ehs;
        this.cdr = cdr;
        this.cus = cus;
        this.productSubcategoryAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.openCategoryAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.catLoader = false;
        this.userData = {};
        this.rules = [
            { input: '.input_code', message: 'Code is required!', action: 'keydown, blur', rule: 'required' },
            { input: '.input_name', message: 'Name is required!', action: 'keydown, blur', rule: 'required' },
        ];
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.psCForm = fb.group({
            'code': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'category_id': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    }
    Object.defineProperty(ProductSubcategoryAddComponent.prototype, "parentCategoryAdded", {
        set: function (name) {
            this.catLoader = true;
            this.categoryAdapter.dataBind();
        },
        enumerable: true,
        configurable: true
    });
    ProductSubcategoryAddComponent.prototype.ngOnInit = function () {
        this.catLoader = true;
        this.setCategoryCombo();
    };
    ProductSubcategoryAddComponent.prototype.ngAfterViewInit = function () {
        // this.jqxLoader.open();
        this.cdr.detectChanges();
    };
    ProductSubcategoryAddComponent.prototype.setCategoryCombo = function () {
        var _this = this;
        this.categorysource =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'code' },
                ],
                id: 'id',
                data: this.userData,
                // async: false,
                url: this.apiUrl + 'product_category?limit=all'
            };
        this.categoryAdapter = new jqx.dataAdapter(this.categorysource, {
            autoBind: true,
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                _this.catLoader = false;
                // this.jqxLoader.close();
                // for (var _i = 0; _i < tData.length; _i++) {
                //   tData[_i]['label'] = tData[_i]['code'];
                //   tData[_i]['category_id'] = tData[_i]['id'];
                // }
                // console.log(tData);
                return tData;
            },
            bindingComplete: function () {
            }
        });
    };
    ProductSubcategoryAddComponent.prototype.addProductCategory = function (value) {
        var _this = this;
        this.jqxLoader.open();
        value['category_id'] = this.categoryCombo.getSelectedItem().value;
        console.log(value);
        this.pscm.store(value)
            .subscribe(function (result) {
            var data = _this.ehs.formatError(result);
            if (data['result'] == true) {
                _this.productSubcategoryAdded.emit(data);
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
    };
    ProductSubcategoryAddComponent.prototype.clearForm = function () {
        this.psCForm.reset();
    };
    ProductSubcategoryAddComponent.prototype.addCategory = function () {
        this.openCategoryAdd.emit('open');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProductSubcategoryAddComponent.prototype, "productSubcategoryAdded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProductSubcategoryAddComponent.prototype, "openCategoryAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], ProductSubcategoryAddComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('categoryCombo'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _b || Object)
    ], ProductSubcategoryAddComponent.prototype, "categoryCombo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _c || Object)
    ], ProductSubcategoryAddComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('parentCategoryAdded'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ProductSubcategoryAddComponent.prototype, "parentCategoryAdded", null);
    ProductSubcategoryAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-subcategory-add',
            template: __webpack_require__("./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-add/product-subcategory-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-add/product-subcategory-add.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_1" /* ProductSubcategoryMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_1" /* ProductSubcategoryMasterService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _f || Object, String, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _h || Object])
    ], ProductSubcategoryAddComponent);
    return ProductSubcategoryAddComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=product-subcategory-add.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-edit/product-subcategory-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"attWindowContainer\">\r\n<jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n    <form name=\"productSubCategoryForm\" [formGroup]=\"psCForm\">\r\n        <table class=\"table-w-tooltip\">\r\n            <tr>\r\n                <td align=\"right\">Code:</td>\r\n                <td align=\"left\">\r\n\r\n                    <jqxInput class=\"input_code\" [width]=\"178\" [height]=\"23\" [theme]=\"'energyblue'\" formControlName=\"code\"></jqxInput>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td align=\"right\">Name:</td>\r\n                <td align=\"left\">\r\n\r\n                    <jqxInput class=\"input_name\" [width]=\"178\" [theme]=\"'energyblue'\" [height]=\"23\" formControlName=\"name\"></jqxInput>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td align=\"right\">Parent Category:</td>\r\n                <td align=\"left\">\r\n                    <div class=\"input-button-group\">\r\n                        <jqxComboBox #categoryCombo [width]='150' [theme]=\"'energyblue'\" [height]='23' [source]='categoryAdapter' [valueMember]=\"'id'\" [displayMember]=\"'code'\" formControlName=\"category_id\" [searchMode]=\"'containsignorecase'\"></jqxComboBox>\r\n                    </div>\r\n                    <div class=\"input-button-group\">\r\n                        <jqxButton (onClick)=\"addCategory()\" [theme]=\"'energyblue'\" [width]=\"28\" [height]=\"25\"> <i class=\"fa fa-plus fa-fw\"></i> </jqxButton>\r\n                    </div>\r\n                    <div class=\"input-button-group\">\r\n                        <span *ngIf=\"catLoader\" class=\"tfms-field-loader\"><i class=\"fa fa-refresh fa-spin fa-fw\"></i></span>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td align=\"right\"></td>\r\n                <td style=\"padding-top: 10px;\" align=\"right\">\r\n                <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"updateProductCategory(psCForm.value)\">\r\n                    Update\r\n                </jqxButton>\r\n\r\n                <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" (onClick)=\"clearForm()\">\r\n                    Reset\r\n                </jqxButton>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </form>\r\n</jqxValidator>\r\n</div>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-edit/product-subcategory-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-edit/product-subcategory-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSubcategoryEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
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






var ProductSubcategoryEditComponent = /** @class */ (function () {
    function ProductSubcategoryEditComponent(fb, pcms, apiUrl, ehs, cus) {
        this.fb = fb;
        this.pcms = pcms;
        this.ehs = ehs;
        this.cus = cus;
        this.productSubcategoryUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.openCategoryAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.catLoader = false;
        this.userData = {};
        this.rules = [
            { input: '.input_code', message: 'Code is required!', action: 'keydown, blur', rule: 'required' },
            { input: '.input_name', message: 'Name is required!', action: 'keydown, blur', rule: 'required' },
        ];
        this.psCForm = fb.group({
            'code': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'category_id': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
        this.userData = this.cus.getTokenData();
        this.apiUrl = apiUrl;
    }
    Object.defineProperty(ProductSubcategoryEditComponent.prototype, "parentCategoryAdded", {
        set: function (name) {
            this.catLoader = true;
            this.categoryAdapter.dataBind();
        },
        enumerable: true,
        configurable: true
    });
    ProductSubcategoryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catLoader = true;
        this.categorysource =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'code' },
                ],
                id: 'id',
                data: this.userData,
                // async: false,
                url: this.apiUrl + 'product_category?limit=all'
            };
        this.categoryAdapter = new jqx.dataAdapter(this.categorysource, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                _this.catLoader = false;
                // for (var _i = 0; _i < tData.length; _i++) {
                //   tData[_i]['label'] = tData[_i]['code'];
                //   tData[_i]['category_id'] = tData[_i]['id'];
                // }
                // console.log(tData);
                return tData;
            },
            loadComplete: function () {
                _this.categoryCombo.selectItem(_this.productCategoryData.category_id);
            },
            bindigComplete: function () {
            }
        });
        // console.log(this.productCategoryData);
        this.catId = this.productCategoryData['id'];
        this.formData = new __WEBPACK_IMPORTED_MODULE_3__shared__["_0" /* ProductSubcategory */](this.productCategoryData);
        this.psCForm.setValue(this.formData);
    };
    ProductSubcategoryEditComponent.prototype.updateProductCategory = function (value) {
        var _this = this;
        value['category_id'] = this.categoryCombo.getSelectedItem().value;
        this.pcms.update(this.catId, value)
            .subscribe(function (result) {
            var data = _this.ehs.formatError(result);
            if (data['result'] == true) {
                _this.productSubcategoryUpdated.emit(data);
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
    };
    ProductSubcategoryEditComponent.prototype.clearForm = function () {
        this.psCForm.reset();
    };
    ProductSubcategoryEditComponent.prototype.addCategory = function () {
        this.openCategoryAdd.emit('open');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProductSubcategoryEditComponent.prototype, "productSubcategoryUpdated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProductSubcategoryEditComponent.prototype, "openCategoryAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('productCategoryData'),
        __metadata("design:type", Object)
    ], ProductSubcategoryEditComponent.prototype, "productCategoryData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], ProductSubcategoryEditComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('categoryCombo'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _b || Object)
    ], ProductSubcategoryEditComponent.prototype, "categoryCombo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _c || Object)
    ], ProductSubcategoryEditComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('parentCategoryAdded'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ProductSubcategoryEditComponent.prototype, "parentCategoryAdded", null);
    ProductSubcategoryEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-subcategory-edit',
            template: __webpack_require__("./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-edit/product-subcategory-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-edit/product-subcategory-edit.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["_1" /* ProductSubcategoryMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["_1" /* ProductSubcategoryMasterService */]) === "function" && _e || Object, String, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["B" /* ErrorHandleService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["v" /* CurrentUserService */]) === "function" && _g || Object])
    ], ProductSubcategoryEditComponent);
    return ProductSubcategoryEditComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=product-subcategory-edit.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-master-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSubcategoryMasterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_subcategory_master_component__ = __webpack_require__("./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__product_subcategory_master_component__["a" /* ProductSubcategoryMasterComponent */],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__shared__["q" /* CanNavigateRouteGuard */]],
    }
];
var ProductSubcategoryMasterRoutingModule = /** @class */ (function () {
    function ProductSubcategoryMasterRoutingModule() {
    }
    ProductSubcategoryMasterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ProductSubcategoryMasterRoutingModule);
    return ProductSubcategoryMasterRoutingModule;
}());

//# sourceMappingURL=product-subcategory-master-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-master.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-2 tfm-panel-left\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> Quick Access </h2>\r\n              </div>\r\n               <jqxPanel [width]=\"'99.7%'\" [height]=\"'94.2%'\" >\r\n                    <ng-template #quickAccess></ng-template>\r\n              </jqxPanel> \r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-10 tfm-panel-right\">\r\n          <div class=\"tfm-panel-container\">\r\n              <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                  <h2> Product Sub Category Master </h2>\r\n              </div>\r\n              <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\">\r\n                  <!-- <div class=\"tfm-panel-body\"> -->\r\n                    <jqxGrid #myGrid\r\n                        [height]=\"'99.8%'\" [width]=\"'99.8%'\" [source]=\"dataAdapter\" [columns]=\"columns\"\r\n                        [virtualmode]=\"true\" [pageable]=\"true\" [filterable]=\"true\" [theme]=\"'energyblue'\"\r\n                        [rendergridrows]=\"rendergridrows\" [selectionmode]=\"'checkbox'\" [showtoolbar]=\"true\" [rendertoolbar]=\"rendertoolbar\">\r\n                    </jqxGrid>\r\n\r\n \r\n                 <!-- <embed width=\"100%\" height=\"100%\" name=\"plugin\" id=\"pdfPlugin\" src=\"\" type=\"application/pdf\"> -->\r\n                  <!-- </div> -->\r\n                  \r\n                  <jqxWindow #windowReference [showCollapseButton]=\"true\" [width]=\"340\" [height]=\"250\" [autoOpen]=\"false\" [isModal]=\"true\">\r\n                      <div>\r\n                          \r\n                      </div>\r\n                      <div id=\"windowContent\">\r\n                          <ng-template #dynamicInsert></ng-template>\r\n                      </div>\r\n                  </jqxWindow>\r\n\r\n                  <jqxWindow #addCategory [showCollapseButton]=\"true\" [width]=\"340\" [height]=\"200\" [autoOpen]=\"false\" [isModal]=\"true\" (onClose)=\"closeCategory($event)\">\r\n                    <div>\r\n                        Add Category\r\n                    </div>\r\n                    <div id=\"windowContent\">\r\n                        <ng-template #dynamicInsertCategory></ng-template>\r\n                        <!-- <app-product-category-add (productCategoryAdded)=\"addedNewEntry($event)\"></app-product-category-add> -->\r\n                    </div>\r\n                 </jqxWindow>\r\n\r\n              </jqxPanel>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<jqxNotification #msgNotification\r\n      [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n      [autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n      <div id='message'></div>\r\n  </jqxNotification>\r\n  <jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>\r\n<jqxNotification #winNotification [width]=\"250\" [theme]=\"'energyblue'\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='listingMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-master.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSubcategoryMasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_subcategory_add_product_subcategory_add_component__ = __webpack_require__("./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-add/product-subcategory-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_subcategory_edit_product_subcategory_edit_component__ = __webpack_require__("./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-edit/product-subcategory-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_category_master_product_category_add_product_category_add_component__ = __webpack_require__("./src/app/layout/inventory-master/product-category-master/product-category-add/product-category-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_pdfmake__ = __webpack_require__("./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_pdfmake_build_vfs_fonts__ = __webpack_require__("./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_pdfmake_build_vfs_fonts__);
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











var ProductSubcategoryMasterComponent = /** @class */ (function () {
    function ProductSubcategoryMasterComponent(apiUrl, pscm, componentFactoryResolver, fileExport, cus) {
        var _this = this;
        this.pscm = pscm;
        this.componentFactoryResolver = componentFactoryResolver;
        this.fileExport = fileExport;
        this.cus = cus;
        this.source = {};
        this.editrow = -1;
        this.userData = {};
        /**
         * For Server Side Pagination
         * Return array of data in required format to be rendered in grid.
         */
        this.rendergridrows = function (params) {
            console.log(params);
            return params.data;
        };
        /**
         * Render Toolbar with Add & Delete Button &
         * attach event handler to the buttons.
         */
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
            var addRowButton = jqwidgets.createInstance('#buttonContainer1', 'jqxButton', { width: 120, value: '<i class="fa fa-plus fa-fw"></i> Add New Row', theme: 'energyblue' });
            var deleteRowButton = jqwidgets.createInstance('#buttonContainer3', 'jqxButton', { width: 150, value: 'Delete Selected Row', theme: 'energyblue' });
            var reloadGridButton = jqwidgets.createInstance('#buttonContainer2', 'jqxButton', { width: 80, value: '<i class="fa fa-refresh fa-fw"></i> Reload', theme: 'energyblue' });
            var exportExcelButton = jqwidgets.createInstance('#buttonContainer4', 'jqxButton', { width: 120, value: '<i class="fa fa-file-excel-o fa-fw"></i> Export Excel', theme: 'energyblue' });
            var exportPdfButton = jqwidgets.createInstance('#buttonContainer5', 'jqxButton', { width: 110, value: '<i class="fa fa-file-pdf-o fa-fw"></i> Export PDF', theme: 'energyblue' });
            var printButton = jqwidgets.createInstance('#buttonContainer6', 'jqxButton', { width: 110, value: '<i class="fa fa-print fa-fw"></i> Print', theme: 'energyblue' });
            /**
             * Add a button Event Handler in grid toolbar to open window with initialized Add Subcategory component inside window
             */
            addRowButton.addEventHandler('click', function () {
                _this.window.setTitle("Add Product SubCategory");
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__product_subcategory_add_product_subcategory_add_component__["a" /* ProductSubcategoryAddComponent */]);
                _this.dynamicInsert.clear();
                _this.dyynamicComponent = _this.dynamicInsert.createComponent(componentFactory);
                /**
                 * Subscribe to the Event emmited from SubCategory Add Component,
                 *  when Sub Category has been added.
                 */
                _this.dyynamicComponent.instance.productSubcategoryAdded.subscribe(function (result) {
                    if (result == true) {
                        _this.window.close();
                        _this.myGrid.updatebounddata('cells');
                    }
                });
                /**
                 * Subscribe to the Event emitted from SubCategory Add Component,
                 * To open Category Add Component.
                 */
                _this.dyynamicComponent.instance.openCategoryAdd.subscribe(function (result) {
                    if (result === 'open') {
                        console.log(result);
                        _this.createCategoryAddComponent('add');
                        _this.addCategoryWindow.open();
                        _this.addCategoryWindow.focus();
                        // this.myGrid.updatebounddata('cells');
                    }
                });
                _this.window.open();
            });
            /**
             * Add a button Event handler in grid toolbar to delete Selected row
             * remove row from grid row as well as send delete request to server
             */
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
                        _this.pscm.destroy('[' + ids + ']').subscribe(function (data) {
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
                _this.pscm.index(post)
                    .subscribe(function (data) {
                    // set items to json response
                    console.log(data);
                    var exportData = data;
                    var fileName = _this.fileExport.getFileName('product-sub-category');
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
        };
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.getTable();
    }
    ProductSubcategoryMasterComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
    };
    ProductSubcategoryMasterComponent.prototype.ngAfterViewInit = function () {
    };
    ProductSubcategoryMasterComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    /**
     * initialize grid variable
     */
    ProductSubcategoryMasterComponent.prototype.getTable = function () {
        var _this = this;
        var myUrl = this.apiUrl + 'product_sub_category';
        var totalData;
        this.source =
            {
                datatype: 'json',
                //   localData: {},
                // datafields: [
                //   { name: 'id', type: 'string' },
                //   { name: 'code', type: 'string' },
                //   { name: 'name', type: 'int' },
                //   { name: 'category_id', type: 'int'},
                // ],
                id: 'id',
                root: 'data',
                pagesize: 20,
                data: this.userData,
                url: myUrl,
                totalrecords: 100,
                beforeprocessing: function (data) {
                }
            };
        /**
         * Define Data Adapter for grid source
         * Help in Formating data before making server request,
         * As well as change the response data format
         */
        this.dataAdapter = new jqx.dataAdapter(this.source, {
            //before sending request to server format params in laravel pagination params type
            formatData: function (data) {
                console.log(data);
                data['page'] = data['pagenum'] + 1;
                data['limit'] = data['pagesize'];
                return data;
            },
            // after succesful response from server change data format to suitable form before rendering to grid.
            downloadComplete: function (data, status, xhr) {
                // if (this.source && this.source.totalrecords) {
                _this.source.totalrecords = data.data.total;
                // }
                var tData = data.data.data;
                return tData;
            }, loadError: function (jqXHR, status, error) {
                var messageDiv = document.getElementById('listingMessage');
                messageDiv.innerText = error;
                _this.winNotification.open();
                _this.jqxLoader.close();
            },
            loadComplete: function (data) {
            }
        });
        /**
         * Define column name, value & event handler to grid columns
         */
        this.columns =
            [
                { text: 'Id', datafield: 'id' },
                { text: 'Code', datafield: 'code' },
                { text: 'Name', datafield: 'name' },
                {
                    text: 'Edit', datafield: 'Edit', columntype: 'button', width: 70,
                    cellsrenderer: function () {
                        return 'Edit';
                    },
                    buttonclick: function (row) {
                        _this.window.setTitle("Edit Product SubCategory");
                        //get the data and append in to the inputs
                        _this.editrow = row;
                        var dataRecord = _this.myGrid.getrowdata(_this.editrow);
                        console.log(dataRecord);
                        var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__product_subcategory_edit_product_subcategory_edit_component__["a" /* ProductSubcategoryEditComponent */]);
                        _this.dynamicInsert.clear();
                        _this.dyynamicComponent = _this.dynamicInsert.createComponent(componentFactory);
                        _this.dyynamicComponent.instance.productCategoryData = dataRecord;
                        _this.dyynamicComponent.instance.productSubcategoryUpdated.subscribe(function (result) {
                            if (result == true) {
                                _this.window.close();
                                _this.myGrid.updatebounddata('cells');
                            }
                        });
                        _this.dyynamicComponent.instance.openCategoryAdd.subscribe(function (result) {
                            if (result === 'open') {
                                console.log(result);
                                _this.createCategoryAddComponent('edit');
                                _this.addCategoryWindow.open();
                                _this.addCategoryWindow.focus();
                                // this.myGrid.updatebounddata('cells');
                            }
                        });
                        _this.window.open();
                    }
                }
            ];
    };
    /**
     * Initialize Category component inside view container &
     * subscribe to changes inside of category add component
     */
    ProductSubcategoryMasterComponent.prototype.createCategoryAddComponent = function (fromComponent) {
        var _this = this;
        this.fromComponent = fromComponent;
        var subComponentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__product_category_master_product_category_add_product_category_add_component__["a" /* ProductCategoryAddComponent */]);
        this.dynamicInsertCategory.clear();
        this.dynamicCategoryComponent = this.dynamicInsertCategory.createComponent(subComponentFactory);
        this.dynamicCategoryComponent.instance.productCategoryAdded.subscribe(function (result) {
            console.log(result);
            if (result == true && _this.fromComponent == 'add') {
                _this.dyynamicComponent.instance.parentCategoryAdded = true;
            }
            if (result == true && _this.fromComponent == 'edit') {
                _this.dyynamicComponent.instance.parentCategoryAdded = true;
            }
            _this.addCategoryWindow.close();
            _this.dynamicCategoryComponent.destroy();
        });
    };
    /**
     * Called when Category Add window is closed &
     * Category add component is Destroyed
     * @param event
     */
    ProductSubcategoryMasterComponent.prototype.closeCategory = function (event) {
        this.dynamicCategoryComponent.destroy();
    };
    /**
     *
     * @param type
     */
    ProductSubcategoryMasterComponent.prototype.createPdfFormat = function (type) {
        var _this = this;
        var rows = [];
        var post = {};
        __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_pdfmake__["vfs"] = __WEBPACK_IMPORTED_MODULE_10_pdfmake_build_vfs_fonts__["pdfMake"].vfs;
        this.pscm.index(post)
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
            // pdfMake.createPdf(dd).getDataUrl(function(outDoc) {
            //   console.log(outDoc);
            //   document.getElementById('pdfPlugin')['src'] = outDoc;
            // });
            if (type == 'download') {
                var fileName = _this.fileExport.getFileName('product-sub-category');
                __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_pdfmake__["createPdf"](dd).download(fileName);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_pdfmake__["createPdf"](dd).print();
            }
        }, function (error) {
            console.log(error);
        });
    };
    /**
     * Called when Navigation away from this component
     */
    ProductSubcategoryMasterComponent.prototype.canDeactivate = function () {
        // console.log('i am navigating away');
        // alert('Navigating Away');
        // if the editName !== this.user.name
        // if (this.user.name !== this.editName) {
        // return window.confirm('Are you sure you want to leave?');
        // }
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], ProductSubcategoryMasterComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _b || Object)
    ], ProductSubcategoryMasterComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dynamicInsert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object)
    ], ProductSubcategoryMasterComponent.prototype, "dynamicInsert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dynamicInsertCategory', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object)
    ], ProductSubcategoryMasterComponent.prototype, "dynamicInsertCategory", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _e || Object)
    ], ProductSubcategoryMasterComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('windowReference'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _f || Object)
    ], ProductSubcategoryMasterComponent.prototype, "window", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('addCategory'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _g || Object)
    ], ProductSubcategoryMasterComponent.prototype, "addCategoryWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _h || Object)
    ], ProductSubcategoryMasterComponent.prototype, "quickAccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _j || Object)
    ], ProductSubcategoryMasterComponent.prototype, "winNotification", void 0);
    ProductSubcategoryMasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-subcategory-master',
            template: __webpack_require__("./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-master.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-master.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [String, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["_1" /* ProductSubcategoryMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["_1" /* ProductSubcategoryMasterService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["E" /* FileExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["E" /* FileExportService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["v" /* CurrentUserService */]) === "function" && _o || Object])
    ], ProductSubcategoryMasterComponent);
    return ProductSubcategoryMasterComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=product-subcategory-master.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-master.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSubcategoryMasterModule", function() { return ProductSubcategoryMasterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_subcategory_master_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-master-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_subcategory_master_component__ = __webpack_require__("./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_subcategory_add_product_subcategory_add_component__ = __webpack_require__("./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-add/product-subcategory-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_subcategory_edit_product_subcategory_edit_component__ = __webpack_require__("./src/app/layout/inventory-master/product-subcategory-master/product-subcategory-edit/product-subcategory-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { ProductCategorySharedModule } from '../../../shared/modules/product_category_shared.module';




// import { ProductCategoryAddComponent } from '../product-category-master/product-category-add/product-category-add.component';
var ProductSubcategoryMasterModule = /** @class */ (function () {
    function ProductSubcategoryMasterModule() {
    }
    ProductSubcategoryMasterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__product_subcategory_master_routing_module__["a" /* ProductSubcategoryMasterRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__product_subcategory_master_component__["a" /* ProductSubcategoryMasterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__product_subcategory_add_product_subcategory_add_component__["a" /* ProductSubcategoryAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__product_subcategory_edit_product_subcategory_edit_component__["a" /* ProductSubcategoryEditComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__product_subcategory_add_product_subcategory_add_component__["a" /* ProductSubcategoryAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__product_subcategory_edit_product_subcategory_edit_component__["a" /* ProductSubcategoryEditComponent */],
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"],
            ]
        })
    ], ProductSubcategoryMasterModule);
    return ProductSubcategoryMasterModule;
}());

//# sourceMappingURL=product-subcategory-master.module.js.map

/***/ })

});
//# sourceMappingURL=product-subcategory-master.module.chunk.js.map