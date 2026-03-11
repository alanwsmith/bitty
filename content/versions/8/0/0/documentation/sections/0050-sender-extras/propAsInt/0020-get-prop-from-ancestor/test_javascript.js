export const b = {};

export function signal_05622_v1(_, sender, el) {
  if (sender.propAsInt("key") === 200) {
    el.innerHTML = b.time();
  }
}
