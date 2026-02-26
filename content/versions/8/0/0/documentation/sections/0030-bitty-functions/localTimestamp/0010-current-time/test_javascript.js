export const bitty = {};

export function signal_DF095(ev, sender, el) {
  const timestamp = bitty.localTimestamp();
  el.innerHTML = timestamp;
}
