import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {select, Store} from "@ngrx/store";
import {selectUser} from "../../../store/user/user.selectors";
import {User} from "../../../store/user/user.types";
import {AppState} from "../../../store/app.state";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AuthService} from "../../../shared/services/auth.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [];

  public userSettings = [
    {
      label: 'Профиль',
      icon: 'pi pi-user',
      command: () => {
        this.route.navigate(['dashboard']);
      }
    },
    {
      label: 'Выйти',
      icon: 'pi pi-power-off',
      command: () => {
        this.logout();
      }
    }
  ];

  public isLogin$: Observable<boolean> = this.store.pipe(
    select(selectUser),
    map((user: User | undefined) => !!user?.username)
  );


  // public userName: string = this.authService?.userData?.email;

   public userName$: Observable<string | undefined> = this.store.pipe(
    select(selectUser),
    map((user: User | undefined) => user?.username)
  );


  constructor(
    private route: Router,
    private title: Title,
    private store: Store<AppState>,
    private authService: AuthService
  ) {
  }

  ngOnInit() {

    this.items = [
      {
        label:'Главная',
        icon:'pi pi-fw pi-home',
        command: (event) => this.routeMenu(event.item.label, 'home')
      },
      {
        label:'Показания счётчиков',
        icon:'pi pi-fw pi-dollar',
        command: (event) => this.routeMenu(event.item.label, 'testimony')
      },
      {
        label:'Новости',
        icon:'pi pi-fw pi-book',
        command: (event) => this.routeMenu(event.item.label, 'news')
      },
      {
        label:'Галерея',
        icon:'pi pi-fw pi-image',
        command: (event) => this.routeMenu(event.item.label, 'gallery')
      },
      {
        label:'Информация',
        icon:'pi pi-fw pi-info-circle',
        command: (event) => this.routeMenu(event.item.label, 'about')
      }
    ];
  }

  public routeMenu(label: string, path: string): void {
    this.route.navigate([path]);
    this.title.setTitle(label)
  }

  public logout(): void {
    this.authService.SignOut();
  }
}
