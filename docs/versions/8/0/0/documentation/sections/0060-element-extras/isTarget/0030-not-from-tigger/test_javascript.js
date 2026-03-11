export const b = {};

export function signal_DFBBE_v1(_, __, ___) {
  b.trigger("signal_DFBBE_v2");
}

export function signal_DFBBE_v2(_, __, el) {
  if (el.isTarget === false) {
    el.innerHTML = b.time();
  }
}
