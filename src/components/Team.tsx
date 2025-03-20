import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background-team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Building digital success stories through strategic performance marketing and data-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Humberto J. Cuebas - Founder"
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Humberto J. Cuebas</h3>
            <p className="text-gray-600 mb-6">Founder & CEO</p>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                MandoMedia was born from a vision to revolutionize digital marketing through a performance-first approach. After years of serving in director-level positions at leading U.S. digital marketing agencies, Humberto recognized the need for a more focused, results-driven methodology.
              </p>
              <p className="mb-4">
                Drawing from extensive experience in performance marketing and conversion optimization, we've built our foundation on a down-funnel vision that prioritizes measurable results and ROI. This approach, refined through years of industry leadership, enables us to deliver exceptional value to our clients.
              </p>
              <p>
                Today, we continue to evolve and innovate, staying ahead of digital marketing trends while maintaining our core focus on performance and results. Our success is measured by the success of our clients, and we're committed to driving meaningful growth for businesses through strategic digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;