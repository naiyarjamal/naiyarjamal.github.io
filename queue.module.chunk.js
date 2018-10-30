webpackJsonp(["queue.module"],{

/***/ "../../../../../src/app/queue/components/queue-list/queue-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(queue | async)?.length; else elseBlock\">\n  <h1>\n    Play queue\n  </h1>\n  <app-playable-list [title]=\"'Queue'\" [info]=\"'Queue playing currently'\" [playAllExists]=\"false\" [removeAllExists]=\"true\" [songs]=\"queue | async\" (onPlayItem)=\"playSong($event)\" (onRemoveAll)=\"removeAll()\">\n    <ng-template let-song>\n      <button class=\"add-to-playlist-button\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item (click)=\"removeSongFromQueue(song)\">\n          <mat-icon>clear</mat-icon>\n          <span>Remove from Queue</span>\n        </button>\n      </mat-menu>\n    </ng-template>\n  </app-playable-list>\n</div>\n<ng-template #elseBlock>\n  <div class=\"empty\">\n    <mat-icon class=\"empty-icon\" color=\"primary\">queue_music</mat-icon>\n    <h3 class=\"empty-text\">\n      Your queue is empty. Start browing artists and albums and set play to add the to your current queue.\n    </h3>\n    <a mat-button mat-raised-button [routerLink]=\"'/artists'\" color=\"primary\">Browse artists</a>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/queue/components/queue-list/queue-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Breakpoints*/\n/*\n* @file\n* Media breakpoints for mobile\n*/\n.empty {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  @media (min-width: 768px) {\n    .empty {\n      margin-top: 15vh; } }\n\n.empty-icon {\n  font-size: 100px;\n  height: 100px;\n  width: 100px; }\n\n.empty-text {\n  text-align: center;\n  line-height: 2rem; }\n  @media (min-width: 768px) {\n    .empty-text {\n      max-width: 40%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/queue/components/queue-list/queue-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_player_player_service__ = __webpack_require__("../../../../../src/app/shared/services/player/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueueListComponent = /** @class */ (function () {
    function QueueListComponent(store, player) {
        this.store = store;
        this.player = player;
    }
    QueueListComponent.prototype.ngOnInit = function () {
        this.queue = this.store.select('player', 'songs');
    };
    QueueListComponent.prototype.playSong = function (index) {
        this.player.playQueueSong(index);
    };
    QueueListComponent.prototype.removeSongFromQueue = function (song) {
        this.player.removeQueueSong(song);
    };
    QueueListComponent.prototype.removeAll = function () {
        this.player.removeAllQueueSongs();
    };
    QueueListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-queue-list',
            template: __webpack_require__("../../../../../src/app/queue/components/queue-list/queue-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/queue/components/queue-list/queue-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_0__shared_services_player_player_service__["a" /* PlayerService */]])
    ], QueueListComponent);
    return QueueListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/queue/queue.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueModule", function() { return QueueModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_queue_list_queue_list_component__ = __webpack_require__("../../../../../src/app/queue/components/queue-list/queue-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_queue_list_queue_list_component__["a" /* QueueListComponent */], pathMatch: 'full' },
];
var QueueModule = /** @class */ (function () {
    function QueueModule() {
    }
    QueueModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__components_queue_list_queue_list_component__["a" /* QueueListComponent */]]
        })
    ], QueueModule);
    return QueueModule;
}());



/***/ })

});
//# sourceMappingURL=queue.module.chunk.js.map