export const bitty = {};

export function signal_00C0F_alfa(ev, sender, el) {
  const els = bitty.qsa(".target_signal_00C0F_alfa");
  if (els[2].innerHTML === "charlie signal_00C0F_alfa") {
    el.innerHTML = bitty.time();
  }
}
