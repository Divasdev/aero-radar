import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/NavBar/NavBar';



export function FlightPage(){
   return(
      <>
      <NavBar />
      <main className="max-w-6xl mx-auto px-6 py-24">
         <h1 className="font-extrabold text-4xl text-center text-charcoal">Flights</h1>
      </main>
      <Footer />
      
      </>
   )
}