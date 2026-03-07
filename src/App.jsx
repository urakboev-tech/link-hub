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
    <div className="min-h-screen py-12 px-4 flex flex-col items-center sm:py-20 font-sans text-slate-900">
      {/* Background Shapes */}
      <div className="bg-gradient-shapes"></div>
      <div className="grid-bg"></div>

      <div className="w-full max-w-xl z-10 flex flex-col items-center">

        {/* Profile Section - Light Minimalist Style */}
        <div className="flex flex-col items-center mb-14 text-center animate-slide-up w-full">
          <div className="relative mb-8 group cursor-pointer">
            {/* Minimalist offset frame */}
            <div className="absolute -inset-2 bg-slate-200 rotate-3 transition-transform duration-300 group-hover:rotate-6 z-0"></div>

            <div className="relative z-10 bg-white p-2 border-2 border-slate-900 shadow-md">
              <img
                src={userData.avatar}
                alt={userData.name}
                className="w-32 h-32 rounded-none object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-4 uppercase inline-block border-b-4 border-purple-600 pb-1">
            {userData.name}
          </h1>

          <p className="text-slate-600 text-lg sm:text-lg font-medium px-4 max-w-md mx-auto leading-relaxed border-l-2 border-purple-600 pl-4 text-left bg-white/50 py-2">
            {userData.bio}
          </p>
        </div>

        {/* Action Links - Light Minimal Cards */}
        <div className="w-full flex flex-col gap-5 mb-16">
          {actionLinks.map((link, index) => {
            const Icon = link.icon;
            const isPrimary = index === 0;

            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group animate-slide-up block ${isPrimary ? 'cta-button' : ''}`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Card Content - Solid Light Edition */}
                <div className="glass-panel p-4 flex items-center h-full">
                  <div className={`flex-shrink-0 p-3 border-2 transition-all duration-300 ${isPrimary ? 'bg-purple-600 border-slate-900 text-white group-hover:scale-105 shadow-[4px_4px_0_0_rgba(15,23,42,1)]' : 'bg-white border-slate-300 text-slate-800 group-hover:border-purple-600 group-hover:text-purple-600'}`}>
                    <Icon size={24} strokeWidth={isPrimary ? 2.5 : 2} />
                  </div>

                  <div className="ml-4 flex-grow font-display">
                    <h2 className={`text-lg font-bold tracking-tight transition-colors duration-300 uppercase ${isPrimary ? 'text-purple-700' : 'text-slate-800 group-hover:text-purple-600'}`}>
                      {link.title}
                    </h2>
                    <p className="text-sm text-slate-500 font-sans mt-0.5 group-hover:text-slate-700 transition-colors lowercase">
                      / {link.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleCopy(e, link.id, link.url)}
                      className={`p-2 transition-all ${isPrimary ? 'text-purple-600 hover:bg-purple-100 rounded' : 'text-slate-400 hover:text-purple-600 hover:bg-slate-100 rounded'}`}
                      title="Nusxa olish"
                    >
                      {copiedId === link.id ? (
                        <Check size={18} className="text-green-600" strokeWidth={3} />
                      ) : (
                        <Share2 size={18} />
                      )}
                    </button>
                    <div className="text-slate-400 group-hover:text-purple-600 transition-colors p-2 hidden sm:block">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Social Links - Solid bright style */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full h-px bg-slate-300 mb-8 max-w-xs"></div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-slide-up bg-white border-2 border-slate-200 p-3 text-slate-600 transition-all duration-300 hover:border-purple-600 hover:text-purple-600 group hover:-translate-y-1 hover:shadow-[3px_3px_0_0_#9333ea]"
                  style={{ animationDelay: `${(actionLinks.length + index) * 50}ms` }}
                  title={social.name}
                >
                  <Icon size={24} strokeWidth={2} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 w-full pt-8 text-center font-display text-xs text-slate-500 animate-slide-up block" style={{ animationDelay: '800ms' }}>
          <div className="flex justify-center items-center w-full uppercase tracking-wider gap-2">
            <span>© {new Date().getFullYear()} {userData.name}</span>
            <span className="text-slate-300">|</span>
            <span className="text-purple-600 font-bold">PORTFOLIO</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
