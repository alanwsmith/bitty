export const b = {};

export function signal_D7A8F_v1(_, sender, el) {
  if (sender.propInt("key") === undefined) {
    el.innerHTML = b.time();
  }
}
