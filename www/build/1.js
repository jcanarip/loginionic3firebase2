webpackJsonp([1],{

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/principal/principal.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrincipalPage = (function () {
    function PrincipalPage(navCtrl, navParams, afAuth, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toast = toast;
    }
    PrincipalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: "Bienvenido a mi Aplicaci\u00F3n Demo, " + data.email,
                    duration: 3000
                }).present();
            }
            else {
                _this.toast.create({
                    message: "No se puede encontrar la autenticaci\u00F3n",
                    duration: 3000
                }).present();
            }
        });
    };
    return PrincipalPage;
}());
PrincipalPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-principal',template:/*ion-inline-start:"/Applications/MAMP/htdocs/clases-tolouse/taller-disenio-apps1/ionic/login/src/pages/principal/principal.html"*/'<!--\n  Generated template for the PrincipalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>principal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/clases-tolouse/taller-disenio-apps1/ionic/login/src/pages/principal/principal.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _d || Object])
], PrincipalPage);

var _a, _b, _c, _d;
//# sourceMappingURL=principal.js.map
// CONCATENATED MODULE: ./src/pages/principal/principal.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPageModule", function() { return PrincipalPageModule; });
/* harmony import */ var principal_module___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var principal_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var principal_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrincipalPageModule = (function () {
    function PrincipalPageModule() {
    }
    return PrincipalPageModule;
}());
PrincipalPageModule = principal_module___decorate([
    principal_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */]({
        declarations: [
            PrincipalPage,
        ],
        imports: [
            principal_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(PrincipalPage),
        ],
        exports: [
            PrincipalPage
        ]
    })
], PrincipalPageModule);

//# sourceMappingURL=principal.module.js.map

/***/ })

});
//# sourceMappingURL=1.js.map