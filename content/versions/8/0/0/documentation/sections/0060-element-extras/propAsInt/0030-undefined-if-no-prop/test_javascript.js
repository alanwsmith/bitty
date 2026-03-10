export const b = {};

export function signal_B7ED7_v1(_, __, el) {
  if (el.propAsInt("key") === undefined) {
    el.innerHTML = b.time();
  }
}
