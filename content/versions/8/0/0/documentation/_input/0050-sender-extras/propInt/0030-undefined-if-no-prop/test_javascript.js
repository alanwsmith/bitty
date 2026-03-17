export const b = {};

export function $_SIGNAL_(_, sender, el) {
  if (sender.propInt("key") === undefined) {
    el.innerHTML = b.time();
  }
}
