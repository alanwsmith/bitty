export const b = {};

export function signal_02356_v1(_, __, el) {
  if (el.valueFloat() === 1.1) {
    b.trigger("signal_02356_v2");
  }
}

export function signal_02356_v2(_, __, el) {
  el.innerHTML = b.time();
}
