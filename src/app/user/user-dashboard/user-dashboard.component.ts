import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatIconModule, 
    BaseChartDirective,
    MatProgressSpinnerModule
  ]
})
export class UserDashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  isDataLoaded = false;

  // Stats summary with default values
  stats = {
    totalEarnings: 0,
    activeAds: 0,
    totalApplications: 0,
    acceptanceRate: 0,
    totalViews: 0,
    avgEngagement: 0
  };

  // Application Status Chart
  applicationChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: ['#4CAF50', '#FFC107', '#F44336']
    }]
  };

  applicationChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: { enabled: true }
    }
  };

  // Monthly Earnings Chart
  earningsChartData: ChartData<'line'> = {
    labels: [],
    datasets: [{
      label: 'Earnings ($)',
      data: [],
      borderColor: '#ff9a9e',
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(255, 154, 158, 0.1)'
    }]
  };

  earningsChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => '$' + value
        }
      }
    }
  };

  // Engagement Rate Chart
  engagementChartData: ChartData<'bar'> = {
    labels: ['Fashion', 'Tech', 'Lifestyle', 'Food', 'Travel'],
    datasets: [{
      label: 'Avg. Engagement Rate (%)',
      data: [8.5, 6.2, 9.1, 7.4, 8.8],
      backgroundColor: [
        'rgba(255, 154, 158, 0.7)',
        'rgba(250, 208, 196, 0.7)',
        'rgba(255, 177, 153, 0.7)',
        'rgba(255, 154, 158, 0.7)',
        'rgba(250, 208, 196, 0.7)'
      ]
    }]
  };

  engagementChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => value + '%'
        }
      }
    }
  };

  // Recent Activities
  recentActivities = [
    {
      type: 'application',
      title: 'Fashion Brand Campaign',
      date: new Date('2024-03-15'),
      status: 'accepted'
    },
    {
      type: 'payment',
      title: 'Payment Received',
      amount: 2500,
      date: new Date('2024-03-12')
    },
    {
      type: 'milestone',
      title: 'Reached 100K Views',
      date: new Date('2024-03-10'),
      campaign: 'Tech Review'
    }
  ];

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    try {
      // Simulating API call
      setTimeout(() => {
        this.stats = {
          totalEarnings: 12500,
          activeAds: 3,
          totalApplications: 15,
          acceptanceRate: 80,
          totalViews: 250000,
          avgEngagement: 8.5
        };

        this.applicationChartData.labels = ['Accepted', 'Pending', 'Rejected'];
        this.applicationChartData.datasets[0].data = [8, 4, 3];

        this.earningsChartData.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        this.earningsChartData.datasets[0].data = [1500, 2300, 1800, 3000, 2200, 2700];

        this.isDataLoaded = true;
        this.updateCharts();
      }, 1000);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      // Handle error state
    }
  }

  private updateCharts(): void {
    if (this.chart?.chart) {
      this.chart.chart.update();
    }
  }

  getActivityIcon(type: string): string {
    switch (type) {
      case 'application': return 'description';
      case 'payment': return 'payments';
      case 'milestone': return 'emoji_events';
      default: return 'info';
    }
  }
} 