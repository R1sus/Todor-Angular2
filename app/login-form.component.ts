import { Component, OnInit } from '@angular/core';
import {
    NgForm,
    FORM_DIRECTIVES,
    REACTIVE_FROM_DIRECTIVES,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';
// import {User} from './user';
import { HttpService} from './http.service';


export class User {
    name: string;
    password: string;
}

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    providers: [HttpService]
})
export class  LoginFormComponent {

    // submitted = false;
    //
    // onSubmit() { this.submitted = true; }
    // value: any;

    // submit(form) {
    //     this.value = form;
    // }

    user: User = new User();
    addUser(){
        console.log(this.user);
    }
    // receivedUser: User; // полученный пользователь
    // done: boolean = false;
    // constructor(private httpService: HttpService){}
    // submit(user){
    //     this.httpService.postData(user)
    //         .subscribe((data) => {this.receivedUser=data; this.done=true;});
    //     console.log(this.user);
    // }


}



/**
 * Created by D on 18.01.2017.
 */