webpackJsonp(["playlist.module"],{

/***/ "../../../../../src/app/playlist/playlist-detail/playlist-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"playlist\" *ngIf=\"playlist$ | async as playlist\">\n  <div class=\"playlist-banner\">\n    <div class=\"arist-banner-name\">\n      <h1>{{playlist.name}}</h1>\n      <br/>\n      <a [color]=\"'primary'\" mat-button mat-raised-button [routerLink]=\"'/'\">\n        <mat-icon>play_circle_outline</mat-icon> Play songs</a>\n    </div>\n    <img [src]=\"playlist.image\" [alt]=\"playlist.name\" [title]=\"playlist.name\" />\n  </div>\n  <div class=\"playlist-content\">\n    <div class=\"playlist-songs\">\n      <app-playlist-songs-playable [playlist]=\"playlist$ | async\" [songs]=\"songs$ | async\" (onPlayAll)=\"playAllSongs($event)\"\n        (onPlaySong)=\"playSong($event)\"></app-playlist-songs-playable>\n    </div>\n    <div class=\"side-blocks\">\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/playlist/playlist-detail/playlist-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Breakpoints*/\n/*\n* @file\n* Media breakpoints for mobile\n*/\n.playlist {\n  margin: -2rem; }\n\n.playlist-banner {\n  position: relative;\n  margin-bottom: 2rem;\n  height: 400px;\n  width: 100%;\n  overflow: hidden;\n  position: relative; }\n  .playlist-banner:before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(to top, transparent 0, transparent 0%, rgba(0, 0, 0, 0.4) 30%);\n    z-index: 1; }\n  .playlist-banner img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    position: absolute;\n    top: -100%;\n    bottom: -100%;\n    left: -100%;\n    right: -100%;\n    margin: auto;\n    min-height: 0;\n    height: 100%;\n    min-width: 100%;\n    width: auto;\n    max-width: 100%; }\n\n.arist-banner-name {\n  position: absolute;\n  bottom: 30%;\n  text-align: center;\n  width: 80%;\n  left: 10%;\n  color: #fff;\n  z-index: 1; }\n\n.playlist-content {\n  margin: 2rem; }\n\n.about {\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 2rem;\n  line-height: 1.8rem;\n  font-size: 1.1rem; }\n\n@media (min-width: 768px) {\n  .playlist-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; } }\n\n@media (min-width: 768px) {\n  .playlist-content .playlist-songs {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/playlist/playlist-detail/playlist-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_playlist_playlist_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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




var PlaylistDetailComponent = /** @class */ (function () {
    function PlaylistDetailComponent(store, route, playlistService) {
        var _this = this;
        this.store = store;
        this.route = route;
        this.playlistService = playlistService;
        this.id = route.snapshot.paramMap.get('id');
        this.playlist$ = this.store.select('playlists').switchMap(function (playlist) {
            return playlist.filter(function (playlistObj) { return playlistObj.id === _this.id; });
        });
        // Get songs from store.
        this.songs$ = this.store.select('songs').map(function (songs) {
            return typeof songs[_this.id] !== 'undefined' ? songs[_this.id] : [];
        });
    }
    PlaylistDetailComponent.prototype.ngOnInit = function () {
        this.getPlaylistSongs(this.id);
    };
    /**
     * Get all songs for this playlist.
     *
     * @param id
     *  the id of the playlist.
     */
    PlaylistDetailComponent.prototype.getPlaylistSongs = function (id) {
        // Call the playlistService.
        this.playlistService.getPlaylistSongs(id);
    };
    /**
     * Play a song from the playlist.
     *
     * @param song
     *  the song to play.
     */
    PlaylistDetailComponent.prototype.playSong = function (song) {
        this.playlistService.playSong(song);
    };
    /**
     * Add multiple songs to playlist.
     *
     * @param songs
     *  The songs to add.
     */
    PlaylistDetailComponent.prototype.playAllSongs = function (songs) {
        this.playlistService.playSongs(songs);
    };
    PlaylistDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-playlist-detail',
            template: __webpack_require__("../../../../../src/app/playlist/playlist-detail/playlist-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/playlist/playlist-detail/playlist-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__shared_services_playlist_playlist_service__["a" /* PlaylistService */]])
    ], PlaylistDetailComponent);
    return PlaylistDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/playlist/playlist-list/playlist-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Explore playlists\n</h1>\n<div class=\"playlist-list\" infinite-scroll [infiniteScrollContainer]=\"'.mat-sidenav-content'\" [infiniteScrollDistance]=\"2\"\n  [immediateCheck]=\"true\" (scrolled)=\"incrementListSize()\">\n  <div class=\"playlist-item\" *ngFor=\"let playlist of playlists$ | async;\">\n    <app-card [image]=\"playlist.image\" [imageAlt]=\"playlist.name\" [link]=\"['/playlists/detail', playlist.id]\" [linkText]=\"'See Playlist'\">\n      <div class=\"title\">\n        <a [routerLink]=\"['/playlists/detail', playlist.id]\" class=\"playlist-name-link\">{{playlist.name}}</a>\n      </div>\n      <div class=\"subtitle\">\n        <div>\n          Playlist by {{ playlist.owner }}\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/playlist/playlist-list/playlist-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Breakpoints*/\n/*\n* @file\n* Media breakpoints for mobile\n*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.playlist-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column; }\n  @media (min-width: 768px) {\n    .playlist-list {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row;\n              flex-flow: row;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; } }\n\n.playlist-item {\n  margin-top: 15px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  @media (min-width: 768px) {\n    .playlist-item {\n      margin-top: 40px;\n      -webkit-box-flex: inherit;\n          -ms-flex: inherit;\n              flex: inherit;\n      width: 32%;\n      margin-top: 1%;\n      margin-bottom: 1%;\n      margin-right: 2%; }\n      .playlist-item:nth-child(3n) {\n        margin-right: 0; } }\n\n.playlist-name-link {\n  text-decoration: none;\n  color: currentColor; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/playlist/playlist-list/playlist-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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



var PlaylistListComponent = /** @class */ (function () {
    function PlaylistListComponent(store, router) {
        this.store = store;
        this.router = router;
        this.limit = 9;
        this.playlistFilters = store.select('filters');
        this.playlists$ = store.select('playlists');
    }
    PlaylistListComponent.prototype.ngOnInit = function () {
    };
    PlaylistListComponent.prototype.handleFiltersChange = function (filters) {
        this.router.navigate(['/playlists/explore', this.createParams(filters)]);
    };
    PlaylistListComponent.prototype.createParams = function (filters) {
        var r = {};
        if (filters.limit) {
            r.limit = filters.limit;
        }
        return r;
    };
    PlaylistListComponent.prototype.incrementListSize = function () {
        console.log('Scrolled');
        this.handleFiltersChange({
            limit: this.limit * 2
        });
    };
    PlaylistListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-playlist-list',
            template: __webpack_require__("../../../../../src/app/playlist/playlist-list/playlist-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/playlist/playlist-list/playlist-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* Router */]])
    ], PlaylistListComponent);
    return PlaylistListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/playlist/playlist-me/playlist-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(playlists$ | async)?.length; else elseBlock\">\n  <h1>\n    My playlists\n  </h1>\n  <div class=\"playlist-list\">\n    <div class=\"playlist-item\" *ngFor=\"let playlist of playlists$ | async;\">\n      <app-card [image]=\"playlist.image\" [imageAlt]=\"playlist.name\" [link]=\"['/playlists/detail', playlist.id]\" [linkText]=\"'See Playlist'\">\n        <div class=\"title\">\n          <a [routerLink]=\"['/playlists/detail', playlist.id]\" class=\"playlist-name-link\">{{playlist.name}}</a>\n        </div>\n        <div class=\"subtitle\">\n          <div>\n            Playlist by {{ playlist.owner }}\n          </div>\n        </div>\n      </app-card>\n    </div>\n  </div>\n</div>\n<ng-template #elseBlock>\n  <div class=\"empty\">\n    <mat-icon class=\"empty-icon\" color=\"primary\">playlist_add</mat-icon>\n    <h3 class=\"empty-text\">\n      Your have no playlists. Login and Start browing artists and albums and add them to your playlist.\n    </h3>\n    <a mat-button mat-raised-button [routerLink]=\"'/artists'\" color=\"primary\">Browse artists</a>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/playlist/playlist-me/playlist-me.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Breakpoints*/\n/*\n* @file\n* Media breakpoints for mobile\n*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.playlist-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column; }\n  @media (min-width: 768px) {\n    .playlist-list {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row;\n              flex-flow: row;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; } }\n\n.playlist-item {\n  margin-top: 15px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  @media (min-width: 768px) {\n    .playlist-item {\n      margin-top: 40px;\n      -webkit-box-flex: inherit;\n          -ms-flex: inherit;\n              flex: inherit;\n      width: 32%;\n      margin-top: 1%;\n      margin-bottom: 1%;\n      margin-right: 2%; }\n      .playlist-item:nth-child(3n) {\n        margin-right: 0; } }\n\n.playlist-name-link {\n  text-decoration: none;\n  color: currentColor; }\n\n.empty {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  @media (min-width: 768px) {\n    .empty {\n      margin-top: 15vh; } }\n\n.empty-icon {\n  font-size: 100px;\n  height: 100px;\n  width: 100px; }\n\n.empty-text {\n  text-align: center;\n  line-height: 2rem; }\n  @media (min-width: 768px) {\n    .empty-text {\n      max-width: 40%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/playlist/playlist-me/playlist-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistMeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaylistMeComponent = /** @class */ (function () {
    function PlaylistMeComponent(store) {
        this.store = store;
        this.playlists$ = store.select('userPlaylists');
    }
    PlaylistMeComponent.prototype.ngOnInit = function () {
    };
    PlaylistMeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-playlist-me',
            template: __webpack_require__("../../../../../src/app/playlist/playlist-me/playlist-me.component.html"),
            styles: [__webpack_require__("../../../../../src/app/playlist/playlist-me/playlist-me.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */]])
    ], PlaylistMeComponent);
    return PlaylistMeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/playlist/playlist-songs-playable/playlist-songs-playable.component.html":
/***/ (function(module, exports) {

module.exports = "<app-playable-list [image]=\"playlist.image\" [title]=\"playlist.name\" [info]=\"info\" [songs]=\"songs\" (onPlayall)=\"playAll()\"\n  (onPlayItem)=\"playSong($event)\">\n  <div class=\"play-actions\">\n    <mat-icon class=\"mat-24\" aria-label=\"Share\">share</mat-icon>\n    <mat-icon class=\"mat-24\" aria-label=\"like\">settings_backup_restore</mat-icon>\n    <mat-icon class=\"mat-24\" aria-label=\"like\">favorite_border</mat-icon>\n  </div>\n  <ng-template let-song>\n    <button class=\"add-to-playlist-button\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n      <mat-icon>more_vert</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item (click)=\"removeFromPlaylist(song)\">\n        <mat-icon>delete_sweep</mat-icon>\n        <span>Remove from playlist</span>\n      </button>\n    </mat-menu>\n  </ng-template>\n</app-playable-list>\n"

/***/ }),

/***/ "../../../../../src/app/playlist/playlist-songs-playable/playlist-songs-playable.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/playlist/playlist-songs-playable/playlist-songs-playable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistSongsPlayableComponent; });
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

var PlaylistSongsPlayableComponent = /** @class */ (function () {
    function PlaylistSongsPlayableComponent() {
        this.onPlaySong = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onPlayAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PlaylistSongsPlayableComponent.prototype.ngOnInit = function () {
        this.info = "Playlist by " + this.playlist.owner;
    };
    /**
     * Play all songs of the playlist.
     */
    PlaylistSongsPlayableComponent.prototype.playAll = function () {
        this.onPlayAll.emit(this.songs);
    };
    /**
     * Play a song.
     *
     * @param song
     *  Song to play.
     */
    PlaylistSongsPlayableComponent.prototype.playSong = function (song) {
        this.onPlaySong.emit(song);
    };
    /**
     * Remove song from playlist.
     *
     * @param song
     *  The song to remove.
     */
    PlaylistSongsPlayableComponent.prototype.removeFromPlaylist = function (song) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PlaylistSongsPlayableComponent.prototype, "playlist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PlaylistSongsPlayableComponent.prototype, "songs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PlaylistSongsPlayableComponent.prototype, "onPlaySong", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PlaylistSongsPlayableComponent.prototype, "onPlayAll", void 0);
    PlaylistSongsPlayableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-playlist-songs-playable',
            template: __webpack_require__("../../../../../src/app/playlist/playlist-songs-playable/playlist-songs-playable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/playlist/playlist-songs-playable/playlist-songs-playable.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlaylistSongsPlayableComponent);
    return PlaylistSongsPlayableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/playlist/playlist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistModule", function() { return PlaylistModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__playlist_list_playlist_list_component__ = __webpack_require__("../../../../../src/app/playlist/playlist-list/playlist-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__playlist_detail_playlist_detail_component__ = __webpack_require__("../../../../../src/app/playlist/playlist-detail/playlist-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__playlist_songs_playable_playlist_songs_playable_component__ = __webpack_require__("../../../../../src/app/playlist/playlist-songs-playable/playlist-songs-playable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__playlist_me_playlist_me_component__ = __webpack_require__("../../../../../src/app/playlist/playlist-me/playlist-me.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'explore', },
    { path: 'explore', component: __WEBPACK_IMPORTED_MODULE_4__playlist_list_playlist_list_component__["a" /* PlaylistListComponent */], },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_5__playlist_detail_playlist_detail_component__["a" /* PlaylistDetailComponent */], },
    { path: 'me', component: __WEBPACK_IMPORTED_MODULE_7__playlist_me_playlist_me_component__["a" /* PlaylistMeComponent */] },
];
var PlaylistModule = /** @class */ (function () {
    function PlaylistModule() {
    }
    PlaylistModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* RouterModule */].forChild(routes),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__playlist_list_playlist_list_component__["a" /* PlaylistListComponent */], __WEBPACK_IMPORTED_MODULE_5__playlist_detail_playlist_detail_component__["a" /* PlaylistDetailComponent */], __WEBPACK_IMPORTED_MODULE_6__playlist_songs_playable_playlist_songs_playable_component__["a" /* PlaylistSongsPlayableComponent */], __WEBPACK_IMPORTED_MODULE_7__playlist_me_playlist_me_component__["a" /* PlaylistMeComponent */]]
        })
    ], PlaylistModule);
    return PlaylistModule;
}());



/***/ })

});
//# sourceMappingURL=playlist.module.chunk.js.map