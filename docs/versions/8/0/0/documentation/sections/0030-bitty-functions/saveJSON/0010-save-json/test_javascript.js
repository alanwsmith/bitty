export const bitty = {};

export function signal_EEA18(ev, sender, el) {
  const result = bitty.saveJSON("EEA18", {});
  el.innerHTML = bitty.localTimestamp();
}
