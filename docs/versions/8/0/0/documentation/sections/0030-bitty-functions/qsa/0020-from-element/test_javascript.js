export const bitty = {};

export function signal_C0EE2_alfa(ev, sender, el) {
  const container = bitty.qs("#container_signal_C0EE2_alfa");
  const els = bitty.qsa(".target_signal_C0EE2_alfa");
  if (els[2].innerHTML === "charlie signal_C0EE2_alfa") {
    el.innerHTML = bitty.time();
  }
}
