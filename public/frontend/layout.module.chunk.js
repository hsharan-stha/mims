webpackJsonp(["layout.module"],{

/***/ "./src/app/layout/layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'setup', loadChildren: './setup/setup.module#SetupModule' },
            { path: 'inventory', loadChildren: './inventory-master/inventory-master.module#InventoryMasterModule' },
            // { path: 'factory-master', loadChildren:'./factory-master/factory-master.module#FactoryMasterModule'},
            // { path: 'field-module', loadChildren:'./field-module/field-module.module#FieldModuleModule'},
            // { path: 'pay-roll', loadChildren:'./pay-roll/pay-roll.module#PayRollModule'},
            { path: 'accounting', loadChildren: './accounting/accounting.module#AccountingModule' },
            // { path: 'activity', loadChildren:'./activity/activity.module#ActivityModule'},
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
            { path: 'user-master', loadChildren: './user-master/user-master.module#UserMasterModule' },
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());

//# sourceMappingURL=layout-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n<div class=\"tfm-top-header\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n            <div class=\"tfm-logo\">\r\n                <h1>MIMS</h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-10\" style=\"padding-left: 5px;\">\r\n            <app-sidebar></app-sidebar> \r\n        </div>\r\n    </div>\r\n            \r\n</div>\r\n<section class=\"main-container\" #mainContainer>\r\n    <div class=\"inner-container\">\r\n        <router-outlet></router-outlet>  \r\n    </div>  \r\n</section>\r\n\r\n<div class=\"network-connection-toast\" [ngClass]=\"!online ? 'open' : 'close'\">\r\n    <div class=\"network-connection-content\">\r\n        <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> No Internet Connection\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/***/ (function(module, exports) {

module.exports = ".tfm-top-header .row {\n  background: #324c1b; }\n\n.tfm-top-header .tfm-logo h1 {\n  font-size: 1.3rem;\n  font-weight: bold;\n  margin: 0px;\n  line-height: 2.2rem;\n  text-align: center;\n  color: #fff; }\n\n@media (max-width: 1093px) {\n  .tfm-top-header .row {\n    background: #324c1b; }\n  .tfm-top-header .tfm-logo h1 {\n    line-height: 2rem; } }\n\n.jqx-rc-all {\n  border-radius: 0px !important; }\n\n.jqx-text-area-element {\n  background: #fbfbfb; }\n\nform .jqx-rc-all {\n  border-radius: 3px !important; }\n\n.main-container {\n  padding: 0px;\n  padding-top: 0px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.main-container .inner-container {\n    height: calc(100vh - 37px);\n    padding: 0px;\n    overflow: hidden; }\n\n@media (max-width: 992px) {\n  .inner-container {\n    height: calc(100vh - 45px);\n    padding: 0px;\n    overflow-x: hidden;\n    overflow-y: scroll; } }\n\n@media (max-width: 1034px) {\n  .inner-container {\n    height: calc(100vh - 34px);\n    padding: 0px;\n    overflow-x: hidden;\n    overflow-y: scroll; }\n  .tfm-panel .tfm-panel-container {\n    height: calc(100vh - 39px); } }\n\n@media (min-width: 1720px) {\n  .tfm-panel .tfm-panel-container {\n    height: calc(100vh - 40px); } }\n\n.card-widget {\n  margin-bottom: 15px; }\n\n.card-widget .card-header {\n    padding: 0.35rem .5rem; }\n\n.card-widget .card-header span {\n      font-size: 0.8rem;\n      font-weight: bold; }\n\n.card-widget .card-block {\n    padding: 0px; }\n\n.card-widget .card-block .list-group .list-group-item {\n      padding: 0.25rem 0.5rem; }\n\n.card-widget .card-block .list-group .list-group-item:first-child {\n        border-top-right-radius: 0rem;\n        border-top-left-radius: 0rem; }\n\n.card-widget .card-block .list-group .list-group-item a {\n        display: block;\n        width: 100%;\n        text-decoration: none;\n        color: #333;\n        font-size: 12px;\n        font-weight: bold; }\n\n.card-widget .card-block .list-group .list-group-item a:hover {\n          color: #333; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n.tfm-panel .tfm-panel-left, .tfm-panel .tfm-panel-right {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  position: relative; }\n\n.tfm-panel .tfm-panel-container {\n  position: relative;\n  width: 100%;\n  border: 1px solid #c5c5c5;\n  height: calc(100vh - 35px); }\n\n.tfm-panel .tfm-panel-header {\n  padding: 0.5em; }\n\n.tfm-panel .tfm-panel-header h2 {\n    font-size: 0.9rem !important;\n    margin-bottom: 0px;\n    font-weight: bold; }\n\n@media (max-width: 992) {\n  .tfm-panel-container {\n    height: calc(100vh - 96px); } }\n\n.btn-tfms {\n  border-radius: 0px !important;\n  font-family: Verdana,Arial,sans-serif;\n  font-style: normal;\n  font-size: 13px;\n  border-color: #aaa;\n  background: #efefef;\n  outline: none;\n  border: 1px solid #ababab;\n  padding: 3px;\n  text-align: center;\n  vertical-align: central;\n  margin: 0 0 0 0;\n  cursor: default; }\n\n.input-button-group {\n  float: left; }\n\nform td {\n  padding-bottom: 10px; }\n\nform .jqx-validator-error-label {\n  font-size: 0.6rem;\n  margin-bottom: 0px; }\n\n.jqx-tooltip-tperror .jqx-fill-state-normal-tperror {\n  background: #e83d3d !important;\n  color: #fff !important; }\n\n.jqx-tooltip-tpinfo .jqx-fill-state-normal-tpinfo {\n  background: #2776bb !important;\n  color: #fff !important; }\n\n.text-input {\n  height: 21px;\n  width: 200px; }\n\nform table {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\nform table td,\n  form table tr {\n    margin: 0px;\n    padding: 4px;\n    border-spacing: 0px;\n    border-collapse: collapse;\n    font-family: Verdana;\n    font-size: 12px; }\n\nform .table-w-tooltip tr td {\n  padding-bottom: 14px !important; }\n\nform .tfms-field-loader {\n  vertical-align: -webkit-baseline-middle; }\n\n.jqx-validator-hint {\n  height: 15px !important;\n  font-size: 9px !important; }\n\n.tfm-custom-toolbar {\n  border: 1px solid #a4bed4; }\n\n.row.row-filter .form-control {\n  width: auto;\n  height: 10px;\n  padding: 5px;\n  font-size: 14px; }\n\n#windowContent .jqx-notification-energyblue {\n  position: absolute;\n  top: 5%;\n  right: 5px; }\n\n.form-table-border {\n  border: 1px solid #d4d4d4;\n  border-collapse: separate;\n  padding: 5px;\n  margin-left: 5px; }\n\n.grid-col-3 {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 23.5%;\n  flex: 0 0 23.5%;\n  max-width: 23.5%; }\n\n.grid-col-6 {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 48%;\n  flex: 0 0 48%;\n  max-width: 48%; }\n\nfieldset {\n  border: 1px solid #c0c0c0 !important;\n  margin: 0 2px !important;\n  padding: 0px 10px !important;\n  margin-top: 12px !important; }\n\nfieldset:nth-child(1) {\n  margin-top: 2px !important; }\n\nlegend {\n  width: auto !important;\n  padding: 0 10px !important;\n  font-size: 0.7rem !important;\n  font-weight: bold !important; }\n\nfieldset table {\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\n.jqx-expander-content .table {\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\n.jqx-expander-content .table th, .jqx-expander-content .table td {\n    padding: 0.35rem;\n    vertical-align: top;\n    border-top: 1px solid #eceeef; }\n\n.jqx-expander-content .table-bordered th, .jqx-expander-content .table-bordered td {\n  border: 1px solid #cfdde9; }\n\n.network-connection-toast {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  background: #c55b5b;\n  padding: 12px 40px;\n  text-align: center;\n  color: #fff;\n  z-index: 99;\n  bottom: 0px; }\n\n.network-connection-toast.close {\n  display: none;\n  -webkit-transition: all 0.4s ease 0s;\n  transition: all 0.4s ease 0s; }\n\n.network-connection-toast.open {\n  display: block;\n  -webkit-transition: all 0.4s ease 0s;\n  transition: all 0.4s ease 0s; }\n\n.form-group label {\n  display: block; }\n\n.px-select-container {\n  position: relative;\n  display: block; }\n\n.px-select-container select.px-select-list {\n    width: 100%;\n    height: 60px;\n    border-radius: 0px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 9; }\n\nselect.form-control, input.form-control {\n  height: 23px !important;\n  padding: 2px !important;\n  font-size: 0.8rem !important; }\n\n.px-control {\n  width: 100% !important;\n  height: 25px;\n  border: 1px solid #a4bed4;\n  border-radius: 2px;\n  font-size: 0.9rem;\n  color: #424242;\n  padding-left: 4px; }\n\n.px-file-control {\n  border: 0px !important; }\n\n.px-btn {\n  background: #e0e9f5;\n  border: 1px solid #a4bed4;\n  /* border: none; */\n  border-radius: 0px; }\n\n.row-head {\n  background: #e0e9f5;\n  margin: 0px; }\n\n.row-head div p {\n    padding-top: 5px;\n    margin-bottom: 5px; }\n\n.form-array-container {\n  height: 30vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n  border: 1px solid #efefef; }\n\n.form-array-container .form-array-container-inner {\n    border-top: 0px; }\n\n.bg-white {\n  background: #fff; }\n\n.tfm-top-header .row {\n  background: #324c1b; }\n\n.tfm-top-header .tfm-logo h1 {\n  font-size: 1.3rem;\n  font-weight: bold;\n  margin: 0px;\n  line-height: 2.2rem;\n  text-align: center;\n  color: #fff; }\n\n@media (max-width: 1093px) {\n  .tfm-top-header .row {\n    background: #324c1b; }\n  .tfm-top-header .tfm-logo h1 {\n    line-height: 2rem; } }\n\n.text-red {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_permissions__ = __webpack_require__("./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_permissions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_permissions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { jqxWindowComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxwindow';
var LayoutComponent = /** @class */ (function () {
    // private permissionInfo: any;
    function LayoutComponent(router, rd, permissionsService, cus, rs) {
        var _this = this;
        this.router = router;
        this.rd = rd;
        this.permissionsService = permissionsService;
        this.cus = cus;
        this.rs = rs;
        // @ViewChild('newtworkWindow') newtworkWindow:jqxWindowComponent;
        this.online = true;
        /**
         * Detect Network Change Start
         */
        this.online$ = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromEvent(window, 'online').subscribe(function (x) {
            _this.online = true;
            // this.newtworkWindow.close();
        });
        this.offline$ = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromEvent(window, 'offline').subscribe(function (x) {
            _this.online = false;
            // this.newtworkWindow.setTitle('NETWORK ERROR');
            // this.newtworkWindow.open();
        });
        this.roleInfo = this.cus.getRole();
        this.getRoleDetail(this.roleInfo['id']);
    }
    LayoutComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
        }
        // const perm = ["add-worker", "add-staff"];
        // this.permissionsService.loadPermissions(perm);
        // this.permissionsService.permissions$.subscribe((permissions) => {
        //     console.log(permissions);
        // })
    };
    LayoutComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * Get Current User Permissions assigned to Current user role
     */
    LayoutComponent.prototype.getRoleDetail = function (id) {
        var _this = this;
        this.rs.show(id).subscribe(function (response) {
            // console.log(response['data']);
            var permissions = response['data'] && response['data']['perms'] || [];
            var perms = [];
            for (var i = 0; i < permissions.length; i++) {
                perms.push(permissions[i]['name']);
            }
            // Load Permissions to NGXPermission Service to Be used Application Wide
            _this.permissionsService.loadPermissions(perms);
            localStorage.setItem('teaERPPerms', JSON.stringify(perms));
            _this.cus.currentUserPermissions = perms;
            //Get all permissions set to the application, for current user. For Test Only
            // this.permissionsService.permissions$.subscribe((permissions) => {
            //     console.log(permissions);
            //     let currentPermissions = [];
            //     for(let obj in permissions){
            //         currentPermissions.push(obj);
            //     }
            // });
        }, function (error) {
            console.log(error);
        });
    };
    LayoutComponent.prototype.retry = function () {
        if (this.online) {
            // this.newtworkWindow.close();
        }
    };
    // reload(){
    // }
    /**
     * Detect Network Change End
     */
    LayoutComponent.prototype.CanDeactivate = function () {
        console.log('i am navigating away');
        alert('Navigating Away');
        // if the editName !== this.user.name
        // if (this.user.name !== this.editName) {
        return window.confirm('Discard changes?');
        // }
        // return false;
        // return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('navBar'),
        __metadata("design:type", Object)
    ], LayoutComponent.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mainContainer'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], LayoutComponent.prototype, "el", void 0);
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/layout/layout.component.html"),
            styles: [__webpack_require__("./src/app/layout/layout.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_permissions__["NgxPermissionsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_permissions__["NgxPermissionsService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["v" /* CurrentUserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["_7" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["_7" /* RoleService */]) === "function" && _f || Object])
    ], LayoutComponent);
    return LayoutComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_routing_module__ = __webpack_require__("./src/app/layout/layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxmenu__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxmenu.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';






// import { TreeModule } from 'angular-tree-component';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { TfmHttpInterceptorService } from '../shared';
// import { jqxPanelComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxpanel';
// import { jqxInputComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxinput';
// import { jqxTextAreaComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxtextarea';
// import { jqxButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons';
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                // NgbDropdownModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__layout_routing_module__["a" /* LayoutRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
                // TreeModule,
                __WEBPACK_IMPORTED_MODULE_6__shared_modules_shared_module__["a" /* SharedModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared__["J" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared__["_10" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared__["_3" /* QuickaccessComponent */],
                __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxmenu__["a" /* jqxMenuComponent */],
            ],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__shared__["_3" /* QuickaccessComponent */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());

//# sourceMappingURL=layout.module.js.map

/***/ })

});
//# sourceMappingURL=layout.module.chunk.js.map