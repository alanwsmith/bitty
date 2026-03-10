export const b = {};

export function signal_B7BA2_v1(_, __, el) {
  const fromDefault = document.querySelector("#target_signal_B7BA2_v1");
  const fromBitty = b.qs("#target_signal_B7BA2_v1");
  if (fromBitty.isSameNode(fromDefault)) {
    el.innerHTML = b.time();
  }
}
