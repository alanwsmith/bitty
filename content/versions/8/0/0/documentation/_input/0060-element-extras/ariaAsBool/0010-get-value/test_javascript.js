export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.ariaAsBool("label") === false) {
    el.innerHTML = b.time();
  }
}
