export const b = {};

export function snippet_alfa(_, __, el) {
  el.innerHTML = `alfa: ${b.time()}`;
}

export function snippet_bravo(_, __, el) {
  el.innerHTML = `bravo: ${b.time()}`;
}

export function snippet_charlie(_, __, el) {
  el.innerHTML = `charlie: ${b.time()}`;
}
