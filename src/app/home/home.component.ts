import { Component, NgModule } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { CommonModule } from '@angular/common';
import { WhyJoinUsComponent } from '../why-join-us/why-join-us.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule,HeroComponent,HowItWorksComponent, WhyJoinUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
