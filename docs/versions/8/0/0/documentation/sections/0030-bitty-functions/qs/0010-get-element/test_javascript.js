export const bitty = {};

export function signal_B7BA2_alfa(_, __, el) {
  const fromDefault = document.querySelector("#target_signal_B7BA2_alfa");
  const fromBitty = bitty.qs("#target_signal_B7BA2_alfa");
  if (fromBitty.isSameNode(fromDefault)) {
    el.innerHTML = bitty.time();
  }
}
