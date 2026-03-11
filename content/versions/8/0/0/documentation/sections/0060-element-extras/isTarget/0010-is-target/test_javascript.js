export const b = {};

export function signal_3753F_v1(_, __, el) {
  if (el.isTarget === true) {
    b.trigger("signal_3753F_v2");
  }
}

export function signal_3753F_v2(_, __, el) {
  el.innerHTML = b.time();
}
