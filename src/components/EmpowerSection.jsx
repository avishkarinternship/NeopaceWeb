import React from 'react';
import { 
  Plus, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  Target, 
  Eye,
  Cloud,
  Smartphone,
  PenTool,
  Server,
  Sparkles
} from 'lucide-react';
import empowerVisualImg from '../assets/About/NeoPaceGlassOrbit.png';

export default function EmpowerSection() {
  const cards = [
    {
      title: 'Result-oriented client',
      desc: 'Intuitive modern interfaces made for humans and refined with mathematical precision.',
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      bg: 'bg-indigo-50/70',
    },
    {
      title: 'Flexible pricing',
      desc: 'Transparent, flat-rate monthly plans with no surprise invoices or bloated vendor markups.',
      icon: <Zap className="w-5 h-5 text-pink-600" />,
      bg: 'bg-pink-50/70',
    },
    {
      title: '24/7 client support',
      desc: 'Dedicated Slack communication channel and direct engineering support whenever needed.',
      icon: <Headphones className="w-5 h-5 text-sky-600" />,
      bg: 'bg-sky-50/70',
    },
  ];

  const badges = [
    { name: 'SAAS ARCHITECTURE', icon: <Cloud size={13} /> },
    { name: 'MOBILE ECOSYSTEM', icon: <Smartphone size={13} /> },
    { name: 'EXPERIENCE DESIGN', icon: <PenTool size={13} /> },
    { name: 'CLOUD ENGINEERING', icon: <Server size={13} /> },
    { name: 'AI AUTOMATIONS', icon: <Sparkles size={13} /> },
    { name: 'FINTECH PROTOCOLS', icon: <ShieldCheck size={13} /> },
  ];

  return (
    <section id="about" className="w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-white flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column layout: Text on left, 3D Iridescent Composition on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-16 sm:mb-20 lg:mb-24">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6">
            <div className="text-[11px] font-bold tracking-widest uppercase text-indigo-600 mb-3 font-['Outfit']">
              ABOUT NEOPACE
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-1 font-['Outfit']">
              Empowering businesses through
            </h2>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight gradient-headline mb-5 sm:mb-6 font-['Outfit']">
              technology.
            </div>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 max-w-md">
              We architect robust, scalable software and delightful design systems for startups 
              and enterprise pioneers who refuse to settle for mediocre legacy IT infrastructure.
            </p>

            {/* Pill CTA button matching mockup */}
            <a 
              href="#services"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white rounded-full text-xs font-semibold shadow-md shadow-slate-900/10 transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-xs">
                <Plus size={11} />
              </div>
              <span>More about us</span>
            </a>
          </div>

          {/* Right Column: 3D Iridescent Composition with Mission & Vision Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-[480px] flex items-center justify-center">
              {/* Soft Ambient Radial Blur */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-300/20 via-pink-300/20 to-sky-300/20 rounded-full blur-3xl pointer-events-none"></div>

              {/* Central 3D Graphic */}
              <div className="relative z-10 w-full animate-soft-float flex items-center justify-center">
                <img 
                  src={empowerVisualImg} 
                  alt="Empowering businesses through technology" 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(150,110,230,0.22)] select-none pointer-events-none"
                />
              </div>

              {/* Floating Mission Badge (Top-Right on lg screens, hidden on xs to prevent overlap) */}
              <div className="absolute top-2 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg shadow-purple-500/10 max-w-[190px] hidden sm:flex items-start gap-2.5 transition-transform duration-300 hover:scale-105">
                <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <Target size={14} />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold text-slate-900">Our mission</h5>
                  <p className="text-[9px] text-slate-500 leading-tight mt-0.5">Comprehensive engineering pipelines for enterprise growth.</p>
                </div>
              </div>

              {/* Floating Vision Badge (Bottom-Right on lg screens) */}
              <div className="absolute bottom-2 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg shadow-purple-500/10 max-w-[190px] hidden sm:flex items-start gap-2.5 transition-transform duration-300 hover:scale-105">
                <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Eye size={14} />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold text-slate-900">Our Vision</h5>
                  <p className="text-[9px] text-slate-500 leading-tight mt-0.5">Modern software craftsmanship without compromise.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Value Proposition Cards Row matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20 lg:mb-24">
          {cards.map((card) => (
            <div 
              key={card.title} 
              className="mockup-card p-6 sm:p-7 flex flex-col justify-between group cursor-default transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center mb-5 transition-colors group-hover:bg-white shadow-xs`}>
                  {card.icon}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 font-['Outfit'] mb-2">
                  {card.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-6 flex justify-end">
                <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center text-slate-400 transition-all duration-200">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities Strip with Exact Matching Icons */}
        <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-10 border-t border-slate-100 text-[10px] sm:text-[11px] font-bold text-slate-400 tracking-wider">
          {badges.map((b) => (
            <div key={b.name} className="flex items-center gap-1.5 sm:gap-2 hover:text-indigo-600 transition-colors cursor-default">
              <span className="text-slate-400">{b.icon}</span>
              <span>{b.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
