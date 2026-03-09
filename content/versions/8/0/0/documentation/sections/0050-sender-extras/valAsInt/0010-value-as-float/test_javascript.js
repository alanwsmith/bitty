export const bitty = {};

export function signal_E4E46_v1(_, sender, el) {
  if (sender.valAsInt === 100) {
    el.innerHTML = bitty.time();
  }
}
