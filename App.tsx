import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Location from './components/Location';
import Itinerary from './components/Itinerary';
import Transport from './components/Transport';
import Footer from './components/Footer';
import { NAV_ITEMS } from './constants';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black min-h-screen text-slate-200 font-sans selection:bg-gold-500 selection:text-black">
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-gold-400 font-serif font-bold text-xl tracking-widest cursor-pointer" onClick={() => scrollToSection('hero')}>
            YOURONGMEI
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button className="px-5 py-2 border border-gold-500/50 text-gold-400 text-xs uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-all rounded-sm">
              Register
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
           <div className="absolute top-full left-0 right-0 bg-zinc-900 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl">
             {NAV_ITEMS.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 py-2"
              >
                {item.label}
              </button>
            ))}
           </div>
        )}
      </nav>

      <main>
        <Hero />
        <Vision />
        <Location />
        <Itinerary />
        <Transport />
      </main>

      <Footer />
    </div>
  );
};

export default App;