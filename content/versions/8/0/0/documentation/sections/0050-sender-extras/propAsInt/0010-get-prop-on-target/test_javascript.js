export const bitty = {};

export function signal_2C52C_alfa(_, sender, el) {
  if (sender.propAsInt("key") === 100) {
    el.innerHTML = bitty.time();
  }
}
