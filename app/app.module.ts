import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
// import {Routes, RouterModule} from '@angular/router';
import { HttpModule }   from '@angular/http';
import { routing }        from './app.routing';


import { AppComponent }  from './app.component';
import { EqualValidator } from './equal-validator.directive';
import { AuthorizationFormComponent } from './authorization-form.component';
import { LoginFormComponent } from './login-form.component';
import { SearchPageComponent } from './search-page.component';
import { NotFoundComponent } from './not-found.component';
import { UserProfileComponent } from './user-profile.component';
import { BusinessProfileComponent } from './business-profile.component';

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
    BusinessProfileComponent

  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }

