export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.propFloat("key") === 1.1) {
    el.innerHTML = b.time();
  }
}
