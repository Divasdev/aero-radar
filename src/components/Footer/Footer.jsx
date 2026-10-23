import logoImg from '../../assets/logo.png';

export function Footer() {
   return (
      <footer className="border-t border-outline-variant">
         <div className="flex justify-between max-w-6xl mx-auto px-6 py-12">

            <div className="flex flex-col gap-3">
               <div className="flex items-center gap-2">
                  <img src={logoImg} className="size-8 rounded-full" alt="AeroRadar logo" />
                  <span className="font-semibold text-charcoal text-lg">AeroRadar</span>
               </div>

               <p className="text-sm text-outline">
                  © 2026 AeroRadar Aviation Systems. Precision engineered for the skies.
               </p>

               <p className="text-xs text-outline font-mono uppercase tracking-widest">
                  Build v1.0.0 · Beta Release
               </p>
            </div>

            <nav className="grid grid-cols-3 gap-16">

               <div className="flex flex-col gap-3">
                  <span className="text-xs font-semibold text-charcoal uppercase tracking-wider">Product</span>
                  <a href="#" className="text-sm text-outline hover:text-charcoal transition">Airport Explorer</a>
                  <a href="#" className="text-sm text-outline hover:text-charcoal transition">Flight Tracker</a>
                  <a href="#" className="text-sm text-outline hover:text-charcoal transition">Analytics</a>
               </div>

               <div className="flex flex-col gap-3">
                  <span className="text-xs font-semibold text-charcoal uppercase tracking-wider">Company</span>
                  <a href="#" className="text-sm text-outline hover:text-charcoal transition">About</a>
                  <a href="#" className="text-sm text-outline hover:text-charcoal transition">Contact</a>
               </div>

               <div className="flex flex-col gap-3">
                  <span className="text-xs font-semibold text-charcoal uppercase tracking-wider">Legal</span>
                  <a href="#" className="text-sm text-outline hover:text-charcoal transition">Privacy</a>
                  <a href="#" className="text-sm text-outline hover:text-charcoal transition">Terms</a>
               </div>

            </nav>

         </div>
      </footer>
   )
}