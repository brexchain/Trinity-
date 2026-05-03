import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Hero from './components/Hero';
import PuppyCard from './components/PuppyCard';
import StoryTimeline from './components/StoryTimeline';
import FamilyTree from './components/FamilyTree';
import Community from './components/Community';
import { PUPPIES, Language, TRANSLATIONS, CHAT_MEMORIES } from './types';
import { Info, Home, Layers, Calendar, Share2, Globe, Quote } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('DE');
  const t = TRANSLATIONS[lang];

  const toggleLang = () => setLang(prev => prev === 'DE' ? 'EN' : 'DE');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-amber-100 pb-20 md:pb-0 relative">
      {/* Dalmatian Pattern Overlay */}
      <div className="fixed inset-0 bg-dalmatian pointer-events-none z-0" />

      {/* Navigation - iOS Style Desktop */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-200 transition-transform group-hover:scale-110">
              <Info size={24} />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase italic">TRINITY'S</span>
          </div>
          
          <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
            <a href="#journey" className="hover:text-amber-600 transition-colors uppercase">{t.navJourney}</a>
            <a href="#puppies" className="hover:text-amber-600 transition-colors uppercase">{t.navPack}</a>
            <a href="#memories" className="hover:text-amber-600 transition-colors uppercase">{lang === 'DE' ? 'ERINNERUNGEN' : 'MEMORIES'}</a>
            <a href="#stammbaum" className="hover:text-amber-600 transition-colors uppercase">{t.navTree}</a>
            <a href="#community" className="hover:text-amber-600 transition-colors uppercase">{t.navSocial}</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-black text-gray-600 hover:bg-gray-100 transition-all"
            >
              <Globe size={14} /> {lang}
            </button>
            <a 
              href="https://www.facebook.com/profile.php?id=61578709837034"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gray-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl shadow-gray-200"
            >
              {t.followOriginal}
            </a>
          </div>
        </div>
      </nav>

      {/* iOS Style Bottom Nav - Mobile */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm bg-white/90 backdrop-blur-2xl border border-gray-200/50 shadow-2xl rounded-[2.5rem] flex items-center justify-around p-2 md:hidden">
        <a href="#top" className="p-4 text-amber-500 rounded-full bg-amber-50"><Home size={20} /></a>
        <a href="#journey" className="p-4 text-gray-400 hover:text-amber-500 transition-colors"><Calendar size={20} /></a>
        <a href="#puppies" className="p-4 text-gray-400 hover:text-amber-500 transition-colors"><Layers size={20} /></a>
        <a href="#memories" className="p-4 text-gray-400 hover:text-amber-500 transition-colors"><Quote size={20} /></a>
        <button onClick={toggleLang} className="p-4 text-gray-400 flex items-center font-black text-xs">{lang}</button>
      </nav>

      <main id="top" className="relative z-10">
        <Hero lang={lang} />
        
        <StoryTimeline lang={lang} />

        {/* Puppies Grid Section */}
        <section id="puppies" className="py-32 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <header className="max-w-3xl mb-24 text-balance px-4">
              <h2 className="text-7xl font-black text-gray-900 mb-8 font-serif leading-[0.8] tracking-tighter">
                {t.meetSeven} <br />
                <span className="text-amber-500">{t.wildAdventures}</span>
              </h2>
              <p className="text-2xl text-gray-400 font-black italic tracking-tighter">
                "{t.sniffingTrouble}"
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <AnimatePresence>
                {PUPPIES.map((puppy) => (
                  <PuppyCard key={puppy.id} puppy={puppy} lang={lang} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Memories Section */}
        <section id="memories" className="py-32 bg-gray-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-6xl font-black mb-16 font-serif italic tracking-tighter text-amber-400">
              {lang === 'DE' ? 'Plauderei aus der Wurfkiste' : 'Whelping Box Chats'}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CHAT_MEMORIES.map((msg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, rotate: i % 2 === 0 ? -2 : 2 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 hover:border-amber-400 transition-all flex flex-col"
                >
                  <Quote size={32} className="text-amber-400 mb-6" />
                  <p className="text-xl font-medium italic mb-6 leading-relaxed flex-grow">
                    "{msg.text[lang]}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-[10px] font-black italic">
                      {msg.author[0]}
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">
                      — {msg.author}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 blur-[150px] -mr-48 -mt-48 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 blur-[100px] -ml-32 -mb-32 rounded-full" />
        </section>

        <FamilyTree lang={lang} />
        
        <Community lang={lang} />
      </main>

      <footer className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="w-20 h-1.5 bg-amber-500 mx-auto mb-12 rounded-full" />
          <h2 className="text-4xl font-black mb-4 font-serif italic text-gray-300">Trinity & Coffee</h2>
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.5em] mb-16">Established Sept 2025 • Vienna</p>
          <div className="flex flex-col md:flex-row justify-center gap-12 text-[10px] font-black text-gray-400 uppercase tracking-widest border-t border-gray-200/50 pt-12">
            <p>© 2026 THE TRINITY PACK</p>
            <p>DESIGNED FOR THE WOOFERS</p>
            <p>FOLLOW THE JOURNEY</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
