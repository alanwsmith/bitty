export const b = {};

export function $_SIGNAL_(_, __, el) {
  if (el.ariaBool("hidden") === false) {
    el.innerHTML = b.time();
  }
}
