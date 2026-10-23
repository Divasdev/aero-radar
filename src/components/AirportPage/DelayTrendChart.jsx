import { useState } from 'react';
import { AirportIcon } from './AirportIcon';

export function DelayTrendChart({ airport }) {
  const [selectedDay, setSelectedDay] = useState(6);
  const values = [12, 18, 8, 24, 16, 10, airport.delay];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const average = Math.round(values.reduce((total, value) => total + value, 0) / values.length);
  return (
    <section className="airport-panel airport-delay" aria-labelledby="airport-delay-title">
      <div className="airport-panel-heading"><div><span className="airport-eyebrow">A LITTLE MORE PERSPECTIVE</span><h2 id="airport-delay-title">The rhythm of the runway.</h2></div><span className="airport-period"><AirportIcon name="clock" size={13} /> Last 7 days</span></div>
      <div className="airport-delay-summary"><div><strong>{average}<span>min</span></strong><p>average departure delay</p></div><span className="airport-chart-selection"><span className="airport-dot" />{days[selectedDay]} · {values[selectedDay]} min</span></div>
      <div className="airport-chart" aria-label="Sample average departure delay by day in minutes">
        <div className="airport-chart-axis" aria-hidden="true"><span>30m</span><span>20m</span><span>10m</span><span>0m</span></div>
        <div className="airport-chart-plot"><div className="airport-chart-grid" aria-hidden="true"><i /><i /><i /><i /></div><div className="airport-chart-bars">{values.map((value, index) => <button className={`airport-chart-column ${selectedDay === index ? 'is-selected' : ''}`} key={days[index]} onClick={() => setSelectedDay(index)} aria-pressed={selectedDay === index} aria-label={`${days[index]}: ${value} minutes average delay`}><span className="airport-chart-bar" style={{ height: `${value / 30 * 100}%` }}><span>{value}m</span></span><span className="airport-chart-day">{days[index]}</span></button>)}</div></div>
      </div>
      <p className="airport-chart-footnote"><span className="airport-dot" /> Average delay per departure <span>Sample week</span></p>
    </section>
  );
}
