import { motion } from 'motion/react';
import { Dog, Coffee, Heart, ChevronDown } from 'lucide-react';
import MediaPlaceholder from './MediaPlaceholder';
import { Language, TRANSLATIONS } from '../types';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -mr-48 -mt-24 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -ml-24 -mb-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-2xl text-xs font-black uppercase tracking-widest mb-8">
              <Heart size={14} fill="currentColor" />
              <span>{lang === 'DE' ? 'Eine Geschichte neuen Lebens' : 'A Story of New Life'}</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black text-gray-900 leading-[0.85] tracking-tighter mb-10 font-serif">
              Trinity <span className="text-amber-500">&</span> Coffee
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl mb-12 font-medium">
              <span dangerouslySetInnerHTML={{ __html: t.heroSub }} />
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('puppies')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-gray-900 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-gray-800 transition-all flex items-center gap-3 shadow-2xl shadow-gray-200"
              >
                {t.meetPack} <Dog size={18} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('stammbaum')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-gray-50 transition-all flex items-center gap-3"
              >
                {t.stammbaum} <Coffee size={18} />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 3, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, type: 'spring' }}
            className="relative"
          >
            <MediaPlaceholder 
              type="video" 
              label="The Pack in Motion" 
              className="aspect-[4/5] md:aspect-square w-full rounded-[4rem] shadow-2xl" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent rounded-[4rem] pointer-events-none" />
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, 15, 0], rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute -top-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border-4 border-amber-50 z-20 flex flex-col items-center"
            >
              <p className="text-6xl font-black text-amber-500 tracking-tighter">7</p>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{lang === 'DE' ? 'Wohlauf' : 'Full Hearts'}</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [2, -2, 2] }}
              transition={{ repeat: Infinity, duration: 7 }}
              className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border-4 border-blue-50 z-20 flex flex-col items-center"
            >
              <p className="text-3xl font-black text-blue-600 tracking-tighter">12x</p>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{lang === 'DE' ? 'Gewinn' : 'Mega Growth'}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">{t.scroll}</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
