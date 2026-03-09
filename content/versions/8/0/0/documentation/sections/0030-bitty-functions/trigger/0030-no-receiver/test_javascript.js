export const bitty = {};

export function signal_EC577_alfa(_, __, ___) {
  bitty.trigger("signal_EC577_bravo");
}

export function signal_EC577_bravo(_, __, ___) {
  bitty.trigger("signal_EC577_charlie");
}

export function signal_EC577_charlie(_, __, el) {
  el.innerHTML = bitty.time();
}
