import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
 //import {Routes, RouterModule} from '@angular/router';
import { HttpModule }   from '@angular/http';
import { routing }        from './app.routing';

import { UploaderFileComponent} from './uploader/uploader.component'
import { AuthGuard } from './_guards/guards';
import { AppComponent }  from './app.component';
import { EqualValidator } from './_directives/equal-validator.directive';
import { AuthorizationFormComponent } from './register/authorization-form.component';
import { LoginFormComponent } from './login/login-form.component';
import { SearchPageComponent } from './search_page/search-page.component';
import { NotFoundComponent } from './not_found/not-found.component';
import { UserProfileComponent } from './user_profile/user-profile.component';
import { BusinessProfileComponent } from './business_profile/business-profile.component';




//
// const appRoutes: Routes =[
//   { path: '', component: AuthorizationFormComponent},
//   { path: 'search', component: SearchPageComponent },
//   { path: 'uprofile', component:  UserProfileComponent },
//   { path: 'bprofile', component: BusinessProfileComponent},
//   { path: 'signin', component: AuthorizationFormComponent},
//   { path: 'login', component: LoginFormComponent},
//   { path: '**', component: NotFoundComponent }
//
// ];

// RouterModule.forRoot([
//   {
//     path: 'login',
//     component:  LoginFormComponent
//   }
// ])

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    // RouterModule.forRoot(appRoutes)
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

  bootstrap: [ AppComponent ]
})
export class AppModule { }

