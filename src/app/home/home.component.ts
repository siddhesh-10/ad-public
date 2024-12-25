import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { WaitlistComponent } from '../waitlist/waitlist.component';
import { WaveComponent } from '../wave/wave.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,HowItWorksComponent,WaitlistComponent,WaveComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
