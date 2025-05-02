
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
    const pixels = Array.from({ length: 350 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 300}%`, // Triple height to cover more vertical space
      size: Math.random() * 6 + 3, // Even larger size for better visibility
      blinkSpeed: Math.random() * 1500 + 400, // Faster blinking
      color: Math.random() > 0.5 ? '#1EAEDB' : Math.random() > 0.3 ? '#8B5CF6' : '#60DFFF',
      visible: Math.random() > 0.3
    }));
    
    setRetroPixels(pixels);
    
    // Create pulsing stars - with higher intensity
    const stars = Array.from({ length: 180 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 300}%`, // Triple height to cover more vertical space
      size: Math.random() * 10 + 5, // Larger size
      opacity: Math.random() * 0.7 + 0.6, // Higher base opacity
      pulseSpeed: Math.random() * 2500 + 1200 // Faster pulsing
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
    { src: "/lovable-uploads/ab5a9bf2-e537-49e1-af36-af9eeb17e827.png", alt: "Spaceship", top: "15%", left: "8%", size: "80px", animation: "float-rotate 20s infinite linear" },
    { src: "/lovable-uploads/9ed234f4-4ae1-42e9-b87f-9a035f88851f.png", alt: "Alien", top: "60%", right: "5%", size: "75px", animation: "float 12s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9b00b85f-d6b8-4835-98f2-59a85954f70c.png", alt: "Game character", bottom: "10%", left: "12%", size: "85px", animation: "bounce 5s infinite alternate ease-in-out" },
    // Adding more sprites with better positioning
    { src: "/lovable-uploads/ab5a9bf2-e537-49e1-af36-af9eeb17e827.png", alt: "Spaceship 2", top: "75%", left: "80%", size: "70px", animation: "float 15s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9ed234f4-4ae1-42e9-b87f-9a035f88851f.png", alt: "Alien 2", top: "25%", right: "15%", size: "65px", animation: "bounce 7s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9b00b85f-d6b8-4835-98f2-59a85954f70c.png", alt: "Game character 2", top: "40%", left: "25%", size: "60px", animation: "float-rotate 25s infinite reverse linear" },
    { src: "/lovable-uploads/ab5a9bf2-e537-49e1-af36-af9eeb17e827.png", alt: "Spaceship 3", bottom: "30%", right: "25%", size: "65px", animation: "bounce 10s infinite alternate ease-in-out" },
    // Add extra sprites for more coverage
    { src: "/lovable-uploads/9ed234f4-4ae1-42e9-b87f-9a035f88851f.png", alt: "Alien 3", top: "85%", left: "35%", size: "75px", animation: "float 17s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9b00b85f-d6b8-4835-98f2-59a85954f70c.png", alt: "Character 3", top: "120%", right: "40%", size: "80px", animation: "bounce 14s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/ab5a9bf2-e537-49e1-af36-af9eeb17e827.png", alt: "Spaceship 4", top: "150%", left: "60%", size: "70px", animation: "float-rotate 22s infinite reverse linear" },
    { src: "/lovable-uploads/9ed234f4-4ae1-42e9-b87f-9a035f88851f.png", alt: "Alien 4", top: "180%", right: "20%", size: "65px", animation: "float 19s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9b00b85f-d6b8-4835-98f2-59a85954f70c.png", alt: "Character 4", top: "200%", left: "15%", size: "85px", animation: "bounce 13s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/ab5a9bf2-e537-49e1-af36-af9eeb17e827.png", alt: "Spaceship 5", top: "230%", right: "30%", size: "75px", animation: "float-rotate 24s infinite linear" },
    { src: "/lovable-uploads/9ed234f4-4ae1-42e9-b87f-9a035f88851f.png", alt: "Alien 5", top: "260%", left: "50%", size: "70px", animation: "float 16s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9b00b85f-d6b8-4835-98f2-59a85954f70c.png", alt: "Character 5", top: "290%", right: "10%", size: "80px", animation: "bounce 11s infinite alternate ease-in-out" },
  ];

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0" style={{ zIndex: -5 }}>
      {/* Grid lines with more opacity */}
      <div className="absolute inset-0 grid-bg opacity-70" style={{ height: '300vh' }}></div>
      
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
            boxShadow: `0 0 ${pixel.size * 5}px ${pixel.size * 2.5}px ${pixel.color}`,
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
            boxShadow: `0 0 ${star.size * 8}px ${star.size * 4}px rgba(255, 255, 255, ${star.opacity})`,
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
            opacity: 0.95, // Increased from 0.85
            filter: 'brightness(2.2) contrast(1.6)', // Enhanced visibility
            animation: sprite.animation,
            zIndex: -2,
          }}
        />
      ))}
    </div>
  );
};

export default RetroBackground;
