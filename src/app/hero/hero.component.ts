import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  ngAfterViewInit(): void {
    // Initialize Vanta.js effect after view is loaded
    (window as any).VANTA.BIRDS({
      el: '#hero',  // Target the element with this id
      backgroundColor: 0x1e1e2c,
      color1: 0x9c27b0,
      color2: 0x6a0dad,
      birdSize: 0.5,
      speedLimit: 3,
      separation: 1000,
    });
  }

  scrollToWaitlist() {
    const waitlistElement = document.querySelector('app-waitlist');
    if (waitlistElement) {
      waitlistElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
