import { AirlineMark } from '../shared';

export function AirlinesOperating({ airport }) {
  return <section className="airport-airlines" aria-label="Airlines at this airport"><div className="airport-airlines-label"><span className="airport-eyebrow">IN GOOD COMPANY</span><h3>Airlines at {airport.code}</h3></div><div className="airport-airline-list">{airport.carriers.map(name => <div className="airport-airline" key={name}><AirlineMark name={name} /><span>{name}</span></div>)}</div></section>;
}
