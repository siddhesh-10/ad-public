import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './home/how-it-works/how-it-works.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'how', component: HowItWorksComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
