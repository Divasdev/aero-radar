import { airlineStyles } from './airportData';

export function AirlineMark({ name, small = false }) {
  const style = airlineStyles[name];
  return <span className={`airport-airline-mark ${small ? 'small' : ''}`} style={{ '--airline-color': style.color }} aria-hidden="true">{style.initials}</span>;
}

export function AirlinesOperating({ airport }) {
  return <section className="airport-airlines" aria-label="Airlines at this airport"><div className="airport-airlines-label"><span className="airport-eyebrow">IN GOOD COMPANY</span><h3>Airlines at {airport.code}</h3></div><div className="airport-airline-list">{airport.carriers.map(name => <div className="airport-airline" key={name}><AirlineMark name={name} /><span>{name}</span></div>)}</div></section>;
}
