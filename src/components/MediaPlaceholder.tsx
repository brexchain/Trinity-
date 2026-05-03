import { Image, Video, Play } from 'lucide-react';

interface MediaPlaceholderProps {
  type: 'image' | 'video';
  label?: string;
  className?: string;
}

export default function MediaPlaceholder({ type, label, className = '' }: MediaPlaceholderProps) {
  return (
    <div className={`group relative bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-6 transition-all hover:bg-gray-200 hover:border-amber-400 overflow-hidden ${className}`}>
      {/* Decorative pulse */}
      <div className="absolute inset-0 bg-amber-400 opacity-0 group-hover:opacity-5 animate-pulse" />
      
      <div className="relative z-10 flex flex-col items-center">
        {type === 'image' ? (
          <Image className="text-gray-400 group-hover:text-amber-500 mb-2 transition-colors" size={32} />
        ) : (
          <Video className="text-gray-400 group-hover:text-blue-500 mb-2 transition-colors" size={32} />
        )}
        
        <p className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-gray-600 transition-colors">
          {label || (type === 'image' ? 'Pup Pic Needed' : 'Video Clip Needed')}
        </p>
        
        <div className="mt-4 flex items-center gap-1.5 px-3 py-1 bg-white rounded-full shadow-sm border border-gray-200 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
          <span className="text-[10px] font-black uppercase tracking-tighter text-gray-500">Insert Here</span>
          {type === 'video' && <Play size={10} className="fill-current" />}
        </div>
      </div>

      {/* Dog Paw Background Pattern (Abstracted) */}
      <div className="absolute bottom-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0v-2Z"/>
          <path d="M17 5a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0v-2Z"/>
          <path d="M7 12a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0v-2Z"/>
          <path d="M21 12a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0v-2Z"/>
          <path d="M12 18a5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5Z"/>
        </svg>
      </div>
    </div>
  );
}
