
import React from 'react';

const BackgroundCharacters = () => {
  const characters = [
    { src: "/lovable-uploads/a7f20ec0-c2db-47d9-b8df-f214a2496e15.png", alt: "Hooded character with lantern" },
    { src: "/lovable-uploads/863f1386-a24b-46fd-8df1-bffbaf282f34.png", alt: "Cowboy character" },
    { src: "/lovable-uploads/7c9c6413-252b-46b9-a22d-ca59c72d4dc6.png", alt: "Robot character" },
    { src: "/lovable-uploads/9ed234f4-4ae1-42e9-b87f-9a035f88851f.png", alt: "Pirate octopus" },
    { src: "/lovable-uploads/9b00b85f-d6b8-4835-98f2-59a85954f70c.png", alt: "Raccoon character" }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      {characters.map((char, i) => (
        <img
          key={i}
          src={char.src}
          alt={char.alt}
          className="absolute opacity-10 w-16 h-16 object-contain"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundCharacters;
