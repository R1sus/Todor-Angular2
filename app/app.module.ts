import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { EqualValidator } from './equal-validator.directive';

import { AppComponent }  from './app.component';

import { AuthorizationFormComponent } from './authorization-form.component';
import { LoginFormComponent } from './login-form.component';
import { SearchPageComponent } from './search-page.component';
import { NotFoundComponent } from './not-found.component';
// import { EmailValidator } from './email.validator';

const appRoutes: Routes =[
  { path: '', component: SearchPageComponent },
  { path: 'signin', component: AuthorizationFormComponent},
  { path: 'login', component: LoginFormComponent},
  { path: '**', component: NotFoundComponent }
];

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
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EqualValidator,
    AppComponent,
    LoginFormComponent,
    AuthorizationFormComponent,
    SearchPageComponent,
    NotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
