webpackJsonp(["route.module"],{

/***/ "./src/app/layout/user-master/route/route-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_component__ = __webpack_require__("./src/app/layout/user-master/route/route.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__route_component__["a" /* RouteComponent */],
    }
];
var RouteRoutingModule = /** @class */ (function () {
    function RouteRoutingModule() {
    }
    RouteRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], RouteRoutingModule);
    return RouteRoutingModule;
}());

//# sourceMappingURL=route-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/user-master/route/route.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 tfm-panel-left\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                    <h2> Quick Access </h2>\r\n                </div>\r\n                 <jqxPanel [width]=\"'99.7%'\" [height]=\"'94.2%'\" >\r\n                      <ng-template #quickAccess></ng-template>\r\n                </jqxPanel> \r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-10 tfm-panel-right\">\r\n            <div class=\"tfm-panel-container\">\r\n                <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                    <h2> Route Management </h2>\r\n                </div>\r\n                \r\n            <jqxPanel #jPanel [width]=\"'99.9%'\" [height]=\"'94.2%'\">\r\n              <jqxGrid #myGrid\r\n                [height]=\"'100%'\" [width]=\"'99.8%'\" [source]=\"dataAdapter\" [columns]=\"columns\"  \r\n                [virtualmode]=\"true\" [pageable]=\"true\" [filterable]=\"true\" [sortable]=\"true\" [theme]=\"'energyblue'\"\r\n                [rendergridrows]=\"rendergridrows\" [selectionmode]=\"'checkbox'\" [showfilterrow]=\"true\" [showtoolbar]=\"true\" [rendertoolbar]=\"rendertoolbar\">\r\n              </jqxGrid>\r\n            </jqxPanel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <jqxWindow #myWindow [width]=\"480\" [height]=\"360\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n    <div id=\"windowContent\">\r\n      <ng-template #Insert></ng-template>\r\n    </div>\r\n  </jqxWindow>\r\n  \r\n  <jqxNotification #msgNotification\r\n  [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n  [autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'info'\">\r\n  <div id='message'></div>\r\n  </jqxNotification>\r\n  <jqxLoader #jqxLoader [imagePosition]=\"'top'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/user-master/route/route.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/user-master/route/route.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var RouteComponent = /** @class */ (function () {
    function RouteComponent(apiUrl, componentFactoryResolver, vc, routs) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.vc = vc;
        this.routs = routs;
        this.editrow = -1;
        //Get Data after the server side processing as pagination
        this.rendergridrows = function (params) {
            return params.data;
        };
        this.rendertoolbar = function (toolbar) {
            var container = document.createElement('div');
            container.style.margin = '5px';
            var buttonContainer1 = document.createElement('div');
            var buttonContainer2 = document.createElement('div');
            var buttonContainer3 = document.createElement('div');
            buttonContainer1.id = 'buttonContainer1';
            buttonContainer2.id = 'buttonContainer2';
            buttonContainer3.id = 'buttonContainer3';
            buttonContainer1.style.cssText = 'float: left';
            buttonContainer2.style.cssText = 'float: left; margin-left: 5px';
            buttonContainer3.style.cssText = 'float: left; margin-left: 5px';
            container.appendChild(buttonContainer1);
            container.appendChild(buttonContainer3);
            container.appendChild(buttonContainer2);
            toolbar[0].appendChild(container);
            var addRowButton = jqwidgets.createInstance('#buttonContainer1', 'jqxButton', { width: 105, value: 'Add New Row', theme: 'energyblue' });
            var deleteRowButton = jqwidgets.createInstance('#buttonContainer3', 'jqxButton', { width: 150, value: 'Delete Selected Row', theme: 'energyblue' });
            var reloadGridButton = jqwidgets.createInstance('#buttonContainer2', 'jqxButton', { width: 80, value: '<i class="fa fa-refresh fa-fw"></i> Reload', theme: 'energyblue' });
            addRowButton.addEventHandler('click', function () {
                // this.myWindow.position({ x: '45%', y: '13%' });
                _this.myWindow.draggable(true);
                _this.myWindow.title('Add Route');
                _this.myWindow.open();
                // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RoleAddComponent);
                // this.Insert.clear();
                // const dynamic_Component = this.Insert.createComponent(componentFactory);
                // (<RoleAddComponent>dynamic_Component.instance).AddedData.subscribe(result => {
                //   if (result.result == true) {
                //     console.log("completed ");
                //     let messageDiv = document.getElementById('message');
                //     messageDiv.innerText = result['message'];
                //     console.log(result['message']);
                //     this.msgNotification.open();
                //     this.myWindow.hide();
                //     this.myGrid.updatebounddata('cells');
                //     dynamic_Component.destroy();
                //   }
                // });
                // (<RoleAddComponent>dynamic_Component.instance).cancelData.subscribe(result => {
                //   if (result == true) {
                //     this.myWindow.hide();
                //     dynamic_Component.destroy();
                //   }
                // });
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
                        _this.routs.destroy('[' + ids + ']').subscribe(function (data) {
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
        }; //render toolbar ends
        this.apiUrl = apiUrl;
        this.getTable();
    }
    RouteComponent.prototype.ngOnInit = function () {
        this.createQuickAccess();
    };
    RouteComponent.prototype.createQuickAccess = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__shared__["_3" /* QuickaccessComponent */]);
        this.quickAccess.clear();
        var dyynamicComponent = this.quickAccess.createComponent(componentFactory);
    };
    RouteComponent.prototype.getTable = function () {
        var _this = this;
        var myUrl = this.apiUrl + 'route';
        this.source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'string' },
                    { name: 'method', type: 'string' },
                    { name: 'path', type: 'string' },
                    { name: 'action_name', type: 'string' },
                    { name: 'permission_name', type: 'string' },
                    { name: 'permission_id', type: 'string' },
                ],
                id: 'id',
                url: myUrl,
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
                data['page'] = data['pagenum'] + 1;
                data['limit'] = data['pagesize'];
                return data;
            },
            downloadComplete: function (data, status, xhr) {
                _this.source.totalrecords = data.data.total;
                var tableData = data.data.data;
                return tableData;
            }
        });
        this.columns = [
            {
                text: 'S.N', sortable: false, filterable: false, editable: false,
                groupable: false, draggable: false, resizable: false,
                datafield: 'id', columntype: 'number', width: 50,
                cellsrenderer: function (row, column, value) {
                    return "<div style='margin:4px;'>" + (value + 1) + "</div>";
                }
            },
            { text: 'Name ', datafield: 'name', filterable: false, sortable: false },
            { text: 'Method', datafield: 'method', columntype: 'textbox', filtercondition: 'starts_with' },
            { text: 'Path', datafield: 'path', filterable: false, sortable: false },
            { text: 'Action Name', datafield: 'action_name', filterable: false, sortable: false },
            { text: 'Permission', datafield: 'permission_id', displayfield: 'permission_name', filterable: false, sortable: false },
            {
                text: 'Edit', datafield: 'Edit', sortable: false, filterable: false, width: 75, columntype: 'button',
                cellsrenderer: function () {
                    return 'Edit';
                },
                buttonclick: function (row) {
                    _this.editrow = row;
                    var dataRecord = _this.myGrid.getrowdata(_this.editrow);
                    // this.myWindow.position({ x: '45%', y: '13%' });
                    _this.myWindow.draggable(true);
                    _this.myWindow.title('Edit Route');
                    _this.myWindow.open();
                    // const component_factory = this.componentFactoryResolver.resolveComponentFactory(RoleEditComponent);
                    // this.Insert.clear();
                    // const dynamic_Component = this.Insert.createComponent(component_factory);
                    // (<RoleEditComponent>dynamic_Component.instance).RoleEditData = dataRecord;
                    // (<RoleEditComponent>dynamic_Component.instance).UpdatedData.subscribe(result => {
                    //   if (result.result == true) {
                    //     console.log(result.result);
                    //     let messageDiv = document.getElementById('message');
                    //     messageDiv.innerText = result['message'];
                    //     this.msgNotification.open();
                    //     this.myWindow.hide();
                    //     this.myGrid.updatebounddata('cells');
                    //     dynamic_Component.destroy();
                    //     //this.Insert.destroyComponent(componentFactory);
                    //   }
                    // });
                    // (<RoleEditComponent>dynamic_Component.instance).cancelData.subscribe(result => {
                    //   if (result == true) {
                    //     this.myWindow.hide();
                    //     dynamic_Component.destroy();
                    //   }
                    // });
                }
            }
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], RouteComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jPanel'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], RouteComponent.prototype, "jPanel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myGrid'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _c || Object)
    ], RouteComponent.prototype, "myGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _d || Object)
    ], RouteComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Insert', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object)
    ], RouteComponent.prototype, "Insert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quickAccess', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object)
    ], RouteComponent.prototype, "quickAccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _g || Object)
    ], RouteComponent.prototype, "jqxLoader", void 0);
    RouteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-route',
            template: __webpack_require__("./src/app/layout/user-master/route/route.component.html"),
            styles: [__webpack_require__("./src/app/layout/user-master/route/route.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('API_URL')),
        __metadata("design:paramtypes", [String, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["_8" /* RouteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["_8" /* RouteService */]) === "function" && _k || Object])
    ], RouteComponent);
    return RouteComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=route.component.js.map

/***/ }),

/***/ "./src/app/layout/user-master/route/route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteModule", function() { return RouteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_component__ = __webpack_require__("./src/app/layout/user-master/route/route.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__route_routing_module__ = __webpack_require__("./src/app/layout/user-master/route/route-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RouteModule = /** @class */ (function () {
    function RouteModule() {
    }
    RouteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__route_routing_module__["a" /* RouteRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__route_component__["a" /* RouteComponent */]]
        })
    ], RouteModule);
    return RouteModule;
}());

//# sourceMappingURL=route.module.js.map

/***/ })

});
//# sourceMappingURL=route.module.chunk.js.map