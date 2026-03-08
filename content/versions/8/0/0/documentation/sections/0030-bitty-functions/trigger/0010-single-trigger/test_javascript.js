export const bitty = {};

export function signal_9FE51_alfa(_, __, ___) {
  bitty.trigger("signal_9FE51_bravo");
}

export function signal_9FE51_bravo(_, __, el) {
  el.innerHTML = bitty.time();
}
