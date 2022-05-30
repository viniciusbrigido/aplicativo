"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab6_tab6_module_ts"],{

/***/ 5137:
/*!*************************************************************!*\
  !*** ./src/app/services/calculadora/calculadora.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculadoraService": () => (/* binding */ CalculadoraService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
var CalculadoraService_1;


let CalculadoraService = CalculadoraService_1 = class CalculadoraService {
    constructor() { }
    calcular(num1, num2, operacao) {
        let resultado;
        switch (operacao) {
            case CalculadoraService_1.soma:
                resultado = num1 + num2;
                break;
            case CalculadoraService_1.subtracao:
                resultado = num1 - num2;
                break;
            case CalculadoraService_1.multiplicacao:
                resultado = num1 * num2;
                break;
            case CalculadoraService_1.divisao:
                resultado = num1 / num2;
                break;
            default:
                resultado = 0;
        }
        return resultado;
    }
};
CalculadoraService.soma = '+';
CalculadoraService.subtracao = '-';
CalculadoraService.multiplicacao = '*';
CalculadoraService.divisao = '/';
CalculadoraService.ctorParameters = () => [];
CalculadoraService = CalculadoraService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], CalculadoraService);



/***/ }),

/***/ 1419:
/*!*********************************************!*\
  !*** ./src/app/tab6/tab6-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab6PageRoutingModule": () => (/* binding */ Tab6PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab6_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab6.page */ 9738);




const routes = [
    {
        path: '',
        component: _tab6_page__WEBPACK_IMPORTED_MODULE_0__.Tab6Page
    }
];
let Tab6PageRoutingModule = class Tab6PageRoutingModule {
};
Tab6PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab6PageRoutingModule);



/***/ }),

/***/ 1861:
/*!*************************************!*\
  !*** ./src/app/tab6/tab6.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab6PageModule": () => (/* binding */ Tab6PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab6_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab6-routing.module */ 1419);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab6_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab6.page */ 9738);








let Tab6PageModule = class Tab6PageModule {
};
Tab6PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{ path: '', component: _tab6_page__WEBPACK_IMPORTED_MODULE_1__.Tab6Page }]),
            _tab6_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab6PageRoutingModule
        ],
        declarations: [_tab6_page__WEBPACK_IMPORTED_MODULE_1__.Tab6Page]
    })
], Tab6PageModule);



/***/ }),

/***/ 9738:
/*!***********************************!*\
  !*** ./src/app/tab6/tab6.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab6Page": () => (/* binding */ Tab6Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab6_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab6.page.html?ngResource */ 7062);
/* harmony import */ var _tab6_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab6.page.scss?ngResource */ 985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_calculadora_calculadora_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/calculadora/calculadora.service */ 5137);






let Tab6Page = class Tab6Page {
    constructor(toastController, calculadoraService) {
        this.toastController = toastController;
        this.calculadoraService = calculadoraService;
        this.numero1 = '';
        this.numero2 = '';
        this.operacao = '';
        this.display = '';
    }
    adicionaNumero(numero) {
        if (this.operacao === '') {
            this.numero1 += numero;
        }
        else {
            this.numero2 += numero;
        }
        this.display += numero;
    }
    adicionaOperacao(operacao) {
        if (this.numero1 === '') {
            if (operacao === _services_calculadora_calculadora_service__WEBPACK_IMPORTED_MODULE_2__.CalculadoraService.subtracao) {
                this.numero1 += operacao;
                this.display = this.numero1;
            }
            else {
                this.exibirToast('A equação não pode começar com uma operação.');
            }
            return;
        }
        if (this.operacao === '') {
            this.operacao = operacao;
            this.display += operacao;
            return;
        }
        if (this.numero2 !== '') {
            this.resultado = this.calculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
            this.operacao = operacao;
            this.numero1 = this.resultado.toString();
            this.numero2 = '';
            this.display = this.numero1 + operacao;
        }
    }
    calculaResultado() {
        this.resultado = this.calculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
        this.display = this.resultado.toString();
    }
    exibirToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
Tab6Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _services_calculadora_calculadora_service__WEBPACK_IMPORTED_MODULE_2__.CalculadoraService }
];
Tab6Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab6',
        template: _tab6_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab6_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab6Page);



/***/ }),

/***/ 985:
/*!************************************************!*\
  !*** ./src/app/tab6/tab6.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".btn-padrao {\n  width: 100%;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoidGFiNi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXBhZHJhbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 7062:
/*!************************************************!*\
  !*** ./src/app/tab6/tab6.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Tab 6</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-input disabled=\"true\">{{display}}</ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button (click)=\"adicionaNumero('1')\" class=\"btn-padrao\" color=\"medium\">1</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button (click)=\"adicionaNumero('2')\" class=\"btn-padrao\" color=\"medium\">2</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button (click)=\"adicionaNumero('3')\" class=\"btn-padrao\" color=\"medium\">3</ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button (click)=\"adicionaNumero('4')\" class=\"btn-padrao\" color=\"medium\">4</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button (click)=\"adicionaNumero('5')\" class=\"btn-padrao\" color=\"medium\">5</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button (click)=\"adicionaNumero('6')\" class=\"btn-padrao\" color=\"medium\">6</ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button (click)=\"adicionaNumero('7')\" class=\"btn-padrao\" color=\"medium\">7</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button (click)=\"adicionaNumero('8')\" class=\"btn-padrao\" color=\"medium\">8</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button (click)=\"adicionaNumero('9')\" class=\"btn-padrao\" color=\"medium\">9</ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button (click)=\"adicionaNumero('0')\" class=\"btn-padrao\" color=\"medium\">0</ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button (click)=\"adicionaOperacao('+')\" class=\"btn-padrao\">+</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button (click)=\"adicionaOperacao('-')\" class=\"btn-padrao\">-</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button (click)=\"adicionaOperacao('*')\" class=\"btn-padrao\">*</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button (click)=\"adicionaOperacao('/')\" class=\"btn-padrao\">/</ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button (click)=\"calculaResultado()\" class=\"btn-padrao\">=</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab6_tab6_module_ts.js.map