export const b = {};

export function signal_514EC_v1(_, __, ___) {
  b.trigger("signal_514EC_v2");
}

export function signal_514EC_v2(_, __, el) {
  if (el.isSender === false) {
    el.innerHTML = b.time();
  }
}
