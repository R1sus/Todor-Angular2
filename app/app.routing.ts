import { Routes, RouterModule } from '@angular/router';

import { AuthorizationFormComponent } from './authorization-form.component';
import { LoginFormComponent } from './login-form.component';
import { SearchPageComponent } from './search-page.component';
import { NotFoundComponent } from './not-found.component';
import { UserProfileComponent } from './user-profile.component';
import { BusinessProfileComponent } from './business-profile.component';

const appRoutes: Routes =[
    { path: '', component: AuthorizationFormComponent},
    { path: 'search', component: SearchPageComponent },
    { path: 'uprofile', component:  UserProfileComponent },
    { path: 'bprofile', component: BusinessProfileComponent},
    { path: 'signin', component: AuthorizationFormComponent},
    { path: 'login', component: LoginFormComponent},
    { path: '**', component: NotFoundComponent }

];

export const routing = RouterModule.forRoot(appRoutes);

/**
 * Created by D on 26.01.2017.
 */
