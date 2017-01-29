import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './_services/http.service';
import { HttpAddUserService } from './_services/http-add-user.service';
@Component({
  selector: 'my-app',
  styles:[` 
        .active a {
        color:#fff;
        }
    `],
  template: ` <header>
        <div class="logo">
          <a routerLink="/search"> <img src="../img/logo@2x.png" alt="logo"/></a>
        </div>
        <nav>
          <ul>
            <li routerLinkActive="active"><a routerLink="/about">About</a></li>
            <li routerLinkActive="active"><a routerLink="/contact_us" >Contact us</a></li>
            <li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                <a routerLink="/login" class="loginLink" >Log in</a>
            </li>
            <li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                <a routerLink="" class="signLink" >Sign in </a>
            </li>
            <!--<li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">-->
                <!--<a routerLink="/bprofile" class="loginLink" >Log in</a>-->
            <!--</li>-->
            <!--<li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">-->
                <!--<a routerLink="/uprofile" class="signLink" >Sign in </a>-->
            <!--</li>-->
          </ul>
        </nav>
      </header>
    <router-outlet></router-outlet> `,
  providers: [HttpService, HttpAddUserService]
      // '<search-page></search-page>'
      // '<login-form></login-form>'
      // '<authorization-form></authorization-form>'
})
export class AppComponent { }

