import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import logoSrc from '../assets/Hero/Iridescent_Loop_Glass Icon.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-100 transition-all duration-300 flex justify-center">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5 group shrink-0">
          <img 
            src={logoSrc} 
            alt="NeoPace Logo" 
            className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="font-extrabold text-xl tracking-tight text-slate-900 font-['Outfit']">
            NeoPace
          </span>
        </a>

        {/* Navigation items for Desktop / Tablet */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            About
          </a>
          <div className="relative group cursor-pointer flex items-center gap-1">
            <span className="text-sm font-medium text-slate-600 group-hover:text-indigo-600 transition-colors">
              Ventures
            </span>
            <ChevronDown size={14} className="text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-y-0.5" />
          </div>
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Services
          </a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Pricing
          </a>
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a 
            href="#contact" 
            className="hidden sm:inline-flex px-5 py-2 text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-white hover:bg-indigo-50/50 border border-indigo-200/90 rounded-full transition-all duration-200 shadow-xs hover:shadow-sm active:scale-95"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile Menu Hamburger */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-700 hover:text-indigo-600 py-1"
          >
            About
          </a>
          <a 
            href="#ventures" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-700 hover:text-indigo-600 py-1"
          >
            Ventures
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-700 hover:text-indigo-600 py-1"
          >
            Services
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-700 hover:text-indigo-600 py-1"
          >
            Pricing
          </a>
          <div className="pt-2 border-t border-slate-100">
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex justify-center items-center py-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-sm"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
