export const bitty = {};

export function signal_AF23A_v1(_, __, ___) {
  bitty.trigger("signal_AF23A_v2");
  bitty.debounce("AF23A_v1", "signal_AF23A_v3", 2000);
}

export function signal_AF23A_v2(payload, __, el) {
  el.innerHTML = `debounce started: ${bitty.time()}`;
}

export function signal_AF23A_v3(payload, __, el) {
  el.innerHTML = `debounce resolved: ${bitty.time()}`;
}
