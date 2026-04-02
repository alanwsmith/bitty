export const b = {};

export function signal_9BBC3_v1(_, __, ___) {
  b.trigger("signal_9BBC3_v2");
}

export function signal_9BBC3_v2(_, sender, el) {
  if (sender === undefined) {
    el.innerHTML = b.time();
  }
}
