
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
    // Create blinking pixels
    const pixels = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      blinkSpeed: Math.random() * 3000 + 1000,
      color: Math.random() > 0.7 ? '#1EAEDB' : Math.random() > 0.5 ? '#8B5CF6' : '#ffffff',
      visible: Math.random() > 0.5
    }));
    
    setRetroPixels(pixels);
    
    // Create pulsing stars
    const stars = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * 5 + 3,
      opacity: Math.random() * 0.5 + 0.25,
      pulseSpeed: Math.random() * 4000 + 2000
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

  // Create retro game sprites
  const retroSprites = [
    { src: "/lovable-uploads/ab5a9bf2-e537-49e1-af36-af9eeb17e827.png", alt: "Spaceship", top: "15%", left: "8%", size: "40px", animation: "float-rotate 20s infinite linear" },
    { src: "/lovable-uploads/9ed234f4-4ae1-42e9-b87f-9a035f88851f.png", alt: "Alien", top: "60%", right: "5%", size: "35px", animation: "float 12s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9b00b85f-d6b8-4835-98f2-59a85954f70c.png", alt: "Game character", bottom: "10%", left: "12%", size: "45px", animation: "bounce 5s infinite alternate ease-in-out" }
  ];

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: -10 }}>
      {/* Grid lines */}
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      
      {/* Blinking retro pixels */}
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
            opacity: pixel.visible ? 1 : 0,
          }}
        />
      ))}
      
      {/* Pulsing stars */}
      {retroStars.map(star => (
        <div 
          key={star.id} 
          className="absolute rounded-full"
          style={{
            top: star.y,
            left: star.x,
            width: `${star.size}px`, 
            height: `${star.size}px`,
            backgroundColor: 'white',
            boxShadow: `0 0 ${star.size * 3}px ${star.size}px rgba(255, 255, 255, ${star.opacity})`,
            animation: `pulse ${star.pulseSpeed}ms infinite alternate ease-in-out`
          }}
        />
      ))}
      
      {/* Retro sprites */}
      {retroSprites.map((sprite, index) => (
        <img
          key={index}
          src={sprite.src}
          alt={sprite.alt}
          className="absolute transition-all duration-500"
          style={{
            top: sprite.top || 'auto',
            left: sprite.left || 'auto',
            right: sprite.right || 'auto',
            bottom: sprite.bottom || 'auto',
            width: sprite.size,
            height: sprite.size,
            opacity: 0.3,
            filter: 'brightness(1.5) contrast(1.2)',
            animation: sprite.animation,
          }}
        />
      ))}
    </div>
  );
};

export default RetroBackground;
