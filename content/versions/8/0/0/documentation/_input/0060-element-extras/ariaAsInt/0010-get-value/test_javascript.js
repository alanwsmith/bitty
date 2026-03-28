export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.ariaAsInt("valuenow") === 10) {
    el.innerHTML = b.time();
  }
}
