export const bitty = {};

export function signal_7CB08(ev, sender, el) {
  const timestamp = bitty.localTimestampMs();
  el.innerHTML = timestamp;
}
