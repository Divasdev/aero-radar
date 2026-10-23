import { AirportIcon } from './AirportIcon';
import { AirfieldMap } from './AirfieldMap';

export function AirportInfoCard({ airport, saved, onSave }) {
  return (
    <section className="airport-overview" aria-labelledby="airport-name" id="airport-overview">
      <div className="airport-profile">
        <div className="airport-profile-top"><span className="airport-status"><span className="airport-dot" /> Normal operations</span><button className={`airport-save ${saved ? 'is-saved' : ''}`} onClick={onSave} aria-label={`${saved ? 'Unsave' : 'Save'} ${airport.code} airport`} aria-pressed={saved}><AirportIcon name="star" size={19} fill={saved ? 'currentColor' : 'none'} /></button></div>
        <div className="airport-code-row"><span className="airport-large-code">{airport.code}</span><span className="airport-icao airport-mono">{airport.icao}<br /><span>INTL AIRPORT</span></span></div>
        <h2 id="airport-name">{airport.name}</h2>
        <p className="airport-location"><AirportIcon name="pin" size={15} />{airport.location}</p>
        <div className="airport-profile-facts">
          <div><span>LOCAL TIME</span><strong>{airport.time} <small>{airport.zone}</small></strong></div>
          <div><span>TERMINALS</span><strong>{String(airport.terminals.length).padStart(2, '0')}</strong></div>
          <div><span>RUNWAYS</span><strong>{String(airport.runways).padStart(2, '0')}</strong></div>
        </div>
      </div>
      <AirfieldMap airport={airport} />
    </section>
  );
}

const sparkPaths = ['M1 27 12 24 23 27 34 16 45 20 56 10 67 14 78 3', 'M1 5 12 11 23 8 34 21 45 17 56 25 67 22 78 29', 'M1 28 12 22 23 25 34 10 45 16 56 7 67 12 78 3', 'M1 29 12 22 23 24 34 18 45 20 56 9 67 12 78 4'];

export function AirportStats({ airport }) {
  const stats = [
    { label: 'On-time departures', value: airport.onTime, unit: '%', note: 'Moving to plan', icon: 'check', accent: 'green' },
    { label: 'Average delay', value: airport.delay, unit: 'min', note: 'Across departures', icon: 'clock', accent: 'blue' },
    { label: 'Daily departures', value: airport.departures, unit: '', note: 'A busy day ahead', icon: 'departures', accent: 'blue' },
    { label: 'Destinations', value: airport.destinations, unit: '', note: 'Connected to the world', icon: 'globe', accent: 'blue' },
  ];
  return <div className="airport-stats">{stats.map((stat, index) => <article className="airport-stat" key={stat.label}><div className="airport-stat-label"><AirportIcon name={stat.icon} size={15} />{stat.label}</div><div className="airport-stat-value"><strong>{stat.value}<small>{stat.unit}</small></strong><svg viewBox="0 0 80 34" className={`airport-spark ${stat.accent}`} aria-hidden="true"><path d={sparkPaths[index]} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></div><span className="airport-stat-note">{stat.note}</span></article>)}</div>;
}
