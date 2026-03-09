export const bitty = {};

export function signal_C0EE2_v1(ev, sender, el) {
  const container = bitty.qs("#container_signal_C0EE2_v1");
  const els = bitty.qsa(".target_signal_C0EE2_v1");
  if (els[2].innerHTML === "charlie signal_C0EE2_v1") {
    el.innerHTML = bitty.time();
  }
}
