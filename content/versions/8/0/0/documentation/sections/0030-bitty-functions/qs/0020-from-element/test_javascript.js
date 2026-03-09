export const bitty = {};

export function signal_A9BED_alfa(ev, sender, el) {
  const fromNative = document.querySelector("#target_bravo_signal_A9BED_alfa");
  const alfa = bitty.qs("#target_alfa_signal_A9BED_alfa");
  const bravo = bitty.qs("#target_bravo_signal_A9BED_alfa", alfa);
  if (bravo.isSameNode(fromNative)) {
    el.innerHTML = bitty.time();
  }
}
