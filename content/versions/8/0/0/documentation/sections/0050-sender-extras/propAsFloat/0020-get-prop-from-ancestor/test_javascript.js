export const bitty = {};

export function signal_FE37C_alfa(_, sender, el) {
  if (sender.propAsFloat("key") === 2.2) {
    el.innerHTML = bitty.time();
  }
}
