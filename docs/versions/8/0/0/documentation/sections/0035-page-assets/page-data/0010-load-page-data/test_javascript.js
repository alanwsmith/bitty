export const b = {};

export function signal_A4B07_v1(ev, sender, el) {
  const checkValue = b.data["data_signal_A4B07_v1"].key_signal_A4B07_v1;
  if (checkValue === "value_signal_A4B07_v1") {
    el.innerHTML = b.time();
  }
}
