import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterOutlet } from '@angular/router';
import { BrandsHomeComponent } from "./brands-home/brands-home.component";
import { YourAdsComponent } from "./your-ads/your-ads.component";
import { ProfileComponent } from "./profile/profile.component";

@Component({
  selector: 'app-brands',
  imports: [RouterOutlet, ReactiveFormsModule, MatTabsModule, NgFor,NgIf, BrandsHomeComponent, YourAdsComponent, ProfileComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  selectedTabIndex: number = 0;
  tabs = [
    { label: 'Home' },
    { label: 'Your Ads' },
    { label: 'Profile' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onTabChange(index: number) {
    this.selectedTabIndex = index;
  }
}
