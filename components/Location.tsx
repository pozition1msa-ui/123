import React from 'react';
import { motion } from 'framer-motion';

const Location: React.FC = () => {
  return (
    <section id="location" className="relative py-24 bg-zinc-900 text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2 
          className="text-4xl md:text-6xl font-serif mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Geographic Advantage · <span className="text-gold-400 italic">Eastern Elegance</span>
        </motion.h2>
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Meeting the world in the ancient rhyme of the East. A fusion of Chinese and French cultures.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Grid */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://picsum.photos/id/1039/400/500" alt="Architecture" className="rounded-lg object-cover w-full h-64 md:h-80 shadow-lg" />
          <img src="https://picsum.photos/id/28/400/500" alt="Interior" className="rounded-lg object-cover w-full h-64 md:h-80 shadow-lg mt-8" />
        </motion.div>

        {/* Content */}
        <div className="space-y-10">
          <motion.div 
            className="pl-6 border-l-2 border-gold-500"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif text-gold-300 mb-2">Prestigious Location</h3>
            <p className="text-gray-300 leading-relaxed">
              Stay at the only top-tier luxury Eastern ancient rhyme architectural group in Yalong Bay — 
              <strong className="text-white"> Yalong Bay Swiss Hotel</strong>.
            </p>
          </motion.div>

          <motion.div 
            className="pl-6 border-l-2 border-gold-500"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif text-gold-300 mb-2">Cultural Resonance</h3>
            <p className="text-gray-300 leading-relaxed">
              Managed by a fusion of China and France, reflecting our brand philosophy: 
              Based on Eastern heritage, integrated with international standards.
            </p>
          </motion.div>

          <motion.div 
            className="pl-6 border-l-2 border-gold-500"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-serif text-gold-300 mb-2">Environmental Experience</h3>
            <p className="text-gray-300 leading-relaxed">
              Pavilions and towers reflect with coconut groves and sea breezes. 
              Experience the ultimate Eastern vacation aesthetics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;