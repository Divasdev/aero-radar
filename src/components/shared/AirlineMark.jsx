import { airlineStyles } from './airlineStyles';
import { cx } from './cx';
import './shared.css';

// Airlines missing from airlineStyles get their first two letters in a neutral slate color.
export function AirlineMark({ name, small = false }) {
  const style = airlineStyles[name] ?? { initials: name.slice(0, 2).toUpperCase(), color: '#5b6b80' };
  return <span className={cx('ar-airline-mark', small && 'ar-airline-mark--small')} style={{ '--airline-color': style.color }} aria-hidden="true">{style.initials}</span>;
}
