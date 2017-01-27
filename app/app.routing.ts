import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards';
import { AuthorizationFormComponent } from './authorization-form.component';
import { LoginFormComponent } from './login-form.component';
import { SearchPageComponent } from './search-page.component';
import { NotFoundComponent } from './not-found.component';
import { UserProfileComponent } from './user-profile.component';
import { BusinessProfileComponent } from './business-profile.component';


const appRoutes: Routes =[
    { path: '',redirectTo: '/signin', pathMatch:'full'},
    { path: 'search', component: SearchPageComponent, canActivate: [AuthGuard] },
    { path: 'uprofile', component:  UserProfileComponent, canActivate: [AuthGuard] },
    { path: 'bprofile', component: BusinessProfileComponent, canActivate: [AuthGuard]},
    { path: 'signin', component: AuthorizationFormComponent},
    { path: 'login', component: LoginFormComponent},
    { path: '**', component: NotFoundComponent }

];

export const routing = RouterModule.forRoot(appRoutes);

/**
 * Created by D on 26.01.2017.
 */
