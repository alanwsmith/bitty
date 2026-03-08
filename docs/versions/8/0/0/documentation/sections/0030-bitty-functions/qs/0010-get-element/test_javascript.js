export const bitty = {};

export function signal_B7BA2(_, __, el) {
  const fromDefault = document.querySelector("#target_signal_B7BA2");
  const fromBitty = bitty.qs("#target_signal_B7BA2");
  if (fromBitty.isSameNode(fromDefault)) {
    el.innerHTML = bitty.time();
  }
}
