import { airports } from './airportData';
import { AirportIcon } from './AirportIcon';

export function AirportExplore({ selectedCode, onSelect }) {
  return (
    <section className="airport-explore" aria-labelledby="airport-explore-title">
      <div className="airport-explore-heading"><div><span className="airport-eyebrow">THE WORLD IS OPEN</span><h2 id="airport-explore-title">Where to next?</h2></div><p>Every airport has a story. Explore another.</p></div>
      <div className="airport-explore-grid">{airports.filter(airport => airport.code !== selectedCode).map((airport, index) => <a href="#airport-overview" onClick={() => onSelect(airport.code)} className={`airport-explore-card airport-explore-tone-${index}`} key={airport.code}><div className="airport-explore-top"><span className="airport-mono">{airport.region}</span><AirportIcon name="northeast" size={19} /></div><div className="airport-explore-bottom"><div><span className="airport-explore-code">{airport.code}</span><h3>{airport.city}</h3><p>{airport.name}</p></div><div className="airport-explore-art" aria-hidden="true"><span /><span /><AirportIcon name="plane" size={30} /></div></div></a>)}</div>
    </section>
  );
}
