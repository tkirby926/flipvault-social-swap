
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
    // Create blinking pixels with more subtle effect to complement the background
    const pixels = Array.from({ length: 180 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 300}%`, // Triple height to cover more vertical space
      size: Math.random() * 4 + 2, // Smaller size for subtle effect
      blinkSpeed: Math.random() * 2000 + 500,
      color: Math.random() > 0.6 ? '#555555' : Math.random() > 0.4 ? '#888888' : '#AAAAAA',
      visible: Math.random() > 0.3
    }));
    
    setRetroPixels(pixels);
    
    // Create pulsing stars with subtle effect
    const stars = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 300}%`, // Triple height to cover more vertical space
      size: Math.random() * 7 + 3,
      opacity: Math.random() * 0.5 + 0.3, // Lower opacity for subtle effect
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

  // Create retro game sprites with subtle appearance
  const retroSprites = [
    { src: "/lovable-uploads/ab5a9bf2-e537-49e1-af36-af9eeb17e827.png", alt: "Spaceship", top: "15%", left: "8%", size: "60px", animation: "float-rotate 20s infinite linear" },
    { src: "/lovable-uploads/9ed234f4-4ae1-42e9-b87f-9a035f88851f.png", alt: "Alien", top: "60%", right: "5%", size: "55px", animation: "float 12s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9b00b85f-d6b8-4835-98f2-59a85954f70c.png", alt: "Game character", bottom: "10%", left: "12%", size: "65px", animation: "bounce 5s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/ab5a9bf2-e537-49e1-af36-af9eeb17e827.png", alt: "Spaceship 2", top: "75%", left: "80%", size: "50px", animation: "float 15s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9ed234f4-4ae1-42e9-b87f-9a035f88851f.png", alt: "Alien 2", top: "25%", right: "15%", size: "45px", animation: "bounce 7s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9b00b85f-d6b8-4835-98f2-59a85954f70c.png", alt: "Game character 2", top: "40%", left: "25%", size: "55px", animation: "float-rotate 25s infinite reverse linear" },
    { src: "/lovable-uploads/ab5a9bf2-e537-49e1-af36-af9eeb17e827.png", alt: "Spaceship 3", bottom: "30%", right: "25%", size: "55px", animation: "bounce 10s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9ed234f4-4ae1-42e9-b87f-9a035f88851f.png", alt: "Alien 3", top: "85%", left: "35%", size: "60px", animation: "float 17s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9b00b85f-d6b8-4835-98f2-59a85954f70c.png", alt: "Character 3", top: "120%", right: "40%", size: "65px", animation: "bounce 14s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/ab5a9bf2-e537-49e1-af36-af9eeb17e827.png", alt: "Spaceship 4", top: "150%", left: "60%", size: "50px", animation: "float-rotate 22s infinite reverse linear" },
    { src: "/lovable-uploads/9ed234f4-4ae1-42e9-b87f-9a035f88851f.png", alt: "Alien 4", top: "180%", right: "20%", size: "55px", animation: "float 19s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9b00b85f-d6b8-4835-98f2-59a85954f70c.png", alt: "Character 4", top: "200%", left: "15%", size: "65px", animation: "bounce 13s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/ab5a9bf2-e537-49e1-af36-af9eeb17e827.png", alt: "Spaceship 5", top: "230%", right: "30%", size: "55px", animation: "float-rotate 24s infinite linear" },
    { src: "/lovable-uploads/9ed234f4-4ae1-42e9-b87f-9a035f88851f.png", alt: "Alien 5", top: "260%", left: "50%", size: "50px", animation: "float 16s infinite alternate ease-in-out" },
    { src: "/lovable-uploads/9b00b85f-d6b8-4835-98f2-59a85954f70c.png", alt: "Character 5", top: "290%", right: "10%", size: "60px", animation: "bounce 11s infinite alternate ease-in-out" },
  ];

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0" style={{ zIndex: -5 }}>
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
            opacity: pixel.visible ? 0.6 : 0,
            boxShadow: `0 0 ${pixel.size * 2}px ${pixel.size}px ${pixel.color}`,
            transition: "opacity 0.3s ease-in-out",
            zIndex: -4,
          }}
        />
      ))}
      
      {/* Subtle pulsing stars */}
      {retroStars.map(star => (
        <div 
          key={star.id} 
          className="absolute rounded-full"
          style={{
            top: star.y,
            left: star.x,
            width: `${star.size}px`, 
            height: `${star.size}px`,
            backgroundColor: '#CCCCCC',
            boxShadow: `0 0 ${star.size * 3}px ${star.size * 1.5}px rgba(200, 200, 200, ${star.opacity})`,
            animation: `pulse ${star.pulseSpeed}ms infinite alternate ease-in-out`,
            zIndex: -3,
          }}
        />
      ))}
      
      {/* Retro sprites with subtle appearance */}
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
            opacity: 0.5, // Reduced opacity to be more subtle against new background
            filter: 'brightness(1.5) contrast(1.2)', 
            animation: sprite.animation,
            zIndex: -2,
          }}
        />
      ))}
    </div>
  );
};

export default RetroBackground;
