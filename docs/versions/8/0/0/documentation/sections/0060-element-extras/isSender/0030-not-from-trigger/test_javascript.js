export const bitty = {};

export function signal_514EC_v1(_, __, ___) {
  bitty.trigger("signal_514EC_v2");
}

export function signal_514EC_v2(_, __, el) {
  if (el.isSender === false) {
    el.innerHTML = bitty.time();
  }
}
