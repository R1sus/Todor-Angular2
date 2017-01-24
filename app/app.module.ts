import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule }   from '@angular/http';
//fake server side
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';
// import { fakeBackendProvider } from './fake-bakend';
//
import { AppComponent }  from './app.component';
import { EqualValidator } from './equal-validator.directive';
import { AuthorizationFormComponent } from './authorization-form.component';
import { LoginFormComponent } from './login-form.component';
import { SearchPageComponent } from './search-page.component';
import { NotFoundComponent } from './not-found.component';


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
    HttpModule,
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
  // providers: [
  //   fakeBackendProvider,
  //   MockBackend,
  //   BaseRequestOptions
  // ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

