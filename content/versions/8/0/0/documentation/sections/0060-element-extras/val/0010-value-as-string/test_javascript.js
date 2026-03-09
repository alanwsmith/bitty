export const bitty = {};

export function signal_F1309_alfa(_, __, el) {
  if (el.val === "Input F1309_alfa") {
    bitty.trigger("signal_F1309_bravo");
  }
}

export function signal_F1309_bravo(_, __, el) {
  el.innerHTML = bitty.time();
}
