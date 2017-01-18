import { Component } from '@angular/core';
import {
  FORM_DIRECTIVES,
  REACTIVE_FROM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms'

// import { User }    from './user';

@Component({
  moduleId: module.id,
  selector: 'authorization-form',
  templateUrl: 'authorization-form.component.html'
})
export class  AuthorizationFormComponent {

  // submitted = false;
  //
  // onSubmit() { this.submitted = true; }
  // value: any;

  submit(form) {
    this.value = form;
  }
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