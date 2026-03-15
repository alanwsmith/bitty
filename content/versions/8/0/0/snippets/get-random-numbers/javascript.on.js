export const b = {};

export function getInt(_, __, el) {
  el.innerHTML = b.randomInt(1, 100);
}

export function getFloat(_, __, el) {
  el.innerHTML = b.randomFloat(1, 100);
}
