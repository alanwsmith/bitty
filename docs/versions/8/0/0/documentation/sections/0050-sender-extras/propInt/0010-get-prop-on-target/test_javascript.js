export const b = {};

export function signal_ACB8B_v1(_, sender, el) {
  if (sender.propInt("key") === 100) {
    el.innerHTML = b.time();
  }
}
