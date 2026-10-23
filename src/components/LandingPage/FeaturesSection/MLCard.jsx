
export function MLCard() {
  return (
    <div
      className="shadow-card bg-white rounded-3xl p-8 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 items-center"
    >
      <div>
        <LiveBroadcastBadge />
        <MLDesc />
      </div>
      <LateBarChart />
    </div>
  );
}

export function LiveBroadcastBadge() {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
        border border-yellow-500/30 bg-yellow-500/10 text-xs font-mono font-extrabold
        uppercase tracking-widest text-yellow-400 mb-4"
    >
      ⚠️ MACHINE LEARNING
    </span>
  );
}

export function MLDesc() {
  return (
    <>
      <h2 className="font-extrabold text-2xl tracking-tight mt-3 mb-3">
        See why you're delayed.
      </h2>
      <p className="text-gray-500 text-sm leading-relaxed">
        Airlines often keep delay info hidden. We track inbound aircraft 25
        hours before your flight, so we can predict your departure time long
        before the airline notifies you.
      </p>
    </>
  );
}

export function LateBarChart() {
  return (
    <div className="bg-surface-container rounded-2xl p-5 relative overflow-hidden h-52">
      {/* Time labels */}
      <div className="flex justify-between text-gray-400 font-mono text-xs relative z-10">
        <span>08:00</span>
        <span>09:00</span>
        <span>10:00</span>
      </div>

      {/* Bars */}
      <div className="absolute bottom-12 left-6 right-6 flex items-end gap-3 z-10">
        {/* Green - On Time */}
        <div className="group relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-black text-white text-[10px] rounded-full px-3 py-1 whitespace-nowrap z-30 pointer-events-none">
            On Time
          </div>
          <div className="w-14 h-8 bg-green-200 border border-green-400 rounded-t-xl cursor-pointer transition-transform group-hover:scale-105 group-hover:-translate-y-1" />
        </div>

        {/* Orange - Delayed (tallest) */}
        <div className="group relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-black text-white text-[10px] rounded-full px-3 py-1 whitespace-nowrap z-30 pointer-events-none">
            Delayed
          </div>
          <div className="w-14 h-20 bg-orange-200 border border-orange-400 rounded-t-xl cursor-pointer transition-transform group-hover:scale-105 group-hover:-translate-y-1">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-green-600">80%</span>
          </div>
        </div>

        {/* Blue - Estimated */}
        <div className="group relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-black text-white text-[10px] rounded-full px-3 py-1 whitespace-nowrap z-30 pointer-events-none">
            Estimated
          </div>
          <div className="w-14 h-14 bg-blue-200 border border-blue-400 rounded-t-xl cursor-pointer transition-transform group-hover:scale-105 group-hover:-translate-y-1" />
        </div>
      </div>

      {/* Dashed prediction curve */}
      <svg
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        viewBox="0 0 280 210"
        fill="none"
      >
        <path
          d="M50 160 C90 160, 110 110, 140 100 S200 90, 245 120"
          stroke="#7DA9FF"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>

      {/* Baseline */}
      <div className="absolute bottom-12 left-5 right-5 h-px bg-gray-300 z-10" />

      {/* Legend */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        <span className="w-2 h-2 rounded-full bg-orange-500" />
        <span className="text-xs font-semibold text-gray-600">
          Late inbound aircraft
        </span>
      </div>
    </div>
  );
}