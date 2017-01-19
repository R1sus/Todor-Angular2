import { Component } from '@angular/core';
import {
    NgForm,
    FORM_DIRECTIVES,
    REACTIVE_FROM_DIRECTIVES,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';

export class User{
    name: string;
    password: string;
}

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html'
})
export class  LoginFormComponent {

    submitted = false;

    onSubmit() { this.submitted = true; }
    value: any;

    submit(form) {
        this.value = form;
    }

    user: User = new User();
    addUser(){
        console.log(this.user);
    }


}



/**
 * Created by D on 18.01.2017.
 */