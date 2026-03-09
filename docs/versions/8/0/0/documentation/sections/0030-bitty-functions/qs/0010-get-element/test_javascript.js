export const bitty = {};

export function signal_B7BA2_v1(_, __, el) {
  const fromDefault = document.querySelector("#target_signal_B7BA2_v1");
  const fromBitty = bitty.qs("#target_signal_B7BA2_v1");
  if (fromBitty.isSameNode(fromDefault)) {
    el.innerHTML = bitty.time();
  }
}
