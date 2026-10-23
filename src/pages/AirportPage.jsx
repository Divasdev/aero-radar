import { useState } from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import { Footer } from '../components/Footer/Footer';
import { AirportSearch } from '../components/AirportPage/AirportSearch';
import { AirportInfoCard, AirportStats } from '../components/AirportPage/AirportInfoCard';
import { AirlinesOperating } from '../components/AirportPage/AirlinesOperating';
import { PopularRoutes } from '../components/AirportPage/PopularRoutes';
import { DelayTrendChart } from '../components/AirportPage/DelayTrendChart';
import { WeatherTelemetry } from '../components/AirportPage/WeatherTelemetry';
import { TerminalStatus } from '../components/AirportPage/TerminalStatus';
import { TerminalGuide } from '../components/AirportPage/TerminalGuide';
import { AirportExplore } from '../components/AirportPage/AirportExplore';
import { airports } from '../components/AirportPage/airportData';
import './AirportPage.css';

export function AirportPage() {
  const [selectedCode, setSelectedCode] = useState('SFO');
  const [savedAirports, setSavedAirports] = useState([]);
  const airport = airports.find(item => item.code === selectedCode);
  const saved = savedAirports.includes(selectedCode);
  function toggleSaved() {
    setSavedAirports(current => current.includes(selectedCode) ? current.filter(code => code !== selectedCode) : [...current, selectedCode]);
  }
  return (
    <div className="airport-page">
      <NavBar />
      <main>
        <AirportSearch selectedCode={selectedCode} onSelect={setSelectedCode} />
        <div className="airport-container">
          <div className="airport-context"><div><span className="airport-context-current">Airport overview</span><span>/</span><span>{airport.code}</span></div><span className="airport-demo-label"><span className="airport-dot" /> Sample airport data</span></div>
          <AirportInfoCard airport={airport} saved={saved} onSave={toggleSaved} />
          <AirportStats airport={airport} />
          <nav className="airport-section-nav" aria-label="Airport sections"><a href="#airport-overview">Overview</a><a href="#airport-flights">Flight board</a><a href="#airport-guide">At the airport</a><span>A little knowledge. A better journey.</span></nav>
          <div className="airport-dashboard-grid">
            <TerminalStatus airport={airport} key={`flights-${selectedCode}`} />
            <WeatherTelemetry airport={airport} />
            <DelayTrendChart airport={airport} key={`chart-${selectedCode}`} />
            <TerminalGuide airport={airport} key={`guide-${selectedCode}`} />
          </div>
          <AirlinesOperating airport={airport} />
          <PopularRoutes airport={airport} />
          <AirportExplore selectedCode={selectedCode} onSelect={setSelectedCode} />
          <div className="airport-endnote"><span className="airport-mono">AERORADAR / AIRPORT INTELLIGENCE</span><span>Made for the curious traveller.</span><a href="#airport-search">Back to top ↑</a></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
