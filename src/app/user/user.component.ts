import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterOutlet, ReactiveFormsModule, MatTabsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  selectedTabIndex: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Set the active tab based on the current route
    const currentRoute = this.router.url.split('/')[2];
    this.selectedTabIndex = this.getTabIndexByRoute(currentRoute);
  }

  onTabChange(index: number): void {
    this.selectedTabIndex = index;
    this.router.navigate(['/user', this.getRouteByTabIndex(index)]);
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