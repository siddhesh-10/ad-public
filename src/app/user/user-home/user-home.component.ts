import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InfluencerAd } from '../../shared/models/influencer-ad.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatProgressBarModule]
})
export class UserHomeComponent implements OnInit {
  promotedAds: InfluencerAd[] = [];
  regularAds: InfluencerAd[] = [];
  selectedAd: InfluencerAd | null = null;
  showDetails = false;

  constructor(private router: Router) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const modalContent = document.querySelector('.modal-content');
    const clickedElement = event.target as HTMLElement;
    
    if (this.showDetails && modalContent && !modalContent.contains(clickedElement) && !clickedElement.closest('.ad-card')) {
      this.closeDetails();
    }
  }

  ngOnInit() {
    // Simulated data - replace with actual API call
    this.promotedAds = [
      {
        id: 1,
        title: 'Fashion Promotion',
        imageUrl: 'assets/fashion-ad.avif',
        description: 'Exclusive fashion collection promotion',
        influencerName: 'Fashion Influencer',
        followers: 1000000,
        category: 'Fashion',
        isPromoted: true,
        price: 5000,
        engagement: 5.2,
        totalSpots: 100,
        remainingSpots: 65
      },
      {
        id: 2,
        title: 'Tech Promotion',
        imageUrl: 'assets/tech-ad.webp',
        description: 'Exclusive tech collection promotion',
        influencerName: 'Tech Influencer',
        followers: 100000,
        category: 'tech',
        isPromoted: true,
        price: 5000,
        engagement: 5.2,
        totalSpots: 50,
        remainingSpots: 20
      }
    ];

    this.regularAds = [
      {
        id: 3,
        title: 'Lifestyle Product',
        imageUrl: 'assets/images/fashion-ad.avif',
        description: 'Premium lifestyle product promotion',
        influencerName: 'Lifestyle Guru',
        followers: 500000,
        category: 'Lifestyle',
        isPromoted: false,
        price: 3000,
        engagement: 4.8,
        totalSpots: 75,
        remainingSpots: 45
      },
      {
        id: 4,
        title: 'Winter Collection Launch',
        imageUrl: 'assets/images/chk.png',
        description: '2024-11-01',
        influencerName: 'Lifestyle Guru',
        followers: 500000,
        category: 'Lifestyle',
        isPromoted: false,
        price: 3000,
        engagement: 4.8,
        totalSpots: 200,
        remainingSpots: 150
      },
      {
        id: 5,
        title: '2Winter Collection Launch',
        imageUrl: 'assets/images/chk.png',
        description: '2024-11-01',
        influencerName: 'Lifestyle Guru',
        followers: 500000,
        category: 'Lifestyle',
        isPromoted: false,
        price: 3000,
        engagement: 4.8,
        totalSpots: 200,
        remainingSpots: 190
      }
    ];
  }

  showAdDetails(ad: InfluencerAd, event: Event) {
    event.stopPropagation(); // Prevent document click from immediately closing the modal
    this.selectedAd = ad;
    this.showDetails = true;
  }

  closeDetails() {
    this.showDetails = false;
    this.selectedAd = null;
  }

  getRemainingSpotPercentage(ad: InfluencerAd): number {
    return (ad.remainingSpots / ad.totalSpots) * 100;
  }

  getProgressBarColor(percentage: number): string {
    if (percentage <= 20) return 'warn';
    if (percentage <= 50) return 'accent';
    return 'primary';
  }
} 