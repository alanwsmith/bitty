export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.ariaAsInt("label") === 1) {
    el.innerHTML = b.time();
  }
}
