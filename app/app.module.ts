import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
//import {Routes, RouterModule} from '@angular/router';
import {HttpModule}   from '@angular/http';
import {routing}        from './app.routing';

import {UploaderFileComponent} from './uploader/uploader.component'
import {AuthGuard} from './_guards/guards';
import {AppComponent}  from './app.component';
import {EqualValidator} from './_directives/equal-validator.directive';
import {AuthorizationFormComponent} from './register/authorization-form.component';
import {LoginFormComponent} from './login/login-form.component';
import {SearchPageComponent} from './search_page/search-page.component';
import {NotFoundComponent} from './not_found/not-found.component';
import {UserProfileComponent} from './user_profile/user-profile.component';
import {BusinessProfileComponent} from './business_profile/business-profile.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing

    ],
    declarations: [
        EqualValidator,
        AppComponent,
        LoginFormComponent,
        AuthorizationFormComponent,
        SearchPageComponent,
        NotFoundComponent,
        UserProfileComponent,
        BusinessProfileComponent,
        UploaderFileComponent

    ],
    providers: [
        AuthGuard
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}

