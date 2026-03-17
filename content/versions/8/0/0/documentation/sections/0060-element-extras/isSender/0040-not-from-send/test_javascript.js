export const b = {};

export function signal_C4293_v1(_, __, ___) {
  b.send({}, "signal_C4293_v2");
}

export function signal_C4293_v2(_, __, el) {
  if (el.isSender() === false) {
    el.innerHTML = b.time();
  }
}
