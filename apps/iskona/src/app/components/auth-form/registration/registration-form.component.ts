import {Component} from "@angular/core";
import {UntypedFormBuilder, FormControl, UntypedFormGroup, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-reg-form',
  templateUrl: './registration-form.component.html'
})
export class RegistrationFormComponent {
  constructor(private fb: UntypedFormBuilder, private authService: AuthService) {
  }
  // public form: FormGroup = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: ['', Validators.required],
  //   username: ['', Validators.required],
  //   password: ['', Validators.required],
  //   repeat_password: ['', Validators.required],
  // })

  public form: UntypedFormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  public loading: boolean = false;

  public onSubmit(): void {
    this.authService.SignUp(this.form.value.email, this.form.value.password);
  }
}
