export const bitty = {};

export function signal_df095(ev, sender, el) {
  const timestamp = bitty.localTimestamp();
  el.innerHTML = `passed ${timestamp}`;
}
