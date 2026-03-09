export const bitty = {};

export function snippet_alfa(_, __, el) {
  el.innerHTML = `alfa: ${bitty.time()}`;
}

export function snippet_bravo(_, __, el) {
  el.innerHTML = `bravo: ${bitty.time()}`;
}

export function snippet_charlie(_, __, el) {
  el.innerHTML = `charlie: ${bitty.time()}`;
}
