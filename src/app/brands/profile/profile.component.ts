
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @ViewChild('performanceChart') chartRef!: ElementRef;
  chart!: Chart;

  brand = {
    logo: 'https://via.placeholder.com/150',
    name: 'Luxe Cosmetics',
    industry: 'Beauty & Personal Care'
  };

  stats = {
    totalCampaigns: 8,
    avgEngagement: 4.2,
    totalReach: 2458321
  };

  campaigns = [
    {
      name: 'Summer Glow Collection',
      status: 'Active',
      date: '2023-06-15',
      budget: '$15,000',
      applications: 142,
      progress: 65
    },
    {
      name: 'Skincare Essentials',
      status: 'Completed',
      date: '2023-05-01',
      budget: '$12,500',
      applications: 245,
      progress: 100
    },
    {
      name: 'Holiday Fragrance Launch',
      status: 'Pending',
      date: '2023-09-01',
      budget: '$20,000',
      applications: 89,
      progress: 30
    }
  ];

  ngOnInit() {
    Chart.register(...registerables);
    this.createChart();
  }


  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const ctx = this.chartRef.nativeElement.getContext('2d');
    
    // Destroy existing chart if it exists
    if (this.chart) {
      this.chart.destroy();
    }

    Chart.register(...registerables);
    
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Engagement Rate',
          data: [3.2, 3.8, 4.1, 4.5, 4.2, 4.6],
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#3B82F6',
          pointBorderColor: '#fff',
          pointHoverRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true,
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          x: {
            grid: {
              color: '#374151',
            },
            ticks: {
              color: '#9CA3AF'
            }
          },
          y: {
            grid: {
              color: '#374151',
            },
            ticks: {
              color: '#9CA3AF',
              callback: (value) => `${value}%`
            },
            min: 0,
            max: 6
          }
        },
        interaction: {
          mode: 'nearest',
          intersect: false
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}