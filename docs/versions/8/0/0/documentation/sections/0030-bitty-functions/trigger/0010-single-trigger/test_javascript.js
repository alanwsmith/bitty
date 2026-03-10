export const b = {};

export function signal_9FE51_v1(_, __, ___) {
  b.trigger("signal_9FE51_v2");
}

export function signal_9FE51_v2(_, __, el) {
  el.innerHTML = b.time();
}
