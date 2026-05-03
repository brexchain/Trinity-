import { motion } from 'motion/react';
import { Share2, Heart, Users, MapPin } from 'lucide-react';
import { Language, TRANSLATIONS } from '../types';

interface CommunityProps {
  lang: Language;
}

export default function Community({ lang }: CommunityProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="community" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-6xl font-black text-gray-900 mb-6 font-serif tracking-tighter italic"
          >
            {t.communityTitle}
          </motion.h2>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto font-medium italic">
            "{t.communitySub}"
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 bg-amber-50 rounded-[3rem] border border-amber-100 shadow-sm"
          >
            <div className="w-14 h-14 bg-amber-200 rounded-2xl flex items-center justify-center mb-8 text-amber-700 shadow-lg shadow-amber-200">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4 tracking-tighter uppercase italic text-amber-900">{t.ownerMeetups}</h3>
            <p className="text-gray-600 text-lg mb-8 font-medium">
              {t.ownerMeetupsBody}
            </p>
            <button className="flex items-center gap-3 text-amber-700 font-black uppercase text-xs tracking-widest hover:gap-5 transition-all group">
              {t.nextWalk} <Share2 size={16} className="group-hover:rotate-12 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 bg-blue-50 rounded-[3rem] border border-blue-100 shadow-sm"
          >
            <div className="w-14 h-14 bg-blue-200 rounded-2xl flex items-center justify-center mb-8 text-blue-700 shadow-lg shadow-blue-200">
              <Heart size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4 tracking-tighter uppercase italic text-blue-900">{t.holidaySupport}</h3>
            <p className="text-gray-600 text-lg mb-8 font-medium">
              {t.holidaySupportBody}
            </p>
            <button className="flex items-center gap-3 text-blue-700 font-black uppercase text-xs tracking-widest hover:gap-5 transition-all group">
              {t.findSitter} <Share2 size={16} className="group-hover:rotate-12 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 shadow-sm"
          >
            <div className="w-14 h-14 bg-emerald-200 rounded-2xl flex items-center justify-center mb-8 text-emerald-700 shadow-lg shadow-emerald-200">
              <MapPin size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4 tracking-tighter uppercase italic text-emerald-900">{t.puppyBath}</h3>
            <p className="text-gray-600 text-lg mb-8 font-medium">
              {t.puppyBathBody}
            </p>
            <button className="flex items-center gap-3 text-emerald-700 font-black uppercase text-xs tracking-widest hover:gap-5 transition-all group">
              {t.scheduleVisit} <Share2 size={16} className="group-hover:rotate-12 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="mt-24 p-12 md:p-16 bg-gray-900 rounded-[4rem] text-white overflow-hidden relative shadow-2xl">
          <div className="relative z-10 md:flex items-center justify-between gap-16">
            <div className="mb-10 md:mb-0 max-w-xl">
              <h3 className="text-5xl font-black mb-6 tracking-tighter font-serif italic text-amber-400">{t.followJourney}</h3>
              <p className="text-gray-400 text-xl font-medium leading-relaxed">
                {lang === 'DE' ? 'Wir dokumentieren jeden einzelnen Tag. Von den ersten Schritten bis zum ersten Arbeitstag.' : 'We document every single day. From first steps to the first day of work.'}
              </p>
            </div>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/profile.php?id=61578709837034"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 py-5 bg-white text-gray-900 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-gray-100 transition-colors shadow-2xl"
            >
              Facebook Live Feed
            </motion.a>
          </div>
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -ml-32 -mb-32 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
