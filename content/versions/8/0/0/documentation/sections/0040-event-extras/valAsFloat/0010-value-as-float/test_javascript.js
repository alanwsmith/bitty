export const bitty = {};

export function signal_83780_alfa(ev, sender, el) {
  if (ev.valAsFloat() === 1.1) {
    el.innerHTML = bitty.time();
  }
}
