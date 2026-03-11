export const b = {};

export function signal_9D3AE_v1(_, __, ___) {
  b.send({}, "signal_9D3AE_v2");
}

export function signal_9D3AE_v2(_, sender, el) {
  if (sender === null) {
    el.innerHTML = b.time();
  }
}
