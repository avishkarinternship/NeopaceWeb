import React from 'react';
import image1 from '../assets/Team/Image1.png';
import image2 from '../assets/Team/Image2.png';
import image3 from '../assets/Team/Image3.png';
import image4 from '../assets/Team/Image4.png';

export default function TeamSection() {
  const members = [
    { name: 'Aarav Sharma', initials: 'AS', color: 'bg-indigo-600' },
    { name: 'Pratik Joshi', initials: 'PJ', color: 'bg-violet-600' },
    { name: 'Vikram Mehta', initials: 'VM', color: 'bg-pink-500' },
    { name: 'Ananya Rao', initials: 'AR', color: 'bg-purple-600' },
    { name: 'Rohan Gupta', initials: 'RG', color: 'bg-slate-800' },
    { name: 'Sneha Patel', initials: 'SP', color: 'bg-indigo-500' },
    { name: 'Kavita Iyer', initials: 'KI', color: 'bg-pink-600' },
    { name: 'Aditya Sen', initials: 'AS', color: 'bg-slate-700' },
    { name: 'Meera Nair', initials: 'MN', color: 'bg-violet-500' },
    { name: 'Nikhil Verma', initials: 'NV', color: 'bg-indigo-600' },
    { name: 'Pooja Bhat', initials: 'PB', color: 'bg-pink-500' },
    { name: 'Siddharth Roy', initials: 'SR', color: 'bg-slate-800' },
  ];

  return (
    <section id="team" className="w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-white flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit'] mb-3">
            Join Our Team of Experts
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mb-2 max-w-md mx-auto leading-relaxed px-2">
            We are always looking for passionate people to join our team
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 tracking-wide transition-colors underline underline-offset-4"
          >
            <span>www.neopace.tech</span>
          </a>
        </div>

        {/* 4-Image Dynamic Collage with Organic Iridescent Aura */}
        <div className="w-full max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="relative p-2.5 sm:p-4 md:p-5 rounded-[24px] sm:rounded-[36px] md:rounded-[44px] bg-gradient-to-tr from-violet-200/50 via-pink-100/40 to-purple-200/50 border border-violet-200/70 shadow-2xl shadow-purple-500/10">
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/15 via-pink-400/10 to-indigo-400/15 rounded-[44px] blur-2xl pointer-events-none"></div>

            {/* Responsive Photo Grid */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
              
              {/* Photo 1: Team In Office */}
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white shadow-sm bg-white">
                <img 
                  src={image1} 
                  alt="NeoPace Team" 
                  className="w-full h-44 sm:h-56 md:h-64 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" 
                />
              </div>

              {/* Photo 2: Team Celebration */}
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white shadow-sm bg-white">
                <img 
                  src={image2} 
                  alt="NeoPace Celebration" 
                  className="w-full h-44 sm:h-56 md:h-64 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" 
                />
              </div>

              {/* Photo 3: Team Group */}
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white shadow-sm bg-white">
                <img 
                  src={image3} 
                  alt="NeoPace Together" 
                  className="w-full h-44 sm:h-56 md:h-64 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" 
                />
              </div>

              {/* Photo 4: NeoPace Office Wall */}
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white shadow-sm bg-white">
                <img 
                  src={image4} 
                  alt="NeoPace Headquarters" 
                  className="w-full h-44 sm:h-56 md:h-64 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" 
                />
              </div>

            </div>
          </div>
        </div>

        {/* Compact Centered Avatar Chips matching reference layout */}
        <div className="w-full max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 px-2">
          {members.map((m) => (
            <div 
              key={m.name} 
              className="group relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-violet-300 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <div 
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white shadow-xs shrink-0 ${m.color}`}
              >
                {m.initials}
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-700 group-hover:text-slate-900 whitespace-nowrap">
                {m.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
