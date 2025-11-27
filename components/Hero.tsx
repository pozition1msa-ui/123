import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/998/1920/1080" 
          alt="Sanya Coastline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/60 via-ocean-900/40 to-ocean-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-gold-300 tracking-[0.3em] uppercase text-sm md:text-lg mb-4">
            Eternal Temptation | Smart Happiness
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white mb-6 text-glow leading-tight">
            Eastern Rhyme <br />
            <span className="text-gold-400">World Tide</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-px w-32 bg-gold-500 mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-2xl text-gray-200 font-light"
        >
          Journey to the Free Trade Port · Meet the New Future of Beauty
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 1.2 }}
           className="mt-6 text-gold-300 font-serif text-xl"
        >
          2025.12.25 – 12.28 | Sanya, China
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 z-10 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={40} className="text-gold-400 opacity-80" />
      </motion.div>
    </section>
  );
};

export default Hero;