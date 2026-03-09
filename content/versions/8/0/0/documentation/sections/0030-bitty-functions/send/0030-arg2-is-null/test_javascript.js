export const bitty = {};

export function signal_9D3AE_v1(_, __, ___) {
  bitty.send({}, "signal_9D3AE_v2");
}

export function signal_9D3AE_v2(_, sender, el) {
  if (sender === null) {
    el.innerHTML = bitty.time();
  }
}
