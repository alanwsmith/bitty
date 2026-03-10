export const b = {};

export function signal_DEF6F_v1(_, __, ___) {
  b.trigger("signal_DEF6F_v2");
}

export function signal_DEF6F_v2(_, __, el) {
  if (el === null) {
    b.trigger("signal_DEF6F_v3");
  }
}

export function signal_DEF6F_v3(_, __, el) {
  el.innerHTML = b.time();
}
