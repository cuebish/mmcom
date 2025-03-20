import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  // Simple routing based on hash
  const hash = window.location.hash || '#home';

  const renderContent = () => {
    switch (hash) {
      case '#privacy':
        return <Privacy />;
      case '#terms':
        return <Terms />;
      default:
        return (
          <>
            <Hero />
            <Services />
            <Team />
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