import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { HttpService } from './_services/http.service';
import { HttpAddUserService } from './_services/http-add-user.service';
import {Location} from '@angular/common';

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
  constructor(private location:Location) {
    let logged:boolean;
    let path = location.path();
    // let logged;
    console.log(path);
    if (path === "/uprofile") {
      this.logged = true;
      console.log('false!');
    }
    else if(path === "/bprofile"){
      this.logged = true;
    }
    else {
      this.logged = false;
      console.log('true!');
    }
    // this.logged = true;
    // console.log(router.url);
    // console.log(this.logged + 'logged');
  }
}


//
//
//   constructor(router: Router) {
//     // logout()
//     // {
//     //   localStorage.removeItem('currentUser');
//     //   router.navigate(['/login']);
//     // }
//
//     router.events.subscribe((url: any) => console.log(url));



    // constructor(private _router: Router ) {
    //     this.router = _router;
    // }
    // loggedIn = false;
    // if (this.router.url === '/uprofile ')
    //
    // constructor(private auth: HttpService, private router: Router) {
    //     this.loggedIn = this.auth.login();
    // }






