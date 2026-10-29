import { cx } from './cx';
import './shared.css';

// White card with a soft border. Renders a <section> unless you pass `as`.
// Extra props (id, aria-labelledby, …) go straight onto the element.
export function Panel({ as: Tag = 'section', className, children, ...props }) {
   return (
      <Tag className={cx('ar-panel', className)} {...props}>
         {children}
      </Tag>
   );
}
