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
      color2:0xffd800,
      scale: 1.00,
  scaleMobile: 1.00,
  colorMode: "variance",
  birdSize: 1.20,
  wingSpan: 26.00,
  speedLimit: 6.00,
  separation: 65.00
    });
  }
}
