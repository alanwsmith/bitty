export const bitty = {};

export function signal_1CC7F_alfa(ev, sender, el) {
  if (ev.valAsInt() === 100) {
    el.innerHTML = bitty.time();
  }
}
