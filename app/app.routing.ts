import { Routes, RouterModule } from '@angular/router';
import { BrowserModule }        from '@angular/platform-browser';
import { AuthGuard } from './_guards/guards';
import { AuthorizationFormComponent } from './register/authorization-form.component';
import { LoginFormComponent } from './login/login-form.component';
import { SearchPageComponent } from './search_page/search-page.component';
import { NotFoundComponent } from './not_found/not-found.component';
import { UserProfileComponent } from './user_profile/user-profile.component';
import { BusinessProfileComponent } from './business_profile/business-profile.component';


const appRoutes: Routes =[
    { path: '', redirectTo: '/search', pathMatch:'full'},
    { path: 'search', component: SearchPageComponent},
    //canActivate: [AuthGuard] },
    { path: 'uprofile', component:  UserProfileComponent, canActivate: [AuthGuard] },
    { path: 'bprofile', component: BusinessProfileComponent, canActivate: [AuthGuard]},
    { path: 'signin', component: AuthorizationFormComponent},
    { path: 'login', component: LoginFormComponent},
    { path: '**', component: NotFoundComponent }

];

export const routing = RouterModule.forRoot(appRoutes,{useHash:true});

/**
 * Created by D on 26.01.2017.
 */
