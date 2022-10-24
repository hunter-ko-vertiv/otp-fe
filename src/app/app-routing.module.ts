import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./page/page-not-found/page-not-found.component";
import { AuthGuard } from "./core/guard/auth.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () => import('./page/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'otp-code',
    loadChildren: () => import('./page/otp-code/otp-code.module').then(m => m.OtpCodeModule)
  },
  {
    path: '',   redirectTo: '/login', pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
