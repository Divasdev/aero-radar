import { AirportIcon, WeatherIcon } from './AirportIcon';

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
