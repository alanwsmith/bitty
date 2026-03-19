export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.ariaInt("label") === 1) {
    el.innerHTML = b.time();
  }
}
