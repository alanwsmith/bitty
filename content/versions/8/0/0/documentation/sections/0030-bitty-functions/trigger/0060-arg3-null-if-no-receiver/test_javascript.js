export const bitty = {};

export function signal_DEF6F_alfa(_, __, ___) {
  bitty.trigger("signal_DEF6F_bravo");
}

export function signal_DEF6F_bravo(_, __, el) {
  if (el === null) {
    bitty.trigger("signal_DEF6F_charlie");
  }
}

export function signal_DEF6F_charlie(_, __, el) {
  el.innerHTML = bitty.time();
}
