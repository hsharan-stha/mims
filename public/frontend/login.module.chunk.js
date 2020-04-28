webpackJsonp(["login.module"],{

/***/ "./src/app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());

//# sourceMappingURL=login-routing.module.js.map

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 push-md-4\">\r\n            <div class=\"form-header jqx-widget-header jqx-window-header\" style=\"background:#e0eaf5 !important; border:1px solid #a8bace !important;\">\r\n                <h2>MANUFACTURING INVENTORY MANAGEMENT SYSTEM</h2>\r\n            </div>\r\n            <div class=\"form-container\" style=\"background:#e0eaf5 !important;border:1px solid #a8bace !important;\">\r\n                <!-- <img src=\"assets/images/logo.png\" width=\"150px\" class=\"user-avatar\" /> -->\r\n                <form role=\"form\" name=\"loginForm\" [formGroup]=\"loginForm\">\r\n                    <div class=\"form-content\">\r\n                        <div class=\"row\" *ngIf=\"msgType && msgText\">\r\n                            <div class=\"alert alert-danger\" role=\"alert\" style=\"padding:0.2rem !important; text-align: center; width: 100%;\">\r\n                                <p style=\"margin-bottom: 0rem;font-size: 0.8rem;\"> {{ msgText }}</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"userName\" class=\"col-sm-3 col-form-label\">Username</label>\r\n                            <div class=\"col-sm-9\" style=\"text-align: left;\">\r\n                                <jqxInput #username class=\"name\" [height]=\"23\" [width]=\"200\" formControlName=\"username\">\r\n                                </jqxInput>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"userPassword\" class=\"col-sm-3 col-form-label\">Password</label>\r\n                            <div class=\"col-sm-9\" style=\"text-align: left;\">\r\n                                <jqxPasswordInput #password class=\"password\" [height]=\"23\" [width]=\"200\" formControlName=\"password\"></jqxPasswordInput>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label for=\"companyName\" class=\"col-sm-3 col-form-label\">Estate</label>\r\n                            <div class=\"col-sm-9\">\r\n                                <jqxComboBox \r\n                                #estateCombo [source]=\"estateAdapter\" [displayMember]=\"'name'\" [valueMember]=\"'id'\" [height]=\"23\" [searchMode]=\"'containsignorecase'\" (onChange)=\"estateComboChange($event)\">\r\n                                </jqxComboBox>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <jqxButton style=\"margin-right: 5px;\" [disabled]=\"!loginForm.valid && !estateSelected\" (onClick)=\"getLogin(loginForm.value)\" [width]=\"100\" [theme]=\"'energyblue'\">\r\n                        Login\r\n                    </jqxButton>\r\n                    <!-- <a class=\"btn tfm-login-btn\" [routerLink]=\"['/dashboard']\" (click)=\"onLoggedin()\"> Log in </a>\r\n                    &nbsp; -->\r\n                    <!-- <a class=\"btn rounded-btn\" [routerLink]=\"['/signup']\">Register</a> -->\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<jqxLoader #loginLoader [imagePosition]=\"'top'\" [width]=\"100\" [text]=\"'Logging in..'\" [textPosition]=\"'bottom'\" [height]=\"60\" [isModal]=\"true\" [theme]=\"'energyblue'\">\r\n    </jqxLoader>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #fff;\n  text-align: center;\n  color: #fff;\n  padding: 7rem 4rem; }\n\n.login-page .form-header {\n    border: 1px solid #d8d3d3 !important;\n    border-radius: 4px 4px 0 0; }\n\n.login-page .form-header h2 {\n      color: #333;\n      font-size: 1rem;\n      font-weight: bold;\n      line-height: 1.4rem;\n      margin: 10px 0; }\n\n.login-page .col-lg-4 {\n    padding: 0; }\n\n.login-page .form-container {\n    border: 1px solid #d8d3d3 !important;\n    background: #e8e8e8;\n    padding: 1em 1.5em;\n    color: #333;\n    border-radius: 0 0 4px 4px; }\n\n.login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.login-page .input-underline {\n    background: 0 0;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #FFF;\n    border-radius: 0; }\n\n.login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n\n.login-page .tfm-login-btn {\n    border-radius: 0px !important;\n    font-family: Verdana,Arial,sans-serif;\n    font-style: normal;\n    font-size: 0.9rem;\n    border-color: #aaa;\n    background: #efefef;\n    outline: none;\n    border: 1px solid #ababab;\n    padding: 0.4rem 0.6rem;\n    text-align: center;\n    vertical-align: central;\n    cursor: pointer;\n    color: #333;\n    font-weight: bold; }\n\n.login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.login-page .rounded-btn:hover, .login-page .rounded-btn:focus, .login-page .rounded-btn:active, .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n\n.login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 28px;\n    font-weight: bold;\n    color: #d6d6d6; }\n\n.login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.login-page .form-group {\n    padding: 8px 0; }\n\n.login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-content {\n    padding: 10px 0; }\n\n.login-page .form-content .form-group {\n      margin-bottom: 0; }\n\n.login-page .form-content .col-form-label {\n      padding-top: 0;\n      padding-bottom: 0;\n      font-size: 0.8rem;\n      line-height: 1rem; }\n\n.login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #FFF;\n    height: 60px;\n    width: 60px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxcombobox.ts");
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








var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, as, es, fb) {
        this.route = route;
        this.router = router;
        this.as = as;
        this.es = es;
        this.fb = fb;
        this.estateAdapter = [];
        this.estateSelected = false;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["JwtHelper"]();
        this.loginForm = this.fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentToken = this.as.getToken();
        var currentUser = this.as.getUser();
        if (currentToken && this.jwtHelper.isTokenExpired(currentToken)) {
            this.as.logout();
            this.router.navigate(['/login'], { queryParams: { type: 'error', msg: 'Token Expired Please login to continue' } });
        }
        else if (currentToken && currentUser && !this.jwtHelper.isTokenExpired(currentToken)) {
            this.router.navigate(['/']);
        }
        else {
            this.as.logout();
            this.getEstateData();
        }
        this.route.queryParams.subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            _this.msgType = params['type'] || null;
            _this.msgText = params['msg'] || null;
        });
    };
    LoginComponent.prototype.getEstateData = function () {
        var _this = this;
        // TODO: Move these code inside else
        this.es.index({ limit: 'all' }).subscribe(function (response) {
            console.log(response);
            _this.estateAdapter = response;
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.estateComboChange = function ($event) {
        var val = this.estateCombo.val();
        if (val) {
            this.estateSelected = true;
        }
        else {
            this.estateSelected = false;
        }
    };
    LoginComponent.prototype.onLoggedin = function () {
        console.log('Test');
        localStorage.setItem('isLoggedin', 'true');
    };
    LoginComponent.prototype.getLogin = function (post) {
        var _this = this;
        // this.router.navigate(['/dashboard']);
        this.loginLoader.open();
        post['estate'] = this.estateCombo.val();
        this.as.login(post)
            .subscribe(function (result) {
            console.log(result);
            if (result['token']) {
                var selectedEstate = _this.estateCombo.getSelectedItem()['originalItem'];
                console.log(selectedEstate);
                var estateData = JSON.stringify({ estate_name: selectedEstate['name'], estate: selectedEstate['id'] });
                localStorage.setItem('teaERPEstate', estateData);
                _this.as.getDetail({ token: result['token'] }).subscribe(function (response) {
                    console.log(response);
                    _this.loginLoader.close();
                    localStorage.setItem('teaERPUser', JSON.stringify(response));
                    _this.router.navigate(['/dashboard']);
                    console.log('navigated');
                }, function (error) {
                    _this.loginLoader.close();
                    console.log(error);
                    _this.as.logout();
                });
            }
            else {
                _this.loginLoader.close();
            }
        }, function (error) {
            _this.loginLoader.close();
            //   if(error._body){
            //     this.error = JSON.parse(error._body).error;
            //   }
            //   this.loading = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('estateCombo'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxcombobox__["a" /* jqxComboBoxComponent */]) === "function" && _a || Object)
    ], LoginComponent.prototype, "estateCombo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loginLoader'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _b || Object)
    ], LoginComponent.prototype, "loginLoader", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["k" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["k" /* AuthenticateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["D" /* EstateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["D" /* EstateService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_routing_module__ = __webpack_require__("./src/app/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__login_routing_module__["a" /* LoginRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map