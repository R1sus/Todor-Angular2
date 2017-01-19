System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var User, LoginFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            User = (function () {
                function User() {
                }
                return User;
            }());
            exports_1("User", User);
            LoginFormComponent = (function () {
                function LoginFormComponent() {
                    this.submitted = false;
                    this.user = new User();
                }
                LoginFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                LoginFormComponent.prototype.submit = function (form) {
                    this.value = form;
                };
                LoginFormComponent.prototype.addUser = function () {
                    console.log(this.user);
                };
                LoginFormComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'login-form',
                        templateUrl: 'login-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoginFormComponent);
                return LoginFormComponent;
            }());
            exports_1("LoginFormComponent", LoginFormComponent);
        }
    }
});
/**
 * Created by D on 18.01.2017.
 */ 
//# sourceMappingURL=login-form.component.js.map