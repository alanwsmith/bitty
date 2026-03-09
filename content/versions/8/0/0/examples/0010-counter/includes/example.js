export const bitty = {};

let count = 0;

export function initCounter(_, __, el) {
  el.innerHTML = count;
}

export function increment(_, __, el) {
  count += 1;
  el.innerHTML = count;
}
