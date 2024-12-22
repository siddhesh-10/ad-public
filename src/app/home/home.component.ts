import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
@Component({
  selector: 'app-home',
  imports: [HeroComponent,HowItWorksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
