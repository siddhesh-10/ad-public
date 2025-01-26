import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { MyAdsComponent } from './user/my-ads/my-ads.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

@NgModule({
  declarations: [
    UserComponent,
    UserHomeComponent,
    MyAdsComponent,
    UserDashboardComponent,
    UserProfileComponent
  ],
  // ... rest of the module configuration
})
export class AppModule { } 