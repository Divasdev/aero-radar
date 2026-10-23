import { GlobalReachBadge } from "./LiveGlobalReach";
import { RadarDescription } from "./RadarDescription";
import { RadarCards } from "./RadarCards";

// ── Abstract radar flight-path lines (SVG background) ─────────────────────
function RadarBackground() {
   return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
         <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 600"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
         >
            {/* Curved flight-path arcs */}
            <path
               d="M-50 300 Q200 50 500 200 T900 100"
               stroke="rgba(100,130,180,0.15)"
               strokeWidth="6"
               strokeLinecap="round"
            />
            <path
               d="M1250 350 Q900 600 600 400 T100 500"
               stroke="rgba(100,130,180,0.12)"
               strokeWidth="5"
               strokeLinecap="round"
            />
            <path
               d="M200 -50 Q400 300 700 250 T1100 400"
               stroke="rgba(100,130,180,0.18)"
               strokeWidth="7"
               strokeLinecap="round"
            />
            <path
               d="M1000 -30 Q800 200 500 150 T-50 350"
               stroke="rgba(100,130,180,0.10)"
               strokeWidth="4"
               strokeLinecap="round"
            />
            <path
               d="M300 600 Q500 300 800 350 T1250 200"
               stroke="rgba(100,130,180,0.14)"
               strokeWidth="6"
               strokeLinecap="round"
            />

            {/* Radar endpoint dots */}
            <circle cx="500" cy="200" r="4" fill="rgba(100,130,180,0.25)" />
            <circle cx="900" cy="100" r="3" fill="rgba(100,130,180,0.20)" />
            <circle cx="700" cy="250" r="5" fill="rgba(100,130,180,0.22)" />
            <circle cx="100" cy="500" r="3" fill="rgba(100,130,180,0.18)" />
            <circle cx="800" cy="350" r="4" fill="rgba(100,130,180,0.20)" />
            <circle cx="300" cy="150" r="3" fill="rgba(100,130,180,0.15)" />

            {/* Short fork/branch strokes at path endpoints */}
            <path
               d="M490 195 L470 175 M490 195 L510 180"
               stroke="rgba(100,130,180,0.20)"
               strokeWidth="4"
               strokeLinecap="round"
            />
            <path
               d="M895 105 L920 85 M895 105 L880 80"
               stroke="rgba(100,130,180,0.18)"
               strokeWidth="4"
               strokeLinecap="round"
            />
            <path
               d="M700 245 L680 225 M700 245 L720 220"
               stroke="rgba(100,130,180,0.20)"
               strokeWidth="5"
               strokeLinecap="round"
            />
            <path
               d="M105 495 L85 475 M105 495 L130 480"
               stroke="rgba(100,130,180,0.16)"
               strokeWidth="4"
               strokeLinecap="round"
            />
         </svg>
      </div>
   );
}

export function RadarSection() {
   return (
      <section className="relative bg-[#1a1d25] py-24 px-6 overflow-hidden">

         {/* Background flight-path lines */}
         <RadarBackground />

         {/* Content */}
         <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-10">
            <GlobalReachBadge />
            <RadarDescription />
            <RadarCards />
         </div>
      </section>
   )
}