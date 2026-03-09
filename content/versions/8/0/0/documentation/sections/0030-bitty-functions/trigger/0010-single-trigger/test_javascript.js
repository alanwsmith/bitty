export const bitty = {};

export function signal_9FE51_v1(_, __, ___) {
  bitty.trigger("signal_9FE51_v2");
}

export function signal_9FE51_v2(_, __, el) {
  el.innerHTML = bitty.time();
}
