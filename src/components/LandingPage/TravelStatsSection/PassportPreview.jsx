import travelStats from "./data";
import { WorldMapCard } from "./WorldMapCard";
import { FlightChart } from "./FlightChart";

export function PassportPreview() {
   const { title, subtitle } = travelStats.passport;

   return (
      <div className="bg-[#1c1f27] rounded-[2rem] p-5 shadow-elevated
         border border-gray-700/50 w-full">

         {/* Header text */}
         <div className="text-center pt-4 pb-5">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.15em]
               text-primary mb-2">
               {subtitle}
            </p>
            <h3 className="text-2xl font-bold text-white">
               {title}
            </h3>
         </div>

         {/* Globe / World Map */}
         <WorldMapCard />

         {/* Monthly Flight Chart */}
         <FlightChart />
      </div>
   );
}
