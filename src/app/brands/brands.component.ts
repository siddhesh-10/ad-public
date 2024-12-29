import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-brands',
  imports: [RouterOutlet, ReactiveFormsModule, MatTabsModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  selectedTabIndex: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Set the active tab based on the current route
    const currentRoute = this.router.url.split('/')[2];
    this.selectedTabIndex = this.getTabIndexByRoute(currentRoute);
  }

  onTabChange(index: number): void {
    this.selectedTabIndex = index;
    this.router.navigate(['/brands', this.getRouteByTabIndex(index)]);
  }

  private getTabIndexByRoute(route: string): number {
    switch (route) {
      case 'your-ads':
        return 1;
      case 'dashboard':
        return 2;
      case 'profile':
        return 3;
      default:
        return 0;
    }
  }

  private getRouteByTabIndex(index: number): string {
    switch (index) {
      case 1:
        return 'your-ads';
      case 2:
        return 'dashboard';
      case 3:
        return 'profile';
      default:
        return 'brand-home';
    }
  }
}
