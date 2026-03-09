export const bitty = {};

export function signal_F1309_alfa(_, __, el) {
  if (sender.val() === "Input F1309_alfa") {
    el.innerHTML = bitty.time();
  }
}
