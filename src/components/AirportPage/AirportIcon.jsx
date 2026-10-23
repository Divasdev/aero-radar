const paths = {
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" /></>,
  arrow: <><path d="M5 12h14m-5-5 5 5-5 5" /></>,
  northeast: <><path d="M6 18 18 6M6 6h12v12" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  plane: <path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13" />,
  departures: <><path d="M3 20h18M3 10l4 4 13-5c2-1 1-3-1-2l-5 2-5-5-2 1 3 5-4 2-2-3-1 1Z" /></>,
  arrivals: <><path d="M3 20h18M3 5l1 5 15 5c2 .5 3-2 1-3l-5-2-1-6-2-1-1 6-5-1-2-4-1 1Z" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
  star: <path d="m12 3 2.8 5.7 6.3.9-4.6 4.4 1.1 6.3-5.6-3-5.6 3 1.1-6.3L3 9.6l6.2-.9L12 3Z" />,
  wind: <><path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h5a3 3 0 1 1-3 3" /></>,
  eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
  drop: <path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z" />,
  terminal: <><path d="M4 21V5h11v16M15 10h5v11M1 21h22M8 9h3m-3 4h3m-3 4h3" /></>,
  wifi: <><path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-11 4a6 6 0 0 1 8 0" /><circle cx="12" cy="20" r=".5" /></>,
  coffee: <><path d="M4 9h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Zm12 1h2a3 3 0 0 1 0 6h-2M7 2v3m5-3v3M2 23h18" /></>,
  train: <><rect x="5" y="2" width="14" height="16" rx="4" /><path d="M5 10h14M9 18l-3 4m9-4 3 4M9 6h6" /><circle cx="9" cy="14" r=".5" /><circle cx="15" cy="14" r=".5" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 5 7 7-7 7" />,
};

export function AirportIcon({ name, size = 20, className = '', ...props }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>{paths[name] || paths.plane}</svg>;
}

export function WeatherIcon() {
  return <svg viewBox="0 0 120 100" fill="none" aria-hidden="true" className="airport-weather-art"><g stroke="#e9b866" strokeWidth="2.5" strokeLinecap="round"><circle cx="77" cy="34" r="18" fill="#ffe7b6" /><path d="M77 7V2m0 64v-5M50 34h-5m64 0h-5M58 15l-4-4m46 46-4-4m0-38 4-4" /></g><path d="M30 78a19 19 0 0 1-2-38 26 26 0 0 1 48 2 18 18 0 1 1 10 36H30Z" fill="white" stroke="#dce9fc" strokeWidth="2" /><path d="M27 87h41m9 0h8" stroke="#b4cff4" strokeWidth="2" strokeLinecap="round" /></svg>;
}
