import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ITINERARY_DATA } from '../constants';

const Itinerary: React.FC = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="itinerary" className="py-24 bg-gradient-to-b from-ocean-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-gold-100 mb-4">Journey Overview</h2>
          <p className="text-gray-400">Four days of inspiration, celebration, and connection.</p>
        </motion.div>

        {/* Desktop Tabs */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Tabs Navigation */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:w-1/3 pb-4 lg:pb-0 scrollbar-hide">
            {ITINERARY_DATA.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 flex-shrink-0 lg:flex-shrink border ${
                  activeDay === index 
                    ? 'bg-gold-600 border-gold-500 text-white shadow-lg shadow-gold-500/20' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                <div className="text-xs uppercase tracking-wider mb-1 opacity-70">{item.date}</div>
                <div className="text-xl font-serif font-bold">{item.title}</div>
                <div className={`text-sm mt-1 ${activeDay === index ? 'text-gold-100' : 'text-gray-500'}`}>
                  {item.theme}
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 min-h-[400px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md flex flex-col md:flex-row h-full"
              >
                {/* Image */}
                <div className="md:w-1/2 h-48 md:h-auto relative">
                  <img 
                    src={ITINERARY_DATA[activeDay].image} 
                    alt={ITINERARY_DATA[activeDay].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 to-transparent" />
                </div>

                {/* Details */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-serif text-gold-400 mb-2">
                    {ITINERARY_DATA[activeDay].title}
                  </h3>
                  <h4 className="text-xl text-white mb-6 font-light italic">
                    {ITINERARY_DATA[activeDay].theme}
                  </h4>
                  
                  <ul className="space-y-4">
                    {ITINERARY_DATA[activeDay].details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;