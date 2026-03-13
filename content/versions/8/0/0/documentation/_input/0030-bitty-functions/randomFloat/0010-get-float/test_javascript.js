export const b = {};

export function $_SIGNAL_(_, __, el) {
  const float = b.randomFloat(1, 10);
  if (float > 0) {
    el.innerHTML = b.time();
  }
}
