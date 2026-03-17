export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.propAsInt("key") === 100) {
    el.innerHTML = b.time();
  }
}
