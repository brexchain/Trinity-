import { motion } from 'motion/react';
import { Puppy, Language, TRANSLATIONS } from '../types';
import { Weight, Dog, Sparkles, Image as ImageIcon, Video } from 'lucide-react';
import MediaPlaceholder from './MediaPlaceholder';

interface PuppyCardProps {
  puppy: Puppy;
  lang: Language;
}

export default function PuppyCard({ puppy, lang }: PuppyCardProps) {
  const t = TRANSLATIONS[lang];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -12 }}
      className={`relative p-8 rounded-[4rem] bg-white border-2 border-gray-100 shadow-sm transition-all overflow-hidden flex flex-col h-full`}
    >
      <div className={`absolute top-0 right-0 w-40 h-40 ${puppy.color} rounded-bl-[5rem] -mr-10 -mt-10 opacity-30`} />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Horizontal Sliding Media Tiles */}
        <div className="mb-8 -mx-8 px-8 overflow-x-auto no-scrollbar flex gap-4 snap-x snap-mandatory">
          {[1, 2, 3].map((i) => (
            <div key={i} className="min-w-[280px] snap-center">
              <MediaPlaceholder 
                type={i === 3 ? "video" : "image"} 
                label={i === 3 ? `${puppy.name} Zoomie #${i}` : `${puppy.name} Posiert #${i}`} 
                className="w-full h-56 rounded-[2.5rem] shadow-inner bg-gray-50 border-gray-200" 
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-[10px] font-black text-amber-600 tracking-widest uppercase rounded-full border border-amber-100 italic">
              <Sparkles size={12} /> {t.born} {puppy.birthOrder}
            </span>
            <h3 className="text-5xl font-black text-gray-900 mt-3 tracking-tighter italic font-serif leading-none">{puppy.name}</h3>
            {puppy.formerName && (
              <p className="text-sm text-gray-400 italic mt-1">{t.aka} "{puppy.formerName}"</p>
            )}
          </div>
          <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-100 uppercase text-[10px] font-black tracking-tighter text-gray-400">
            {lang === 'DE' ? puppy.genderDe : puppy.gender}
          </div>
        </div>

        <div className="space-y-6 mb-8 flex-grow">
          <div className="flex flex-wrap gap-2">
            {puppy.barkTraits[lang].map(trait => (
              <span key={trait} className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-2xl text-[11px] font-black uppercase tracking-tight text-gray-400">
                {trait}
              </span>
            ))}
          </div>
          
          <p className="text-gray-600 text-base leading-relaxed font-medium italic">
            "{puppy.story[lang]}"
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-100 rounded-2xl text-amber-700 shadow-sm border border-amber-200">
              <Weight size={20} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{t.birth}</p>
              <p className="text-lg font-black text-gray-900 tracking-tighter">{puppy.birthWeight}g</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-2xl text-blue-700 shadow-sm border border-blue-200">
              <Dog size={20} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{t.weight12}</p>
              <p className="text-lg font-black text-gray-900 tracking-tighter">{puppy.weightAt12Weeks}kg</p>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </motion.div>
  );
}
