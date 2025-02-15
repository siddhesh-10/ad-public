import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

// Add these interfaces for type safety
interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

interface WorkStep {
  number: string;
  title: string;
  description: string;
  bulletPoints: string[];
}

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [CommonModule,MatIconModule, RouterModule],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.scss'
})
export class Home2Component implements OnInit {
  currentTheme: 'mint' | 'rose' = 'mint';
  selectedAudience: 'brand' | 'influencer' = 'brand';

  featureCards: { [key: string]: FeatureCard[] } = {
    brand: [
      {
        icon: 'auto_awesome',
        title: 'AI-Powered Influencer Matching',
        description: 'Our advanced AI identifies influencers whose audience and style perfectly match your brand\'s goals.'
      },
      {
        icon: 'insights',
        title: 'Comprehensive Analytics & ROI Tracking',
        description: 'Monitor campaign performance in real time with detailed metrics and cost-per-engagement insights.'
      },
      {
        icon: 'security',
        title: 'Secure & Transparent Platform',
        description: 'Enjoy peace of mind with end-to-end encryption, clear pricing, and secure payment processing.'
      },
      {
        icon: 'account_tree',
        title: 'Flexible Campaign Management',
        description: 'Customize your campaign settings and let our smart automation streamline influencer outreach.'
      },
      {
        icon: 'groups',
        title: 'Vibrant Community of Experts',
        description: 'Join a network of forward-thinking brands and benefit from shared insights and success stories.'
      },
      {
        icon: 'support_agent',
        title: '24/7 Dedicated Support',
        description: 'Our support team is available around the clock to ensure your campaign\'s success.'
      }
    ],
    influencer: [
      {
        icon: 'currency_rupee',
        title: 'Fair, Performance-Based Payouts',
        description: 'Receive transparent, performance-based compensation that rewards your creativity and engagement.'
      },
      {
        icon: 'work',
        title: 'Access to High-Paying Collaborations',
        description: 'Our AI matches you with reputable brands eager to work with talent just like you.'
      },
      {
        icon: 'trending_up',
        title: 'Personalized Growth & Analytics',
        description: 'Gain insights into your audience performance and learn how to improve your reach and earnings.'
      },
      {
        icon: 'person',
        title: 'Easy, Professional Profile Setup',
        description: 'Showcase your portfolio and integrate your social media channels seamlessly.'
      },
      {
        icon: 'people',
        title: 'Engaging Community & Networking',
        description: 'Join a thriving community of influencers, share experiences, and collaborate on growth strategies.'
      },
      {
        icon: 'support_agent',
        title: 'Round-the-Clock Support & Guidance',
        description: 'Our dedicated team is here to help you navigate opportunities and maximize your impact.'
      }
    ]
  };

  workSteps: { [key: string]: WorkStep[] } = {
    brand: [
      {
        number: '01',
        title: 'Create Your Campaign',
        description: 'Sign up and fill out your campaign details—set your goals, target audience, budget, and creative guidelines.',
        bulletPoints: ['Upload creative assets', 'Define your campaign objectives']
      },
      {
        number: '02',
        title: 'Set Your Preferences',
        description: 'Customize your influencer search by setting filters such as audience demographics, influencer reach, and cost parameters.',
        bulletPoints: ['Advanced targeting options', 'Flexible budget settings']
      },
      {
        number: '03',
        title: 'Get Matched',
        description: 'Our AI-powered system analyzes your campaign parameters and presents you with a curated list of vetted influencers.',
        bulletPoints: ['View predicted reach and engagement metrics', 'Compare CPM and performance scores']
      },
      {
        number: '04',
        title: 'Launch & Monitor',
        description: 'Initiate your campaign with a click and track its performance in real time with our analytics dashboard.',
        bulletPoints: ['Real-time ROI tracking', 'Instant performance insights']
      }
    ],
    influencer: [
      {
        number: '01',
        title: 'Create Your Profile',
        description: 'Sign up and build a compelling profile that highlights your style, past collaborations, and social media reach.',
        bulletPoints: ['Integrate your social media channels', 'Showcase your portfolio']
      },
      {
        number: '02',
        title: 'Set Your Preferences',
        description: 'Define your collaboration interests, compensation models, and the type of campaigns you\'re looking for.',
        bulletPoints: ['Choose between fixed rate or performance-based earnings', 'Tailor notifications to your style']
      },
      {
        number: '03',
        title: 'Get Matched',
        description: 'Our intelligent algorithm connects you with brands that align with your audience and content style.',
        bulletPoints: ['Review campaign details including predicted reach and CPM', 'Apply only for campaigns that suit your profile']
      },
      {
        number: '04',
        title: 'Collaborate & Earn',
        description: 'Work with your chosen brands, create authentic content, and monitor your engagement and earnings in real time.',
        bulletPoints: ['Track performance through our dashboard', 'Receive support and pricing recommendations as you grow']
      }
    ]
  };

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

  setAudience(audience: 'brand' | 'influencer') {
    this.selectedAudience = audience;
  }

  getSectionSubheading(): string {
    return this.selectedAudience === 'brand' 
      ? 'Experience a smarter way to run influencer campaigns'
      : 'Empower your influence and earn what you deserve';
  }

  getHowItWorksHeading(): string {
    return `How It Works for ${this.selectedAudience === 'brand' ? 'Brands' : 'Influencers'}`;
  }
} 