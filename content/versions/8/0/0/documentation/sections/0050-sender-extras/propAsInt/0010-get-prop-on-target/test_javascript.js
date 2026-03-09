export const bitty = {};

export function signal_2C52C_v1(_, sender, el) {
  if (sender.propAsInt("key") === 100) {
    el.innerHTML = bitty.time();
  }
}
