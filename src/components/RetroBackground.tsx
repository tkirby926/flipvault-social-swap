
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
    // Create blinking pixels - increasing size and intensity
    const pixels = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * 5 + 2, // Larger size for better visibility
      blinkSpeed: Math.random() * 2000 + 500, // Faster blinking
      color: Math.random() > 0.6 ? '#1EAEDB' : Math.random() > 0.4 ? '#8B5CF6' : '#ffffff',
      visible: Math.random() > 0.5
    }));
    
    setRetroPixels(pixels);
    
    // Create pulsing stars - with higher intensity
    const stars = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * 8 + 4, // Larger size
      opacity: Math.random() * 0.6 + 0.5, // Higher base opacity
      pulseSpeed: Math.random() * 3000 + 1500 // Faster pulsing
    }));
    
    setRetroStars(stars);
    
    // Setup intervals to blink pixels with more randomized timing
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

  // Create retro game sprites with more visibility and variety
  const retroSprites = [
    { src: "/lovable-uploads/ab5a9bf2-e537-49e1-af36-af9eeb17e827.png", alt: "Spaceship", top: "15%", left: "8%", size: "60px", animation: "float-rotate 20s infinite linear" },
    { src: "/lovable-uploads/9ed234f4-4ae1-42e9-b87f-9a035f88851f.png", alt: "Alien", top: "60%", right: "5%", size: "55px", animation: "float 12s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9b00b85f-d6b8-4835-98f2-59a85954f70c.png", alt: "Game character", bottom: "10%", left: "12%", size: "65px", animation: "bounce 5s infinite alternate ease-in-out" },
    // Adding more sprites with better positioning
    { src: "/lovable-uploads/ab5a9bf2-e537-49e1-af36-af9eeb17e827.png", alt: "Spaceship 2", top: "75%", left: "80%", size: "50px", animation: "float 15s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9ed234f4-4ae1-42e9-b87f-9a035f88851f.png", alt: "Alien 2", top: "25%", right: "15%", size: "45px", animation: "bounce 7s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9b00b85f-d6b8-4835-98f2-59a85954f70c.png", alt: "Game character 2", top: "40%", left: "25%", size: "40px", animation: "float-rotate 25s infinite reverse linear" },
    { src: "/lovable-uploads/ab5a9bf2-e537-49e1-af36-af9eeb17e827.png", alt: "Spaceship 3", bottom: "30%", right: "25%", size: "45px", animation: "bounce 10s infinite alternate ease-in-out" },
  ];

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0" style={{ zIndex: -5 }}>
      {/* Grid lines with more opacity */}
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      
      {/* Blinking retro pixels with enhanced glow effect */}
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
            boxShadow: `0 0 ${pixel.size * 4}px ${pixel.size * 2}px ${pixel.color}`,
            transition: "opacity 0.2s ease-in-out",
            zIndex: -4,
          }}
        />
      ))}
      
      {/* Pulsing stars with enhanced glow */}
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
            boxShadow: `0 0 ${star.size * 6}px ${star.size * 3}px rgba(255, 255, 255, ${star.opacity})`,
            animation: `pulse ${star.pulseSpeed}ms infinite alternate ease-in-out`,
            zIndex: -3,
          }}
        />
      ))}
      
      {/* Retro sprites with increased opacity */}
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
            opacity: 0.85, // Increased from 0.7
            filter: 'brightness(1.8) contrast(1.4)', // Enhanced visibility
            animation: sprite.animation,
            zIndex: -2,
          }}
        />
      ))}
    </div>
  );
};

export default RetroBackground;
