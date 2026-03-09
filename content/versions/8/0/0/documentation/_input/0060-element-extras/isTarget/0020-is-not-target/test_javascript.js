export const bitty = {};

export function $_SIGNAL_(_, __, el) {
  if (el.isTarget === false) {
    el.innerHTML = bitty.time();
  }
}
