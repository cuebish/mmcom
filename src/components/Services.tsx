import React from 'react';
import { Search, TrendingUp, Target, BarChart, Lightbulb, Rocket } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO',
    description: 'Improve your search rankings and drive organic traffic through data-driven SEO strategies.',
  },
  {
    icon: TrendingUp,
    title: 'CRO',
    description: 'Convert more visitors into customers with our conversion rate optimization expertise.',
  },
  {
    icon: Target,
    title: 'Paid Media',
    description: 'Maximize ROI with targeted paid advertising campaigns across multiple platforms.',
  },
  {
    icon: BarChart,
    title: 'Lifecycle Marketing',
    description: 'Engage customers at every stage of their journey with personalized marketing strategies.',
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Develop comprehensive digital marketing strategies aligned with your business goals.',
  },
  {
    icon: Rocket,
    title: 'Performance Marketing',
    description: 'Drive measurable results through data-driven performance marketing campaigns.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background-accent" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital marketing solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="p-6 bg-background-primary rounded-lg border border-transparent hover:border-secondary transition-colors"
              itemScope
              itemType="http://schema.org/Service"
            >
              <service.icon className="w-12 h-12 text-secondary mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-primary mb-3" itemProp="name">{service.title}</h3>
              <p className="text-gray-600" itemProp="description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;