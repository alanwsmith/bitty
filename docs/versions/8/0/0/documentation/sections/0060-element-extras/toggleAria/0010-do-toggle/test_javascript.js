export const b = {};

export function signal_25E12_v1(_, __, el) {
  el.toggleAria("label");
  if (el.ariaAsBool("label") === false) {
    el.innerHTML = b.time();
  }
}
