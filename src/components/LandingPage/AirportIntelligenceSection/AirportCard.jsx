// ── Weather Icons (inline SVG to avoid extra asset files) ──────────────────
function SunIcon() {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round"
         strokeLinejoin="round" className="size-5">
         <circle cx="12" cy="12" r="4" />
         <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
   )
}

function CloudSunIcon() {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round"
         strokeLinejoin="round" className="size-5">
         <path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M19.07 4.93l-1.41 1.41M15.95 5.63A5 5 0 0 0 8 10" />
         <path d="M6 20a4 4 0 0 1-.88-7.9A5.5 5.5 0 0 1 16.78 14 3 3 0 0 1 18 20H6z" />
      </svg>
   )
}

function CloudRainIcon() {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round"
         strokeLinejoin="round" className="size-5">
         <path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2 8.5" />
         <path d="M16 14v6M8 14v6M12 16v6" />
      </svg>
   )
}


// ── Status color mapping ──────────────────────────────────────────────────
const statusStyles = {
   delay: "text-red-400",
   normal: "text-green-400",
   minor: "text-amber-400",
};

const trendStyles = {
   worsening: { color: "text-red-400", icon: "↘", label: "Worsening" },
   improving: { color: "text-green-400", icon: "↗", label: "Improving" },
   stable: { color: "text-gray-400", icon: "→", label: "Stable" },
};

const weatherIcons = {
   cloudy: <CloudSunIcon />,
   sunny: <SunIcon />,
   rain: <CloudRainIcon />,
};


// ── Airport Data ──────────────────────────────────────────────────────────
const airports = [
   {
      code: "SFO",
      name: "San Francisco Int'l",
      weatherIcon: "cloudy",
      weatherIconColor: "text-amber-400",
      status: "GROUND DELAY (45m)",
      statusType: "delay",
      weather: "54°F • VIS 1SM",
      trend: "worsening",
   },
   {
      code: "LHR",
      name: "London Heathrow",
      weatherIcon: "sunny",
      weatherIconColor: "text-green-400",
      status: "NORMAL OPS",
      statusType: "normal",
      weather: "62°F • Wind 12kt",
      trend: "improving",
   },
   {
      code: "HND",
      name: "Tokyo Haneda",
      weatherIcon: "rain",
      weatherIconColor: "text-blue-400",
      status: "MINOR DELAYS (15m)",
      statusType: "minor",
      weather: "70°F • Rain",
      trend: "stable",
   },
];


// ── Card Component ────────────────────────────────────────────────────────
export function AirportCard({ airport }) {
   const trend = trendStyles[airport.trend];

   return (
      <div className="bg-gray-900/80 rounded-2xl p-6 border border-gray-700/50
         flex flex-col gap-5 min-w-[280px] flex-1">

         {/* Header: Code + Weather Icon */}
         <div className="flex items-start justify-between">
            <div>
               <h3 className="font-mono text-3xl font-bold text-white tracking-wider">
                  {airport.code}
               </h3>
               <p className="text-sm text-gray-400 mt-0.5">{airport.name}</p>
            </div>
            <span className={`mt-1 ${airport.weatherIconColor}`}>
               {weatherIcons[airport.weatherIcon]}
            </span>
         </div>

         {/* Data Rows */}
         <div className="flex flex-col gap-3 text-sm">
            {/* Status */}
            <div className="flex items-center justify-between">
               <span className="text-gray-500">Status</span>
               <span className={`font-mono font-bold text-xs tracking-wider ${statusStyles[airport.statusType]}`}>
                  {airport.status}
               </span>
            </div>

            {/* Weather */}
            <div className="flex items-center justify-between">
               <span className="text-gray-500">Weather</span>
               <span className="font-mono text-xs text-gray-300 tracking-wide">
                  {airport.weather}
               </span>
            </div>

            {/* Trend */}
            <div className="flex items-center justify-between">
               <span className="text-gray-500">Trend</span>
               <span className={`font-mono text-xs italic ${trend.color}`}>
                  {trend.icon} {trend.label}
               </span>
            </div>
         </div>
      </div>
   )
}


// ── Cards Grid ────────────────────────────────────────────────────────────
export function AirportCardsGrid() {
   return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
         {airports.map((airport) => (
            <AirportCard key={airport.code} airport={airport} />
         ))}
      </div>
   )
}
