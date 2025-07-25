import React from 'react';

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    // Handle home navigation
    if (targetId === 'home') {
      window.location.hash = '';
      window.scrollTo({ top: 0 });
      return;
    }

    // Handle content pages (privacy, terms, blog)
    if (['privacy', 'terms', 'blog'].includes(targetId)) {
      window.location.hash = href;
      return;
    }

    // Handle section navigation
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 64; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'instant'
      });

      // Update URL without triggering scroll
      const currentHash = window.location.hash;
      if (currentHash !== href) {
        window.history.pushState(null, '', href);
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1942] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col space-y-8">
          <div>
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-block mb-4"
            >
              <img 
                src="https://s3.us-east-2.amazonaws.com/mando.media/mmLogoLight.svg"
                alt="MandoMedia"
                className="h-20"
              />
            </a>
            <p className="text-gray-300 mb-4 max-w-2xl">
              Transforming businesses through innovative digital marketing solutions.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">
              © {currentYear} MandoMedia LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#privacy" 
                onClick={(e) => handleNavClick(e, '#privacy')}
                className="text-gray-300 hover:text-secondary transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                onClick={(e) => handleNavClick(e, '#terms')}
                className="text-gray-300 hover:text-secondary transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;