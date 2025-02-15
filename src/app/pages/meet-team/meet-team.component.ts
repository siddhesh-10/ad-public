import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
  };
}

@Component({
  selector: 'app-meet-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meet-team.component.html',
  styleUrls: ['./meet-team.component.scss']
})
export class MeetTeamComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former Marketing Director with 10+ years in digital advertising and AI technology.',
      image: 'assets/team/sarah.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/sarah',
        twitter: 'https://twitter.com/sarah'
      }
    },
    {
      name: 'Alex Chen',
      role: 'CTO & Co-Founder',
      bio: 'AI researcher and full-stack developer with expertise in machine learning.',
      image: 'assets/team/alex.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/alex'
      }
    },
    // Add more team members as needed
  ];
} 