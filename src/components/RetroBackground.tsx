
import React from 'react';

const RetroBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Main bank vault metallic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#878789] to-[#D9D9DA] opacity-90"></div>
      
      {/* Silver vault pattern overlay */}
      <div className="absolute inset-0 vault-pattern opacity-30"></div>
      
      {/* Metal panel details - more prominent for vault look */}
      <div className="absolute inset-0 vault-panels opacity-50"></div>
      
      {/* Vault door circular details */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full border-[15px] border-[#858587] opacity-20"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[200px] h-[200px] rounded-full border-[10px] border-[#858587] opacity-15"></div>
      
      {/* Vault lock details */}
      <div className="absolute top-[15%] right-[20%] w-[150px] h-[150px] rounded-full border-[8px] border-[#F1F1F1] opacity-25">
        <div className="absolute inset-[20px] rounded-full border-[6px] border-[#858587]"></div>
        <div className="absolute inset-[40px] rounded-full border-[4px] border-[#F1F1F1]"></div>
      </div>
      
      {/* Light reflections on metal - brighter */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[200px] bg-white blur-[150px] opacity-40 rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[150px] bg-white blur-[120px] opacity-35 rounded-full"></div>
      
      {/* Dark shadows for deeper contrast */}
      <div className="absolute top-1/3 right-1/4 w-[250px] h-[150px] bg-black blur-[100px] opacity-20 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[200px] h-[120px] bg-black blur-[80px] opacity-15 rounded-full"></div>
    </div>
  );
};

export default RetroBackground;
