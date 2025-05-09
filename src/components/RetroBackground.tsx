
import React from 'react';

const RetroBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Bank vault themed background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] opacity-90" style={{ height: '300vh' }}></div>
      
      {/* Vault door pattern overlay */}
      <div className="absolute inset-0 vault-pattern opacity-20"></div>
      
      {/* Metal panel lines */}
      <div className="absolute inset-0 vault-panels opacity-30"></div>
      
      {/* Subtle vault light effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[200px] bg-[#0032cc] blur-[100px] opacity-20 rounded-full"></div>
      
      {/* Bottom light effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[200px] bg-[#0032cc] blur-[120px] opacity-15 rounded-full"></div>
    </div>
  );
};

export default RetroBackground;
