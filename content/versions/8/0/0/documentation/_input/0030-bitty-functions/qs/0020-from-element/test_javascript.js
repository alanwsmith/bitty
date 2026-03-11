export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  const fromNative = document.querySelector("#target_bravo_$_SIGNAL_");
  const alfa = b.qs("#target_alfa_$_SIGNAL_");
  const bravo = b.qs("#target_bravo_$_SIGNAL_", alfa);
  if (bravo.isSameNode(fromNative)) {
    el.innerHTML = b.time();
  }
}
