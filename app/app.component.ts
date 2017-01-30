import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { HttpService } from './_services/http.service';
import { HttpAddUserService } from './_services/http-add-user.service';

@Component({
    moduleId: module.id,
  selector: 'my-app',
  styles:[` 
        .active a {
        color:#fff;
        }
    `],
  templateUrl: './app.component.html',
  providers: [HttpService, HttpService]
      // '<search-page></search-page>'
      // '<login-form></login-form>'
      // '<authorization-form></authorization-form>'
})
export class AppComponent {

}
    //isloggedIn = false;
    //
    //    if (localStorage.getItem("currentUser")) {
    //        isloggedIn = true;
    //    }
    //
    //else
    // {
    //    localStorage.removeItem('currentUser');
    //    this.router.navigate(['/login']);
    //}





