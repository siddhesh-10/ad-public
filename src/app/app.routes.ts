import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './home/how-it-works/how-it-works.component';
import { BrandsComponent } from './brands/brands.component';
import { YourAdsComponent } from './brands/your-ads/your-ads.component';
import { ProfileComponent } from './brands/profile/profile.component';
import { DashboardComponent } from './brands/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { BrandsHomeComponent } from './brands/brands-home/brands-home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AdListComponent } from './brands/your-ads/ad-list/ad-list.component';
import { AdDetailsComponent } from './brands/your-ads/ad-details/ad-details.component';
import { LoginSignupComponent } from './auth/login-signup/login-signup.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyCodeComponent } from './auth/verify-code/verify-code.component';
import { SetPasswordComponent } from './auth/set-password/set-password.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'auth', component: LoginSignupComponent, canActivate: [authGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [authGuard] },
  { path: 'verify-code', component: VerifyCodeComponent, canActivate: [authGuard] },
  { path: 'set-password', component: SetPasswordComponent, canActivate: [authGuard] },
  { path: 'brands', component: BrandsComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'brands', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), MatTabsModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
