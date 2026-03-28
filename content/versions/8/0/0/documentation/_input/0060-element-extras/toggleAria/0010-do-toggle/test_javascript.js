export const b = {};

export function $_SIGNAL_(_, __, el) {
  el.toggleAria("label");
  if (el.ariaAsBool("label") === false) {
    el.innerHTML = b.time();
  }
}
