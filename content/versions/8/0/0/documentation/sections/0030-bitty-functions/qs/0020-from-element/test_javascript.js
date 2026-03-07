export const bitty = {};

export function signal_A9BED(ev, sender, el) {
  const fromNative = document.querySelector("#target_bravo_signal_A9BED");
  const alfa = bitty.qs("#target_alfa_signal_A9BED");
  const bravo = bitty.qs("#target_bravo_signal_A9BED", alfa);
  if (bravo.isSameNode(fromNative)) {
    el.innerHTML = bitty.localTimestamp();
  }
}
