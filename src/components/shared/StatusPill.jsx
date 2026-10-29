import { cx } from './cx';
import './shared.css';

// variant: 'ok' | 'warn' | 'info' | 'bad' | 'ghost'
// compact: smaller, square-ish badge for tables (like the flight board)
export function StatusPill({ variant = 'ok', dot = true, compact = false, className, children }) {
   return (
      <span className={cx('ar-pill', `ar-pill--${variant}`, compact && 'ar-pill--compact', className)}>
         {dot && <span className="ar-dot" aria-hidden="true" />}
         {children}
      </span>
   );
}
