export const bitty = {};

export function signal_A090D_alfa(_, __, el) {
  sender.setProp("update", "A090D_alfa");
  if (sender.dataset.update === "A090D_alfa") {
    el.innerHTML = bitty.time();
  }
}
