export const bitty = {};

export function signal_3753F_alfa(_, __, el) {
  if (el.isTarget === true) {
    bitty.trigger("signal_3753F_bravo");
  }
}

export function signal_3753F_bravo(_, __, el) {
  el.innerHTML = bitty.time();
}
