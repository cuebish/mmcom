import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of SEO in 2024',
    excerpt: 'Discover the latest trends and strategies that will shape SEO in the coming year.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 15, 2024',
  },
  {
    title: 'Maximizing ROI with Performance Marketing',
    excerpt: 'Learn how to optimize your marketing budget and achieve better returns.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 10, 2024',
  },
  {
    title: 'The Power of Data-Driven Marketing',
    excerpt: 'How to use data analytics to make better marketing decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 5, 2024',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Latest Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-background-primary border border-transparent hover:border-secondary transition-colors rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-gray-500">{post.date}</span>
                <h3 className="text-xl font-semibold text-primary mt-2 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-secondary-dark hover:text-primary transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2" size={16} />
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