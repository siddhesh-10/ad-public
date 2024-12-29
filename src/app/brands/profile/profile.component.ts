import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  accountStatus = "verified";
  subscriptionPlan = "basic";
  accountBalance = 100000;

  onUpgradePlan() {
    this.subscriptionPlan = "Updating ...";
  }
}
