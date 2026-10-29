import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import logoImg from '../../assets/logo.png';

const links = [
   { to: '/', label: 'Features' },
   { to: '/airport', label: 'Airport' },
   { to: '/flight', label: 'Flight' },
   { to: '/analytics', label: 'Analytics' },
];

export function NavBar() {
   const [open, setOpen] = useState(false);
   const menuButtonRef = useRef(null);

   // Close on Escape, and put focus back on the menu button so keyboard users aren't lost.
   useEffect(() => {
      if (!open) return;
      function onKeyDown(e) {
         if (e.key === 'Escape') {
            setOpen(false);
            menuButtonRef.current?.focus();
         }
      }
      document.addEventListener('keydown', onKeyDown);
      return () => document.removeEventListener('keydown', onKeyDown);
   }, [open]);

   return (
      <nav className="max-w-6xl mx-auto mt-3 px-4 sticky top-3 z-50 min-[900px]:mt-6 min-[900px]:px-6 min-[900px]:top-6">
         <div className="bg-white/50 backdrop-blur-sm flex items-center justify-between px-4 py-2 border border-outline-variant rounded-pill shadow-sm min-[900px]:px-8 min-[900px]:py-4">
            <Logo />
            <NavLinks className="hidden min-[900px]:flex items-center gap-8" />
            <CTAButton className="hidden min-[900px]:block" />
            <MenuButton ref={menuButtonRef} open={open} onToggle={() => setOpen(o => !o)} />
         </div>
         <div
            id="mobile-menu"
            hidden={!open}
            className="absolute inset-x-4 top-full mt-2 p-4 bg-white border border-outline-variant rounded-card shadow-lg min-[900px]:hidden"
         >
            <NavLinks className="flex flex-col *:py-2" onNavigate={() => setOpen(false)} />
            <CTAButton className='w-full mt-4' />
         </div>
      </nav>
   )
}

export function MenuButton({ ref, open, onToggle }) {
   return (
      <button
         ref={ref}
         type="button"
         onClick={onToggle}
         aria-expanded={open}
         aria-controls="mobile-menu"
         aria-label={open ? 'Close menu' : 'Open menu'}
         className='grid size-10 place-items-center rounded-full text-charcoal hover:bg-surface-container transition-colors min-[900px]:hidden'
      >
         <svg viewBox='0 0 24 24' className='size-5' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' aria-hidden='true'>
            {open ? <path d='M6 6l12 12M18 6L6 18' /> : <path d='M4 7h16M4 12h16M4 17h16' />}
         </svg>
      </button>
   )
}

export function Logo() {
   return (
      <Link to="/" className='flex items-center gap-2'>
         <img src={logoImg} 
         className='size-8 rounded-full'  alt='AeroRadar'/>
         <h2 className='font-semibold text-charcoal text-xl'>AeroRadar</h2>
      </Link>
   )
}
export function NavLinks({ className = '', onNavigate }) {
   const { pathname } = useLocation();
   return (
      <div className={`text-sm font-medium text-outline ${className}`}>
         {links.map(({ to, label }) => (
            <Link
               key={to}
               to={to}
               onClick={onNavigate}
               aria-current={pathname === to ? 'page' : undefined}
               className={pathname === to ? 'text-primary' : 'hover:text-primary transition-colors'}
            >
               {label}
            </Link>
         ))}
      </div>
   )
}
export function CTAButton({ className = '' }) {
   return (
      <button className={`bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition ${className}`}>
         Launch app
      </button>
   )
}
