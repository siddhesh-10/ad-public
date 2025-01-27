import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  ngAfterViewInit(): void {
    // Initialize Vanta.js effect after view is loaded
    (window as any).VANTA.BIRDS({
      el: '#hero-title',  // Target only the title area
      backgroundColor: 0x121212,
      color1: 0x6b48ff,
      color2: 0xff3c3c,
      scale: 1.00,
      scaleMobile: 1.00,
      colorMode: "variance",
      birdSize: 1.20,
      wingSpan: 26.00,
      speedLimit: 6.00,
      separation: 65.00,
      quantity: 3.00
    });
  }

  scrollToWaitlist() {
    const waitlistElement = document.querySelector('app-waitlist');
    if (waitlistElement) {
      waitlistElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
