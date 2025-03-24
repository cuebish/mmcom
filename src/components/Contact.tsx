import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useForm } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [state, handleSubmit] = useForm("xnnpvwed");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      await handleSubmit(e);
      if (state.succeeded) {
        toast.success('Message sent successfully!');
        // Reset form
        const form = e.target as HTMLFormElement;
        form.reset();
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Formspree Error:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background-accent">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Ready to transform your digital presence? Get in touch with our team of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-4xl">
          <div>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-cta focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                  disabled={state.submitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-cta focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                  disabled={state.submitting}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-cta focus:ring-2 focus:ring-secondary focus:border-transparent"
                  disabled={state.submitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-cta focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                  disabled={state.submitting}
                />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className={`w-full px-8 py-4 bg-primary text-white rounded-full transition-colors ${
                  state.submitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-light'
                }`}
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-secondary-dark mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@mando-media.com" className="text-gray-600 hover:text-primary">
                      info@mando-media.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-secondary-dark mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+17043636333" className="text-gray-600 hover:text-primary">
                      (704) 363-6333
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-secondary-dark mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">
                      1607 AVE PONCE DE LEON<br />
                      STE GM6 #674<br />
                      SAN JUAN, PR 00909
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;