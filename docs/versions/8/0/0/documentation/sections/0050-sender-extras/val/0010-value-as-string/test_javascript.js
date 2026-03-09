export const bitty = {};

export function signal_FDC10_alfa(_, sender, el) {
  if (sender.val === "Input FDC10_alfa") {
    el.innerHTML = bitty.time();
  }
}
