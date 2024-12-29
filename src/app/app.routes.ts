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

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'how', component: HowItWorksComponent },
  {
    path: 'brands', component: BrandsComponent,
    children: [
      { path: 'brand-home', component: BrandsHomeComponent },
      {
        path: 'your-ads',
        component: YourAdsComponent,
        children: [
          { path: '', component: AdListComponent }, // Default route: show all ads
          { path: 'ad-details/:adId', component: AdDetailsComponent }, // Show details of a specific ad
        ],
      }, 
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
    ],
},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), MatTabsModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
