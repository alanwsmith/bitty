export const bitty = {};

export function signal_311D5_alfa(_, sender, el) {
  sender.setProp("update", "311D5_alfa");
  if (sender.dataset.update === "311D5_alfa") {
    el.innerHTML = bitty.time();
  }
}
