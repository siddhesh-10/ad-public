import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.scss'
})
export class Home2Component implements OnInit {
  currentTheme: 'mint' | 'rose' = 'mint';

  ngOnInit() {
    // Initialize theme
    this.setTheme(this.currentTheme);
  }

  setTheme(theme: 'mint' | 'rose') {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'mint' ? 'rose' : 'mint';
    this.setTheme(newTheme);
  }
} 