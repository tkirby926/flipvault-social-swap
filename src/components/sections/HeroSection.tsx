
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <header className="w-full pt-24 pb-8 flex flex-col items-center relative z-[1] animate-slide-down-fade">
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-70" 
           style={{ backgroundImage: "url('/lovable-uploads/a7f20ec0-c2db-47d9-b8df-f214a2496e15.png')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <h1 className="text-[2.2rem] md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text drop-shadow text-center uppercase retro-title">
        Welcome to Flipvault
      </h1>
      <div className="mt-4 mb-3 text-xl md:text-2xl font-bold text-white text-center animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-[#0032cc] w-fit px-3">
        Peer-to-Peer Cross-Chain Barter Trading
      </div>
      <div className="max-w-2xl text-[14px] md:text-lg text-[#4DA6FF] text-center animate-fade-up font-pressstart bg-black/80 mt-2 px-3 py-2 rounded">
        Barter assets with friends and strangers across chains — just like old-school gaming, but powered by Web3
      </div>
      
      <div className="mt-6 animate-pop-in">
        <Button 
          size="lg" 
          className="text-base font-bold bg-[#0032cc] hover:bg-[#0032cc]/90 transition-all duration-300 group"
          onClick={() => window.location.href = "https://flipvault.io/nft-marketplace"}
        >
          Launch Platform 
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </header>
  );
};

export default HeroSection;
