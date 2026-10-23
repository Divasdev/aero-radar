import travelStats from "./data";

export function FlightChart() {
   const { monthlyFlights, months } = travelStats.passport;
   const maxVal = Math.max(...monthlyFlights);
   const maxBarHeight = 120; // max bar height in pixels

   return (
      <div className="bg-[#0d0f14] rounded-2xl p-6 mt-4">
         {/* Bars */}
         <div className="flex items-end justify-between gap-4 px-3 mb-4"
            style={{ height: `${maxBarHeight + 16}px` }}>
            {monthlyFlights.map((val, i) => {
               const barHeight = Math.max((val / maxVal) * maxBarHeight, 16);
               const isLast = i === monthlyFlights.length - 1;

               return (
                  <div
                     key={i}
                     className={`flex-1 rounded-lg ${
                        isLast ? "bg-gray-600" : "bg-primary"
                     }`}
                     style={{ height: `${barHeight}px` }}
                  />
               );
            })}
         </div>

         {/* Month Labels */}
         <div className="flex justify-between px-3">
            {months.map((m, i) => (
               <span
                  key={i}
                  className="flex-1 text-center font-mono text-xs text-gray-500 uppercase"
               >
                  {m}
               </span>
            ))}
         </div>
      </div>
   );
}
