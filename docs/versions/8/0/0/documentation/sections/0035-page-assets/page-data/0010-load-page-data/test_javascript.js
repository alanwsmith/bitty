export const bitty = {};

export function signal_A4B07_v1(ev, sender, el) {
  const checkValue = bitty.data["data_signal_A4B07_v1"].key_signal_A4B07_v1;
  if (checkValue === "value_signal_A4B07_v1") {
    el.innerHTML = bitty.time();
  }
}
