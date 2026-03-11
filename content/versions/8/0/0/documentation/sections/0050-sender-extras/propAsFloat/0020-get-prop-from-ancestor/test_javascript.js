export const b = {};

export function signal_FE37C_v1(_, sender, el) {
  if (sender.propAsFloat("key") === 2.2) {
    el.innerHTML = b.time();
  }
}
