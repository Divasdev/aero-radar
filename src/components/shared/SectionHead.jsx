import { Eyebrow } from './Eyebrow';
import { cx } from './cx';
import './shared.css';

// Eyebrow + title, with an optional element on the right (a pill, a time label, …).
// Pass titleId and point the surrounding section's aria-labelledby at it.
export function SectionHead({ eyebrow, eyebrowIcon, title, titleId, as: Heading = 'h2', aside, className }) {
   return (
      <div className={cx('ar-section-head', className)}>
         <div>
            {eyebrow && <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow>}
            <Heading id={titleId} className="ar-section-head__title">{title}</Heading>
         </div>
         {aside}
      </div>
   );
}
