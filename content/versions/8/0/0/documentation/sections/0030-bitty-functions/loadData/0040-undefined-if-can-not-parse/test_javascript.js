export const bitty = {};

export function signal_1ED93(ev, sender, el) {
  const result = bitty.loadData("invalid_signal_1ED93");
  if (result === undefined) {
    el.innerHTML = bitty.localTimestamp();
  }
}
