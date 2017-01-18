import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { AuthorizationFormComponent } from './authorization-form.component';
import { LoginFormComponent } from './login-form.component';
import { SearchPageComponent } from './search-page.component';
// import { EmailValidator } from './email.validator';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LoginFormComponent,
    AuthorizationFormComponent,
    SearchPageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

