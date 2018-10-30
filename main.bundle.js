webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./artists/artists.module": [
		"../../../../../src/app/artists/artists.module.ts",
		"artists.module"
	],
	"./playlist/playlist.module": [
		"../../../../../src/app/playlist/playlist.module.ts",
		"playlist.module"
	],
	"./queue/queue.module": [
		"../../../../../src/app/queue/queue.module.ts",
		"queue.module"
	],
	"./ui-elements/ui-elements.module": [
		"../../../../../src/app/ui-elements/ui-elements.module.ts",
		"ui-elements.module"
	],
	"./user/user.module": [
		"../../../../../src/app/user/user.module.ts",
		"user.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [ngClass]=\"{'zondimo-dark-theme': darkTheme}\">\n  <app-header *ngIf=\"!singlePage\" [user]=\"user | async\" [title]=\"title\" (onToggleSidenav)=\"toggleSidenav()\" (onLogout)=\"logout()\"\n    (oncreatePlaylist)=\"createPlaylist()\" (onToggleTheme)=\"toggleTheme()\"></app-header>\n  <mat-sidenav-container class=\"main-app\" [ngClass]=\"{'player-collapsed': playerCollapsed}\">\n    <mat-sidenav #sidenav [mode]=\"navMode\" class=\"sidenav\">\n      <app-sidebar></app-sidebar>\n    </mat-sidenav>\n    <div class=\"main-content\">\n      <router-outlet></router-outlet>\n    </div>\n    <app-player-controller *ngIf=\"!singlePage\" (onTogglePlayer)=\"playerCollapseToggle($event)\"></app-player-controller>\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Breakpoints*/\n/*\n* @file\n* Media breakpoints for mobile\n*/\n:host {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.wrapper {\n  height: 100%; }\n\n.main-app {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-bottom: 80px;\n  height: 100%; }\n  .main-app.player-collapsed {\n    padding-bottom: 55px; }\n    @media (min-width: 768px) {\n      .main-app.player-collapsed {\n        padding-bottom: 80px; } }\n\n.sidenav {\n  box-shadow: 10px 0 40px -4px rgba(0, 0, 0, 0.3); }\n\n.sidenav.mat-sidenav.mat-sidenav-side {\n  z-index: 2;\n  height: calc(100% - 80px); }\n\n.main-content {\n  padding: 1rem;\n  padding-bottom: 4rem; }\n  @media (min-width: 768px) {\n    .main-content {\n      padding: 2rem;\n      padding-bottom: 100px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_playlist_playlist_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_playlist_create_playlist_create_component__ = __webpack_require__("../../../../../src/app/components/playlist-create/playlist-create.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppComponent = /** @class */ (function () {
    function AppComponent(auth, store, dialog, playListService, overlayContainer, router) {
        this.auth = auth;
        this.store = store;
        this.dialog = dialog;
        this.playListService = playListService;
        this.overlayContainer = overlayContainer;
        this.router = router;
        this.title = 'Zondimo';
        this.navMode = 'side';
        this.playerCollapsed = true;
        this.darkTheme = false;
        this.singlePage = false;
        this.singlePages = [
            '/user/login'
        ];
    }
    AppComponent.prototype.isMobile = function () {
        return __WEBPACK_IMPORTED_MODULE_3__angular_common__["isPlatformBrowser"] && (window.innerWidth < 768);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSidenavForWindow();
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* NavigationEnd */]) {
                if (!_this.isMobile()) {
                    _this.singlePages.includes(event.url) ? _this.singlePage = true : _this.singlePage = false;
                    _this.singlePage ? _this.sidenav.close() : _this.sidenav.open();
                }
            }
        });
        this.user = this.store.select('user');
        if (this.darkTheme) {
            this.overlayContainer.getContainerElement().classList.add('zondimo-dark-theme');
        }
    };
    AppComponent.prototype.createPlaylist = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__components_playlist_create_playlist_create_component__["a" /* PlaylistCreateComponent */], {
            width: '350px',
            data: {
                name: 'My playlist name',
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.playListService.createPlaylist(result.name, result.file);
            }
        });
    };
    /**
     * Update the sidenav property for the current window.
     */
    AppComponent.prototype.updateSidenavForWindow = function () {
        if (this.isMobile()) {
            this.navMode = 'over';
            this.sidenav.close();
        }
        else {
            this.sidenav.open();
            this.playerCollapsed = false;
        }
    };
    /**
     * Listen to window resize.
     */
    AppComponent.prototype.onResize = function (event) {
        if (this.isMobile()) {
            this.navMode = 'over';
        }
        else {
            this.navMode = 'side';
            this.playerCollapsed = false;
        }
    };
    AppComponent.prototype.logout = function () {
        this.auth.signOut();
    };
    AppComponent.prototype.toggleSidenav = function () {
        this.sidenav.toggle();
    };
    /**
     * Player collapsed event callback
     *
     * @param collapsed
     *  Info on if the player is collapsed.
     */
    AppComponent.prototype.playerCollapseToggle = function (collapsed) {
        this.playerCollapsed = collapsed;
    };
    /**
     * Toggle the theme from dark to light.
     */
    AppComponent.prototype.toggleTheme = function () {
        this.darkTheme = this.darkTheme ? false : true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatSidenav */])
    ], AppComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_playlist_playlist_service__["a" /* PlaylistService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_cdk_overlay__["d" /* OverlayContainer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_effects_static_user_effects__ = __webpack_require__("../../../../../src/app/store/effects/static/user.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_effects_static_playlist_effects__ = __webpack_require__("../../../../../src/app/store/effects/static/playlist.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_effects_firebase_playlist_effects__ = __webpack_require__("../../../../../src/app/store/effects/firebase/playlist.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_effects_firebase_artists_effects__ = __webpack_require__("../../../../../src/app/store/effects/firebase/artists.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__store_index__ = __webpack_require__("../../../../../src/app/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__store_effects_firebase_user_effects__ = __webpack_require__("../../../../../src/app/store/effects/firebase/user.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_playlist_create_playlist_create_component__ = __webpack_require__("../../../../../src/app/components/playlist-create/playlist-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_playlist_add_song_playlist_add_song_component__ = __webpack_require__("../../../../../src/app/components/playlist-add-song/playlist-add-song.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__store_effects_static_artists_effects__ = __webpack_require__("../../../../../src/app/store/effects/static/artists.effects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_playlist_create_playlist_create_component__["a" /* PlaylistCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_playlist_add_song_playlist_add_song_component__["a" /* PlaylistAddSongComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_23__components_playlist_create_playlist_create_component__["a" /* PlaylistCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_playlist_add_song_playlist_add_song_component__["a" /* PlaylistAddSongComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_17__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["f" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_22__app_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__["c" /* EffectsModule */].forRoot([
                    __WEBPACK_IMPORTED_MODULE_16__environments_environment__["c" /* staticData */] ? __WEBPACK_IMPORTED_MODULE_0__store_effects_static_user_effects__["a" /* AuthStaticEffects */] : __WEBPACK_IMPORTED_MODULE_19__store_effects_firebase_user_effects__["a" /* AuthEffects */],
                    __WEBPACK_IMPORTED_MODULE_16__environments_environment__["c" /* staticData */] ? __WEBPACK_IMPORTED_MODULE_25__store_effects_static_artists_effects__["a" /* ArtistsStaticEffects */] : __WEBPACK_IMPORTED_MODULE_3__store_effects_firebase_artists_effects__["a" /* ArtistsEffects */],
                    __WEBPACK_IMPORTED_MODULE_16__environments_environment__["c" /* staticData */] ? __WEBPACK_IMPORTED_MODULE_1__store_effects_static_playlist_effects__["a" /* PlaylistStaticEffects */] : __WEBPACK_IMPORTED_MODULE_2__store_effects_firebase_playlist_effects__["a" /* PlaylistEffects */],
                ]),
                __WEBPACK_IMPORTED_MODULE_9__ngrx_router_store__["b" /* StoreRouterConnectingModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["c" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__store_index__["b" /* reducers */], __WEBPACK_IMPORTED_MODULE_18__store_index__["a" /* initialState */]),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_16__environments_environment__["b" /* firebase */]),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__store_effects_firebase_user_effects__["a" /* AuthEffects */],
                __WEBPACK_IMPORTED_MODULE_3__store_effects_firebase_artists_effects__["a" /* ArtistsEffects */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
var routes = [
    { path: '', redirectTo: 'artists', pathMatch: 'full' },
    { path: 'artists', loadChildren: './artists/artists.module#ArtistsModule' },
    { path: 'playlists', loadChildren: './playlist/playlist.module#PlaylistModule' },
    { path: 'queue', loadChildren: './queue/queue.module#QueueModule' },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: 'ui', loadChildren: './ui-elements/ui-elements.module#UiElementsModule' },
];


/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"header-bar\">\n  <button class=\"toggleSidenav\" (click)=\"toggleSidenav()\"><mat-icon color=\"primary\">menu</mat-icon></button>\n  <a class=\"main-logo\" [routerLink]=\"'/'\"><mat-icon color=\"primary\">adjust</mat-icon><span class=\"app-title\"> {{title}}</span></a>\n  <span class=\"spacer\"></span>\n  <mat-slide-toggle class=\"toggleTheme\" color=\"primary\" (change)=\"toggleTheme()\"></mat-slide-toggle>\n  <button class=\"create-playlist\" *ngIf=\"user.authenticated\" mat-button color=\"primary\" (click)=\"createPlaylist()\"><mat-icon class=\"primary\">playlist_add</mat-icon> Add playlist</button>\n  <button mat-button color=\"primary\" *ngIf=\"!user.authenticated\" [routerLink]=\"'./user/login'\">\n    <mat-icon class=\"action_icon\">person</mat-icon>Login\n  </button>\n  <a *ngIf=\"user.authenticated\" class=\"user_image\">\n    <img [src]=\"user.user_image\" [alt]=\"user.username\" />\n  </a>\n  <button class=\"action-button\" (click)=\"logout()\" *ngIf=\"user.authenticated\"><mat-icon class=\"action_icon\" color=\"accent\">exit_to_app</mat-icon></button>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Breakpoints*/\n/*\n* @file\n* Media breakpoints for mobile\n*/\n.header-bar {\n  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.1);\n  z-index: 2;\n  position: relative; }\n\n.app-title {\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  margin-left: 10px; }\n\n.spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.main-logo {\n  text-decoration: none;\n  color: currentColor;\n  display: none; }\n  @media (min-width: 768px) {\n    .main-logo {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; } }\n\n.create-playlist {\n  display: none; }\n  @media (min-width: 768px) {\n    .create-playlist {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; } }\n\n@media (min-width: 768px) {\n  .toggleSidenav {\n    display: none; } }\n\n.action_icon {\n  vertical-align: middle;\n  margin-right: 10px; }\n\n.user_image {\n  margin-right: 15px; }\n  .user_image img {\n    max-width: 35px;\n    border-radius: 100%; }\n\n.action-button {\n  margin-top: 5px; }\n\n.toggleTheme {\n  margin-top: 5px;\n  margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.onLogout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.oncreatePlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onToggleSidenav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onToggleTheme = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.onLogout.emit();
    };
    HeaderComponent.prototype.createPlaylist = function () {
        this.oncreatePlaylist.emit();
    };
    HeaderComponent.prototype.toggleSidenav = function () {
        this.onToggleSidenav.emit();
    };
    HeaderComponent.prototype.toggleTheme = function () {
        this.onToggleTheme.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "onLogout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "oncreatePlaylist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "onToggleSidenav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "onToggleTheme", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/play-card/play-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n  <div class=\"card-image\">\n    <img *ngIf=\"image\" mat-card-image [src]=\"image\" [alt]=\"name\">\n  </div>\n  <mat-card-content class=\"card-content\">\n    <h4 class=\"title\"><mat-icon color=\"primary\">view_list</mat-icon>{{name}}</h4>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/play-card/play-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  padding: 0;\n  margin: 0; }\n\n.card-image {\n  position: relative; }\n  .card-image:before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(to top, transparent 0, transparent 0%, rgba(0, 0, 0, 0.4) 20%);\n    z-index: 1; }\n  .card-image img {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0;\n    max-width: 100%; }\n\n.card-content {\n  padding: 20px; }\n\n.title {\n  font-size: 0.8rem;\n  text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/play-card/play-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayCardComponent = /** @class */ (function () {
    function PlayCardComponent() {
    }
    PlayCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PlayCardComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PlayCardComponent.prototype, "image", void 0);
    PlayCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-play-card',
            template: __webpack_require__("../../../../../src/app/components/play-card/play-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/play-card/play-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayCardComponent);
    return PlayCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/player-controller/player-controller/player-controller.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"controller-wrapper\">\n    <div class=\"player-controller\" [ngClass]=\"{'collapsed': collapsed}\">\n        <button class=\"expand-button\" (click)=\"toggleExpandPlayer()\">\n            <mat-icon>keyboard_arrow_down</mat-icon>\n        </button>\n        <div class=\"player-current-song-info\" *ngIf=\"player | async; let player\">\n            <div *ngIf=\"player.currentSong\">\n                <div class=\"song-image\">\n                    <img [src]=\"player.currentSong.image\" [alt]=\"player.currentSong.name\" [title]=\"player.currentSong.name\" />\n                </div>\n                <div class=\"song-name\">{{player.currentSong.name}}</div>\n            </div>\n        </div>\n        <div class=\"player-controls\">\n            <button (click)=\"playerPrev()\">\n                <mat-icon color=\"accent\" class=\"mat-24\" aria-label=\"Previous\">fast_rewind</mat-icon>\n            </button>\n            <button *ngIf=\"playing\" class=\"player-button\" (click)=\"playerPause()\" mat-mini-fab color=\"primary\">\n                <mat-icon class=\"mat-24\" aria-label=\"Pause\">pause</mat-icon>\n            </button>\n            <button *ngIf=\"!playing\" class=\"player-button\" (click)=\"playerResume()\" mat-mini-fab color=\"primary\">\n                <mat-icon class=\"mat-24\" aria-label=\"Resume / Play\">play_arrow</mat-icon>\n            </button>\n            <button (click)=\"playerNext()\">\n                <mat-icon color=\"accent\" class=\"mat-24\" aria-label=\"Next\">fast_forward</mat-icon>\n            </button>\n        </div>\n        <div class=\"player-secondary-controls\">\n            <div class=\"show-queue\">\n                <a [routerLink]=\"'/queue'\">\n                    <mat-icon color=\"accent\" class=\"mat-24\" aria-label=\"Queue list\">playlist_play</mat-icon>\n                </a>\n            </div>\n            <div class=\"player-volume\">\n                <mat-icon color=\"accent\" class=\"mat-24\" aria-label=\"Volume\">volume_up</mat-icon>\n                <mat-slider color=\"primary\" min=\"0\" max=\"1\" step=\"0.1\" [value]=\"volume\" (change)=\"updateVolume($event)\"></mat-slider>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/player-controller/player-controller/player-controller.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Breakpoints*/\n/*\n* @file\n* Media breakpoints for mobile\n*/\n:host {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  bottom: 0px;\n  width: 100%; }\n  :host .controller-wrapper {\n    height: auto;\n    padding: 10px 0 0 0; }\n    @media (min-width: 768px) {\n      :host .controller-wrapper {\n        height: 80px;\n        padding: 10px 0px 0px 75px; } }\n\n.player-controller {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  box-shadow: 0 4px 20px 10px rgba(0, 0, 0, 0.1);\n  height: auto; }\n  @media (min-width: 768px) {\n    .player-controller {\n      height: 80px;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      padding-left: 20px;\n      padding-right: 20px; } }\n  .player-controller.collapsed .player-controls,\n  .player-controller.collapsed .player-secondary-controls {\n    height: 0px;\n    margin: 0;\n    overflow: hidden; }\n  .player-controller.collapsed .expand-button {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    margin: 0; }\n  .player-controller.collapsed .player-current-song-info .song-image {\n    height: 0px;\n    margin: 0;\n    overflow: hidden; }\n\n.player-button {\n  margin-left: 20px;\n  margin-right: 20px; }\n\n.player-current-song-info {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-size: 0.9rem;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  @media (min-width: 768px) {\n    .player-current-song-info {\n      margin: 0; } }\n  .player-current-song-info div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    @media (min-width: 768px) {\n      .player-current-song-info div {\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row; } }\n    .player-current-song-info div .song-image {\n      text-align: center;\n      margin-bottom: 10px; }\n      @media (min-width: 768px) {\n        .player-current-song-info div .song-image {\n          margin-right: 20px;\n          margin-bottom: 0;\n          margin-top: 0px; } }\n    .player-current-song-info div img {\n      max-width: 60px;\n      border-radius: 2px; }\n\n.player-controls {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n  @media (min-width: 768px) {\n    .player-controls {\n      margin-top: 0px;\n      margin-bottom: 0px; } }\n\n.player-secondary-controls {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  height: 20px; }\n  @media (min-width: 768px) {\n    .player-secondary-controls {\n      margin-top: 0px;\n      margin-bottom: 0px;\n      height: auto; } }\n\n.show-queue {\n  margin-right: 20px;\n  display: none; }\n  @media (min-width: 768px) {\n    .show-queue {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; } }\n\n.player-volume {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.expand-button {\n  margin-top: 10px;\n  margin-bottom: 20px; }\n  @media (min-width: 768px) {\n    .expand-button {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/player-controller/player-controller/player-controller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerControllerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_player_player_service__ = __webpack_require__("../../../../../src/app/shared/services/player/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerControllerComponent = /** @class */ (function () {
    function PlayerControllerComponent(store, playerService) {
        this.store = store;
        this.playerService = playerService;
        this.playing = true;
        this.volume = 0.5;
        this.collapsed = true;
        this.onTogglePlayer = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
    }
    PlayerControllerComponent.prototype.ngOnInit = function () {
        this.player = this.store.select('player');
        this.updateSidenavForWindow();
    };
    /**
     * Update the sidenav property for the current window.
     */
    PlayerControllerComponent.prototype.updateSidenavForWindow = function () {
        if (__WEBPACK_IMPORTED_MODULE_0__angular_common__["isPlatformBrowser"]) {
            if (window.innerWidth < 768) {
            }
            else {
                this.collapsed = false;
            }
        }
    };
    /**
     * Pause the player.
     */
    PlayerControllerComponent.prototype.playerPause = function () {
        this.playerService.pause();
        this.playing = false;
    };
    /**
     * Resume playing.
     */
    PlayerControllerComponent.prototype.playerResume = function () {
        this.playerService.resume();
        this.playing = true;
    };
    /**
     * Move to previous song (if exists).
     */
    PlayerControllerComponent.prototype.playerPrev = function () {
        this.playerService.prev();
    };
    /**
     * Move to next song (if exists).
     */
    PlayerControllerComponent.prototype.playerNext = function () {
        this.playerService.next();
    };
    /**
     * Change volume.
     */
    PlayerControllerComponent.prototype.updateVolume = function (sliderChange) {
        this.volume = sliderChange.value;
        this.playerService.updateVolume(this.volume);
    };
    /**
     * Expand player controls on mobile.
     */
    PlayerControllerComponent.prototype.toggleExpandPlayer = function () {
        this.collapsed = this.collapsed ? false : true;
        this.onTogglePlayer.emit(this.collapsed);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PlayerControllerComponent.prototype, "onTogglePlayer", void 0);
    PlayerControllerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-player-controller',
            template: __webpack_require__("../../../../../src/app/components/player-controller/player-controller/player-controller.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/player-controller/player-controller/player-controller.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_3__shared_services_player_player_service__["a" /* PlayerService */]])
    ], PlayerControllerComponent);
    return PlayerControllerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/playlist-add-song/playlist-add-song.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title\">\n  Select playlist\n</h2>\n<form [formGroup]=\"addSongToPlaylistForm\" (ngSubmit)=\"onSubmit(addSongToPlaylistForm.value)\">\n  <mat-radio-group class=\"playlists-group\" formControlName=\"selectedItem\">\n    <mat-radio-button class=\"playlist-item\" *ngFor=\"let playlist of playlists | async; let i=index\" [value]=\"playlist.id\">\n      {{playlist.name}}\n    </mat-radio-button>\n  </mat-radio-group>\n  <button class=\"form-submit\" mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/playlist-add-song/playlist-add-song.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  margin-top: 0; }\n\n.playlists-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .playlists-group .playlist-item {\n    margin-top: 5px;\n    margin-bottom: 5px; }\n\n.form-submit {\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playlist-add-song/playlist-add-song.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistAddSongComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_playlist_playlist_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var PlaylistAddSongComponent = /** @class */ (function () {
    function PlaylistAddSongComponent(store, playlistService, dialogRef, fb, data) {
        this.store = store;
        this.playlistService = playlistService;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.data = data;
        this.addSongToPlaylistForm = this.fb.group({
            selectedItem: [],
        });
        this.playlists = this.store.select('userPlaylists');
    }
    Object.defineProperty(PlaylistAddSongComponent.prototype, "selectedItem", {
        get: function () {
            return this.addSongToPlaylistForm.get('selectedItem');
        },
        enumerable: true,
        configurable: true
    });
    PlaylistAddSongComponent.prototype.ngOnInit = function () { };
    PlaylistAddSongComponent.prototype.changeItem = function (ev) {
        this.selectedPlaylistId = ev.value;
    };
    /**
     * Add the song to the current selected playlist.
     *
     * @param playlistId
     *  The playlist id to add to.
     */
    PlaylistAddSongComponent.prototype.addSongToPlaylist = function (playlistId) {
        this.dialogRef.close();
        this.playlistService.addSongToPlaylist(this.data.song, playlistId);
    };
    /**
     * Callback for submit of form
     */
    PlaylistAddSongComponent.prototype.onSubmit = function (value) {
        this.addSongToPlaylist(value.selectedItem);
    };
    PlaylistAddSongComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-playlist-add-song',
            template: __webpack_require__("../../../../../src/app/components/playlist-add-song/playlist-add-song.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/playlist-add-song/playlist-add-song.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_0__shared_services_playlist_playlist_service__["a" /* PlaylistService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */], Object])
    ], PlaylistAddSongComponent);
    return PlaylistAddSongComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/playlist-create/playlist-create.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Playlist: {{data.name}}</h1>\n<div mat-dialog-content>\n  <input type=\"text\" matInput tabindex=\"1\" [(ngModel)]=\"data.name\">\n  <mat-list>\n    <mat-list-item>\n      <label mat-mini-fab mat-list-avatar>\n        <a aria-role=\"button\" class=\"upload-image\" mat-button mat-raised-button color=\"accent\" tabindex=\"2\" (click)=\"submitDialog()\">\n          Upload image\n        </a>\n        <input #file type=\"file\" (change)=\"onFileChange($event)\" [style.display]=\"'none'\">\n      </label>\n      <h4 mat-line class=\"file-text\">\n        <span>{{file.value}}</span>\n      </h4>\n    </mat-list-item>\n  </mat-list>\n</div>\n<br/>\n<div mat-dialog-actions>\n  <button mat-button color=\"primary\" tabindex=\"2\" (click)=\"submitDialog()\">\n    <mat-icon>done_all</mat-icon> Ok\n  </button>\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">No Thanks</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/playlist-create/playlist-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .mat-list .mat-list-item .mat-list-item-content {\n  padding: 0;\n  height: 70px !important;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: left;\n      -ms-flex-align: left;\n          align-items: left;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  :host /deep/ .mat-list .mat-list-item .mat-list-item-content .mat-list-text {\n    padding-left: 0; }\n  :host /deep/ .mat-list .mat-list-item .mat-list-item-content .file-text {\n    font-size: 0.9rem;\n    margin-top: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playlist-create/playlist-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PlaylistCreateComponent = /** @class */ (function () {
    function PlaylistCreateComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PlaylistCreateComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    /**
     * Programatically submit and close the dialog.
     */
    PlaylistCreateComponent.prototype.submitDialog = function () {
        this.uploadImage();
        this.dialogRef.close(this.data);
    };
    PlaylistCreateComponent.prototype.uploadImage = function () {
        // Move to side effects
        Object.assign(this.data, { file: this.Uploadfiles[0] });
    };
    /**
     * Save the files uploaded to the upload widget.
     */
    PlaylistCreateComponent.prototype.onFileChange = function (ev) {
        this.Uploadfiles = ev.target.files;
    };
    PlaylistCreateComponent.prototype.ngOnInit = function () {
    };
    PlaylistCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-playlist-create',
            template: __webpack_require__("../../../../../src/app/components/playlist-create/playlist-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/playlist-create/playlist-create.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */], Object])
    ], PlaylistCreateComponent);
    return PlaylistCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"side-menu\">\n  <a [routerLink]=\"'/artists'\" routerLinkActive=\"active\">\n    <mat-icon color=\"accent\">album</mat-icon><span class=\"invisible\">Artists</span>\n  </a>\n  <a [routerLink]=\"'/queue'\" routerLinkActive=\"active\">\n    <mat-icon color=\"accent\">queue_music</mat-icon><span class=\"invisible\">Queue</span>\n  </a>\n  <a [routerLink]=\"'/playlists/explore'\" routerLinkActive=\"active\">\n    <mat-icon color=\"accent\">search</mat-icon><span class=\"invisible\">Explore</span>\n  </a>\n  <a [routerLink]=\"'/playlists/me'\" routerLinkActive=\"active\">\n    <mat-icon color=\"accent\">headset</mat-icon><span class=\"invisible\">My playlists</span>\n  </a>\n  <a [routerLink]=\"'/ui'\" routerLinkActive=\"active\">\n    <mat-icon color=\"accent\">view_quilt</mat-icon><span class=\"invisible\">UI Elements</span>\n  </a>\n  <a routerLinkActive=\"active\">\n    <mat-icon color=\"accent\">settings</mat-icon>\n  </a>\n  <a routerLinkActive=\"active\">\n    <mat-icon color=\"accent\">done_all</mat-icon>\n  </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-menu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n  padding-top: 2rem;\n  padding-bottom: 2rem; }\n  .side-menu mat-icon {\n    padding: 15px 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n  <div class=\"card-image\">\n    <a [routerLink]=\"link\">\n      <img *ngIf=\"image\" mat-card-image [src]=\"image\" [alt]=\"imageAlt\">\n    </a>\n  </div>\n  <mat-card-content>\n    <mat-card-title class=\"card-title\">\n      <ng-content select=\".title\"></ng-content>\n    </mat-card-title>\n    <mat-card-subtitle>\n      <ng-content select=\".subtitle\"></ng-content>\n    </mat-card-subtitle>\n  </mat-card-content>\n  <mat-card-actions class=\"actions\">\n    <a [color]=\"'primary'\" mat-button mat-raised-button [routerLink]=\"link\">{{linkText}}</a>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Breakpoints*/\n/*\n* @file\n* Media breakpoints for mobile\n*/\n.card .actions {\n  padding-left: 15px;\n  padding-bottom: 15px; }\n\n@media (min-width: 768px) {\n  .mat-card .card-image {\n    max-height: 200px;\n    overflow: hidden;\n    margin-top: -24px;\n    margin-right: -24px;\n    margin-left: -24px;\n    margin-bottom: 1rem; } }\n\n.card-title {\n  font-size: 1.1rem;\n  font-weight: 600; }\n  @media (min-width: 768px) {\n    .card-title {\n      min-height: 3rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "imageAlt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "link", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "linkText", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card',
            template: __webpack_require__("../../../../../src/app/shared/components/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/icon-box/icon-box.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"icon-box\">\n  <mat-card-content>\n    <mat-icon [color]=\"color\">{{icon}}</mat-icon>\n    <h3>\n      {{number}}\n    </h3>\n    <h4>\n      {{title}}\n    </h4>\n  </mat-card-content>\n  <ng-content select=\".sub-content\"></ng-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/icon-box/icon-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon-box {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/icon-box/icon-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IconBoxComponent = /** @class */ (function () {
    function IconBoxComponent() {
    }
    IconBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IconBoxComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IconBoxComponent.prototype, "number", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IconBoxComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IconBoxComponent.prototype, "color", void 0);
    IconBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-icon-box',
            template: __webpack_require__("../../../../../src/app/shared/components/icon-box/icon-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/icon-box/icon-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IconBoxComponent);
    return IconBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/icons-buttons/icons-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-icons\" [ngClass]=\"{ 'large': large }\">\n  <div class=\"grid-icon\" *ngFor=\"let icon of icons; let i = index;\">\n    <mat-icon [color]=\"icon.color\">{{ icon.name }}</mat-icon>\n    <p *ngIf=\"icon.text\">\n      {{ icon.text }}\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/icons-buttons/icons-buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-icons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n  .grid-icons.large .grid-icon {\n    height: 100px; }\n    .grid-icons.large .grid-icon mat-icon {\n      font-size: 40px;\n      height: 40px;\n      width: 40px; }\n  .grid-icons .grid-icon {\n    width: 25%;\n    height: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-align: center;\n    border-right: 1px solid rgba(0, 0, 0, 0.1); }\n    .grid-icons .grid-icon:last-child {\n      border: none; }\n    .grid-icons .grid-icon mat-icon {\n      margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/icons-buttons/icons-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconsButtonsComponent = /** @class */ (function () {
    function IconsButtonsComponent() {
    }
    IconsButtonsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], IconsButtonsComponent.prototype, "icons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], IconsButtonsComponent.prototype, "large", void 0);
    IconsButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-icons-buttons',
            template: __webpack_require__("../../../../../src/app/shared/components/icons-buttons/icons-buttons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/icons-buttons/icons-buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IconsButtonsComponent);
    return IconsButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/playable-list/playable-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"playable-list-card\">\n  <div class=\"header\">\n    <div class=\"header-image\" *ngIf=\"image\">\n      <img [src]=\"image\" [title]=\"title\" [alt]=\"title\" />\n    </div>\n    <div class=\"header-info\">\n      <h3 class=\"title\">\n        {{title}}\n      </h3>\n      <div class=\"header-info__info\">\n        {{info}}\n      </div>\n      <div class=\"playble-list-actions\">\n        <ng-content select=\".play-actions\"></ng-content>\n      </div>\n    </div>\n    <button *ngIf=\"playAllExists\" class=\"play-all-button\" (click)=\"playAll()\" mat-mini-fab color=\"primary\">\n      <mat-icon class=\"mat-24\" aria-label=\"Play all\">play_arrow</mat-icon>\n    </button>\n    <button *ngIf=\"removeAllExists\" class=\"play-all-button\" (click)=\"removeAll()\" mat-mini-fab color=\"primary\">\n      <mat-icon class=\"mat-24\" aria-label=\"Play all\">clear</mat-icon>\n    </button>\n  </div>\n  <div class=\"song-list\">\n    <div *ngFor=\"let song of songs\" class=\"song-item\">\n      <button class=\"play-song\" (click)=\"playItem(song)\">\n        <mat-icon class=\"mat-24\" aria-label=\"Play entire album\">play_circle_outline</mat-icon>\n      </button>\n      {{song.name}}\n      <div class=\"spacer\"></div>\n      <ng-template *ngTemplateOutlet=\"itemTemplate; context: { $implicit: song }\">\n      </ng-template>\n    </div>\n  </div>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/shared/components/playable-list/playable-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Breakpoints*/\n/*\n* @file\n* Media breakpoints for mobile\n*/\n.playable-list-card {\n  margin-top: 25px;\n  padding: 0; }\n\n.header {\n  position: relative;\n  padding: 20px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n  @media (min-width: 768px) {\n    .header {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; } }\n  @media (min-width: 768px) {\n    .header .header-image {\n      margin-right: 20px; } }\n  .header .header-image img {\n    border-radius: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    width: 80px;\n    height: 80px; }\n\n.header-info .title {\n  margin-top: 0;\n  margin-bottom: 10px; }\n\n.header-info__info {\n  color: #a8a8a8;\n  font-size: 0.8rem; }\n\n.play-all-button {\n  position: absolute;\n  right: 20px;\n  top: 20px; }\n\n.playble-list-actions {\n  margin-top: 10px; }\n  .playble-list-actions /deep/ .mat-icon {\n    height: 20px;\n    width: 20px;\n    margin-right: 10px;\n    font-size: 1.2rem;\n    color: #a8a8a8; }\n\n.song-list .song-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 1rem;\n  font-weight: normal;\n  font-size: 0.9rem; }\n  .song-list .song-item:hover {\n    background: rgba(255, 255, 255, 0.2); }\n  .song-list .song-item .play-song .mat-icon {\n    font-size: 30px;\n    margin-right: 20px;\n    width: 30px;\n    height: 30px; }\n  .song-list .song-item .spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 auto;\n            flex: 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/playable-list/playable-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayableListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayableListComponent = /** @class */ (function () {
    function PlayableListComponent() {
        this.playAllExists = true;
        this.removeAllExists = false;
        this.onPlayall = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onPlayItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onRemoveAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PlayableListComponent.prototype.ngOnInit = function () {
    };
    /**
     * Play all items.
     */
    PlayableListComponent.prototype.playAll = function () {
        this.onPlayall.emit();
    };
    /**
     * Play a single item.
     */
    PlayableListComponent.prototype.playItem = function (song) {
        this.onPlayItem.emit(song);
    };
    /**
     * Play all items.
     */
    PlayableListComponent.prototype.removeAll = function () {
        this.onRemoveAll.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PlayableListComponent.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PlayableListComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PlayableListComponent.prototype, "info", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PlayableListComponent.prototype, "playAllExists", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PlayableListComponent.prototype, "removeAllExists", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PlayableListComponent.prototype, "songs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PlayableListComponent.prototype, "onPlayall", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PlayableListComponent.prototype, "onPlayItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PlayableListComponent.prototype, "onRemoveAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], PlayableListComponent.prototype, "itemTemplate", void 0);
    PlayableListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-playable-list',
            template: __webpack_require__("../../../../../src/app/shared/components/playable-list/playable-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/playable-list/playable-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayableListComponent);
    return PlayableListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/user-box/user-box.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"user-image\">\n    <img mat-card-image [src]=\"image\" alt=\"Photo of a Shiba Inu\">\n    <h3 class=\"user-value\">\n      {{username}}\n    </h3>\n  </div>\n  <mat-card-content class=\"user-content\">\n    <app-icons-buttons [icons]=\"icons\"></app-icons-buttons>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/shared/components/user-box/user-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-image {\n  position: relative;\n  overflow: hidden;\n  width: calc(100% + 48px);\n  margin: 0 -24px 16px -24px;\n  margin-top: -24px; }\n  .user-image img {\n    margin: 0; }\n  .user-image:before {\n    content: \"\";\n    background: rgba(0, 0, 0, 0.3);\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; }\n  .user-image .user-value {\n    position: absolute;\n    bottom: 20PX;\n    left: 40px;\n    width: 100%;\n    display: block;\n    color: white;\n    font-size: 1.5rem; }\n    .user-image .user-value span {\n      font-size: 3rem; }\n\n.user-content {\n  padding-top: 20px;\n  padding-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/user-box/user-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserBoxComponent = /** @class */ (function () {
    function UserBoxComponent() {
        // icons
        this.icons = [
            {
                name: 'alarm_on',
                color: 'primary',
                text: 'Alarm',
            },
            {
                name: 'portable_wifi_off',
                color: 'accent',
                text: 'Wifi',
            },
            {
                name: 'fingerprint',
                color: 'warn',
                text: 'Unlock',
            },
            {
                name: 'power_settings_new',
                color: 'primary',
                text: 'Power off',
            }
        ];
    }
    UserBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UserBoxComponent.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UserBoxComponent.prototype, "image", void 0);
    UserBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-box',
            template: __webpack_require__("../../../../../src/app/shared/components/user-box/user-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/user-box/user-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserBoxComponent);
    return UserBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/viewer-box/viewer-box.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"viewer-box\">\n  <mat-card-header class=\"viewer-header\">\n    <mat-toolbar>\n      {{title}}\n    </mat-toolbar>\n  </mat-card-header>\n  <mat-card-content class=\"viewer-content\">\n    <ng-content select=\".view-content\"></ng-content>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/shared/components/viewer-box/viewer-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewer-box {\n  padding: 0; }\n  .viewer-box /deep/ .mat-card-header-text {\n    margin: 0; }\n  .viewer-box .viewer-content {\n    padding: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/viewer-box/viewer-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewerBoxComponent = /** @class */ (function () {
    function ViewerBoxComponent() {
    }
    ViewerBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ViewerBoxComponent.prototype, "title", void 0);
    ViewerBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-viewer-box',
            template: __webpack_require__("../../../../../src/app/shared/components/viewer-box/viewer-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/viewer-box/viewer-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewerBoxComponent);
    return ViewerBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/weather-box/weather-box.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"weather-image\">\n    <img mat-card-image [src]=\"image\" alt=\"Photo of a Shiba Inu\">\n    <h3 class=\"weather-value\">\n      <span>{{ degree }}</span> {{ hotness }}\n      <br/> {{ city }}\n    </h3>\n  </div>\n  <mat-card-content class=\"weathers-content\">\n    <app-icons-buttons [icons]=\"icons\"></app-icons-buttons>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/shared/components/weather-box/weather-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".weather-image {\n  position: relative;\n  overflow: hidden;\n  width: calc(100% + 48px);\n  margin: 0 -24px 16px -24px;\n  margin-top: -24px; }\n  .weather-image img {\n    margin: 0; }\n  .weather-image:before {\n    content: \"\";\n    background: rgba(0, 0, 0, 0.3);\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; }\n  .weather-image .weather-value {\n    position: absolute;\n    top: 30%;\n    width: 100%;\n    display: block;\n    text-align: center;\n    color: white;\n    font-size: 1.5rem; }\n    .weather-image .weather-value span {\n      font-size: 3rem; }\n\n.weathers-content {\n  padding-top: 20px;\n  padding-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/weather-box/weather-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeatherBoxComponent = /** @class */ (function () {
    function WeatherBoxComponent() {
        // icons
        this.icons = [
            {
                name: 'wb_sunny',
                color: 'primary',
                text: 'Sunny',
            },
            {
                name: 'wb_cloudy',
                color: 'accent',
                text: 'Cloudy',
            },
            {
                name: 'brightness_3',
                color: 'warn',
                text: 'Moonlight',
            },
            {
                name: 'brightness_6',
                color: 'primary',
                text: 'Mid sunny',
            }
        ];
    }
    WeatherBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WeatherBoxComponent.prototype, "degree", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WeatherBoxComponent.prototype, "hotness", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WeatherBoxComponent.prototype, "city", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WeatherBoxComponent.prototype, "image", void 0);
    WeatherBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-weather-box',
            template: __webpack_require__("../../../../../src/app/shared/components/weather-box/weather-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/weather-box/weather-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WeatherBoxComponent);
    return WeatherBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/mapToIterable.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapToIterable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Map to Iteratble Pipe
 *
 * It accepts Objects and [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
 *
 * Example:
 *
 *  <div *ngFor="#keyValuePair of someObject | mapToIterable">
 *    key {{keyValuePair.key}} and value {{keyValuePair.value}}
 *  </div>
 *
 */
var MapToIterable = /** @class */ (function () {
    function MapToIterable() {
    }
    MapToIterable.prototype.transform = function (value) {
        var result = [];
        if (value.entries) {
            value.forEach(function (v, key) {
                result.push(v);
            });
        }
        else {
            for (var key in value) {
                if (value[key]) {
                    result.push({ key: key, value: value[key] });
                }
            }
        }
        return result;
    };
    MapToIterable = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'mapToIterable' })
    ], MapToIterable);
    return MapToIterable;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_actions_user_action__ = __webpack_require__("../../../../../src/app/store/actions/user.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(afAuth, db, store, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.store = store;
        this.router = router;
        afAuth.authState.subscribe(function (user) {
            _this.setUser(user);
        });
    }
    AuthService.prototype.setUser = function (user) {
        if (user !== null) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_actions_user_action__["c" /* UserAuthAction */]({
                username: user.displayName,
                user_image: user.photoURL,
                uid: user.uid,
            }));
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_actions_user_action__["e" /* UserLoginSuccessAction */]({
                uid: user.uid,
            }));
            this.router.navigate(['/']);
        }
        else {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_actions_user_action__["f" /* UserLogoutAction */]({}));
        }
    };
    AuthService.prototype.signInWithGoogle = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_actions_user_action__["d" /* UserLoginAction */]({}));
    };
    AuthService.prototype.signOut = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_actions_user_action__["f" /* UserLogoutAction */]({}));
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/player/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_actions_player_actions__ = __webpack_require__("../../../../../src/app/store/actions/player.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_howler__ = __webpack_require__("../../../../howler/dist/howler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_howler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_howler__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerService = /** @class */ (function () {
    function PlayerService(store) {
        this.store = store;
        this.playingIndex = 0;
        this.volume = 0.5;
    }
    /**
     * Add one single song to the player.
     *
     * @param song
     *  The song to add.
     */
    PlayerService.prototype.createPlayListOfSong = function (song) {
        this.songList = [song];
        this.playSong(0);
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_0__store_actions_player_actions__["a" /* PLAYER_ACTION_TYPES */].PLAYER_ADD_SONG,
            payload: {
                song: song,
            }
        });
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_0__store_actions_player_actions__["a" /* PLAYER_ACTION_TYPES */].PLAYER_PLAY_SONG,
            payload: {
                song: song,
            }
        });
    };
    /**
     * Add a list of songs to the player.
     *
     * @param songs
     *  the song array.
     */
    PlayerService.prototype.createPlayListOfListOfSongs = function (songs) {
        this.songList = songs;
        this.playSong(0);
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_0__store_actions_player_actions__["a" /* PLAYER_ACTION_TYPES */].PLAYER_ADD_SONGS,
            payload: {
                songs: songs,
            }
        });
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_0__store_actions_player_actions__["a" /* PLAYER_ACTION_TYPES */].PLAYER_PLAY_SONG,
            payload: {
                song: songs[0],
            }
        });
    };
    /**
     *
     * Play a song from the queue.
     *
     * @param index
     */
    PlayerService.prototype.playQueueSong = function (index) {
        this.playSong(0);
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_0__store_actions_player_actions__["a" /* PLAYER_ACTION_TYPES */].PLAYER_PLAY_SONG,
            payload: {
                song: this.songList[index],
            }
        });
    };
    /**
      *
      * Remove a song from the queue.
      *
      * @param song
      *   The song to remove.
      */
    PlayerService.prototype.removeQueueSong = function (song) {
        var indexToRemove = this.songList.indexOf(song);
        if (this.playingIndex == indexToRemove) {
            var newIndex = this.songList.length > indexToRemove ? indexToRemove + 1 : 0;
            this.playSong(indexToRemove + 1);
            this.store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__store_actions_player_actions__["a" /* PLAYER_ACTION_TYPES */].PLAYER_PLAY_SONG,
                payload: {
                    song: this.songList[newIndex],
                }
            });
        }
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_0__store_actions_player_actions__["a" /* PLAYER_ACTION_TYPES */].PLAYER_REMOVE_SONG,
            payload: {
                song: song,
            }
        });
    };
    /**
     *
     * Removes all songs from Queue
     */
    PlayerService.prototype.removeAllQueueSongs = function () {
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_0__store_actions_player_actions__["a" /* PLAYER_ACTION_TYPES */].PLAYER_REMOVE_ALL_SONGS,
            payload: {}
        });
        this.stop();
    };
    /**
     * Play a specific sound.
     *
     * @param id
     *  The sound id to play.
     */
    PlayerService.prototype.playSong = function (id) {
        this.stop();
        this.player = new __WEBPACK_IMPORTED_MODULE_3_howler__["Howl"]({
            src: this.songList[id].url,
            html5: true,
            volume: this.volume,
        });
        this.player.play();
    };
    /**
     * Stop the player.
     */
    PlayerService.prototype.stop = function () {
        if (this.player) {
            this.player.stop();
        }
    };
    /**
     * Pause the player.
     */
    PlayerService.prototype.pause = function () {
        this.player.pause();
    };
    /**
     * Resume the player.
     */
    PlayerService.prototype.resume = function () {
        this.player.play();
    };
    /**
     * Move to previous song.
     */
    PlayerService.prototype.prev = function () {
        if (this.playingIndex > 0) {
            this.playSong(this.playingIndex - 1);
            this.playingIndex -= 1;
            this.updateSongPlaying();
        }
    };
    /**
     * Move to next song.
     */
    PlayerService.prototype.next = function () {
        if (this.playingIndex < this.songList.length - 1) {
            this.playSong(this.playingIndex + 1);
            this.playingIndex += 1;
            this.updateSongPlaying();
        }
    };
    /**
     * Update the player volume.
     *
     * @param volume
     *  The new volume for the player.
     */
    PlayerService.prototype.updateVolume = function (volume) {
        this.volume = volume;
        this.player.volume(volume);
    };
    /**
     * Update the player in store with the current song playing.
     */
    PlayerService.prototype.updateSongPlaying = function () {
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_0__store_actions_player_actions__["a" /* PLAYER_ACTION_TYPES */].PLAYER_PLAY_SONG,
            payload: {
                song: this.songList[this.playingIndex],
            }
        });
    };
    PlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/playlist/playlist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_player_service__ = __webpack_require__("../../../../../src/app/shared/services/player/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_actions_playlist_actions__ = __webpack_require__("../../../../../src/app/store/actions/playlist.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaylistService = /** @class */ (function () {
    function PlaylistService(store, player) {
        var _this = this;
        this.store = store;
        this.player = player;
        this.store.select('user').take(1).subscribe(function (u) {
            _this.user = u;
        });
    }
    /**
     * Creates a playlist for the current user.
     *
     * @param name
     *  the name for the playlist.
     */
    PlaylistService.prototype.createPlaylist = function (name, imageFile) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_actions_playlist_actions__["b" /* PlaylistAddAction */]({
            uid: this.user.uid,
            owner: this.user.username,
            name: name,
            imageFile: imageFile,
        }));
    };
    /**
     * Save an image for a playlist.
     */
    PlaylistService.prototype.savePlaylistImage = function (file) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_actions_playlist_actions__["c" /* PlaylistAddImageAction */]({
            uid: this.user.uid,
            file: file,
        }));
    };
    /**
     * Add a song to a playlist
     */
    PlaylistService.prototype.addSongToPlaylist = function (song, playlist) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_actions_playlist_actions__["d" /* PlaylistAddSongAction */]({
            song: song,
            playlist: playlist,
        }));
    };
    /**
     * Get all songs of a playlist.
     *
     * @param id
     *  the id of the playlist.
     */
    PlaylistService.prototype.getPlaylistSongs = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__store_actions_playlist_actions__["h" /* PlaylistGetSongsAction */]({
            id: id,
        }));
    };
    /**
     * Play a song
     *
     * @param song
     *  The song to play.
     */
    PlaylistService.prototype.playSong = function (song) {
        this.player.createPlayListOfSong(song);
    };
    /**
     * Create a playlist with song array
     *
     * @param songs
     *  The songs to play.
     */
    PlaylistService.prototype.playSongs = function (songs) {
        this.player.createPlayListOfListOfSongs(songs);
    };
    PlaylistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_0__player_player_service__["a" /* PlayerService */]])
    ], PlaylistService);
    return PlaylistService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_playable_list_playable_list_component__ = __webpack_require__("../../../../../src/app/shared/components/playable-list/playable-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_player_player_service__ = __webpack_require__("../../../../../src/app/shared/services/player/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_mapToIterable__ = __webpack_require__("../../../../../src/app/shared/pipes/mapToIterable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_card_card_component__ = __webpack_require__("../../../../../src/app/shared/components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_play_card_play_card_component__ = __webpack_require__("../../../../../src/app/components/play-card/play-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_player_controller_player_controller_player_controller_component__ = __webpack_require__("../../../../../src/app/components/player-controller/player-controller/player-controller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_playlist_playlist_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_viewer_box_viewer_box_component__ = __webpack_require__("../../../../../src/app/shared/components/viewer-box/viewer-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_weather_box_weather_box_component__ = __webpack_require__("../../../../../src/app/shared/components/weather-box/weather-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_icons_buttons_icons_buttons_component__ = __webpack_require__("../../../../../src/app/shared/components/icons-buttons/icons-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_box_user_box_component__ = __webpack_require__("../../../../../src/app/shared/components/user-box/user-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_icon_box_icon_box_component__ = __webpack_require__("../../../../../src/app/shared/components/icon-box/icon-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var SHARED_MODULES = [
    __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["w" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_7_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* RouterModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatChipsModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["u" /* MatSliderModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["x" /* MatTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatRadioModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["v" /* MatTabsModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["t" /* MatSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts__["NgxChartsModule"],
    __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
];
var SHARED_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_11__components_card_card_component__["a" /* CardComponent */],
    __WEBPACK_IMPORTED_MODULE_19__components_icon_box_icon_box_component__["a" /* IconBoxComponent */],
    __WEBPACK_IMPORTED_MODULE_12__components_play_card_play_card_component__["a" /* PlayCardComponent */],
    __WEBPACK_IMPORTED_MODULE_13__components_player_controller_player_controller_player_controller_component__["a" /* PlayerControllerComponent */],
    __WEBPACK_IMPORTED_MODULE_0__components_playable_list_playable_list_component__["a" /* PlayableListComponent */],
    __WEBPACK_IMPORTED_MODULE_15__components_viewer_box_viewer_box_component__["a" /* ViewerBoxComponent */],
    __WEBPACK_IMPORTED_MODULE_16__components_weather_box_weather_box_component__["a" /* WeatherBoxComponent */],
    __WEBPACK_IMPORTED_MODULE_17__components_icons_buttons_icons_buttons_component__["a" /* IconsButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_18__components_user_box_user_box_component__["a" /* UserBoxComponent */],
];
var SHARED_PIPES = [
    __WEBPACK_IMPORTED_MODULE_10__pipes_mapToIterable__["a" /* MapToIterable */],
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_9__services_player_player_service__["a" /* PlayerService */],
                __WEBPACK_IMPORTED_MODULE_14__services_playlist_playlist_service__["a" /* PlaylistService */],
            ],
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: SHARED_MODULES.slice(),
            declarations: SHARED_COMPONENTS.concat(SHARED_PIPES),
            exports: SHARED_MODULES.concat(SHARED_COMPONENTS, SHARED_PIPES)
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/store/actions/albums.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALBUMS_ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AlbumsOfArtistUpdatedAction; });
var ALBUMS_ACTION_TYPES = {
    ALBUMS_OF_ARTIST_UPDATED: 'ALBUMS_OF_ARTIST_UPDATED',
};
// actions
var AlbumsOfArtistUpdatedAction = /** @class */ (function () {
    function AlbumsOfArtistUpdatedAction(payload) {
        this.payload = payload;
        this.type = ALBUMS_ACTION_TYPES.ALBUMS_OF_ARTIST_UPDATED;
    }
    return AlbumsOfArtistUpdatedAction;
}());



/***/ }),

/***/ "../../../../../src/app/store/actions/artists.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ARTISTS_ACTION_TYPES; });
/* unused harmony export ArtistsUpdatedAction */
var ARTISTS_ACTION_TYPES = {
    ARTISTS_UPDATED: 'ARTISTS_UPDATED',
    ARTIST_UPDATED: 'ARTIST_UPDATED',
};
// actions
var ArtistsUpdatedAction = /** @class */ (function () {
    function ArtistsUpdatedAction() {
    }
    return ArtistsUpdatedAction;
}());



/***/ }),

/***/ "../../../../../src/app/store/actions/filters.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FILTERS_ACTION_TYPES; });
/* unused harmony export FiltersSaveAction */
/* unused harmony export PlaylistFiltersSaveAction */
var FILTERS_ACTION_TYPES = {
    FILTERS_UPDATED: 'FILTERS_UPDATED',
    PLAYLIST_FILTERS_UPDATED: 'PLAYLIST_FILTERS_UPDATED',
};
// actions
var FiltersSaveAction = /** @class */ (function () {
    function FiltersSaveAction() {
    }
    return FiltersSaveAction;
}());

var PlaylistFiltersSaveAction = /** @class */ (function () {
    function PlaylistFiltersSaveAction() {
    }
    return PlaylistFiltersSaveAction;
}());



/***/ }),

/***/ "../../../../../src/app/store/actions/player.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLAYER_ACTION_TYPES; });
/* unused harmony export PLayerAddSongAction */
/* unused harmony export PLayerAddSongsAction */
/* unused harmony export PLayerRemoveSongAction */
/* unused harmony export PLayerRemoveAllSongsAction */
var PLAYER_ACTION_TYPES = {
    PLAYER_ADD_SONG: 'PLAYER_ADD_SONG',
    PLAYER_ADD_SONGS: 'PLAYER_ADD_SONGS',
    PLAYER_PLAY_SONG: 'PLAYER_PLAY_SONG',
    PLAYER_REMOVE_SONG: 'PLAYER_REMOVE_SONG',
    PLAYER_REMOVE_ALL_SONGS: 'PLAYER_REMOVE_ALL_SONGS',
};
// actions
var PLayerAddSongAction = /** @class */ (function () {
    function PLayerAddSongAction(payload) {
        this.payload = payload;
        this.type = PLAYER_ACTION_TYPES.PLAYER_ADD_SONG;
    }
    return PLayerAddSongAction;
}());

var PLayerAddSongsAction = /** @class */ (function () {
    function PLayerAddSongsAction(payload) {
        this.payload = payload;
        this.type = PLAYER_ACTION_TYPES.PLAYER_ADD_SONGS;
    }
    return PLayerAddSongsAction;
}());

var PLayerRemoveSongAction = /** @class */ (function () {
    function PLayerRemoveSongAction(payload) {
        this.payload = payload;
        this.type = PLAYER_ACTION_TYPES.PLAYER_REMOVE_SONG;
    }
    return PLayerRemoveSongAction;
}());

var PLayerRemoveAllSongsAction = /** @class */ (function () {
    function PLayerRemoveAllSongsAction(payload) {
        this.payload = payload;
        this.type = PLAYER_ACTION_TYPES.PLAYER_REMOVE_ALL_SONGS;
    }
    return PLayerRemoveAllSongsAction;
}());



/***/ }),

/***/ "../../../../../src/app/store/actions/playlist.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLAYLIST_ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PlaylistGetAllAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PlaylistGetAllOfUserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PlaylistAddAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PlaylistAddImageAction; });
/* unused harmony export PlaylistAddedImageAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PlaylistAddedAction; });
/* unused harmony export PlaylistRemovedAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PlaylistAddSongAction; });
/* unused harmony export PlaylistAddedSongAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return PlaylistGetSongsAction; });
var PLAYLIST_ACTION_TYPES = {
    PLAYLIST_GET_ALL: 'PLAYLIST_GET_ALL',
    PLAYLIST_GET_ALL_OF_USER: 'PLAYLIST_GET_ALL_OF_USER',
    PLAYLIST_ADD: 'PLAYLIST_ADD',
    PLAYLIST_ADDED: 'PLAYLIST_ADDED',
    PLAYLIST_REMOVE: 'PLAYLIST_REMOVE',
    PLAYLIST_ADD_IMAGE: 'PLAYLIST_ADD_IMAGE',
    PLAYLIST_ADDED_IMAGE: 'PLAYLIST_ADDED_IMAGE',
    PLAYLIST_ADD_SONG: 'PLAYLIST_ADD_SONG',
    PLAYLIST_ADDED_SONG: 'PLAYLIST_ADDED_SONG',
    PLAYLIST_GET_SONGS: 'PLAYLIST_GET_SONGS',
    PLAYLIST_ADDED_SONGS: 'PLAYLIST_ADDED_SONGS',
};
// actions
var PlaylistGetAllAction = /** @class */ (function () {
    function PlaylistGetAllAction(payload) {
        this.payload = payload;
        this.type = PLAYLIST_ACTION_TYPES.PLAYLIST_GET_ALL;
    }
    return PlaylistGetAllAction;
}());

var PlaylistGetAllOfUserAction = /** @class */ (function () {
    function PlaylistGetAllOfUserAction(payload) {
        this.payload = payload;
        this.type = PLAYLIST_ACTION_TYPES.PLAYLIST_GET_ALL_OF_USER;
    }
    return PlaylistGetAllOfUserAction;
}());

var PlaylistAddAction = /** @class */ (function () {
    function PlaylistAddAction(payload) {
        this.payload = payload;
        this.type = PLAYLIST_ACTION_TYPES.PLAYLIST_ADD;
    }
    return PlaylistAddAction;
}());

var PlaylistAddImageAction = /** @class */ (function () {
    function PlaylistAddImageAction(payload) {
        this.payload = payload;
        this.type = PLAYLIST_ACTION_TYPES.PLAYLIST_ADD_IMAGE;
    }
    return PlaylistAddImageAction;
}());

var PlaylistAddedImageAction = /** @class */ (function () {
    function PlaylistAddedImageAction(payload) {
        this.payload = payload;
        this.type = PLAYLIST_ACTION_TYPES.PLAYLIST_ADDED_IMAGE;
    }
    return PlaylistAddedImageAction;
}());

var PlaylistAddedAction = /** @class */ (function () {
    function PlaylistAddedAction(payload) {
        this.payload = payload;
        this.type = PLAYLIST_ACTION_TYPES.PLAYLIST_ADDED;
    }
    return PlaylistAddedAction;
}());

var PlaylistRemovedAction = /** @class */ (function () {
    function PlaylistRemovedAction(payload) {
        this.payload = payload;
        this.type = PLAYLIST_ACTION_TYPES.PLAYLIST_REMOVE;
    }
    return PlaylistRemovedAction;
}());

var PlaylistAddSongAction = /** @class */ (function () {
    function PlaylistAddSongAction(payload) {
        this.payload = payload;
        this.type = PLAYLIST_ACTION_TYPES.PLAYLIST_ADD_SONG;
    }
    return PlaylistAddSongAction;
}());

var PlaylistAddedSongAction = /** @class */ (function () {
    function PlaylistAddedSongAction(payload) {
        this.payload = payload;
        this.type = PLAYLIST_ACTION_TYPES.PLAYLIST_ADDED_SONG;
    }
    return PlaylistAddedSongAction;
}());

var PlaylistGetSongsAction = /** @class */ (function () {
    function PlaylistGetSongsAction(payload) {
        this.payload = payload;
        this.type = PLAYLIST_ACTION_TYPES.PLAYLIST_GET_SONGS;
    }
    return PlaylistGetSongsAction;
}());



/***/ }),

/***/ "../../../../../src/app/store/actions/songs.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SONGS_ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SongsOfAlbumUpdatedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SongAddToPlaylistAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SongsAddToPlaylistAction; });
var SONGS_ACTION_TYPES = {
    SONGS_OF_ALBUM_UPDATED: 'SONGS_OF_ALBUM_UPDATED',
    SONGS_FROM_ALBUM: 'SONGS_FROM_ALBUM',
    SONG_ADD_TO_PLAYLIST: 'SONG_ADD_TO_PLAYLIST',
    SONGS_ADD_TO_PLAYLIST: 'SONGS_ADD_TO_PLAYLIST',
};
// actions
var SongsOfAlbumUpdatedAction = /** @class */ (function () {
    function SongsOfAlbumUpdatedAction(payload) {
        this.payload = payload;
        this.type = SONGS_ACTION_TYPES.SONGS_OF_ALBUM_UPDATED;
    }
    return SongsOfAlbumUpdatedAction;
}());

var SongAddToPlaylistAction = /** @class */ (function () {
    function SongAddToPlaylistAction(payload) {
        this.payload = payload;
        this.type = SONGS_ACTION_TYPES.SONG_ADD_TO_PLAYLIST;
    }
    return SongAddToPlaylistAction;
}());

var SongsAddToPlaylistAction = /** @class */ (function () {
    function SongsAddToPlaylistAction(payload) {
        this.payload = payload;
        this.type = SONGS_ACTION_TYPES.SONGS_ADD_TO_PLAYLIST;
    }
    return SongsAddToPlaylistAction;
}());



/***/ }),

/***/ "../../../../../src/app/store/actions/user.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER_ACTION_TYPES; });
/* unused harmony export UserAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UserLoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UserLoginSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserAuthAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UserUnauthAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveUserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UserLogoutAction; });
var USER_ACTION_TYPES = {
    AUTH: 'AUTH',
    UNAUTH: 'UNAUTH',
    USER_SAVE: 'USER_SAVE',
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT: 'LOGOUT',
};
// actions
var UserAction = /** @class */ (function () {
    function UserAction() {
    }
    return UserAction;
}());

var UserLoginAction = /** @class */ (function () {
    function UserLoginAction(payload) {
        this.payload = payload;
        this.type = USER_ACTION_TYPES.LOGIN;
    }
    return UserLoginAction;
}());

var UserLoginSuccessAction = /** @class */ (function () {
    function UserLoginSuccessAction(payload) {
        this.payload = payload;
        this.type = USER_ACTION_TYPES.LOGIN_SUCCESS;
    }
    return UserLoginSuccessAction;
}());

var UserAuthAction = /** @class */ (function () {
    function UserAuthAction(payload) {
        this.payload = payload;
        this.type = USER_ACTION_TYPES.AUTH;
    }
    return UserAuthAction;
}());

var UserUnauthAction = /** @class */ (function () {
    function UserUnauthAction(payload) {
        this.payload = payload;
        this.type = USER_ACTION_TYPES.UNAUTH;
    }
    return UserUnauthAction;
}());

var SaveUserAction = /** @class */ (function () {
    function SaveUserAction(payload) {
        this.payload = payload;
        this.type = USER_ACTION_TYPES.USER_SAVE;
    }
    return SaveUserAction;
}());

var UserLogoutAction = /** @class */ (function () {
    function UserLogoutAction(payload) {
        this.payload = payload;
        this.type = USER_ACTION_TYPES.LOGOUT;
    }
    return UserLogoutAction;
}());



/***/ }),

/***/ "../../../../../src/app/store/effects/firebase/artists.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_songs_actions__ = __webpack_require__("../../../../../src/app/store/actions/songs.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_albums_actions__ = __webpack_require__("../../../../../src/app/store/actions/albums.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_artists_actions__ = __webpack_require__("../../../../../src/app/store/actions/artists.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__helpers__ = __webpack_require__("../../../../../src/app/store/effects/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ArtistsEffects = /** @class */ (function () {
    function ArtistsEffects(db, store, actions$) {
        var _this = this;
        this.db = db;
        this.store = store;
        this.actions$ = actions$;
        this.navigateToArtists = this.handleNavigation('artists', function (routerSnapshot) {
            var filters = Object(__WEBPACK_IMPORTED_MODULE_16__helpers__["a" /* createFilters */])(routerSnapshot.params);
            return _this.db.list('/artists', function (ref) { return ref.limitToFirst(filters.limit); }).valueChanges()
                .map(function (artists) {
                var list = artists.map(function (artist) { return artist.slug; });
                var items = {};
                Object.assign.apply(Object, [items].concat(artists.map(function (artist) {
                    return (_a = {}, _a[artist.slug] = artist, _a);
                    var _a;
                })));
                return { type: __WEBPACK_IMPORTED_MODULE_2__actions_artists_actions__["a" /* ARTISTS_ACTION_TYPES */].ARTISTS_UPDATED, payload: { items: items, list: list } };
            });
        });
        this.navigateToArtistDetail = this.handleSecondaryNavigation('artists/:slug', function (routerSnapshot, state) {
            var slug = routerSnapshot.paramMap.get('slug');
            return _this.db.object("/artists/" + slug).valueChanges().map(function (artist) {
                return { type: __WEBPACK_IMPORTED_MODULE_2__actions_artists_actions__["a" /* ARTISTS_ACTION_TYPES */].ARTIST_UPDATED, payload: artist };
            });
        });
        this.navigateToArtistDetailGetAlbums = this.handleSecondaryNavigation('artists/:slug', function (routerSnapshot, state) {
            var slug = routerSnapshot.paramMap.get('slug');
            return _this.db.list("/albums/" + slug).valueChanges().map(function (albums) {
                return new __WEBPACK_IMPORTED_MODULE_1__actions_albums_actions__["b" /* AlbumsOfArtistUpdatedAction */]({
                    artist: slug,
                    albums: albums,
                });
            });
        });
        this.albumGetSongs$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_0__actions_songs_actions__["a" /* SONGS_ACTION_TYPES */].SONGS_FROM_ALBUM)
            .mergeMap(function (action) {
            return _this.db.list("/songs/" + action.payload.album).valueChanges().map(function (songs) {
                return new __WEBPACK_IMPORTED_MODULE_0__actions_songs_actions__["d" /* SongsOfAlbumUpdatedAction */]({
                    album: action.payload.album,
                    songs: songs,
                });
            });
        });
    }
    ArtistsEffects.prototype.handleNavigation = function (segment, callback) {
        var nav = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["a" /* ROUTER_NAVIGATION */]).
            filter(function (r) { return Object(__WEBPACK_IMPORTED_MODULE_16__helpers__["b" /* filterAllSegments */])(r, segment); }).
            map(__WEBPACK_IMPORTED_MODULE_16__helpers__["c" /* firstSegment */]);
        return nav.withLatestFrom(this.store).switchMap(function (a) { return callback(a[0], a[1]); }).catch(function (e) {
            console.log('Network error', e);
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of();
        });
    };
    ArtistsEffects.prototype.handleSecondaryNavigation = function (segment, callback) {
        var nav = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["a" /* ROUTER_NAVIGATION */]).
            filter(function (r) { return Object(__WEBPACK_IMPORTED_MODULE_16__helpers__["b" /* filterAllSegments */])(r, segment); }).
            map(__WEBPACK_IMPORTED_MODULE_16__helpers__["d" /* secondSegment */]);
        return nav.withLatestFrom(this.store).switchMap(function (a) { return callback(a[0], a[1]); }).catch(function (e) {
            console.log('Network error', e);
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ArtistsEffects.prototype, "navigateToArtists", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ArtistsEffects.prototype, "navigateToArtistDetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ArtistsEffects.prototype, "navigateToArtistDetailGetAlbums", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"])
    ], ArtistsEffects.prototype, "albumGetSongs$", void 0);
    ArtistsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["a" /* Actions */]])
    ], ArtistsEffects);
    return ArtistsEffects;
}());



/***/ }),

/***/ "../../../../../src/app/store/effects/firebase/playlist.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_songs_actions__ = __webpack_require__("../../../../../src/app/store/actions/songs.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_user_action__ = __webpack_require__("../../../../../src/app/store/actions/user.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase_storage__ = __webpack_require__("../../../../firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__actions_playlist_actions__ = __webpack_require__("../../../../../src/app/store/actions/playlist.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__helpers__ = __webpack_require__("../../../../../src/app/store/effects/helpers.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var PlaylistEffects = /** @class */ (function () {
    function PlaylistEffects(db, firebaseApp, store, actions$) {
        var _this = this;
        this.db = db;
        this.firebaseApp = firebaseApp;
        this.store = store;
        this.actions$ = actions$;
        this.navigateToPlaylists = this.handleNavigation('playlists/explore', function (routerSnapshot) {
            var filters = Object(__WEBPACK_IMPORTED_MODULE_15__helpers__["a" /* createFilters */])(routerSnapshot.params);
            return _this.db.list('/playlists', function (ref) { return ref.limitToFirst(filters.limit); }).valueChanges()
                .map(function (playlists) {
                return playlists.map(function (playlistSongs) {
                    var playlist = Object.keys(playlistSongs).map(function (k) {
                        var playlistWithKey = playlistSongs[k];
                        playlistWithKey.id = k;
                        return playlistWithKey;
                    });
                    return playlist;
                });
            }).switchMap(function (allPlaylists) {
                return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_14__actions_playlist_actions__["f" /* PlaylistGetAllAction */]({
                    playlists: [].concat.apply([], allPlaylists),
                }));
            });
        });
        this.addPlaylist$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_14__actions_playlist_actions__["a" /* PLAYLIST_ACTION_TYPES */].PLAYLIST_ADD)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            var ref = _this.db.list("/playlists/" + payload.uid).push({
                name: payload.name,
                owner: payload.owner,
            });
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_14__actions_playlist_actions__["c" /* PlaylistAddImageAction */]({
                uid: payload.uid,
                playlistKey: ref.key,
                name: payload.name,
                imageFile: payload.imageFile,
            }));
        });
        /*.catch(res => {
            // Handle error with an action that removes the added playlist from store.
            return Observable.of({});
            //return Observable.of(new PlaylistRemovedAction({
            //   id: res.key,
            // }));
        });*/
        this.addPlaylistImage$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_14__actions_playlist_actions__["a" /* PLAYLIST_ACTION_TYPES */].PLAYLIST_ADD_IMAGE)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            var storageRef = _this.firebaseApp.storage().ref();
            var selectedFile = payload.imageFile;
            // Make local copies of services because "this" will be clobbered
            var folder = 'playlists';
            var path = "/" + folder + "/" + selectedFile.name;
            var iRef = storageRef.child(path);
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].fromPromise(iRef.put(selectedFile)).switchMap(function (item) {
                var ref = _this.db.list("/playlists/" + payload.uid).update(payload.playlistKey, {
                    image: item.downloadURL,
                });
                return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_14__actions_playlist_actions__["e" /* PlaylistAddedAction */]({}));
            });
        });
        /*.catch(res => {
            // Handle error with an action that removes the added playlist from store.
            return Observable.of({});
        })*/
        this.getAllPlaylistsForUser$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_user_action__["b" /* USER_ACTION_TYPES */].LOGIN_SUCCESS)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            // Get all playlists.
            var uid = payload.uid;
            return _this.db.list("/playlists/" + uid).snapshotChanges().map(function (action) {
                return action.map(function (ac) {
                    var $key = ac.payload.key;
                    var data = __assign({ $key: $key }, ac.payload.val());
                    return data;
                });
            }).map(function (playlists) {
                return new __WEBPACK_IMPORTED_MODULE_14__actions_playlist_actions__["g" /* PlaylistGetAllOfUserAction */]({
                    playlists: playlists.map(function (playlist) {
                        return Object.assign(playlist, { id: playlist.$key });
                    }),
                });
            });
        });
        /*.catch(res => {
            // Handle error with an action that removes the added playlist from store.
            return Observable.of({});
        });*/
        this.addSongToPlaylist$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_14__actions_playlist_actions__["a" /* PLAYLIST_ACTION_TYPES */].PLAYLIST_ADD_SONG)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            var ref = _this.db.list("/songs/" + payload.playlist).push(__assign({}, payload.song));
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_1__actions_songs_actions__["b" /* SongAddToPlaylistAction */]({
                playlist: payload.playlist,
                song: payload.song,
            }));
        });
        /*.catch(res => {
            // Handle error with an action that removes the added playlist from store.
            return Observable.of({});
            //return Observable.of(new PlaylistRemovedAction({
            //    id: res.key,
            // }));
        });*/
        this.getAllPlaylistSongs$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_14__actions_playlist_actions__["a" /* PLAYLIST_ACTION_TYPES */].PLAYLIST_GET_SONGS)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            // Get all playlists.
            var uid = payload.uid;
            var id = payload.id;
            return _this.db.list("/songs/" + id).valueChanges().map(function (songs) {
                return new __WEBPACK_IMPORTED_MODULE_1__actions_songs_actions__["c" /* SongsAddToPlaylistAction */]({
                    playlistId: id,
                    songs: songs,
                });
            });
        });
    }
    /*.catch(res => {
        // Handle error with an action that removes the added playlist from store.
        return Observable.of({});
    });*/
    PlaylistEffects.prototype.handleNavigation = function (segment, callback) {
        var nav = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_0__ngrx_router_store__["a" /* ROUTER_NAVIGATION */]).
            filter(function (r) { return Object(__WEBPACK_IMPORTED_MODULE_15__helpers__["b" /* filterAllSegments */])(r, segment); }).
            map(__WEBPACK_IMPORTED_MODULE_15__helpers__["c" /* firstSegment */]);
        return nav.withLatestFrom(this.store).switchMap(function (a) { return callback(a[0], a[1]); }).catch(function (e) {
            console.log('Network error', e);
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of();
        });
    };
    PlaylistEffects.prototype.handleSecondaryNavigation = function (segment, callback) {
        var nav = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_0__ngrx_router_store__["a" /* ROUTER_NAVIGATION */]).
            filter(function (r) { return Object(__WEBPACK_IMPORTED_MODULE_15__helpers__["b" /* filterAllSegments */])(r, segment); }).
            map(__WEBPACK_IMPORTED_MODULE_15__helpers__["d" /* secondSegment */]);
        return nav.withLatestFrom(this.store).switchMap(function (a) { return callback(a[0], a[1]); }).catch(function (e) {
            console.log('Network error', e);
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], PlaylistEffects.prototype, "navigateToPlaylists", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"])
    ], PlaylistEffects.prototype, "addPlaylist$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"])
    ], PlaylistEffects.prototype, "addPlaylistImage$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"])
    ], PlaylistEffects.prototype, "getAllPlaylistsForUser$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"])
    ], PlaylistEffects.prototype, "addSongToPlaylist$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"])
    ], PlaylistEffects.prototype, "getAllPlaylistSongs$", void 0);
    PlaylistEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2__["b" /* FirebaseApp */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* Actions */]])
    ], PlaylistEffects);
    return PlaylistEffects;
}());



/***/ }),

/***/ "../../../../../src/app/store/effects/firebase/user.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_user_action__ = __webpack_require__("../../../../../src/app/store/actions/user.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AuthEffects = /** @class */ (function () {
    function AuthEffects(afAuth, db, actions$) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.actions$ = actions$;
        this.login$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_user_action__["b" /* USER_ACTION_TYPES */].LOGIN)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            // Transform firebase auth to an observable.
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(_this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_13_firebase_app__["auth"].GoogleAuthProvider()))
                .map(function (user) { return new __WEBPACK_IMPORTED_MODULE_2__actions_user_action__["a" /* SaveUserAction */](user); })
                .catch(function (res) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_2__actions_user_action__["g" /* UserUnauthAction */]({})); });
        });
        this.saveUser$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_user_action__["b" /* USER_ACTION_TYPES */].USER_SAVE)
            .map(function (action) { return action.payload; })
            .mergeMap(function (response) {
            return _this.db.object("/users/" + response.user.uid).valueChanges()
                .switchMap(function (user) {
                if (!user) {
                    var _a = response.user, displayName = _a.displayName, email = _a.email, emailVerified = _a.emailVerified, photoURL = _a.photoURL, uid = _a.uid;
                    _this.db.object("/users/" + response.user.uid).set({
                        displayName: displayName,
                        email: email,
                        emailVerified: emailVerified,
                        photoURL: photoURL,
                        uid: uid
                    });
                }
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_2__actions_user_action__["e" /* UserLoginSuccessAction */]({
                    uid: response.user.uid,
                }));
            }).catch(function (res) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_2__actions_user_action__["g" /* UserUnauthAction */]({}));
            });
        });
        this.logout$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_user_action__["b" /* USER_ACTION_TYPES */].LOGOUT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(_this.afAuth.auth.signOut())
                .map(function (user) { return new __WEBPACK_IMPORTED_MODULE_2__actions_user_action__["g" /* UserUnauthAction */]({}); });
            // .catch(res => Observable.of({}));
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], AuthEffects.prototype, "login$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], AuthEffects.prototype, "saveUser$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], AuthEffects.prototype, "logout$", void 0);
    AuthEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "../../../../../src/app/store/effects/helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createFilters;
/* harmony export (immutable) */ __webpack_exports__["c"] = firstSegment;
/* harmony export (immutable) */ __webpack_exports__["d"] = secondSegment;
/* unused harmony export allSegments */
/* harmony export (immutable) */ __webpack_exports__["b"] = filterAllSegments;
function createFilters(p) {
    return {
        limit: parseInt(p['limit'], 10) || 6
    };
}
function firstSegment(r) {
    return r.payload.routerState.root.firstChild;
}
function secondSegment(r) {
    return r.payload.routerState.root.children[0].firstChild;
}
function allSegments(r) {
    var routerPath = r.payload.routerState.root.firstChild.routeConfig.path;
    r.payload.routerState.root.children.forEach(function (p) {
        routerPath += p.firstChild.routeConfig.path;
    });
    console.log('Path string', routerPath);
    return routerPath;
}
function filterAllSegments(r, segment) {
    var routerPath = r.payload.routerState.root.firstChild.routeConfig.path;
    r.payload.routerState.root.children.forEach(function (p) {
        if (p.firstChild.routeConfig.path) {
            routerPath += '/' + p.firstChild.routeConfig.path;
        }
    });
    return routerPath === segment;
}


/***/ }),

/***/ "../../../../../src/app/store/effects/static/artists.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistsStaticEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_songs_actions__ = __webpack_require__("../../../../../src/app/store/actions/songs.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_albums_actions__ = __webpack_require__("../../../../../src/app/store/actions/albums.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_artists_actions__ = __webpack_require__("../../../../../src/app/store/actions/artists.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers__ = __webpack_require__("../../../../../src/app/store/effects/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ArtistsStaticEffects = /** @class */ (function () {
    function ArtistsStaticEffects(http, store, actions$) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.actions$ = actions$;
        this.navigateToArtists = this.handleNavigation('artists', function (routerSnapshot) {
            var filters = Object(__WEBPACK_IMPORTED_MODULE_10__helpers__["a" /* createFilters */])(routerSnapshot.params);
            return _this.data.map(function (data) {
                var artists = Object.keys(data.artists).map(function (k) { return data.artists[k]; });
                var list = artists.map(function (artist) { return artist.slug; });
                var items = {};
                Object.assign.apply(Object, [items].concat(artists.map(function (artist) {
                    return (_a = {}, _a[artist.slug] = artist, _a);
                    var _a;
                })));
                return { type: __WEBPACK_IMPORTED_MODULE_3__actions_artists_actions__["a" /* ARTISTS_ACTION_TYPES */].ARTISTS_UPDATED, payload: { items: items, list: list } };
            });
        });
        this.navigateToArtistDetail = this.handleSecondaryNavigation('artists/:slug', function (routerSnapshot, state) {
            var slug = routerSnapshot.paramMap.get('slug');
            return _this.data.map(function (data) {
                var artist = data.artists[slug];
                return { type: __WEBPACK_IMPORTED_MODULE_3__actions_artists_actions__["a" /* ARTISTS_ACTION_TYPES */].ARTIST_UPDATED, payload: artist };
            });
        });
        this.navigateToArtistDetailGetAlbums = this.handleSecondaryNavigation('artists/:slug', function (routerSnapshot, state) {
            var slug = routerSnapshot.paramMap.get('slug');
            return _this.data.map(function (data) {
                var albums = Object.keys(data.albums[slug]).map(function (k) { return data.albums[slug][k]; });
                return new __WEBPACK_IMPORTED_MODULE_2__actions_albums_actions__["b" /* AlbumsOfArtistUpdatedAction */]({
                    artist: slug,
                    albums: albums,
                });
            });
        });
        this.albumGetSongs$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_1__actions_songs_actions__["a" /* SONGS_ACTION_TYPES */].SONGS_FROM_ALBUM)
            .mergeMap(function (action) {
            return _this.data.map(function (data) {
                var songs = data.songs[action.payload.album];
                return new __WEBPACK_IMPORTED_MODULE_1__actions_songs_actions__["d" /* SongsOfAlbumUpdatedAction */]({
                    album: action.payload.album,
                    songs: songs,
                });
            });
        });
        this.data = this.http.get('assets/data/database.json');
    }
    ArtistsStaticEffects.prototype.handleNavigation = function (segment, callback) {
        var nav = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__["a" /* ROUTER_NAVIGATION */]).
            filter(function (r) { return Object(__WEBPACK_IMPORTED_MODULE_10__helpers__["b" /* filterAllSegments */])(r, segment); }).
            map(__WEBPACK_IMPORTED_MODULE_10__helpers__["c" /* firstSegment */]);
        return nav.withLatestFrom(this.store).switchMap(function (a) { return callback(a[0], a[1]); }).catch(function (e) {
            console.log('Network error', e);
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].of();
        });
    };
    ArtistsStaticEffects.prototype.handleSecondaryNavigation = function (segment, callback) {
        var nav = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__["a" /* ROUTER_NAVIGATION */]).
            filter(function (r) { return Object(__WEBPACK_IMPORTED_MODULE_10__helpers__["b" /* filterAllSegments */])(r, segment); }).
            map(__WEBPACK_IMPORTED_MODULE_10__helpers__["d" /* secondSegment */]);
        return nav.withLatestFrom(this.store).switchMap(function (a) { return callback(a[0], a[1]); }).catch(function (e) {
            console.log('Network error', e);
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].of();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ArtistsStaticEffects.prototype, "navigateToArtists", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ArtistsStaticEffects.prototype, "navigateToArtistDetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ArtistsStaticEffects.prototype, "navigateToArtistDetailGetAlbums", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"])
    ], ArtistsStaticEffects.prototype, "albumGetSongs$", void 0);
    ArtistsStaticEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["a" /* Actions */]])
    ], ArtistsStaticEffects);
    return ArtistsStaticEffects;
}());



/***/ }),

/***/ "../../../../../src/app/store/effects/static/playlist.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistStaticEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_playlist_actions__ = __webpack_require__("../../../../../src/app/store/actions/playlist.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers__ = __webpack_require__("../../../../../src/app/store/effects/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PlaylistStaticEffects = /** @class */ (function () {
    function PlaylistStaticEffects(http, store, actions$) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.actions$ = actions$;
        this.navigateToPlaylists = this.handleNavigation('playlists/explore', function (routerSnapshot) {
            var filters = Object(__WEBPACK_IMPORTED_MODULE_11__helpers__["a" /* createFilters */])(routerSnapshot.params);
            return _this.data.map(function (data) {
                var playlists = Object.keys(data.playlists).map(function (k) { return data.playlists[k]; });
                return playlists.map(function (playlistSongs) {
                    var playlist = Object.keys(playlistSongs).map(function (k) {
                        var playlistWithKey = playlistSongs[k];
                        playlistWithKey.id = k;
                        return playlistWithKey;
                    });
                    return playlist;
                });
            }).switchMap(function (allPlaylists) {
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_10__actions_playlist_actions__["f" /* PlaylistGetAllAction */]({
                    playlists: [].concat.apply([], allPlaylists),
                }));
            });
        });
        this.data = this.http.get('assets/data/database.json');
    }
    PlaylistStaticEffects.prototype.handleNavigation = function (segment, callback) {
        var nav = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__["a" /* ROUTER_NAVIGATION */]).
            filter(function (r) { return Object(__WEBPACK_IMPORTED_MODULE_11__helpers__["b" /* filterAllSegments */])(r, segment); }).
            map(__WEBPACK_IMPORTED_MODULE_11__helpers__["c" /* firstSegment */]);
        return nav.withLatestFrom(this.store).switchMap(function (a) { return callback(a[0], a[1]); }).catch(function (e) {
            console.log('Network error', e);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of();
        });
    };
    PlaylistStaticEffects.prototype.handleSecondaryNavigation = function (segment, callback) {
        var nav = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__["a" /* ROUTER_NAVIGATION */]).
            filter(function (r) { return Object(__WEBPACK_IMPORTED_MODULE_11__helpers__["b" /* filterAllSegments */])(r, segment); }).
            map(__WEBPACK_IMPORTED_MODULE_11__helpers__["d" /* secondSegment */]);
        return nav.withLatestFrom(this.store).switchMap(function (a) { return callback(a[0], a[1]); }).catch(function (e) {
            console.log('Network error', e);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], PlaylistStaticEffects.prototype, "navigateToPlaylists", void 0);
    PlaylistStaticEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Actions */]])
    ], PlaylistStaticEffects);
    return PlaylistStaticEffects;
}());



/***/ }),

/***/ "../../../../../src/app/store/effects/static/user.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthStaticEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthStaticEffects = /** @class */ (function () {
    function AuthStaticEffects(actions$) {
        this.actions$ = actions$;
    }
    AuthStaticEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]])
    ], AuthStaticEffects);
    return AuthStaticEffects;
}());



/***/ }),

/***/ "../../../../../src/app/store/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers_user_reducer__ = __webpack_require__("../../../../../src/app/store/reducers/user.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_artists_reducer__ = __webpack_require__("../../../../../src/app/store/reducers/artists.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_songs_reducer__ = __webpack_require__("../../../../../src/app/store/reducers/songs.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_filters_reducer__ = __webpack_require__("../../../../../src/app/store/reducers/filters.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_albums_reducer__ = __webpack_require__("../../../../../src/app/store/reducers/albums.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_player_reducert__ = __webpack_require__("../../../../../src/app/store/reducers/player.reducert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers_playlists_reducer__ = __webpack_require__("../../../../../src/app/store/reducers/playlists.reducer.ts");








var initialState = {
    user: __WEBPACK_IMPORTED_MODULE_0__reducers_user_reducer__["a" /* userInitialState */],
    artists: __WEBPACK_IMPORTED_MODULE_1__reducers_artists_reducer__["a" /* artistsInitialState */],
    filters: __WEBPACK_IMPORTED_MODULE_3__reducers_filters_reducer__["a" /* filtersInitialState */],
    albums: __WEBPACK_IMPORTED_MODULE_4__reducers_albums_reducer__["a" /* albumsInitialState */],
    songs: __WEBPACK_IMPORTED_MODULE_2__reducers_songs_reducer__["a" /* songsInitialState */],
    player: __WEBPACK_IMPORTED_MODULE_5__reducers_player_reducert__["a" /* playerInitialState */],
    playlists: __WEBPACK_IMPORTED_MODULE_6__reducers_playlists_reducer__["a" /* playlistsInitialState */],
    userPlaylists: __WEBPACK_IMPORTED_MODULE_6__reducers_playlists_reducer__["c" /* userPlaylistsInitialState */],
    playlistFilters: __WEBPACK_IMPORTED_MODULE_3__reducers_filters_reducer__["c" /* playListfiltersInitialState */],
};
var reducers = {
    user: __WEBPACK_IMPORTED_MODULE_0__reducers_user_reducer__["b" /* userStoreReducer */],
    artists: __WEBPACK_IMPORTED_MODULE_1__reducers_artists_reducer__["b" /* artistsStoreReducer */],
    filters: __WEBPACK_IMPORTED_MODULE_3__reducers_filters_reducer__["b" /* filtersStoreReducer */],
    albums: __WEBPACK_IMPORTED_MODULE_4__reducers_albums_reducer__["b" /* albumsStoreReducer */],
    songs: __WEBPACK_IMPORTED_MODULE_2__reducers_songs_reducer__["b" /* songsStoreReducer */],
    player: __WEBPACK_IMPORTED_MODULE_5__reducers_player_reducert__["b" /* playerStoreReducer */],
    playlists: __WEBPACK_IMPORTED_MODULE_6__reducers_playlists_reducer__["b" /* playlistsStoreReducer */],
    userPlaylists: __WEBPACK_IMPORTED_MODULE_6__reducers_playlists_reducer__["d" /* userPlaylistsStoreReducer */],
    playlistFilters: __WEBPACK_IMPORTED_MODULE_3__reducers_filters_reducer__["d" /* playlistFiltersStoreReducer */],
};


/***/ }),

/***/ "../../../../../src/app/store/reducers/albums.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return albumsInitialState; });
/* harmony export (immutable) */ __webpack_exports__["b"] = albumsStoreReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_albums_actions__ = __webpack_require__("../../../../../src/app/store/actions/albums.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var albumsInitialState = {};
function albumsStoreReducer(state, action) {
    if (state === void 0) { state = albumsInitialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_albums_actions__["a" /* ALBUMS_ACTION_TYPES */].ALBUMS_OF_ARTIST_UPDATED:
            var albums = __assign({}, state);
            albums[action.payload.artist] = action.payload.albums;
            return albums;
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/store/reducers/artists.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return artistsInitialState; });
/* harmony export (immutable) */ __webpack_exports__["b"] = artistsStoreReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_artists_actions__ = __webpack_require__("../../../../../src/app/store/actions/artists.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var artistsInitialState = {
    items: {},
    list: [],
};
function artistsStoreReducer(state, action) {
    if (state === void 0) { state = artistsInitialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_artists_actions__["a" /* ARTISTS_ACTION_TYPES */].ARTISTS_UPDATED:
            return __assign({}, state, { items: action.payload.items, list: action.payload.list });
        case __WEBPACK_IMPORTED_MODULE_0__actions_artists_actions__["a" /* ARTISTS_ACTION_TYPES */].ARTIST_UPDATED:
            var artists = __assign({}, state);
            artists.items[action.payload.slug] = action.payload;
            // artists.list = [...artists.list, action.payload.slug];
            return __assign({}, artists);
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/store/reducers/filters.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filtersInitialState; });
/* harmony export (immutable) */ __webpack_exports__["b"] = filtersStoreReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return playListfiltersInitialState; });
/* harmony export (immutable) */ __webpack_exports__["d"] = playlistFiltersStoreReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_filters_actions__ = __webpack_require__("../../../../../src/app/store/actions/filters.actions.ts");

var filtersInitialState = { limit: 6 };
function filtersStoreReducer(state, action) {
    if (state === void 0) { state = filtersInitialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_filters_actions__["a" /* FILTERS_ACTION_TYPES */].FILTERS_UPDATED:
            return Object.assign(state, action.payload);
        default:
            return state;
    }
}
var playListfiltersInitialState = { limit: 9 };
function playlistFiltersStoreReducer(state, action) {
    if (state === void 0) { state = playListfiltersInitialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_filters_actions__["a" /* FILTERS_ACTION_TYPES */].PLAYLIST_FILTERS_UPDATED:
            return Object.assign(state, action.payload);
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/store/reducers/player.reducert.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return playerInitialState; });
/* harmony export (immutable) */ __webpack_exports__["b"] = playerStoreReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_player_actions__ = __webpack_require__("../../../../../src/app/store/actions/player.actions.ts");

var playerInitialState = {
    currentSong: null,
    songs: [],
};
function playerStoreReducer(state, action) {
    if (state === void 0) { state = playerInitialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_player_actions__["a" /* PLAYER_ACTION_TYPES */].PLAYER_ADD_SONG:
            var songsNew = [state.songs, action.payload.song];
            return Object.assign(state, { songs: songsNew });
        case __WEBPACK_IMPORTED_MODULE_0__actions_player_actions__["a" /* PLAYER_ACTION_TYPES */].PLAYER_ADD_SONGS:
            var songs = state.songs.concat(action.payload.songs);
            return Object.assign(state, { songs: songs });
        case __WEBPACK_IMPORTED_MODULE_0__actions_player_actions__["a" /* PLAYER_ACTION_TYPES */].PLAYER_PLAY_SONG:
            return Object.assign(state, { currentSong: action.payload.song });
        case __WEBPACK_IMPORTED_MODULE_0__actions_player_actions__["a" /* PLAYER_ACTION_TYPES */].PLAYER_REMOVE_SONG:
            var songsUpdated = state.songs.filter(function (song) {
                return song != action.payload.song;
            });
            return Object.assign(state, { songs: songsUpdated });
        case __WEBPACK_IMPORTED_MODULE_0__actions_player_actions__["a" /* PLAYER_ACTION_TYPES */].PLAYER_REMOVE_ALL_SONGS:
            var songsCleared = [];
            return Object.assign(state, { songs: songsCleared });
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/store/reducers/playlists.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return playlistsInitialState; });
/* harmony export (immutable) */ __webpack_exports__["b"] = playlistsStoreReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return userPlaylistsInitialState; });
/* harmony export (immutable) */ __webpack_exports__["d"] = userPlaylistsStoreReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_playlist_actions__ = __webpack_require__("../../../../../src/app/store/actions/playlist.actions.ts");

var playlistsInitialState = [];
function playlistsStoreReducer(state, action) {
    if (state === void 0) { state = playlistsInitialState; }
    var playlists = state.slice();
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_playlist_actions__["a" /* PLAYLIST_ACTION_TYPES */].PLAYLIST_GET_ALL:
            return action.payload.playlists;
        case __WEBPACK_IMPORTED_MODULE_0__actions_playlist_actions__["a" /* PLAYLIST_ACTION_TYPES */].PLAYLIST_REMOVE:
            delete playlists[action.payload.id];
            return playlists;
        default:
            return state;
    }
}
var userPlaylistsInitialState = [];
function userPlaylistsStoreReducer(state, action) {
    if (state === void 0) { state = userPlaylistsInitialState; }
    var playlists = state.slice();
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_playlist_actions__["a" /* PLAYLIST_ACTION_TYPES */].PLAYLIST_GET_ALL_OF_USER:
            return action.payload.playlists;
        case __WEBPACK_IMPORTED_MODULE_0__actions_playlist_actions__["a" /* PLAYLIST_ACTION_TYPES */].PLAYLIST_REMOVE:
            delete playlists[action.payload.id];
            return playlists;
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/store/reducers/songs.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return songsInitialState; });
/* harmony export (immutable) */ __webpack_exports__["b"] = songsStoreReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_songs_actions__ = __webpack_require__("../../../../../src/app/store/actions/songs.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var songsInitialState = {};
function songsStoreReducer(state, action) {
    if (state === void 0) { state = songsInitialState; }
    var songs = __assign({}, state);
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_songs_actions__["a" /* SONGS_ACTION_TYPES */].SONGS_OF_ALBUM_UPDATED:
            songs[action.payload.album] = action.payload.songs;
            return songs;
        case __WEBPACK_IMPORTED_MODULE_0__actions_songs_actions__["a" /* SONGS_ACTION_TYPES */].SONGS_ADD_TO_PLAYLIST:
            songs[action.payload.playlistId] = action.payload.songs;
            return songs;
        case __WEBPACK_IMPORTED_MODULE_0__actions_songs_actions__["a" /* SONGS_ACTION_TYPES */].SONG_ADD_TO_PLAYLIST:
            var fullPlaylist = void 0;
            if (songs[action.payload.playlist]) {
                var key = Object.keys(songs[action.payload.playlist]).length;
                fullPlaylist = Object.assign(songs[action.payload.playlist], (_a = {}, _a[key] = action.payload.song, _a));
            }
            else {
                fullPlaylist = songs[action.payload.playlist] = { 0: action.payload.song };
            }
            return Object.assign(songs, (_b = {}, _b[action.payload.playlist] = fullPlaylist, _b));
        default:
            return state;
    }
    var _a, _b;
}


/***/ }),

/***/ "../../../../../src/app/store/reducers/user.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userInitialState; });
/* harmony export (immutable) */ __webpack_exports__["b"] = userStoreReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_user_action__ = __webpack_require__("../../../../../src/app/store/actions/user.action.ts");

var userInitialState = {
    authenticated: false,
    username: '',
    user_image: '',
    uid: '',
};
function userStoreReducer(state, action) {
    if (state === void 0) { state = userInitialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_action__["b" /* USER_ACTION_TYPES */].AUTH:
            return Object.assign(state, {
                authenticated: true, username: action.payload.username,
                user_image: action.payload.user_image, uid: action.payload.uid
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_action__["b" /* USER_ACTION_TYPES */].UNAUTH:
            return Object.assign(state, { authenticated: false, username: '', user_image: '' });
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_action__["b" /* USER_ACTION_TYPES */].USER_SAVE:
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_action__["b" /* USER_ACTION_TYPES */].LOGIN:
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_action__["b" /* USER_ACTION_TYPES */].LOGIN_SUCCESS:
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_action__["b" /* USER_ACTION_TYPES */].LOGOUT:
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return staticData; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
};
var firebase = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
};
// set this to true to use static data from "data" folder
var staticData = true;


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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map