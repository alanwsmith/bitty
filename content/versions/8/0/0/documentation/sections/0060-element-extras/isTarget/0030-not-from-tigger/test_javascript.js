export const bitty = {};

export function signal_DFBBE_v1(_, __, ___) {
  bitty.trigger("signal_DFBBE_v2");
}

export function signal_DFBBE_v2(_, __, el) {
  if (el.isTarget === false) {
    el.innerHTML = bitty.time();
  }
}
