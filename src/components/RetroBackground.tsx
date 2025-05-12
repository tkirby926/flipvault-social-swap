
import React from 'react';

const RetroBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Main bank vault metallic background - Enhanced contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#FFFFFF] opacity-90"></div>
      
      {/* Silver vault pattern overlay - More prominent */}
      <div className="absolute inset-0 vault-pattern opacity-50"></div>
      
      {/* Metal panel details - Even more pronounced for vault look */}
      <div className="absolute inset-0 vault-panels opacity-75"></div>
      
      {/* Vault door circular details with spinning dots */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full border-[20px] border-[#222222] opacity-40">
        <div className="spinning-dot spinning-dot-slow"></div>
      </div>
      
      <div className="absolute bottom-1/3 right-1/4 w-[200px] h-[200px] rounded-full border-[14px] border-[#222222] opacity-35">
        <div className="spinning-dot spinning-dot-medium"></div>
      </div>
      
      {/* Vault lock details - More defined */}
      <div className="absolute top-[15%] right-[20%] w-[150px] h-[150px] rounded-full border-[12px] border-[#FFFFFF] opacity-40">
        <div className="absolute inset-[20px] rounded-full border-[8px] border-[#222222]"></div>
        <div className="absolute inset-[40px] rounded-full border-[6px] border-[#FFFFFF]"></div>
        <div className="spinning-dot spinning-dot-fast"></div>
      </div>
      
      {/* Light reflections on metal - Even brighter */}
      <div className="absolute top-0 left-1/3 w-[450px] h-[250px] bg-white blur-[170px] opacity-80 rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-[350px] h-[200px] bg-white blur-[150px] opacity-70 rounded-full"></div>
      
      {/* Dark shadows for deeper contrast - Even darker */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[180px] bg-black blur-[120px] opacity-55 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[150px] bg-black blur-[100px] opacity-50 rounded-full"></div>
    </div>
  );
};

export default RetroBackground;
