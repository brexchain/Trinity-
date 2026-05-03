import { motion } from 'motion/react';
import { TIMELINE, Language, TRANSLATIONS } from '../types';
import * as Icons from 'lucide-react';
import MediaPlaceholder from './MediaPlaceholder';

interface StoryTimelineProps {
  lang: Language;
}

export default function StoryTimeline({ lang }: StoryTimelineProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="journey" className="py-32 bg-gray-50/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-24 text-balance">
          <h2 className="text-7xl font-black text-gray-900 mb-6 font-serif tracking-tighter leading-none">{t.journey}</h2>
          <p className="text-2xl text-gray-400 font-medium italic">"{lang === 'DE' ? 'Vom ersten Herzschlag zum totalen Chaos.' : 'From tiny heartbeats to total chaos.'}"</p>
        </div>

        <div className="relative">
          {/* Rail */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-amber-100 -translate-x-1/2 rounded-full hidden md:block" />

          <div className="space-y-32">
            {TIMELINE.map((event, index) => {
              const Icon = (Icons as any)[event.icon] || Icons.Circle;
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={event.title[lang]}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-center gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Point */}
                  <div className="absolute left-1/2 top-0 md:top-1/2 w-20 h-20 bg-white border-4 border-amber-400 rounded-[2rem] -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center text-amber-500 shadow-2xl hidden md:flex rotate-12">
                    <Icon size={32} />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'} space-y-6 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm`}>
                    <div className="inline-block px-5 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-black uppercase tracking-widest">
                      {event.date[lang]}
                    </div>
                    <h3 className="text-4xl font-black text-gray-900 tracking-tighter leading-none">{event.title[lang]}</h3>
                    <p className="text-gray-500 leading-relaxed text-lg font-medium">
                      {event.description[lang]}
                    </p>
                    
                    <MediaPlaceholder 
                      type="video" 
                      label={t.zoomies} 
                      className="w-full h-56 rounded-[2.5rem] mt-6" 
                    />
                  </div>
                  <div className="md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
