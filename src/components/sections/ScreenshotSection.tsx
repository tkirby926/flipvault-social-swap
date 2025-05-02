
import React from 'react';

const ScreenshotSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto mb-20 px-4 flex justify-center">
      <div className="w-full flex flex-col items-center">
        <div className="relative rounded-2xl shadow-2xl border-4 border-accent/80 bg-gradient-to-br from-[#1a1f2c] to-black p-4 sm:p-8 animate-fade-in"
             style={{maxWidth: 700, margin: "0 auto"}}
        >
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 scale-90 bg-accent px-8 py-1 rounded-full shadow text-center text-black font-extrabold text-xs border-2 border-white" style={{ zIndex: 3 }}>
            In-app Trading Example
          </div>
          <img
            src="/lovable-uploads/dbe9b3bb-f34d-4323-b66f-89b60f28d39f.png"
            alt="Flipvault instructional in-app screenshot"
            className="rounded-lg border-2 border-white shadow-xl transition-transform duration-300 hover:scale-105"
            style={{boxShadow: "0 0 24px #1eaedb, 0 2px 44px #8B5CF6"}}
          />
          <div className="pt-4 text-xs text-gray-300 text-center italic font-pressstart opacity-70">
            This is what a live trade looks like in FlipVault — manage assets, chat, and swap instantly.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotSection;
