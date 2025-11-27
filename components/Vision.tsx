import React from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, Anchor } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="relative py-20 bg-ocean-900 text-white min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-gold-500 font-serif text-3xl mb-2">The Right Time · Era Opportunity</h3>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Witnessing History <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Hainan Free Trade Port
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              On December 18, 2025, Hainan Island will be fully sealed for customs operations. 
              Just 7 days later, we gather here to witness the maiden voyage of the beauty industry 
              in this new era of global trade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div 
              className="flex items-start gap-4 p-4 border border-gold-900/30 bg-white/5 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-3 bg-gold-600/20 rounded-full text-gold-400">
                <Anchor size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-gold-100 mb-1">Historic Seal-Off</h4>
                <p className="text-sm text-gray-400">A new gateway for international trade and luxury.</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4 p-4 border border-gold-900/30 bg-white/5 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="p-3 bg-gold-600/20 rounded-full text-gold-400">
                <TrendingUp size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-gold-100 mb-1">2026 Strategic Launch</h4>
                <p className="text-sm text-gray-400">Defining the blueprint for the next era of Yourongmei Group.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right: Visual */}
        <motion.div
          className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gold-500/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://picsum.photos/id/164/800/1200" 
            alt="Modern City Skyline" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-10 left-10 right-10">
             <div className="bg-black/60 backdrop-blur-md p-6 rounded-lg border-l-4 border-gold-500">
                <p className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-2">Countdown</p>
                <p className="text-white font-serif text-2xl">
                  Celebrating Glory.<br/>Embracing the Future.
                </p>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Vision;