import { Component } from '@angular/core';

// import { User }    from './user';

@Component({
  moduleId: module.id,
  selector: 'authorization-form',
  templateUrl: 'authorization-form.component.html'
})
export class  AuthorizationFormComponent {

  submitted = false;

  onSubmit() { this.submitted = true; }
  value: any;

  submit(form) {
    this.value = form;
  }


}


