import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
import {HttpService} from './_services/http.service';
import {HttpAddUserService} from './_services/http-add-user.service';
import {Location} from '@angular/common';

//declare var $: any;


@Component({
    moduleId: module.id,
    selector: 'my-app',
    styles: [` 
        .active a {
        color:#fff;
        }
    `],
    templateUrl: './app.component.html',
    providers: [HttpService, HttpService]

})
export class AppComponent {
    //public isCollapsed: boolean = true;

    constructor(private location: Location) {
        let logged: boolean;
        let path = location.path();
        console.log(path);
        if (path === "/uprofile") {
            this.logged = true;

        }
        else if (path === "/bprofile") {
            this.logged = true;
        }
        else {
            this.logged = false;

        }

    }

    //closeMenu() {
    //
    //    console.log('close menu');
    //}

        //var clientHeight = document.documentElement.clientHeight;
        //const navMenu = $('#navigation-menu');
        //const menuHeight = $('#navigation-menu').outerHeight();
        //const headerHeight = $('header').height();
        //const linkActive = $('li');
        //$('.label-toggle').addClass('label-toggle-click');
        //
        //navMenu.toggle(function () {
        //    let menuClose = $('#navigation-menu').css('display');
        //    console.log(menuClose + ' test');
        //    linkActive.click(function () {
        //        navMenu.css('display', 'none');
        //        $('.label-toggle').removeClass('label-toggle-click');
        //        $('.wrapper').height('auto');
        //    });
        //    if (menuClose == 'block') {
        //        $('.wrapper').height(menuHeight + headerHeight);
        //        $('.wrapper').css('overflow', 'hidden');
        //
        //        console.log('test display block');
        //
        //    }
        //    else if (menuClose == 'none') {
        //        $('.label-toggle').removeClass('label-toggle-click');
        //        $('.wrapper').height('auto');
        //        $('.wrapper').css('overflow', 'auto');
        //        console.log('test display none');
        //    }
        //
        //});
        //
        //
        //$(window).resize(function () {
        //            let menuC = $('#navigation-menu').css('display');
        //            let width = $(window).width();
        //            console.log(width);
        //            if (width > 768) {
        //                $('#navigation-menu').css('display', 'flex');
        //                console.log(width + 'if');
        //            }
        //            else if( width < 768 && menuC == 'block') {
        //                $('.label-toggle').removeClass('label-toggle-click');
        //                console.log('width < 768 && menuC == block');
        //                }
        //            else {
        //                $('#navigation-menu').css('display', 'none');
        //            }
        //        });
        //
        //    }


}







