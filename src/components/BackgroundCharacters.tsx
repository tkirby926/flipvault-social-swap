
import React, { useEffect, useState } from 'react';

const BackgroundCharacters = () => {
  const characters = [
    { src: "/lovable-uploads/a7f20ec0-c2db-47d9-b8df-f214a2496e15.png", alt: "Hooded character with lantern" },
    { src: "/lovable-uploads/863f1386-a24b-46fd-8df1-bffbaf282f34.png", alt: "Cowboy character" },
    { src: "/lovable-uploads/7c9c6413-252b-46b9-a22d-ca59c72d4dc6.png", alt: "Robot character" },
    { src: "/lovable-uploads/9ed234f4-4ae1-42e9-b87f-9a035f88851f.png", alt: "Pirate octopus" },
    { src: "/lovable-uploads/9b00b85f-d6b8-4835-98f2-59a85954f70c.png", alt: "Raccoon character" }
  ];

  // Create fixed positions for characters alternating left and right
  const [characterPositions, setCharacterPositions] = useState<Array<{
    char: typeof characters[number],
    top: string,
    left: string,
    rotate: string,
    size: string
  }>>([]);

  useEffect(() => {
    const positions = characters.map((char, index) => ({
      char,
      // Alternate between left (10%) and right (75%) sides
      left: index % 2 === 0 ? '10%' : '75%',
      // Space characters vertically with 20% gaps
      top: `${15 + (index * 20)}%`,
      rotate: `rotate(${index % 2 === 0 ? -5 : 5}deg)`,
      size: '150px' // Fixed larger size for all characters
    }));
    setCharacterPositions(positions);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      {characterPositions.map((position, i) => (
        <img
          key={i}
          src={position.char.src}
          alt={position.char.alt}
          className="absolute transition-all duration-500"
          style={{
            top: position.top,
            left: position.left,
            transform: position.rotate,
            width: position.size,
            height: position.size,
            opacity: 0.15,
            filter: 'brightness(0.8) contrast(1.2) drop-shadow(0 0 5px rgba(255,255,255,0.2))',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundCharacters;
