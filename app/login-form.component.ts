import { Component } from '@angular/core';


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


}



/**
 * Created by D on 18.01.2017.
 */