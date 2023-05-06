import {AuthService} from "../services";
﻿import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {select, Store} from "@ngrx/store";
import {UserState} from "../store/user/user.reducer";
import {selectUser} from "../store/user/user.selectors";
import {last, map, take, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {Observable} from "rxjs";
import {AppState} from "../store/app.state";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  isUser = false;
  private unsubscribe$: Subject<void> = new Subject<void>();
  constructor(
    private router: Router,
    private accountService: AuthService,
    private store: Store<AppState>
  ) {
    this.store
      .pipe(select(selectUser),
        takeUntil(this.unsubscribe$))
      .subscribe(user => {
        this.isUser = !!user;
        console.log("USER =", user);
      });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkAuth();
    // const user = this.accountService.userValue;
    // if (user) {
    //   // authorised so return true
    //   return true;
    // }
    //
    // // not logged in so redirect to login page with the return url
    // this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
    // return false;
  }
  checkAuth(): Observable<boolean> | boolean {
    console.log("CanLoad Home");
    return true;
    // return this.store.pipe(select(selectUser),
    //   take(1),
    //   map(user => {
    //     let redirectUrl;
    //
    //     if (this.isUser) {
    //       redirectUrl = 'home';
    //     } else {
    //       redirectUrl = 'login';
    //     }
    //     this.router.navigate([redirectUrl]);
    //     console.log("HOME redirectUrl=", redirectUrl);
    //     return true;
    //   })
    // );
  }
}
