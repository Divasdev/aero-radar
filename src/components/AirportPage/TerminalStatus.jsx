import { useState } from 'react';
import { AirportIcon } from './AirportIcon';
import { AirlineMark } from './AirlinesOperating';
import { airlineStyles } from './airportData';

export function TerminalStatus({ airport }) {
  const [direction, setDirection] = useState('Departures');
  const [filter, setFilter] = useState('All flights');
  const arriving = direction === 'Arrivals';
  const [hour, minute] = airport.time.split(':').map(Number);
  function scheduledTime(index) {
    const total = hour * 60 + minute + [3, 28, 43, 68][index];
    return `${String(Math.floor(total / 60) % 24).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
  }
  const rows = airport.carriers.slice(0, 4).map((airline, index) => ({
    airline, flight: `${airlineStyles[airline].initials} ${[2438, 318, 906, 112][index]}`,
    place: airport.boardDestinations[index], time: scheduledTime(index),
    gate: ['F12', 'D08', 'B22', 'A14'][index],
    status: arriving ? ['Landed', 'Delayed', 'On time', 'On time'][index] : ['Boarding', 'Delayed', 'On time', 'On time'][index],
  }));
  const visible = rows.filter(row => filter === 'All flights' || row.status === filter);
  return (
    <section className="airport-panel airport-board" id="airport-flights" aria-labelledby="airport-board-title">
      <div className="airport-panel-heading"><div><span className="airport-eyebrow">THE FLIGHT BOARD</span><h2 id="airport-board-title">Every journey, at a glance.</h2></div><span className="airport-mini-label">{airport.code} / LOCAL TIME</span></div>
      <div className="airport-board-controls"><div className="airport-segmented" role="group" aria-label="Flight direction">{['Departures', 'Arrivals'].map(item => <button key={item} onClick={() => setDirection(item)} aria-pressed={direction === item}><AirportIcon name={item.toLowerCase()} size={16} />{item}</button>)}</div><label className="airport-filter"><span className="sr-only">Filter flight status</span><select value={filter} onChange={event => setFilter(event.target.value)}><option>All flights</option><option>On time</option><option>Delayed</option></select></label></div>
      <div className="airport-table-scroll"><table className="airport-flight-table"><thead><tr><th>TIME</th><th>{arriving ? 'FROM / FLIGHT' : 'TO / FLIGHT'}</th><th>GATE</th><th>STATUS</th></tr></thead><tbody>{visible.map(row => <tr key={row.flight}><td className="airport-flight-time">{row.time}{row.status === 'Delayed' && <small>+25 min</small>}</td><td><div className="airport-flight-destination"><AirlineMark name={row.airline} small /><div><strong>{row.place.city} <span>{row.place.code}</span></strong><small>{row.airline} · {row.flight}</small></div></div></td><td className="airport-gate">{row.gate}</td><td><span className={`airport-flight-status ${row.status.toLowerCase().replace(' ', '-')}`}><span className="airport-dot" />{row.status}</span></td></tr>)}</tbody></table></div>
      <div className="airport-board-bottom"><span><span className="airport-dot" /> Sample schedule</span><span>{visible.length} flights in this preview</span></div>
    </section>
  );
}
