(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var config = {
            apiKey: "AIzaSyAdNFmU5IF9pcRAveeKQNEs2s9cC4zqVmk",
            authDomain: "biblio-a5e05.firebaseapp.com",
            databaseURL: "https://biblio-a5e05.firebaseio.com",
            projectId: "biblio-a5e05",
            storageBucket: "biblio-a5e05.appspot.com",
            messagingSenderId: "577582331999"
        };
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"](config);
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _book_list_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-list/single-book/single-book.component */ "./src/app/book-list/single-book/single-book.component.ts");
/* harmony import */ var _book_list_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./book-list/book-form/book-form.component */ "./src/app/book-list/book-form/book-form.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
















var appRoutes = [
    { path: 'auth/signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
    { path: 'auth/signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"] },
    { path: 'books', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_9__["BookListComponent"] },
    { path: 'books/new', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _book_list_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_11__["BookFormComponent"] },
    { path: 'books/view/:id', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]], component: _book_list_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_10__["SingleBookComponent"] },
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: '**', redirectTo: 'books' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"],
                _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_9__["BookListComponent"],
                _book_list_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_10__["SingleBookComponent"],
                _book_list_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_11__["BookFormComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _services_books_service__WEBPACK_IMPORTED_MODULE_14__["BooksService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-8 col-sm-offset-2\">\n    <h2>Se connecter</h2>\n    <form [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"email\">Adresse mail</label>\n        <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Mot de passe</label>\n        <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"signinForm.invalid\">Me connecter</button>\n    </form>\n    <p class=\"text-danger\">{{ errorMessage }}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SigninComponent = /** @class */ (function () {
    function SigninComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SigninComponent.prototype.initForm = function () {
        this.signinForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]]
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var email = this.signinForm.get('email').value;
        var password = this.signinForm.get('password').value;
        this.authService.signInUser(email, password).then(function () {
            _this.router.navigate(['/books']);
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/auth/signin/signin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-8 col-sm-offset-2\">\n    <h2>Créer un compte</h2>\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"email\">Adresse mail</label>\n        <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Mot de passe</label>\n        <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"signupForm.invalid\">Créer mon compte</button>\n    </form>\n    <p class=\"text-danger\">{{ errorMessage }}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SignupComponent.prototype.initForm = function () {
        this.signupForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]]
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var email = this.signupForm.get('email').value;
        var password = this.signupForm.get('password').value;
        this.authService.createNewUser(email, password).then(function () {
            _this.router.navigate(['/books']);
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/book-list/book-form/book-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/book-list/book-form/book-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-8 col-sm-offset-2\">\n    <h2>Enregistrer un nouveau livre</h2>\n    <form [formGroup]=\"bookForm\" (ngSubmit)=\"onSaveBook()\">\n      <div class=\"form-group\">\n        <label for=\"title\">Titre</label>\n        <input type=\"text\" id=\"title\" class=\"form-control\" formControlName=\"title\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"author\">Auteur</label>\n        <input type=\"text\" id=\"author\" class=\"form-control\" formControlName=\"author\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"synopsis\">Synopsis</label>\n        <textarea id=\"synopsis\" class=\"form-control\" formControlName=\"synopsis\">\n        </textarea>\n      </div>\n      <div class=\"form-group\">\n        <h4>Ajouter une photo</h4>\n        <input type=\"file\" (change)=\"detectFiles($event)\" class=\"form-control\" accept=\"image/*\">\n        <p class=\"text-success\" *ngIf=\"fileUploaded\">Fichier chargé !</p>\n      </div>\n      <button class=\"btn btn-success\" [disabled]=\"bookForm.invalid || fileIsUploading\" type=\"submit\">Enregistrer</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book-list/book-form/book-form.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/book-list/book-form/book-form.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stbGlzdC9ib29rLWZvcm0vYm9vay1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/book-list/book-form/book-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/book-list/book-form/book-form.component.ts ***!
  \************************************************************/
/*! exports provided: BookFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFormComponent", function() { return BookFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_book_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/book.model */ "./src/app/models/book.model.ts");






var BookFormComponent = /** @class */ (function () {
    function BookFormComponent(formBuilder, booksService, router) {
        this.formBuilder = formBuilder;
        this.booksService = booksService;
        this.router = router;
        this.fileIsUploading = false;
        this.fileUploaded = false;
    }
    BookFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    BookFormComponent.prototype.initForm = function () {
        this.bookForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            synopsis: ''
        });
    };
    BookFormComponent.prototype.onSaveBook = function () {
        var title = this.bookForm.get('title').value;
        var author = this.bookForm.get('author').value;
        var synopsis = this.bookForm.get('synopsis').value;
        var newBook = new src_app_models_book_model__WEBPACK_IMPORTED_MODULE_5__["Book"](title, author);
        newBook.synopsis = synopsis;
        if (this.fileUrl && this.fileUrl !== '') {
            newBook.photo = this.fileUrl;
        }
        this.booksService.createNewBook(newBook);
        this.router.navigate(['/books']);
    };
    BookFormComponent.prototype.onUploadFile = function (file) {
        var _this = this;
        this.fileIsUploading = true;
        this.booksService.uploadFile(file).then(function (url) {
            _this.fileUrl = url;
            _this.fileIsUploading = false;
            _this.fileUploaded = true;
        });
    };
    BookFormComponent.prototype.detectFiles = function (event) {
        this.onUploadFile(event.target.files[0]);
    };
    BookFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-form',
            template: __webpack_require__(/*! ./book-form.component.html */ "./src/app/book-list/book-form/book-form.component.html"),
            styles: [__webpack_require__(/*! ./book-form.component.scss */ "./src/app/book-list/book-form/book-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], BookFormComponent);
    return BookFormComponent;
}());



/***/ }),

/***/ "./src/app/book-list/book-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h2>Vos livres</h2>\n    <div class=\"list-group\">\n      <button class=\"list-group-item\" *ngFor=\"let book of books; let i = index\" (click)=\"onViewBook(i)\">\n        <h3 class=\"list-group-item-heading\">\n          {{ book.title }}\n          <button class=\"btn btn-default pull-right\" (click)=\"onDeleteBook(book)\">\n            <span class=\"glyphicon glyphicon-minus\"></span>\n          </button>\n        </h3>\n        <p class=\"list-group-item-text\">{{ book.author }}</p>\n      </button>\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"onNewBook()\">Nouveau livre</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book-list/book-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BookListComponent = /** @class */ (function () {
    function BookListComponent(booksService, router) {
        this.booksService = booksService;
        this.router = router;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksSubscription = this.booksService.booksSubject.subscribe(function (books) {
            _this.books = books;
        });
        this.booksService.emitBooks();
    };
    BookListComponent.prototype.onNewBook = function () {
        this.router.navigate(['/books', 'new']);
    };
    BookListComponent.prototype.onDeleteBook = function (book) {
        this.booksService.removeBook(book);
    };
    BookListComponent.prototype.onViewBook = function (id) {
        this.router.navigate(['/books', 'view', id]);
    };
    BookListComponent.prototype.ngOnDestroy = function () {
        this.booksSubscription.unsubscribe();
    };
    BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.scss */ "./src/app/book-list/book-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/book-list/single-book/single-book.component.html":
/*!******************************************************************!*\
  !*** ./src/app/book-list/single-book/single-book.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <img style=\"max-width: 400px;\" *ngIf=\"book.photo\" [src]=\"book.photo\">\n    <h1>{{ book.title }}</h1>\n    <button class=\"btn btn-default pull-right\" (click)=\"onDeleteBook(book)\">\n      <span class=\"glyphicon glyphicon-minus\"></span>\n    </button>\n    <h3>{{ book.author }}</h3>\n    <p>{{ book.synopsis }}</p>\n    <button class=\"btn btn-default\" (click)=\"onBack()\">Retour</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book-list/single-book/single-book.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/book-list/single-book/single-book.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stbGlzdC9zaW5nbGUtYm9vay9zaW5nbGUtYm9vay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/book-list/single-book/single-book.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/book-list/single-book/single-book.component.ts ***!
  \****************************************************************/
/*! exports provided: SingleBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleBookComponent", function() { return SingleBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_book_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/book.model */ "./src/app/models/book.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/books.service */ "./src/app/services/books.service.ts");





var SingleBookComponent = /** @class */ (function () {
    function SingleBookComponent(route, booksService, router) {
        this.route = route;
        this.booksService = booksService;
        this.router = router;
    }
    SingleBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.book = new src_app_models_book_model__WEBPACK_IMPORTED_MODULE_2__["Book"]('', '');
        var id = this.route.snapshot.params['id'];
        this.booksService.getSingleBook(+id).then(function (book) {
            _this.book = book;
        });
    };
    SingleBookComponent.prototype.onDeleteBook = function (book) {
        this.booksService.removeBook(book);
        this.router.navigate(['/books']);
    };
    SingleBookComponent.prototype.onBack = function () {
        this.router.navigate(['/books']);
    };
    SingleBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-book',
            template: __webpack_require__(/*! ./single-book.component.html */ "./src/app/book-list/single-book/single-book.component.html"),
            styles: [__webpack_require__(/*! ./single-book.component.scss */ "./src/app/book-list/single-book/single-book.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_books_service__WEBPACK_IMPORTED_MODULE_4__["BooksService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SingleBookComponent);
    return SingleBookComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"books\">Livres</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li routerLinkActive=\"active\" *ngIf=\"!isAuth\">\n        <a routerLink=\"auth/signup\">Créer un compte</a>\n      </li>\n      <li routerLinkActive=\"active\" *ngIf=\"!isAuth\">\n        <a routerLink=\"auth/signin\">Connexion</a>\n      </li>\n      <li>\n        <a (click)=\"onSignOut()\" style=\"cursor:pointer\" *ngIf=\"isAuth\">Déconnexion</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuth = true;
            }
            else {
                _this.isAuth = false;
            }
        });
    };
    HeaderComponent.prototype.onSignOut = function () {
        this.authService.signOutUser();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/models/book.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/book.model.ts ***!
  \**************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(true);
                }
                else {
                    _this.router.navigate(['/auth', 'signin']);
                    resolve(false);
                }
            });
        });
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.createNewUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, password).then(function () {
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signInUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password).then(function () {
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signOutUser = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/books.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/books.service.ts ***!
  \*******************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




var BooksService = /** @class */ (function () {
    function BooksService() {
        this.books = [];
        this.booksSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getBooks();
    }
    BooksService.prototype.emitBooks = function () {
        this.booksSubject.next(this.books);
    };
    BooksService.prototype.saveBooks = function () {
        firebase__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('/books').set(this.books);
    };
    BooksService.prototype.getBooks = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('/books').on('value', function (data) {
            _this.books = data.val() ? data.val() : [];
            _this.emitBooks();
        });
    };
    BooksService.prototype.getSingleBook = function (id) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('/books/' + id).once('value').then(function (data) {
                resolve(data.val());
            }, function (error) {
                reject(error);
            });
        });
    };
    BooksService.prototype.createNewBook = function (newBook) {
        this.books.push(newBook);
        this.saveBooks();
        this.emitBooks();
    };
    BooksService.prototype.removeBook = function (book) {
        if (book.photo) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().refFromURL(book.photo);
            storageRef.delete().then(function () {
                console.log('Photo removed!');
            }, function (error) {
                console.log('Could not remove photo! : ' + error);
            });
        }
        var bookIndexToRemove = this.books.findIndex(function (bookE1) {
            if (bookE1 === book) {
                return true;
            }
        });
        this.books.splice(bookIndexToRemove, 1);
        this.saveBooks();
        this.emitBooks();
    };
    BooksService.prototype.uploadFile = function (file) {
        return new Promise(function (resolve, reject) {
            var almostUniqueFileName = Date.now().toString();
            var upload = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + almostUniqueFileName + file.name).put(file);
            upload.on(firebase__WEBPACK_IMPORTED_MODULE_3__["storage"].TaskEvent.STATE_CHANGED, function () {
                console.log('Chargement...');
            }, function (error) {
                console.log('Erreur de chargement ! : ' + error);
                reject();
            }, function () {
                resolve(upload.snapshot.ref.getDownloadURL());
            });
        });
    };
    BooksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\Travaux\Projets Angular\biblio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map