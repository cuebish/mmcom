import React from 'react';

const blogContent = {
  'future-of-seo-2024': {
    title: 'The Future of SEO in 2024',
    date: 'Mar 15, 2024',
    author: 'Humberto J. Cuebas',
    authorRole: 'Founder & CEO',
    heroImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
    excerpt: 'Discover the latest trends and strategies that will shape SEO in the coming year.',
    content: `
      <h2>The Evolution of Search Engine Optimization</h2>
      <p>As we progress through 2024, the landscape of SEO continues to evolve at an unprecedented pace. With the integration of AI and machine learning into search algorithms, traditional SEO practices are being redefined. Here's what's shaping the future of SEO:</p>

      <h3>1. AI-Driven Content Optimization</h3>
      <p>Artificial Intelligence is revolutionizing how search engines understand and rank content. The focus has shifted from keyword density to comprehensive topic coverage and user intent matching. Content that provides genuine value and addresses user needs comprehensively is being prioritized over traditional keyword-optimized content.</p>

      <h3>2. Voice Search Optimization</h3>
      <p>With the increasing adoption of voice-activated devices, optimizing for voice search has become crucial. This means focusing on natural language patterns and conversational keywords, as well as ensuring content is structured to answer specific questions directly.</p>

      <h3>3. Core Web Vitals and User Experience</h3>
      <p>Google's emphasis on Core Web Vitals continues to grow stronger. Page speed, interactivity, and visual stability are now key ranking factors. Websites that deliver exceptional user experiences are seeing significant improvements in their search rankings.</p>

      <h3>4. Mobile-First Indexing</h3>
      <p>With mobile devices accounting for the majority of web traffic, mobile optimization is no longer optional. Google's mobile-first indexing means that your site's mobile version is the primary version considered for ranking and indexing.</p>

      <h2>Actionable Strategies for 2024</h2>
      <p>To stay ahead in the evolving SEO landscape, consider implementing these strategies:</p>
      <ul>
        <li>Invest in comprehensive, value-driven content that addresses user intent</li>
        <li>Optimize for voice search by incorporating natural language patterns</li>
        <li>Focus on technical SEO and Core Web Vitals optimization</li>
        <li>Ensure mobile responsiveness and fast loading speeds</li>
        <li>Leverage structured data for enhanced SERP features</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>The future of SEO lies in creating user-centric experiences while adapting to technological advancements. Success in 2024 requires a balanced approach that combines technical excellence with high-quality, valuable content that truly serves your audience's needs.</p>
    `,
  },
  'maximizing-roi-performance-marketing': {
    title: 'Maximizing ROI with Performance Marketing',
    date: 'Mar 10, 2024',
    author: 'Humberto J. Cuebas',
    authorRole: 'Founder & CEO',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
    excerpt: 'Learn how to optimize your marketing budget and achieve better returns.',
    content: `
      <h2>Understanding Performance Marketing</h2>
      <p>Performance marketing has revolutionized how businesses approach digital advertising. By focusing on measurable results and data-driven decisions, companies can optimize their marketing spend and achieve better returns. Here's a comprehensive guide to maximizing your ROI through performance marketing:</p>

      <h3>1. Data-Driven Decision Making</h3>
      <p>Success in performance marketing starts with comprehensive data analysis. Understanding key metrics, customer behavior, and campaign performance allows for informed decisions and strategic optimization.</p>

      <h3>2. Channel Optimization</h3>
      <p>Not all marketing channels perform equally. Learn how to identify and invest in the channels that deliver the best results for your specific business goals and target audience.</p>

      <h3>3. Conversion Rate Optimization</h3>
      <p>Discover techniques to improve conversion rates through A/B testing, user experience optimization, and strategic funnel development.</p>

      <h2>Key Strategies for Success</h2>
      <ul>
        <li>Implement robust tracking and analytics</li>
        <li>Focus on high-performing channels</li>
        <li>Optimize landing pages and conversion funnels</li>
        <li>Utilize retargeting effectively</li>
        <li>Monitor and adjust campaigns in real-time</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>Learn how to track and measure the right KPIs to ensure your performance marketing efforts are delivering optimal results.</p>
    `,
  },
  'power-of-data-driven-marketing': {
    title: 'The Power of Data-Driven Marketing',
    date: 'Mar 5, 2024',
    author: 'Humberto J. Cuebas',
    authorRole: 'Founder & CEO',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80',
    excerpt: 'How to use data analytics to make better marketing decisions.',
    content: `
      <h2>Leveraging Data for Marketing Success</h2>
      <p>In today's digital landscape, data-driven marketing has become essential for businesses looking to make informed decisions and achieve better results. Here's how to harness the power of data in your marketing strategy:</p>

      <h3>1. Understanding Customer Behavior</h3>
      <p>Learn how to collect and analyze customer data to gain valuable insights into behavior patterns, preferences, and needs.</p>

      <h3>2. Personalization at Scale</h3>
      <p>Discover how to use data to create personalized marketing campaigns that resonate with your target audience and drive better engagement.</p>

      <h3>3. Predictive Analytics</h3>
      <p>Explore how predictive analytics can help you anticipate customer needs and optimize your marketing strategies for better results.</p>

      <h2>Implementation Strategies</h2>
      <ul>
        <li>Set up comprehensive data collection systems</li>
        <li>Implement marketing automation</li>
        <li>Develop customer segmentation strategies</li>
        <li>Create personalized customer journeys</li>
        <li>Monitor and optimize campaign performance</li>
      </ul>

      <h2>Future of Data-Driven Marketing</h2>
      <p>Explore emerging trends and technologies that will shape the future of data-driven marketing and how to prepare for them.</p>
    `,
  },
};

const BlogPost = ({ slug }: { slug: string }) => {
  const post = blogContent[slug as keyof typeof blogContent];

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary mb-8">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <p className="text-xl text-white/80 mb-6">{post.excerpt}</p>
            <div className="flex items-center">
              <div className="mr-4">
                <p className="text-white font-semibold">{post.author}</p>
                <p className="text-white/70 text-sm">{post.authorRole}</p>
              </div>
              <div className="text-white/70">|</div>
              <div className="ml-4">
                <p className="text-white/70">{post.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div 
          className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-secondary-dark hover:prose-a:text-primary prose-strong:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default BlogPost;