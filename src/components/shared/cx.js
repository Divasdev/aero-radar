// Joins class names, skipping empty/false values: cx('a', isOn && 'b') → 'a b'
export function cx(...classes) {
   return classes.filter(Boolean).join(' ');
}
