webpackJsonp([0],{

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/register/register.ts
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



var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.user = {};
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.registrar = function (user) {
        try {
            var result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
            console.log(result);
        }
        catch (e) {
            console.error(e);
        }
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-register',template:/*ion-inline-start:"/Applications/MAMP/htdocs/clases-tolouse/taller-disenio-apps1/ionic/login/src/pages/register/register.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Email:</ion-label>\n    <ion-input type="text" name="email" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Password:</ion-label>\n    <ion-input type="password" name="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n  <button ion-button (click)="registrar(user)">Registrar</button>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/clases-tolouse/taller-disenio-apps1/ionic/login/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], RegisterPage);

//# sourceMappingURL=register.js.map
// CONCATENATED MODULE: ./src/pages/register/register.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var register_module___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var register_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var register_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = register_module___decorate([
    register_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */]({
        declarations: [
            RegisterPage,
        ],
        imports: [
            register_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(RegisterPage),
        ],
        exports: [
            RegisterPage
        ]
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ })

});
//# sourceMappingURL=0.js.map