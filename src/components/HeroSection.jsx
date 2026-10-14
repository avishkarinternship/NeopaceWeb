import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import glassPanelSrc from '../assets/Hero/Frosted_Iridescent_Glass_Panel_opt.png';
import glassLogoSrc from '../assets/Hero/Iridescent_Loop_Glass_Icon_opt.png';
import ParticleWave from './ParticleWave';

export default function HeroSection() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const waveRef = useRef(null);
  const stageRef = useRef(null);
  const panelRefs = useRef([]);
  const logoPanelRef = useRef(null);

  // Configuration for all 13 glass panels matching reference:
  const TOTAL_PANELS = 13;
  const LOGO_INDEX = 5;

  const panelsData = Array.from({ length: TOTAL_PANELS }, (_, i) => ({
    id: i,
    isLogo: i === LOGO_INDEX,
    src: i === LOGO_INDEX ? glassLogoSrc : glassPanelSrc,
    offsetX: i * 52,
    offsetY: -i * 10,
    zIndex: (TOTAL_PANELS - i) * 2,
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial State:
      panelRefs.current.forEach((el) => {
        if (!el) return;
        gsap.set(el, {
          y: 120,
          opacity: 0,
          scale: 0.92,
        });
      });

      gsap.set(waveRef.current, {
        y: 40,
        opacity: 0,
      });

      // 2. Loading Animation Timeline:
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(headlineRef.current?.children || [], {
        y: 35,
        opacity: 0,
        stagger: 0.1,
        duration: 0.75,
      })
      .to(waveRef.current, {
        y: 0,
        opacity: 0.85,
        duration: 0.9,
      }, '-=0.4');

      // Staggered upwards entrance for each glass panel
      tl.to(panelRefs.current, {
        y: (i) => (i === LOGO_INDEX ? -50 : 0),
        opacity: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.05,
        ease: 'power3.out',
      }, '-=0.6');

      // 3. Floating animation starts as panels settle:
      tl.add(() => {
        if (!logoPanelRef.current) return;

        gsap.to(logoPanelRef.current, {
          y: -82,
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        // Pulsing iridescent glow around elevated floating logo glass
        gsap.to(logoPanelRef.current, {
          filter: 'drop-shadow(0 26px 36px rgba(180, 80, 240, 0.5)) drop-shadow(0 6px 14px rgba(230, 60, 160, 0.4))',
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }, '+=0.05');

    }, containerRef);

    // Interactive 3D mouse parallax (desktop only)
    const handleMouseMove = (e) => {
      if (!stageRef.current || window.innerWidth < 768) return;
      const { innerWidth, innerHeight } = window;
      const xVal = (e.clientX / innerWidth - 0.5) * 12;
      const yVal = (e.clientY / innerHeight - 0.5) * 12;

      gsap.to(stageRef.current, {
        rotateY: xVal,
        rotateX: -yVal,
        duration: 0.9,
        ease: 'power2.out',
        transformPerspective: 1200,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="home" 
      className="relative w-full overflow-hidden pt-0 sm:pt-0 md:pt-0 pb-0 sm:pb-0 md:pb-0 lg:pb-0 bg-white flex flex-col items-center justify-center text-center"
    >
      {/* 3D Iridescent Particle Wave flowing from left to right */}
      <div 
        ref={waveRef}
        className="absolute bottom-0 left-0 right-0 top-52 sm:top-60 md:top-68 w-full h-[380px] sm:h-[460px] md:h-[520px] overflow-hidden pointer-events-none select-none z-0"
      >
        <ParticleWave />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Centered Headlines */}
        <div ref={headlineRef} className="flex flex-col items-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-2 sm:mb-3 font-['Outfit']">
            Enterprise-grade design
          </h1>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight gradient-headline leading-[1.15] mb-4 sm:mb-6 font-['Outfit']">
            without the overhead
          </div>

          <p className="text-slate-500 text-xs sm:text-sm md:text-base font-normal max-w-lg leading-relaxed mb-6 sm:mb-8 px-4">
            Launch your MVP, scale product lines &amp; deploy features at lightning speed
            with a dedicated partner for fast-growing modern companies.
          </p>

          {/* Pill CTA button */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white rounded-full text-xs sm:text-sm font-medium shadow-md shadow-slate-900/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
          >
            <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform duration-300">
              <ArrowRight size={12} />
            </div>
            <span>Schedule Free Demo</span>
          </a>
        </div>

        {/* Hero 3D Stage with 13 Individual Glass Panels - fully responsive scaling */}
        <div className="w-full flex items-center justify-center mt-2 sm:mt-4 ">
          <div 
            ref={stageRef} 
            className="relative w-full max-w-4xl h-[240px] xs:h-[280px] sm:h-[340px] md:h-[380px] lg:h-[400px] flex items-center justify-center will-change-transform"
          >
            <div className="relative w-[840px] h-[340px] flex items-center select-none pointer-events-none scale-[0.48] xs:scale-[0.58] sm:scale-75 md:scale-90 lg:scale-100 origin-center shrink-0">
              {panelsData.map((panel, idx) => (
                <div
                  key={panel.id}
                  ref={(el) => {
                    panelRefs.current[idx] = el;
                    if (panel.isLogo) logoPanelRef.current = el;
                  }}
                  className="absolute will-change-transform"
                  style={{
                    left: `${panel.offsetX}px`,
                    top: `${110 + panel.offsetY}px`,
                    zIndex: panel.zIndex,
                    width: '210px',
                    filter: panel.isLogo
                      ? 'drop-shadow(0 15px 25px rgba(180, 80, 240, 0.35))'
                      : 'drop-shadow(0 8px 16px rgba(150, 110, 230, 0.12))',
                  }}
                >
                  <img
                    src={panel.src}
                    alt={panel.isLogo ? 'NeoPace Logo Glass' : `Glass Panel ${idx + 1}`}
                    className="w-full h-auto object-contain block"
                    draggable={false}
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
