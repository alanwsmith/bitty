export const bitty = {};

export function $_SIGNAL_(ev, sender, el) {
  const fromNative = document.querySelector("#target_bravo_$_SIGNAL_");
  const alfa = bitty.qs("#target_alfa_$_SIGNAL_");
  const bravo = bitty.qs("#target_bravo_$_SIGNAL_", alfa);
  if (bravo.isSameNode(fromNative)) {
    el.innerHTML = bitty.time();
  }
}
