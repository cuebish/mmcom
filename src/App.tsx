import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import BlogPost from './pages/BlogPost';

function App() {
  const [currentPath, setCurrentPath] = React.useState(window.location.hash.slice(1) || 'home');

  React.useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash.slice(1) || 'home';
      setCurrentPath(newPath);
      
      // Handle section navigation
      const [mainPath] = newPath.split('/');
      if (['home', 'services', 'about', 'blog', 'contact'].includes(mainPath) && !newPath.includes('/')) {
        const element = document.getElementById(mainPath);
        if (element) {
          const navHeight = 64; // Height of the navbar
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: 'smooth'
          });
        }
      } else if (['privacy', 'terms'].includes(mainPath) || newPath.includes('/')) {
        // Instant scroll to top for Privacy, Terms, and Blog posts
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial navigation if needed
    if (currentPath && currentPath !== 'home') {
      handleHashChange();
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    // Split the path to handle blog posts with slugs
    const [mainPath, subPath] = currentPath.split('/');

    switch (mainPath) {
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      case 'blog':
        if (subPath) {
          return <BlogPost slug={subPath} />;
        }
        // If no subpath, show home page with blog section
        return (
          <>
            <Hero />
            <Services />
            <About />
            <Blog />
            <Contact />
          </>
        );
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Services />
            <About />
            <Blog />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;