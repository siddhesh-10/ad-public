import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-details',
  imports: [CommonModule],
  templateUrl: './ad-details.component.html',
  styleUrl: './ad-details.component.scss'
})
export class AdDetailsComponent {
  adId: number | null = null;
  adDetails: any = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.adId = Number(this.route.snapshot.paramMap.get('adId'));
    this.loadAdDetails();
  }

  loadAdDetails(): void {
    // Mock data for ad details; replace with API call
    this.adDetails = {
      id: this.adId,
      title: `Ad Campaign ${this.adId}`,
      description: 'This is a detailed description of the ad campaign.',
      status: 'Live',
      metrics: {
        reach: 50000,
        engagementRate: 8.5,
      },
      applicants: [{ name: "sample name", followers: 100 }, { name: "influe", followers:101000}]
    };
  }
}
