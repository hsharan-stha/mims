webpackJsonp(["product-group-master.module"],{

/***/ "./src/app/layout/inventory-master/product-group-master/product-group-master-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductGroupMasterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_group_master_component__ = __webpack_require__("./src/app/layout/inventory-master/product-group-master/product-group-master.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__product_group_master_component__["a" /* ProductGroupMasterComponent */],
    }
];
var ProductGroupMasterRoutingModule = /** @class */ (function () {
    function ProductGroupMasterRoutingModule() {
    }
    ProductGroupMasterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ProductGroupMasterRoutingModule);
    return ProductGroupMasterRoutingModule;
}());

//# sourceMappingURL=product-group-master-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/product-group-master/product-group-master.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 tfm-panel-left\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header\">\r\n                    <h2> Quick Access </h2>\r\n                </div>\r\n                 <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\" >\r\n                    <ul class=\"tfm-quick-access\">\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li> \r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li> \r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li> \r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li> \r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                       <li><a routerLink=\"\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i> Home</a></li>\r\n                    </ul>\r\n                </jqxPanel> \r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-10 tfm-panel-right\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header\">\r\n                    <h2> Product Group Master </h2>\r\n                </div>\r\n                <jqxPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\">\r\n                    <!-- <div class=\"tfm-panel-body\"> -->\r\n                      <jqxGrid \r\n                          [height]=\"'100%'\" [width]=\"'99.8%'\" [source]=\"dataAdapter\" [columns]=\"columns\"\r\n                          [virtualmode]=\"true\" [pageable]=\"true\" [selectionmode]=\"'checkbox'\" [filterable]=\"true\"\r\n                          [rendergridrows]=\"rendergridrows\">\r\n                      </jqxGrid>\r\n                    <!-- </div> -->\r\n                </jqxPanel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<jqxNotification #winNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n[autoClose]=\"false\" [animationOpenDelay]=\"800\" [theme]=\"'energyblue'\" [template]=\"'error'\">\r\n<div id='listingMessage'></div>\r\n</jqxNotification>"

/***/ }),

/***/ "./src/app/layout/inventory-master/product-group-master/product-group-master.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/product-group-master/product-group-master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductGroupMasterComponent; });
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

var ProductGroupMasterComponent = /** @class */ (function () {
    function ProductGroupMasterComponent() {
        var _this = this;
        this.source = {
            datatype: 'array',
            localdata: {},
            totalrecords: 1000000,
            pagesize: 20,
        };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.rendergridrows = function (params) {
            var data = _this.generateData(params.startindex, params.endindex);
            return data;
        };
        this.totalcolumnrenderer = function (row, column, cellvalue) {
            var newCellValue = jqx.dataFormat.formatnumber(cellvalue, 'c2');
            return '<span style="margin: 6px 3px; font-size: 12px; float: right; font-weight: bold;">' + newCellValue + '</span>';
        };
        this.columns = [
            { text: 'Id', datafield: 'id' },
            { text: 'First Name', datafield: 'firstname' },
            { text: 'Last Name', datafield: 'lastname' },
            { text: 'Product', datafield: 'productname' },
            { text: 'Quantity', datafield: 'quantity', cellsalign: 'right' },
            { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' },
            { text: 'Total', datafield: 'total', cellsrenderer: this.totalcolumnrenderer, cellsalign: 'right' }
        ];
        this.firstNames = [
            'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
        ];
        this.lastNames = [
            'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
        ];
        this.productNames = [
            'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
        ];
        this.priceValues = [
            '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
        ];
    }
    ProductGroupMasterComponent.prototype.ngOnInit = function () {
    };
    ProductGroupMasterComponent.prototype.generateData = function (startindex, endindex) {
        var data = {};
        for (var i = startindex; i < endindex; i++) {
            var row = {};
            var productindex = Math.floor(Math.random() * this.productNames.length);
            var price = parseFloat(this.priceValues[productindex]);
            var quantity = 1 + Math.round(Math.random() * 10);
            row['id'] = i;
            row['firstname'] = this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
            row['lastname'] = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
            row['productname'] = this.productNames[productindex];
            row['price'] = price;
            row['quantity'] = quantity;
            row['total'] = price * quantity;
            data[i] = row;
        }
        return data;
    };
    ProductGroupMasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-group-master',
            template: __webpack_require__("./src/app/layout/inventory-master/product-group-master/product-group-master.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/product-group-master/product-group-master.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductGroupMasterComponent);
    return ProductGroupMasterComponent;
}());

//# sourceMappingURL=product-group-master.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/product-group-master/product-group-master.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGroupMasterModule", function() { return ProductGroupMasterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_group_master_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/product-group-master/product-group-master-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_group_master_component__ = __webpack_require__("./src/app/layout/inventory-master/product-group-master/product-group-master.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProductGroupMasterModule = /** @class */ (function () {
    function ProductGroupMasterModule() {
    }
    ProductGroupMasterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__product_group_master_routing_module__["a" /* ProductGroupMasterRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__product_group_master_component__["a" /* ProductGroupMasterComponent */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], ProductGroupMasterModule);
    return ProductGroupMasterModule;
}());

//# sourceMappingURL=product-group-master.module.js.map

/***/ })

});
//# sourceMappingURL=product-group-master.module.chunk.js.map