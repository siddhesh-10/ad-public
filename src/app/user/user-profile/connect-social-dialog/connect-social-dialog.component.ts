import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { SocialAccount } from '../../../shared/models/user-profile.model';

@Component({
  selector: 'app-connect-social-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  template: `
    <h2 mat-dialog-title>Connect Social Account</h2>
    <mat-dialog-content>
      <form #socialForm="ngForm">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Platform</mat-label>
          <mat-select [(ngModel)]="account.platform" name="platform" required>
            <mat-option value="instagram">Instagram</mat-option>
            <mat-option value="youtube">YouTube</mat-option>
            <mat-option value="tiktok">TikTok</mat-option>
            <mat-option value="twitter">Twitter</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Username</mat-label>
          <input matInput [(ngModel)]="account.username" name="username" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Profile URL</mat-label>
          <input matInput [(ngModel)]="account.url" name="url" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Followers Count</mat-label>
          <input matInput type="number" [(ngModel)]="account.followers" name="followers" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Engagement Rate (%)</mat-label>
          <input matInput type="number" [(ngModel)]="account.engagement" name="engagement" required>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button color="primary" 
              [disabled]="!socialForm.form.valid"
              (click)="onSubmit()">
        Connect Account
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    mat-dialog-content {
      min-width: 400px;
    }
    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }
  `]
})
export class ConnectSocialDialogComponent {
  account: Partial<SocialAccount> = {
    platform: undefined,
    username: '',
    followers: 0,
    engagement: 0,
    verified: false,
    url: ''
  };

  constructor(private dialogRef: MatDialogRef<ConnectSocialDialogComponent>) {}

  onSubmit(): void {
    this.dialogRef.close(this.account);
  }
} 