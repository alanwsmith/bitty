export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.ariaBool("label") === false) {
    el.innerHTML = b.time();
  }
}
