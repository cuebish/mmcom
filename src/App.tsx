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
  // Get the hash without the leading '#' character
  const hash = window.location.hash.slice(1) || 'home';
  const [mainPath, subPath] = hash.split('/');

  const renderContent = () => {
    switch (mainPath) {
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      case 'blog':
        return <BlogPost slug={subPath} />;
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