export const bitty = {};

export function signal_00C0F(ev, sender, el) {
  const els = bitty.qsa(".target_signal_00C0F");
  if (els[2].innerHTML === "charlie signal_00C0F") {
    el.innerHTML = bitty.localTimestamp();
  }
}
