export const bitty = {};

export function signal_68843_alfa(_, __, ___) {
  bitty.trigger("signal_68843_bravo signal_68843_charlie");
}

export function signal_68843_bravo(_, __, el) {
  el.innerHTML = bitty.time();
}

export function signal_68843_charlie(_, __, el) {
  el.innerHTML = bitty.time();
}
