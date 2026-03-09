export const bitty = {};

export function signal_9D58D_alfa(_, __, el) {
  if (el.valAsInt === 100) {
    bitty.trigger("signal_9D58D_bravo");
  }
}

export function signal_9D58D_bravo(_, __, el) {
  el.innerHTML = bitty.time();
}
