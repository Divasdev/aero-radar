import { AirportIcon } from './AirportIcon';
import { cx } from './cx';
import './shared.css';

// Small mono label above a heading, e.g. <Eyebrow icon="globe" tone="primary">Airport intelligence</Eyebrow>
export function Eyebrow({ icon, tone = 'muted', className, children }) {
   return (
      <span className={cx('ar-eyebrow', tone === 'primary' && 'ar-eyebrow--primary', className)}>
         {icon && <AirportIcon name={icon} size={15} />}
         {children}
      </span>
   );
}
