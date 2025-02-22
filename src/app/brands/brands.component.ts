import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterOutlet } from '@angular/router';
import { BrandsHomeComponent } from "./brands-home/brands-home.component";
import { YourAdsComponent } from "./your-ads/your-ads.component";
import { ProfileComponent } from "./profile/profile.component";
import { CognitoService } from "../shared/services/cognito.service";
import { ChangeDetectorRef } from '@angular/core';
import { ChatBubbleComponent } from '../shared/components/chat-bubble/chat-bubble.component';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ChatBubbleComponent,
    RouterOutlet,
    ReactiveFormsModule,
    MatTabsModule,
    NgFor,
    NgIf,
    BrandsHomeComponent,
    YourAdsComponent,
    ProfileComponent
  ]
})
export class BrandsComponent {
  selectedTabIndex: number = 0;
  tabs = [
    { label: 'Your Ads', icon: 'campaign' }, 
    { label: 'Create a new Ad', icon: 'add_circle' }, 
    { label: 'Profile & Dashboard', icon: 'person' }
  ];
  

  constructor(private router: Router, private cognitoService: CognitoService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  onTabChange(index: number) {
    this.selectedTabIndex = index;
  }
  async onLogout() {
    // Implement logout functionality here
    // For example, clear the token or navigate to the login page
    console.log('Logout clicked');
    await this.cognitoService.signOut();
    console.log('Logout successful');
    this.router.navigate(['/auth']);
    this.cdr.detectChanges();
  }
}
