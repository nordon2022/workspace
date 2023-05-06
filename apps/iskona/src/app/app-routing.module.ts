import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {NewsComponent} from "./pages/news/news.component";
import {TestimonyComponent} from "./pages/testimony/testimony.component";
import {VerifyEmailComponent} from "./components/verify-email/verify-email.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./shared/guard/auth.guard";
import { SkyengComponent } from './pages/skyeng/skyeng.component';

const authModule = () => import('./components/auth-form/auth-form.module').then(x => x.AuthFormModule);
const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard] },
  { path: 'news', component: NewsComponent, canActivate: [AuthGuard] },
  { path: 'skyeng', component: SkyengComponent, canActivate: [AuthGuard] },
  { path: 'testimony', component: TestimonyComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: authModule},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]  },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
