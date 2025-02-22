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
        <p>Influencer marketing is booming—but with a twist. Gone are the days when sheer follower count defined an influencer's value. At ZUMPP, we believe in a more transparent and impactful approach: paying influencers based on real engagement. Read on to learn how our performance-based compensation model is set to transform the influencer marketing landscape for both brands and influencers.</p>
        
        <h2>The Problem with Vanity Metrics</h2>
        <p>Traditionally, influencer marketing has focused on surface-level metrics like follower counts. However, these numbers can be misleading. An influencer with millions of followers may not necessarily drive meaningful engagement or deliver the right audience for a campaign. This disconnect can lead to wasted budgets for brands and unfair earnings for influencers.</p>
        <ul>
          <li><strong>Brands struggle</strong> with inflated metrics that don't translate into actual consumer actions.</li>
          <li><strong>Influencers risk</strong> not being rewarded for genuine impact when performance isn’t measured accurately.</li>
        </ul>
        
        <h2>Our Innovative Approach: Performance-Based Compensation</h2>
        <p>At ZUMPP, our mission is simple: reward influence based on true engagement. Instead of relying solely on followers, we evaluate key metrics such as views, likes, and comments to determine an influencer's real impact. This approach creates a fairer and more transparent ecosystem for everyone involved.</p>
        
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
        <p>By shifting the focus from follower counts to measurable engagement, ZUMPP is setting a new standard in influencer marketing. Our performance-based compensation model is a win-win:</p>
        <ul>
          <li>Brands get more reliable, results-driven campaigns.</li>
          <li>Influencers receive fair, performance-based rewards.</li>
        </ul>
        <p>Together, we can drive a more transparent, efficient, and impactful influencer marketing ecosystem.</p>
        
        <p><em>Ready to experience the future of influencer marketing? Join us today and be part of the revolution where impact truly matters.</em></p>
      `
    },
    {
      id: '2',
      title: 'Rethinking Influencer Metrics: CPM_WES vs. Traditional CPM & CPV',
      author: 'Zumpp Platform Team',
      date: new Date('2025-02-15'),
      content: `
        <p>In today’s influencer marketing landscape, traditional metrics such as CPM (Cost Per Mille) and CPV (Cost Per View) have long been the standard for evaluating campaign success. However, these methods often fall short of capturing the full picture – especially when it comes to deeper audience engagement like likes and comments. At ZUMPP, we’ve reimagined performance measurement with our unique CPM_WES metric, ensuring that influencers are rewarded based on their true impact.</p>
        
        <h2>The Limitations of Traditional Metrics</h2>
        <p><strong>CPM (Cost Per Mille):</strong> This metric calculates the cost per 1,000 impressions by dividing the total cost by the number of views. While it provides a snapshot of reach, it fails to account for deeper engagement metrics, such as likes and comments, which can offer a more meaningful insight into audience interaction.</p>
        <p><strong>CPV (Cost Per View):</strong> Similarly, CPV focuses solely on the number of views. This approach can be misleading, as it doesn’t differentiate between a passive view and an engaged one.</p>
        
        <h2>Our Innovative Approach: Weighted Engagement & CPM_WES</h2>
        <p>At ZUMPP, we believe that real value comes from genuine audience interaction. That’s why we introduced the <strong>Weighted Engagement Score (WES)</strong>, which factors in:</p>
        <ul>
          <li><strong>Views</strong> with a baseline weight of <em>1</em></li>
          <li><strong>Likes</strong> with a weight of <em>2</em></li>
          <li><strong>Comments</strong> with a weight of <em>3</em></li>
        </ul>
        <p>The formula for WES is:</p>
        <pre>
    WES = Views + (2 x Likes) + (3 x Comments)
        </pre>
        <p>Building on this, we calculate our performance-based metric, <strong>CPM_WES</strong>, using the following formula:</p>
        <pre>
    CPM_WES = (Influencer Fee / WES) x 1000
        </pre>
        
        <h2>A Practical Comparison Example</h2>
        <p>Imagine an influencer charges <strong>$500</strong> for a post and achieves the following engagement:</p>
        <ul>
          <li><strong>Views:</strong> 50,000</li>
          <li><strong>Likes:</strong> 5,000</li>
          <li><strong>Comments:</strong> 1,000</li>
        </ul>
        <p><strong>Traditional CPM Calculation:</strong></p>
        <pre>
    Traditional CPM = ($500 / 50,000) x 1000 = $10
        </pre>
        <p><strong>Weighted Engagement Score (WES):</strong></p>
        <pre>
    WES = 50,000 + (2 x 5,000) + (3 x 1,000)
        = 50,000 + 10,000 + 3,000
        = 63,000
        </pre>
        <p><strong>Our CPM_WES Calculation:</strong></p>
        <pre>
    CPM_WES = ($500 / 63,000) x 1000 ≈ $7.94
        </pre>
        <p>This example demonstrates that while traditional CPM might suggest a cost of $10 per 1,000 views, our CPM_WES metric reveals that when deeper engagement is factored in, the effective cost per 1,000 quality interactions is closer to $7.94. This not only provides a more comprehensive view of performance but also highlights the enhanced value delivered by campaigns measured with our system.</p>
        
        <h2>Benefits for Brands and Influencers</h2>
        <h3>For Brands</h3>
        <ul>
          <li><strong>Greater Transparency:</strong> Pay for genuine, measurable engagement rather than just surface-level views.</li>
          <li><strong>Optimized ROI:</strong> By focusing on quality interactions, brands can better allocate their budgets and achieve improved campaign results.</li>
          <li><strong>Data-Driven Decisions:</strong> Real-time analytics that reveal both traditional metrics and deeper engagement insights help brands make more informed choices.</li>
        </ul>
        <h3>For Influencers</h3>
        <ul>
          <li><strong>Fair Compensation:</strong> Earn rewards that truly reflect your content’s impact, moving beyond simple follower counts.</li>
          <li><strong>Incentivized Quality Content:</strong> Strive for meaningful interactions like likes and comments, which directly boost your earnings.</li>
          <li><strong>Actionable Insights:</strong> Gain a better understanding of what resonates with your audience to continuously improve your content.</li>
        </ul>
        
        <h2>Enhancing the Homepage: Points to Consider</h2>
        <p>To further highlight the advantages of our performance-based model, we suggest adding a dedicated section on the homepage that includes:</p>
        <ul>
          <li><strong>Dynamic Comparison Widgets:</strong> Interactive tools that display real-time comparisons between traditional CPM/CPV and our CPM_WES. This can visually demonstrate potential cost savings and improved engagement.</li>
          <li><strong>Infographics:</strong> Visual breakdowns of how WES and CPM_WES are calculated, making complex data easily digestible for new users.</li>
          <li><strong>User Testimonials:</strong> Success stories and quotes from brands and influencers who have benefited from our system, adding social proof and credibility.</li>
          <li><strong>Clear CTA Buttons:</strong> Prominent “Learn More” or “Get Started” buttons that guide visitors to detailed information or sign-up pages.</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>By moving beyond traditional metrics and embracing a performance-based approach, ZUMPP is revolutionizing how influencer campaigns are evaluated and compensated. Our CPM_WES metric not only offers a more accurate reflection of real engagement but also drives better outcomes for both brands and influencers.</p>
        <p><em>Experience the future of influencer marketing with us – where every like, comment, and view counts.</em></p>
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
        this.getBlogDetails(Number(this.blogId));
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
