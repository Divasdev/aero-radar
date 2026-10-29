import { useEffect, useState } from 'react';

// Tells you when an element first scrolls into view. Fires once, then stops watching.
//
//   const { ref, isVisible } = useReveal();
//   <section ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>…</section>
//
// `ref` is a callback ref, so it also works for elements that appear after the first render.
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
   const [node, setNode] = useState(null);
   // Very old browsers without IntersectionObserver just show the content.
   const [isVisible, setIsVisible] = useState(() => typeof IntersectionObserver === 'undefined');

   useEffect(() => {
      if (!node || isVisible) return;
      const observer = new IntersectionObserver(([entry]) => {
         if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
         }
      }, { threshold, rootMargin });
      observer.observe(node);
      return () => observer.disconnect();
   }, [node, isVisible, threshold, rootMargin]);

   return { ref: setNode, isVisible };
}
