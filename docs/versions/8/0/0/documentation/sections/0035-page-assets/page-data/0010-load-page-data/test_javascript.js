export const bitty = {};

export function signal_A4B07_alfa(ev, sender, el) {
  if (bitty.data["data_signal_A4B07_alfa"].key_signal_A4B07_alfa === "value_signal_A4B07_alfa") {
    el.innerHTML = bitty.time();
  }
}
