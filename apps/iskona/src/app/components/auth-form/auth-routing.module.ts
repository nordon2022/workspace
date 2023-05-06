import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationFormComponent} from "./registration/registration-form.component";
import {LoginFormComponent} from "./login/login-form.component";
import {AuthFormComponent} from "./auth-form.component";
import {ForgotPasswordComponent} from "../forgot-password/forgot-password.component";

const routes: Routes = [
    {
        path: '', component: AuthFormComponent,
        children: [
            { path: 'login', component: LoginFormComponent },
            { path: 'register', component: RegistrationFormComponent },
            { path: 'forgot', component: ForgotPasswordComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
