import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
interface AdCampaign {
  brandName: string;
  campaignName: string;
  status: 'Active' | 'Pending' | 'Completed';
  budget: string;
  applications: {
    received: number;
    required: number;
  };
  daysRemaining: number;
  timeProgress: number;
  applicationProgress: number;
  requirements: string[];
  deadline: Date;
}

@Component({
  selector: 'app-your-ads',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './your-ads.component.html',
  styleUrl: './your-ads.component.scss'
})
export class YourAdsComponent {

  ads: AdCampaign[] = [
    {
      brandName: 'LuxeCosmetics',
      campaignName: 'Summer Glow Collection',
      status: 'Active',
      budget: '$15,000',
      applications: { received: 142, required: 200 },
      daysRemaining: 12,
      timeProgress: 65,
      applicationProgress: (142/200)*100,
      requirements: ['Beauty', 'Lifestyle', 'Hashtag#SummerGlow', 'Reels', 'Story Highlights'],
      deadline: new Date('2023-08-15')
    },
    {
      brandName: 'FitTrack',
      campaignName: 'Fitness Wear Launch',
      status: 'Pending',
      budget: '$8,000',
      applications: { received: 89, required: 150 },
      daysRemaining: 23,
      timeProgress: 42,
      applicationProgress: (89/150)*100,
      requirements: ['Fitness', 'Workout Gear', 'Hashtag#ActiveLife', 'Carousel Posts'],
      deadline: new Date('2023-09-01')
    },
    {
      brandName: 'EcoHome',
      campaignName: 'Sustainable Living',
      status: 'Completed',
      budget: '$12,500',
      applications: { received: 245, required: 200 },
      daysRemaining: 0,
      timeProgress: 100,
      applicationProgress: 100,
      requirements: ['Eco-Friendly', 'Home Decor', 'Hashtag#GreenLiving', 'Video Content'],
      deadline: new Date('2023-07-30')
    }
  ];

}
