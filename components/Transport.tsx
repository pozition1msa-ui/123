import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Train, Car, Info } from 'lucide-react';
import { TRANSPORT_OPTIONS } from '../constants';

const icons = {
  Plane: <Plane size={32} />,
  Train: <Train size={32} />,
  Car: <Car size={32} />,
};

const Transport: React.FC = () => {
  return (
    <section id="transport" className="py-24 bg-zinc-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <motion.h2 
            className="text-4xl md:text-5xl font-serif text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Travel Guide
          </motion.h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRANSPORT_OPTIONS.map((option, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-gold-600/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
                {icons[option.iconName as keyof typeof icons]}
              </div>
              <h3 className="text-2xl font-serif mb-3 text-gray-100">{option.title}</h3>
              <p className="text-gray-400 leading-relaxed">{option.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 p-6 bg-ocean-900/40 rounded-xl border border-ocean-800/50 flex items-start gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Info className="text-gold-400 flex-shrink-0 mt-1" />
          <div className="text-sm text-gray-300">
            <strong className="text-white block mb-1">Return Trip Advice:</strong>
            We recommend booking flights or trains after 20:00 on Dec 28 to allow ample time for travel. 
            Enjoy duty-free shopping benefits at the airport post-customs sealing.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Transport;