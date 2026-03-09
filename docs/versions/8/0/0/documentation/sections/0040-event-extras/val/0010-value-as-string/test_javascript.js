export const bitty = {};

export function signal_B8B31_alfa(ev, sender, el) {
  if (ev.val === "Input B8B31_alfa") {
    el.innerHTML = bitty.time();
  }
}
