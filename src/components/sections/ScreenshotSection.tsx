
import React from 'react';

const ScreenshotSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto mb-20 px-4 flex justify-center">
      <div className="w-full flex flex-col items-center">
        <div className="relative rounded-2xl shadow-2xl border-4 border-accent/80 bg-gradient-to-br from-[#1a1f2c] to-black p-4 sm:p-8 animate-fade-in w-full"
             style={{margin: "0 auto"}}
        >
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 scale-90 bg-accent px-8 py-1 rounded-full shadow text-center text-black font-extrabold text-xs border-2 border-white" style={{ zIndex: 3 }}>
            Trading Examples
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 w-full mt-4 sm:mt-0">
            {/* First Video - Live Trading */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <h3 className="text-center text-white mb-3 text-sm">Live Trading</h3>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg border-2 border-white shadow-xl"
                  src="https://www.youtube.com/embed/XCCzjHr22vk"
                  title="Live Trading"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{boxShadow: "0 0 20px #1eaedb"}}
                ></iframe>
              </div>
            </div>
            
            {/* Second Video - Offline Trading */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <h3 className="text-center text-white mb-3 text-sm">Offline Trading</h3>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg border-2 border-white shadow-xl"
                  src="https://www.youtube.com/embed/HoSSQ7tbUsk"
                  title="Offline Trading"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{boxShadow: "0 0 20px #1eaedb"}}
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="pt-4 text-xs text-gray-300 text-center italic font-pressstart opacity-70">
            Watch how FlipVault trading works both live and offline
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotSection;
