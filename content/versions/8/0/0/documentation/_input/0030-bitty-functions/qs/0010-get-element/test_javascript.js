export const b = {};

export function $_SIGNAL_(_, __, el) {
  const fromDefault = document.querySelector("#target_$_SIGNAL_");
  const fromBitty = b.qs("#target_$_SIGNAL_");
  if (fromBitty.isSameNode(fromDefault)) {
    el.innerHTML = b.time();
  }
}
