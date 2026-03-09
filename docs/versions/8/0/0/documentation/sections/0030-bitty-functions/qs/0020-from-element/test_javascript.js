export const bitty = {};

export function signal_A9BED_v1(ev, sender, el) {
  const fromNative = document.querySelector("#target_bravo_signal_A9BED_v1");
  const alfa = bitty.qs("#target_alfa_signal_A9BED_v1");
  const bravo = bitty.qs("#target_bravo_signal_A9BED_v1", alfa);
  if (bravo.isSameNode(fromNative)) {
    el.innerHTML = bitty.time();
  }
}
