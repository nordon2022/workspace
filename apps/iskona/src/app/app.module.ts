import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {IskonaMenuModule} from "./components/menu/iskona-menu.module";
import {CommonModule} from "@angular/common";
import {AboutComponent} from "./pages/about/about.component";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {HomeComponent} from "./pages/home/home.component";
import {StoreModule} from "@ngrx/store";
import {AuthFormModule} from "./components/auth-form";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {reducers} from "./store/app.state";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {ButtonModule} from "primeng/button";
import { TestimonyComponent } from './pages/testimony/testimony.component';
import { NewsComponent } from './pages/news/news.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import {PanelModule} from "primeng/panel";
import {TableModule} from "primeng/table";
import {MapModule} from "./components/map/map.module";
import {AngularFireModule} from "@angular/fire/compat";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import {AuthService} from "./shared/services/auth.service";
import {firebaseConfig} from "../environments/environment.prod";
import { SkyengComponent } from './pages/skyeng/skyeng.component';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    TestimonyComponent,
    NewsComponent,
    GalleryComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    SkyengComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    PanelModule,
    IskonaMenuModule,
    StoreModule.forRoot(reducers),
    AuthFormModule,
    ReactiveFormsModule,
    TableModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    MapModule,
    AngularFireModule.initializeApp(firebaseConfig, 'iskona-ng'),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
