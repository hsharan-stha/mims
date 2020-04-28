webpackJsonp(["item-master.module"],{

/***/ "./src/app/layout/inventory-master/item-master/item-master-add/item-master-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\"  id=\"attWindowContainer\">\r\n        <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n            <form name=\"itemForm\" [formGroup]=\"itemForm\">\r\n                    <div class=\"row\">\r\n                            <div class=\"col-md-5\">\r\n                            <jqxExpander [width]=\"220\" [height]=\"200\" [theme]=\"'energyblue'\" [showArrow]=\"false\" [toggleMode]=\"'none'\" [theme]=\"'energyblue'\">\r\n                                <div>\r\n                                  Product Category\r\n                                </div>\r\n                                <div style=\"overflow: hidden;\">\r\n                                  <jqxTree #myTree [width]=\"'100%'\" [theme]=\"'energyblue'\" [height]=\"'99%'\" [source]=\"treeRecords\" [hasThreeStates]=\"false\"\r\n                                    [checkboxes]=\"true\" (onCheckChange)=\"TreeCheckChange($event)\"></jqxTree>\r\n                                </div>\r\n                              </jqxExpander>\r\n                              <small class=\"text-primary\">* Select only one</small>\r\n                      </div> \r\n                      <div class=\"col-md-6\">     \r\n                <table class=\"table-w-tooltip\">\r\n                    <tr>\r\n                        <td>Code</td>\r\n                        <td>\r\n                            <jqxInput class=\"codeInput\" [height]=\"23\" formControlName=\"code\" [theme]=\"'energyblue'\"></jqxInput>\r\n                        </td>\r\n                        </tr>\r\n                        <tr>\r\n                        <td>Name</td>\r\n                        <td>\r\n                            <jqxInput class=\"nameInput\" [height]=\"23\" formControlName=\"name\" [theme]=\"'energyblue'\"></jqxInput>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Description</td>\r\n                        <td colspan=\"3\">\r\n                            <jqxTextArea #mydes\r\n                             class=\"descriptionInput\" [height]=\"90\" formControlName=\"description\" [theme]=\"'energyblue'\"></jqxTextArea>\r\n                        </td>\r\n                    </tr>\r\n                   <tr> \r\n                        <td>Unit</td>\r\n                        <td>\r\n                            <jqxComboBox #uComboBox [width]=\"180\" class=\"unit_idInput\" height=\"23\" [source]=\"unitAdapter\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [autoDropDownHeight]=\"true\" [searchMode]=\"'containsignorecase'\" [theme]=\"'energyblue'\">\r\n                            </jqxComboBox>\r\n                        </td>\r\n                   </tr>\r\n                    </table>\r\n                    </div>\r\n                    </div>\r\n                    <table>\r\n                    <tr>\r\n                        \r\n                        <td>Minimum Stock</td>\r\n                        <td>\r\n                            <jqxInput class=\"minimum_stockInput\" [height]=\"23\" formControlName=\"minimum_stock\" [theme]=\"'energyblue'\"></jqxInput>\r\n                        </td>\r\n                   \r\n                        <td>Maximum Stock</td>\r\n                        <td>\r\n                            <jqxInput class=\"maximum_stockInput\" [height]=\"23\" formControlName=\"maximum_stock\" [theme]=\"'energyblue'\"></jqxInput>\r\n                        </td>\r\n                        </tr>\r\n                        <tr>\r\n                        <td>Reorder Quantity</td>\r\n                        <td>\r\n                            <jqxInput class=\"reorder_quantityInput\" [height]=\"23\" formControlName=\"reorder_quantity\" [theme]=\"'energyblue'\"></jqxInput>\r\n                        </td>\r\n                   \r\n                        <td>Essential Item</td>\r\n                        <td>\r\n                            <jqxCheckBox #eiCheckBox [theme]=\"'energyblue'\"></jqxCheckBox>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </form>\r\n        </jqxValidator>\r\n    </div>\r\n    <div style=\"padding-top: 10px; text-align:right;\">\r\n        <jqxButton style=\"margin-right: 5px;\" [theme]=\"'energyblue'\" [disabled]=\"!itemForm.valid\" (onClick)=\"saveBtn(itemForm.value)\" [theme]=\"'energyblue'\">\r\n            Save\r\n        </jqxButton>\r\n        <jqxButton style=\"margin-right: 5px;\" (onClick)=\"cancelBtn()\" [theme]=\"'energyblue'\">\r\n            Cancel\r\n        </jqxButton>\r\n    </div>\r\n    <jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n    </jqxLoader>\r\n    <jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n    [autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n    <div id='windowMessage'></div>\r\n    </jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/item-master/item-master-add/item-master-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/item-master/item-master-add/item-master-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemMasterAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcheckbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxtree__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxtree.ts");
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









var ItemMasterAddComponent = /** @class */ (function () {
    function ItemMasterAddComponent(itemService, pcmService, ehs, apiUrl, fb, cus) {
        var _this = this;
        this.itemService = itemService;
        this.pcmService = pcmService;
        this.ehs = ehs;
        this.fb = fb;
        this.cus = cus;
        this.AddedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.treeRecords = [];
        this.userData = {};
        this.rules = [
            { input: '.codeInput', message: 'Code is required!', action: 'keydown, blur', rule: 'required' },
            { input: '.nameInput', message: ' Name is required!', action: 'keydown, blur', rule: 'required' },
            { input: '.descriptionInput', message: ' Description is required!', action: 'keydown, blur', rule: 'required' },
            { input: '.reorder_quantityInput', message: ' This reorder quantity is required!', action: 'keydown, blur', rule: 'required' },
            // {
            //   input: '.product_category_idInput', message: ' This field is required!', action: 'keydown, blur',
            //   rule: (input: any, commit: any): any => {
            //     let data = this.PcComboBox.val();
            //     let result = (data != '') ? true : false;
            //     return result;
            //   }
            // },
            {
                input: '.unit_idInput', message: ' Unit is required!', action: 'keydown, blur', rule: function (input, commit) {
                    var data = _this.uComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            { input: '.minimum_stockInput', message: ' Minimum stock is required!', action: 'keydown, blur', rule: 'required' },
            { input: '.maximum_stockInput', message: ' Maxium stock is required!', action: 'keydown, blur', rule: 'required' },
        ];
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.itemForm = fb.group({
            'code': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'description': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'reorder_quantity': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'minimum_stock': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'maximum_stock': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    }
    ItemMasterAddComponent.prototype.ngOnInit = function () {
        this.productCategory_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                url: this.apiUrl + 'product_category?limit=all',
            };
        this.productCategoryAdapter = new jqx.dataAdapter(this.productCategory_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }
        });
        this.unit_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                url: this.apiUrl + 'unit?limit=all',
            };
        this.unitAdapter = new jqx.dataAdapter(this.unit_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }
        });
        this.estate_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                url: this.apiUrl + 'tea_estate?limit=all',
            };
        this.estateAdapter = new jqx.dataAdapter(this.estate_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }
        });
        this.initTreeData();
    };
    ItemMasterAddComponent.prototype.initTreeData = function () {
        var _this = this;
        var post = [];
        post['limit'] = 'all';
        this.pcmService.index(post).subscribe(function (result) {
            console.log(result);
            _this.treeData = result;
            _this.treeSource = {
                datatype: 'json',
                datafields: [
                    { name: 'id' },
                    { name: 'parent_id' },
                    { name: 'code' },
                    { name: 'name' },
                ],
                data: _this.userData,
                id: 'id',
                localdata: _this.treeData
            };
            // create data adapter & perform Data Binding.
            _this.treeDataAdapter = new jqx.dataAdapter(_this.treeSource, { autoBind: true });
            _this.treeRecords = _this.treeDataAdapter.getRecordsHierarchy('id', 'parent_id', 'items', [{ name: 'name', map: 'label' }]);
            // for(let i = 0; i < this.treeData.length; i++){
            //   let currentLoop  = this.treeData[i];
            //   if(currentLoop['children'] && currentLoop['children'].length > 0){
            //     console.log('inside loop if ' + currentLoop['id'] + ' ' + currentLoop['name']);
            //     this.myTree.disableItem(currentLoop['id']);
            //   }
            // }
        }, function (error) {
            console.log(error);
        });
    };
    ItemMasterAddComponent.prototype.TreeCheckChange = function (e) {
        console.log(e);
        if (e.args.checked) {
            var selectedData = void 0;
            selectedData = this.myTree.getCheckedItems();
            if (selectedData.length > 1) {
                alert('Select Only One');
                this.myTree.uncheckAll();
            }
            else if (selectedData.length < 1) {
                alert('Atleast Select One');
            }
            else {
            }
        }
    };
    ItemMasterAddComponent.prototype.saveBtn = function (post) {
        var _this = this;
        var selectedData;
        selectedData = this.myTree.getCheckedItems();
        if (selectedData.length > 0) {
            post['product_category_id'] = selectedData[0].id;
        }
        else {
            post['product_category_id'] = null;
        }
        post['unit_id'] = this.uComboBox.val();
        post['essential_item'] = this.eiCheckBox.val();
        this.myValidator.validate(document.getElementById('itemForm'));
        if (post['product_category_id'] && post['unit_id']) {
            this.itemService.store(post).subscribe(function (result) {
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
    ItemMasterAddComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('PcComboBox'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _a || Object)
    ], ItemMasterAddComponent.prototype, "PcComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('PscComboBox'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _b || Object)
    ], ItemMasterAddComponent.prototype, "PscComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('uComboBox'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], ItemMasterAddComponent.prototype, "uComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox2'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], ItemMasterAddComponent.prototype, "myComboBox2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _e || Object)
    ], ItemMasterAddComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _f || Object)
    ], ItemMasterAddComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('eiCheckBox'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */]) === "function" && _g || Object)
    ], ItemMasterAddComponent.prototype, "eiCheckBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTree'),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxtree__["a" /* jqxTreeComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxtree__["a" /* jqxTreeComponent */]) === "function" && _h || Object)
    ], ItemMasterAddComponent.prototype, "myTree", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _j || Object)
    ], ItemMasterAddComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ItemMasterAddComponent.prototype, "AddedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ItemMasterAddComponent.prototype, "cancelData", void 0);
    ItemMasterAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-item-master-add',
            template: __webpack_require__("./src/app/layout/inventory-master/item-master/item-master-add/item-master-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/item-master/item-master-add/item-master-add.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["Z" /* ProductCategoryMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["Z" /* ProductCategoryMasterService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _m || Object, String, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _p || Object])
    ], ItemMasterAddComponent);
    return ItemMasterAddComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=item-master-add.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/item-master/item-master-edit/item-master-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\"  id=\"attWindowContainer\">\r\n        <jqxValidator #myValidator [rules]=\"rules\" [hintType]=\"'tooltip'\" [position]=\"'bottom'\">\r\n            <form name=\"itemForm\" [formGroup]=\"itemForm\">\r\n                    <div class=\"row\">\r\n                            <div class=\"col-md-5\">\r\n                            <jqxExpander [width]=\"220\" [height]=\"200\" [theme]=\"'energyblue'\" [showArrow]=\"false\" [toggleMode]=\"'none'\" [theme]=\"'energyblue'\">\r\n                                <div>\r\n                                  Product Category\r\n                                </div>\r\n                                <div style=\"overflow: hidden;\">\r\n                                  <jqxTree #myTree [width]=\"'100%'\" [theme]=\"'energyblue'\" [height]=\"'99%'\" [source]=\"treeRecords\" [hasThreeStates]=\"false\"\r\n                                    [checkboxes]=\"true\" (onCheckChange)=\"TreeCheckChange($event)\"></jqxTree>\r\n                                </div>\r\n                              </jqxExpander>\r\n                              <small class=\"text-primary\">* Select only one</small>\r\n                      </div> \r\n                      <div class=\"col-md-6\">     \r\n                <table class=\"table-w-tooltip\">\r\n                    <tr>\r\n                        <td>Code</td>\r\n                        <td>\r\n                            <jqxInput class=\"codeInput\" [height]=\"23\" formControlName=\"code\" [theme]=\"'energyblue'\"></jqxInput>\r\n                        </td>\r\n                        </tr>\r\n                        <tr>\r\n                        <td>Name</td>\r\n                        <td>\r\n                            <jqxInput class=\"nameInput\" [height]=\"23\" formControlName=\"name\" [theme]=\"'energyblue'\"></jqxInput>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Description</td>\r\n                        <td colspan=\"3\">\r\n                            <jqxTextArea #mydes\r\n                             class=\"descriptionInput\" [height]=\"90\" formControlName=\"description\" [theme]=\"'energyblue'\"></jqxTextArea>\r\n                        </td>\r\n                    </tr>\r\n                   <tr>\r\n                        <td>Unit</td>\r\n                        <td>\r\n                            <jqxComboBox #uComboBox [width]=\"180\" class=\"unit_idInput\" height=\"23\" [source]=\"unitAdapter\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [autoDropDownHeight]=\"true\" [searchMode]=\"'containsignorecase'\" [theme]=\"'energyblue'\">\r\n                            </jqxComboBox>\r\n                        </td>\r\n                   </tr>\r\n                    </table>\r\n                    </div>\r\n                    </div>\r\n                    <table>\r\n                    <tr>\r\n                        \r\n                        <td>Minimum Stock</td>\r\n                        <td>\r\n                            <jqxInput class=\"minimum_stockInput\" [height]=\"23\" formControlName=\"minimum_stock\" [theme]=\"'energyblue'\"></jqxInput>\r\n                        </td>\r\n                   \r\n                        <td>Maximum Stock</td>\r\n                        <td>\r\n                            <jqxInput class=\"maximum_stockInput\" [height]=\"23\" formControlName=\"maximum_stock\" [theme]=\"'energyblue'\"></jqxInput>\r\n                        </td>\r\n                        </tr>\r\n                        <tr>\r\n                        <td>Reorder Quantity</td>\r\n                        <td>\r\n                            <jqxInput class=\"reorder_quantityInput\" [height]=\"23\" formControlName=\"reorder_quantity\" [theme]=\"'energyblue'\"></jqxInput>\r\n                        </td>\r\n                   \r\n                        <td>Essential Item</td>\r\n                        <td>\r\n                            <jqxCheckBox #eiCheckBox [theme]=\"'energyblue'\"></jqxCheckBox>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </form>\r\n        </jqxValidator>\r\n    </div>\r\n    <div style=\"padding-top: 10px; text-align:right;\">\r\n        <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!itemForm.valid\" (onClick)=\"saveBtn(itemForm.value)\" [theme]=\"'energyblue'\">\r\n            Save\r\n        </jqxButton>\r\n        <jqxButton style=\"margin-right: 5px;\" (onClick)=\"cancelBtn()\" [theme]=\"'energyblue'\">\r\n            Cancel\r\n        </jqxButton>\r\n    </div>\r\n    <jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\" [theme]=\"'energyblue'\">\r\n    </jqxLoader>\r\n    <jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [appendContainer]=\"'#attWindowContainer'\"\r\n    [autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n    <div id='windowMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/item-master/item-master-edit/item-master-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/item-master/item-master-edit/item-master-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemMasterEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxtextarea__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxtextarea.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcheckbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxtree__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxtree.ts");
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










var ItemMasterEditComponent = /** @class */ (function () {
    function ItemMasterEditComponent(fb, cdr, apiUrl, ims, pcmService, ehs, cus) {
        var _this = this;
        this.fb = fb;
        this.cdr = cdr;
        this.ims = ims;
        this.pcmService = pcmService;
        this.ehs = ehs;
        this.cus = cus;
        this.UpdatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancelData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.treeRecords = [];
        this.userData = {};
        this.rules = [
            { input: '.codeInput', message: 'Code is required!', action: 'keyup, blur', rule: 'required' },
            { input: '.nameInput', message: ' Name is required!', action: 'keyup, blur', rule: 'required' },
            { input: '.descriptionInput', message: ' Description is required!', action: 'keyup, blur', rule: 'required' },
            { input: '.reorder_quantityInput', message: ' This reorder quantity is required!', action: 'keyup, blur', rule: 'required' },
            // {
            //   input: '.product_category_idInput', message: ' This field is required!', action: 'change',
            //   rule: (input: any, commit: any): any => {
            //     let data = this.PcComboBox.val();
            //     let result = (data != '') ? true : false;
            //     return result;
            //   }
            // },
            {
                input: '.unit_idInput', message: ' Unit is required!', action: 'change', rule: function (input, commit) {
                    var data = _this.uComboBox.val();
                    var result = (data != '') ? true : false;
                    return result;
                }
            },
            { input: '.minimum_stockInput', message: ' Minimum stock is required!', action: 'keyup, blur', rule: 'required' },
            { input: '.maximum_stockInput', message: ' Maxium stock is required!', action: 'keyup, blur', rule: 'required' },
        ];
        this.apiUrl = apiUrl;
        this.userData = this.cus.getTokenData();
        this.createForm();
    }
    ItemMasterEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTreeData();
        this.productCategory_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                url: this.apiUrl + 'product_category?limit=all',
            };
        this.productCategoryAdapter = new jqx.dataAdapter(this.productCategory_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }, loadComplete: function () {
                _this.PcComboBox.selectItem(_this.ItemEditData.product_category_id);
            }
        });
        this.unit_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                url: this.apiUrl + 'unit?limit=all',
            };
        this.unitAdapter = new jqx.dataAdapter(this.unit_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }, loadComplete: function () {
                _this.uComboBox.selectItem(_this.ItemEditData.unit_id);
            }
        });
        this.estate_data =
            {
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                datafields: [
                    { name: 'id' },
                    { name: 'name' },
                ],
                data: this.userData,
                url: this.apiUrl + 'tea_estate?limit=all',
            };
        this.estateAdapter = new jqx.dataAdapter(this.estate_data, {
            downloadComplete: function (data, status, xhr) {
                var tData = data.data;
                return tData;
            }, loadComplete: function () {
                _this.myComboBox2.selectItem(_this.ItemEditData.estate_id);
            }
        });
        this.EditData = new __WEBPACK_IMPORTED_MODULE_2__shared__["N" /* Item */](this.ItemEditData);
        this.itemForm.setValue(this.EditData);
    };
    ItemMasterEditComponent.prototype.ngAfterViewInit = function () {
        console.log(this.EditData.description);
        this.mydes.val(this.EditData.description);
        if (this.ItemEditData.essential_item == 1) {
            this.eiCheckBox.check();
        }
        else {
            this.eiCheckBox.uncheck();
        }
        this.cdr.detectChanges();
    };
    ItemMasterEditComponent.prototype.createForm = function () {
        this.itemForm = this.fb.group({
            'code': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'description': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'minimum_stock': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'maximum_stock': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'reorder_quantity': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    };
    ItemMasterEditComponent.prototype.initTreeData = function () {
        var _this = this;
        var post = [];
        post['limit'] = 'all';
        this.pcmService.index(post).subscribe(function (result) {
            _this.treeData = result;
            _this.treeSource = {
                datatype: 'json',
                datafields: [
                    { name: 'id' },
                    { name: 'parent_id' },
                    { name: 'code' },
                    { name: 'name' },
                    { name: 'children' }
                ],
                id: 'id',
                localdata: _this.treeData
            };
            // create data adapter & perform Data Binding.
            _this.treeDataAdapter = new jqx.dataAdapter(_this.treeSource, {
                autoBind: true,
                loadComplete: function () {
                }
            });
            _this.treeRecords = _this.treeDataAdapter.getRecordsHierarchy('id', 'parent_id', 'items', [{ name: 'name', map: 'label' }]);
            setTimeout(function () {
                _this.myTree.expandAll();
                var items = _this.myTree.getItems();
                for (var i = 0; i < items.length; i++) {
                    var currentItem = items[i];
                    if (currentItem['id'] == _this.ItemEditData.product_category_id) {
                        _this.myTree.checkItem(currentItem.element, true);
                    }
                    ;
                }
                ;
            }, 2000);
        }, function (error) {
            console.log(error);
        });
    };
    ItemMasterEditComponent.prototype.TreeCheckChange = function (e) {
        if (e.args.checked) {
            var selectedData = void 0;
            selectedData = this.myTree.getCheckedItems();
            if (selectedData.length > 1) {
                alert('Select Only One');
                this.myTree.uncheckAll();
            }
            else if (selectedData.length < 1) {
                alert('Atleast Select One');
            }
            else {
            }
        }
    };
    ItemMasterEditComponent.prototype.saveBtn = function (post) {
        var _this = this;
        var selectedData;
        selectedData = this.myTree.getCheckedItems();
        if (selectedData.length > 0) {
            post['product_category_id'] = selectedData[0].id;
        }
        else {
            post['product_category_id'] = null;
        }
        post['unit_id'] = this.uComboBox.val();
        post['essential_item'] = this.eiCheckBox.val();
        this.myValidator.validate(document.getElementById('itemForm'));
        if (post['product_category_id'] && post['unit_id']) {
            this.jqxLoader.open();
            this.ims.update(this.ItemEditData.id, post).subscribe(function (result) {
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
    ItemMasterEditComponent.prototype.cancelBtn = function () {
        this.cancelData.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mydes'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxtextarea__["a" /* jqxTextAreaComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxtextarea__["a" /* jqxTextAreaComponent */]) === "function" && _a || Object)
    ], ItemMasterEditComponent.prototype, "mydes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('PcComboBox'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _b || Object)
    ], ItemMasterEditComponent.prototype, "PcComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('uComboBox'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _c || Object)
    ], ItemMasterEditComponent.prototype, "uComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myComboBox2'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _d || Object)
    ], ItemMasterEditComponent.prototype, "myComboBox2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _e || Object)
    ], ItemMasterEditComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */]) === "function" && _f || Object)
    ], ItemMasterEditComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('eiCheckBox'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */]) === "function" && _g || Object)
    ], ItemMasterEditComponent.prototype, "eiCheckBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTree'),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxtree__["a" /* jqxTreeComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxtree__["a" /* jqxTreeComponent */]) === "function" && _h || Object)
    ], ItemMasterEditComponent.prototype, "myTree", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ItemEditData'),
        __metadata("design:type", Object)
    ], ItemMasterEditComponent.prototype, "ItemEditData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ItemMasterEditComponent.prototype, "UpdatedData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ItemMasterEditComponent.prototype, "cancelData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _j || Object)
    ], ItemMasterEditComponent.prototype, "winNotification", void 0);
    ItemMasterEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-item-master-edit',
            template: __webpack_require__("./src/app/layout/inventory-master/item-master/item-master-edit/item-master-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/item-master/item-master-edit/item-master-edit.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _l || Object, String, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["O" /* ItemMasterService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["Z" /* ProductCategoryMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["Z" /* ProductCategoryMasterService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["B" /* ErrorHandleService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _q || Object])
    ], ItemMasterEditComponent);
    return ItemMasterEditComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
}());

//# sourceMappingURL=item-master-edit.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/item-master/item-master-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemMasterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_master_component__ = __webpack_require__("./src/app/layout/inventory-master/item-master/item-master.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__item_master_component__["a" /* ItemMasterComponent */]
    }
];
var ItemMasterRoutingModule = /** @class */ (function () {
    function ItemMasterRoutingModule() {
    }
    ItemMasterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ItemMasterRoutingModule);
    return ItemMasterRoutingModule;
}());

//# sourceMappingURL=item-master-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/item-master/item-master.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div>\r\n        <div class=\"box-container\">\r\n            <form name=\"imForm\" [formGroup]=\"imForm\">\r\n                <fieldset>\r\n                    <legend>Chart of Items</legend>\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"grid-box-container\">\r\n                                <jqxExpander [width]=\"'99%'\" [height]=\"'100%'\" [showArrow]=\"false\" [toggleMode]=\"'none'\" [theme]=\"'energyblue'\">\r\n                                    <div>Group Name</div>\r\n                                    <div>\r\n                                      <jqxTreeGrid #groupTreeGrid [width]=\"'99.6%'\" [height]=\"'99.4%'\" (onRowSelect)=\"treeRowSelect($event)\" [source]=\"treeDataAdapter\" [pageable]=\"false\" [columns]=\"treeColumns\" [selectionMode]=\"'singleRow'\" [filterable]=\"true\" [icons]=\"true\" [incrementalSearch]=\"true\" [theme]=\"'energyblue'\" [filterMode]=\"'simple'\">\r\n                                      </jqxTreeGrid>\r\n                                    </div>\r\n                                </jqxExpander>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <span *ngIf=\"selectedItem\" >  \r\n                                            Selected : <strong > {{ selectedItem }}</strong>\r\n                                            <jqxButton [theme]=\"'energyblue'\" [width]=\"120\" (onClick)=\"resetSelection()\">\r\n                                                Reset Selection\r\n                                            </jqxButton>\r\n                                        </span> \r\n                                        <strong *ngIf=\"!selectedItem\"> Select Group Name for Sub Items </strong>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Item / Sub Item Name</label>\r\n                                        <jqxInput [width]=\"'100%'\" [height]=\"25\" formControlName=\"name\" [minLength]=\"3\" [placeHolder]=\"'Enter Name'\" [theme]=\"'energyblue'\"></jqxInput>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label>Code</label>\r\n                                        <jqxInput [width]=\"'100%'\" [height]=\"25\" formControlName=\"code\" [placeHolder]=\"'Enter Code'\" [theme]=\"'energyblue'\"></jqxInput>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label>Product Category</label>\r\n                                        <jqxComboBox #productCategoryCombo [width]=\"'100%'\" [height]='23' [theme]=\"'energyblue'\" [source]='productCategoryAdapter' [valueMember]=\"'code'\" [displayMember]=\"'name'\" [searchMode]=\"'containsignorecase'\">\r\n                                        </jqxComboBox>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <jqxCheckBox (onChange)=\"Change($event)\" #transactCheck [theme]=\"'energyblue'\"> &nbsp; Transact </jqxCheckBox>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Description</label>\r\n                                        <jqxTextArea #mydes class=\"descriptionInput\" [height]=\"88\" formControlName=\"description\" [theme]=\"'energyblue'\"></jqxTextArea>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label>Unit</label>\r\n                                        <jqxComboBox #uComboBox [width]=\"'100%'\" class=\"unit_idInput\" height=\"23\" [source]=\"unitAdapter\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [autoDropDownHeight]=\"true\" [searchMode]=\"'containsignorecase'\" [theme]=\"'energyblue'\">\r\n                                            </jqxComboBox>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"w-100\"></div>\r\n                                <div class=\"col-12\" *ngIf=\"isChecked\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Minimum Stock</label>\r\n                                                <jqxInput [width]=\"'100%'\" [height]=\"25\" formControlName=\"minimum_stock\" [minLength]=\"0\" [theme]=\"'energyblue'\"></jqxInput>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label>Reorder Quantity</label>\r\n                                                <jqxInput [width]=\"'100%'\" [height]=\"25\" formControlName=\"reorder_quantity\" [minLength]=\"0\" [theme]=\"'energyblue'\"></jqxInput>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Maximum Stock</label>\r\n                                                <jqxInput [width]=\"'100%'\" [height]=\"25\" formControlName=\"maximum_stock\" [minLength]=\"0\" [theme]=\"'energyblue'\"></jqxInput>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label>&nbsp;</label>\r\n                                                <jqxCheckBox #essentialItemCheck formControlName=\"essential_item\" [theme]=\"'energyblue'\"> &nbsp; Essential Item </jqxCheckBox>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"pt-1-2\">&nbsp;</label>\r\n                                        <jqxButton [theme]=\"'energyblue'\" [disabled]=\"!imForm.valid\" [width]=\"100\" (onClick)=\"save(imForm.value)\">\r\n                                            Save\r\n                                        </jqxButton>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"w-100\"></div>\r\n                                <div class=\"col\">\r\n                                    <jqxGrid #groupGrid\r\n                                        [width]=\"'100%'\" [source]=\"gridDataAdapter\" [columns]=\"gridColumns\"\r\n                                        [pageable]=\"false\" [height]=\"300\"\r\n                                        [autorowheight]=\"false\" [theme]=\"'energyblue'\"\r\n                                        (onRowselect)=\"rowChange($event)\" (onRowunselect)=\"rowUnChange($event)\" \r\n                                        [keyboardnavigation]=\"true\" (onRowclick)=\"itemRowclick($event)\">\r\n                                        <!-- [showtoolbar]=\"true\" [rendertoolbar]=\"gridRenderToolbar\" -->\r\n                                    </jqxGrid>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </form>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<jqxWindow #itemWindow [width]=\"'70%'\" [height]=\"'30%'\" [cancelButton]=\"'.cancelButton'\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n  <div>\r\n    Item Detail\r\n  </div>\r\n  <div>\r\n    <div class=\"table-container\">\r\n        <table class=\"table table-bordered table-striped\" style=\"width:100%;\">\r\n            <thead style=\"background:#efefef;\">\r\n                <tr>\r\n                    <th>Code</th>\r\n                    <th>Name</th>\r\n                    <th>Product Category</th>\r\n                    <th>Minimum Stock</th>\r\n                    <th>Maximum Stock</th>\r\n                    <th>Reorder Quantity</th>\r\n                    <th>Unit</th>\r\n                    <!-- <th>Essential Item</th> -->\r\n                    <th>Transact</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngIf=\"childData\">\r\n                    <td><span *ngIf=\"childData && childData.code\">{{ childData.code }}</span></td>\r\n                    <td><span *ngIf=\"childData && childData.name\">{{ childData.name }}</span></td>\r\n                    <td><span *ngIf=\"childData && childData.product_category_name\">{{ childData.product_category_name }}</span></td>\r\n                    <td><span *ngIf=\"childData && childData.minimum_stock\">{{ childData.minimum_stock }}</span></td>\r\n                    <td><span *ngIf=\"childData && childData.maximum_stock\">{{ childData.maximum_stock }}</span></td>\r\n                    <td><span *ngIf=\"childData && childData.reorder_quantity\">{{ childData.reorder_quantity }}</span></td>\r\n                    <td><span *ngIf=\"childData && childData.unit\">{{ childData.unit.name }}</span></td>\r\n                    <!-- <td>\r\n                        <span *ngIf=\"childData && childData.essential_item && childData.essential_item==0\">No</span>\r\n                        <span *ngIf=\"childData && childData.essential_item && childData.essential_item==1\"> Yes </span>\r\n                    </td> -->\r\n                    <td>\r\n                        <span *ngIf=\"childData && childData.transact && childData.transact==0\">No</span>\r\n                        <span *ngIf=\"childData && childData.transact && childData.transact==1\">Yes</span>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"!childData\">\r\n                    <td colspan=\"9\" class=\"text-center\">\r\n                        No Data Found\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n  </div>\r\n</jqxWindow>\r\n\r\n<jqxNotification #msgNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n  [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'success'\">\r\n  <div id='message'></div>\r\n</jqxNotification>\r\n<jqxNotification #errNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n  [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'error'\">\r\n  <div id='error'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/inventory-master/item-master/item-master.component.scss":
/***/ (function(module, exports) {

module.exports = ".grid-box-container {\n  height: calc(100vh - 100px); }\n\n.jqx-grid-cell:hover {\n  cursor: pointer !important; }\n"

/***/ }),

/***/ "./src/app/layout/inventory-master/item-master/item-master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemMasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxtreegrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxtreegrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcheckbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ItemMasterComponent = /** @class */ (function () {
    function ItemMasterComponent(fb, ims, pcm, ums) {
        var _this = this;
        this.fb = fb;
        this.ims = ims;
        this.pcm = pcm;
        this.ums = ums;
        this.treeColumns = [];
        this.gridColumns = [];
        this.deleteRowIndexes = [];
        this.isChecked = false;
        this.selectedItem = '';
        this.productCategoryAdapter = [];
        this.unitAdapter = [];
        /**
         * Child Grid Toolbar
         */
        this.gridRenderToolbar = function (toolbar) {
            var container = document.createElement('div');
            container.style.margin = '5px';
            var buttonContainer3 = document.createElement('div');
            buttonContainer3.id = 'buttonContainer3';
            buttonContainer3.style.cssText = 'float: left; margin-left: 5px';
            container.appendChild(buttonContainer3);
            toolbar[0].appendChild(container);
            var deleteRowButton = jqwidgets.createInstance('#buttonContainer3', 'jqxButton', { width: 150, value: 'Delete Selected Row', theme: 'energyblue' });
            deleteRowButton.addEventHandler('click', function () {
                var id = _this.deleteRowIndexes;
                var ids = [];
                var rowscount = _this.groupGrid.getdatainformation().rowscount;
                for (var i = 0; i < id.length; i++) {
                    var dataRecord = _this.groupGrid.getrowdata(Number(id[i]));
                    ids.push(dataRecord['group_code']);
                    var testId = _this.groupGrid.getrowid(Number(id[i]));
                    _this.groupGrid.deleterow(testId);
                }
                //Load Grid After Item Have been deleted.
                _this.treeRowSelectedData(_this.selectedTreeGroupId);
                if (ids.length > 0 && ids.length <= parseFloat(rowscount)) {
                    if (confirm("Are you sure? You Want to delete")) {
                        _this.jqxLoader.open();
                        _this.ims.destroy('(' + ids + ')').subscribe(function (result) {
                            _this.jqxLoader.close();
                            if (result['message']) {
                                _this.groupGrid.clearselection();
                                _this.deleteRowIndexes = [];
                                var messageDiv = document.getElementById('message');
                                messageDiv.innerText = result['message'];
                                _this.msgNotification.open();
                            }
                            if (result['error']) {
                                _this.groupGrid.clearselection();
                                _this.deleteRowIndexes = [];
                                var messageDiv = document.getElementById('error');
                                messageDiv.innerText = result['error']['message'];
                                _this.errNotification.open();
                            }
                            // Reload Tree grid after item deletion
                            _this.loadTreeData();
                            //Reload grid after item deletion
                            _this.treeRowSelectedData(_this.selectedTreeGroupId);
                        }, function (error) {
                            _this.jqxLoader.close();
                            console.info(error);
                        });
                    }
                    _this.groupGrid.updatebounddata();
                }
                else {
                    var messageDiv = document.getElementById('error');
                    messageDiv.innerText = 'Please select some item to delete';
                    _this.errNotification.open();
                }
            });
        }; //render toolbar ends
        this.childData = null;
        this.createForm();
    }
    /**
     * Create the form group
     * with given form control name
     */
    ItemMasterComponent.prototype.createForm = function () {
        this.imForm = this.fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'code': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'description': [null],
            'minimum_stock': [null],
            'maximum_stock': [null],
            'reorder_quantity': [null],
            'essential_item': [null],
        });
    };
    ItemMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var post = [];
        post['limit'] = 'all';
        this.pcm.index(post).subscribe(function (result) {
            _this.productCategoryAdapter = result;
        }, function (error) {
            console.log(error);
        });
        this.ums.index({ limit: 'all' }).subscribe(function (result) {
            _this.unitAdapter = result;
        }, function (error) {
            console.log(error);
        });
        localStorage.removeItem('selectedTreeItem');
        this.treeSource =
            {
                dataType: "json",
                dataFields: [
                    { name: 'id', type: 'string' },
                    { name: 'code', type: 'string' },
                    { name: 'name', type: 'string' },
                    { name: 'parent_id', type: 'number' },
                    { name: 'product_category_name', type: 'string', map: 'product_category>name' }
                ],
                hierarchy: {
                    keyDataField: { name: 'id' },
                    parentDataField: { name: 'parent_id' }
                },
                id: 'id',
                localdata: []
            };
        this.treeDataAdapter = new jqx.dataAdapter(this.treeSource);
        this.treeColumns =
            [
                { text: 'Code', dataField: 'code', width: '130', filterable: true },
                { text: 'Name', dataField: 'name', width: '200', filterable: true },
                { text: 'Product Type', dataField: 'product_category_name' }
            ];
        this.gridSource =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'string' },
                    { name: 'code', type: 'string' },
                    { name: 'name', type: 'string' },
                    { name: 'parent_id', type: 'number' },
                    { name: 'product_category_name', type: 'string', map: 'product_category>name' },
                    { name: 'transact', type: 'string' },
                    { name: 'essential_item' },
                    { name: 'maximum_stock' },
                    { name: 'minimum_stock' },
                    { name: 'reorder_quantity' },
                    { name: 'unit' }
                ],
                id: 'id',
                pagesize: 20,
                localdata: [],
            };
        this.gridDataAdapter = new jqx.dataAdapter(this.gridSource);
        this.gridColumns =
            [
                {
                    text: 'S.N', sortable: false, filterable: false, editable: false,
                    groupable: false, draggable: false, resizable: false,
                    datafield: '', columntype: 'number', width: 50,
                    cellsrenderer: function (row, column, value) {
                        return "<div style='margin:4px;'>" + (value + 1) + "</div>";
                    }
                },
                { text: 'Code', dataField: 'code', width: '130' },
                { text: 'Name', dataField: 'name', width: '200' },
                { text: 'Transaction', datafield: 'transact' },
            ];
    };
    ItemMasterComponent.prototype.ngAfterViewInit = function () {
        this.loadTreeData();
    };
    ItemMasterComponent.prototype.ngOnDestroy = function () {
        localStorage.removeItem('selectedTreeItem');
    };
    ItemMasterComponent.prototype.Change = function ($e) {
        this.isChecked = $e.args.checked;
        if (!this.isChecked) {
            this.imForm.get('minimum_stock').reset();
            this.imForm.get('maximum_stock').reset();
            this.imForm.get('reorder_quantity').reset();
            this.imForm.get('essential_item').reset();
            this.imForm.get('minimum_stock').clearValidators();
            this.imForm.get('minimum_stock').updateValueAndValidity();
            this.imForm.get('maximum_stock').clearValidators();
            this.imForm.get('maximum_stock').updateValueAndValidity();
            // this.imForm.get('essential_item').clearValidators();
            // this.imForm.get('essential_item').updateValueAndValidity();
            // this.imForm.get('assetCode').enable();
            // this.imForm.get('assetCode').setValidators(Validators.required);
        }
        else {
            // this.imForm.get('assetCode').disable();
            this.imForm.get('minimum_stock').setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
            this.imForm.get('minimum_stock').updateValueAndValidity();
            this.imForm.get('maximum_stock').setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
            this.imForm.get('maximum_stock').updateValueAndValidity();
            // this.imForm.get('essential_item').setValidators(Validators.required);
            // this.imForm.get('essential_item').updateValueAndValidity();
        }
    };
    /**
     * Row selected event in Tree Grid
     * @param $event
     */
    ItemMasterComponent.prototype.treeRowSelect = function ($event) {
        // console.log($event);
        this.deleteRowIndexes = [];
        this.selectedTreeGroupId = $event.args['key'];
        this.treeRowSelectedData(this.selectedTreeGroupId);
        localStorage.setItem('selectedTreeItem', JSON.stringify($event.args.row));
        this.selectedItem = $event && $event.args && $event.args.row && $event.args.row['name'];
    };
    ItemMasterComponent.prototype.resetSelection = function () {
        localStorage.removeItem('selectedTreeItem');
        this.selectedItem = null;
        this.gridSource.localdata = [];
        this.groupGrid.updatebounddata();
    };
    /**
     * Get child Data of selected row in Tree Grid
     * and display the childern in Grid
     * @param groupId
     */
    ItemMasterComponent.prototype.treeRowSelectedData = function (groupId) {
        var _this = this;
        this.groupGrid.clearselection();
        var post = {};
        post['parent_id'] = groupId;
        // post['transact'] = 1;
        post['limit'] = 'all';
        console.log(groupId);
        if (post['parent_id']) {
            this.ims.index(post).subscribe(function (response) {
                console.info(response);
                var TreeChild = response;
                if (response.length < 1) {
                    //   let messageDiv: any = document.getElementById('error');
                    //   messageDiv.innerText = response[0].error;
                    //   this.errNotification.open();
                    _this.gridSource.localdata = [];
                }
                else {
                    _this.gridSource.localdata = response;
                }
                _this.groupGrid.updatebounddata();
            }, function (error) {
                _this.gridSource.localdata = [];
                _this.groupGrid.updatebounddata();
                console.log(error);
            });
        }
    };
    /**
     * Grid row checked event
     * @param event
     */
    ItemMasterComponent.prototype.rowChange = function (event) {
        this.deleteRowIndexes.push(event.args.rowindex);
    };
    /**
     * Grid row unchecked event
     * @param event
     */
    ItemMasterComponent.prototype.rowUnChange = function (event) {
        var index = this.deleteRowIndexes.indexOf(event.args.rowindex);
        if (index > -1) {
            this.deleteRowIndexes.splice(index, 1);
        }
    };
    /**
     * Load Tree Grid Data
     */
    ItemMasterComponent.prototype.loadTreeData = function () {
        var _this = this;
        this.ims.index({ limit: 'all', transact: 0 }).subscribe(function (res) {
            _this.loadTreeSource(res);
            // if (res['data']['data'].length < 1) {
            //   let messageDiv: any = document.getElementById('error');
            //   messageDiv.innerText = res['data'][0].error;
            //   this.errNotification.open();
            //   this.loadTreeSource([]);
            // } else {
            //   this.loadTreeSource(res['data']['data']);
            // }
        }, function (error) {
            console.log(error);
        });
    };
    /**
     *  Load Tree Grid Source with Data
     * @param data
     */
    ItemMasterComponent.prototype.loadTreeSource = function (data) {
        this.treeSource.localdata = data;
        this.groupTreeGrid.updateBoundData();
        var datat = localStorage.getItem('selectedTreeItem');
        this.groupTreeGrid.expandAll();
        if (datat) {
            var selectedData = JSON.parse(datat);
            this.groupTreeGrid.selectRow(selectedData['code']);
        }
    };
    ItemMasterComponent.prototype.itemRowclick = function ($event) {
        console.log($event);
        this.childData = $event && $event.args && $event.args.row && $event.args.row.bounddata || null;
        if (this.childData) {
            this.itemWindow.open();
        }
        else {
            this.childData = null;
        }
    };
    /**
     * Function triggered when save button is clicked
     * @param formData
     */
    ItemMasterComponent.prototype.save = function (formData) {
        var _this = this;
        var treeGridData = this.groupTreeGrid.getSelection();
        if (this.isChecked) {
            formData['transact'] = 1;
            formData['essential_item'] = (this.essentialItemCheck.val()) ? 1 : 0;
        }
        else {
            formData['transact'] = 0;
        }
        var treeData = {};
        var data = localStorage.getItem('selectedTreeItem');
        var selectedData;
        if (data) {
            selectedData = JSON.parse(data);
            formData['parent_id'] = selectedData['id'];
        }
        formData['product_category_id'] = this.productCategoryCombo.val() || null;
        console.log(this.uComboBox.val());
        formData['unit_id'] = this.uComboBox.val() || null;
        console.log(formData);
        if (formData && formData['product_category_id'] && formData['unit_id']) {
            this.jqxLoader.open();
            this.ims.store(formData).subscribe(function (result) {
                if (result['message']) {
                    if (selectedData) {
                        var groupId = selectedData['id'];
                        _this.treeRowSelectedData(groupId);
                    }
                    var messageDiv = document.getElementById('message');
                    messageDiv.innerText = result['message'];
                    _this.msgNotification.open();
                    _this.loadTreeData();
                    _this.imForm.reset();
                    // this.gridSource.localdata = [];
                    // this.groupGrid.updatebounddata();
                }
                _this.jqxLoader.close();
                if (result['error']) {
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
            var messageDiv = document.getElementById('error');
            messageDiv.innerText = 'Please Enter all required field.';
            this.errNotification.open();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('groupTreeGrid'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxtreegrid__["a" /* jqxTreeGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxtreegrid__["a" /* jqxTreeGridComponent */]) === "function" && _a || Object)
    ], ItemMasterComponent.prototype, "groupTreeGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('groupGrid'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _b || Object)
    ], ItemMasterComponent.prototype, "groupGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _c || Object)
    ], ItemMasterComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('errNotification'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _d || Object)
    ], ItemMasterComponent.prototype, "errNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _e || Object)
    ], ItemMasterComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jtransactCheck'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */]) === "function" && _f || Object)
    ], ItemMasterComponent.prototype, "transactCheck", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('essentialItemCheck'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_jqwidgets_framework_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */]) === "function" && _g || Object)
    ], ItemMasterComponent.prototype, "essentialItemCheck", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('productCategoryCombo'),
        __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _h || Object)
    ], ItemMasterComponent.prototype, "productCategoryCombo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('uComboBox'),
        __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _j || Object)
    ], ItemMasterComponent.prototype, "uComboBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('itemWindow'),
        __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _k || Object)
    ], ItemMasterComponent.prototype, "itemWindow", void 0);
    ItemMasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-item-master',
            template: __webpack_require__("./src/app/layout/inventory-master/item-master/item-master.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/item-master/item-master.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["O" /* ItemMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["O" /* ItemMasterService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["Z" /* ProductCategoryMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["Z" /* ProductCategoryMasterService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["_19" /* UnitMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["_19" /* UnitMasterService */]) === "function" && _p || Object])
    ], ItemMasterComponent);
    return ItemMasterComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=item-master.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/item-master/item-master.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemMasterModule", function() { return ItemMasterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_master_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/item-master/item-master-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_master_component__ = __webpack_require__("./src/app/layout/inventory-master/item-master/item-master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_master_add_item_master_add_component__ = __webpack_require__("./src/app/layout/inventory-master/item-master/item-master-add/item-master-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_master_edit_item_master_edit_component__ = __webpack_require__("./src/app/layout/inventory-master/item-master/item-master-edit/item-master-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ItemMasterModule = /** @class */ (function () {
    function ItemMasterModule() {
    }
    ItemMasterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__item_master_routing_module__["a" /* ItemMasterRoutingModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__item_master_add_item_master_add_component__["a" /* ItemMasterAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__item_master_edit_item_master_edit_component__["a" /* ItemMasterEditComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__item_master_component__["a" /* ItemMasterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__item_master_add_item_master_add_component__["a" /* ItemMasterAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__item_master_edit_item_master_edit_component__["a" /* ItemMasterEditComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], ItemMasterModule);
    return ItemMasterModule;
}());

//# sourceMappingURL=item-master.module.js.map

/***/ })

});
//# sourceMappingURL=item-master.module.chunk.js.map