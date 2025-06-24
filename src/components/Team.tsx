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
              src="https://s3.us-east-2.amazonaws.com/mando.media/hjcProfile.png"
              alt="Humberto J. Cuebas - Founder"
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Humberto J. Cuebas</h3>
            <p className="text-gray-600 mb-6">Founder & CEO</p>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                At MandoMedia, we help growth-focused brands succeed in a digital landscape that's evolving faster than ever. Our approach combines proven performance marketing expertise with the latest advancements in AI and automation to deliver results that are measurable, scalable, and built to last.
              </p>
              <p className="mb-4">
                After years leading digital strategy at top U.S. marketing agencies, I founded MandoMedia with a clear vision: to create a smarter, more agile partner for businesses that care about ROI. We specialize in building marketing systems that are not only effective today but designed to adapt and perform as new technologies and channels emerge.
              </p>
              <p>
                Whether it's AI-driven creative testing, automated lead nurturing, or full-funnel performance strategy, we bring the tools, insights, and execution needed to help you grow faster and more efficiently. At MandoMedia, we don't just keep up with the future of marketing—we help our clients lead it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;