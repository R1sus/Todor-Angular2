import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import {
    NgForm,
    FORM_DIRECTIVES,
    REACTIVE_FROM_DIRECTIVES,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'user-profile',
    templateUrl: 'user-profile.component.html'
    // styleUrls: ['app/user_profile/user-profile.component.css'],
    // inputs:['activeColor','baseColor','overlayColor']
})
export class UserProfileComponent {

    // activeColor: string = 'green';
    // baseColor: string = '#ccc';
    // overlayColor: string = 'rgba(255,255,255,0.5)';
    //
    // dragging: boolean = false;
    // loaded: boolean = false;
    // imageLoaded: boolean = false;
    // imageSrc: string = '';
    //
    // handleDragEnter() {
    //     this.dragging = true;
    // }
    //
    // handleDragLeave() {
    //     this.dragging = false;
    // }
    //
    // handleDrop(e) {
    //     e.preventDefault();
    //     this.dragging = false;
    //     this.handleInputChange(e);
    // }
    //
    // handleImageLoad() {
    //     this.imageLoaded = true;
    //     this.iconColor = this.overlayColor;
    // }
    //
    // handleInputChange(e) {
    //     var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    //
    //     var pattern = /image-*/;
    //     var reader = new FileReader();
    //
    //     if (!file.type.match(pattern)) {
    //         alert('invalid format');
    //         return;
    //     }
    //
    //     this.loaded = false;
    //
    //     reader.onload = this._handleReaderLoaded.bind(this);
    //     reader.readAsDataURL(file);
    // }
    //
    // _handleReaderLoaded(e) {
    //     var reader = e.target;
    //     this.imageSrc = reader.result;
    //     this.loaded = true;
    // }
    //
    // _setActive() {
    //     this.borderColor = this.activeColor;
    //     if (this.imageSrc.length === 0) {
    //         this.iconColor = this.activeColor;
    //     }
    // }
    //
    // _setInactive() {
    //     this.borderColor = this.baseColor;
    //     if (this.imageSrc.length === 0) {
    //         this.iconColor = this.baseColor;
    //     }
    // }

}





/**
 * Created by D on 24.01.2017.
 */
