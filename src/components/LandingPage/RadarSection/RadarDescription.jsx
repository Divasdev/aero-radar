export function RadarDescription() {
   return (
      <div className="text-center max-w-2xl mx-auto">
         <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Worldwide Radar Coverage.
         </h2>
         <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Tracking over{" "}
            <span className="text-green-400 font-semibold underline underline-offset-4
               decoration-green-400/40">5,000+</span>{" "}
            airports globally with sub-second latency. If a
            <br className="hidden md:block" />
            plane is in the sky, we know about it.
         </p>
      </div>
   )
}
