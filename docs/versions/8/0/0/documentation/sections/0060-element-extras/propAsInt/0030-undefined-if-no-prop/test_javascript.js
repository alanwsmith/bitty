export const bitty = {};

export function signal_B7ED7_alfa(_, __, el) {
  if (el.propAsInt("key") === undefined) {
    el.innerHTML = bitty.time();
  }
}
