import { CommonModule } from '@angular/common';
import { AfterViewInit, Component ,HostListener } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-how-it-works',
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent  implements AfterViewInit{
  flowSteps = [
    { title: 'Register & Build Profile', description: 'Add your social profiles, ad preferences, and availability.' },
    { title: 'Explore Ads', description: 'View available ad opportunities tailored to your preferences.' },
    { title: 'Apply & Collaborate', description: 'Submit applications and create content for selected ads.' },
    { title: 'Publish & Earn', description: 'Get ad owner approval and share campaigns on your socials.' }
  ];
  constructor() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
    // Trigger reveal animation for each card on scroll
    gsap.utils.toArray('.card-gsap').forEach((card,index) => {
      const cardElement = card as HTMLElement;
      const cardId = cardElement.id;
      gsap.from(cardElement, {
        opacity: 0,
        y: 150, // Cards start 150px lower
        duration: 1.2,
        zIndex: index + 1, // Ensure cards stack on top of each other
        scrollTrigger: {
          trigger: cardElement,
          start: 'top 90%', // Start animation when the card enters 90% from the top of the viewport
          end: 'top 50%', // End when the card reaches 50% from the top
          toggleActions: 'play none none reverse', // Play the animation when it reaches the trigger, and reverse when it goes out of view
          onEnter: () => {
            // Apply negative translateY for stacking effect
            gsap.to(`#${cardId}`, {
              y: -60 * index, // Move each card up based on its index (negative position)
              duration: 1.2,
              ease: 'power2.out',
            });
          },
        }
      });
    });
  }
    
  }

  // currentCardIndex = 0; // To track which card is the top card

  // // Scroll event listener to update currentCardIndex based on scroll position
  // @HostListener('window:scroll', ['$event'])
  // onScroll() {
  //   const scrollY = window.scrollY;
  //   const cardHeight = 700; // Approximate height per card
  //   this.currentCardIndex = Math.floor((scrollY + 1000) / cardHeight);
  // }

  // // Method to return z-index for each card, based on scroll position
  // getZIndex(index: number): number {
  //   // Return a higher z-index for the current card and next ones
  //   return this.currentCardIndex === index ? 10 : index < this.currentCardIndex ? 5 : 1;
  // }

  // // Method to apply a translateY transform effect for parallax effect based on scroll
  // getTransform(index: number): string {
  //   const offset = (index - this.currentCardIndex) * 50; // Offset for parallax effect
  //   return `translate(-50%, calc(-50% + ${offset}px)) scale(${1 - Math.abs(index - this.currentCardIndex) * 0.1})`;
  // }
// }
