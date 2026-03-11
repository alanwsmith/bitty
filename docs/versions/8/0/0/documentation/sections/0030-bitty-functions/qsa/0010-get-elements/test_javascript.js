export const b = {};

export function signal_00C0F_v1(ev, sender, el) {
  const els = b.qsa(".target_signal_00C0F_v1");
  if (els[2].innerHTML === "charlie signal_00C0F_v1") {
    el.innerHTML = b.time();
  }
}
