import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

// Real service 3D isometric icons from src/assets/Services/
import customSoftwareIcon from '../assets/Services/Custom_Software_Development.png';
import saasIcon from '../assets/Services/Saas.png';
import itIcon from '../assets/Services/IT.png';
import aiAgentsIcon from '../assets/Services/AI_Agents.png';
import appIcon from '../assets/Services/App.png';
import uiUxIcon from '../assets/Services/UI-UX.png';
import webDesignIcon from '../assets/Services/WebDesign.png';
import aiIcon from '../assets/Services/AI.png';
import digitalIcon from '../assets/Services/Digital.png';

export default function ServicesSection() {
  const services = [
    {
      title: 'Custom Software Development',
      desc: 'Scalable, performant fullstack software engineering tailored for bespoke business logic.',
      graphic: customSoftwareIcon,
    },
    {
      title: 'SaaS Platforms',
      desc: 'Multi-tenant cloud SaaS architectures engineered for high concurrency and zero downtime.',
      graphic: saasIcon,
    },
    {
      title: 'IT Consulting & Infrastructure',
      desc: 'Enterprise technology consulting, DevOps automation pipelines, and infrastructure modernization.',
      graphic: itIcon,
    },
    {
      title: 'AI Agents & Automation',
      desc: 'Autonomous intelligent agents, automated customer workflows, and deep LLM integrations.',
      graphic: aiAgentsIcon,
    },
    {
      title: 'App Development',
      desc: 'Native and cross-platform mobile apps for iOS and Android built with fluid animations.',
      graphic: appIcon,
    },
    {
      title: 'UI/UX Design Systems',
      desc: 'Pixel-perfect, enterprise-grade design systems built to scale across global engineering teams.',
      graphic: uiUxIcon,
    },
    {
      title: 'Web Design & Development',
      desc: 'Modern animated websites with high-converting layouts and blazing fast loading speeds.',
      graphic: webDesignIcon,
    },
    {
      title: 'Artificial Intelligence & ML',
      desc: 'Predictive analytics, custom fine-tuned machine learning models, and smart automation.',
      graphic: aiIcon,
    },
    {
      title: 'Digital Marketing & Growth',
      desc: 'Full-funnel digital strategy, conversion rate engineering, and brand acceleration.',
      graphic: digitalIcon,
    },
  ];

  return (
    <section id="services" className="w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-[#fafafc] border-y border-slate-100 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="text-[11px] font-bold tracking-widest uppercase text-indigo-600 mb-2 font-['Outfit']">
            OUR EXPERTISE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit'] mb-3">
            Technology that moves your business{' '}
            <span className="gradient-headline">forward.</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm px-2">
            Discover a comprehensive suite of high-velocity engineering and design capabilities tailored for modern scale.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 lg:mb-24">
          {services.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-violet-300/60 hover:-translate-y-1 shadow-xs"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1 pr-2">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-['Outfit'] mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center p-1">
                  <img 
                    src={item.graphic} 
                    alt={item.title} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-sm" 
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center text-slate-400 transition-all duration-200">
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner matching mockup */}
        <div className="w-full rounded-2xl bg-gradient-to-r from-violet-100/90 via-purple-50/80 to-pink-100/90 border border-violet-200/70 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 font-['Outfit'] mb-1">
              Designed for business like yours.
            </h4>
            <p className="text-slate-500 text-xs sm:text-sm">
              Try it risk-free with our 7-day money-back guarantee.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all hover:shadow-lg active:scale-95"
          >
            <span>Schedule a Call</span>
            <ArrowRight size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}
