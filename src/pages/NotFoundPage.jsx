import { Link, useLocation } from 'react-router-dom';
import { NavBar } from '../components/NavBar/NavBar';
import { Footer } from '../components/Footer/Footer';
import './NotFoundPage.css';

const otherRoutes = [
   { to: '/airport', label: 'Airport' },
   { to: '/flight', label: 'Flight' },
   { to: '/analytics', label: 'Analytics' },
];

// Radar coordinates use a 400×400 grid with the center at (200, 200).
const TICKS = Array.from({ length: 72 }, (_, i) => {
   const angle = (i * 5 * Math.PI) / 180;
   const major = i % 6 === 0;
   const inner = major ? 176 : 183;
   return {
      major,
      x1: (200 + Math.cos(angle) * inner).toFixed(2),
      y1: (200 + Math.sin(angle) * inner).toFixed(2),
      x2: (200 + Math.cos(angle) * 190).toFixed(2),
      y2: (200 + Math.sin(angle) * 190).toFixed(2),
   };
});

const BLIPS = [
   { left: '23.75%', top: '33.75%', delay: '0s' },
   { left: '82.5%', top: '62.5%', delay: '0.7s' },
   { left: '65.5%', top: '79.5%', delay: '1.3s' },
   { left: '28%', top: '74%', delay: '1.9s' },
];

export function NotFoundPage() {
   const { pathname } = useLocation();

   return (
      <div className="flow-root min-h-screen bg-[radial-gradient(ellipse_70%_580px_at_85%_0%,#edf4ff_0%,transparent_75%)]">
         <title>Flight not found · AeroRadar</title>
         <NavBar />

         <main className="mx-auto grid max-w-6xl items-center gap-14 overflow-x-clip px-6 pt-14 pb-24 min-[900px]:grid-cols-[1.05fr_1fr] min-[900px]:gap-16 min-[900px]:pt-24">
            <section className="nf-rise">
               <p className="inline-flex items-center gap-2.5 font-mono text-[11px] font-bold tracking-[0.16em] text-primary uppercase">
                  <span className="relative flex size-2">
                     <span className="absolute inline-flex size-full rounded-full bg-warning opacity-70 animate-ping motion-reduce:animate-none" />
                     <span className="relative inline-flex size-2 rounded-full bg-warning" />
                  </span>
                  Error 404 · Route not found
               </p>

               <h1 className="mt-5 text-[clamp(38px,4.6vw,56px)] leading-[1.06] font-bold tracking-[-0.045em] text-balance text-charcoal">
                  This flight doesn’t exist.
                  <span className="block text-[#7c8798]">Let’s get you back on course.</span>
               </h1>

               <p className="mt-6 max-w-md text-base leading-relaxed text-[#737c8a]">
                  We scanned every route on our radar and couldn’t find this page.
                  It may have been moved, renamed, or never scheduled at all.
               </p>

               <Link
                  to="/"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(0,122,255,0.7)] transition hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
               >
                  <ArrowLeftIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
                  Back to home
               </Link>

               <div className="mt-8 flex flex-wrap items-center gap-2">
                  <span className="mr-1 font-mono text-[11px] tracking-[0.12em] text-[#8d96a4]">OR TRY</span>
                  {otherRoutes.map(({ to, label }) => (
                     <Link
                        key={to}
                        to={to}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#e1e6ee] bg-white/60 px-2.5 py-1.5 font-mono text-xs text-[#6d7888] transition-colors hover:border-[#c8defe] hover:bg-[#edf5ff] hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                     >
                        {label}
                        <ArrowUpRightIcon className="size-3" />
                     </Link>
                  ))}
               </div>
            </section>

            <div className="nf-rise relative isolate" style={{ animationDelay: '120ms' }}>
               {/* Faint dot grid that fades out around the radar */}
               <div
                  className="pointer-events-none absolute -inset-8 -z-10 bg-[radial-gradient(#c9d7ec_1px,transparent_1px)] bg-size-[18px_18px] mask-[radial-gradient(closest-side,black,transparent)]"
                  aria-hidden="true"
               />
               <div className="mx-auto max-w-120">
                  <RadarScope />
                  <FlightStrip path={pathname} />
               </div>
            </div>
         </main>

         <Footer />
      </div>
   );
}

function RadarScope() {
   return (
      <div
         className="@container relative aspect-square w-full overflow-hidden rounded-[28px] bg-[#0e1b2c] shadow-[0_40px_80px_-32px_rgba(14,27,44,0.6)]"
         aria-hidden="true"
      >
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.22),transparent_65%)]" />

         <svg viewBox="0 0 400 400" className="absolute inset-0 size-full" fill="none">
            {[60, 110, 160].map(r => (
               <circle key={r} cx="200" cy="200" r={r} stroke="#94b8e6" strokeOpacity="0.12" />
            ))}
            <circle cx="200" cy="200" r="190" stroke="#94b8e6" strokeOpacity="0.22" />
            <path d="M200 10V390M10 200H390" stroke="#94b8e6" strokeOpacity="0.08" />
            {TICKS.map((t, i) => (
               <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="#94b8e6" strokeOpacity={t.major ? 0.4 : 0.16} />
            ))}

            {/* Holding pattern the plane circles */}
            <circle cx="200" cy="200" r="96" stroke="#fff" strokeOpacity="0.14" strokeDasharray="2 6" />

            {/* The flight we lost */}
            <g className="nf-blink" stroke="#FF9F0A" strokeLinecap="round">
               <circle cx="312" cy="90" r="11" strokeDasharray="3 4" />
               <path d="M296 80V74H302M322 74H328V80M328 100V106H322M302 106H296V100" />
            </g>
         </svg>

         {/* Rotating sweep beam */}
         <div className="nf-sweep absolute inset-[2.5%] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(77,163,255,0.42)_360deg)]">
            <div className="absolute top-0 left-1/2 h-1/2 w-0.5 -translate-x-1/2 bg-linear-to-t from-[#8ccaff] to-[#8ccaff]/30" />
         </div>

         {BLIPS.map(b => (
            <span key={b.left} className="absolute size-1.5 -translate-x-1/2 -translate-y-1/2" style={{ left: b.left, top: b.top }}>
               <span
                  className="absolute inset-0 rounded-full bg-[#6fb3ff] animate-ping motion-reduce:animate-none"
                  style={{ animationDuration: '2.6s', animationDelay: b.delay }}
               />
               <span className="absolute inset-0 rounded-full bg-[#6fb3ff] shadow-[0_0_10px_2px_rgba(111,179,255,0.6)]" />
            </span>
         ))}

         <div className="absolute top-[27.5%] left-[78%] -translate-x-1/2 text-center font-mono text-[max(9px,2.3cqw)] leading-tight tracking-[0.12em]">
            <p className="font-bold text-warning">AR404</p>
            <p className="text-[#8aa3bd]">LOST</p>
         </div>

         {/* Plane in a holding pattern, with a fading trail */}
         <div className="nf-orbit absolute inset-[26%]">
            <svg viewBox="0 0 100 100" className="absolute inset-0 size-full overflow-visible" fill="none">
               <defs>
                  <linearGradient id="nf-trail" x1="0" y1="50" x2="50" y2="0" gradientUnits="userSpaceOnUse">
                     <stop stopColor="#8ccaff" stopOpacity="0" />
                     <stop offset="1" stopColor="#8ccaff" stopOpacity="0.9" />
                  </linearGradient>
               </defs>
               <circle
                  cx="50" cy="50" r="50"
                  stroke="url(#nf-trail)" strokeWidth="1.5" strokeLinecap="round"
                  pathLength="360" strokeDasharray="75 285" strokeDashoffset="-195"
               />
            </svg>
            <svg
               viewBox="0 0 24 24"
               fill="currentColor"
               className="absolute top-0 left-1/2 size-[7cqw] -translate-x-1/2 -translate-y-1/2 rotate-90 text-white drop-shadow-[0_0_8px_rgba(124,192,255,0.9)]"
            >
               <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
         </div>

         <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
               <p className="bg-linear-to-b from-white to-[#8fb9ec] bg-clip-text text-[17cqw] leading-none font-bold tracking-[-0.06em] text-transparent">
                  404
               </p>
               <p className="mt-[2.5cqw] font-mono text-[max(10px,2.6cqw)] tracking-[0.3em] text-[#8fb0d2]">NO SIGNAL</p>
            </div>
         </div>

         <div className="absolute inset-x-[5.5%] top-[5%] flex items-center justify-between font-mono text-[10px] tracking-[0.14em]">
            <span className="text-[#b6cadc]">SECTOR 404</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#142234]/80 px-2.5 py-1 text-[#93a9bf]">
               <span className="nf-blink size-1.5 rounded-full bg-warning" />
               NO CONTACT
            </span>
         </div>
         <div className="absolute inset-x-[5.5%] bottom-[5%] flex items-center justify-between font-mono text-[10px] tracking-widest text-[#7893ab]">
            <span className="inline-flex items-center gap-1.5">
               <span className="size-1.5 rounded-full bg-[#6fa9e7] animate-pulse motion-reduce:animate-none" />
               SCANNING
            </span>
            <span>0.00°N 0.00°E</span>
         </div>
      </div>
   );
}

function FlightStrip({ path }) {
   return (
      <div className="@container mt-4">
         <dl className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-[20px] border border-[#e7eaf0] bg-white px-6 py-5 shadow-[0_10px_30px_-12px_rgba(37,63,102,0.18)] @sm:grid-cols-[auto_minmax(0,1fr)_auto_auto] @sm:gap-x-7">
            <Field label="Flight">AR 404</Field>
            <Field label="Destination">
               <span title={path}>{path}</span>
            </Field>
            <Field label="Scheduled">Never</Field>
            <Field label="Status">
               <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fdeeee] px-2 py-0.5 font-sans text-xs font-semibold text-error">
                  <span className="nf-blink size-1.5 rounded-full bg-error" />
                  Not found
               </span>
            </Field>
         </dl>
      </div>
   );
}

function Field({ label, children }) {
   return (
      <div className="min-w-0">
         <dt className="font-mono text-[10px] tracking-[0.14em] text-[#8a94a3] uppercase">{label}</dt>
         <dd className="mt-1.5 truncate font-mono text-[15px] font-medium text-charcoal">{children}</dd>
      </div>
   );
}

function ArrowLeftIcon({ className }) {
   return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
         <path d="M19 12H5M11 6l-6 6 6 6" />
      </svg>
   );
}

function ArrowUpRightIcon({ className }) {
   return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
         <path d="M7 17 17 7M8 7h9v9" />
      </svg>
   );
}
