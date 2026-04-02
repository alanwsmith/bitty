export const b = {};

export function signal_88408_v1(_, __, ___) {
  b.send({}, "signal_88408_v2");
}

export function signal_88408_v2(_, sender, el) {
  if (sender === undefined) {
    el.innerHTML = b.time();
  }
}
