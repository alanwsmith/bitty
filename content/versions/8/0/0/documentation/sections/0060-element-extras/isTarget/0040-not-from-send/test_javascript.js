export const b = {};

export function signal_FDCFA_v1(_, __, ___) {
  b.send({}, "signal_FDCFA_v2");
}

export function signal_FDCFA_v2(_, __, el) {
  if (el.isTarget === false) {
    el.innerHTML = b.time();
  }
}
