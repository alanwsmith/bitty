export const bitty = {};

export function signal_EC577_v1(_, __, ___) {
  bitty.trigger("signal_EC577_v2");
}

export function signal_EC577_v2(_, __, ___) {
  bitty.trigger("signal_EC577_v3");
}

export function signal_EC577_v3(_, __, el) {
  el.innerHTML = bitty.time();
}
