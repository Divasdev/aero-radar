import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

function subscribeToReducedMotion(onChange) {
   const query = window.matchMedia(REDUCED_MOTION);
   query.addEventListener('change', onChange);
   return () => query.removeEventListener('change', onChange);
}

// True when the visitor has asked their system for less motion. Updates live if they change it.
export function usePrefersReducedMotion() {
   return useSyncExternalStore(
      subscribeToReducedMotion,
      () => window.matchMedia(REDUCED_MOTION).matches,
      () => false,
   );
}

// Same feel as --ease-out-expo in index.css: fast start, gentle settle.
function easeOutExpo(progress) {
   return progress === 1 ? 1 : 1 - 2 ** (-10 * progress);
}

// Counts from 0 up to `target` over `duration` ms. Pass `start = false` to wait
// (for example until useReveal says the number is on screen). It runs once; if
// `target` changes later, it counts from the current number to the new one.
// With reduced motion turned on, it shows the target straight away.
//
//   const { ref, isVisible } = useReveal();
//   const delay = useCountUp(24, 1200, isVisible);
export function useCountUp(target, duration = 1200, start = true) {
   const reducedMotion = usePrefersReducedMotion();
   const [value, setValue] = useState(0);
   const currentRef = useRef(0);

   useEffect(() => {
      if (!start || reducedMotion) return;
      const from = currentRef.current;
      let startTime;
      let frame = requestAnimationFrame(function tick(now) {
         startTime ??= now;
         const progress = Math.min((now - startTime) / duration, 1);
         currentRef.current = from + (target - from) * easeOutExpo(progress);
         setValue(currentRef.current);
         if (progress < 1) frame = requestAnimationFrame(tick);
      });
      return () => cancelAnimationFrame(frame);
   }, [target, duration, start, reducedMotion]);

   if (reducedMotion) return target;
   // Round to the same number of decimals as the target (24 → whole numbers, 4.5 → one decimal).
   const decimals = (String(target).split('.')[1] ?? '').length;
   return Number(value.toFixed(decimals));
}
