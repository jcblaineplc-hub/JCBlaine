import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar scrollToSection={scrollToSection} />
      <main className="flex-grow">
        <Hero scrollToSection={scrollToSection} />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;