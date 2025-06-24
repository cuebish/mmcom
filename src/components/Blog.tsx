import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of SEO in 2025',
    excerpt: 'Discover the latest trends and strategies that will shape SEO in the coming year.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'May 15, 2025',
    slug: 'future-of-seo-2024',
  },
  {
    title: 'Maximizing ROI with Performance Marketing',
    excerpt: 'Learn how to optimize your marketing budget and achieve better returns.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'Apr 10, 2025',
    slug: 'maximizing-roi-performance-marketing',
  },
  {
    title: 'The Power of Data-Driven Marketing',
    excerpt: 'How to use data analytics to make better marketing decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 5, 2025',
    slug: 'power-of-data-driven-marketing',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-background-primary" aria-label="Blog Posts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-[linear-gradient(rgba(118,226,255,0.16)_0%,rgba(118,226,255,0)_100%)] border border-transparent hover:border-secondary transition-colors rounded-lg overflow-hidden"
              itemScope 
              itemType="http://schema.org/BlogPosting"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
                width="800"
                height="400"
                itemProp="image"
              />
              <div className="p-6">
                <time dateTime={post.date} className="text-sm text-gray-500" itemProp="datePublished">{post.date}</time>
                <h3 className="text-xl font-semibold text-primary mt-2 mb-3" itemProp="headline">{post.title}</h3>
                <p className="text-gray-600 mb-4" itemProp="description">{post.excerpt}</p>
                <a
                  href={`#blog/${post.slug}`}
                  className="inline-flex items-center text-[rgb(0,97,210)] hover:text-primary transition-colors"
                  aria-label={`Read more about ${post.title}`}
                  itemProp="url"
                >
                  Read More
                  <ArrowRight className="ml-2" size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;