import globeImg from "../../../assets/globe.webp";

export function WorldMapCard() {
   return (
      <div className="relative bg-[#0d0f14] rounded-2xl overflow-hidden">
         {/* Globe Image */}
         <div className="flex items-center justify-center py-6">
            <div className="relative">
               <img
                  src={globeImg}
                  alt="World map showing flight coverage"
                  className="w-52 h-52 object-cover rounded-full"
               />
               {/* Blue pin overlay in center */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="size-10 rounded-full bg-primary/80 backdrop-blur-sm
                     flex items-center justify-center border-2 border-primary">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="white" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="size-5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                     </svg>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
