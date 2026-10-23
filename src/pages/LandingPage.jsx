import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/NavBar/NavBar';
import { FAQ } from '../components/LandingPage/FAQ/FAQ';
import { SeamlessImports } from '../components/LandingPage/Imports/SeamlessImports';
import { Airport } from '../components/LandingPage/AirportIntelligenceSection/Airport';
import { RadarSection } from '../components/LandingPage/RadarSection/RadarSection';
import { TravelStatsSection } from '../components/LandingPage/TravelStatsSection/TravelStatsSection';
import { FeaturesSection } from '../components/LandingPage/FeaturesSection/FeaturesSection';
import { HeroSection } from '../components/LandingPage/HeroSection/HeroSection';

export function LandingPage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <TravelStatsSection />
      <RadarSection />
      <SeamlessImports />
      <Airport />
      <FAQ />
      <Footer />
    </>
  );
}
