export const bitty = {};

export function signal_7cb08(ev, sender, el) {
  const timestamp = bitty.localTimestampMs();
  el.innerHTML = `passed ${timestamp}`;
}
