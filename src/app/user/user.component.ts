import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { MyAdsComponent } from './my-ads/my-ads.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CognitoService } from '../shared/services/cognito.service';
import { ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-user',
  imports: [
    CommonModule,
    UserHomeComponent,
    MyAdsComponent, 
    UserDashboardComponent,
    UserProfileComponent,
    RouterOutlet,
    ReactiveFormsModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  selectedTabIndex: number = 0;
  tabs = [
    { label: 'Home', icon: 'home' },
    { label: 'My Ads', icon: 'campaign' },
    { label: 'Dashboard', icon: 'dashboard' },
    { label: 'Profile', icon: 'person' }
  ];

  isDarkTheme = true;

  constructor(
    private router: Router, 
    private cognitoService: CognitoService,
    private themeService: ThemeService,
    private cdr: ChangeDetectorRef
  ) {
    this.themeService.isDarkTheme$.subscribe(
      isDark => this.isDarkTheme = isDark
    );
  }

  ngOnInit(): void {
    // Set the active tab based on the current route
    const currentRoute = this.router.url.split('/')[2];
    this.selectedTabIndex = this.getTabIndexByRoute(currentRoute);
  }

  onTabChange(index: number) {
    this.selectedTabIndex = index;
  }

  async onLogout() {
    await this.cognitoService.signOut();
    console.log('Logout successful');
    this.router.navigate(['/auth']);
    this.cdr.detectChanges();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  private getTabIndexByRoute(route: string): number {
    switch (route) {
      case 'my-ads':
        return 1;
      case 'user-dashboard':
        return 2;
      case 'user-profile':
        return 3;
      default:
        return 0;
    }
  }

  private getRouteByTabIndex(index: number): string {
    switch (index) {
      case 1:
        return 'my-ads';
      case 2:
        return 'user-dashboard';
      case 3:
        return 'user-profile';
      default:
        return 'user-home';
    }
  }
} 