export const b = {};

export function signal_0D36A_v1(_, __, ___) {
  b.trigger("signal_0D36A_v2");
}

export function signal_0D36A_v2(_, __, el) {
  if (el === undefined) {
    b.trigger("signal_0D36A_v3");
  }
}

export function signal_0D36A_v3(_, __, el) {
  el.innerHTML = b.time();
}
