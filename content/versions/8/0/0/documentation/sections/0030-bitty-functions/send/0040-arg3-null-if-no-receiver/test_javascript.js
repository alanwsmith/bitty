export const bitty = {};

export function signal_03E2A_alfa(_, __, ___) {
  bitty.send({}, "signal_03E2A_bravo");
}

export function signal_03E2A_bravo(_, __, el) {
  if (el === null) {
    bitty.send({}, "signal_03E2A_charlie");
  }
}

export function signal_03E2A_charlie(_, __, el) {
  el.innerHTML = bitty.time();
}
