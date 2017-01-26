System.register(['@angular/router', './authorization-form.component', './login-form.component', './search-page.component', './not-found.component', './user-profile.component', './business-profile.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, authorization_form_component_1, login_form_component_1, search_page_component_1, not_found_component_1, user_profile_component_1, business_profile_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authorization_form_component_1_1) {
                authorization_form_component_1 = authorization_form_component_1_1;
            },
            function (login_form_component_1_1) {
                login_form_component_1 = login_form_component_1_1;
            },
            function (search_page_component_1_1) {
                search_page_component_1 = search_page_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            },
            function (user_profile_component_1_1) {
                user_profile_component_1 = user_profile_component_1_1;
            },
            function (business_profile_component_1_1) {
                business_profile_component_1 = business_profile_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: '', component: authorization_form_component_1.AuthorizationFormComponent },
                { path: 'search', component: search_page_component_1.SearchPageComponent },
                { path: 'uprofile', component: user_profile_component_1.UserProfileComponent },
                { path: 'bprofile', component: business_profile_component_1.BusinessProfileComponent },
                { path: 'signin', component: authorization_form_component_1.AuthorizationFormComponent },
                { path: 'login', component: login_form_component_1.LoginFormComponent },
                { path: '**', component: not_found_component_1.NotFoundComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
/**
 * Created by D on 26.01.2017.
 */
//# sourceMappingURL=app.routing.js.map