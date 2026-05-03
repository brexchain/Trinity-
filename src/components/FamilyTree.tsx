import { motion } from 'motion/react';
import { PUPPIES, Language, TRANSLATIONS } from '../types';
import { Heart, Bone } from 'lucide-react';
import MediaPlaceholder from './MediaPlaceholder';

interface FamilyTreeProps {
  lang: Language;
}

export default function FamilyTree({ lang }: FamilyTreeProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="stammbaum" className="py-32 bg-amber-50/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-24">
          <div className="flex justify-center mb-6">
            <Bone className="text-amber-500 rotate-12" size={40} />
          </div>
          <h2 className="text-6xl font-black text-gray-900 mb-6 font-serif tracking-tighter leading-none uppercase italic">{t.stammbaum}</h2>
          <p className="text-gray-500 text-xl font-medium italic">"{lang === 'DE' ? 'Die Verschmelzung zweier großartiger Geister.' : 'The fusion of two incredible spirits.'}"</p>
        </div>

        <div className="relative">
          {/* Parents Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-24">
            {/* Mom */}
            <motion.div 
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="text-center group"
            >
              <div className="w-56 h-56 rounded-[3rem] bg-amber-100 border-4 border-white shadow-2xl overflow-hidden mb-6 mx-auto transition-all group-hover:scale-105 group-hover:-rotate-3">
                <MediaPlaceholder type="image" label="Mama Trinity" className="w-full h-full border-0" />
              </div>
              <h3 className="text-3xl font-black text-amber-900 tracking-tighter">Trinity</h3>
              <p className="text-amber-600 font-black uppercase text-[10px] tracking-widest mt-1 italic">{lang === 'DE' ? 'Die sanfte Seele' : 'The Sweet Soul'}</p>
            </motion.div>

            {/* Heart Connector */}
            <motion.div 
              animate={{ scale: [1, 1.25, 1], rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-rose-500 drop-shadow-xl"
            >
              <Heart size={64} fill="currentColor" />
            </motion.div>

            {/* Dad */}
            <motion.div 
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="text-center group"
            >
              <div className="w-56 h-56 rounded-[3rem] bg-orange-100 border-4 border-white shadow-2xl overflow-hidden mb-6 mx-auto transition-all group-hover:scale-105 group-hover:rotate-3">
                <MediaPlaceholder type="image" label="Papa Coffee" className="w-full h-full border-0" />
              </div>
              <h3 className="text-3xl font-black text-orange-900 tracking-tighter">Coffee</h3>
              <p className="text-orange-600 font-black uppercase text-[10px] tracking-widest mt-1 italic">{lang === 'DE' ? 'Der charismatische Welpe' : 'The Charismatic Pup'}</p>
            </motion.div>
          </div>

          <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent mb-16 rounded-full" />

          {/* Puppies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {PUPPIES.map((pup, index) => (
              <motion.div
                key={pup.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center flex flex-col items-center"
              >
                <div className={`w-28 h-28 rounded-[2rem] ${pup.color} border-2 border-white shadow-xl overflow-hidden mb-4 flex items-center justify-center transition-transform`}>
                  <MediaPlaceholder type="image" label={pup.name[0]} className="w-full h-full border-0 p-2" />
                </div>
                <h4 className="font-black text-gray-900 text-lg tracking-tighter">{pup.name}</h4>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-0.5">{t.born} {pup.birthOrder}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts Bubble */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-12 bg-white rounded-[4rem] shadow-xl border-4 border-amber-50 max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full -mr-24 -mt-24 pointer-events-none" />
          
          <h3 className="text-4xl font-black text-amber-900 mb-10 flex items-center gap-4 tracking-tighter italic font-serif">
            <Bone size={32} className="text-amber-500" /> {t.funFacts}!
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 text-gray-600 font-medium">
            <div className="space-y-8">
              <div className="flex gap-4">
                <span className="text-4xl">🎩</span>
                <div>
                    <h4 className="font-black text-amber-800 text-lg mb-1 leading-none">Chakra-Spots</h4>
                    <p className="text-base text-gray-500">{t.fact1Body}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-4xl">🎹</span>
                <div>
                    <h4 className="font-black text-amber-800 text-lg mb-1 leading-none">{t.fact2Title}</h4>
                    <p className="text-base text-gray-500">{t.fact2Body}</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <span className="text-4xl">🪞</span>
                <div>
                    <h4 className="font-black text-amber-800 text-lg mb-1 leading-none">{t.fact3Title}</h4>
                    <p className="text-base text-gray-500">{t.fact3Body}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-4xl">🍖</span>
                <div>
                    <h4 className="font-black text-amber-800 text-lg mb-1 leading-none">{t.fact4Title}</h4>
                    <p className="text-base text-gray-500">{t.fact4Body}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
