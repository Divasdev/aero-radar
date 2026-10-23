import { AirportIcon } from './AirportIcon';

export function PopularRoutes({ airport }) {
  return (
    <section className="airport-network" aria-labelledby="airport-network-title">
      <svg className="airport-network-background" viewBox="0 0 1100 340" fill="none" aria-hidden="true"><path d="M-100 440Q360-280 1200 180M-100 490Q410-170 1200 250M-100 540Q390-50 1200 310" stroke="#729bc6" strokeOpacity=".1" /><circle cx="1000" cy="50" r="200" stroke="#729bc6" strokeOpacity=".08" /><circle cx="1000" cy="50" r="270" stroke="#729bc6" strokeOpacity=".08" /></svg>
      <div className="airport-network-copy"><span className="airport-eyebrow"><AirportIcon name="globe" size={15} /> THE BIGGER PICTURE</span><h2>One airport. <br />Endless horizons.</h2><p>A few of the places <br />{airport.city} connects you to.</p><span className="airport-network-caption">POPULAR ROUTES / SAMPLE DATA</span></div>
      <div className="airport-route-cards">{airport.routes.map(route => <article className="airport-route-card" key={route.code}><div className="airport-route-top"><span className="airport-mono">{airport.code}</span><AirportIcon name="northeast" size={17} /></div><svg viewBox="0 0 180 70" fill="none" aria-hidden="true" className="airport-route-arc"><path d="M9 59Q90-24 171 59" stroke="#4376ad" strokeDasharray="3 5" /><path d="M9 59Q58 9 101 22" stroke="#64a7ff" strokeWidth="1.5" /><circle cx="9" cy="59" r="3" fill="#86baff" /><circle cx="171" cy="59" r="3" fill="#86baff" /><path d="m102 14 11 10-15 1 4-11Z" fill="#a7ceff" /></svg><h3>{route.code}</h3><p>{route.city}</p><div className="airport-route-bottom"><span>{route.duration}</span><span>{route.flights} flights / day</span></div></article>)}</div>
    </section>
  );
}
