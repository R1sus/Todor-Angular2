import { Component } from '@angular/core';
import { Response } from '@angular/http';
<<<<<<< HEAD
import { HttpService } from './http.service';
import { HttpService } from './http-add-user.service';
import { Router } from '@angular/router';
//import { routing }        from './app.routing';
=======
import { HttpService } from './_services/http.service';
import { HttpAddUserService } from './_services/http-add-user.service';
>>>>>>> bd85032bae7b9565933443ae7990ca71b819869b
@Component({
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
    loggedIn = false;
    constructor(private auth: HttpService , private router: Router ) {
        this.loggedIn = this.auth.isLoggedIn();
    }

    logout() {
        localStorage.removeItem('authToken');
        this.router.navigate(['/login']);
    }


}

