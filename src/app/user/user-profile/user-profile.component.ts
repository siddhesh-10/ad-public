import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { UserProfile, SocialAccount } from '../../shared/models/user-profile.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConnectSocialDialogComponent } from './connect-social-dialog/connect-social-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class UserProfileComponent implements OnInit {
  profile?: UserProfile;
  isLoading = true;
  error: string | null = null;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    // Simulating API call
    this.isLoading = true;
    this.error = null;
    
    setTimeout(() => {
      try {
        // Simulated data
        this.profile = {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          phone: '+1234567890',
          avatar: 'assets/images/default-avatar.png',
          bio: 'Digital content creator passionate about lifestyle and tech',
          location: 'New York, USA',
          categories: ['Lifestyle', 'Technology', 'Fashion'],
          joinedDate: new Date('2023-01-15'),
          socialAccounts: [
            {
              platform: 'instagram',
              username: 'john_lifestyle',
              followers: 150000,
              engagement: 8.5,
              verified: true,
              url: 'https://instagram.com/john_lifestyle'
            },
            {
              platform: 'youtube',
              username: 'JohnTechReviews',
              followers: 200000,
              engagement: 12.3,
              verified: true,
              url: 'https://youtube.com/johntechreviews'
            }
          ],
          payoutInfo: {
            accountHolder: 'John Doe',
            bankName: 'Chase Bank',
            accountNumber: '****6789',
            ifscCode: 'CHAS12345',
            totalEarned: 25000,
            pendingAmount: 1500,
            lastPayout: {
              amount: 2500,
              date: new Date('2024-03-01'),
              status: 'completed'
            },
            payoutHistory: [
              {
                amount: 2500,
                date: new Date('2024-03-01'),
                status: 'completed',
                transactionId: 'TRX123456'
              },
              {
                amount: 3000,
                date: new Date('2024-02-01'),
                status: 'completed',
                transactionId: 'TRX123455'
              }
            ]
          }
        };
        this.isLoading = false;
      } catch (err) {
        this.error = 'Failed to load profile data';
        this.isLoading = false;
      }
    }, 1000);
  }

  getSocialIcon(platform: 'instagram' | 'youtube' | 'tiktok' | 'twitter'): string {
    switch (platform) {
      case 'instagram': return 'photo_camera';
      case 'youtube': return 'play_circle';
      case 'tiktok': return 'music_video';
      case 'twitter': return 'tag';
      default: return 'link';
    }
  }

  formatFollowers(count: number): string {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  }

  getStatusColor(status: 'completed' | 'pending' | 'failed'): string {
    switch (status) {
      case 'completed': return 'success';
      case 'pending': return 'warn';
      case 'failed': return 'error';
      default: return '';
    }
  }

  handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = 'assets/default-avatar.png';
    }
  }

  connectSocialAccount(): void {
    const dialogRef = this.dialog.open(ConnectSocialDialogComponent, {
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && this.profile?.socialAccounts) {
        const newAccount: SocialAccount = {
          ...result,
          verified: false // New accounts start unverified
        };
        this.profile.socialAccounts = [...this.profile.socialAccounts, newAccount];
        
        this.snackBar.open('Social account connected successfully!', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['success-snackbar']
        });
      }
    });
  }
} 