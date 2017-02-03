import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { HttpService } from './_services/http.service';
import { HttpAddUserService } from './_services/http-add-user.service';
import {Location} from '@angular/common';
// import * as $ from 'jquery';
declare var $:any;

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
      // console.log('false!');
    }
    else if (path === "/bprofile"){
      this.logged = true;
    }
    else {
      this.logged = false;
      // console.log('true!');
    }
    // this.logged = true;
    // console.log(router.url);
    // console.log(this.logged + 'logged');
  }

  closeMenu() {

      var scrollHeight = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
      );
      console.log( 'Высота с учетом прокрутки: ' + scrollHeight );

      var clientHeight = document.documentElement.clientHeight;
      const navMenu = $('#navigation-menu');
      const linkActive = $('li');

      $('.label-toggle').addClass('label-toggle-click');


      navMenu.toggle(function () {
          let menuClose = $('#navigation-menu').css('display');
          console.log(menuClose+' test');
        linkActive.click(function () {
          navMenu.css('display', 'none');
          $('.label-toggle').removeClass('label-toggle-click');
        });
        if (menuClose == 'block') {
            // $('main').css('position', 'fixed');
            // $('html, body').css('height',clientHeight);
            $('#navigation-menu').css('height',scrollHeight);
            // $('html, body').css('overflow', 'hidden');
            // $('nav').css('overflow', 'auto');
            // $('body').on('touchmove', function (e) {
            // 	e.preventDefault();
            // });
            console.log('test display block');

        }
        else if (menuClose == 'none') {
          $('.label-toggle').removeClass('label-toggle-click');
            // $('html, body').css('height','auto');
            // $('main').css('position', 'relative');
            // $('html, body').css('overflow', 'auto');
            // $('body').off('touchmove');
            console.log('test display none');
        }
      // });

    });
     // linkActive.
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






