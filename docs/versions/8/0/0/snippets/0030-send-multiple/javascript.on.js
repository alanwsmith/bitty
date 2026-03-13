export const b = {};

export function alfa(_, __, el) {
  el.innerHTML = `alfa: ${b.time()}`;
}

export function bravo(_, __, el) {
  el.innerHTML = `bravo: ${b.time()}`;
}

export function charlie(_, __, el) {
  el.innerHTML = `charlie: ${b.time()}`;
}