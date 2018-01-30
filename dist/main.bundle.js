webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <app-employees></app-employees>\n</div>\n<div class=\"container\">\n    <google-map></google-map>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employees_employees_component__ = __webpack_require__("../../../../../src/app/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employees_employee_employee_component__ = __webpack_require__("../../../../../src/app/employees/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__employees_employee_list_employee_list_component__ = __webpack_require__("../../../../../src/app/employees/employee-list/employee-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geo_service__ = __webpack_require__("../../../../../src/app/geo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__google_map_google_map_component__ = __webpack_require__("../../../../../src/app/google-map/google-map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__employees_employees_component__["a" /* EmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__employees_employee_employee_component__["a" /* EmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__google_map_google_map_component__["a" /* GoogleMapComponent */],
                __WEBPACK_IMPORTED_MODULE_9__employees_employee_list_employee_list_component__["a" /* EmployeeListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].googleMapsKey
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__geo_service__["a" /* GeoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/employees/employee-list/employee-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employees/employee-list/employee-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"text-center\"></h6><br/>\n<table class=\"table table-sm table-hover table-striped table-responsive-sm\">\n    <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Activity</th>\n          <th scope=\"col\">Location</th>\n          <th scope=\"col\">Cost</th>\n          <th scope=\"col\">Edit</th>\n          <th scope=\"col\">Delete</th>\n        </tr>\n      </thead>\n<tbody>\n  <tr *ngFor=\"let employee of employeeList\">\n      <td>{{employee.name}}</td>\n      <td>{{employee.activity}}</td>\n      <td>{{employee.location}}</td> \n      <td>{{employee.cost}}</td>\n      <td>\n        <a class=\"btn\" (click)=\"onEdit(employee)\">\n          <i class=\"fa fa-pencil-square-o\"></i>\n        </a>\n      </td>\n      <td>  \n        <a class=\"btn\" (click)=\"onDelete(employee.$key)\">\n          <i class=\"fa fa-trash-o\"></i>\n        </a>\n      </td>\n  </tr>\n</tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/employees/employee-list/employee-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("../../../../../src/app/employees/shared/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeListComponent = (function () {
    function EmployeeListComponent(employeeService, tostr) {
        this.employeeService = employeeService;
        this.tostr = tostr;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.employeeService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.employeeList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.employeeList.push(y);
            });
        });
    };
    EmployeeListComponent.prototype.onEdit = function (emp) {
        this.employeeService.selectedEmployee = Object.assign({}, emp);
    };
    EmployeeListComponent.prototype.onDelete = function (key) {
        if (confirm('Are you sure to delete this record ?') == true) {
            this.employeeService.deleteEmployee(key);
            this.tostr.warning("Deleted Successfully", "Employee register");
        }
    };
    EmployeeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-employee-list',
            template: __webpack_require__("../../../../../src/app/employees/employee-list/employee-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/employees/employee-list/employee-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/employees/employee/employee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employees/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<form #employeeForm=\"ngForm\" (ngSubmit)=\"onSubmit(employeeForm)\">\n    <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.$key\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input class=\"form-control\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.name\" placeholder=\"Name\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Activity</label>\n    <input class=\"form-control\" name=\"activity\" #position=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.activity\" placeholder=\"Activity\">\n  </div>\n  <div class=\"form-group\">\n    <label>Location</label>\n    <input class=\"form-control\" name=\"location\" #office=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.location\" placeholder=\"Location\">\n  </div>\n  <div class=\"form-group\">\n    <label>Cost</label>\n    <div class=\"input-group\">\n        <div class=\"input-group-addon\">\n          <i class=\"fa fa-dollar\"></i>\n        </div>\n        <input class=\"form-control\" name=\"cost\" #salary=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.cost\" placeholder=\"Cost\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n      <label>Edit</label>  \n    </div>  \n  <div class=\"form-group\">\n        <label>Delete</label>\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-default\" type=\"submit\" [disabled]=\"!employeeForm.valid\">\n      <i class=\"fa fa-floppy-o\"></i>\n       Submit</button>\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"resetForm(employeeForm)\">\n      <i class=\"fa fa-repeat\"></i>\n       Reset</button>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/employees/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("../../../../../src/app/employees/shared/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService, tostr) {
        this.employeeService = employeeService;
        this.tostr = tostr;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    EmployeeComponent.prototype.onSubmit = function (employeeForm) {
        if (employeeForm.value.$key == null)
            this.employeeService.insertEmployee(employeeForm.value);
        else
            this.employeeService.updateEmployee(employeeForm.value);
        this.resetForm(employeeForm);
        this.tostr.success('Submitted Succcessfully', 'Employee Register');
    };
    EmployeeComponent.prototype.resetForm = function (employeeForm) {
        if (employeeForm != null)
            employeeForm.reset();
        this.employeeService.selectedEmployee = {
            $key: null,
            name: '',
            activity: '',
            location: '',
            cost: 0,
        };
    };
    EmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-employee',
            template: __webpack_require__("../../../../../src/app/employees/employee/employee.component.html"),
            styles: [__webpack_require__("../../../../../src/app/employees/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/employees/employees.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employees/employees.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h2 class=\"jumbotron\">Mystery Weekends!</h2>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <app-employee></app-employee>\n  </div>\n  <div class=\"col-md-5\">\n    <app-employee-list></app-employee-list>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("../../../../../src/app/employees/shared/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeesComponent = (function () {
    function EmployeesComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-employees',
            template: __webpack_require__("../../../../../src/app/employees/employees.component.html"),
            styles: [__webpack_require__("../../../../../src/app/employees/employees.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/employees/shared/employee.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "../../../../../src/app/employees/shared/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_model__ = __webpack_require__("../../../../../src/app/employees/shared/employee.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeService = (function () {
    function EmployeeService(firebase) {
        this.firebase = firebase;
        this.selectedEmployee = new __WEBPACK_IMPORTED_MODULE_2__employee_model__["a" /* Employee */]();
    }
    EmployeeService.prototype.getData = function () {
        this.employeeList = this.firebase.list('mysteryWeekends');
        return this.employeeList;
    };
    EmployeeService.prototype.insertEmployee = function (employee) {
        this.employeeList.push({
            name: employee.name,
            activity: employee.activity,
            location: employee.location,
            cost: employee.cost
        });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        this.employeeList.update(employee.$key, {
            name: employee.name,
            activity: employee.activity,
            location: employee.location,
            cost: employee.cost
        });
    };
    EmployeeService.prototype.deleteEmployee = function ($key) {
        this.employeeList.remove($key);
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "../../../../../src/app/geo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire__ = __webpack_require__("../../../../geofire/dist/geofire.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeoService = (function () {
    function GeoService(db) {
        this.db = db;
        this.hits = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        /// Reference database location for GeoFire
        this.dbRef = this.db.list('/locations');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef.query.ref);
    }
    /// Adds GeoFire data to database
    GeoService.prototype.setLocation = function (key, coords) {
        this.geoFire.set(key, coords)
            .then(function (_) { return console.log('location updated'); })
            .catch(function (err) { return console.log(err); });
    };
    /// Queries database for nearby locations
    /// Maps results to the hits BehaviorSubject
    GeoService.prototype.getLocations = function (radius, coords) {
        var _this = this;
        this.geoFire.query({
            center: coords,
            radius: radius
        })
            .on('key_entered', function (key, location, distance) {
            var hit = {
                location: location,
                distance: distance
            };
            var currentHits = _this.hits.value;
            currentHits.push(hit);
            _this.hits.next(currentHits);
        });
    };
    GeoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], GeoService);
    return GeoService;
}());



/***/ }),

/***/ "../../../../../src/app/google-map/google-map.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  google-map works!\n</p>\n\n<div *ngIf=\"lat && lng\">\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\n      <agm-info-window>\n        <h3><strong>Howdy!</strong></h3>\n        <p>You are here!</p>\n      </agm-info-window>\n    </agm-marker>\n  </agm-map>\n<div>\n\n    <agm-marker *ngFor=\"let marker of markers\"\n    [latitude]=\"marker.location[0]\"\n    [longitude]=\"marker.location[1]\"\n    [iconUrl]=\"'https://cdn1.iconfinder.com/data/icons/designer-s-tools-1/512/Coffee-64.png'\">\n    <agm-info-window>\n      <h3><strong>Location Details</strong></h3>\n      <p>You are {{ marker.distance }} kilometers from this point</p>\n    </agm-info-window>\n  </agm-marker>"

/***/ }),

/***/ "../../../../../src/app/google-map/google-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/google-map/google-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geo_service__ = __webpack_require__("../../../../../src/app/geo.service.ts");
/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  lat: number;
  lng: number;
  constructor() { }
  ngOnInit() {
    this.getUserLocation()
  }
  private getUserLocation() {
   /// locate the user
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;
     });
   }
 }
} */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleMapComponent = (function () {
    function GoogleMapComponent(geo) {
        this.geo = geo;
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserLocation();
        this.subscription = this.geo.hits
            .subscribe(function (hits) { return _this.markers = hits; });
    };
    GoogleMapComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    //seed the database
    GoogleMapComponent.prototype.seedDatabase = function () {
        var _this = this;
        var dummyPoints = [
            [36.9, 174.1],
            [36.9, 174.2],
            [36.9, 174.3],
            [36.9, 174.0],
            [36.9, 174.1]
        ];
        dummyPoints.forEach(function (val, idx) {
            var name = "dummy-location-" + idx;
            console.log(idx);
            _this.geo.setLocation(name, val);
        });
    };
    GoogleMapComponent.prototype.getUserLocation = function () {
        var _this = this;
        /// locate the user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.geo.getLocations(10000, [_this.lat, _this.lng]);
            });
        }
    };
    GoogleMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'google-map',
            template: __webpack_require__("../../../../../src/app/google-map/google-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/google-map/google-map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__geo_service__["a" /* GeoService */]])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyC42VPrXAPBeEe8Fdzf4ZNnDsGqzdPrSMc",
        authDomain: "jobster-1e783.firebaseapp.com",
        databaseURL: "https://jobster-1e783.firebaseio.com",
        projectId: "jobster-1e783",
        storageBucket: "jobster-1e783.appspot.com",
        messagingSenderId: "487789384757"
    },
    googleMapsKey: 'AIzaSyBz6pgWHwSt5tZGBSR-CHA9QTBcARxH2jo'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map