import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../../services";

@Component({
  selector: 'app-reg-form',
  templateUrl: './auth-form.component.html'
})
export class AuthFormComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    if (this.authService.user !== undefined) {
      this.router.navigate(['/']);
    }
  }
}
