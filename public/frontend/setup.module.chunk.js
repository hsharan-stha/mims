webpackJsonp(["setup.module"],{

/***/ "./src/app/layout/setup/setup-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_component__ = __webpack_require__("./src/app/layout/setup/setup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__setup_component__["a" /* SetupComponent */],
        children: [
            { path: '', redirectTo: 'company-master', pathMatch: 'full' },
            // { path:'company-master', loadChildren:'./company-master/company-master.module#CompanyMasterModule'},
            // { path:'garden-master', loadChildren:'./garden-master/garden-master.module#GardenMasterModule'},
            // { path:'division-master', loadChildren:'./division-master/division-master.module#DivisionMasterModule'},
            // { path:'designation-master', loadChildren:'./designation-master/designation-master.module#DesignationMasterModule'},
            // { path:'paybook-master', loadChildren:'./paybook-master/paybook-master.module#PaybookMasterModule'},
            // { path:'holiday-master', loadChildren:'./holiday-master/holiday-master.module#HolidayMasterModule'},
            // { path:'department-master', loadChildren:'./department-master/department-master.module#DepartmentMasterModule'},
            // { path:'leave-type-master', loadChildren:'./leave-type-master/leave-type-master.module#LeaveTypeMasterModule'},
            { path: 'estate', loadChildren: './estate/estate.module#EstateModule' },
            { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
        ]
    },
];
var SetupRoutingModule = /** @class */ (function () {
    function SetupRoutingModule() {
    }
    SetupRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], SetupRoutingModule);
    return SetupRoutingModule;
}());

//# sourceMappingURL=setup-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/setup/setup.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/setup/setup.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/setup/setup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupComponent; });
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

var SetupComponent = /** @class */ (function () {
    function SetupComponent() {
    }
    SetupComponent.prototype.ngOnInit = function () {
    };
    SetupComponent.prototype.CanNavigateRouteGuard = function () {
        console.log('i am navigating away');
        alert('Navigating Away');
        // if the editName !== this.user.name
        // if (this.user.name !== this.editName) {
        return window.confirm('Discard changes?');
        // }
        // return false;
        // return true;
    };
    SetupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-setup',
            template: __webpack_require__("./src/app/layout/setup/setup.component.html"),
            styles: [__webpack_require__("./src/app/layout/setup/setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SetupComponent);
    return SetupComponent;
}());

//# sourceMappingURL=setup.component.js.map

/***/ }),

/***/ "./src/app/layout/setup/setup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupModule", function() { return SetupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setup_routing_module__ = __webpack_require__("./src/app/layout/setup/setup-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setup_component__ = __webpack_require__("./src/app/layout/setup/setup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SetupModule = /** @class */ (function () {
    function SetupModule() {
    }
    SetupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__setup_routing_module__["a" /* SetupRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__setup_component__["a" /* SetupComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], SetupModule);
    return SetupModule;
}());

//# sourceMappingURL=setup.module.js.map

/***/ })

});
//# sourceMappingURL=setup.module.chunk.js.map