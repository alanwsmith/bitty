export const bitty = {};

export function signal_311D5_v1(_, sender, el) {
  sender.setProp("update", "311D5_v1");
  if (sender.dataset.update === "311D5_v1") {
    el.innerHTML = bitty.time();
  }
}
