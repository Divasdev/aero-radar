import { AirportIcon } from '../shared';

export function WeatherTelemetry({ airport }) {
  return (
    <section className="airport-weather airport-panel" aria-labelledby="airport-weather-title">
      <div className="airport-weather-top"><span className="airport-eyebrow">OUTSIDE THE TERMINAL</span><AirportIcon name="northeast" size={17} /></div>
      <div className="airport-weather-main"><div><h2 id="airport-weather-title">{airport.temperature}<span>°</span></h2><p>{airport.condition}</p></div><WeatherIcon /></div>
      <p className="airport-weather-summary">A little perspective on the skies <br />before you take to them.</p>
      <div className="airport-weather-metrics">{[{ icon: 'wind', label: 'Wind', value: airport.wind }, { icon: 'eye', label: 'Visibility', value: airport.visibility }, { icon: 'drop', label: 'Humidity', value: airport.humidity }].map(item => <div key={item.label}><span><AirportIcon name={item.icon} size={16} />{item.label}</span><strong>{item.value}</strong></div>)}</div>
      <details className="airport-metar"><summary>Read aviation weather <span className="airport-mono">METAR +</span></summary><p>{airport.metar}</p><small>Illustrative weather report</small></details>
    </section>
  );
}

function WeatherIcon() {
  return <svg viewBox="0 0 120 100" fill="none" aria-hidden="true" className="airport-weather-art"><g stroke="#e9b866" strokeWidth="2.5" strokeLinecap="round"><circle cx="77" cy="34" r="18" fill="#ffe7b6" /><path d="M77 7V2m0 64v-5M50 34h-5m64 0h-5M58 15l-4-4m46 46-4-4m0-38 4-4" /></g><path d="M30 78a19 19 0 0 1-2-38 26 26 0 0 1 48 2 18 18 0 1 1 10 36H30Z" fill="white" stroke="#dce9fc" strokeWidth="2" /><path d="M27 87h41m9 0h8" stroke="#b4cff4" strokeWidth="2" strokeLinecap="round" /></svg>;
}
