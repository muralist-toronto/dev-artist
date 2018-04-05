webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./uploads/shared/upload.module": [
		"../../../../../src/app/uploads/shared/upload.module.ts",
		"upload.module"
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
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_user_login_user_login_component__ = __webpack_require__("../../../../../src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_items_list_items_list_component__ = __webpack_require__("../../../../../src/app/items/items-list/items-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/ui/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_my_pieces_my_pieces_component__ = __webpack_require__("../../../../../src/app/ui/my-pieces/my-pieces.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_my_pieces_my_piece_my_piece_component__ = __webpack_require__("../../../../../src/app/ui/my-pieces/my-piece/my-piece.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ui_my_pieces_new_piece_new_piece_component__ = __webpack_require__("../../../../../src/app/ui/my-pieces/new-piece/new-piece.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ui_purchase_requests_purchase_requests_component__ = __webpack_require__("../../../../../src/app/ui/purchase-requests/purchase-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ui_my_pieces_new_piece_details_new_piece_details_component__ = __webpack_require__("../../../../../src/app/ui/my-pieces/new-piece-details/new-piece-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ui_igupload_igupload_component__ = __webpack_require__("../../../../../src/app/ui/igupload/igupload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ui_settings_settings_component__ = __webpack_require__("../../../../../src/app/ui/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: '/my-pieces', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__ui_user_login_user_login_component__["a" /* UserLoginComponent */], },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__ui_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_12__ui_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]] },
    { path: 'my-pieces', component: __WEBPACK_IMPORTED_MODULE_6__ui_my_pieces_my_pieces_component__["a" /* MyPiecesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]] },
    { path: 'my-piece/:pieceId', component: __WEBPACK_IMPORTED_MODULE_7__ui_my_pieces_my_piece_my_piece_component__["a" /* MyPieceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]] },
    { path: 'ig-upload', component: __WEBPACK_IMPORTED_MODULE_11__ui_igupload_igupload_component__["a" /* IGUploadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]] },
    { path: 'new-piece', component: __WEBPACK_IMPORTED_MODULE_8__ui_my_pieces_new_piece_new_piece_component__["a" /* NewPieceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]] },
    { path: 'new-piece-details', component: __WEBPACK_IMPORTED_MODULE_10__ui_my_pieces_new_piece_details_new_piece_details_component__["a" /* NewPieceDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]] },
    { path: 'purchase-requests', component: __WEBPACK_IMPORTED_MODULE_9__ui_purchase_requests_purchase_requests_component__["a" /* PurchaseRequestsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]] },
    { path: 'items', component: __WEBPACK_IMPORTED_MODULE_4__items_items_list_items_list_component__["a" /* ItemsListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]] },
    { path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule' }
    // { path: 'uploads', component: UploadsListComponent, canActivate: [AuthGuard]},
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<top-nav></top-nav>\n\n  <div class=\"content columns\">\n\n    <aside class=\"column is-10 is-offset-1\">\n      <router-outlet></router-outlet>\n    </aside>\n\n    <aside class=\"column is-1\">\n    </aside>\n\n  </div>\n\n\n<footer-nav></footer-nav>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'FireStarter app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__items_shared_item_module__ = __webpack_require__("../../../../../src/app/items/shared/item.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ui_shared_ui_module__ = __webpack_require__("../../../../../src/app/ui/shared/ui.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





///// Start FireStarter
// DEV

// PROD
// import { environment } from '../environments/environment.prod';

var firebaseConfig = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebaseConfig;
var firebaseURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebaseURL;
// Core

// Shared/Widget

// Feature Modules


///// End FireStarter
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_9__items_shared_item_module__["a" /* ItemModule */],
                __WEBPACK_IMPORTED_MODULE_10__ui_shared_ui_module__["a" /* UiModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = (function () {
    function AuthGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.afAuth.authState
            .take(1)
            .map(function (user) { return !!user; })
            .do(function (loggedIn) {
            if (!loggedIn) {
                console.log('access denied');
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(afAuth, db, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.authState = null;
        this.logoutFromLogin = false;
        this.authChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
            _this.authChange.emit(_this.authState);
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        // Returns true if user is logged in
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        // Returns current user data
        get: function () {
            return this.authenticated ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserObservable", {
        // Returns
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        // Returns current user UID
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserAnonymous", {
        // Anonymous User
        get: function () {
            return this.authenticated ? this.authState.isAnonymous : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserDisplayName", {
        // Returns current user display name or Guest
        get: function () {
            if (!this.authState) {
                return 'Guest';
            }
            else if (this.currentUserAnonymous) {
                return 'Anonymous';
            }
            else {
                return this.authState['displayName'] || 'User without a Name';
            }
        },
        enumerable: true,
        configurable: true
    });
    //// Social Auth ////
    AuthService.prototype.githubLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].GithubAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].GoogleAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.facebookLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].FacebookAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.twitterLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].TwitterAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.socialSignIn = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.authState = credential.user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Anonymous Auth ////
    AuthService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth.signInAnonymously()
            .then(function (user) {
            _this.authState = user;
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Email/Password Auth ////
    AuthService.prototype.emailSignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.updateUserData();
            return user;
        })
            .catch(function (error) {
            console.log(error);
            return error;
        });
    };
    // Sends email allowing user to reset password
    AuthService.prototype.resetPassword = function (email) {
        var fbAuth = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]();
        return fbAuth.sendPasswordResetEmail(email)
            .then(function () { return console.log('email sent'); })
            .catch(function (error) { return console.log(error); });
    };
    //// Sign Out ////
    AuthService.prototype.signOut = function () {
        // this.afAuth.auth.signOut();
        this.logoutFromLogin = true;
        // Observable.interval(1500).subscribe(x => {
        //   console.log()
        this.router.navigate(['/login']);
        // });
    };
    AuthService.prototype.signOutHelper = function () {
        this.logoutFromLogin = false;
        this.afAuth.auth.signOut();
    };
    //// Helpers ////
    AuthService.prototype.updateUserData = function () {
        // Writes user name and email to realtime db
        // useful if your app displays information about users or for admin features
        // const path = `users/${this.currentUserId}`; // Endpoint on firebase
        // const data = {
        //   email: this.authState.email,
        //   name: this.authState.displayName
        // }
        // this.db.object(path).update(data)
        //   .catch(error => console.log(error));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], AuthService.prototype, "authChange", void 0);
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], AuthService);
    return AuthService;
    var _a, _b, _c;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuthModule */]]
        })
    ], CoreModule);
    return CoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/items/item-detail/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 [ngClass]=\"{ 'strike-out': !item.active }\">\n  {{ item.title || 'missing title' }}\n</h3>\n\n\n<div class=\"card-content\">\n\n  Task Active?: {{ item.active }}<br>\n  {{ item.timeStamp | date: 'medium' }}\n\n</div>\n\n<div class=\"card-footer\">\n  <span class=\"button is-small is-info card-footer-item\" (click)='updateTimeStamp()'>Update Timestamp</span>\n  <span class=\"button is-small is-success card-footer-item\" *ngIf='item.active' (click)='updateActive(false)'>Mark Complete</span>\n  <span class=\"button is-small is-warning card-footer-item\" *ngIf='!item.active' (click)='updateActive(true)'>Mark Incomplete</span>\n  <span class=\"button is-small is-danger card-footer-item\" (click)='deleteItem()'>Delete</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/items/item-detail/item-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\n  border-radius: 0;\n  margin: 10px 5px; }\n\n.strike-out {\n  text-decoration: line-through;\n  color: darkred; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/item-detail/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_item__ = __webpack_require__("../../../../../src/app/items/shared/item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailComponent = (function () {
    function ItemDetailComponent(itemSvc) {
        this.itemSvc = itemSvc;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
    };
    ItemDetailComponent.prototype.updateTimeStamp = function () {
        var date = new Date().getTime();
        this.itemSvc.updateItem(this.item.$key, { timeStamp: date });
    };
    ItemDetailComponent.prototype.updateActive = function (value) {
        this.itemSvc.updateItem(this.item.$key, { active: value });
    };
    ItemDetailComponent.prototype.deleteItem = function () {
        this.itemSvc.deleteItem(this.item.$key);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_item__["a" /* Item */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_item__["a" /* Item */]) === "function" && _a || Object)
    ], ItemDetailComponent.prototype, "item", void 0);
    ItemDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'item-detail',
            template: __webpack_require__("../../../../../src/app/items/item-detail/item-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/items/item-detail/item-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_item_service__["a" /* ItemService */]) === "function" && _b || Object])
    ], ItemDetailComponent);
    return ItemDetailComponent;
    var _a, _b;
}());

//# sourceMappingURL=item-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/items/item-form/item-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>New Task Form</h3>\n\n    <label class=\"label\">Name: </label>\n\n    <input placeholder=\"Item Title\" class=\"input\"\n    [(ngModel)]=\"item.title\"\n    required minlength=\"2\" maxlength=\"23\"\n    #title='ngModel' autofocus>\n\n    <div *ngIf=\"title.dirty\">\n      <span *ngIf='title.errors; then errors else valid'>template renders here...</span>\n    </div>\n\n\n    <button class=\"button is-primary\" (click)='createItem()' [disabled]=\"!title.valid\">Create</button>\n\n\n<ng-template #valid>\n  <p class=\"help is-success\">looks good!</p>\n</ng-template>\n\n<ng-template #errors>\n  <p class=\"help is-danger\">form contains errors!</p>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/items/item-form/item-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/item-form/item-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_item__ = __webpack_require__("../../../../../src/app/items/shared/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemFormComponent = (function () {
    function ItemFormComponent(itemSvc) {
        this.itemSvc = itemSvc;
        this.item = new __WEBPACK_IMPORTED_MODULE_1__shared_item__["a" /* Item */]();
    }
    ItemFormComponent.prototype.ngOnInit = function () {
    };
    ItemFormComponent.prototype.createItem = function () {
        this.itemSvc.createItem(this.item);
        this.item = new __WEBPACK_IMPORTED_MODULE_1__shared_item__["a" /* Item */](); // reset item
    };
    ItemFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'item-form',
            template: __webpack_require__("../../../../../src/app/items/item-form/item-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/items/item-form/item-form.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_item_service__["a" /* ItemService */]) === "function" && _a || Object])
    ], ItemFormComponent);
    return ItemFormComponent;
    var _a;
}());

//# sourceMappingURL=item-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/items/items-list/items-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Items</h1>\n\n<p>This page is a demo of a very basic todo list in Angular, using the Firebase Realtime DB on the backend.</p>\n\n<div *ngFor=\"let item of items | async\" class=\"card\">\n  <item-detail [item]='item'></item-detail>\n</div>\n\n<loading-spinner *ngIf=\"showSpinner\"></loading-spinner>\n\n\n\n<button type=\"button\" class=\"button is-danger\" (click)='deleteItems()'>Delete Entire List</button>\n\n<hr>\n\n<item-form></item-form>\n"

/***/ }),

/***/ "../../../../../src/app/items/items-list/items-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  margin-bottom: 10px;\n  padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/items-list/items-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemsListComponent = (function () {
    function ItemsListComponent(itemSvc) {
        this.itemSvc = itemSvc;
        this.showSpinner = true;
    }
    ItemsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.itemSvc.getItemsList({ limitToLast: 5 });
        this.items.subscribe(function () { return _this.showSpinner = false; });
    };
    ItemsListComponent.prototype.deleteItems = function () {
        this.itemSvc.deleteAll();
    };
    ItemsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'items-list',
            template: __webpack_require__("../../../../../src/app/items/items-list/items-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/items/items-list/items-list.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_item_service__["a" /* ItemService */]) === "function" && _a || Object])
    ], ItemsListComponent);
    return ItemsListComponent;
    var _a;
}());

//# sourceMappingURL=items-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/items/shared/item.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__items_list_items_list_component__ = __webpack_require__("../../../../../src/app/items/items-list/items-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__item_form_item_form_component__ = __webpack_require__("../../../../../src/app/items/item-form/item-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__item_detail_item_detail_component__ = __webpack_require__("../../../../../src/app/items/item-detail/item-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ItemModule = (function () {
    function ItemModule() {
    }
    ItemModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__items_list_items_list_component__["a" /* ItemsListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__item_form_item_form_component__["a" /* ItemFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__item_detail_item_detail_component__["a" /* ItemDetailComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__item_service__["a" /* ItemService */]
            ]
        })
    ], ItemModule);
    return ItemModule;
}());

//# sourceMappingURL=item.module.js.map

/***/ }),

/***/ "../../../../../src/app/items/shared/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = (function () {
    function ItemService(db) {
        this.db = db;
        this.basePath = '/items';
        this.items = null; //  list of objects
        this.item = null; //   single object
    }
    // Return an observable list with optional query
    // You will usually call this from OnInit in a component
    ItemService.prototype.getItemsList = function (query) {
        if (query === void 0) { query = {}; }
        this.items = this.db.list('/items', {
            query: query
        });
        return this.items;
    };
    // Return a single observable item
    ItemService.prototype.getItem = function (key) {
        var itemPath = this.basePath + "/" + key;
        this.item = this.db.object(itemPath);
        return this.item;
    };
    // Create a bramd new item
    ItemService.prototype.createItem = function (item) {
        var _this = this;
        this.items.push(item)
            .catch(function (error) { return _this.handleError(error); });
    };
    // Update an exisiting item
    ItemService.prototype.updateItem = function (key, value) {
        var _this = this;
        this.items.update(key, value)
            .catch(function (error) { return _this.handleError(error); });
    };
    // Deletes a single item
    ItemService.prototype.deleteItem = function (key) {
        var _this = this;
        this.items.remove(key)
            .catch(function (error) { return _this.handleError(error); });
    };
    // Deletes the entire list of items
    ItemService.prototype.deleteAll = function () {
        var _this = this;
        this.items.remove()
            .catch(function (error) { return _this.handleError(error); });
    };
    // Default error handling for all actions
    ItemService.prototype.handleError = function (error) {
        console.log(error);
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], ItemService);
    return ItemService;
    var _a;
}());

//# sourceMappingURL=item.service.js.map

/***/ }),

/***/ "../../../../../src/app/items/shared/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item() {
        this.active = true;
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_loading_spinner_component__ = __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/ui/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <!-- METRICS PANEL -->\n  <div class=\"column is-10 is-offset-1\">\n    <div class=\"metrics\">\n      <div class=\"has-text-centered content columns\">\n        <div class=\"column col1 is-4\">\n          <p>Pieces Shared</p>\n          <h2>42</h2>\n        </div>\n        <div class=\"column col2 is-4\">\n          <p>Sales Inquiries</p>\n          <h2>21</h2>\n        </div>\n        <div class=\"column col3 is-4\">\n          <p>Pieces Sold</p>\n          <h2>7</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Post and Inquiries -->\n  <div class=\"column is-10 is-offset-1\">\n    <!-- Posts -->\n    <div class=\"column colLeft is-6\">\n      <div class=\"inner\">\n\n      </div>\n    </div>\n    <!-- Inquiries -->\n    <div class=\"column colRight is-6\">\n      <div class=\"inner\">\n\n      </div>\n    </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".metrics {\n  background: #e3e0e0;\n  border-radius: 2px;\n  padding: 20px 0px; }\n  .metrics .col1, .metrics .col2 {\n    border-right: 1px solid #ddb5b5; }\n  .metrics p {\n    margin-top: 0px;\n    margin-bottom: 5px !important; }\n  .metrics h2 {\n    margin-top: 1px !important;\n    margin-bottom: 1px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'dashboard',
            template: __webpack_require__("../../../../../src/app/ui/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/footer-nav/footer-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <p>Toronto's go to art-share platform.</p>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/ui/footer-nav/footer-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer p {\n  text-align: right;\n  color: grey;\n  font-family: sans-serif;\n  font-size: 17px;\n  font-weight: 300;\n  margin-right: 3%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/footer-nav/footer-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterNavComponent = (function () {
    function FooterNavComponent() {
    }
    FooterNavComponent.prototype.ngOnInit = function () {
    };
    FooterNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'footer-nav',
            template: __webpack_require__("../../../../../src/app/ui/footer-nav/footer-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/footer-nav/footer-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterNavComponent);
    return FooterNavComponent;
}());

//# sourceMappingURL=footer-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/igupload/igupload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <div class=\"column is-10 is-offset-1\">\n\n    <!-- START: First Row -->\n    <div class=\"content columns\">\n      <div class=\"column is-12 has-text-centered\">\n        <h3>Upload IG Posts</h3>\n      </div>\n    </div>\n    <!-- END: First Row -->\n\n    <div class=\"content columns singlePost\" *ngFor=\"let post of igPostsArr\">\n      <div class=\"column is-7 leftCol\">\n        <div class=\"textDiv\">\n          <p class=\"descriptionLabel\">Post Description</p>\n          <p class=\"description\">{{post.text}}</p>\n        </div>\n        <hr>\n        <p class=\"likes\">Likes: {{post.imgLikeCount}}</p>\n      </div>\n      <div class=\"column is-3 midCol\">\n        <img src=\"{{post.thumbnailUrl}}\" alt=\"\">\n      </div>\n      <div class=\"column is-2 rightCol\">\n        <!-- <button *ngIf=\"post.\" class=\"button addBtn\">Add</button> -->\n        <button *ngIf=\"!post.inArtistDB\" class=\"button addBtn\">Add</button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/igupload/igupload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".singlePost {\n  background: #dedede;\n  margin-bottom: 2em;\n  border-radius: 3px; }\n  .singlePost .leftCol {\n    padding-left: 18px; }\n    .singlePost .leftCol .textDiv {\n      min-height: 125px;\n      margin-top: 5px; }\n      .singlePost .leftCol .textDiv .descriptionLabel {\n        font-weight: 600;\n        margin-bottom: 5px !important; }\n    .singlePost .leftCol hr {\n      background-color: #858585;\n      margin-bottom: 15px; }\n  .singlePost .midCol img {\n    max-width: 200px;\n    display: block;\n    margin: auto; }\n  .singlePost .rightCol button {\n    display: block;\n    margin: auto; }\n  .singlePost .rightCol .addBtn {\n    margin-top: 3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/igupload/igupload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IGUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IGUploadComponent = (function () {
    function IGUploadComponent(_authService, _router, _webSrv) {
        this._authService = _authService;
        this._router = _router;
        this._webSrv = _webSrv;
        this.igPostsArr = [];
    }
    IGUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._webSrv.pullRecentIGPosts('yash.p99', this._authService.authState.uid).subscribe(function (res) {
            var igPostsObj = JSON.parse(res['_body']);
            console.log(igPostsObj);
            for (var post in igPostsObj) {
                console.log(igPostsObj[post]);
                // if(igPostsObj[post]['inArtistDB'] == undefined) {
                //   igPostsObj[post]['inArtistDB'] = false;
                // }
                _this.igPostsArr.push(igPostsObj[post]);
            }
        });
    };
    IGUploadComponent.prototype.addNewPiece = function (piece) {
        // let obj = {
        //   artPiece: {
        //     category: 'Uncategorized',
        //     pieceDescription: 'Description',
        //     pieceName: 'Instagram Feature',
        //     price: null
        //   },
        //   artistUid: this._authService.authState.uid,
        //   imgUrl: piece.thumbnailUrl
        // }
    };
    IGUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'igupload',
            template: __webpack_require__("../../../../../src/app/ui/igupload/igupload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/igupload/igupload.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_web_service__["a" /* WebService */]) === "function" && _c || Object])
    ], IGUploadComponent);
    return IGUploadComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=igupload.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"rect1\"></div>\n  <div class=\"rect2\"></div>\n  <div class=\"rect3\"></div>\n  <div class=\"rect4\"></div>\n  <div class=\"rect5\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner {\n  margin: 100px auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px; }\n\n.spinner > div {\n  background-color: #333;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n\n.spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.spinner .rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n.spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingSpinnerComponent = (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadingSpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'loading-spinner',
            template: __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());

//# sourceMappingURL=loading-spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/my-pieces/my-piece/my-piece.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <div class=\"column is-10 is-offset-1\">\n\n    <!-- Page header -->\n    <div class=\"heading content columns\">\n      <div class=\"column is-12\">\n        <h2>Piece Details</h2>\n      </div>\n    </div>\n\n    <!-- All pieces -->\n    <div class=\"details\">\n\n      <div class=\"content columns\">\n        <div class=\"column is-6 is-offset-3\">\n          <img src=\"{{pieceObj?.img1}}\" alt=\"\">\n          <button class=\"button deleteBtn\" (click)=\"deletePieceModal()\">Delete</button>\n        </div>\n      </div>\n\n      <div class=\"content columns\">\n        <div class=\"column is-5 is-offset-1\">\n          <p class=\"label\">Piece Name</p>\n          <input type=\"text\" [(ngModel)]=\"pieceObj.pieceName\">\n        </div>\n        <div class=\"column is-5\">\n\n          <div class=\"columns\">\n            <div class=\"priceInputDiv column is-6\">\n              <p>$</p>\n              <input placeholder=\"Piece Price\" [attr.disabled]=\"isBid ? '' : null\" type=\"number\" [(ngModel)]=\"pieceObj.price\">\n            </div>\n            <div class=\"column bidBtnDiv is-6\">\n              <p>OR</p>\n              <button class=\"button\" [ngClass]=\"{'is-info': isBid }\" (click)=\"bidPriceToggle()\">\n                Bid Price\n              </button>\n            </div>\n          </div>\n\n          <!-- <p class=\"label\">Piece Price</p>\n          <input type=\"number\" [(ngModel)]=\"pieceObj.price\"> -->\n\n        </div>\n      </div>\n\n      <div class=\"content columns\">\n        <div class=\"column is-10 is-offset-1\" style=\"text-align: right;\">\n          <p *ngIf=\"isBid\">BidPrice enabled.<br>Click \"BidPrice\" to select price manually.</p>\n          <p *ngIf=\"!isBid\">BidPrice disabled.<br>To price this piece at your pre-selected bid price, click \"BidPrice\".</p>\n        </div>\n      </div>\n\n      <div class=\"content columns\">\n        <div class=\"column is-10 is-offset-1\">\n          <p class=\"label\">Piece Description</p>\n          <textarea class=\"textarea\" name=\"\" class=\"description\" [(ngModel)]=\"pieceObj.pieceDescription\"></textarea>\n          <br>\n          <button class=\"button submitBtn\" (click)=\"savePieceDetails()\">Submit</button>\n        </div>\n      </div>\n\n    </div>\n  </div>  \n</div>\n\n<!-- MODAL -->\n<div class=\"columns modalBg\" *ngIf=\"showDeleteModal\">\n  <div class=\"column is-12 modalMain has-text-centered\">\n    <h4>Delete this piece?</h4>\n    <button class=\"button\" (click)=\"deletePiece()\">Yes</button>\n    <button class=\"button\" (click)=\"closeDeleteModal()\">No</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/my-pieces/my-piece/my-piece.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  text-align: center; }\n\n.details img {\n  display: block;\n  margin: auto; }\n\n.details .deleteBtn {\n  display: block;\n  margin: auto;\n  margin-top: 1em;\n  background: #fff6f6;\n  border: 1px solid #f8bbbb;\n  color: #cf5e5e;\n  padding: 4px 11px 1px 11px; }\n\n.details p.label {\n  font-size: 18px;\n  margin-bottom: 0 !important;\n  font-weight: 300; }\n\n.details .priceInputDiv {\n  margin-bottom: 0;\n  margin-top: 13px; }\n  .details .priceInputDiv p {\n    display: inline-block;\n    margin-bottom: 0px;\n    margin-top: 16px; }\n  .details .priceInputDiv input {\n    display: inline-block;\n    width: 85%; }\n  .details .priceInputDiv ::-webkit-input-placeholder {\n    color: #ccc; }\n  .details .priceInputDiv :-ms-input-placeholder {\n    color: #ccc; }\n  .details .priceInputDiv ::placeholder {\n    color: #ccc; }\n\n.details .bidBtnDiv {\n  margin-top: 12px;\n  margin-bottom: 0; }\n  .details .bidBtnDiv p {\n    display: inline-block;\n    margin-bottom: 0px;\n    margin-top: 16px; }\n  .details .bidBtnDiv button {\n    margin-top: 9px;\n    margin-left: 1.2em;\n    padding: 10px 20px; }\n\n.details input {\n  width: 100%;\n  font-size: 16px;\n  color: grey;\n  padding: 3px 3px; }\n\n.details textarea {\n  border: #d6d6d6 solid 1px;\n  width: 100%;\n  height: 8em;\n  font-size: 17px;\n  color: grey;\n  padding: 5px 5px; }\n\n.details .submitBtn {\n  display: block;\n  margin: auto; }\n\n/* START: MODAL */\n.modalBg {\n  background-size: cover;\n  top: 12px;\n  position: fixed;\n  left: 12px;\n  z-index: 1002;\n  width: 100%;\n  height: 100%;\n  background: rgba(29, 29, 29, 0.65);\n  color: white;\n  overflow-y: scroll; }\n\n.modalMain {\n  width: 50%;\n  margin: auto;\n  background: #4a4a4a;\n  padding: 30px;\n  border-radius: 5px;\n  margin-top: 7%; }\n  .modalMain * {\n    color: white; }\n  .modalMain .button {\n    color: black; }\n\n.modalClose {\n  display: block;\n  margin-left: auto;\n  border-radius: 4px;\n  color: white;\n  padding: 0px 10px;\n  height: 1.5em;\n  line-height: 1;\n  background: #c1c1c1; }\n\n/* END: MODAL */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/my-pieces/my-piece/my-piece.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPieceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyPieceComponent = (function () {
    function MyPieceComponent(_activatedRoute, _db, _authService, _router, _route, _webSrv) {
        this._activatedRoute = _activatedRoute;
        this._db = _db;
        this._authService = _authService;
        this._router = _router;
        this._route = _route;
        this._webSrv = _webSrv;
        this.isBid = false;
        this.pieceObj = {};
        this.showDeleteModal = false;
    }
    MyPieceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authService.authState) {
            this.artistUid = this._authService.authState.uid;
            this.getPieceDetails(this.artistUid);
        }
        else {
            this._authService.authChange.subscribe(function (res) {
                _this.artistUid = res.uid;
                _this.getPieceDetails(_this.artistUid);
            });
        }
    };
    // Starter Fncs
    MyPieceComponent.prototype.getPieceDetails = function (authUid) {
        var _this = this;
        // subscribe to router event
        this._activatedRoute.params.subscribe(function (params) {
            _this.pieceUid = params['pieceId'];
            _this.getPieceDetailsDBCall(authUid, _this.pieceUid);
        });
    };
    // Event fncs
    MyPieceComponent.prototype.savePieceDetails = function () {
        console.log(this.artistUid, this.pieceUid, this.pieceObj);
        console.log('thats it');
        this._webSrv.editPieceDetails(this.artistUid, this.pieceUid, this.pieceObj)
            .subscribe(function (res) {
            console.log(res);
            alert("Updated");
        });
    };
    MyPieceComponent.prototype.bidPriceToggle = function () {
        this.isBid = !this.isBid;
        this.pieceObj.isBid = this.isBid;
    };
    MyPieceComponent.prototype.deletePieceModal = function () {
        this.showDeleteModal = true;
    };
    MyPieceComponent.prototype.closeDeleteModal = function () {
        this.showDeleteModal = false;
    };
    MyPieceComponent.prototype.deletePiece = function () {
        var _this = this;
        this._webSrv.deletePiece(this.artistUid, this.pieceUid)
            .subscribe(function (res) {
            console.log(res);
            alert("Deleted");
            _this._router.navigate(['/my-pieces']);
        });
    };
    // Helper Fncs
    MyPieceComponent.prototype.getPieceDetailsDBCall = function (authUid, pieceUid) {
        var _this = this;
        var pieceRef = this._db.object('/artists/' + authUid + '/artPieces/' + pieceUid, {
            preserveSnapshot: true
        });
        pieceRef.subscribe(function (piece) {
            _this.pieceObj = piece.val();
            console.log(_this.pieceObj);
            _this.pieceObj.price = parseInt(_this.pieceObj.price);
            if (_this.pieceObj.isBid == true) {
                _this.isBid = true;
            }
            else {
                _this.isBid = false;
            }
            // get img
            _this.pieceObj.img1 = _this.pieceObj.imgUrls[Object.keys(_this.pieceObj.imgUrls)[0]];
            // console.log(this.pieceObj.img1)
        });
    };
    MyPieceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'my-piece',
            template: __webpack_require__("../../../../../src/app/ui/my-pieces/my-piece/my-piece.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/my-pieces/my-piece/my-piece.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_web_service__["a" /* WebService */]) === "function" && _f || Object])
    ], MyPieceComponent);
    return MyPieceComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=my-piece.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/my-pieces/my-pieces.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <div class=\"column is-10 is-offset-1\">\n\n    <!-- Page header & Add piece btn -->\n    <div class=\"pageHeader\">\n      <div class=\"pageHeaderInner content columns\">\n        <div class=\"column is-6\">\n          <h2>My Pieces</h2>\n        </div>\n\n        <div class=\"column is-6\">\n          <button class=\"button addBtn\" routerLink=\"/new-piece\">Add A Piece</button>\n        </div>\n      </div>\n    </div> \n\n    <!-- All pieces -->\n    <div class=\"allPieces\">\n\n      <div class=\"content columns piece\" *ngFor=\"let piece of myPiecesArr\" routerLink=\"/my-piece/{{piece.pieceKey}}\">\n        <div class=\"column is-8\">\n\n          <div class=\"content columns\">\n            <div class=\"column is-8\">\n              <h5>Cateogry: {{piece.category}}</h5>\n              <h3>{{piece.pieceName}}</h3>\n            </div>\n            <div class=\"column is-4\">\n              <p class=\"price\">${{piece.price}}</p>\n            </div>\n          </div>\n\n          <p class=\"description\">{{piece.pieceDescription}}</p>\n\n        </div>\n        <div class=\"column is-4 imgCol\">\n          <img src=\"{{piece.img1}}\" alt=\"\">\n        </div>\n      </div>\n\n    </div>\n\n  </div>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/my-pieces/my-pieces.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pageHeader {\n  background: #eadcdc;\n  padding: 0px 20px;\n  border-radius: 2px;\n  margin-bottom: 2em; }\n  .pageHeader .pageHeaderInner {\n    padding: 10px 10px;\n    padding-top: 13px; }\n    .pageHeader .pageHeaderInner h2 {\n      margin-bottom: 0; }\n    .pageHeader .pageHeaderInner .addBtn {\n      margin-right: 0;\n      margin-left: auto;\n      display: block; }\n\n.allPieces h2 {\n  margin-top: 1.2em;\n  margin-left: 1em; }\n\n.allPieces .piece {\n  background: #686868;\n  margin: 0px 0px;\n  border-radius: 3px;\n  padding: 4px 5px;\n  margin-bottom: 1em; }\n  .allPieces .piece h5 {\n    color: white; }\n  .allPieces .piece h3 {\n    margin-top: 0.5em;\n    color: white;\n    margin-bottom: 0em; }\n  .allPieces .piece .price {\n    color: #f8f8f8;\n    background: #a8a1a1;\n    width: 4em;\n    text-align: center;\n    border-radius: 5px;\n    margin-left: auto;\n    margin-right: 0;\n    padding: 2px 0px;\n    font-size: 18px;\n    font-family: sans-serif;\n    font-weight: 100; }\n  .allPieces .piece .description {\n    color: white; }\n  .allPieces .piece .imgCol img {\n    max-height: 140px;\n    display: block;\n    margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/my-pieces/my-pieces.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPiecesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyPiecesComponent = (function () {
    function MyPiecesComponent(_db, _authService, _router, _route, _webSrv) {
        this._db = _db;
        this._authService = _authService;
        this._router = _router;
        this._route = _route;
        this._webSrv = _webSrv;
        this.myPiecesArr = [];
    }
    MyPiecesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authService.authState) {
            this.getArtistsPieces(this._authService.authState.uid);
        }
        else {
            this._authService.authChange.subscribe(function (res) {
                _this.getArtistsPieces(res.uid);
            });
        }
    };
    MyPiecesComponent.prototype.getArtistsPieces = function (artistUid) {
        var _this = this;
        this.myPieces = this._db.object('/artists/' + artistUid + '/artPieces', {
            preserveSnapshot: true
        });
        this.myPieces.subscribe(function (pieces) {
            _this.myPiecesArr = [];
            pieces.forEach(function (piece) {
                var pieceClean = piece.val();
                pieceClean['pieceKey'] = piece.key;
                for (var key in pieceClean.imgUrls) {
                    if (pieceClean['img1'] == undefined) {
                        pieceClean['img1'] = pieceClean.imgUrls[key];
                    }
                }
                _this.myPiecesArr.push(pieceClean);
            });
            // this.artists = snapshot.val()
            // this.showNewPieceObj = true;
        });
    };
    MyPiecesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'my-pieces',
            template: __webpack_require__("../../../../../src/app/ui/my-pieces/my-pieces.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/my-pieces/my-pieces.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_web_service__["a" /* WebService */]) === "function" && _e || Object])
    ], MyPiecesComponent);
    return MyPiecesComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=my-pieces.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/my-pieces/new-piece-details/new-piece-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <div class=\"column is-10 is-offset-1\">\n\n    <!-- START: First Row -->\n    <div class=\"content columns selectedNewPiece\" *ngIf=\"showNewPieceObj\">\n      <div class=\"column is-8 leftCol\">\n        <h3>Selected New Piece</h3>\n        <p>{{newPieceObj?.name}}</p>\n      </div>\n      <div class=\"column is-3 rightCol\">\n        <img src=\"{{newPieceObj?.url}}\" alt=\"\">\n      </div>\n    </div>\n    <!-- END: First Row -->\n\n    <!-- START: Second Row -->\n    <div class=\"addingPieceDetails\" *ngIf=\"showNewPieceObj\">\n\n      <div class=\"content columns \">\n        <div class=\"column is-12\">\n          <h3>Add Piece Details</h3>\n        </div>\n      </div>\n\n      <div class=\"content columns\">\n        <div class=\"column is-6\">\n          <input placeholder=\"Piece Name\" type=\"text\" [(ngModel)]=\"name\">\n        </div>\n        <div class=\"column is-6\">\n          <div class=\"columns\">\n            <div class=\"priceInputDiv column is-6\">\n              <p>$</p>\n              <input placeholder=\"Piece Price\" [attr.disabled]=\"isBid ? '' : null\" type=\"number\" [(ngModel)]=\"price\">\n            </div>\n            <div class=\"column bidBtnDiv is-6\">\n              <p>OR</p>\n              <button class=\"button\" [ngClass]=\"{'is-info': isBid }\" (click)=\"bidPrice()\">\n                Bid Price\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"content columns\">\n        <div class=\"column is-12\">\n          <textarea placeholder=\"Piece Description\" name=\"\" class=\"description\" [(ngModel)]=\"description\"></textarea>\n          <br>\n          <div>\n            <button class=\"button submitBtn\" *ngIf=\"!toggleSubmitPreloader\" (click)=\"submtiNewPieceDetails()\">Submit</button>\n            <span class=\"spinner\" *ngIf=\"toggleSubmitPreloader\"></span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <!-- END: Second Row -->\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/my-pieces/new-piece-details/new-piece-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selectedNewPiece {\n  background: #d3cfcf; }\n  .selectedNewPiece .leftCol {\n    margin-top: 0.5em; }\n    .selectedNewPiece .leftCol h3 {\n      margin-bottom: 10px; }\n\n.addingPieceDetails h3 {\n  margin-bottom: 0;\n  margin-top: 1em; }\n\n.addingPieceDetails input {\n  display: block;\n  width: 100%;\n  height: 35px;\n  margin-top: 10px;\n  color: grey;\n  font-weight: 300;\n  padding: 1px 4px;\n  font-size: 17px; }\n\n.addingPieceDetails .priceInputDiv p {\n  display: inline-block;\n  margin-bottom: 0px;\n  margin-top: 16px; }\n\n.addingPieceDetails .priceInputDiv input {\n  display: inline-block;\n  width: 85%; }\n\n.addingPieceDetails .priceInputDiv ::-webkit-input-placeholder {\n  color: #ccc; }\n\n.addingPieceDetails .priceInputDiv :-ms-input-placeholder {\n  color: #ccc; }\n\n.addingPieceDetails .priceInputDiv ::placeholder {\n  color: #ccc; }\n\n.addingPieceDetails .disabledInput {\n  pointer-events: none;\n  border: 1px solid gainsboro;\n  color: gainsboro; }\n\n.addingPieceDetails .bidBtnDiv p {\n  display: inline-block;\n  margin-bottom: 0px;\n  margin-top: 16px; }\n\n.addingPieceDetails .bidBtnDiv button {\n  margin-top: 9px;\n  margin-left: 1.2em; }\n\n.addingPieceDetails .description {\n  display: block;\n  width: 100%;\n  height: 6em;\n  border: #d6d6d6 solid 1px;\n  color: grey;\n  font-weight: 300;\n  padding: 3px 5px;\n  font-size: 17px; }\n\n.addingPieceDetails .submitBtn {\n  display: block;\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/my-pieces/new-piece-details/new-piece-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPieceDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewPieceDetailsComponent = (function () {
    function NewPieceDetailsComponent(_db, _authService, _router, _route, _webSrv) {
        this._db = _db;
        this._authService = _authService;
        this._router = _router;
        this._route = _route;
        this._webSrv = _webSrv;
        this.isBid = false;
        this.showNewPieceObj = false;
        this.name = '';
        this.description = '';
        this.price = 0;
        this.toggleSubmitPreloader = false;
    }
    NewPieceDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authService.authState) {
            this.getArtistsNewPiece(this._authService.authState.uid);
        }
        else {
            this._authService.authChange.subscribe(function (res) {
                _this.getArtistsNewPiece(res.uid);
            });
        }
    };
    NewPieceDetailsComponent.prototype.submtiNewPieceDetails = function () {
        var _this = this;
        if (this.name != '' && this.description != '' && (this.price > 0 || this.isBid)) {
            this.toggleSubmitPreloader = true;
            console.log(this.name);
            console.log(this.description);
            console.log(this.price);
            console.log(this.newPieceObj);
            var obj = {
                artPiece: {
                    category: 'Uncategorized',
                    pieceDescription: this.description,
                    pieceName: this.name,
                    price: this.price,
                    source: 'Upload'
                },
                artistUid: this._authService.authState.uid,
                imgUid: this._route.snapshot.queryParams['imgId'],
                imgUrl: this.newPieceObj.url
            };
            if (this.isBid) {
                obj.artPiece.price = null;
                obj.artPiece['isBid'] = true;
            }
            console.log(obj);
            this.newPieceObj = { name: ".", url: "." };
            this.showNewPieceObj = false;
            this._webSrv.submitNewPieceDetails(obj).subscribe(function (res) {
                console.log(res);
                _this._router.navigate(['/my-pieces']);
            });
        }
        else {
            alert("Please comeplete the piece form.");
        }
    };
    // Starter fncs 
    NewPieceDetailsComponent.prototype.getArtistsNewPiece = function (artistUid) {
        var _this = this;
        this.newPiece = this._db.object('/artists/' + artistUid + '/newPieces/' + this._route.snapshot.queryParams['imgId'], {
            preserveSnapshot: true
        });
        this.newPiece.subscribe(function (snapshot) {
            _this.newPieceObj = snapshot.val();
            _this.showNewPieceObj = true;
        });
    };
    NewPieceDetailsComponent.prototype.bidPrice = function () {
        if (!this.isBid) {
            this.name = 'My Piece';
            this.description = 'Shared on ' + Date().split(" ").splice(1, 3).join(' ');
        }
        this.isBid = !this.isBid;
    };
    NewPieceDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'new-piece-details',
            template: __webpack_require__("../../../../../src/app/ui/my-pieces/new-piece-details/new-piece-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/my-pieces/new-piece-details/new-piece-details.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_web_service__["a" /* WebService */]) === "function" && _e || Object])
    ], NewPieceDetailsComponent);
    return NewPieceDetailsComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=new-piece-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/my-pieces/new-piece/new-piece.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <div class=\"column is-10 is-offset-1\">\n\n    <div class=\"singleUpload\" *ngIf=\"!uploadedImage\">\n      <h3>Upload a photo of your piece:</h3>\n      <label>\n          <input type=\"file\" class=\"button\" (change)=\"detectFiles($event)\">\n      </label>\n      <button class=\"button is-primary\"\n              [disabled]=\"!selectedFiles\"\n              (click)=\"uploadSingle()\">\n        Upload Photo\n      </button>\n    </div>\n\n    <div class=\"has-text-centered selectedPhoto\" *ngIf=\"uploadedImage\">\n      <h3>Selected Image</h3>\n      <p>{{uploadedImage.upload.name}}</p>\n      <img src=\"{{uploadedImage.upload.url}}\" alt=\"\">\n      <br>\n      <br>\n      <h4>Create a new piece with this photo?</h4>\n      <button (click)=\"newPieceDetails()\" class=\"button\">Yes</button>\n    </div>\n\n    <div class=\"recentSingleUploads\">\n      <h4>Recent Photo Uploads</h4>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/my-pieces/new-piece/new-piece.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".singleUpload {\n  background: #e3e1e1;\n  padding: 25px 20px;\n  margin-bottom: 2em;\n  border-radius: 2px; }\n\n.selectedPhoto {\n  background: #e3e1e1;\n  padding: 25px 20px;\n  margin-bottom: 2em;\n  border-radius: 2px; }\n  .selectedPhoto img {\n    width: 70%;\n    max-width: 700px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/my-pieces/new-piece/new-piece.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPieceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uploads_shared_upload_service__ = __webpack_require__("../../../../../src/app/uploads/shared/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uploads_shared_upload__ = __webpack_require__("../../../../../src/app/uploads/shared/upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewPieceComponent = (function () {
    function NewPieceComponent(_router, upSvc) {
        this._router = _router;
        this.upSvc = upSvc;
        this.uploadedImage = false;
    }
    NewPieceComponent.prototype.ngOnInit = function () {
        // let hardCodedImg = `{"upload":{"createdAt":"2018-02-11T00:34:02.188Z","file":{},"progress":100,"url":"https://firebasestorage.googleapis.com/v0/b/art-auction-2ef27.appspot.com/o/uploads%2F1518309242193%2Fyashtest.png?alt=media&token=73281d48-e8d9-4716-9d3f-7bba999a01ab","name":"yashtest.png"},"refKey":"-L51H7snY2GyY9GG0ZfQ"}`;
        // this.uploadedImage = JSON.parse(hardCodedImg);
        // console.log(this.uploadedImage);
    };
    NewPieceComponent.prototype.uploadSingle = function () {
        var _this = this;
        var file = this.selectedFiles.item(0);
        this.currentUpload = new __WEBPACK_IMPORTED_MODULE_3__uploads_shared_upload__["a" /* Upload */](file);
        // console.log(this.currentUpload);
        if (this.currentUpload.file.size > 800000) {
            alert('Img must be less than 800kb -> To ensure that images load quickly on users\' devices.');
        }
        else {
            this.upSvc.pieceUpload(this.currentUpload).then(function (res) {
                _this.uploadedImage = JSON.parse(JSON.stringify(res));
                console.log(JSON.stringify(_this.uploadedImage));
                console.log(_this.uploadedImage);
            });
        }
    };
    NewPieceComponent.prototype.newPieceDetails = function () {
        console.log(this.uploadedImage);
        var refKey = this.uploadedImage['refKey'];
        this._router.navigate(['/new-piece-details'], { queryParams: { imgId: this.uploadedImage.refKey } });
        // this._router.navigate(['/new-piece-details']);
    };
    // HELPERS 
    NewPieceComponent.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    NewPieceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'new-piece',
            template: __webpack_require__("../../../../../src/app/ui/my-pieces/new-piece/new-piece.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/my-pieces/new-piece/new-piece.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__uploads_shared_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__uploads_shared_upload_service__["a" /* UploadService */]) === "function" && _b || Object])
    ], NewPieceComponent);
    return NewPieceComponent;
    var _a, _b;
}());

//# sourceMappingURL=new-piece.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/purchase-requests/purchase-requests.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <div class=\"column is-10 is-offset-1\">\n\n    <!-- Page header & Add piece btn -->\n    <div class=\"pageHeader\">\n      <div class=\"pageHeaderInner content columns\">\n        <div class=\"column is-12\">\n          <h2>My Requests</h2>\n        </div>\n      </div>\n    </div> \n\n    <!-- All requests -->\n    <div class=\"allRequests\">\n\n      <div class=\"content columns request\" *ngFor=\"let request of myRequestsArr\">\n        <div class=\"column is-5\">\n          <h5>{{request.name}}</h5>\n          <button class=\"button\" routerLink=\"/my-piece/{{request.pieceId}}\">Piece Requested</button>\n        </div>\n        <div class=\"column is-7\">\n          <h5>{{request.phone}}</h5>\n          <h5>{{request.email}}</h5>\n        </div>\n      </div>\n\n      <div class=\"content columns request no_reqs\" *ngIf=\"noRequestsPanel\">\n        <div class=\"column is-12\">\n          <p class=\"has-text-centered\">You don't have any requests yet.</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/purchase-requests/purchase-requests.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pageHeader {\n  background: #eadcdc;\n  padding: 0px 20px;\n  border-radius: 2px;\n  margin-bottom: 2em; }\n  .pageHeader .pageHeaderInner {\n    padding: 10px 10px;\n    padding-top: 13px; }\n    .pageHeader .pageHeaderInner h2 {\n      margin-bottom: 0; }\n\n.allRequests h2 {\n  margin-top: 1.2em;\n  margin-left: 1em; }\n\n.allRequests .request {\n  background: #686868;\n  margin: 0px 0px;\n  border-radius: 3px;\n  padding: 4px 5px;\n  margin-bottom: 1em;\n  text-align: center; }\n  .allRequests .request h5 {\n    color: white; }\n  .allRequests .request h3 {\n    margin-top: 0.5em;\n    color: white;\n    margin-bottom: 0em; }\n\n.allRequests .no_reqs {\n  padding: 2em;\n  background: #f0f0f0;\n  border: solid 0.5px #ddd; }\n  .allRequests .no_reqs p {\n    font-size: 20px;\n    color: #b0afaf; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/purchase-requests/purchase-requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseRequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PurchaseRequestsComponent = (function () {
    function PurchaseRequestsComponent(_db, _authService, _router, _route, _webSrv) {
        this._db = _db;
        this._authService = _authService;
        this._router = _router;
        this._route = _route;
        this._webSrv = _webSrv;
        this.myRequestsArr = [];
        this.noRequestsPanel = false;
    }
    PurchaseRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authService.authState) {
            this.getArtistsRequests(this._authService.authState.uid);
        }
        else {
            this._authService.authChange.subscribe(function (res) {
                _this.getArtistsRequests(res.uid);
            });
        }
    };
    PurchaseRequestsComponent.prototype.getArtistsRequests = function (artistUid) {
        var _this = this;
        this.myRequests = this._db.object('/artists/' + artistUid + '/purchaseForms', {
            preserveSnapshot: true
        });
        this.myRequests.subscribe(function (requests) {
            _this.myRequestsArr = [];
            requests.forEach(function (request) {
                var requestClean = request.val();
                requestClean['pieceKey'] = request.key;
                // for(var key in pieceClean.imgUrls) {
                //   if(pieceClean['img1'] == undefined) {
                //     pieceClean['img1'] = pieceClean.imgUrls[key];
                //   }
                // }
                _this.myRequestsArr.push(requestClean);
            });
            // this.artists = snapshot.val()
            // this.showNewPieceObj = true;
            console.log(_this.myRequestsArr);
            if (_this.myRequestsArr.length == 0) {
                _this.noRequestsPanel = true;
            }
        });
    };
    PurchaseRequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'purchase-requests',
            template: __webpack_require__("../../../../../src/app/ui/purchase-requests/purchase-requests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/purchase-requests/purchase-requests.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_web_service__["a" /* WebService */]) === "function" && _e || Object])
    ], PurchaseRequestsComponent);
    return PurchaseRequestsComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=purchase-requests.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/readme-page/readme-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"FireStarter__Angular4__Firebase_Starter_App_0\"></a>FireStarter - Angular4 + Firebase Starter App</h1>\n<p>FireStarter is designed to handle the basic features most Angular+Firebase apps need. It can serve as a foundation to quickly roll out more complex features.</p>\n<p><a href=\"https://angularfirebase.com\">Lessons and Screencasts</a></p>\n<p><a href=\"https://join.slack.com/angularfirebase/shared_invite/MjA2NTgxMTI0MTk2LTE0OTg4NTQ4MDAtMjhhZDIzMjc0Mg\">Let's talk about Angular+Firebase on Slack</a></p>\n<h2><a id=\"Features_7\"></a>Features</h2>\n<ul>\n<li>Authentication w/ Router Guard</li>\n<li>Realtime Database CRUD Demo</li>\n<li>File Uploads to Firebase Storage Demo</li>\n<li>SASS + Bulma + FontAwesome</li>\n<li>Reactive Form Validation</li>\n</ul>\n\n<h2>Installation</h2>\n\nGet the latest Firestarter build on <a href=\"https://github.com/codediodeio/angular-firestarter\">Github</a>\n\n<h2><a id=\"Apps_Using_FireStarter_in_Production_49\"></a>Apps Using FireStarter in Production</h2>\n<ul>\n<li><a href=\"https://app.artifilter.com\">ArtiFilter</a> - Neural Art Generator</li>\n<li><a href=\"https://flashlawyer.com\">FlashLawyer</a> - Legal Document Builder and Chatbot</li>\n</ul>\n\n\n<!-- <a href=\"https://github.com/codediodeio/angular-firestarter\"><img style=\"position: absolute; top: 0; right: 0; border: 0; z-index: 999999;\" src=\"https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67\" alt=\"Fork me on GitHub\" data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png\"></a> -->\n"

/***/ }),

/***/ "../../../../../src/app/ui/readme-page/readme-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/readme-page/readme-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadmePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadmePageComponent = (function () {
    function ReadmePageComponent() {
    }
    ReadmePageComponent.prototype.ngOnInit = function () {
    };
    ReadmePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'readme-page',
            template: __webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReadmePageComponent);
    return ReadmePageComponent;
}());

//# sourceMappingURL=readme-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\" *ngIf=\"showArtistProfileObj\">\n  <div class=\"column is-10 is-offset-1\">\n\n    <!-- START: Zeroth Row -->\n    <div class=\"content columns row0\">\n      <div class=\"column is-12\">\n        <h3>Account Settings</h3>\n      </div>\n    </div>\n    <!-- END: Zeroth Row -->\n\n    <!-- START: First Row -->\n    <div class=\"content columns row1 formStyles\" >\n      <div class=\"column is-6\">\n        <label for=\"fname\">First Name</label>\n        <input placeholder=\"First name\" type=\"text\" [(ngModel)]=\"artistProfileObj.fname\">\n\n        <label for=\"minBid\">Min Bid</label>\n        <p>The minimum amout of money you'd sell a piece for</p>\n        <input placeholder=\"Min. bid\" type=\"text\" [(ngModel)]=\"artistProfileObj.minBid\">\n\n        <label for=\"publicName\">Public Name</label>\n        <input class=\"bottomInput\" placeholder=\"publicName\" type=\"text\" [(ngModel)]=\"artistProfileObj.publicName\">\n      </div>\n      <div class=\"column is-6\">\n        <label for=\"lname\">Last Name</label>\n        <input placeholder=\"Last name\" type=\"text\" [(ngModel)]=\"artistProfileObj.lname\">\n\n        <label for=\"minSuggestedBid\">Min Suggested Bid</label>\n        <p>The minimum amount of money you'd LIKE TO sell your pieces for</p>\n        <input placeholder=\"Min. suggested bid\" type=\"text\" [(ngModel)]=\"artistProfileObj.minSuggestedBid\">\n      </div>\n    </div>\n    <!-- END: First Row -->\n\n    <!-- START: Second Row -->\n    <div class=\"content columns row2\">\n      <div class=\"column is-6\">\n        <button class=\"button\" (click)=\"updateAccountDetails()\">Save</button>\n      </div>\n    </div>\n    <!-- END: Second Row -->\n\n    <!-- START: Third Row -->\n    <div class=\"content columns row3\">\n      <div class=\"column is-12\">\n        <h3>Social Media</h3>\n      </div>\n    </div>\n    <!-- END: Third Row -->\n\n    <!-- START: Fourth Row -->\n    <div class=\"content columns row4 formStyles\">\n      <div class=\"column is-6\">\n        <label for=\"ig\">Instagram</label>\n        <input placeholder=\"IG profile URL\" type=\"text\" [(ngModel)]=\"artistSocialObj.ig\">\n\n        <label for=\"Facebook\">Facebook</label>\n        <input class=\"bottomInput\" placeholder=\"Facebook page URL\" type=\"text\" [(ngModel)]=\"artistSocialObj.fb\">\n      </div>\n      <div class=\"column is-6\">\n        <label for=\"twitter\">Twitter</label>\n        <input placeholder=\"Twitter page URL\" type=\"text\" [(ngModel)]=\"artistSocialObj.twitter\">\n      </div>\n    </div>\n    <!-- END: Fourth Row -->\n\n    <!-- START: Fifth Row -->\n    <div class=\"content columns row5\">\n      <div class=\"column is-6\">\n        <button class=\"button\" (click)=\"updateAccountDetails()\">Save</button>\n      </div>\n    </div>\n    <!-- END: Fifth Row -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  margin-bottom: 0; }\n\n.formStyles label {\n  display: block;\n  font-size: 17px;\n  font-weight: 600; }\n\n.formStyles p {\n  font-size: 11px;\n  margin-bottom: 0; }\n\n.formStyles input {\n  display: block;\n  margin-bottom: 2em;\n  font-size: 17px;\n  width: 100%;\n  padding: 7px;\n  color: #5a5a5a;\n  font-weight: 400; }\n\n.formStyles ::-webkit-input-placeholder {\n  color: #bbb;\n  opacity: 0.6; }\n\n.formStyles :-ms-input-placeholder {\n  color: #bbb;\n  opacity: 0.6; }\n\n.formStyles ::placeholder {\n  color: #bbb;\n  opacity: 0.6; }\n\n.bottomInput {\n  margin-bottom: 0 !important; }\n\n.row2 {\n  margin-bottom: 3em; }\n\n.row3, .row4, .row5 {\n  background: #dad7d7; }\n\n.row3 {\n  margin-top: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = (function () {
    function SettingsComponent(_db, _authService, _router, _route, _webSrv) {
        this._db = _db;
        this._authService = _authService;
        this._router = _router;
        this._route = _route;
        this._webSrv = _webSrv;
        this.showArtistProfileObj = false;
        this.artistProfileObj = {};
        this.artistSocialObj = {};
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authService.authState) {
            this.getArtistInfo(this._authService.authState.uid);
        }
        else {
            this._authService.authChange.subscribe(function (res) {
                _this.getArtistInfo(res.uid);
            });
        }
    };
    SettingsComponent.prototype.updateAccountDetails = function () {
        if (this.artistProfileObj['minBid'] < this.artistProfileObj['minSuggestedBid']) {
            var saveObj = {
                artistProfile: this.artistProfileObj,
                socialMediaLinks: this.artistSocialObj
            };
            console.log(saveObj);
            this._webSrv.updateAccountDetails(this._authService.authState.uid, saveObj).subscribe(function (res) {
                // console.log(res);
                alert('Your account details have been updated!');
            });
        }
        else {
            alert('Min. bid must be less than Min. suggested bid.');
        }
    };
    // STARTER FNCS
    SettingsComponent.prototype.getArtistInfo = function (artistUid) {
        var _this = this;
        this.artistObj = this._db.object('/artists/' + artistUid, {
            preserveSnapshot: true
        });
        this.artistObj.subscribe(function (artistObjRaw) {
            // console.log(artistObjRaw.val())
            _this.artistProfileObj = artistObjRaw.val()['artistProfile'];
            _this.artistSocialObj = artistObjRaw.val()['socialMediaLinks'];
            _this.showArtistProfileObj = true;
        });
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'settings',
            template: __webpack_require__("../../../../../src/app/ui/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_web_service__["a" /* WebService */]) === "function" && _e || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/shared/ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__uploads_shared_upload_service__ = __webpack_require__("../../../../../src/app/uploads/shared/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_login_user_login_component__ = __webpack_require__("../../../../../src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/ui/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_form_user_form_component__ = __webpack_require__("../../../../../src/app/ui/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__top_nav_top_nav_component__ = __webpack_require__("../../../../../src/app/ui/top-nav/top-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_nav_footer_nav_component__ = __webpack_require__("../../../../../src/app/ui/footer-nav/footer-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__readme_page_readme_page_component__ = __webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/ui/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_pieces_my_pieces_component__ = __webpack_require__("../../../../../src/app/ui/my-pieces/my-pieces.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__igupload_igupload_component__ = __webpack_require__("../../../../../src/app/ui/igupload/igupload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__my_pieces_new_piece_new_piece_component__ = __webpack_require__("../../../../../src/app/ui/my-pieces/new-piece/new-piece.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__my_pieces_new_piece_details_new_piece_details_component__ = __webpack_require__("../../../../../src/app/ui/my-pieces/new-piece-details/new-piece-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__purchase_requests_purchase_requests_component__ = __webpack_require__("../../../../../src/app/ui/purchase-requests/purchase-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__my_pieces_my_piece_my_piece_component__ = __webpack_require__("../../../../../src/app/ui/my-pieces/my-piece/my-piece.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__settings_settings_component__ = __webpack_require__("../../../../../src/app/ui/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var UiModule = (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            declarations: [
                // Unused components
                __WEBPACK_IMPORTED_MODULE_13__readme_page_readme_page_component__["a" /* ReadmePageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                // Base componets
                __WEBPACK_IMPORTED_MODULE_10__user_form_user_form_component__["a" /* UserFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__user_login_user_login_component__["a" /* UserLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__top_nav_top_nav_component__["a" /* TopNavComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_nav_footer_nav_component__["a" /* FooterNavComponent */],
                // Main components
                __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_21__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__my_pieces_my_pieces_component__["a" /* MyPiecesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__my_pieces_my_piece_my_piece_component__["a" /* MyPieceComponent */],
                __WEBPACK_IMPORTED_MODULE_16__igupload_igupload_component__["a" /* IGUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_17__my_pieces_new_piece_new_piece_component__["a" /* NewPieceComponent */],
                __WEBPACK_IMPORTED_MODULE_18__my_pieces_new_piece_details_new_piece_details_component__["a" /* NewPieceDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__purchase_requests_purchase_requests_component__["a" /* PurchaseRequestsComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_11__top_nav_top_nav_component__["a" /* TopNavComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_nav_footer_nav_component__["a" /* FooterNavComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__uploads_shared_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_6__web_service__["a" /* WebService */],
            ]
        })
    ], UiModule);
    return UiModule;
}());

//# sourceMappingURL=ui.module.js.map

/***/ }),

/***/ "../../../../../src/app/ui/shared/web.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebService = (function () {
    function WebService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__app_module__["b" /* firebaseURL */];
        console.log(this.baseUrl);
    }
    WebService.prototype.pullRecentIGPosts = function (igUsername, artistUid) {
        return this._http.get(this.baseUrl + '/showRecentIGPosts?username=' + igUsername + '&artistuid=' + artistUid)
            .map(function (res) { return res; });
    };
    WebService.prototype.submitNewPieceDetails = function (obj) {
        return this._http.post(this.baseUrl + '/newPieceSubmission', obj)
            .map(function (res) { return res; });
    };
    WebService.prototype.editPieceDetails = function (artistUid, pieceUid, obj) {
        return this._http.post(this.baseUrl + '/editPiece?artistUid=' + artistUid + '&pieceUid=' + pieceUid, obj)
            .map(function (res) { return res; });
    };
    WebService.prototype.deletePiece = function (artistUid, pieceUid) {
        return this._http.get(this.baseUrl + '/deletePiece?artistUid=' + artistUid + '&pieceUid=' + pieceUid)
            .map(function (res) { return res; });
    };
    WebService.prototype.updateAccountDetails = function (artistUid, accountDetails) {
        return this._http.post(this.baseUrl + '/updateArtistAccountProfile?artistUid=' + artistUid, accountDetails)
            .map(function (res) { return res; });
    };
    WebService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], WebService);
    return WebService;
    var _a;
}());

//# sourceMappingURL=web.service.js.map

/***/ }),

/***/ "../../../../../src/app/ui/top-nav/top-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n  <div class=\"nav-left\">\n    <a class=\"nav-item\" routerLink=\"/\">\n      <!-- <img src=\"assets/images/.png\" alt=\"\"/> -->\n      <p class=\"logo\">muralist</p>\n    </a>\n  </div>\n\n\n  <!-- This \"nav-toggle\" hamburger menu is only visible on mobile -->\n  <!-- You need JavaScript to toggle the \"is-active\" class on \"nav-menu\" -->\n  <span class=\"nav-toggle\" (click)=\"toggleCollapse()\" [ngClass]=\"{'is-active': show}\">\n    <span></span>\n    <span></span>\n    <span></span>\n  </span>\n\n  <!-- This \"nav-menu\" is hidden on mobile -->\n  <!-- Add the modifier \"is-active\" to display it on mobile -->\n  <div class=\"nav-right nav-menu\" [ngClass]=\"{'is-active': show}\">\n    <a *ngIf=\"!isLoggedIn\" class=\"nav-item\" routerLink=\"/login\">\n      Login\n    </a>\n\n    <!-- <a *ngIf=\"isLoggedIn\" class=\"nav-item\" routerLink=\"/ig-upload\">\n      Upload IG Posts\n    </a> -->\n    <a *ngIf=\"isLoggedIn\" class=\"nav-item\" routerLink=\"/my-pieces\">\n      My Pieces\n    </a>\n    <a *ngIf=\"isLoggedIn\" class=\"nav-item\" routerLink=\"/purchase-requests\">\n      Purchase Requests\n    </a>\n    <a *ngIf=\"isLoggedIn\" class=\"nav-item\" routerLink=\"/settings\">\n      Settings\n    </a>\n    <a *ngIf=\"isLoggedIn\" class=\"nav-item\" (click)=\"logout()\">\n      Logout\n    </a>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/ui/top-nav/top-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand|Raleway);", ""]);

// module
exports.push([module.i, "nav {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n  margin-bottom: 25px;\n  padding: 0 3vw;\n  height: 5em;\n  background: #474747; }\n\n.nav-item {\n  color: #f3f3f3;\n  font-family: 'Raleway', sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.4px; }\n\n.nav-item:hover {\n  color: #ca9999; }\n\n.logo {\n  font-family: 'Quicksand', sans-serif;\n  color: #e8e8e8;\n  font-size: 32px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/top-nav/top-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopNavComponent = (function () {
    function TopNavComponent(_router, _authSrv) {
        this._router = _router;
        this._authSrv = _authSrv;
        // collapse:string = "closed";
        this.show = false;
        this.isLoggedIn = false;
    }
    TopNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (event) {
            // console.log(this._router.url);
            // If on login, check logoutfromlogin boolean
            if (_this._router.url == '/login') {
                // IF need to signout, just signout
                if (_this._authSrv.logoutFromLogin) {
                    _this._authSrv.signOutHelper();
                }
                else {
                    // ELSE setup auth change listener
                    _this.authChangeListener();
                }
            }
            else {
                _this.authChangeListener();
            }
        });
    };
    TopNavComponent.prototype.authChangeListener = function () {
        var _this = this;
        this._authSrv.authChange.subscribe(function (res) {
            // console.log(res);
            if (res) {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
                _this._router.navigate(['/login']);
            }
        });
    };
    TopNavComponent.prototype.logout = function () {
        this._authSrv.signOut();
    };
    TopNavComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
        // this.collapse = this.collapse == "open" ? 'closed' : 'open';
    };
    TopNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'top-nav',
            template: __webpack_require__("../../../../../src/app/ui/top-nav/top-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/top-nav/top-nav.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('collapse', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('open', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: '1',
                        display: 'block',
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('closed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: '0',
                        display: 'none',
                        transform: 'translate3d(0, -100%, 0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('closed => open', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('200ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('open => closed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], TopNavComponent);
    return TopNavComponent;
    var _a, _b;
}());

//# sourceMappingURL=top-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content columns\">\n  <div class=\"column is-6 is-offset-3\">\n    <form class=\"has-text-centered\" [formGroup]=\"userForm\"  *ngIf=\"!newUser\"  (ngSubmit)=\"login()\">\n    \n      <h4>User Login</h4>\n      <br>\n    \n      <label for=\"email\">Email</label>\n      <input type=\"email\" id=\"email\" class=\"input\"\n             formControlName=\"email\" required >\n    \n      <div *ngIf=\"formErrors.email\" class=\"help is-danger\">\n        {{ formErrors.email }}\n      </div>\n    \n      <label for=\"password\">Password</label>\n      <input type=\"password\" id=\"password\" class=\"input\"\n             formControlName=\"password\" required >\n    \n      <div *ngIf=\"formErrors.password\" class=\"help is-danger\">\n        {{ formErrors.password }}\n      </div>\n    \n      <button type=\"submit\" class=\"button\" [disabled]=\"!userForm.valid\">Submit</button>\n    \n      <span *ngIf=\"userForm.valid\" class=\"help is-success\">Form Looks Valid</span>\n    \n      <a *ngIf=\"!passReset && userForm.controls.email.valid\" class=\"help is-info\" (click)=\"resetPassword()\">Reset Password for {{userForm.value.email}}?</a>\n      <p *ngIf=\"passReset\" class=\"help is-info\">Reset requested. Check your email instructions.</p>\n    \n    \n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/user-form/user-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/user-form/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserFormComponent = (function () {
    function UserFormComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.newUser = false; // to toggle login or signup form
        this.passReset = false; // set to true when password reset is triggered
        this.formErrors = {
            'email': '',
            'password': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.',
                'email': 'Email must be a valid email'
            },
            'password': {
                'required': 'Password is required.',
                'pattern': 'Password must be include at one letter and one number.',
                'minlength': 'Password must be at least 4 characters long.',
                'maxlength': 'Password cannot be more than 40 characters long.',
            }
        };
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UserFormComponent.prototype.toggleForm = function () {
        this.newUser = !this.newUser;
    };
    UserFormComponent.prototype.signup = function () {
        this.auth.emailSignUp(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.login = function () {
        this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']).then(function (res) {
            console.log(res);
            if (res['code'] == "auth/wrong-password") {
                alert('Wrong password!');
            }
            else if (res['code'] == "auth/user-not-found") {
                alert('An account with this email address doesn\'t exist!');
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    UserFormComponent.prototype.resetPassword = function () {
        var _this = this;
        this.auth.resetPassword(this.userForm.value['email'])
            .then(function () { return _this.passReset = true; });
    };
    UserFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].email
                ]
            ],
            'password': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].maxLength(25)
                ]
            ],
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    // Updates validation state on form changes.
    UserFormComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    UserFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'user-form',
            template: __webpack_require__("../../../../../src/app/ui/user-form/user-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/user-form/user-form.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], UserFormComponent);
    return UserFormComponent;
    var _a, _b;
}());

//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!auth.currentUser; else alreadyLoggedIn\">\n  <user-form></user-form>\n</div>\n\n\n\n<ng-template #alreadyLoggedIn>\n  <p class=\"text-success\">\n    Already logged in!\n  </p>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/ui/user-login/user-login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLoginComponent = (function () {
    function UserLoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.logoutFromLogin) {
            this.auth.signOutHelper();
        }
        else {
            this.auth.authChange.subscribe(function (res) {
                if (res) {
                    console.log("Logged In");
                    _this.router.navigate(['/']);
                }
                else {
                    console.log("Not Logged In");
                }
            });
        }
    };
    /// Social Login
    UserLoginComponent.prototype.signInWithGithub = function () {
        var _this = this;
        this.auth.githubLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.auth.googleLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.auth.facebookLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithTwitter = function () {
        var _this = this;
        this.auth.twitterLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    /// Anonymous Sign In
    UserLoginComponent.prototype.signInAnonymously = function () {
        var _this = this;
        this.auth.anonymousLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    /// Shared
    UserLoginComponent.prototype.afterSignIn = function () {
        // Do after login stuff here, such router redirects, toast messages, etc.
        this.router.navigate(['/']);
    };
    UserLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'user-login',
            template: __webpack_require__("../../../../../src/app/ui/user-login/user-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/user-login/user-login.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], UserLoginComponent);
    return UserLoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <!-- User logged in -->\n    <div class=\"box\" *ngIf=\"auth.currentUser\">\n        <h3>Howdy, {{ auth.currentUserDisplayName }}</h3>\n        <img class=\"card-img-top\" [src]=\"auth.currentUser.photoURL || 'https://api.adorable.io/avatars/109/fire.png'\" width=50px>\n        <p class=\"text-truncate\">UID: {{ auth.currentUserId }}</p>\n        <button class=\"button\" (click)=\"logout()\">Logout</button>\n\n   </div>\n\n    <!-- User NOT logged in -->\n    <div class=\"box\" *ngIf=\"!auth.currentUser\">\n        <h3>Howdy, {{ auth.currentUserDisplayName }}</h3>\n        <p class=\"card-text\">Login to get started...</p>\n        <button class=\"button\" routerLink=\"/login\">Login</button>\n\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/user-profile/user-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = (function () {
    function UserProfileComponent(auth) {
        this.auth = auth;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.prototype.logout = function () {
        this.auth.signOut();
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'user-profile',
            template: __webpack_require__("../../../../../src/app/ui/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], UserProfileComponent);
    return UserProfileComponent;
    var _a;
}());

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/uploads/shared/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = (function () {
    function UploadService(db, _authSrv) {
        this.db = db;
        this._authSrv = _authSrv;
        this.basePath = '/uploads';
    }
    UploadService.prototype.getUploads = function (query) {
        if (query === void 0) { query = {}; }
        this.uploads = this.db.list(this.basePath, {
            query: query
        });
        return this.uploads;
    };
    UploadService.prototype.deleteUpload = function (upload) {
        var _this = this;
        this.deleteFileData(upload.$key)
            .then(function () {
            _this.deleteFileStorage(upload.name);
        })
            .catch(function (error) { return console.log(error); });
    };
    // Executes the file uploading to firebase https://firebase.google.com/docs/storage/web/upload-files
    UploadService.prototype.pushUpload = function (upload) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + '/' + upload.file.name).put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // upload in progress
            var snap = snapshot;
            upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100;
        }, function (error) {
            // upload failed
            console.log(error);
        }, function () {
            // upload success
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            _this.saveFileData(upload);
            return undefined;
        });
    };
    UploadService.prototype.pieceUpload = function (upload) {
        var _this = this;
        return new Promise(function (res, rej) {
            if (_this._authSrv.authState) {
                console.log(_this._authSrv.authState);
            }
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
            var uploadTask = storageRef.child('/uploads/' + _this._authSrv.authState.uid + '/' + upload.file.name).put(upload.file);
            console.log(uploadTask);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                // upload in progress
                var snap = snapshot;
                upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100;
            }, function (error) {
                // upload failed
                console.log(error);
                rej(error);
            }, function () {
                // upload success
                upload.url = uploadTask.snapshot.downloadURL;
                upload.name = upload.file.name;
                var refKey = _this.db.list('artists/' + _this._authSrv.authState.uid + '/newPieces').push(upload).key;
                res({ upload: upload, refKey: refKey });
            });
        });
    };
    // Writes the file details to the realtime db
    UploadService.prototype.saveNewPieceData = function (upload) {
        this.db.list('artists/' + this._authSrv.authState.uid + '/newPieces').push(upload);
    };
    UploadService.prototype.saveFileData = function (upload) {
        this.db.list('/uploads' + upload.file.name).push(upload);
    };
    // Writes the file details to the realtime db
    UploadService.prototype.deleteFileData = function (key) {
        return this.db.list(this.basePath + "/").remove(key);
    };
    // Firebase files must have unique names in their respective storage dir
    // So the name serves as a unique key
    UploadService.prototype.deleteFileStorage = function (name) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], UploadService);
    return UploadService;
    var _a, _b;
}());

//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/uploads/shared/upload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
var Upload = (function () {
    function Upload(file) {
        this.createdAt = new Date();
        this.file = file;
    }
    return Upload;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDTbKoTLL-sRLDvrZUgI0TK0ERbbf0rC4k",
        authDomain: "muralist-dev.firebaseapp.com",
        databaseURL: "https://muralist-dev.firebaseio.com",
        projectId: "muralist-dev",
        storageBucket: "muralist-dev.appspot.com",
        messagingSenderId: "631560460308"
    },
    firebaseURL: 'https://us-central1-muralist-dev.cloudfunctions.net'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map