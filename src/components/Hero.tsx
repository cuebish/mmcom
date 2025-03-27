import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-background-primary pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Transform Your<br className="hidden lg:block" /> Digital Presence
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              MandoMedia helps businesses achieve exceptional growth through strategic digital marketing solutions. From SEO to Performance Marketing, we deliver results that matter.
            </p>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-light transition-colors"
              aria-label="Get Started with MandoMedia's Digital Marketing Services"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} aria-hidden="true" />
            </a>
          </div>
          <div className="relative">
            <img
              src="https://s3.us-east-2.amazonaws.com/mando.media/mmBarChart.png"
              alt="Analytics dashboard showing increasing website traffic and digital marketing performance metrics"
              className="rounded-cta"
              loading="eager"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;