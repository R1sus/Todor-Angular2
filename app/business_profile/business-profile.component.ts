import { Component } from '@angular/core';
import {
    NgForm,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'business-profile',
    templateUrl: 'business-profile.component.html',
})

export class BusinessProfileComponent {

    readUrl(event) {
        // imageSrc: string = '';
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (event) => {
                this.url = event.target.result;
                console.log(this.url);
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }
}





/**
 * Created by D on 24.01.2017.
 */
