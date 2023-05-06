import {NgModule} from "@angular/core";
import {LoginFormComponent} from "./login/login-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {RegistrationFormComponent} from "./registration/registration-form.component";
import {AuthFormComponent} from "./auth-form.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {CommonModule} from "@angular/common";
import {ImageModule} from "primeng/image";
import {ForgotPasswordComponent} from "../forgot-password/forgot-password.component";

@NgModule({
  declarations: [
    LoginFormComponent,
    RegistrationFormComponent,
    AuthFormComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    AuthRoutingModule,
    ImageModule

  ],
  exports: [
  ],
  providers: []
})
export class AuthFormModule {

}
