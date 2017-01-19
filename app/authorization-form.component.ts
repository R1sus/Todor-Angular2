import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

// export class User{
//     name: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
// }

@Component({
  moduleId: module.id,
  selector: 'authorization-form',
  templateUrl: 'authorization-form.component.html'
})
export class  AuthorizationFormComponent implements OnInit {

    public user: User;

    ngOnInit() {
        // initialize model here
        this.user = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    save(model: User, isValid: boolean) {
        // call API to save customer
        console.log(model, isValid);
    }

  // submit(form) {
  //   this.value = form;
  // }
}





/**
 * Created by D on 17.01.2017.
 */

//
// signinForm:FormGroup;
// name:AbstractControl;
//
// constructor(form:FormBuilder) {
//   this.signinForm = form.group({
//     'name': ['', Validators.required]
//   });
//   this.name = this.signinForm.controls['name'];
// }
// onSubmit(value:string):void {
//   console.log('your name:', value);
// }