"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_map_map_module_ts"],{

/***/ 1216:
/*!*******************************************!*\
  !*** ./src/app/map/map-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageRoutingModule": () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 9510);




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapPageRoutingModule);



/***/ }),

/***/ 2622:
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageModule": () => (/* binding */ MapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-routing.module */ 1216);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page */ 9510);







let MapPageModule = class MapPageModule {
};
MapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_1__.MapPage]
    })
], MapPageModule);



/***/ }),

/***/ 9510:
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPage": () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page.html?ngResource */ 7122);
/* harmony import */ var _map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page.scss?ngResource */ 5621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-maps */ 4644);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);




// eslint-disable-next-line max-len


let MapPage = class MapPage {
    constructor(platform, loadingController) {
        this.platform = platform;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.mapElement = this.mapElement.nativeElement;
        this.mapElement.style.width = this.platform.width() + 'px';
        this.mapElement.style.height = this.platform.height() + 'px';
        this.loadMap();
    }
    loadMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({ message: 'Por Favor, aguarde...' });
            yield this.loading.present();
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__.Environment.setEnv({
                'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBm0U3FbqXvrrJn8Uq0-xJf3ANghN8rf_A',
                'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBm0U3FbqXvrrJn8Uq0-xJf3ANghN8rf_A'
            });
            const mapOptions = {
                constrols: {
                    zoom: false,
                }
            };
            this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__.GoogleMaps.create(this.mapElement, mapOptions);
            try {
                yield this.map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__.GoogleMapsEvent.MAP_READY);
                this.addOriginMarker();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    addOriginMarker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const myLocation = yield this.map.getMyLocation();
                yield this.map.moveCamera({
                    target: myLocation.latLng,
                    zoom: 18
                });
                this.map.addMarkerSync({
                    title: 'Origem',
                    icon: '#000',
                    animation: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__.GoogleMapsAnimation.DROP,
                    position: myLocation.latLng
                });
            }
            catch (error) {
                console.error(error);
            }
            finally {
                this.loading.dismiss();
            }
        });
    }
};
MapPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
MapPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['map', { static: true },] }]
};
MapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-map',
        template: _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapPage);



/***/ }),

/***/ 5621:
/*!**********************************************!*\
  !*** ./src/app/map/map.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "ion-searchbar {\n  --background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6Im1hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 7122:
/*!**********************************************!*\
  !*** ./src/app/map/map.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div #map>\n    <ion-searchbar placeholder=\"Para onde?\"></ion-searchbar>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_map_map_module_ts.js.map