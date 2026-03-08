export const bitty = {};

export function signal_9D3AE_alfa(_, __, ___) {
  bitty.send({}, "signal_9D3AE_bravo");
}

export function signal_9D3AE_bravo(_, sender, el) {
  if (sender === null) {
    el.innerHTML = bitty.time();
  }
}
