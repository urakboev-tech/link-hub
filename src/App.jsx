import React, { useState } from 'react';
import { Share2, Check, ExternalLink } from 'lucide-react';
import { userData, socialLinks, actionLinks } from './data/linksData';

function App() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (e, id, url) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen py-12 px-4 flex flex-col items-center sm:py-20 font-sans text-slate-800">
      {/* Background Shapes */}
      <div className="bg-gradient-shapes"></div>
      <div className="grid-bg"></div>

      <div className="w-full max-w-xl z-10 flex flex-col items-center">

        {/* Profile Section - Soft Glass Style */}
        <div className="flex flex-col items-center mb-12 text-center animate-slide-up w-full">
          <div className="relative mb-6 group cursor-pointer">
            <div className="relative z-10 bg-white/30 backdrop-blur-md p-2 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-[2rem]">
              <img
                src={userData.avatar}
                alt={userData.name}
                className="w-32 h-32 rounded-[1.5rem] object-cover"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            {userData.name}
          </h1>

          <p className="text-slate-500 text-base sm:text-lg font-medium px-4 max-w-md mx-auto leading-relaxed text-center">
            {userData.bio}
          </p>
        </div>

        {/* Action Links - Glass Pill Cards */}
        <div className="w-full flex flex-col gap-4 mb-16">
          {actionLinks.map((link, index) => {
            const Icon = link.icon;
            const isPrimary = index === 0;

            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group animate-slide-up block"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Card Content - Glass Edition */}
                <div className={`
                  p-3 pr-4 flex items-center h-full rounded-full transition-all duration-300
                  ${isPrimary
                    ? 'bg-[#0077ff] border border-[#0077ff] text-white shadow-[0_8px_24px_rgba(0,119,255,0.3)] hover:bg-[#0066cc] hover:shadow-[0_12px_28px_rgba(0,119,255,0.4)] hover:-translate-y-1'
                    : 'glass-panel text-slate-700 hover:text-[#0077ff]'}
                `}>
                  <div className={`
                    flex-shrink-0 p-3 rounded-full transition-all duration-300
                    ${isPrimary ? 'bg-white/20 text-white' : 'bg-white/50 text-slate-600 group-hover:bg-[#0077ff]/10 group-hover:text-[#0077ff]'}
                  `}>
                    <Icon size={22} strokeWidth={isPrimary ? 2.5 : 2} />
                  </div>

                  <div className="ml-4 flex-grow font-display">
                    <h2 className={`text-base font-semibold tracking-wide transition-colors duration-300 ${isPrimary ? 'text-white' : 'text-slate-800 group-hover:text-[#0077ff]'}`}>
                      {link.title}
                    </h2>
                    {link.description && (
                      <p className={`text-sm mt-0.5 transition-colors ${isPrimary ? 'text-blue-100' : 'text-slate-500'}`}>
                        {link.description}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => handleCopy(e, link.id, link.url)}
                      className={`p-2 rounded-full transition-all ${isPrimary ? 'text-white hover:bg-white/20' : 'text-slate-400 hover:text-[#0077ff] hover:bg-[#0077ff]/10'}`}
                      title="Nusxa olish"
                    >
                      {copiedId === link.id ? (
                        <Check size={18} className={isPrimary ? "text-white" : "text-green-500"} strokeWidth={3} />
                      ) : (
                        <Share2 size={18} />
                      )}
                    </button>
                    <div className={`p-2 hidden sm:block ${isPrimary ? 'text-white/70 group-hover:text-white' : 'text-slate-400 group-hover:text-[#0077ff]'} transition-colors`}>
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Social Links - Frosted Glass style */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full h-px bg-slate-300/50 mb-8 max-w-xs"></div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-slide-up glass-panel p-3.5 rounded-full text-slate-500 hover:text-[#0077ff] group hover:-translate-y-1"
                  style={{ animationDelay: `${(actionLinks.length + index) * 50}ms` }}
                  title={social.name}
                >
                  <Icon size={22} strokeWidth={2} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 w-full pt-8 text-center font-sans text-xs text-slate-400 animate-slide-up block" style={{ animationDelay: '800ms' }}>
          <div className="flex justify-center items-center w-full gap-2">
            <span>© {new Date().getFullYear()} {userData.name}</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#0077ff] font-medium">Link Hub</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
