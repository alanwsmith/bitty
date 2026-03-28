export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.propInt("key") === undefined) {
    el.innerHTML = b.time();
  }
}
