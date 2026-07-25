import React from 'react';

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Floating Glowing Aurora Blobs */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[140px] animate-pulse-glow"
      />
      <div 
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-emerald-500/10 blur-[150px] animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[160px] animate-pulse-glow"
        style={{ animationDelay: '4s' }}
      />

      {/* Radial vignette mask */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#09090B]/60 to-[#09090B]" />
    </div>
  );
}
