import React from 'react';
import logoSrc from '../assets/Hero/Iridescent_Loop_Glass Icon.png';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-white border-t border-slate-100 pt-20 pb-16 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-slate-100">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <img src={logoSrc} alt="NeoPace" className="w-7 h-7 object-contain" />
              <span className="font-extrabold text-lg text-slate-900 font-['Outfit']">NeoPace</span>
            </div>
            <p className="text-xs font-semibold text-slate-700 mb-1">NeoPace Infotech LLP</p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-6">
              Designing and engineering high performance digital experiences for next-generation companies across the globe.
            </p>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-7 flex flex-col justify-start md:items-end">
            <div className="text-left md:text-right">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Office Address</span>
              <p className="text-xs text-slate-600 leading-relaxed max-w-xs mb-3">
                Cyber City Phase 2, Technology Park, Whitefield, Bengaluru, Karnataka 560066, India
              </p>
              <div className="flex flex-col md:items-end gap-1 text-xs">
                <a href="tel:+919876543210" className="text-slate-600 hover:text-indigo-600 font-medium">
                  +91 (080) 4123-4567
                </a>
                <a href="mailto:contact@neopace.tech" className="text-indigo-600 hover:underline font-semibold">
                  contact@neopace.tech
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10 border-b border-slate-100 text-xs">
          <div>
            <h5 className="font-bold text-slate-800 mb-3">Company</h5>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#about" className="hover:text-indigo-600">About NeoPace</a></li>
              <li><a href="#ventures" className="hover:text-indigo-600">Our Ventures</a></li>
              <li><a href="#team" className="hover:text-indigo-600">Meet the Team</a></li>
              <li><a href="#careers" className="hover:text-indigo-600">Careers</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-800 mb-3">Ventures</h5>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#" className="hover:text-indigo-600">Fullstack Engineering</a></li>
              <li><a href="#" className="hover:text-indigo-600">Enterprise Cloud</a></li>
              <li><a href="#" className="hover:text-indigo-600">Modern Architecture</a></li>
              <li><a href="#" className="hover:text-indigo-600">Partner Ecosystem</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-800 mb-3">Services</h5>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#services" className="hover:text-indigo-600">Digital Transformation</a></li>
              <li><a href="#services" className="hover:text-indigo-600">Mobile Applications</a></li>
              <li><a href="#services" className="hover:text-indigo-600">AI Automation</a></li>
              <li><a href="#services" className="hover:text-indigo-600">Enterprise Security</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-800 mb-3">Resources</h5>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#" className="hover:text-indigo-600">Insights</a></li>
              <li><a href="#" className="hover:text-indigo-600">Knowledge Repository</a></li>
              <li><a href="#" className="hover:text-indigo-600">Brand Guidelines</a></li>
              <li><a href="#" className="hover:text-indigo-600">Press Kit</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} NeoPace Infotech LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
            <a href="#" className="hover:text-slate-600">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
