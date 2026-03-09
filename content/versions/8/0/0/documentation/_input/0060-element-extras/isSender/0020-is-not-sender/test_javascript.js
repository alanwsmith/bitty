export const bitty = {};

export function $_SIGNAL_(_, __, el) {
  if (el.isSender === false) {
    el.innerHTML = bitty.time();
  }
}
