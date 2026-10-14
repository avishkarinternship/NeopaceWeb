import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// Exact 3D Handshake on pedestal cleanly blended
import handshakeImg from '../assets/Ventures/Handshake.png';

// Brand logos from src/assets/Ventures/
import neoparlourLogo from '../assets/Ventures/Neoparlour.png';
import redstoneLogo from '../assets/Ventures/Redstone.png';
import yogisFarmLogo from '../assets/Ventures/YogisFarm.png';
import btobLogo from '../assets/Ventures/BtoB.png';
import nexlaptopLogo from '../assets/Ventures/Nexlaptop.png';
import cloudbitesLogo from '../assets/Ventures/Cloudbites.png';

// Partner logos from src/assets/Partners/
import dellLogo from '../assets/Partners/Dell.png';
import asusLogo from '../assets/Partners/Asus.png';
import hpLogo from '../assets/Partners/HP.png';
import lenovoLogo from '../assets/Partners/Lenovo.png';
import hamaLogo from '../assets/Partners/Hama.png';
import darwinLogo from '../assets/Partners/Darwin.png';
import acerLogo from '../assets/Partners/Acer.png';
import ventionLogo from '../assets/Partners/Vention.png';

export default function VenturesSection() {
  const ventures = [
    { name: 'NeoParlour', logo: neoparlourLogo },
    { name: 'Neo Redstone Media', logo: redstoneLogo },
    { name: "Yogi's Farm", logo: yogisFarmLogo },
    { name: 'btob spot', logo: btobLogo },
    { name: 'Nexlaptop', logo: nexlaptopLogo },
    { name: 'Cloudbites', logo: cloudbitesLogo },
  ];

  const partners = [
    { name: 'Dell', logo: dellLogo },
    { name: 'Asus', logo: asusLogo },
    { name: 'HP', logo: hpLogo },
    { name: 'Lenovo', logo: lenovoLogo },
    { name: 'Hama', logo: hamaLogo },
    { name: 'Darwin', logo: darwinLogo },
    { name: 'Acer', logo: acerLogo },
    { name: 'Vention', logo: ventionLogo },
  ];

  return (
    <section id="ventures" className="w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-[#fafafc] border-y border-slate-100 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-indigo-600 mb-2 font-['Outfit']">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
            <span>TRUSTED ECOSYSTEM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit'] mb-3">
            Our Ventures &amp; <span className="text-indigo-600">Partners</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed px-2">
            We build, collaborate and grow with incredible brands, founders and teams who share our belief in better digital experiences.
          </p>
        </div>

        {/* Dual Cards with balanced Center Handshake */}
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
          
          {/* Card 1: Our Ventures */}
          <div className="w-full lg:w-[42%] bg-white border border-slate-200/80 rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <span className="w-1 h-5 rounded-full bg-indigo-600"></span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                  Our Ventures
                </h3>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                <ArrowUpRight size={15} />
              </div>
            </div>
            
            <p className="text-slate-500 text-xs mb-5 sm:mb-6">
              Products and initiatives built by NeoPace to solve real-world problems.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
              {ventures.map((v) => (
                <div
                  key={v.name}
                  className="h-14 sm:h-16 bg-white border border-slate-200/90 rounded-xl sm:rounded-2xl flex items-center justify-center p-2.5 sm:p-3 shadow-xs hover:border-indigo-200 transition-colors"
                  title={v.name}
                >
                  <img
                    src={v.logo}
                    alt={v.name}
                    className="max-h-7 sm:max-h-8 max-w-[80px] sm:max-w-[85px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Center 3D Handshake with Iridescent Aura */}
          <div className="w-full lg:w-[16%] flex items-center justify-center relative py-2 lg:py-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-200/50 via-pink-200/30 to-transparent rounded-full blur-xl pointer-events-none scale-125"></div>
            <img
              src={handshakeImg}
              alt="Collaboration Handshake"
              className="relative w-32 sm:w-40 lg:w-48 h-auto object-contain select-none drop-shadow-md transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Card 2: Our Partners & Clients */}
          <div className="w-full lg:w-[42%] bg-white border border-slate-200/80 rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <span className="w-1 h-5 rounded-full bg-indigo-600"></span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                  Our Partners &amp; Clients
                </h3>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                <ArrowUpRight size={15} />
              </div>
            </div>
            
            <p className="text-slate-500 text-xs mb-5 sm:mb-6">
              We work with global brands, fast-growing startups and established enterprises.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="h-14 sm:h-16 bg-white border border-slate-200/90 rounded-xl sm:rounded-2xl flex items-center justify-center p-2 sm:p-2.5 shadow-xs hover:border-indigo-200 transition-colors"
                  title={p.name}
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-5 sm:max-h-6 max-w-[60px] sm:max-w-[65px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
