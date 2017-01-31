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
    var UserProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UserProfileComponent = (function () {
                function UserProfileComponent() {
                    this.activeColor = 'green';
                    this.baseColor = '#ccc';
                    this.overlayColor = 'rgba(255,255,255,0.5)';
                    this.dragging = false;
                    this.loaded = false;
                    this.imageLoaded = false;
                    this.imageSrc = '';
                }
                UserProfileComponent.prototype.handleDragEnter = function () {
                    this.dragging = true;
                };
                UserProfileComponent.prototype.handleDragLeave = function () {
                    this.dragging = false;
                };
                UserProfileComponent.prototype.handleDrop = function (e) {
                    e.preventDefault();
                    this.dragging = false;
                    this.handleInputChange(e);
                };
                UserProfileComponent.prototype.handleImageLoad = function () {
                    this.imageLoaded = true;
                    this.iconColor = this.overlayColor;
                };
                UserProfileComponent.prototype.handleInputChange = function (e) {
                    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
                    var pattern = /image-*/;
                    var reader = new FileReader();
                    if (!file.type.match(pattern)) {
                        alert('invalid format');
                        return;
                    }
                    this.loaded = false;
                    reader.onload = this._handleReaderLoaded.bind(this);
                    reader.readAsDataURL(file);
                };
                UserProfileComponent.prototype._handleReaderLoaded = function (e) {
                    var reader = e.target;
                    this.imageSrc = reader.result;
                    this.loaded = true;
                };
                UserProfileComponent.prototype._setActive = function () {
                    this.borderColor = this.activeColor;
                    if (this.imageSrc.length === 0) {
                        this.iconColor = this.activeColor;
                    }
                };
                UserProfileComponent.prototype._setInactive = function () {
                    this.borderColor = this.baseColor;
                    if (this.imageSrc.length === 0) {
                        this.iconColor = this.baseColor;
                    }
                };
                UserProfileComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'user-profile',
                        templateUrl: 'user-profile.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserProfileComponent);
                return UserProfileComponent;
            }());
            exports_1("UserProfileComponent", UserProfileComponent);
        }
    }
});
/**
 * Created by D on 24.01.2017.
 */
//# sourceMappingURL=user-profile.component.js.map