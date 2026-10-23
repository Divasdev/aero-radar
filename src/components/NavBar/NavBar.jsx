import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import logoImg from '../../assets/logo.png';
export function NavBar() {

   return (
      <nav className="max-w-6xl mx-auto mt-6 px-6 sticky top-6 z-50">
         <div className="bg-white/50 backdrop-blur-sm flex items-center justify-between px-8 py-4 border border-outline-variant rounded-pill shadow-sm">
            <Logo />
            <NavLinks />
            <CTAButton />
         </div>
      </nav>
   )
}

export function Logo() {
   return (
      <Link to="/" className='flex items-center gap-2'>
         <img src={logoImg} className='size-8 rounded-full' />
         <h2 className='font-semibold text-charcoal text-xl'>AeroRadar</h2>
      </Link>
   )
}
export function NavLinks() {
   const location = useLocation();
   return (
      <div className='flex items-center gap-8 text-sm font-medium text-outline'>
         <Link to="/" className={location.pathname === '/' ? 'text-primary' : 'hover:text-primary transition-colors'}>Features</Link>
         <Link to="/airport" className={location.pathname === '/airport' ? 'text-primary' : 'hover:text-primary transition-colors'}>Airport</Link>
         <a href='#' className='hover:text-primary transition-colors'>Flights</a>
         <a href='#' className='hover:text-primary transition-colors'>Analytics</a>
      </div>
   )
}
export function CTAButton() {
   return (
      <button className='bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition'>
         Launch app
      </button>
   )
}
