export const bitty = {};

export function signal_B7ED7_v1(_, __, el) {
  if (el.propAsInt("key") === undefined) {
    el.innerHTML = bitty.time();
  }
}
