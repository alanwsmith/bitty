export const b = {};

export function signal_03E2A_v1(_, __, ___) {
  b.send({}, "signal_03E2A_v2");
}

export function signal_03E2A_v2(_, __, el) {
  if (el === null) {
    b.send({}, "signal_03E2A_v3");
  }
}

export function signal_03E2A_v3(_, __, el) {
  el.innerHTML = b.time();
}
