import {User} from "../store/user/user.types";

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store} from "@ngrx/store";
import {Login, Logout} from "../store/user/user.action";
import {AppState} from "../store/app.state";


@Injectable({ providedIn: 'root' })
export class AuthService {
  public user: User | undefined;

  constructor(private store: Store<AppState>, private router: Router) {

  }

  login(user: User) {
    this.user = user;
    // TODO временное хранение в локалсторе
    localStorage.setItem('user', JSON.stringify(user))
    this.store.dispatch(Login(user))
  }

  logout() {
    this.user = undefined;
    this.store.dispatch(Logout());
    this.router.navigate(['/auth/login']);
  }
  //
  // login(username, password) {
  //     return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
  //         .pipe(map(user => {
  //             // store user details and jwt token in local storage to keep user logged in between page refreshes
  //             localStorage.setItem('user', JSON.stringify(user));
  //             this.userSubject.next(user);
  //             return user;
  //         }));
  // }
  //
  // logout() {
  //     // remove user from local storage and set current user to null
  //     localStorage.removeItem('user');
  //     this.userSubject.next(null);
  //     this.router.navigate(['/account/login']);
  // }
  //
  // register(user: User) {
  //     return this.http.post(`${environment.apiUrl}/users/register`, user);
  // }
  //
  // getAll() {
  //     return this.http.get<User[]>(`${environment.apiUrl}/users`);
  // }
  //
  // getById(id: string) {
  //     return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  // }
  //
  // update(id, params) {
  //     return this.http.put(`${environment.apiUrl}/users/${id}`, params)
  //         .pipe(map(x => {
  //             // update stored user if the logged in user updated their own record
  //             if (id == this.userValue.id) {
  //                 // update local storage
  //                 const user = { ...this.userValue, ...params };
  //                 localStorage.setItem('user', JSON.stringify(user));
  //
  //                 // publish updated user to subscribers
  //                 this.userSubject.next(user);
  //             }
  //             return x;
  //         }));
  // }
  //
  // delete(id: string) {
  //     return this.http.delete(`${environment.apiUrl}/users/${id}`)
  //         .pipe(map(x => {
  //             // auto logout if the logged in user deleted their own record
  //             if (id == this.userValue.id) {
  //                 this.logout();
  //             }
  //             return x;
  //         }));
  // }
}
