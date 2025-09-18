import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Services />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
