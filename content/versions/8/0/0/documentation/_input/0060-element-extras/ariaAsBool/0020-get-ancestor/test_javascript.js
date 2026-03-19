export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.ariaBool("label") === true) {
    el.innerHTML = b.time();
  }
}
