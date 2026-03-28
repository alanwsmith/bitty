export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.ariaAsFloat("label") === 1.1) {
    el.innerHTML = b.time();
  }
}
