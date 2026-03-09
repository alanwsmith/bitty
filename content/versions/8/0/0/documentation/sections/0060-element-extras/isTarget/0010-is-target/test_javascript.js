export const bitty = {};

export function signal_3753F_v1(_, __, el) {
  if (el.isTarget === true) {
    bitty.trigger("signal_3753F_v2");
  }
}

export function signal_3753F_v2(_, __, el) {
  el.innerHTML = bitty.time();
}
