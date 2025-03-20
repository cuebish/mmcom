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
      
      // Instant scroll to top for Privacy, Terms, and Blog posts
      const [mainPath] = newPath.split('/');
      if (['privacy', 'terms', 'blog'].includes(mainPath)) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial scroll to top if starting on a content page
    const [initialMainPath] = currentPath.split('/');
    if (['privacy', 'terms', 'blog'].includes(initialMainPath)) {
      window.scrollTo(0, 0);
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