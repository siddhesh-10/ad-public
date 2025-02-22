import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [ HttpClientModule]
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 