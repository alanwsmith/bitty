export const bitty = {};

export function signal_C0EE2(ev, sender, el) {
  const container = bitty.qs("#container_signal_C0EE2");
  const els = bitty.qsa(".target_signal_C0EE2");
  if (els[2].innerHTML === "charlie signal_C0EE2") {
    el.innerHTML = bitty.localTimestamp();
  }
}
