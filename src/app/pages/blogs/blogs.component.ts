import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Revolutionizing Influencer Marketing: Rewarding Impact Over Followers',
      excerpt: `Influencer marketing is booming—but with a twist.Learn how zumpp transform the influencer marketing landscape for both brands and influencers.`,
      content: `p ex ea commodo  mollit anim id est laborum.`,
      author: 'Zumpp platform team',
      date: '2024-01-15',
      image: 'assets/blogs/future-marketing.jpg',
      tags: ['Marketing', 'Trends', 'Influencer']
    },
    {
      id: 2,
      title: 'Rethinking Influencer Metrics: CPM_WES vs. Traditional CPM & CPV',
      excerpt: 'Learn how CPM_WES ,Traditional CPM & CPV works.',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      author: 'Zumpp platform team',
      date: '2024-01-15',
      image: 'assets/blogs/future-marketing.jpg',
      tags: ['Marketing', 'Trends', 'AI']
    },
    {
      id: 3,
      title: 'The Future of Influencer Marketing in 2024',
      excerpt: 'Discover the emerging trends that will shape influencer marketing in the coming year.',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      author: 'Sarah Johnson',
      date: '2024-01-15',
      image: 'assets/blogs/future-marketing.jpg',
      tags: ['Marketing', 'Trends', 'AI']
    },
    {
      id: 4,
      title: 'How AI is Revolutionizing Influencer-Brand Matching',
      excerpt: 'Learn how artificial intelligence is making influencer marketing more efficient and effective.',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      author: 'Alex Chen',
      date: '2024-01-10',
      image: 'assets/blogs/ai-matching.jpg',
      tags: ['AI', 'Technology', 'Innovation']
    }
  ];
} 