"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab5_tab5_module_ts"],{

/***/ 6672:
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageRoutingModule": () => (/* binding */ Tab5PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page */ 2584);




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ 5184:
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageModule": () => (/* binding */ Tab5PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5-routing.module */ 6672);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab5.page */ 2584);








let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{ path: '', component: _tab5_page__WEBPACK_IMPORTED_MODULE_1__.Tab5Page }]),
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab5PageRoutingModule
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_1__.Tab5Page]
    })
], Tab5PageModule);



/***/ }),

/***/ 2584:
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5Page": () => (/* binding */ Tab5Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab5_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page.html?ngResource */ 1503);
/* harmony import */ var _tab5_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab5.page.scss?ngResource */ 5271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);





let Tab5Page = class Tab5Page {
    constructor(toastController) {
        this.toastController = toastController;
    }
    somar() {
        if (this.num1 == null || this.num2 == null) {
            this.exibirToast('Preencha os dois números.');
            return;
        }
        this.resultado = this.num1 + this.num2;
    }
    subtrair() {
        if (this.num1 == null || this.num2 == null) {
            this.exibirToast('Preencha os dois números.');
            return;
        }
        this.resultado = this.num1 - this.num2;
    }
    multiplicar() {
        if (this.num1 == null || this.num2 == null) {
            this.exibirToast('Preencha os dois números.');
            return;
        }
        this.resultado = this.num1 * this.num2;
    }
    dividir() {
        if (this.num1 == null || this.num2 == null) {
            this.exibirToast('Preencha os dois números.');
            return;
        }
        if (this.num1 === 0 || this.num2 === 0) {
            this.exibirToast('Divisão por zero não permitida.');
            return;
        }
        this.resultado = this.num1 / this.num2;
    }
    raiz() {
        if (this.num1 == null) {
            this.exibirToast('Preencha o número 1.');
            return;
        }
        this.resultado = Math.sqrt(this.num1);
    }
    fatorial() {
        if (this.num1 == null) {
            this.exibirToast('Preencha o número 1.');
            return;
        }
        this.resultado = this.fatorialResumido(this.num1);
    }
    fatorialResumido(value) {
        if (value === 0) {
            return 1;
        }
        else {
            return value * this.fatorialResumido(value - 1);
        }
    }
    fatorialExtendido(value) {
        let fatorial = 1;
        for (let i = 1; i <= value; i++) {
            fatorial = fatorial * i;
        }
        return fatorial;
    }
    exibirToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                position: 'top',
                icon: 'hand-left-outline'
            });
            toast.present();
        });
    }
};
Tab5Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
Tab5Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab5',
        template: _tab5_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab5_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab5Page);



/***/ }),

/***/ 5271:
/*!************************************************!*\
  !*** ./src/app/tab5/tab5.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWI1LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1503:
/*!************************************************!*\
  !*** ./src/app/tab5/tab5.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Tab 5</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Número 1</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"num1\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Número 2</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"num2\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-button (click)=\"somar()\">Somar</ion-button>\r\n  <ion-button (click)=\"subtrair()\">Subtrair</ion-button>\r\n  <ion-button (click)=\"multiplicar()\">Multiplicar</ion-button>\r\n  <ion-button (click)=\"dividir()\">Dividir</ion-button>\r\n  <ion-button (click)=\"raiz()\">Raiz Quadrada</ion-button>\r\n  <ion-button (click)=\"fatorial()\">Fatorial</ion-button>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Resultado</ion-label>\r\n    <ion-input readonly=\"true\" [(ngModel)]=\"resultado\"></ion-input>\r\n  </ion-item>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab5_tab5_module_ts.js.map