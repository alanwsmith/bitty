export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.isSender === false) {
    el.innerHTML = b.time();
  }
}
