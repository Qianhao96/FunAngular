(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n  <a routerLink=\"/home\" class=\"nav-link\">Go back</a>\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/forbidden/forbidden.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");











var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        children: [
            { path: 'registration', component: _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
            { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
            { path: 'reset-password', component: _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"] }
        ]
    },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'forbidden', component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_8__["ForbiddenComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], data: { permittedRoles: ['Admin'] } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\n\t<title></title>\n</head>\n\n<body>\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FunAngular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_registration_registration_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/registration/registration.service */ "./src/app/user/registration/registration.service.ts");
/* harmony import */ var _user_login_login_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/login/login.service */ "./src/app/user/login/login.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/forbidden/forbidden.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"],
                _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_18__["ForbiddenComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_20__["ResetPasswordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot()
            ],
            providers: [_user_registration_registration_service__WEBPACK_IMPORTED_MODULE_12__["RegistrationService"], _user_login_login_service__WEBPACK_IMPORTED_MODULE_13__["LoginService"], _home_home_service__WEBPACK_IMPORTED_MODULE_15__["HomeService"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, toastrService) {
        this.router = router;
        this.toastrService = toastrService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token') != null) {
            var roles = next.data['permittedRoles'];
            if (roles) {
                if (this.roleMatch(roles))
                    return true;
                else {
                    this.router.navigate(['/forbidden']);
                    return false;
                }
            }
            return true;
        }
        else {
            this.router.navigate(['/user/login']);
            this.toastrService.warning('Please login');
            return false;
        }
    };
    AuthGuard.prototype.roleMatch = function (allowedRoles) {
        var isMatch = false;
        var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
        var userRoles = payLoad.role;
        allowedRoles.forEach(function (element) {
            if (userRoles == element) {
                isMatch = true;
                return false;
            }
        });
        return isMatch;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




//Every api need the token to authenticate the user, or use (auth.interceptor)
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (localStorage.getItem('token') != null) {
            var clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (succ) { }, function (err) {
                if (err.status == 401) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/user/login']);
                }
                else if (err.status == 403) {
                    _this.router.navigate(['/forbidden']);
                }
            }));
        }
        else
            return next.handle(req.clone());
    };
    ;
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vertical-center{\n    vertical-align: -webkit-baseline-middle;\n}\n.nav-right{\n    display: flex;\n    align-items: center;\n    flex: 0 1 auto;\n    margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7QUFDM0M7QUFDQTtJQUdJLGFBQWE7SUFHYixtQkFBbUI7SUFHbkIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnRpY2FsLWNlbnRlcntcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS1taWRkbGU7XG59XG4ubmF2LXJpZ2h0e1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtbXMtZmxleDogMCAxIGF1dG87XG4gICAgZmxleDogMCAxIGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pt-2 pb-2\" style=\"background-color:#222831\">\n  <nav class=\"nav\">\n    <!-- Login Location -->\n    <div class=\"logo\">\n      <a href=\"/\" aria-label=\"FunAnguler\">\n        <img class=\"ml-2 mr-2 vertical-center\" src=\"../../../favicon.ico\">\n      </a>\n    </div>\n\n    <!-- Nav Left Position -->\n    <div class=\"nav-left vertical-center\">\n      <a *ngIf=\"isLogedIn && isAdmin\" routerLink=\"/admin\" class=\"nav-link\">Admin</a>\n    </div>\n\n    <!-- Nav Right Position -->\n    <div class=\"nav-right\">\n      <a *ngIf=\"!isLogedIn; else notLogedIn\" class=\"app-btn vertical-center\" routerLink='/user/login' href=\"#\" rel=\"nofollow\">\n        <span>Login</span>\n      </a>\n      <ng-template #notLogedIn>\n        <a class=\"app-btn vertical-center\" routerLink='' (click)=\"onLogout()\">Logout</a>\n      </ng-template>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, userService, toastrService) {
        this.router = router;
        this.userService = userService;
        this.toastrService = toastrService;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.ngDoCheck = function () {
        this.isLogedIn = this.userService.isLogIn();
        if (this.isLogedIn) {
            this.isAdmin = this.userService.isAdmin();
        }
    };
    HeaderComponent.prototype.onLogin = function () {
        this.isLogedIn = this.userService.isLogIn();
    };
    HeaderComponent.prototype.onLogout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/user/login']);
        this.toastrService.success('Logout successfully');
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/forbidden/forbidden.component.css":
/*!***************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmJpZGRlbi9mb3JiaWRkZW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/forbidden/forbidden.component.html":
/*!****************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  You don't have the perssion to access this page!!!\n  <a routerLink=\"/home\" class=\"nav-link\">Go back</a>\n</p>\n"

/***/ }),

/***/ "./src/app/forbidden/forbidden.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.ts ***!
  \**************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForbiddenComponent = /** @class */ (function () {
    function ForbiddenComponent() {
    }
    ForbiddenComponent.prototype.ngOnInit = function () {
    };
    ForbiddenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forbidden',
            template: __webpack_require__(/*! ./forbidden.component.html */ "./src/app/forbidden/forbidden.component.html"),
            styles: [__webpack_require__(/*! ./forbidden.component.css */ "./src/app/forbidden/forbidden.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForbiddenComponent);
    return ForbiddenComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card m-5\" style=\"width:18rem\" *ngIf=\"userDetails\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\"><strong>Username: </strong>{{userDetails.userName}}</li>\n    <li class=\"list-group-item\"><strong>Email: </strong>{{userDetails.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, toastrService, service, userService) {
        this.router = router;
        this.toastrService = toastrService;
        this.service = service;
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUserProfile().subscribe(function (res) { _this.userDetails = res; }, function (err) {
            console.log(err);
        });
        this.isAdmin = this.userService.isAdmin();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"],
            _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
        this.Url = "http://localhost:59372/api/UserProfile";
    }
    HomeService.prototype.getUserProfile = function () {
        return this.http.get(this.Url);
        //Every api need the token to authenticate the user, or use (auth.interceptor)
        // var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        // return this.http.get(this.Url, { headers: tokenHeader });
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.getUserSecurityQuetionURL = 'http://localhost:59372/api/ApplicationUser/Get-Question';
        this.checkAnswerUrl = 'http://localhost:59372/api/ApplicationUser/Check-Answer';
        this.changePasswordUrl = 'http://localhost:59372/api/ApplicationUser/New-Password';
    }
    UserService.prototype.isAdmin = function () {
        var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
        return (payLoad.role == "Admin") ? true : false;
    };
    UserService.prototype.isLogIn = function () {
        return (localStorage.getItem('token')) != null ? true : false;
    };
    UserService.prototype.getQuestion = function (userName) {
        return this.http.post(this.getUserSecurityQuetionURL, userName);
    };
    UserService.prototype.checkAnswer = function (body) {
        return this.http.post(this.checkAnswerUrl, body);
    };
    UserService.prototype.changePassword = function (body) {
        return this.http.post(this.changePasswordUrl, body);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" #form='ngForm' class=\"form-horizontal\" role=\"form\" method=\"POST\"\n  (submit)=\"onSubmit(form)\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <h2>Please Login</h2>\n      <hr>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group has-danger\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n          <input formControlName=\"userName\" type=\"text\" name=\"userName\" class=\"form-control\" id=\"userName\"\n            placeholder=\"John Doe\" required>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"userName.touched && userName.invalid\" class=\"col-md-3\">\n      <div *ngIf=\"userName.errors.required\" class=\"form-control-feedback\">\n        <span class=\"text-danger align-middle\">\n          User name is required\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n          <input formControlName=\"password\" type=\"password\" name=\"password\" class=\"form-control\" id=\"password\"\n            placeholder=\"Password\" required>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"password.touched && password.invalid\" class=\"col-md-3\">\n      <div *ngIf=\"password.errors.required\" class=\"form-control-feedback\">\n        <span class=\"text-danger align-middle\">\n          password is required\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\" style=\"padding-top: .35rem\">\n      <div class=\"form-check mb-2 mr-sm-2 mb-sm-0\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" name=\"remember\" type=\"checkbox\">\n          <span style=\"padding-bottom: .15rem\">Remember me</span>\n        </label>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" style=\"padding-top: 1rem\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <button [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"btn btn-success\"><i class=\"fa fa-sign-in\"></i>\n        Login</button>\n      <a class=\"btn btn-link\" routerLinkActive='active' routerLink='/user/reset-password' href=\"#\">Forgot Your\n        Password?</a>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/user/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, router, toastrService) {
        this.service = service;
        this.router = router;
        this.toastrService = toastrService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['/home']);
        }
    };
    Object.defineProperty(LoginComponent.prototype, "userName", {
        get: function () {
            return this.loginForm.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.service.login(form.value).subscribe(function (res) {
            localStorage.setItem('token', res.token);
            _this.toastrService.success('Login Successful!!!');
            _this.router.navigate(['/home']);
        }, function (err) {
            if (err.status == 400)
                _this.toastrService.error('Incorrect username or password');
            else
                console.log(err);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.service.ts":
/*!*********************************************!*\
  !*** ./src/app/user/login/login.service.ts ***!
  \*********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.loginUrl = 'http://localhost:59372/api/ApplicationUser/Login';
    }
    LoginService.prototype.login = function (formData) {
        return this.http.post(this.loginUrl, formData);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/user/registration/registration.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/registration/registration.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width: 768px) {\n    .field-label-responsive {\n      padding-top: .5rem;\n      text-align: right;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtNQUNFLGtCQUFrQjtNQUNsQixpQkFBaUI7SUFDbkI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuZmllbGQtbGFiZWwtcmVzcG9uc2l2ZSB7XG4gICAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/user/registration/registration.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/registration/registration.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form [formGroup]=\"registrationForm\" #f=\"ngForm\" role=\"form\" method=\"POST\" (submit)=\"onSubmit()\">\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n                <h2>Register New User</h2>\n                <hr>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3 field-label-responsive\">\n                <label for=\"name\">Username</label>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n                        <input formControlName=\"name\" type=\"text\" name=\"name\" class=\"form-control\" id=\"name\"\n                            placeholder=\"John Doe\" required>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"name.touched && name.invalid\" class=\"col-md-3\">\n                <div *ngIf=\"name.errors.required\" class=\"form-control-feedback\">\n                    <span class=\"text-danger align-middle\">\n                        Name is required\n                    </span>\n                </div>\n                <div *ngIf=\"name.errors.spaceNotAllowed\" class=\"form-control-feedback\">\n                    <span class=\"text-danger align-middle\">\n                        {{name.errors.spaceNotAllowed}}\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3 field-label-responsive\">\n                <label for=\"email\">E-Mail Address</label>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                        <input formControlName=\"email\" type=\"text\" name=\"email\" class=\"form-control\" id=\"email\"\n                            placeholder=\"you@example.com\">\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"email.touched && email.invalid\" class=\"col-md-3\">\n                <div *ngIf=\"email.errors.required\" class=\"form-control-feedback\">\n                    <span class=\"text-danger align-middle\">\n                        Email is required\n                    </span>\n                </div>\n                <div *ngIf=\"email.errors.email\" class=\"form-control-feedback\">\n                    <span class=\"text-danger align-middle\">\n                        Please provide a valide Email\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div formGroupName=\"matchPassword\">\n            <div class=\"row\">\n                <div class=\"col-md-3 field-label-responsive\">\n                    <label for=\"password\">Password</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group has-danger\">\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                            <input formControlName=\"password\" type=\"password\" name=\"password\" class=\"form-control\"\n                                id=\"password\" placeholder=\"Password\">\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"password.touched && password.invalid\" class=\"col-md-3\">\n                    <div *ngIf=\"password.errors.required\" class=\"form-control-feedback\">\n                        <span class=\"text-danger align-middle\">\n                            Password is required\n                        </span>\n                    </div>\n                    <div *ngIf=\"password.errors.passwordLength\" class=\"form-control-feedback\">\n                        <span class=\"text-danger align-middle\">\n                            Minimum password length is {{ password.errors.passwordLength.requiredLength }}\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3 field-label-responsive\">\n                    <label for=\"confirmPassword\">Confirm Password</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group has-danger\">\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                            <input formControlName=\"confirmPassword\" type=\"password\" name=\"confirmPassword\"\n                                class=\"form-control\" id=\"confirmPassword\" placeholder=\"Confirm Password\">\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"confirmPassword.touched && confirmPassword.invalid\" class=\"col-md-3\">\n                    <div *ngIf=\"confirmPassword.errors.required\" class=\"form-control-feedback\">\n                        <span class=\"text-danger align-middle\">\n                            Password is required\n                        </span>\n                    </div>\n                    <div *ngIf=\"confirmPassword.errors.passwordMissmatch\" class=\"form-control-feedback\">\n                        <span class=\"text-danger align-middle\">\n                            {{confirmPassword.errors.passwordMissmatch}}\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3 field-label-responsive\">\n                <label for=\"question\">Question</label>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-question\"></i></div>\n                        <input formControlName=\"question\" type=\"text\" name=\"question\" class=\"form-control\" id=\"question\"\n                            placeholder=\"what is your favorite color...\" required>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"question.touched && question.invalid\" class=\"col-md-3\">\n                <div *ngIf=\"question.errors.required\" class=\"form-control-feedback\">\n                    <span class=\"text-danger align-middle\">\n                        Security question is required.\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3 field-label-responsive\">\n                <label for=\"answer\">Answer</label>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                        <input formControlName=\"answer\" type=\"text\" name=\"answer\" class=\"form-control\" id=\"answer\"\n                            placeholder=\"Blue\" required>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"answer.touched && answer.invalid\" class=\"col-md-3\">\n                <div *ngIf=\"answer.errors.required\" class=\"form-control-feedback\">\n                    <span class=\"text-danger align-middle\">\n                        Answer is required.\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n                <button type=\"submit\" [disabled]=\"!registrationForm.valid\" class=\"btn btn-success\"><i\n                        class=\"fa fa-user-plus\"></i> Register</button>\n            </div>\n        </div>\n    </form>\n</div>\n\n\n<button (click)=\"test()\">test</button>"

/***/ }),

/***/ "./src/app/user/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _registration_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.validators */ "./src/app/user/registration/registration.validators.ts");
/* harmony import */ var _registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration.service */ "./src/app/user/registration/registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var RegistrationComponent = /** @class */ (function () {
    //inject the desired service, can be as many as you want
    function RegistrationComponent(service, router, toastrService) {
        this.service = service;
        this.router = router;
        this.toastrService = toastrService;
        //could use form builder to simpler the code 
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _registration_validators__WEBPACK_IMPORTED_MODULE_3__["RegistrationValidators"].cannotContainSpace,
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            matchPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _registration_validators__WEBPACK_IMPORTED_MODULE_3__["RegistrationValidators"].passwordLength
                ]),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            }, { validators: this.comparePasswords }),
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    //put code where you want to excute when the page is loaded
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    //custome validator within the same file as where it is used 
    RegistrationComponent.prototype.comparePasswords = function (form) {
        var password = form.get('password');
        var confirmPs = form.get('confirmPassword');
        if (password.value != confirmPs.value) {
            confirmPs.setErrors({ passwordMissmatch: 'Password is not match' });
            return null;
        }
    };
    Object.defineProperty(RegistrationComponent.prototype, "name", {
        //use this can let the html became less mass
        get: function () {
            return this.registrationForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "email", {
        get: function () {
            return this.registrationForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "password", {
        get: function () {
            return this.registrationForm.get('matchPassword.password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "confirmPassword", {
        get: function () {
            return this.registrationForm.get('matchPassword.confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "question", {
        get: function () {
            return this.registrationForm.get('question');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "answer", {
        get: function () {
            return this.registrationForm.get('answer');
        },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent.prototype.test = function () {
        var _this = this;
        this.service.validateEmail().subscribe(function (res) {
            console.log(res);
            _this.toastrService.success('Welcome!!!');
        });
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        var body = {
            UserName: this.registrationForm.value.name,
            Email: this.registrationForm.value.email,
            Password: this.registrationForm.value.matchPassword.password,
            Question: this.registrationForm.value.question,
            Answer: this.registrationForm.value.answer
        };
        this.service.register(body).subscribe(function (res) {
            console.log(res);
            if (res.succeeded) {
                _this.toastrService.success('Welcome!!!');
                _this.router.navigate(['/user/login']);
            }
            else
                _this.toastrService.warning(res.errors[0].description);
        }, function (err) {
            console.log(err);
        });
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/user/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/user/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_registration_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/user/registration/registration.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/registration/registration.service.ts ***!
  \***********************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RegistrationService = /** @class */ (function () {
    function RegistrationService(http) {
        this.http = http;
        this.test = {
            "Email": "qianhao.liu@gmail.com",
        };
        this.validateEmailUrl = 'http://localhost:59372/api/ApplicationUser/unique';
        this.registerUrl = 'http://localhost:59372/api/ApplicationUser/Register';
    }
    RegistrationService.prototype.validateEmail = function () {
        return this.http.post(this.validateEmailUrl, this.test);
    };
    RegistrationService.prototype.register = function (body) {
        return this.http.post(this.registerUrl, body);
    };
    RegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "./src/app/user/registration/registration.validators.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/registration/registration.validators.ts ***!
  \**************************************************************/
/*! exports provided: RegistrationValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationValidators", function() { return RegistrationValidators; });
//custome validator stors in different file as where it is used 
var RegistrationValidators = /** @class */ (function () {
    function RegistrationValidators() {
    }
    RegistrationValidators.passwordLength = function (control) {
        if (control.value.length < 6)
            return {
                passwordLength: {
                    requiredLength: 6,
                    actualLength: control.value.length
                }
            };
    };
    RegistrationValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0)
            return { spaceNotAllowed: 'Username can not contain space' };
    };
    return RegistrationValidators;
}());



/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"resetPasswordForm\" #form='ngForm' class=\"form-horizontal\" role=\"form\" method=\"POST\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <h2>Please Entre your Usename</h2>\n      <hr>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group has-danger\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n          <input formControlName=\"userName\" type=\"text\" name=\"userName\" class=\"form-control\" id=\"userName\"\n            placeholder=\"John Doe\" (keyup)=\"findUser($event)\" required>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"userName.touched && userName.invalid\" class=\"col-md-3\">\n      <div *ngIf=\"userName.errors.required\" class=\"form-control-feedback\">\n        <span class=\"text-danger align-middle\">\n          User name is required\n        </span>\n      </div>\n    </div>\n  </div>\n  <div *ngIf='Question != null'>\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-question\"></i></div>\n            <p id=\"Question\">{{ Question }}?</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group has-danger\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n            <input formControlName=\"answer\" type=\"text\" name=\"answer\" class=\"form-control\" id=\"answer\" required>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"answer.touched && answer.invalid else check\" class=\"col-md-3\">\n        <div *ngIf=\"answer.errors.required\" class=\"form-control-feedback\">\n          <span class=\"text-danger align-middle\">\n            Answer is required\n          </span>\n        </div>\n      </div>\n      <ng-template #check>\n        <button *ngIf='!answer.invalid' type=\"button\" class=\"app-btn vertical-center\" [disabled]=\"!answer.valid\"\n          (click)=\"checkAnswer()\">Check Answer</button>\n      </ng-template>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div *ngIf=\"IncorrectAnswer == true\" class=\"col-md-6\">\n        <div class=\"form-control-feedback\">\n          <span class=\"text-danger align-middle\">\n            Incorrect answer\n          </span>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"IncorrectAnswer == false\" formGroupName=\"matchPassword\">\n        <div class=\"row\">\n            <div class=\"col-md-3 field-label-responsive\">\n              <label for=\"oldPassword\">Old Password</label>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group has-danger\">\n                <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                  <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                  <input formControlName=\"oldPassword\" type=\"password\" name=\"oldPassword\" class=\"form-control\" id=\"oldPassword\"\n                    placeholder=\"Old password\">\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"oldPassword.touched && oldPassword.invalid\" class=\"col-md-3\">\n              <div *ngIf=\"oldPassword.errors.required\" class=\"form-control-feedback\">\n                <span class=\"text-danger align-middle\">\n                  Password is required\n                </span>\n              </div>\n            </div>\n          </div>\n      <div class=\"row\">\n        <div class=\"col-md-3 field-label-responsive\">\n          <label for=\"password\">Password</label>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group has-danger\">\n            <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n              <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n              <input formControlName=\"password\" type=\"password\" name=\"password\" class=\"form-control\" id=\"password\"\n                placeholder=\"Password\">\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"password.touched && password.invalid\" class=\"col-md-3\">\n          <div *ngIf=\"password.errors.required\" class=\"form-control-feedback\">\n            <span class=\"text-danger align-middle\">\n              Password is required\n            </span>\n          </div>\n          <div *ngIf=\"password.errors.passwordLength\" class=\"form-control-feedback\">\n            <span class=\"text-danger align-middle\">\n              Minimum password length is {{ password.errors.passwordLength.requiredLength }}\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3 field-label-responsive\">\n          <label for=\"confirmPassword\">Confirm Password</label>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group has-danger\">\n            <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n              <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n              <input formControlName=\"confirmPassword\" type=\"password\" name=\"confirmPassword\" class=\"form-control\"\n                id=\"confirmPassword\" placeholder=\"Confirm Password\">\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"confirmPassword.touched && confirmPassword.invalid else newPassword\" class=\"col-md-3\">\n          <div *ngIf=\"confirmPassword.errors.required\" class=\"form-control-feedback\">\n            <span class=\"text-danger align-middle\">\n              Password is required\n            </span>\n          </div>\n          <div *ngIf=\"confirmPassword.errors.passwordMissmatch\" class=\"form-control-feedback\">\n            <span class=\"text-danger align-middle\">\n              {{confirmPassword.errors.passwordMissmatch}}\n            </span>\n          </div>\n        </div>\n      </div>\n      <ng-template #newPassword>\n        <button *ngIf='!confirmPassword.invalid' type=\"button\" class=\"app-btn vertical-center\" [disabled]=\"!answer.valid\"\n          (click)=\"changePassword()\">Change password</button>\n      </ng-template>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _registration_registration_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../registration/registration.validators */ "./src/app/user/registration/registration.validators.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(userService, router, toastrService) {
        this.userService = userService;
        this.router = router;
        this.toastrService = toastrService;
        this.resetPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            matchPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _registration_registration_validators__WEBPACK_IMPORTED_MODULE_5__["RegistrationValidators"].passwordLength
                ]),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            }, { validators: this.comparePasswords })
        });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    //custome validator within the same file as where it is used 
    ResetPasswordComponent.prototype.comparePasswords = function (form) {
        var password = form.get('password');
        var confirmPs = form.get('confirmPassword');
        if (password.value != confirmPs.value) {
            confirmPs.setErrors({ passwordMissmatch: 'Password is not match' });
            return null;
        }
    };
    Object.defineProperty(ResetPasswordComponent.prototype, "userName", {
        get: function () {
            return this.resetPasswordForm.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "answer", {
        get: function () {
            return this.resetPasswordForm.get('answer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "oldPassword", {
        get: function () {
            return this.resetPasswordForm.get('matchPassword.oldPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "password", {
        get: function () {
            return this.resetPasswordForm.get('matchPassword.password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "confirmPassword", {
        get: function () {
            return this.resetPasswordForm.get('matchPassword.confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    ResetPasswordComponent.prototype.findUser = function (event) {
        var _this = this;
        var body = { Username: event.target.value };
        this.userService.getQuestion(body).subscribe(function (res) {
            console.log(res.question);
            _this.Question = res.question;
        }, function (err) {
            console.log(err.error);
            _this.Question = null;
            _this.toastrService.success(err.error);
        });
    };
    ResetPasswordComponent.prototype.checkAnswer = function () {
        var _this = this;
        var body = {
            Username: this.resetPasswordForm.value.userName,
            Question: this.Question,
            Answer: this.resetPasswordForm.value.answer
        };
        this.userService.checkAnswer(body).subscribe(function (res) {
            console.log(res);
            _this.IncorrectAnswer = false;
        }, function (err) {
            console.log(err.error);
            _this.IncorrectAnswer = true;
        });
    };
    ResetPasswordComponent.prototype.changePassword = function () {
        var _this = this;
        var body = {
            Username: this.resetPasswordForm.value.userName,
            OldPassword: this.resetPasswordForm.value.matchPassword.oldPassword,
            NewPassword: this.resetPasswordForm.value.matchPassword.password
        };
        this.userService.changePassword(body).subscribe(function (res) {
            console.log(res);
            _this.toastrService.success('You have successfully changed your password!');
            _this.router.navigate(['/user/login']);
        }, function (err) {
            console.log(err.error);
        });
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/user/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user/reset-password/reset-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mid{\n    position: absolute;\n    top: 35%;\n    left: 34%;\n    width: 45rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlke1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM1JTtcbiAgICBsZWZ0OiAzNCU7XG4gICAgd2lkdGg6IDQ1cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-dark mb-3 mid\">\n      <div class=\"card-header\">\n            <ul class=\"nav nav-tabs card-header-tabs\">\n                  <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive='active' routerLink='/user/login' href=\"#\">Sign IN</a>\n                  </li>\n                  <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive='active' routerLink='/user/registration' href=\"#\">Sign Up</a>\n                  </li>\n                  <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLinkActive='active' routerLink='/user/reset-password' href=\"#\">Reset Password</a>\n                  </li>\n            </ul>\n      </div>\n      <div class=\"card-body\">\n            <router-outlet></router-outlet>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserComponent = /** @class */ (function () {
    function UserComponent(route) {
        this.route = route;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\github\FunAngular\FunAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map