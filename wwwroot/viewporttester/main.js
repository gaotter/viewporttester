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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-viewportinfo></app-viewportinfo>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _viewportinfo_viewportinfo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewportinfo/viewportinfo.component */ "./src/app/viewportinfo/viewportinfo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _viewportinfo_viewportinfo_component__WEBPACK_IMPORTED_MODULE_3__["ViewportinfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/viewportinfo/viewportinfo.component.css":
/*!*********************************************************!*\
  !*** ./src/app/viewportinfo/viewportinfo.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fitt-screen-css {\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: #eee;\r\n}\r\n\r\n.fitt-screen-js {\r\n  margin: 0;\r\n  background-color: #bbb;\r\n}\r\n\r\n.fixed {\r\n  position: fixed;\r\n  height: 100px;\r\n  width: 100px;\r\n  background-color: #880000;\r\n}\r\n\r\n.fixed.top {\r\n  right: 0;\r\n  top: 0;\r\n}\r\n\r\n.fixed.bottom {\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.fixed.sidebar {\r\n  right: 0;\r\n  top: 0;\r\n  height: calc(100vh - 80px);\r\n}\r\n\r\n.bottom {\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n\r\n.info {\r\n  margin: auto;\r\n  width: 300px;\r\n  background-color: aqua;\r\n}\r\n\r\n.absolute {\r\n  position: fixed;\r\n  height: 100px;\r\n  width: 100px;\r\n  background-color: #008800;\r\n}\r\n\r\n.absolute.top {\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n.absolute.bottom {\r\n  left: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.absolute.sidebar {\r\n  left: 0;\r\n  top: 0;\r\n  height: calc(100vh - 80px);\r\n}\r\n\r\n.absolute.sidebar::after {\r\n    content: \"::after\";\r\n    overflow: hidden;\r\n    left: inherit;\r\n    bottom: -80px;\r\n    position: absolute;\r\n    height: 80px;\r\n    background: inherit;\r\n    width: 100%;\r\n  }\r\n\r\n.fixed.sidebar::after {\r\n    content: \"::after\";\r\n    overflow: hidden;\r\n    left: inherit;\r\n    bottom: -80px;\r\n    position: absolute;\r\n    height: 80px;\r\n    background: inherit;\r\n    width: 100%;\r\n  }\r\n\r\n.absolute.midle {\r\n  top: calc(100vh / 3);\r\n  left: calc(100vw / 3);\r\n  height: auto;\r\n  width: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/viewportinfo/viewportinfo.component.html":
/*!**********************************************************!*\
  !*** ./src/app/viewportinfo/viewportinfo.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showjs\" class=\"fitt-screen-js\" [ngStyle]=\"{ 'height.px': innerHeight, 'width.px': innerWidth }\">\n  <div class=\"absolute midle\">\n    <button (click)=\"onFittScreenJsClicked($event)\">\n      See css version\n    </button>\n    <button (click)=\"setSizeVaules($event)\">\n      Re calc size\n    </button>\n  </div>\n  <div class=\"info\">\n    innerWidth: {{innerWidth }} outerWidth: {{outerWidth }} innerHight: {{innerHeight }} outerHeight: {{outerHeight }}\n  </div>\n  <div class=\"fixed top\">\n    fixed popup top\n  </div>\n  <div class=\"absolute top\">\n    absolute popup top\n  </div>\n  <div class=\"fixed bottom\">\n    fixed popup bottom\n    <div class=\"bottom\">bottom text</div>\n  </div>\n  <div class=\"absolute bottom\">\n    absolute popup bottom\n    <div class=\"bottom\">bottom text</div>\n  </div>\n\n</div>\n<div *ngIf=\"!showjs\" class=\"fitt-screen-css\">\n  <div class=\"absolute midle\">\n    <button (click)=\"onFittScreenCssClicked($event)\">\n      See JS version\n    </button>\n    <button (click)=\"toggleFullScreen()\">\n      Fullscreen\n    </button>\n  </div>\n  <div class=\"info\">\n    innerWidth: {{innerWidth }} outerWidth: {{outerWidth }} innerHight: {{innerHeight }} outerHeight: {{outerHeight }}\n  </div>\n  <div class=\"fixed sidebar\">\n    <div>fixed popup side</div>\n    <div class=\"bottom\">bottom text</div>\n  </div>\n  <div class=\"absolute sidebar\">\n    absolute popup side\n    <div class=\"bottom\">bottom text</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/viewportinfo/viewportinfo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/viewportinfo/viewportinfo.component.ts ***!
  \********************************************************/
/*! exports provided: ViewportinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportinfoComponent", function() { return ViewportinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewportinfoComponent = /** @class */ (function () {
    function ViewportinfoComponent() {
        this.showjs = false;
    }
    ViewportinfoComponent.prototype.ngOnInit = function () {
        this.setSizeVaules();
    };
    ViewportinfoComponent.prototype.setSizeVaules = function () {
        this.innerWidth = window.innerWidth;
        this.outerWidth = window.outerWidth;
        this.innerHeight = window.innerHeight;
        this.outerHeight = window.outerHeight;
    };
    ViewportinfoComponent.prototype.onResize = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.setSizeVaules();
        });
    };
    // @HostListener("window:load", ["$event"])
    // onLoad(event: any): void {
    //   if (screenfull.enabled) {
    //     screenfull.request();
    //   }
    // }
    ViewportinfoComponent.prototype.onFittScreenJsClicked = function ($event) {
        this.showjs = false;
    };
    ViewportinfoComponent.prototype.onFittScreenCssClicked = function ($event) {
        this.showjs = true;
    };
    ViewportinfoComponent.prototype.toggleFullScreen = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["request"]();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ViewportinfoComponent.prototype, "onResize", null);
    ViewportinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewportinfo',
            template: __webpack_require__(/*! ./viewportinfo.component.html */ "./src/app/viewportinfo/viewportinfo.component.html"),
            styles: [__webpack_require__(/*! ./viewportinfo.component.css */ "./src/app/viewportinfo/viewportinfo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewportinfoComponent);
    return ViewportinfoComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MGMO\Angular\viewporttester\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map