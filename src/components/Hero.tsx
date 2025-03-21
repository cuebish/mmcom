import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-background-primary pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              MandoMedia LLC helps businesses achieve exceptional growth through strategic digital marketing solutions. From SEO to Performance Marketing, we deliver results that matter.
            </p>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-light transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Analytics dashboard showing increasing website traffic"
              className="rounded-cta"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;