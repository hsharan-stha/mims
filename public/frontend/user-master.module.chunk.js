webpackJsonp(["user-master.module"],{

/***/ "./src/app/layout/user-master/user-master-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMasterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_master_component__ = __webpack_require__("./src/app/layout/user-master/user-master.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__user_master_component__["a" /* UserMasterComponent */],
        // canDeactivate: [CanNavigateRouteGuard],
        children: [
            { path: '', redirectTo: 'user', pathMatch: 'full' },
            { path: 'users', loadChildren: './user/user.module#UserModule' },
            { path: 'roles', loadChildren: './role/role.module#RoleModule' },
            { path: 'permissions', loadChildren: './permission/permission.module#PermissionModule' },
            { path: 'routes', loadChildren: './route/route.module#RouteModule' },
            { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
        ]
    },
];
var UserMasterRoutingModule = /** @class */ (function () {
    function UserMasterRoutingModule() {
    }
    UserMasterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], UserMasterRoutingModule);
    return UserMasterRoutingModule;
}());

//# sourceMappingURL=user-master-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/user-master/user-master.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/layout/user-master/user-master.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/user-master/user-master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMasterComponent; });
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

var UserMasterComponent = /** @class */ (function () {
    function UserMasterComponent() {
    }
    UserMasterComponent.prototype.ngOnInit = function () {
    };
    UserMasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-master',
            template: __webpack_require__("./src/app/layout/user-master/user-master.component.html"),
            styles: [__webpack_require__("./src/app/layout/user-master/user-master.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserMasterComponent);
    return UserMasterComponent;
}());

//# sourceMappingURL=user-master.component.js.map

/***/ }),

/***/ "./src/app/layout/user-master/user-master.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMasterModule", function() { return UserMasterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_master_component__ = __webpack_require__("./src/app/layout/user-master/user-master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_master_routing_module__ = __webpack_require__("./src/app/layout/user-master/user-master-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserMasterModule = /** @class */ (function () {
    function UserMasterModule() {
    }
    UserMasterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__user_master_routing_module__["a" /* UserMasterRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_master_component__["a" /* UserMasterComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], UserMasterModule);
    return UserMasterModule;
}());

//# sourceMappingURL=user-master.module.js.map

/***/ })

});
//# sourceMappingURL=user-master.module.chunk.js.map