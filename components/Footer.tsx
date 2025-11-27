import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gold-900/20 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-6xl font-serif text-gold-300 mb-8">
                   Ten Years of Honing, Today We Shine
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
                    Let us meet at the Free Trade Port and share in this grand event.
                </p>
                
                <button className="group relative px-8 py-4 bg-gold-600 text-black font-bold tracking-widest uppercase overflow-hidden rounded-full transition-all hover:bg-gold-500 hover:scale-105 active:scale-95 shadow-xl shadow-gold-900/20">
                    <span className="relative z-10">Act Now</span>
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-gold-400/30" />
                </button>
            </motion.div>

            <div className="mt-20 pt-10 border-t border-white/10 text-xs text-gray-600">
                <p>© 2025 Yourongmei Group. All Rights Reserved.</p>
                <p className="mt-2">Strategic Annual Meeting · Sanya</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;