webpackJsonp(["product-class-master.module"],{

/***/ "./src/app/layout/inventory-master/product-class-master/product-class-master-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductClassMasterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_class_master_component__ = __webpack_require__("./src/app/layout/inventory-master/product-class-master/product-class-master.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__product_class_master_component__["a" /* ProductClassMasterComponent */],
    }
];
var ProductClassMasterRoutingModule = /** @class */ (function () {
    function ProductClassMasterRoutingModule() {
    }
    ProductClassMasterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ProductClassMasterRoutingModule);
    return ProductClassMasterRoutingModule;
}());

//# sourceMappingURL=product-class-master-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/product-class-master/product-class-master.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 tfm-panel-left\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header\">\r\n                    <h2> Quick Access </h2>\r\n                </div>\r\n                 <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" >\r\n                    <ng-template #quickAccess></ng-template>\r\n                </jqxPanel> \r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-10 tfm-panel-right\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header\">\r\n                    <h2> Product Class Master </h2>\r\n                </div>\r\n                <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\">\r\n                    <!-- <div class=\"tfm-panel-body\"> -->\r\n                        <jqxDataTable #myDataTable\r\n                            (onRowSelect)=\"onRowSelect($event)\"  (onRowUnselect)=\"onRowUnselect($event)\"\r\n                            (onRowEndEdit)=\"onRowEndEdit($event)\"  (onRowBeginEdit)=\"onRowBeginEdit($event)\"\r\n                            [width]=\"'99.8%'\" [height]=\"'82vh'\" [source]=\"dataAdapter\" [columns]=\"columns\"\r\n                            [altRows]=\"true\" [editable]=\"true\" [pageable]=\"true\" \r\n                            [pagerButtonsCount]=\"8\" [showToolbar]=\"true\" [toolbarHeight]=\"35\" \r\n                            [renderToolbar]=\"renderToolbar\" [pagerMode]=\"'advanced'\">\r\n                        </jqxDataTable>\r\n                    <!-- </div> -->\r\n                </jqxPanel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='listingMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/product-class-master/product-class-master.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/product-class-master/product-class-master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductClassMasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxdatatable__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxdatatable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductClassMasterComponent = /** @class */ (function () {
    function ProductClassMasterComponent(componentFactoryResolver) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.myData = [
            {
                "code": '00001',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00002',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00003',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00004',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00005',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00006',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00007',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00008',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00009',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00010',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00011',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00012',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00013',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00014',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00015',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00016',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00017',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00018',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00019',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00020',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            },
            {
                "code": '00021',
                "codeName": 'Petrol',
                "drawback": '101.00',
                "depb": '1.00',
                "hscode": '101',
                "test": {
                    "hello": '120'
                }
            }
        ];
        this.source = {
            localData: this.myData,
            dataType: 'json',
            dataFields: [
                { name: 'code', type: 'string' },
                { name: 'codeName', type: 'string' },
                { name: 'drawback', type: 'float' },
                { name: 'depb', type: 'float' },
                { name: 'hscode', type: 'float' },
                { name: 'hello', map: 'test>hello' },
            ],
        };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.renderToolbar = function (toolBar) {
            var theme = jqx.theme;
            var toTheme = function (className) {
                if (theme == '')
                    return className;
                return className + ' ' + className + '-' + theme;
            };
            // appends buttons to the status bar.
            var container = document.createElement('div');
            var fragment = document.createDocumentFragment();
            container.style.cssText = 'overflow: hidden; position: hidden; height: "100%"; width: "100%"';
            var createButtons = function (name, cssClass) {
                _this[name] = document.createElement('div');
                _this[name].style.cssText = 'padding: 3px; margin: 2px; float: left; border: none';
                var iconDiv = document.createElement('div');
                iconDiv.style.cssText = 'margin: 4px; width: 16px; height: 16px;';
                iconDiv.className = cssClass;
                _this[name].appendChild(iconDiv);
                return _this[name];
            };
            var buttons = [
                createButtons('addButton', toTheme('jqx-icon-plus')),
                createButtons('editButton', toTheme('jqx-icon-edit')),
                createButtons('deleteButton', toTheme('jqx-icon-delete')),
                createButtons('cancelButton', toTheme('jqx-icon-cancel')),
                createButtons('updateButton', toTheme('jqx-icon-save'))
            ];
            for (var i = 0; i < buttons.length; i++) {
                fragment.appendChild(buttons[i]);
            }
            container.appendChild(fragment);
            toolBar[0].appendChild(container);
            var addButtonOptions = {
                height: 25, width: 25
            };
            var otherButtonsOptions = {
                disabled: true, height: 25, width: 25
            };
            // we use TypeScript way of creating widgets here
            _this.myAddButton = jqwidgets.createInstance(buttons[0], 'jqxButton', addButtonOptions);
            _this.myEditButton = jqwidgets.createInstance(buttons[1], 'jqxButton', otherButtonsOptions);
            _this.myDeleteButton = jqwidgets.createInstance(buttons[2], 'jqxButton', otherButtonsOptions);
            _this.myCancelButton = jqwidgets.createInstance(buttons[3], 'jqxButton', otherButtonsOptions);
            _this.myUpdateButton = jqwidgets.createInstance(buttons[4], 'jqxButton', otherButtonsOptions);
            var addTooltopOptions = {
                position: 'bottom', content: 'Add'
            };
            var editTooltopOptions = {
                position: 'bottom', content: 'Edit'
            };
            var deleteTooltopOptions = {
                position: 'bottom', content: 'Delete'
            };
            var updateTooltopOptions = {
                position: 'bottom', content: 'Save Changes'
            };
            var cancelTooltopOptions = {
                position: 'bottom', content: 'Cancel'
            };
            var myAddToolTip = jqwidgets.createInstance(buttons[0], 'jqxTooltip', addTooltopOptions);
            var myEditToolTip = jqwidgets.createInstance(buttons[1], 'jqxTooltip', editTooltopOptions);
            var myDeleteToolTip = jqwidgets.createInstance(buttons[2], 'jqxTooltip', deleteTooltopOptions);
            var myCancelToolTip = jqwidgets.createInstance(buttons[3], 'jqxTooltip', cancelTooltopOptions);
            var myUpdateToolTip = jqwidgets.createInstance(buttons[4], 'jqxTooltip', updateTooltopOptions);
            _this.myAddButton.addEventHandler('click', function (event) {
                if (!_this.myAddButton.disabled) {
                    //add new empty row.
                    _this.myDataTable.addRow(null, {}, 'first');
                    //select the first row and clear the selection.
                    _this.myDataTable.clearSelection();
                    _this.myDataTable.selectRow(0);
                    //edit the new row.
                    _this.myDataTable.beginRowEdit(0);
                    _this.updateButtons('add');
                }
            });
            _this.myEditButton.addEventHandler('click', function (event) {
                if (!_this.myEditButton.disabled) {
                    _this.myDataTable.beginRowEdit(_this.rowIndex);
                    _this.updateButtons('edit');
                }
            });
            _this.myDeleteButton.addEventHandler('click', function (event) {
                if (!_this.myDeleteButton.disabled) {
                    _this.myDataTable.deleteRow(_this.rowIndex);
                    _this.updateButtons('delete');
                }
            });
            _this.myCancelButton.addEventHandler('click', function (event) {
                if (!_this.myCancelButton.disabled) {
                    //cancel changes.
                    _this.myDataTable.endRowEdit(_this.rowIndex, true);
                }
            });
            _this.myUpdateButton.addEventHandler('click', function (event) {
                if (!_this.myUpdateButton.disabled) {
                    //save changes.
                    _this.myDataTable.endRowEdit(_this.rowIndex, false);
                }
            });
        };
        this.columns = [
            { text: 'Code', editable: false, dataField: 'code', width: 200 },
            { text: 'Name', dataField: 'codeName', cellsFormat: 'f', cellsAlign: 'right', align: 'right', width: 200 },
            { text: 'drawback', dataField: 'drawback', cellsFormat: 'f', cellsAlign: 'right', align: 'right', width: 200 },
            { text: 'D.E.P.B', dataField: 'depb', cellsAlign: 'right', align: 'right' },
            { text: 'H.S.Code', dataField: 'hscode', cellsAlign: 'right', align: 'right' },
            { text: 'Test', dataField: 'hello', cellsAlign: 'right', align: 'right' }
        ];
    }
    ProductClassMasterComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
    };
    ProductClassMasterComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    ProductClassMasterComponent.prototype.updateButtons = function (action) {
        switch (action) {
            case 'Select':
                this.myAddButton.setOptions({ disabled: false });
                this.myDeleteButton.setOptions({ disabled: false });
                this.myEditButton.setOptions({ disabled: false });
                this.myCancelButton.setOptions({ disabled: true });
                this.myUpdateButton.setOptions({ disabled: true });
                break;
            case 'Unselect':
                this.myAddButton.setOptions({ disabled: false });
                this.myDeleteButton.setOptions({ disabled: true });
                this.myEditButton.setOptions({ disabled: true });
                this.myCancelButton.setOptions({ disabled: true });
                this.myUpdateButton.setOptions({ disabled: true });
                break;
            case 'Edit':
                this.myAddButton.setOptions({ disabled: true });
                this.myDeleteButton.setOptions({ disabled: true });
                this.myEditButton.setOptions({ disabled: true });
                this.myCancelButton.setOptions({ disabled: false });
                this.myUpdateButton.setOptions({ disabled: false });
                break;
            case 'End Edit':
                this.myAddButton.setOptions({ disabled: false });
                this.myDeleteButton.setOptions({ disabled: false });
                this.myEditButton.setOptions({ disabled: false });
                this.myCancelButton.setOptions({ disabled: true });
                this.myUpdateButton.setOptions({ disabled: true });
                break;
        }
    };
    ProductClassMasterComponent.prototype.onRowSelect = function (event) {
        this.rowIndex = event.args.index;
        this.updateButtons('Select');
    };
    ;
    ProductClassMasterComponent.prototype.onRowUnselect = function (event) {
        this.updateButtons('Unselect');
    };
    ;
    ProductClassMasterComponent.prototype.onRowEndEdit = function (event) {
        this.updateButtons('End Edit');
    };
    ;
    ProductClassMasterComponent.prototype.onRowBeginEdit = function (event) {
        this.updateButtons('Edit');
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _a || Object)
    ], ProductClassMasterComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('winNotification'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _b || Object)
    ], ProductClassMasterComponent.prototype, "winNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myDataTable'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxdatatable__["a" /* jqxDataTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxdatatable__["a" /* jqxDataTableComponent */]) === "function" && _c || Object)
    ], ProductClassMasterComponent.prototype, "myDataTable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object)
    ], ProductClassMasterComponent.prototype, "quickAccess", void 0);
    ProductClassMasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-class-master',
            template: __webpack_require__("./src/app/layout/inventory-master/product-class-master/product-class-master.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/product-class-master/product-class-master.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _e || Object])
    ], ProductClassMasterComponent);
    return ProductClassMasterComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=product-class-master.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/product-class-master/product-class-master.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductClassMasterModule", function() { return ProductClassMasterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_class_master_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/product-class-master/product-class-master-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_class_master_component__ = __webpack_require__("./src/app/layout/inventory-master/product-class-master/product-class-master.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProductClassMasterModule = /** @class */ (function () {
    function ProductClassMasterModule() {
    }
    ProductClassMasterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__product_class_master_routing_module__["a" /* ProductClassMasterRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__product_class_master_component__["a" /* ProductClassMasterComponent */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], ProductClassMasterModule);
    return ProductClassMasterModule;
}());

//# sourceMappingURL=product-class-master.module.js.map

/***/ })

});
//# sourceMappingURL=product-class-master.module.chunk.js.map