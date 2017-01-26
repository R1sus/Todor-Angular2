import { Component, OnInit } from '@angular/core';
import { AddUser } from './adduser';
import { HttpAddUserService } from './http-add-user.service';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'authorization-form',
  templateUrl: 'authorization-form.component.html',
  providers: [HttpAddUserService]
})
export class  AuthorizationFormComponent {

  user: AddUser = new AddUser();
  receivedUser: AddUser;

  constructor(private httpAddUserService: HttpAddUserService) {}

  submit(user) {
    this.httpAddUserService.postData(user)
        .subscribe((data) => {this.receivedUser=data});
    alert("Signin success! Welcome " + user.username + "!");
    console.log(this.user);
  }
}