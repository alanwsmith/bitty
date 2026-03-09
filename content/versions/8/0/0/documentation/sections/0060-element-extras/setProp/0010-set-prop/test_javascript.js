export const bitty = {};

export function signal_A090D_alfa(_, __, el) {
  el.setProp("update", "A090D_alfa");
  if (el.dataset.update === "A090D_alfa") {
    el.innerHTML = bitty.time();
  }
}
