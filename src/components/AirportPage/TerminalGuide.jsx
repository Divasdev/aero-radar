import { useState } from 'react';
import { AirportIcon } from './AirportIcon';

export function TerminalGuide({ airport }) {
  const [terminalIndex, setTerminalIndex] = useState(0);
  const terminal = airport.terminals[terminalIndex];
  return (
    <section className="airport-panel airport-guide" id="airport-guide" aria-labelledby="airport-guide-title">
      <div className="airport-guide-icon"><AirportIcon name="terminal" size={23} /></div>
      <span className="airport-eyebrow">BEYOND THE RUNWAY</span>
      <h2 id="airport-guide-title">Find your bearings.</h2>
      <p>A smoother stop, from check-in <br />to your next connection.</p>
      <div className="airport-terminal-tabs" role="group" aria-label="Terminal preview">{airport.terminals.map((name, index) => <button key={name} onClick={() => setTerminalIndex(index)} aria-pressed={terminalIndex === index}>{name === 'International' ? 'Intl' : name.replace('Terminal ', 'T')}</button>)}</div>
      <div className="airport-terminal-detail"><div><strong>{terminal}</strong><span>Explore the essentials</span></div><AirportIcon name="terminal" size={29} /></div>
      <div className="airport-amenities"><span><AirportIcon name="wifi" size={16} /> Airport Wi-Fi</span><span><AirportIcon name="coffee" size={16} /> Lounges & cafés</span><span><AirportIcon name="train" size={16} /> Terminal connections</span></div>
      <a href="#airport-flights" className="airport-text-link">Find your next flight<AirportIcon name="arrow" size={16} /></a>
    </section>
  );
}
