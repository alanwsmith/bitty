export const b = {};

export function signal_AF23A_v1(_, __, ___) {
  b.trigger("signal_AF23A_v2");
  b.debounce("AF23A_v1", "signal_AF23A_v3", 2000);
}

export function signal_AF23A_v2(payload, __, el) {
  el.innerHTML = `debounce started: ${b.time()}`;
}

export function signal_AF23A_v3(payload, __, el) {
  el.innerHTML = `debounce resolved: ${b.time()}`;
}
