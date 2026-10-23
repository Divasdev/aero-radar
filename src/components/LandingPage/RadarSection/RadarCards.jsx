const stats = [
   { value: "14k+",  label: "Airports Tracked", color: "text-green-400" },
   { value: "100k",  label: "Daily Flights",     color: "text-blue-400" },
   { value: "99.9%", label: "Uptime",            color: "text-white" },
   { value: "<1s",   label: "Latency",           color: "text-amber-400" },
];

export function RadarCards() {
   return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto w-full">
         {stats.map((stat) => (
            <div
               key={stat.label}
               className="relative rounded-2xl border border-white/10
                  bg-white/5 backdrop-blur-sm px-6 py-5
                  flex flex-col items-center gap-2
                  hover:border-white/20 transition-colors"
            >
               <span className={`font-mono text-2xl font-bold tracking-wider ${stat.color}`}>
                  {stat.value}
               </span>
               <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                  {stat.label}
               </span>
            </div>
         ))}
      </div>
   )
}