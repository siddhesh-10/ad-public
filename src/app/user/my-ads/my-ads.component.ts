import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { UserAd } from '../../shared/models/user-ad.model';
import { AdPerformanceDialogComponent } from './ad-performance-dialog/ad-performance-dialog.component';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class MyAdsComponent implements OnInit {
  userAds: UserAd[] = [];
  filteredAds: UserAd[] = [];
  selectedStatus: 'all' | 'applied' | 'rejected' | 'accepted' = 'all';

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    // Simulated data - replace with actual API call
    this.userAds = [
      {
        id: 1,
        title: 'Fashion Collection Promotion',
        imageUrl: 'assets/images/fashion-ad.avif',
        status: 'accepted',
        appliedDate: new Date('2024-02-15'),
        responseDate: new Date('2024-02-20'),
        influencerName: 'Fashion Influencer',
        category: 'Fashion',
        performance: {
          views: 150000,
          comments: 2500,
          likes: 15000,
          shares: 1200,
          currentEarnings: 2500,
          projectedEarnings: 5000,
          engagementRate: 8.5,
          reachRate: 15.2,
          startDate: new Date('2024-03-01'),
          endDate: new Date('2024-04-01')
        }
      },
      {
        id: 2,
        title: 'Tech Gadget Review',
        imageUrl: 'assets/images/tech-ad.webp',
        status: 'applied',
        appliedDate: new Date('2024-03-10'),
        influencerName: 'Tech Reviewer',
        category: 'Technology'
      },
      {
        id: 3,
        title: 'Lifestyle Product Campaign',
        imageUrl: 'assets/images/chk.png',
        status: 'rejected',
        appliedDate: new Date('2024-03-05'),
        responseDate: new Date('2024-03-08'),
        influencerName: 'Lifestyle Guru',
        category: 'Lifestyle'
      }
    ];
    this.filterAds('all');
  }

  filterAds(status: 'all' | 'applied' | 'rejected' | 'accepted') {
    this.selectedStatus = status;
    this.filteredAds = status === 'all' 
      ? this.userAds 
      : this.userAds.filter(ad => ad.status === status);
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'applied': return 'accent';
      case 'accepted': return 'primary';
      case 'rejected': return 'warn';
      default: return 'primary';
    }
  }

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/placeholder-ad.png'; // Make sure to add a placeholder image
  }

  showPerformanceDetails(ad: UserAd) {
    if (ad?.status === 'accepted' && ad?.performance) {
      this.dialog.open(AdPerformanceDialogComponent, {
        data: ad,
        width: '600px',
        panelClass: 'performance-dialog'
      });
    }
  }
} 