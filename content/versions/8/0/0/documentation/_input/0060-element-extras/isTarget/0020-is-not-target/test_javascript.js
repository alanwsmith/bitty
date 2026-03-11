export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.isTarget === false) {
    el.innerHTML = b.time();
  }
}
