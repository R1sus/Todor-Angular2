System.register(['@angular/core', './_services/http.service', '@angular/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_service_1, common_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(location) {
                    this.location = location;
                    var logged;
                    var path = location.path();
                    // let logged;
                    console.log(path);
                    if (path === "/uprofile") {
                        this.logged = true;
                    }
                    else if (path === "/bprofile") {
                        this.logged = true;
                    }
                    else {
                        this.logged = false;
                    }
                    // this.logged = true;
                    // console.log(router.url);
                    // console.log(this.logged + 'logged');
                }
                AppComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'my-app',
                        styles: [" \n        .active a {\n        color:#fff;\n        }\n    "],
                        templateUrl: './app.component.html',
                        providers: [http_service_1.HttpService, http_service_1.HttpService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _a) || Object])
                ], AppComponent);
                return AppComponent;
                var _a;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//
//
//   constructor(router: Router) {
//     // logout()
//     // {
//     //   localStorage.removeItem('currentUser');
//     //   router.navigate(['/login']);
//     // }
//
//     router.events.subscribe((url: any) => console.log(url));
// constructor(private _router: Router ) {
//     this.router = _router;
// }
// loggedIn = false;
// if (this.router.url === '/uprofile ')
//
// constructor(private auth: HttpService, private router: Router) {
//     this.loggedIn = this.auth.login();
// }
//# sourceMappingURL=app.component.js.map