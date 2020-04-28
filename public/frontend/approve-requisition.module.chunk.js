webpackJsonp(["approve-requisition.module"],{

/***/ "./src/app/layout/inventory-master/approve-requisition/approve-requisition-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveRequisitionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__approve_requisition_component__ = __webpack_require__("./src/app/layout/inventory-master/approve-requisition/approve-requisition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_requisition_history_requisition_component__ = __webpack_require__("./src/app/layout/inventory-master/approve-requisition/history-requisition/history-requisition.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__approve_requisition_component__["a" /* ApproveRequisitionComponent */],
    },
    {
        path: 'history-requisition.component',
        component: __WEBPACK_IMPORTED_MODULE_3__history_requisition_history_requisition_component__["a" /* HistoryRequisitionComponent */],
    }
];
var ApproveRequisitionRoutingModule = /** @class */ (function () {
    function ApproveRequisitionRoutingModule() {
    }
    ApproveRequisitionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ApproveRequisitionRoutingModule);
    return ApproveRequisitionRoutingModule;
}());

//# sourceMappingURL=approve-requisition-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/approve-requisition/approve-requisition.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n    <form name=\"approveReqForm\" [formGroup]=\"approveReqForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 tfm-panel-right\">\r\n                <div class=\"tfm-panel-container\">\r\n                    <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n                        <h2> Approve Requisition </h2>\r\n                    </div>\r\n                    <!-- <div class=\"bg-white p-1\">\r\n                        <fieldset>\r\n                            <legend>{{ \"REQUISITIONDETAIL\" | translate }}</legend>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>{{ \"BRANCH\" | translate }}</label>\r\n                                        <select formControlName=\"branchCode\" (change)=\"branchChange(approveReqForm.value['branchCode'])\" class=\"select-control selectpicker select-class select-border\">\r\n                                            <option [selected]=\"true\" [disabled]=\"true\" value=''>{{ \"SELECT\" | translate }}</option>\r\n                                            <option *ngFor=\"let branch of branchAdapter\" [value]=\"branch.branchCode\">{{ branch.branchName }}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </div> -->\r\n                    <div class=\"box-container grid-box-container\">\r\n                        <jqxGrid #groupGrid [width]=\"'100%'\" [source]=\"gridDataAdapter\" [columns]=\"gridColumns\" [pageable]=\"false\" [height]=\"'200'\"\r\n                            [autorowheight]=\"false\" [theme]=\"'energyblue'\" [selectionmode]=\"'checkbox'\"\r\n                             [showtoolbar]=\"true\" [rendertoolbar]=\"gridRenderToolbar\" [keyboardnavigation]=\"true\">\r\n                        </jqxGrid>\r\n                    </div>\r\n                    <div class=\"box-container grid-box-container\">\r\n                        <jqxGrid #orderGrid [width]=\"'100%'\" [source]=\"orderDataAdapter\" [columns]=\"orderColumns\" [pageable]=\"false\" [height]=\"'200'\"\r\n                            [autorowheight]=\"false\" [theme]=\"'energyblue'\" [showtoolbar]=\"true\" [rendertoolbar]=\"orderRenderToolbar\"\r\n                            [keyboardnavigation]=\"true\">\r\n                        </jqxGrid>\r\n                    </div>\r\n                    <div class=\"submit-form\">\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-2\">\r\n                                <label>Approve By</label>\r\n                                <jqxInput class=\"approveBy\" [theme]=\"'energyblue'\" [placeHolder]=\"'Shyam Sharma.'\" [height]=\"23\" [width]=\"170\" formControlName=\"approve_by\" [disabled]=\"true\"></jqxInput>\r\n                            </div>\r\n                            <div class=\"form-group col-md-2\">\r\n                                <label>Approe Date</label>\r\n                                <jqxInput class=\"approveDate\" [theme]=\"'energyblue'\" [placeHolder]=\"'YYYY-MM-dd'\" [height]=\"23\" [width]=\"170\" formControlName=\"approve_date\"></jqxInput>\r\n                            </div>\r\n                            <div class=\"form-group text-right\">\r\n                                <label>&nbsp;</label>\r\n                                <jqxButton [theme]=\"'energyblue'\" [disabled]=\"!approveReqForm.valid\" [width]=\"100\" (onClick)=\"approve(approveReqForm.value)\">\r\n                                    <i class=\"fa fa-check\" style=\"color: #5eba7d;\" aria-hidden=\"true\"></i> Approve\r\n                                </jqxButton>\r\n                            </div>\r\n                            <!-- <div class=\"form-group text-right m-2\">\r\n                                <label class=\"mt-4\">&nbsp;</label>\r\n                                <jqxButton [theme]=\"'energyblue'\" [disabled]=\"!approveReqForm.valid\" [width]=\"100\" (onClick)=\"reject(approveReqForm.value)\">\r\n                                    <i style=\"color: #cc0000;\" class=\"fa fa-times\" aria-hidden=\"true\"></i> Reject\r\n                                </jqxButton>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<jqxWindow #myWindow [width]=\"1000\" [height]=\"'90%'\" [resizable]=\"false\" [isModal]=\"true\" [autoOpen]=\"false\" [theme]=\"'energyblue'\">\r\n    <div class=\"header\">Header Div</div>\r\n    <div id=\"windowContent\">\r\n        This is your window content!!\r\n    </div>\r\n</jqxWindow>\r\n<jqxNotification #msgNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n    [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'success'\">\r\n    <div id='message'></div>\r\n</jqxNotification>\r\n<jqxNotification #errNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n    [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'error'\">\r\n    <div id='error'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/inventory-master/approve-requisition/approve-requisition.component.scss":
/***/ (function(module, exports) {

module.exports = ".tfm-panel .tfm-panel-container {\n  position: relative;\n  width: 100%;\n  border: 1px solid #c5c5c5;\n  height: auto; }\n\n.submit-form {\n  background-color: #ffffff;\n  margin: 5px;\n  padding: 10px; }\n"

/***/ }),

/***/ "./src/app/layout/inventory-master/approve-requisition/approve-requisition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveRequisitionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ApproveRequisitionComponent = /** @class */ (function () {
    function ApproveRequisitionComponent(fb, ars, cus, currentActivatedRoute, dateService, cdr, router, translate, rdms) {
        this.fb = fb;
        this.ars = ars;
        this.cus = cus;
        this.currentActivatedRoute = currentActivatedRoute;
        this.dateService = dateService;
        this.cdr = cdr;
        this.router = router;
        this.translate = translate;
        this.rdms = rdms;
        this.gridColumns = [];
        this.orderColumns = [];
        this.editrow = -1;
        this.showDetailsGrid = false;
        this.selectedOrderList = [];
        this.userData = {};
        this.gridRenderToolbar = function (toolbar) {
            var container = document.createElement('div');
            container.style.margin = '5px';
            var buttonContainer3 = document.createElement('div');
            buttonContainer3.id = 'buttonContainer3';
            buttonContainer3.style.cssText = 'float: left; margin-left: 5px';
            buttonContainer3.innerHTML = "<b>Order Pending List :</b>";
            container.appendChild(buttonContainer3);
            toolbar[0].appendChild(container);
        };
        this.orderRenderToolbar = function (toolbar) {
            var container = document.createElement('div');
            container.style.margin = '5px';
            var buttonContainer3 = document.createElement('div');
            buttonContainer3.id = 'buttonContainer3';
            buttonContainer3.style.cssText = 'float: left; margin-left: 5px';
            buttonContainer3.innerHTML = "<b>Order Pending List Detail:</b>";
            container.appendChild(buttonContainer3);
            toolbar[0].appendChild(container);
        };
        this.createForm();
        // this.getTranslation();
        this.userData = this.cus.getTokenData();
        // console.log(this.userData);
    }
    ApproveRequisitionComponent.prototype.createForm = function () {
        this.approveReqForm = this.fb.group({
            'approve_date': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'approve_by': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    // getTranslation() {
    //   this.translate.get(['ORDERPENDINGLIST', 'VIEWHISTORY', 'ORDERPENDINGLISTDETAIL', 'SN', 'VIEW', 'REQUISITIONNO', 'ITEM', 'NAME', 'UNIT', 'REQUISITIONNO', 'REQUESTINGQTY', 'REQUESTINGDATE', 'REQUIREDDAY', 'REQUESTINGORDERBY', 'FISCALYEAR', 'ENTERBY', 'SPECIFICATION', 'REMARKS', 'ACTION']).subscribe((translation: [string]) => {
    //     this.transData = translation;
    //   });
    // }
    ApproveRequisitionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gridSource =
            {
                datatype: 'json',
                datafields: [
                    { name: 'id', type: 'number' },
                    { name: 'indent_no', type: 'string' },
                    { name: 'from_store' },
                    { name: 'requisition_item_details' },
                    { name: 'to_store', type: 'string' },
                    { name: 'indent_date', type: 'string' },
                    { name: 'from_store_name', type: 'string', map: 'from_store>name' },
                    { name: 'from_store_id', type: 'string' },
                    { name: 'to_store_name', type: 'string', map: 'to_store>name' },
                    { name: 'to_store_id', type: 'string' },
                ],
                id: 'id',
                localdata: [],
            };
        this.gridDataAdapter = new jqx.dataAdapter(this.gridSource);
        this.gridColumns =
            [
                {
                    text: 'SN', sortable: false, filterable: false, editable: false,
                    groupable: false, draggable: false, resizable: false,
                    datafield: '', columntype: 'number', width: 80,
                    cellsrenderer: function (row, column, value) {
                        return "<div style='margin:4px;'>" + (value + 1) + "</div>";
                    }
                },
                { text: 'Requisition No.', datafield: 'indent_no', width: 180 },
                { text: 'From Store', displayfield: 'from_store_name', datafield: 'from_store_id' },
                { text: 'To Store', displayfield: 'to_store_name', datafield: 'to_store_id' },
                { text: 'Req.Date', datafield: 'indent_date', width: 160 },
                {
                    text: 'Action', datafield: 'view', sortable: false, filterable: false, width: 100, columntype: 'button',
                    cellsrenderer: function () {
                        return 'View';
                    },
                    buttonclick: function (row) {
                        _this.editrow = row;
                        var dataRecord = _this.groupGrid.getrowdata(_this.editrow);
                        // console.log(dataRecord);
                        if (dataRecord['indent_no']) {
                            _this.jqxLoader.open();
                            _this.orderSource.localdata = dataRecord['requisition_item_details'];
                            _this.orderGrid.updatebounddata();
                            _this.jqxLoader.close();
                            // this.ars.show(dataRecord['requestingNo']).subscribe((res) => {
                            //   // this.showDetailsGrid = true;
                            //   this.orderSource.localdata = res;
                            //   this.orderGrid.updatebounddata();
                            //   this.jqxLoader.close();
                            // }, (error) => {
                            //   this.jqxLoader.close();
                            // });
                        }
                    }
                }
                //,
                // {
                //   text: 'Action', datafield: 'viewHistory', sortable: false, filterable: false, width: 210, columntype: 'button',
                //   cellsrenderer: (): string => {
                //     return 'View History';
                //   },
                //   buttonclick: (row: number): void => {
                //     this.editrow = row;
                //     let dataRecord = this.groupGrid.getrowdata(this.editrow);
                //     let data = {
                //       requestingPerson: dataRecord['requestingPerson'],
                //       name: dataRecord['EMP_NAME']
                //     };
                //     this.router.navigate(['../history-requisition.component'], { queryParams: data, relativeTo: this.currentActivatedRoute });
                //   }
                // }
            ];
        this.orderSource =
            {
                datatype: 'json',
                datafields: [
                    { name: 'item_name', type: 'string', map: 'item>name' },
                    { name: 'quantity', type: 'string' },
                    { name: 'unit_name', type: 'string', map: 'unit>name' },
                    { name: 'remarks', type: 'string' },
                ],
                localdata: [],
            };
        this.orderDataAdapter = new jqx.dataAdapter(this.orderSource);
        this.orderColumns =
            [
                {
                    text: 'SN', sortable: false, filterable: false, editable: false,
                    groupable: false, draggable: false, resizable: false,
                    datafield: '', columntype: 'number', width: 80,
                    cellsrenderer: function (row, column, value) {
                        return "<div style='margin:4px;'>" + (value + 1) + "</div>";
                    }
                },
                { text: 'Item Name', datafield: 'item_name', },
                { text: 'Quantity', datafield: 'quantity' },
                { text: 'Unit', datafield: 'unit_name' },
                { text: 'Remarks', datafield: 'remaks' },
            ];
    };
    /**
      * Grid row checked event
      * @param event
      */
    // rowChange(event: any) {
    //   let dataRecord = this.groupGrid.getrowdata(event.args.rowindex);
    //   let dt = {};
    //   dt['id'] = dataRecord['id'];
    //   this.selectedOrderList.push(dt);
    //   console.info(this.selectedOrderList);
    // }
    /**
     * Grid row unchecked event
     * @param event
     */
    // rowUnChange(event: any) {
    //   let dataRecord = this.groupGrid.getrowdata(event.args.rowindex);
    //   if(dataRecord){
    //     let index = this.selectedOrderList.findIndex(x => x.id == dataRecord['id']);
    //     if (index > -1) {
    //       this.selectedOrderList.splice(index, 1);
    //     }
    //   }
    //   console.log(this.selectedOrderList);
    // }
    ApproveRequisitionComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var getData = { pending: true, limit: 'all' };
        this.loadReqData(getData);
        var dateD = this.dateService.getToday();
        setTimeout(function () {
            _this.approveReqForm.controls['approve_date'].setValue(dateD['fulldate']);
            _this.approveReqForm.get('approve_date').markAsTouched();
            _this.approveReqForm.controls['approve_by'].setValue(_this.userData['user'].username);
            _this.approveReqForm.get('approve_by').markAsTouched();
            // this.approveReqForm.get('approve_by').disabled;
        }, 100);
        this.cdr.detectChanges();
    };
    ApproveRequisitionComponent.prototype.loadReqData = function (data) {
        var _this = this;
        this.rdms.index(data).subscribe(function (res) {
            // console.log(res);
            _this.gridSource.localdata = res;
            _this.groupGrid.updatebounddata();
            _this.jqxLoader.close();
            // if (res[0]['error']) {
            //   this.gridSource.localdata = [];
            //   this.groupGrid.updatebounddata();
            //   let messageDiv: any = document.getElementById('error');
            //   messageDiv.innerText = res[0]['error'];
            //   this.errNotification.open();
            // }
        }, function (error) {
            _this.jqxLoader.close();
        });
    };
    ApproveRequisitionComponent.prototype.approve = function (formData) {
        var _this = this;
        this.jqxLoader.open();
        var id = this.groupGrid.getselectedrowindexes();
        var ids = [];
        for (var i = 0; i < id.length; i++) {
            var dataRecord = this.groupGrid.getrowdata(Number(id[i]));
            // let dt = {};
            // dt['id'] = dataRecord['id'];
            ids.push(dataRecord['id']);
        }
        // formData['status'] = 'Approve';
        formData['approve_by'] = this.userData['user'] && this.userData['user'].username || null;
        // console.log(ids);
        // console.log(formData);
        if (ids.length > 0 && formData['approve_by'] && formData['approve_date']) {
            formData['approve_requisition'] = true;
            this.rdms.update('[' + ids + ']', formData).subscribe(function (result) {
                if (result['message']) {
                    _this.selectedOrderList = [];
                    _this.orderSource.localdata = [];
                    _this.orderGrid.updatebounddata();
                    _this.groupGrid.clearselection();
                    var messageDiv = document.getElementById('message');
                    messageDiv.innerText = result['message'];
                    _this.msgNotification.open();
                }
                _this.jqxLoader.close();
                if (result['error']) {
                    _this.groupGrid.clearselection();
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
            this.jqxLoader.close();
            var messageDiv = document.getElementById('error');
            messageDiv.innerText = "Please Select at least one item";
            this.errNotification.open();
        }
    };
    ApproveRequisitionComponent.prototype.reject = function (formData) {
        var _this = this;
        this.jqxLoader.open();
        formData['array'] = this.selectedOrderList;
        formData['status'] = 'Reject';
        if (formData['array'].length > 0) {
            this.ars.store(formData).subscribe(function (result) {
                if (result['message']) {
                    // this.branchChange(this.approveReqForm.controls['branchCode'].value);
                    _this.orderSource.localdata = [];
                    _this.orderGrid.updatebounddata();
                    _this.groupGrid.clearselection();
                    var messageDiv = document.getElementById('message');
                    messageDiv.innerText = result['message'];
                    _this.msgNotification.open();
                }
                _this.jqxLoader.close();
                if (result['error']) {
                    // this.branchChange(this.approveReqForm.controls['branchCode'].value);
                    _this.orderSource.localdata = [];
                    _this.orderGrid.updatebounddata();
                    _this.groupGrid.clearselection();
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
            this.jqxLoader.close();
            var messageDiv = document.getElementById('error');
            messageDiv.innerText = "Please Select at least one item";
            this.errNotification.open();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], ApproveRequisitionComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('errNotification'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _b || Object)
    ], ApproveRequisitionComponent.prototype, "errNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _c || Object)
    ], ApproveRequisitionComponent.prototype, "jqxLoader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input1'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
    ], ApproveRequisitionComponent.prototype, "inputEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myWindow'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_jqwidgets_framework_jqwidgets_ts_angular_jqxwindow__["a" /* jqxWindowComponent */]) === "function" && _e || Object)
    ], ApproveRequisitionComponent.prototype, "myWindow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('groupGrid'),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _f || Object)
    ], ApproveRequisitionComponent.prototype, "groupGrid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('orderGrid'),
        __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === "function" && _g || Object)
    ], ApproveRequisitionComponent.prototype, "orderGrid", void 0);
    ApproveRequisitionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-approve-requisition',
            template: __webpack_require__("./src/app/layout/inventory-master/approve-requisition/approve-requisition.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/approve-requisition/approve-requisition.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["i" /* ApproveRequisitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["i" /* ApproveRequisitionService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["v" /* CurrentUserService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["ActivatedRoute"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["w" /* DateConverterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["w" /* DateConverterService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["Router"]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["_5" /* RequisitionDetailMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["_5" /* RequisitionDetailMasterService */]) === "function" && _r || Object])
    ], ApproveRequisitionComponent);
    return ApproveRequisitionComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
}());

//# sourceMappingURL=approve-requisition.component.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/approve-requisition/approve-requisition.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveRequisitionModule", function() { return ApproveRequisitionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__approve_requisition_component__ = __webpack_require__("./src/app/layout/inventory-master/approve-requisition/approve-requisition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approve_requisition_routing_module__ = __webpack_require__("./src/app/layout/inventory-master/approve-requisition/approve-requisition-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_requisition_history_requisition_component__ = __webpack_require__("./src/app/layout/inventory-master/approve-requisition/history-requisition/history-requisition.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ApproveRequisitionModule = /** @class */ (function () {
    function ApproveRequisitionModule() {
    }
    ApproveRequisitionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__approve_requisition_routing_module__["a" /* ApproveRequisitionRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__approve_requisition_component__["a" /* ApproveRequisitionComponent */],
                __WEBPACK_IMPORTED_MODULE_5__history_requisition_history_requisition_component__["a" /* HistoryRequisitionComponent */]
            ]
        })
    ], ApproveRequisitionModule);
    return ApproveRequisitionModule;
}());

//# sourceMappingURL=approve-requisition.module.js.map

/***/ }),

/***/ "./src/app/layout/inventory-master/approve-requisition/history-requisition/history-requisition.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tfm-panel\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 tfm-panel-right\">\r\n      <div class=\"tfm-panel-container\">\r\n        <div class=\"tfm-panel-header jqx-widget-header jqx-window-header jqx-widget-header-energyblue\">\r\n          <h2> Requesting History of <span *ngIf=\"requestingPerson\">{{requestingPerson}}</span></h2>\r\n        </div>\r\n        <div class=\"bg-white p-1\">\r\n        </div>\r\n        <div class=\"rs-grid-panel bg-white\">\r\n          <div class=\"scroll-container\" style=\"margin: 10px;\">\r\n            <div class=\"row justify-content-md-center\">\r\n              <div class=\"col-12\">\r\n                <div id=\"reportContainer\">\r\n                  <div class=\"info-container\">\r\n                  </div>\r\n                  <table class=\"table table-bordered\" *ngIf=\"requestingHistory.length>0\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Date</th>\r\n                        <th>Requesting No</th>\r\n                        <th>Item Name</th>\r\n                        <th>Requesting Qty</th>\r\n                        <th>Receive Qty</th>\r\n                        <th>Remarks</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let data of requestingHistory\">\r\n                        <td>{{data['DATE']}}</td>\r\n                        <td>{{data['REQUESTING_NO']}}</td>\r\n                        <td>{{data['ITEM_NAME']}}</td>\r\n                        <td>{{data['REQUESTING_QTY']}} &nbsp;{{data['UNIT']}}</td>\r\n                        <td>{{data['ISSUED_QTY']}} &nbsp;{{data['UNIT']}}</td>\r\n                        <td>{{data['REMARK']}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<jqxNotification #msgNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n  [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'success'\">\r\n  <div id='message'></div>\r\n</jqxNotification>\r\n<jqxNotification #errNotification [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\" [autoClose]=\"true\"\r\n  [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'error'\">\r\n  <div id='error'></div>\r\n</jqxNotification>\r\n<jqxLoader #jqxLoader [imagePosition]=\"'top'\" [theme]=\"'energyblue'\" [width]=\"100\" [height]=\"60\">\r\n</jqxLoader>"

/***/ }),

/***/ "./src/app/layout/inventory-master/approve-requisition/history-requisition/history-requisition.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/inventory-master/approve-requisition/history-requisition/history-requisition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryRequisitionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxloader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__ = __webpack_require__("./node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxnotification.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistoryRequisitionComponent = /** @class */ (function () {
    function HistoryRequisitionComponent(cus, activatedRoute, ars) {
        this.cus = cus;
        this.activatedRoute = activatedRoute;
        this.ars = ars;
        this.requestingHistory = [];
    }
    HistoryRequisitionComponent.prototype.ngOnInit = function () {
    };
    HistoryRequisitionComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params['requestingPerson']) {
                _this.requestingPerson = params['name'];
                var dt = {};
                dt['requisitionBy'] = params['requestingPerson'];
                _this.loadData(dt);
            }
        });
    };
    HistoryRequisitionComponent.prototype.loadData = function (post) {
        var _this = this;
        this.requestingHistory = [];
        this.jqxLoader.open();
        this.ars.getReqHistory(post).subscribe(function (response) {
            _this.jqxLoader.close();
            _this.requestingHistory = response;
        }, function (error) {
            _this.jqxLoader.close();
            console.info(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNotification'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _a || Object)
    ], HistoryRequisitionComponent.prototype, "msgNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('errNotification'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_jqwidgets_framework_jqwidgets_ts_angular_jqxnotification__["a" /* jqxNotificationComponent */]) === "function" && _b || Object)
    ], HistoryRequisitionComponent.prototype, "errNotification", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jqxLoader'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_jqwidgets_framework_jqwidgets_ts_angular_jqxloader__["a" /* jqxLoaderComponent */]) === "function" && _c || Object)
    ], HistoryRequisitionComponent.prototype, "jqxLoader", void 0);
    HistoryRequisitionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-history-requisition',
            template: __webpack_require__("./src/app/layout/inventory-master/approve-requisition/history-requisition/history-requisition.component.html"),
            styles: [__webpack_require__("./src/app/layout/inventory-master/approve-requisition/history-requisition/history-requisition.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["v" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["v" /* CurrentUserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["i" /* ApproveRequisitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["i" /* ApproveRequisitionService */]) === "function" && _f || Object])
    ], HistoryRequisitionComponent);
    return HistoryRequisitionComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=history-requisition.component.js.map

/***/ })

});
//# sourceMappingURL=approve-requisition.module.chunk.js.map