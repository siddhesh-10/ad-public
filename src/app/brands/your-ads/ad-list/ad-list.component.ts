import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ad-list',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './ad-list.component.html',
  styleUrl: './ad-list.component.scss'
})
export class AdListComponent {
  ads = [
    {
      id: 1,
      title: 'Summer Sale Campaign',
      status: 'Live',
      startDate: '2024-12-01',
      endDate: '2024-12-15',
      totalReach: 50000,
      reach:100
    },
    {
      id: 2,
      title: 'Winter Collection Launch',
      status: 'Ended',
      startDate: '2024-11-01',
      endDate: '2024-11-20',
      totalReach: 75000,
      reach: 70

    },
    // Add more ads
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  viewAdDetails(adId: number): void {
    this.router.navigate(['brands/your-ads/ad-details', adId]);
  }

}
