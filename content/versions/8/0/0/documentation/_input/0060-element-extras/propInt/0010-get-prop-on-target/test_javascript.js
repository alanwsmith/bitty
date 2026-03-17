export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.propInt("key") === 100) {
    el.innerHTML = b.time();
  }
}
