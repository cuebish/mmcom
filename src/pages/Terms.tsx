import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by MandoMedia LLC, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Services</h2>
            <p>
              MandoMedia LLC provides digital marketing services, including but not limited to SEO, CRO, Paid Media, Lifecycle Marketing, Strategy, and Performance Marketing. All services are subject to these terms and any additional agreements made between parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services are owned by MandoMedia LLC and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Provide accurate information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>Not engage in any unauthorized use of our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">5. Limitation of Liability</h2>
            <p>
              MandoMedia LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">7. Contact Information</h2>
            <p>
              For any questions about these Terms & Conditions, please contact us at:<br />
              Email: legal@mandomedia.com<br />
              Phone: (123) 456-7890
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;