webpackJsonp(["artists.module"],{

/***/ "../../../../../src/app/artists/artist-album-list/artist-album-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"albums.length > 0; else noalbums\" class=\"albums\">\n  <div class=\"artist-album\" *ngFor=\"let album of albums;\">\n    <app-artists-album-playable [artist]=\"artist\" [album]=\"album\" (onAddSong)=\"addSongToPlaylist($event)\"></app-artists-album-playable>\n  </div>\n</div>\n<ng-template #noalbums>\n  <div class=\"empty\">Artist has no albums.</div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/artists/artist-album-list/artist-album-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Breakpoints*/\n/*\n* @file\n* Media breakpoints for mobile\n*/\n.albums {\n  margin-top: 2rem; }\n\n.empty {\n  color: #a8a8a8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artist-album-list/artist-album-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistAlbumListComponent; });
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

var ArtistAlbumListComponent = /** @class */ (function () {
    function ArtistAlbumListComponent() {
        this.onAddSong = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ArtistAlbumListComponent.prototype.ngOnInit = function () {
    };
    /**
     * Add a song to a playlist.
     *
     * @param song
     *  song to add .
     */
    ArtistAlbumListComponent.prototype.addSongToPlaylist = function (song) {
        this.onAddSong.emit(song);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ArtistAlbumListComponent.prototype, "albums", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistAlbumListComponent.prototype, "artist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ArtistAlbumListComponent.prototype, "onAddSong", void 0);
    ArtistAlbumListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artist-album-list',
            template: __webpack_require__("../../../../../src/app/artists/artist-album-list/artist-album-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artist-album-list/artist-album-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ArtistAlbumListComponent);
    return ArtistAlbumListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artist-country-fan-chart/artist-country-fan-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-wrapper\">\n  <ngx-charts-pie-chart [scheme]=\"colorScheme\" [results]=\"data\" [legend]=\"showLegend\" [explodeSlices]=\"explodeSlices\" [labels]=\"showLabels\"\n    [doughnut]=\"doughnut\" (select)=\"onSelect($event)\">\n  </ngx-charts-pie-chart>\n</div>"

/***/ }),

/***/ "../../../../../src/app/artists/artist-country-fan-chart/artist-country-fan-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .chart-legend {\n  display: none; }\n\n:host /deep/ .ngx-charts {\n  float: none; }\n\n.chart-wrapper {\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artist-country-fan-chart/artist-country-fan-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistCountryFanChartComponent; });
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

var ArtistCountryFanChartComponent = /** @class */ (function () {
    function ArtistCountryFanChartComponent() {
        this.data = [
            {
                'name': 'Germany',
                'value': 40632
            },
            {
                'name': 'United States',
                'value': 49737
            },
            {
                'name': 'France',
                'value': 36745
            },
            {
                'name': 'United Kingdom',
                'value': 36240
            },
            {
                'name': 'Spain',
                'value': 33000
            },
            {
                'name': 'Italy',
                'value': 35800
            }
        ];
        this.view = [400, 200];
        // options
        this.showLegend = false;
        this.colorScheme = {
            domain: ['#FDD835', '#3F51B5', '#009688', '#EF6C00', '#7aa3e5', '#AAAAAA']
        };
        // pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
    }
    ArtistCountryFanChartComponent.prototype.onSelect = function (event) {
    };
    ArtistCountryFanChartComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistCountryFanChartComponent.prototype, "data", void 0);
    ArtistCountryFanChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artist-country-fan-chart',
            template: __webpack_require__("../../../../../src/app/artists/artist-country-fan-chart/artist-country-fan-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artist-country-fan-chart/artist-country-fan-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ArtistCountryFanChartComponent);
    return ArtistCountryFanChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artist-detail/artist-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"artist\" *ngIf=\"artist\">\n  <div class=\"artist-banner\">\n    <div class=\"arist-banner-name\">\n      <h1>{{artist.name}}</h1>\n      <div class=\"about\">{{artist.about}}</div>\n      <a [color]=\"'primary'\" mat-button mat-raised-button [routerLink]=\"'/'\">\n        <mat-icon>play_circle_outline</mat-icon> Play songs</a>\n    </div>\n    <img [src]=\"artist.image\" [alt]=\"artist.name\" [title]=\"artist.name\" />\n  </div>\n  <div class=\"artist-content\">\n    <div class=\"albums\">\n      <h3>\n        <mat-icon color=\"accent\">album</mat-icon> {{artist.name}} Albums</h3>\n      <app-artist-album-list [artist]=\"artist\" [albums]=\"albums | async\" (onAddSong)=\"addSongToPlaylist($event)\"></app-artist-album-list>\n    </div>\n    <div class=\"side-blocks\">\n      <div class=\"block\">\n        <mat-card>\n          <mat-card-header>\n            <h3 class=\"title\">\n              <mat-icon color=\"primary\">people</mat-icon> Following this artist\n            </h3>\n          </mat-card-header>\n          <mat-card-content>\n            <ul class=\"list-followers\">\n              <li>\n                <img src=\"assets/images/user.png\" alt=\"\" />\n              </li>\n              <li>\n                <img src=\"assets/images/team1.jpg\" alt=\"\" />\n              </li>\n              <li>\n                <img src=\"assets/images/team2.jpg\" alt=\"\" />\n              </li>\n              <li>\n                <img src=\"assets/images/team3.jpg\" alt=\"\" />\n              </li>\n              <li>\n                <img src=\"assets/images/team4.jpg\" alt=\"\" />\n              </li>\n              <li>\n                <img src=\"assets/images/team5.jpg\" alt=\"\" />\n              </li>\n              <li>\n                <img src=\"assets/images/team6.jpg\" alt=\"\" />\n              </li>\n              <li>\n                <img src=\"assets/images/team3.jpg\" alt=\"\" />\n              </li>\n              <li>\n                <img src=\"assets/images/team4.jpg\" alt=\"\" />\n              </li>\n              <li>\n                <img src=\"assets/images/team5.jpg\" alt=\"\" />\n              </li>\n            </ul>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div class=\"block\">\n        <mat-card>\n          <mat-card-header>\n            <h3 class=\"title\">\n              <mat-icon color=\"primary\">attach_money</mat-icon> Sales / Country\n            </h3>\n          </mat-card-header>\n          <mat-card-content>\n            <app-artist-country-fan-chart></app-artist-country-fan-chart>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div class=\"block\">\n        <mat-card>\n          <mat-card-header>\n            <h3 class=\"title\">\n              <mat-icon color=\"primary\">done_all</mat-icon> Categories\n            </h3>\n          </mat-card-header>\n          <mat-card-content class=\"categories-list\">\n            <mat-chip-list>\n              <mat-chip>Jazz</mat-chip>\n              <mat-chip>House</mat-chip>\n              <mat-chip>Country</mat-chip>\n              <mat-chip>Reggae</mat-chip>\n              <mat-chip>House / Jazz</mat-chip>\n              <mat-chip>Hip Hop</mat-chip>\n              <mat-chip>Cascaton</mat-chip>\n              <mat-chip>Reggaton</mat-chip>\n            </mat-chip-list>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/artists/artist-detail/artist-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Breakpoints*/\n/*\n* @file\n* Media breakpoints for mobile\n*/\n.artist {\n  margin: -2rem; }\n\n.artist-banner {\n  position: relative;\n  margin-bottom: 2rem;\n  height: 400px;\n  width: 100%;\n  overflow: hidden;\n  position: relative; }\n  .artist-banner:before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(to top, transparent 0, transparent 0%, rgba(0, 0, 0, 0.4) 30%);\n    z-index: 1; }\n  .artist-banner img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    position: absolute;\n    top: -100%;\n    bottom: -100%;\n    left: -100%;\n    right: -100%;\n    margin: auto;\n    min-height: 0;\n    height: 100%;\n    min-width: 100%;\n    width: auto;\n    max-width: 100%; }\n\n.arist-banner-name {\n  position: absolute;\n  bottom: 30%;\n  text-align: center;\n  width: 80%;\n  left: 10%;\n  color: #fff;\n  z-index: 1; }\n\n.artist-content {\n  margin: 2rem; }\n\n.about {\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 2rem;\n  line-height: 1.8rem;\n  font-size: 1.1rem; }\n\n@media (min-width: 768px) {\n  .artist-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; } }\n\n@media (min-width: 768px) {\n  .artist-content .albums {\n    -ms-flex-preferred-size: 60%;\n        flex-basis: 60%; } }\n\n@media (min-width: 768px) {\n  .artist-content .side-blocks {\n    margin-top: 72px;\n    -ms-flex-preferred-size: 38%;\n        flex-basis: 38%; } }\n\n.list-followers {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  list-style: none;\n  padding-left: 0; }\n  .list-followers li {\n    margin-left: 5px;\n    margin-right: 5px; }\n  .list-followers img {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%; }\n\n.block {\n  margin-bottom: 30px; }\n  .block .title {\n    margin-top: 0;\n    margin-bottom: 30px; }\n\n.categories-list .mat-chip {\n  margin-left: 10px;\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artist-detail/artist-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_playlist_add_song_playlist_add_song_component__ = __webpack_require__("../../../../../src/app/components/playlist-add-song/playlist-add-song.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArtistDetailComponent = /** @class */ (function () {
    function ArtistDetailComponent(route, store, dialog) {
        var _this = this;
        this.route = route;
        this.store = store;
        this.dialog = dialog;
        this.artistSubscription = store.select('artists').subscribe(function (artists) {
            _this.slug = route.snapshot.paramMap.get('slug');
            _this.artist = artists.items[_this.slug];
        });
        this.albums = store.select('albums').map(function (albums) {
            return typeof albums[_this.slug] !== 'undefined' ? albums[_this.slug] : [];
        });
    }
    ArtistDetailComponent.prototype.ngOnInit = function () {
    };
    ArtistDetailComponent.prototype.ngOnDestroy = function () {
        this.artistSubscription.unsubscribe();
    };
    /**
     * Add song to playlist.
     *
     * @param song
     *  song to add.
     */
    ArtistDetailComponent.prototype.addSongToPlaylist = function (song) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__components_playlist_add_song_playlist_add_song_component__["a" /* PlaylistAddSongComponent */], {
            width: '350px',
            data: {
                song: song,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
            }
        });
    };
    ArtistDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-artist-detail',
            template: __webpack_require__("../../../../../src/app/artists/artist-detail/artist-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artist-detail/artist-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDialog */]])
    ], ArtistDetailComponent);
    return ArtistDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artist-list/artist-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"artist-list\" infinite-scroll [infiniteScrollContainer]=\"'.mat-sidenav-content'\" [infiniteScrollDistance]=\"2\" [immediateCheck]=\"true\" (scrolled)=\"incrementListSize()\">\n  <div class=\"artist-item\" *ngFor=\"let artist of artists | async;\">\n    <app-card [image]=\"artist.image\" [imageAlt]=\"artist.name\" [link]=\"['/artists', artist.slug]\" [linkText]=\"'See Artist'\">\n      <div class=\"title\">\n        <a [routerLink]=\"['/artists', artist.slug]\" class=\"artist-name-link\">{{artist.name}}</a>\n      </div>\n      <div class=\"subtitle\">\n        <div>\n          <mat-chip-list>\n            <mat-chip>Punk rock</mat-chip>\n            <mat-chip>Blues</mat-chip>\n          </mat-chip-list>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/artists/artist-list/artist-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Breakpoints*/\n/*\n* @file\n* Media breakpoints for mobile\n*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.artist-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column; }\n  @media (min-width: 768px) {\n    .artist-list {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row;\n              flex-flow: row;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; } }\n\n.artist-item {\n  margin-top: 15px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  @media (min-width: 768px) {\n    .artist-item {\n      margin-top: 40px;\n      -webkit-box-flex: inherit;\n          -ms-flex: inherit;\n              flex: inherit;\n      width: 32%;\n      margin-top: 1%;\n      margin-bottom: 1%;\n      margin-right: 2%; }\n      .artist-item:nth-child(3n) {\n        margin-right: 0; } }\n\n.artist-name-link {\n  text-decoration: none;\n  color: currentColor; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artist-list/artist-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistListComponent; });
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



var ArtistListComponent = /** @class */ (function () {
    function ArtistListComponent(store, router) {
        this.store = store;
        this.router = router;
        this.limit = 6;
        this.filters = store.select('filters');
        this.artists = store.select('artists').map(function (artists) {
            return artists.list.map(function (n) { return artists.items[n]; });
        });
    }
    ArtistListComponent.prototype.ngOnInit = function () {
    };
    ArtistListComponent.prototype.handleFiltersChange = function (filters) {
        this.router.navigate(['/artists', this.createParams(filters)]);
    };
    ArtistListComponent.prototype.createParams = function (filters) {
        var r = {};
        if (filters.limit) {
            r.limit = filters.limit;
        }
        return r;
    };
    ArtistListComponent.prototype.incrementListSize = function () {
        this.handleFiltersChange({
            limit: this.limit * 2
        });
    };
    ArtistListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-artist-list',
            template: __webpack_require__("../../../../../src/app/artists/artist-list/artist-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artist-list/artist-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* Router */]])
    ], ArtistListComponent);
    return ArtistListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artists-album-playable/artists-album-playable.component.html":
/***/ (function(module, exports) {

module.exports = "<app-playable-list [image]=\"album.image\" [title]=\"album.name\" [info]=\"info\" [songs]=\"songs\" (onPlayall)=\"playAlbum()\" (onPlayItem)=\"playSong($event)\">\n  <div class=\"play-actions\">\n    <mat-icon class=\"mat-24\" aria-label=\"Share\">share</mat-icon>\n    <mat-icon class=\"mat-24\" aria-label=\"like\">settings_backup_restore</mat-icon>\n    <mat-icon class=\"mat-24\" aria-label=\"like\">favorite_border</mat-icon>\n  </div>\n  <ng-template let-song>\n    <button class=\"add-to-playlist-button\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n      <mat-icon>more_vert</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button *ngIf=\"(user | async).authenticated\" mat-menu-item (click)=\"addSongToPlaylist(song)\">\n        <mat-icon>playlist_add</mat-icon>\n        <span>Add to playlist</span>\n      </button>\n      <button mat-menu-item>\n        <mat-icon>tap_and_play</mat-icon>\n        <span>Play on device</span>\n      </button>\n    </mat-menu>\n  </ng-template>\n</app-playable-list>\n"

/***/ }),

/***/ "../../../../../src/app/artists/artists-album-playable/artists-album-playable.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artists-album-playable/artists-album-playable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistsAlbumPlayableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_artists_album_service__ = __webpack_require__("../../../../../src/app/artists/services/artists-album.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistsAlbumPlayableComponent = /** @class */ (function () {
    function ArtistsAlbumPlayableComponent(store, albumService) {
        this.store = store;
        this.albumService = albumService;
        this.onAddSong = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    ArtistsAlbumPlayableComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Start fetching songs.
        this.albumService.getAlbumSongs(this.album.id);
        this.user = this.store.select('user');
        // get these albums songs from the store.
        this.store.select('songs').filter(function (s) {
            return s[_this.album.id];
        }).map(function (a) {
            return a[_this.album.id];
        }).subscribe(function (s) {
            _this.songs = s;
        });
        this.info = "Album of " + this.album.name;
    };
    /**
     * Handler to play a song.
     */
    ArtistsAlbumPlayableComponent.prototype.playSong = function (song) {
        this.albumService.playSong(song);
    };
    /**
     * Play this album
     */
    ArtistsAlbumPlayableComponent.prototype.playAlbum = function () {
        this.albumService.playAlbum(this.album, this.songs);
    };
    /**
     * Add song to a playlist.
     */
    ArtistsAlbumPlayableComponent.prototype.addSongToPlaylist = function (song) {
        this.onAddSong.emit(song);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistsAlbumPlayableComponent.prototype, "album", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ArtistsAlbumPlayableComponent.prototype, "artist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ArtistsAlbumPlayableComponent.prototype, "onAddSong", void 0);
    ArtistsAlbumPlayableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-artists-album-playable',
            template: __webpack_require__("../../../../../src/app/artists/artists-album-playable/artists-album-playable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artists-album-playable/artists-album-playable.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_2__services_artists_album_service__["a" /* ArtistsAlbumService */]])
    ], ArtistsAlbumPlayableComponent);
    return ArtistsAlbumPlayableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artists.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsModule", function() { return ArtistsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_artists_album_service__ = __webpack_require__("../../../../../src/app/artists/services/artists-album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__artist_list_artist_list_component__ = __webpack_require__("../../../../../src/app/artists/artist-list/artist-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__artist_detail_artist_detail_component__ = __webpack_require__("../../../../../src/app/artists/artist-detail/artist-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__artist_album_list_artist_album_list_component__ = __webpack_require__("../../../../../src/app/artists/artist-album-list/artist-album-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__artists_album_playable_artists_album_playable_component__ = __webpack_require__("../../../../../src/app/artists/artists-album-playable/artists-album-playable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__artist_country_fan_chart_artist_country_fan_chart_component__ = __webpack_require__("../../../../../src/app/artists/artist-country-fan-chart/artist-country-fan-chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__artist_list_artist_list_component__["a" /* ArtistListComponent */], pathMatch: 'full' },
    { path: ':slug', component: __WEBPACK_IMPORTED_MODULE_6__artist_detail_artist_detail_component__["a" /* ArtistDetailComponent */], pathMatch: 'full' },
];
var ArtistsModule = /** @class */ (function () {
    function ArtistsModule() {
    }
    ArtistsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(routes),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__artist_list_artist_list_component__["a" /* ArtistListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__artist_detail_artist_detail_component__["a" /* ArtistDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__artist_album_list_artist_album_list_component__["a" /* ArtistAlbumListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__artists_album_playable_artists_album_playable_component__["a" /* ArtistsAlbumPlayableComponent */],
                __WEBPACK_IMPORTED_MODULE_9__artist_country_fan_chart_artist_country_fan_chart_component__["a" /* ArtistCountryFanChartComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_artists_album_service__["a" /* ArtistsAlbumService */]]
        })
    ], ArtistsModule);
    return ArtistsModule;
}());



/***/ }),

/***/ "../../../../../src/app/artists/services/artists-album.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistsAlbumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_actions_songs_actions__ = __webpack_require__("../../../../../src/app/store/actions/songs.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_player_player_service__ = __webpack_require__("../../../../../src/app/shared/services/player/player.service.ts");
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




var ArtistsAlbumService = /** @class */ (function () {
    function ArtistsAlbumService(store, player) {
        this.store = store;
        this.player = player;
    }
    /**
     * Get all songs from an album.
     *
     * @param albumId
     *  the album identifier.
     */
    ArtistsAlbumService.prototype.getAlbumSongs = function (albumId) {
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_0__store_actions_songs_actions__["a" /* SONGS_ACTION_TYPES */].SONGS_FROM_ALBUM,
            payload: {
                album: albumId
            }
        });
    };
    /**
     * Play a song from an album.
     *
     * @param song
     *  the song to play.
     */
    ArtistsAlbumService.prototype.playSong = function (song) {
        this.player.createPlayListOfSong(song);
    };
    /**
     * Play an album entirely
     */
    ArtistsAlbumService.prototype.playAlbum = function (album, songs) {
        this.player.createPlayListOfListOfSongs(songs);
    };
    ArtistsAlbumService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_2__shared_services_player_player_service__["a" /* PlayerService */]])
    ], ArtistsAlbumService);
    return ArtistsAlbumService;
}());



/***/ })

});
//# sourceMappingURL=artists.module.chunk.js.map