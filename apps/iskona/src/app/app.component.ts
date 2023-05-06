import { Component } from '@angular/core';
import {User} from "./store/user/user.types";
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public user: User | undefined;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    // const user: User =  JSON.parse(localStorage.getItem('user') || '{}');
    // if (user?.username) {
    //   this.accountService.login(user);
    // }
  }

  public isLogin(): boolean {
    return this.authService.isLoggedIn;
  }

  title = 'Искона';
}
