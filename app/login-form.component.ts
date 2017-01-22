import { Component, OnInit } from '@angular/core';
import { Response} from '@angular/http';
import {
    NgForm,
    FORM_DIRECTIVES,
    REACTIVE_FROM_DIRECTIVES,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';
import { HttpService} from './http.service';
import {User} from './user';

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    providers: [HttpService]
})
export class LoginFormComponent {
    user: User = new User();
    receivedUser: User; // полученный пользователь
    done: boolean = false;

    constructor(private httpService: HttpService){}
    
    submit(user){
        this.httpService.postData(user)
            .subscribe((data) => {this.receivedUser=data; this.done=true;});
        console.log(this.user);
    }
}



/**
 * Created by D on 18.01.2017.
 */