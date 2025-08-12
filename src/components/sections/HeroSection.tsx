
import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const textToType = "Peer-to-Peer Cross-Chain Barter Trading";
  const typingSpeed = 80; // milliseconds per character
  const textContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypedText(textToType.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setIsTypingComplete(true);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="w-full pt-12 pb-8 flex flex-col items-center relative z-[1] animate-slide-down-fade">
      <div className="mb-6">
        <img 
          src="/lovable-uploads/5bc2bf9f-c272-4cfc-a600-bf338eb5c167.png" 
          alt="Flipvault Logo" 
          className="max-w-[80%] md:max-w-[500px] mx-auto h-auto" 
        />
      </div>
      <div 
        ref={textContainerRef}
        className={`mt-2 mb-3 text-xl md:text-2xl font-bold text-white text-center w-fit px-3 max-w-[90%] mx-auto relative ${isTypingComplete ? 'after:animate-blink' : ''}`}
        style={{ 
          minHeight: isMobile ? '3.5rem' : '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span>{typedText}</span>
        {isTypingComplete && <span className="border-r-2 border-[#0032cc] ml-1 h-[1.2em] inline-block animate-cursor-blink"></span>}
      </div>
      <div className="max-w-2xl text-[14px] md:text-lg text-white text-center animate-fade-up font-pressstart mt-2 px-3 py-2 rounded">
        Like old-school gaming but powered by Web3
      </div>
      
      <div className="mt-6 flex flex-col sm:flex-row gap-4 animate-pop-in">
        <Button 
          size="lg" 
          className="text-base font-bold bg-[#0032cc] hover:bg-[#0032cc]/90 transition-all duration-300 group"
          onClick={() => window.location.href = "https://app.flipvault.io/nft-marketplace"}
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
