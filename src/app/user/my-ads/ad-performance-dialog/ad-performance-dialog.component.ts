import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserAd } from '../../../shared/models/user-ad.model';

@Component({
  selector: 'app-ad-performance-dialog',
  templateUrl: './ad-performance-dialog.component.html',
  styleUrls: ['./ad-performance-dialog.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AdPerformanceDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: UserAd) {}
} 