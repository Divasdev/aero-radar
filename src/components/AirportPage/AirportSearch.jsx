import { useState } from 'react';
import { airports } from './airportData';
import { AirportIcon } from './AirportIcon';

export function AirportSearch({ selectedCode, onSelect }) {
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  function search(event) {
    event.preventDefault();
    const value = query.trim().toLowerCase();
    const airport = value && airports.find(item => [item.code, item.icao, item.city, item.name].some(text => text.toLowerCase().includes(value)));
    if (airport) {
      onSelect(airport.code);
      setMessage('');
      setQuery('');
    } else {
      setMessage('Explore a sample airport: SFO, JFK, LHR or HND.');
    }
  }
  return (
    <header className="airport-intro airport-container" id="airport-search">
      <div className="airport-intro-copy">
        <div className="airport-eyebrow"><AirportIcon name="globe" size={15} /> AIRPORT INTELLIGENCE</div>
        <h1>Know the airport.<br /><span>Enjoy the journey.</span></h1>
        <p>From the runway to your next connection.<br className="airport-desktop-break" /> A clearer view of the places that connect us.</p>
      </div>
      <div className="airport-search-panel">
        <label htmlFor="airport-query" className="airport-search-label">Where are you flying?</label>
        <form onSubmit={search} className="airport-search-form" role="search">
          <AirportIcon name="search" size={20} />
          <input id="airport-query" placeholder="Airport, city or IATA code" value={query} onChange={event => setQuery(event.target.value)} autoComplete="off" aria-describedby={message ? 'airport-search-message' : undefined} />
          <button type="submit" aria-label="Search airports"><AirportIcon name="arrow" /></button>
        </form>
        <div className="airport-search-suggestions"><span>EXPLORE</span>{airports.map(airport => <button key={airport.code} type="button" onClick={() => { onSelect(airport.code); setMessage(''); setQuery(''); }} aria-pressed={selectedCode === airport.code} className={selectedCode === airport.code ? 'is-selected' : ''}>{airport.code}<AirportIcon name="northeast" size={11} /></button>)}</div>
        <p id="airport-search-message" className="airport-search-message" role="status">{message || 'A few favourites. A world of possibilities.'}</p>
      </div>
    </header>
  );
}
