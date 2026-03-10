export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.propAsInt("key") === undefined) {
    el.innerHTML = b.time();
  }
}
