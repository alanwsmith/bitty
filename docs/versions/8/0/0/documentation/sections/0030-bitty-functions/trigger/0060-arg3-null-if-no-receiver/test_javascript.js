export const bitty = {};

export function signal_DEF6F_v1(_, __, ___) {
  bitty.trigger("signal_DEF6F_v2");
}

export function signal_DEF6F_v2(_, __, el) {
  if (el === null) {
    bitty.trigger("signal_DEF6F_v3");
  }
}

export function signal_DEF6F_v3(_, __, el) {
  el.innerHTML = bitty.time();
}
