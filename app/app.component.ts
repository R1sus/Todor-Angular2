import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` <header>
        <div class="logo">
          <img src="../img/logo@2x.png" alt="logo"/>
        </div>
        <nav>
          <ul>
            <li routerLinkActive="active"><a routerLink="/about">About</a></li>
            <li routerLinkActive="active"><a routerLink="/contact_us" >Contact us</a></li>
            <li routerLinkActive="active"><a routerLink="/login" >Login</a></li>
            <li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}"><a routerLink="" >Sign in </a></li>
          </ul>
        </nav>
      </header>
    <router-outlet></router-outlet> `
      // '<search-page></search-page>'
      // '<login-form></login-form>'
      // '<authorization-form></authorization-form>'
})
export class AppComponent { }

