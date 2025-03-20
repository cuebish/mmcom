import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction</h2>
            <p>
              MandoMedia LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Name and contact information</li>
              <li>Company information</li>
              <li>Website usage data</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Provide and improve our services</li>
              <li>Communicate with you</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Analyze and optimize our website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:<br />
              Email: privacy@mandomedia.com<br />
              Phone: (123) 456-7890
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;