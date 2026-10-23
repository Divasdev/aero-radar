import React from "react";

export function HeroCard() {
  return (
    <div className="relative w-full max-w-[340px] mx-auto mt-8">
      
      {/* Main Card Container */}
      <div className="bg-white rounded-[2rem] shadow-2xl relative z-10 flex flex-col font-sans">
        
        {/* Top Blue Section */}
        <div className="bg-[#0070EB] rounded-t-[2rem] pt-8 pb-6 px-6 text-white relative">
          
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-bold tracking-widest text-blue-200 uppercase">SFO</span>
            <span className="text-[10px] font-bold tracking-widest text-blue-200 uppercase">JFK</span>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h3 className="text-4xl font-extrabold tracking-tight">10:45</h3>
            
            <div className="flex flex-col items-center justify-center px-4 opacity-80">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 transform rotate-45 mb-1">
                 <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
               </svg>
               <div className="flex flex-col gap-[2px]">
                 <div className="w-6 h-[2px] bg-white rounded-full"></div>
                 <div className="w-6 h-[2px] bg-white rounded-full"></div>
               </div>
            </div>

            <h3 className="text-4xl font-extrabold tracking-tight">19:20</h3>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Bottom White Section */}
        <div className="bg-white rounded-b-[2rem] p-6 pb-8">
          
          {/* Gate Row */}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 text-gray-400 flex-shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 3v18" />
               </svg>
            </div>
            <div className="flex-1 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700">Gate</span>
              <div className="flex items-center gap-2">
                <span className="text-orange-500 font-bold tracking-wide">B12</span>
                <span className="text-xs text-gray-400 font-medium">(Changed)</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-100 my-4"></div>

          {/* Baggage Row */}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 text-gray-400 flex-shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
               </svg>
            </div>
            <div className="flex-1 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700">Baggage Claim</span>
              <span className="text-sm font-mono font-bold tracking-tight text-gray-900">Carousel 4</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
