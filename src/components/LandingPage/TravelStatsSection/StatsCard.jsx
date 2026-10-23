import travelStats from "./data";

export function StatsCard({ stat }) {
   const isFeatured = stat.label === "Total Distance";

   if (isFeatured) {
      return (
         <div className="bg-surface-container rounded-2xl p-6">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.1em]
               text-on-surface-variant mb-2">
               {stat.label}
            </p>
            <div className="flex items-baseline gap-3">
               <span className="font-mono text-5xl font-bold text-primary tracking-tight">
                  {stat.value}
               </span>
               <span className="text-on-surface-variant text-lg">
                  {stat.unit}
               </span>
            </div>
         </div>
      );
   }

   return (
      <div className="bg-surface-container rounded-2xl p-5">
         <p className="font-mono text-xl font-bold text-charcoal">
            {stat.value}
         </p>
         <p className="text-xs text-on-surface-variant mt-1">
            {stat.label}
         </p>
      </div>
   );
}

export function StatsGrid() {
   const stats = travelStats.stats;
   const featured = stats[0];
   const small = stats.slice(1, 3);
   const wide = stats[3];

   return (
      <div className="flex flex-col gap-3">
         {/* Featured: Total Distance (full width) */}
         <StatsCard stat={featured} />

         {/* Two small cards side by side */}
         <div className="grid grid-cols-2 gap-3">
            {small.map((s) => (
               <StatsCard key={s.id} stat={s} />
            ))}
         </div>

         {/* Wide card: In The Air */}
         <StatsCard stat={wide} />
      </div>
   );
}