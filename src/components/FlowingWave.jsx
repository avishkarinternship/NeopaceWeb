import React from 'react';

export default function FlowingWave({ className = '' }) {
  // Sparkle particle definitions positioned along the flowing wave
  const sparkles = [
    { x: '8%', y: '45%', size: 14, delay: '0s', dur: '3.0s' },
    { x: '18%', y: '36%', size: 18, delay: '1.2s', dur: '4.2s' },
    { x: '28%', y: '52%', size: 13, delay: '0.6s', dur: '2.8s' },
    { x: '38%', y: '34%', size: 16, delay: '1.8s', dur: '3.6s' },
    { x: '48%', y: '46%', size: 20, delay: '0.3s', dur: '4.5s' },
    { x: '58%', y: '32%', size: 15, delay: '2.1s', dur: '3.2s' },
    { x: '68%', y: '48%', size: 17, delay: '1.0s', dur: '3.8s' },
    { x: '78%', y: '38%', size: 12, delay: '2.5s', dur: '3.4s' },
    { x: '88%', y: '44%', size: 19, delay: '0.8s', dur: '4.0s' },
    { x: '95%', y: '35%', size: 14, delay: '1.6s', dur: '3.1s' },
    { x: '22%', y: '60%', size: 12, delay: '1.5s', dur: '3.3s' },
    { x: '42%', y: '64%', size: 11, delay: '0.9s', dur: '2.7s' },
    { x: '62%', y: '58%', size: 14, delay: '2.0s', dur: '3.9s' },
    { x: '82%', y: '62%', size: 13, delay: '0.4s', dur: '2.9s' },
  ];

  return (
    <div className={`flowing-wave-stage ${className}`} aria-hidden="true">
      {/* Wave SVG Canvas - double wide (2880px) for seamless left-to-right infinite loop */}
      <svg
        className="flowing-wave-svg"
        viewBox="0 0 2880 700"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Silky iridescent gradient */}
          <linearGradient id="silkFlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="18%" stopColor="#dce0ff" stopOpacity="0.8" />
            <stop offset="38%" stopColor="#e9d5ff" stopOpacity="0.85" />
            <stop offset="58%" stopColor="#fbcfe8" stopOpacity="0.8" />
            <stop offset="78%" stopColor="#dbeafe" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
          </linearGradient>

          {/* Luminous crest highlight edge */}
          <linearGradient id="edgeGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a5b4fc" />
            <stop offset="30%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f472b6" />
            <stop offset="85%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          {/* Iridescent neon glow filter */}
          <filter id="waveNeonGlow" x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Layer 1: Slower Background Silk Ribbon flowing Left -> Right */}
        <g className="flow-track flow-track-slow">
          <path
            d="M 0 380 
               C 360 260, 720 500, 1080 340 
               C 1260 260, 1350 240, 1440 280
               C 1800 260, 2160 500, 2520 340 
               C 2700 260, 2790 240, 2880 280
               L 2880 700 L 0 700 Z"
            fill="url(#silkFlow)"
            opacity="0.5"
          />
        </g>

        {/* Layer 2: Main Flowing Silk Wave with Glowing Edge */}
        <g className="flow-track flow-track-main">
          {/* Translucent silk body */}
          <path
            d="M 0 280 
               C 320 430, 640 180, 960 360 
               C 1200 480, 1360 320, 1440 240
               C 1760 430, 2080 180, 2400 360 
               C 2640 480, 2800 320, 2880 240
               L 2880 700 L 0 700 Z"
            fill="url(#silkFlow)"
            opacity="0.75"
          />
          {/* Glowing neon edge */}
          <path
            d="M 0 280 
               C 320 430, 640 180, 960 360 
               C 1200 480, 1360 320, 1440 240
               C 1760 430, 2080 180, 2400 360 
               C 2640 480, 2800 320, 2880 240"
            fill="none"
            stroke="url(#edgeGlow)"
            strokeWidth="3.5"
            filter="url(#waveNeonGlow)"
            opacity="0.9"
          />
          {/* Crisp white luminous core line */}
          <path
            d="M 0 280 
               C 320 430, 640 180, 960 360 
               C 1200 480, 1360 320, 1440 240
               C 1760 430, 2080 180, 2400 360 
               C 2640 480, 2800 320, 2880 240"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.6"
            opacity="0.95"
          />
        </g>

        {/* Layer 3: Secondary Fast Flowing Accent Ribbon */}
        <g className="flow-track flow-track-fast">
          <path
            d="M 0 340 
               C 380 220, 760 470, 1140 300 
               C 1320 220, 1400 320, 1440 310
               C 1820 220, 2200 470, 2580 300 
               C 2760 220, 2840 320, 2880 310"
            fill="none"
            stroke="url(#edgeGlow)"
            strokeWidth="2.2"
            opacity="0.75"
          />
        </g>
      </svg>

      {/* Floating Sparkles Layer */}
      <div className="sparkles-overlay pointer-events-none">
        {sparkles.map((sp, idx) => (
          <div
            key={idx}
            className="sparkle-particle"
            style={{
              left: sp.x,
              top: sp.y,
              width: `${sp.size}px`,
              height: `${sp.size}px`,
              animationDelay: sp.delay,
              animationDuration: sp.dur,
            }}
          >
            <svg viewBox="-10 -10 20 20" className="w-full h-full drop-shadow-[0_0_6px_rgba(236,72,153,0.7)]">
              {/* Soft outer glow */}
              <circle cx="0" cy="0" r="4.5" fill="rgba(255, 255, 255, 0.8)" filter="blur(1px)" />
              {/* 4-point iridescent star */}
              <path
                d="M 0 -8.5 Q 0 0 8.5 0 Q 0 0 0 8.5 Q 0 0 -8.5 0 Q 0 0 0 -8.5 Z"
                fill="#ffffff"
              />
              {/* Center jewel light */}
              <circle cx="0" cy="0" r="1.8" fill="#e0e7ff" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
