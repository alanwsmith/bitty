export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.propAsInt("key") === 200) {
    el.innerHTML = b.time();
  }
}
