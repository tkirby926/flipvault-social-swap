
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <header className="w-full pt-12 pb-8 flex flex-col items-center relative z-[1] animate-slide-down-fade">
      <div className="mb-6">
        <img 
          src="/lovable-uploads/5bc2bf9f-c272-4cfc-a600-bf338eb5c167.png" 
          alt="Flipvault Logo" 
          className="max-w-[80%] md:max-w-[500px] mx-auto h-auto" 
        />
      </div>
      <div className="mt-2 mb-3 text-xl md:text-2xl font-bold text-white text-center animate-typewriter sm:overflow-hidden sm:whitespace-nowrap sm:border-r-2 sm:border-[#0032cc] w-fit px-3 max-w-[90%]">
        Peer-to-Peer Cross-Chain Barter Trading
      </div>
      <div className="max-w-2xl text-[14px] md:text-lg text-white text-center animate-fade-up font-pressstart mt-2 px-3 py-2 rounded">
        Like old-school gaming but powered by Web3
      </div>
      
      <div className="mt-6 flex flex-col sm:flex-row gap-4 animate-pop-in">
        <Button 
          size="lg" 
          className="text-base font-bold bg-[#0032cc] hover:bg-[#0032cc]/90 transition-all duration-300 group"
          onClick={() => window.location.href = "https://flipvault.io/nft-marketplace"}
        >
          Enter the Vault 
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <Button 
          size="lg" 
          variant="outline" 
          className="text-base font-bold border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#0032cc] transition-all duration-300 group"
          onClick={() => window.open("https://flipvault.gitbook.io/flipvault?on=docs", "_blank")}
        >
          See our Docs
          <FileText className="ml-2 group-hover:scale-110 transition-transform" size={18} />
        </Button>
      </div>
    </header>
  );
};

export default HeroSection;
