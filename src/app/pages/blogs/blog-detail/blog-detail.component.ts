import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../../shared/models/blog-model';
import { CommonModule } from '@angular/common';
// import { BlogService } from '../services/blog.service'; // Adjust the path as necessary

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  imports: [CommonModule],

})


export class BlogDetailComponent implements OnInit {
  blogId: string | null = null;
  blog: any; // You can define an interface for blog data if available
  
  
   blogs: Blog[] = [
    {
      id: '1',
      title: 'Revolutionizing Influencer Marketing: Rewarding Impact Over Followers',
      author: 'ZUMPP Platform Team',
      date: new Date('2025-02-15'),
      content: `
        <p>Influencer marketing is booming—but with a twist. Gone are the days when sheer follower count defined an influencer's value. At [Your Platform Name], we believe in a more transparent and impactful approach: paying influencers based on real engagement. Read on to learn how our performance-based compensation model is set to transform the influencer marketing landscape for both brands and influencers.</p>
        
        <h2>The Problem with Vanity Metrics</h2>
        <p>Traditionally, influencer marketing has focused on surface-level metrics like follower counts. However, these numbers can be misleading. An influencer with millions of followers may not necessarily drive meaningful engagement or deliver the right audience for a campaign. This disconnect can lead to wasted budgets for brands and unfair earnings for influencers.</p>
        <ul>
          <li><strong>Brands struggle</strong> with inflated metrics that don't translate into actual consumer actions.</li>
          <li><strong>Influencers risk</strong> not being rewarded for genuine impact when performance isn’t measured accurately.</li>
        </ul>
        
        <h2>Our Innovative Approach: Performance-Based Compensation</h2>
        <p>At [Your Platform Name], our mission is simple: reward influence based on true engagement. Instead of relying solely on followers, we evaluate key metrics such as views, likes, and comments to determine an influencer's real impact. This approach creates a fairer and more transparent ecosystem for everyone involved.</p>
        
        <h3>Key Engagement Metrics</h3>
        <p>We focus on three main indicators of influence:</p>
        <ul>
          <li><strong>Views:</strong> How many times a post is seen.</li>
          <li><strong>Likes:</strong> A quick measure of initial appeal.</li>
          <li><strong>Comments:</strong> Indicative of deeper audience engagement.</li>
        </ul>
        
        <h3>Introducing the Weighted Engagement Score (WES)</h3>
        <p>To combine these metrics into one comprehensive score, we assign each type of engagement a specific weight:</p>
        <ul>
          <li><strong>Views:</strong> Weight of <em>1</em></li>
          <li><strong>Likes:</strong> Weight of <em>2</em></li>
          <li><strong>Comments:</strong> Weight of <em>3</em></li>
        </ul>
        <p>The <strong>Weighted Engagement Score (WES)</strong> is calculated as:</p>
        <pre>
  WES = Views + (2 x Likes) + (3 x Comments)
        </pre>
        
        <h3>A New CPM for Quality Engagement</h3>
        <p>Building on the WES, we introduce a CPM-like metric that ties influencer compensation directly to performance:</p>
        <pre>
  CPM_WES = (Influencer Fee / WES) x 1000
        </pre>
        <p>With this metric, brands can evaluate the cost efficiency of their campaigns, paying for genuine engagement rather than vanity metrics.</p>
        
        <h2>Why This Model Benefits Everyone</h2>
        <h3>For Brands</h3>
        <ul>
          <li><strong>Transparency & ROI:</strong> Brands invest in what truly matters—quality engagement. By paying based on the Weighted Engagement Score, they only spend on results that drive real value.</li>
          <li><strong>Better Campaign Matching:</strong> Our AI-powered platform matches brands with influencers whose performance metrics align with campaign goals, ensuring a higher return on investment.</li>
          <li><strong>Flexibility:</strong> Choose between a pure performance-based model or a hybrid approach with a base payment plus performance bonus.</li>
        </ul>
        
        <h3>For Influencers</h3>
        <ul>
          <li><strong>Fair Compensation:</strong> No longer penalized by low follower counts, influencers earn based on the genuine impact of their content.</li>
          <li><strong>Incentivized Quality Content:</strong> By focusing on views, likes, and comments, influencers are encouraged to create engaging, high-quality content.</li>
          <li><strong>Performance Insights:</strong> Detailed analytics help influencers understand their audience and improve their strategies over time.</li>
        </ul>
        
        <h2>A Tailored Experience for Every User</h2>
        <p>Our platform isn’t a one-size-fits-all solution. We offer dynamic experiences for both brands and influencers. When you sign up, you can choose your path:</p>
        <ul>
          <li><strong>For Brands:</strong> Get insights into how our advanced matching algorithm pairs you with influencers who meet your campaign requirements. Learn how our analytics dashboard tracks every performance metric—from initial views to in-depth engagement.</li>
          <li><strong>For Influencers:</strong> Discover how our system not only highlights your strengths but also provides actionable insights, ensuring you earn what you truly deserve for the impact you create.</li>
        </ul>
        
        <h2>The Future of Influencer Marketing</h2>
        <p>By shifting the focus from follower counts to measurable engagement, [Your Platform Name] is setting a new standard in influencer marketing. Our performance-based compensation model is a win-win:</p>
        <ul>
          <li>Brands get more reliable, results-driven campaigns.</li>
          <li>Influencers receive fair, performance-based rewards.</li>
        </ul>
        <p>Together, we can drive a more transparent, efficient, and impactful influencer marketing ecosystem.</p>
        
        <p><em>Ready to experience the future of influencer marketing? Join us today and be part of the revolution where impact truly matters.</em></p>
      `
    }
  ];
  
  constructor(
    private route: ActivatedRoute,
    // private blogService: BlogService
  ) { }

  ngOnInit(): void {
    // Get the 'id' parameter from the route
    this.route.paramMap.subscribe(params => {
      this.blogId = params.get('id');
      if (this.blogId) {
        // this.getBlogDetails(Number(this.blogId));
        this.getBlogDetails(Number(1));
      }
    });
  }

  getBlogDetails(id: number): void {
    // Fetch blog details using the blog service
    this.blog=id<(this.blogs.length) ? this.blogs[id]: this.blogs[0];
    // this.blogService.getBlogById(id).subscribe(
    //   (data) => {
    //     this.blog = data;
    //   },
    //   (error) => {
    //     console.error('Error fetching blog details:', error);
    //   }
    // );
  }
}
