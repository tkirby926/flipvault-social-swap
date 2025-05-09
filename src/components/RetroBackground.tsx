
import React from 'react';

const RetroBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Main bank vault metallic background - Even higher contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#222222] to-[#FFFFFF] opacity-90"></div>
      
      {/* Silver vault pattern overlay - More prominent */}
      <div className="absolute inset-0 vault-pattern opacity-40"></div>
      
      {/* Metal panel details - Even more pronounced for vault look */}
      <div className="absolute inset-0 vault-panels opacity-70"></div>
      
      {/* Vault door circular details - Enhanced */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full border-[18px] border-[#333333] opacity-30"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[200px] h-[200px] rounded-full border-[12px] border-[#333333] opacity-25"></div>
      
      {/* Vault lock details - More defined */}
      <div className="absolute top-[15%] right-[20%] w-[150px] h-[150px] rounded-full border-[10px] border-[#FFFFFF] opacity-35">
        <div className="absolute inset-[20px] rounded-full border-[7px] border-[#333333]"></div>
        <div className="absolute inset-[40px] rounded-full border-[5px] border-[#FFFFFF]"></div>
      </div>
      
      {/* Light reflections on metal - Even brighter */}
      <div className="absolute top-0 left-1/3 w-[450px] h-[250px] bg-white blur-[170px] opacity-70 rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-[350px] h-[200px] bg-white blur-[150px] opacity-60 rounded-full"></div>
      
      {/* Dark shadows for deeper contrast - Even darker */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[180px] bg-black blur-[120px] opacity-45 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[150px] bg-black blur-[100px] opacity-40 rounded-full"></div>
    </div>
  );
};

export default RetroBackground;
