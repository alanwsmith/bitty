export const bitty = {};

export function signal_FDC10_v1(_, sender, el) {
  if (sender.val === "Input FDC10_v1") {
    el.innerHTML = bitty.time();
  }
}
