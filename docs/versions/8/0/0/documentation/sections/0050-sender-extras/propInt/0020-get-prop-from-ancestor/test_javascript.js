export const b = {};

export function signal_8C216_v1(_, sender, el) {
  if (sender.propInt("key") === 200) {
    el.innerHTML = b.time();
  }
}
