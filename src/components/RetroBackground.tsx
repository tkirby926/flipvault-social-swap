
import React, { useEffect, useState } from 'react';

type RetroPixel = {
  id: number;
  x: string;
  y: string;
  size: number;
  blinkSpeed: number; 
  color: string;
  visible: boolean;
}

type RetroStar = {
  id: number;
  x: string;
  y: string;
  size: number;
  opacity: number;
  pulseSpeed: number;
}

const RetroBackground = () => {
  // Generate pixel stars that blink
  const [retroPixels, setRetroPixels] = useState<RetroPixel[]>([]);
  const [retroStars, setRetroStars] = useState<RetroStar[]>([]);
  
  useEffect(() => {
    // Create blinking pixels with more visible effect
    const pixels = Array.from({ length: 180 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 300}%`, // Triple height to cover more vertical space
      size: Math.random() * 4 + 2, 
      blinkSpeed: Math.random() * 2000 + 500,
      color: Math.random() > 0.6 ? '#7caeff' : Math.random() > 0.4 ? '#a2c5ff' : '#d1e2ff',  // Brighter blue colors
      visible: Math.random() > 0.3
    }));
    
    setRetroPixels(pixels);
    
    // Create pulsing stars with more visible effect
    const stars = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 300}%`, // Triple height to cover more vertical space
      size: Math.random() * 7 + 3,
      opacity: Math.random() * 0.7 + 0.3, // Higher opacity for better visibility
      pulseSpeed: Math.random() * 3000 + 1500
    }));
    
    setRetroStars(stars);
    
    // Setup intervals to blink pixels
    const blinkIntervals = pixels.map(pixel => {
      return setInterval(() => {
        setRetroPixels(prev => 
          prev.map(p => 
            p.id === pixel.id ? { ...p, visible: !p.visible } : p
          )
        );
      }, pixel.blinkSpeed);
    });
    
    // Cleanup
    return () => {
      blinkIntervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Subtle grid lines to enhance pixelated effect */}
      <div className="absolute inset-0 grid-bg opacity-40" style={{ height: '300vh' }}></div>
      
      {/* Blinking pixels for subtle animation */}
      {retroPixels.map(pixel => (
        <div 
          key={pixel.id} 
          className="absolute rounded-sm transition-opacity"
          style={{
            top: pixel.y,
            left: pixel.x,
            width: `${pixel.size}px`, 
            height: `${pixel.size}px`,
            backgroundColor: pixel.color,
            opacity: pixel.visible ? 0.8 : 0, // Increased opacity
            boxShadow: `0 0 ${pixel.size * 2}px ${pixel.size}px ${pixel.color}`,
            transition: "opacity 0.3s ease-in-out",
            zIndex: 0,
          }}
        />
      ))}
      
      {/* More visible pulsing stars */}
      {retroStars.map(star => (
        <div 
          key={star.id} 
          className="absolute rounded-full"
          style={{
            top: star.y,
            left: star.x,
            width: `${star.size}px`, 
            height: `${star.size}px`,
            backgroundColor: '#FFFFFF',  // Brighter stars
            boxShadow: `0 0 ${star.size * 3}px ${star.size * 1.5}px rgba(200, 220, 255, ${star.opacity})`, // Blue-tinted glow
            animation: `pulse ${star.pulseSpeed}ms infinite alternate ease-in-out`,
            zIndex: 0,
          }}
        />
      ))}
    </div>
  );
};

export default RetroBackground;
