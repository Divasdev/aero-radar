import { useId } from 'react';
import { AirportIcon } from './AirportIcon';

export function AirfieldMap({ airport }) {
  const gridId = useId();
  return (
    <div className="airport-airfield">
      <div className="airport-map-heading"><span className="airport-mono">{airport.icao} / AIRFIELD</span><span className="airport-map-tag">Illustrated overview</span></div>
      <svg viewBox="0 0 620 350" role="img" aria-label={`Illustrative airfield diagram for the ${airport.code} airport preview; not a navigation map`} className="airport-airfield-svg">
        <defs><pattern id={gridId} width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#426584" strokeWidth=".5" opacity=".3" /></pattern></defs>
        <rect width="620" height="350" fill={`url(#${gridId})`} />
        <path d="M0 0h315l21 28-9 30 40 24 25 42-4 50 38 31 10 51-40 32-21 62H0Z" fill="#1c2b3b" stroke="#30465a" strokeWidth="1.2" />
        <path d="m0 258 61-5 38-30 25-60 66-18 32-61L197 0M0 278l71-6 45-39 25-55 64-17 36-77L217 0" stroke="#314458" strokeWidth="3" fill="none" />
        <path d="M128 235c-23-64 2-115 66-116 75-1 109 40 87 88s-67 62-88 37" stroke="#456079" strokeWidth="1.5" fill="none" />
        <path d="m209 129 63 23-12 41-60-12-24-28Z" fill="#2d445c" stroke="#6383a3" />
        <g fill="#36516b" stroke="#7193b6" strokeWidth="1.2"><path d="m178 132-40-28 8-12 41 29ZM203 119l-19-43 14-6 19 44ZM229 128l9-46 14 3-9 45ZM255 142l40-32 9 11-39 32Z" /></g>
        <g transform="rotate(-27 325 185)">
          <rect x="150" y="172" width="379" height="13" rx="2" fill="#50677c" stroke="#93aec8" /><rect x="150" y="204" width="379" height="13" rx="2" fill="#50677c" stroke="#93aec8" />
          <path d="M161 178h357M161 210h357" stroke="#d7e8f7" strokeWidth="1.3" strokeDasharray="9 7" />
          <g stroke="#b7d1e7"><path d="M155 173v11m5-11v11m359-11v11m5-11v11M155 205v11m5-11v11m359-11v11m5-11v11" /></g>
          <path d="M178 194h326m-314-8v18m76-18v18m109-18v18m115-18v18" stroke="#426b8f" strokeWidth="2" />
          <text x="476" y="165" fill="#8eacc5" fontSize="9" fontFamily="monospace">28R</text><text x="476" y="234" fill="#8eacc5" fontSize="9" fontFamily="monospace">28L</text>
        </g>
        {airport.runways > 2 && <g transform="rotate(54 297 180)"><rect x="164" y="160" width="263" height="10" rx="1" fill="#405b74" stroke="#789bb9" /><rect x="164" y="183" width="263" height="10" rx="1" fill="#405b74" stroke="#789bb9" /><path d="M171 165h249m-249 23h249" stroke="#b3ccdf" strokeDasharray="7 6" /></g>}
        <path d="M390 137 471 95 542 61" stroke="#3b99ff" strokeWidth="1.4" strokeDasharray="4 6" fill="none" />
        <circle cx="392" cy="136" r="23" fill="#2584f4" opacity=".08" /><circle cx="392" cy="136" r="12" fill="#2584f4" opacity=".13" />
        <g transform="translate(392 136) rotate(62)"><path d="m0-12 3 9 9 5v3L3 2v6l3 3v2l-6-2-6 2v-2l3-3V2l-9 3V2l9-5Z" fill="#80bdff" /></g>
        <g fontFamily="monospace" fontSize="9" fill="#a1b7cb"><text x="173" y="158">TERMINALS</text><text x="455" y="277" fill="#4b708d" letterSpacing="4">AIRSPACE</text></g>
        <g transform="translate(566 34)" stroke="#8aa7bf" fill="none"><path d="M0 28V0m-5 8 5-8 5 8" /><text x="-3" y="-8" fill="#8aa7bf" stroke="none" fontFamily="monospace" fontSize="10">N</text></g>
        <circle cx="195" cy="194" r="4" fill="#7cb7ff" /><circle cx="195" cy="194" r="9" fill="none" stroke="#7cb7ff" opacity=".5" />
      </svg>
      <div className="airport-map-bottom"><span><span className="airport-dot" /> Airfield perspective</span><span className="airport-mono">{airport.coordinates}</span></div>
      <div className="airport-map-location"><AirportIcon name="pin" size={14} /> {airport.city}</div>
    </div>
  );
}
