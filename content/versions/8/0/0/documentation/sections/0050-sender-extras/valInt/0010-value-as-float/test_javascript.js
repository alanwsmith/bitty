export const b = {};

export function signal_9AE14_v1(_, sender, el) {
  if (sender.valInt() === 100) {
    el.innerHTML = b.time();
  }
}
