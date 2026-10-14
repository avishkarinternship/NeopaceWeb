import React, { useEffect, useRef } from 'react';

/**
 * 3D Particle Wave with continuous Left-to-Right flow and entrance sweep.
 * Recreates the undulating luminous particle wave field matching NeoPace's theme & colors.
 */
export default function ParticleWave({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize handling with devicePixelRatio for ultra-crisp retina rendering
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const updateDimensions = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width || canvas.parentElement.offsetWidth;
      height = rect.height || canvas.parentElement.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Grid configuration: 90 columns across X, 38 rows across Z depth
    const COLS = 92;
    const ROWS = 38;

    let time = 0;
    // Loading entrance sweep: sweeps across from left (0) to right (1.3)
    let loadProgress = 0;

    // Pre-calculate color gradients / palette for maximum 60fps performance
    // NeoPace theme: Electric Violet (#7b5aff), Magenta (#c841c2), Pink (#e4429f), Cyan (#38bdf8), Indigo (#5833ef)
    const render = () => {
      // Sweep in from left to right on initial load
      if (loadProgress < 1.35) {
        loadProgress += 0.016; // Smooth ~1.4s sweep
      }
      time += 0.024; // Left-to-right wave flow velocity

      ctx.clearRect(0, 0, width, height);

      const fov = 340;
      const cameraY = -75;
      const centerY = height * 0.62;
      const gridWidth = width * 1.45;
      const stepX = gridWidth / COLS;
      const stepZ = 16.5;

      // We'll store projected points to optionally draw wave crest connection filaments
      const projectedGrid = [];

      for (let r = 0; r < ROWS; r++) {
        projectedGrid[r] = [];
        const normZ = r / ROWS;
        // Z from far (at r=ROWS) to near (at r=0)
        const z3d = (ROWS - r) * stepZ + 90;
        const scale = fov / (fov + z3d);

        for (let c = 0; c < COLS; c++) {
          const normX = c / COLS;

          // Flow physics: left-to-right propagation (normX * frequency - time * velocity)
          const flowX = normX * 6.5 - time * 1.8;
          const waveZ = normZ * 4.2 + time * 0.4;

          // Harmonic interference waves creating organic ocean-like undulating dunes
          const wave1 = Math.sin(flowX + waveZ) * 44;
          const wave2 = Math.cos(flowX * 1.6 - waveZ * 0.9) * 24;
          const wave3 = Math.sin((flowX * 2.8 + normZ * 3.2)) * 12;
          const rawHeight = wave1 + wave2 + wave3;

          // Loading reveal sweep: wave sweeps from left side to right side
          // Particles only appear as the wave sweeps over them
          const sweepX = normX;
          const revealFactor = Math.min(1, Math.max(0, (loadProgress - sweepX) * 3.5));

          if (revealFactor <= 0.02) {
            projectedGrid[r][c] = null;
            continue;
          }

          const y3d = rawHeight * revealFactor;
          const x3d = (c - COLS / 2) * stepX;

          // 3D Perspective Projection
          const projX = width / 2 + x3d * scale;
          const projY = centerY + (y3d - cameraY) * scale;

          if (projX < -30 || projX > width + 30 || projY < -30 || projY > height + 30) {
            projectedGrid[r][c] = null;
            continue;
          }

          // Depth-based particle radius
          const elevationNorm = (rawHeight + 80) / 160; // 0 to 1
          const baseRadius = (1.2 + scale * 1.8 + elevationNorm * 1.4) * revealFactor;
          const alpha = Math.min(0.95, Math.max(0.12, scale * 1.15 * (0.5 + elevationNorm * 0.7))) * revealFactor;

          projectedGrid[r][c] = { x: projX, y: projY, elevation: rawHeight, alpha, radius: baseRadius, normX };
        }
      }

      // Pass 1: Render delicate crest filament threads along the wave ridges
      for (let r = 0; r < ROWS; r += 2) {
        let inPath = false;
        ctx.beginPath();
        for (let c = 0; c < COLS; c++) {
          const pt = projectedGrid[r][c];
          if (pt && pt.elevation > 10) { // Only high wave crests
            if (!inPath) {
              ctx.moveTo(pt.x, pt.y);
              inPath = true;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            inPath = false;
          }
        }
        if (inPath) {
          ctx.strokeStyle = `rgba(168, 85, 247, ${0.12 * Math.min(1, loadProgress)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Pass 2: Draw the glowing 3D particles with NeoPace's iridescent theme colors
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const pt = projectedGrid[r][c];
          if (!pt) continue;

          const { x, y, elevation, alpha, radius, normX } = pt;

          // Theme color mapping:
          // - High crests: Glowing Iridescent Pink / Magenta (#e4429f, #ec4899) & Pure White highlights
          // - Mid slopes: Vibrant Electric Violet (#7b5aff, #8b5cf6)
          // - Low valleys: Soft Lavender / Indigo (#6366f1, #38bdf8)
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);

          if (elevation > 28) {
            // Bright crest: luminous white-pink core
            ctx.fillStyle = `rgba(244, 114, 182, ${alpha * 0.95})`;
            ctx.shadowColor = 'rgba(236, 72, 153, 0.6)';
            ctx.shadowBlur = radius * 3;
          } else if (elevation > 2) {
            // Mid crest: Electric Violet / Purple
            ctx.fillStyle = `rgba(139, 92, 246, ${alpha * 0.85})`;
            ctx.shadowColor = 'rgba(124, 58, 237, 0.4)';
            ctx.shadowBlur = radius * 2;
          } else if (elevation > -25) {
            // Slope: Indigo / Lavender
            ctx.fillStyle = `rgba(99, 102, 241, ${alpha * 0.75})`;
            ctx.shadowBlur = 0;
          } else {
            // Deep trough: Cyan / Soft Violet accent
            const isCyan = (c % 7 === 0);
            if (isCyan) {
              ctx.fillStyle = `rgba(56, 189, 248, ${alpha * 0.7})`;
            } else {
              ctx.fillStyle = `rgba(167, 139, 250, ${alpha * 0.6})`;
            }
            ctx.shadowBlur = 0;
          }

          ctx.fill();

          // Reset shadow for next particle if set
          if (elevation > 2) {
            ctx.shadowBlur = 0;
          }
        }
      }

      // Pass 3: Luminous Sweep Flare that leads the initial left-to-right entrance
      if (loadProgress < 1.25) {
        const sweepPixelX = (loadProgress - 0.05) * width;
        const grad = ctx.createLinearGradient(sweepPixelX - 90, 0, sweepPixelX + 90, 0);
        grad.addColorStop(0, 'rgba(168, 85, 247, 0)');
        grad.addColorStop(0.5, 'rgba(236, 72, 153, 0.35)');
        grad.addColorStop(0.7, 'rgba(255, 255, 255, 0.5)');
        grad.addColorStop(1, 'rgba(99, 102, 241, 0)');

        ctx.fillStyle = grad;
        ctx.fillRect(sweepPixelX - 90, centerY - 120, 180, 240);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', updateDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`particle-wave-stage absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Soft gradient fade to top and bottom to seamlessly blend with white background */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
    </div>
  );
}
