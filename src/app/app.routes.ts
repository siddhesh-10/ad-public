import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { MyAdsComponent } from './user/my-ads/my-ads.component';
import { Home2Component } from './home2-experiment/home2.component';

export const routes: Routes = [
  // Public Routes (No Auth Guard)
  { path: 'home', component: HomeComponent },
  { path: 'home2', component: Home2Component },

  {
    path: 'user',
    component: UserComponent,
   // canActivate: [authGuard],
    //data: { expectedRoles: ['user'] },
    children: [
      { path: 'user-home', component: UserHomeComponent },
      { path: 'my-ads', component: MyAdsComponent },
      { path: 'user-dashboard', component: UserDashboardComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: '', redirectTo: 'user-home', pathMatch: 'full' }
    ]
  },

  // Auth Routes (Protected)
  { path: 'auth', component: LoginSignupComponent, canActivate: [authGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [authGuard] },
  { path: 'verify-code', component: VerifyCodeComponent, canActivate: [authGuard] },
  { path: 'set-password', component: SetPasswordComponent, canActivate: [authGuard] },

  // Protected Brand Routes
  {
    path: 'brands',
    component: BrandsComponent,
    canActivate: [authGuard], // Apply authGuard at parent level
    //data: { expectedRoles: ['brand'] },
    children: [
      { path: 'brand-home', component: BrandsHomeComponent },
      {
        path: 'your-ads',
        component: YourAdsComponent,
        children: [
          { path: '', component: AdListComponent }, // Default: Show all ads
          { path: 'ad-details/:adId', component: AdDetailsComponent } // Specific ad details
        ]
      },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },

  // Wildcard Route (Final Catch-All)
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), MatTabsModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
